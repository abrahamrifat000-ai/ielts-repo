const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Safely load .env file into process.env
(function loadEnv() {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    try {
      if (typeof process.loadEnvFile === 'function') {
        process.loadEnvFile(envPath);
      } else {
        const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) continue;
          const idx = trimmed.indexOf('=');
          if (idx !== -1) {
            const key = trimmed.slice(0, idx).trim();
            let val = trimmed.slice(idx + 1).trim();
            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
              val = val.slice(1, -1);
            }
            if (!process.env[key]) {
              process.env[key] = val;
            }
          }
        }
      }
    } catch (e) {
      console.warn('[Env] Warning loading .env:', e.message);
    }
  }
})();

const PORT = parseInt(process.env.PORT || '8080', 10);
const SUPABASE_CONFIG = {
  url: process.env.SUPABASE_URL || 'https://ipumroknrrqhzvxtwxrz.supabase.co',
  secretKey: process.env.SUPABASE_SECRET_KEY || ''
};

function forwardCommentToSupabase(comment) {
  try {
    const payload = JSON.stringify({
      name: comment.name,
      email: comment.email,
      rating: comment.rating,
      text: comment.text,
      color: comment.color
    });
    const req = https.request(`${SUPABASE_CONFIG.url}/rest/v1/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_CONFIG.secretKey,
        'Authorization': `Bearer ${SUPABASE_CONFIG.secretKey}`,
        'Prefer': 'return=minimal'
      }
    }, () => {});
    req.on('error', () => {});
    req.write(payload);
    req.end();
  } catch (e) {}
}
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  // Handle /api/comments
  if (reqPath === '/api/comments') {
    const commentsFile = path.join(__dirname, 'assets', 'data', 'community_comments.json');
    if (req.method === 'GET') {
      let data = [];
      if (fs.existsSync(commentsFile)) {
        try { data = JSON.parse(fs.readFileSync(commentsFile, 'utf8')); } catch(e){}
      }
      res.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(data));
      return;
    } else if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const newComment = JSON.parse(body);
          let comments = [];
          if (fs.existsSync(commentsFile)) {
            try { comments = JSON.parse(fs.readFileSync(commentsFile, 'utf8')); } catch(e){}
          }
          comments.unshift(newComment);
          fs.writeFileSync(commentsFile, JSON.stringify(comments, null, 2), 'utf8');
          forwardCommentToSupabase(newComment);
          res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          });
          res.end(JSON.stringify({ success: true, count: comments.length, comments: comments }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
          res.end(JSON.stringify({ error: err.message }));
        }
      });
      return;
    }
  }

  // Handle /api/reach
  if (reqPath === '/api/reach') {
    const reachFile = path.join(__dirname, 'assets', 'data', 'reach_counter.json');
    let reachData = { count: 14580 };
    if (fs.existsSync(reachFile)) {
      try { reachData = JSON.parse(fs.readFileSync(reachFile, 'utf8')); } catch(e){}
    }
    if (req.method === 'POST') {
      reachData.count = (reachData.count || 14580) + 1;
      reachData.lastUpdated = new Date().toISOString();
      fs.writeFileSync(reachFile, JSON.stringify(reachData, null, 2), 'utf8');
    }
    res.writeHead(200, {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    });
    res.end(JSON.stringify(reachData));
    return;
  }

  if (reqPath === '/') reqPath = '/index.html';

  let filePath = path.join(__dirname, reqPath);

  // Security check to ensure requested file is inside root
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Access Denied');
    return;
  }

  // If path is a directory, look for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Network access at http://127.0.0.1:${PORT}/`);
});

