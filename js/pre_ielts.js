(function () {
  "use strict";

  var SCHOOL = "IELTS Warrior";
  var rawDays = (typeof window !== "undefined" && window.PI_DAYS) || (typeof PI_DAYS !== "undefined" ? PI_DAYS : []);
  var DAYS = rawDays.slice().sort(function (a, b) { return a.n - b.n; });
  var WEEKS = (typeof window !== "undefined" && window.PI_WEEKS) || (typeof PI_WEEKS !== "undefined" ? PI_WEEKS : []);
  var byN = {};
  DAYS.forEach(function (d) { byN[d.n] = d; });
  var SKILLS = { grammar: "Grammar", vocabulary: "Vocabulary", pronunciation: "Pronunciation", reading: "Reading", listening: "Listening", writing: "Writing", speaking: "Speaking", ielts: "IELTS", review: "Test" };
  var SKILL_ORDER = ["grammar", "vocabulary", "pronunciation", "reading", "listening", "writing", "speaking", "ielts", "review"];
  var CHANNELS = [
    ["BBC Learning English", "Grammar, vocabulary and the 6 Minute English series."],
    ["English with Lucy", "Clear British English: grammar, vocabulary, pronunciation."],
    ["engVid", "Hundreds of short grammar lessons from different teachers."],
    ["Oxford Online English", "Structured lessons for speaking, writing and grammar."],
    ["10 Minute School English", "English grammar and spoken English explained in Bangla."],
    ["Munzereen Shahid", "Spoken English and common mistakes, explained in Bangla."],
    ["Rachel's English", "Detailed pronunciation training, sound by sound."],
    ["mmmEnglish", "Speaking confidence, pronunciation and natural phrases."],
    ["VOA Learning English", "Slow, clear news reports for daily listening practice."],
    ["TED-Ed", "Short animated talks with subtitles on every subject."],
    ["IELTS Liz", "Free IELTS lessons and tips for your next stage."],
    ["E2 IELTS", "Strategies for each part of the IELTS test."]
  ];
  var COURSE_DEFAULT = {
    "public": true, open: true,
    navLabel: "Join the course",
    heading: "Join the upcoming IELTS Course",
    intro: "Prefer to learn with the best IELTS Guideline in Bangladesh? Send a registration request and you will get a reply on WhatsApp.",
    status: "Registration open",
    title: "Complete IELTS Course",
    summary: "The best-in-the-market pre-recorded IELTS course, offering daily study guidelines and classes covering all modules.",
    start: "12th December", duration: "2 Months", schedule: "Weekly 6 days; 8.30pm", mode: "Online pre-recorded", fee: "1000tk", seats: "Quick response within 1 hour", deadline: "WhatsApp",
    teacher: "IELTS Warrior", teacherBio: "",
    highlights: ["৫ টি লিসেনিং ক্লাস", "২৭ টি রিডিং ক্লাস", "১৮ টি রাইটিং ক্লাস", "৮ টি স্পিকিং ক্লাস", "প্রতিদিন HW, Vocabulary Topic, Shadowboxing Video, Documentary"],
    note: "এটা অলস আর ফাকিবাজদের জন্য না। দিনে ৪-৫ ঘন্টা সময় দিতে না পারলে আমার কোর্সে ভর্তি হতে হবে না।",
    formTitle: "Registration request",
    buttonLabel: "Send request on WhatsApp",
    whatsapp: "01881598441",
    videos: {}, rev: 1794797462
  };

  /* ---------- helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }
  function fmt(s) { return esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>"); }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function yt(q) { return "https://www.youtube.com/results?search_query=" + encodeURIComponent(q); }
  function dkey(x) { return x.getFullYear() + "-" + ("0" + (x.getMonth() + 1)).slice(-2) + "-" + ("0" + x.getDate()).slice(-2); }
  function reduced() { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } }
  function shuffle(n, keep) { var a = []; for (var i = 0; i < n; i++) a.push(i); if (keep) return a; for (var j = n - 1; j > 0; j--) { var k = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[k]; a[k] = t; } return a; }
  function pick(arr, n) { return shuffle(arr.length).slice(0, n).map(function (i) { return arr[i]; }); }
  function words(s) { return String(s).trim().split(/\s+/).filter(Boolean).length; }
  var toastT;
  function toast(msg) { var t = $("toast"); if (!t) return; t.textContent = msg; t.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(function () { t.classList.remove("on"); }, 3200); }

  /* ---------- progress store (this browser) ---------- */
  var KEY = "preielts.progress.v1";
  var S = { tasks: {}, quiz: {}, notes: {}, act: [], name: "", miss: {} };
  var storageOK = true;
  function applyState(o) {
    ["tasks", "quiz", "notes", "miss"].forEach(function (k) { S[k] = (o && o[k] && typeof o[k] === "object" && !Array.isArray(o[k])) ? o[k] : {}; });
    S.act = (o && Array.isArray(o.act)) ? o.act.filter(function (x) { return typeof x === "string"; }) : [];
    S.name = (o && typeof o.name === "string") ? o.name.slice(0, 60) : "";
  }
  function loadState() { try { var r = window.localStorage.getItem(KEY); if (r) applyState(JSON.parse(r)); } catch (e) { storageOK = false; } }
  function save() { try { window.localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { storageOK = false; } }
  function touch() { var t = dkey(new Date()); if (S.act.indexOf(t) < 0) { S.act.push(t); S.act.sort(); } }
  function units(d) { return d.tasks.length + (d.prod ? 1 : 0) + 1; }
  function passMark(d) { return Math.ceil(d.quiz.length * (d.pass || 0.6)); }
  function quizPassed(d) { var q = S.quiz[d.n]; return !!(q && q.best >= passMark(d)); }
  function doneUnits(d) { var a = S.tasks[d.n] || [], c = 0, n = d.tasks.length + (d.prod ? 1 : 0); for (var i = 0; i < n; i++) if (a[i]) c++; return c + (quizPassed(d) ? 1 : 0); }
  function dayPct(d) { return Math.round(doneUnits(d) / units(d) * 100); }
  function isDone(d) { return doneUnits(d) >= units(d); }
  function nextDay() { for (var i = 0; i < DAYS.length; i++) if (!isDone(DAYS[i])) return DAYS[i]; return null; }
  function doneCount() { return DAYS.filter(isDone).length; }
  function overallPct() { var a = 0, b = 0; DAYS.forEach(function (d) { a += doneUnits(d); b += units(d); }); return Math.round(a / b * 100); }
  function quizAvg() { var s = 0, c = 0; DAYS.forEach(function (d) { var q = S.quiz[d.n]; if (q && q.total) { s += q.best / q.total; c++; } }); return c ? Math.round(s / c * 100) : null; }
  function streak() {
    if (!S.act.length) return 0;
    var set = {}; S.act.forEach(function (x) { set[x] = 1; });
    var d = new Date(), n = 0;
    if (!set[dkey(d)]) d.setDate(d.getDate() - 1);
    while (set[dkey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function weekDays(w) { return DAYS.filter(function (d) { return Math.ceil(d.n / 6) === w; }); }
  function missList() {
    var out = [];
    Object.keys(S.miss).forEach(function (k) { var p = k.split(":"), d = byN[+p[0]], i = +p[1]; if (d && !d.read && d.quiz[i]) out.push({ d: d, i: i }); });
    return out;
  }

  /* ---------- server API (api.php on the hosting) ---------- */
  var API = { ok: false, checked: false, setup: false, admin: false, csrf: null };
  var PREVIEW_KEY = "mis.course.preview";
  var previewAdmin = false;
  var course = normCourse(null);
  function normCourse(o) {
    var c = {};
    Object.keys(COURSE_DEFAULT).forEach(function (k) { c[k] = COURSE_DEFAULT[k]; });
    if (o && typeof o === "object") Object.keys(COURSE_DEFAULT).forEach(function (k) { if (o[k] != null && typeof o[k] === typeof COURSE_DEFAULT[k]) c[k] = o[k]; });
    c.highlights = Array.isArray(c.highlights) ? c.highlights.filter(function (x) { return typeof x === "string"; }) : [];
    if (!c.videos || typeof c.videos !== "object" || Array.isArray(c.videos)) c.videos = {};
    return c;
  }
  function call(action, payload, keepalive) {
    if (typeof window === "undefined" || !window.fetch) return Promise.reject(new Error("noapi"));
    var opt = { method: payload ? "POST" : "GET", credentials: "same-origin", cache: "no-store", headers: { "Accept": "application/json" } };
    if (payload) { opt.headers["Content-Type"] = "application/json"; if (API.csrf) opt.headers["X-CSRF"] = API.csrf; opt.body = JSON.stringify(payload); if (keepalive) opt.keepalive = true; }
    return window.fetch("api.php?a=" + action, opt).then(function (r) {
      return r.text().then(function (t) {
        var j = null; try { j = JSON.parse(t); } catch (e) { j = null; }
        if (!j || j.api !== 1) { var er = new Error("noapi"); er.noapi = true; throw er; }
        if (r.status === 401) { API.admin = false; API.csrf = null; }
        return j;
      });
    });
  }
  function refreshState() {
    return call("state").then(function (j) {
      API.ok = true; API.setup = !!j.setup; API.admin = !!j.admin; API.csrf = j.csrf || null; course = normCourse(j.course);
    }, function () {
      API.ok = false;
      try { var r = window.localStorage.getItem(PREVIEW_KEY); if (r) course = normCourse(JSON.parse(r)); } catch (e) { /* ignore */ }
    }).then(function () { API.checked = true; afterState(); });
  }
  function adminView() { return API.ok ? API.admin : previewAdmin; }
  function showCourse() { return !!course["public"] || adminView(); }
  function afterState() {
    var nav = $("nav-course"); if (nav) { nav.hidden = true; }
    var slot = $("course-slot"); if (slot) slot.innerHTML = "";
    if (view === "day" && cur && course.videos[cur.n] && !dayTouched) renderDay(cur);
    if ($("admin-body")) adminBody();
  }
  function waNumber() { var n = String(course.whatsapp || "").replace(/\D/g, ""); if (/^01\d{9}$/.test(n)) n = "88" + n; return n; }

  /* ---------- speech and recording ---------- */
  function speak(text) {
    try {
      var sy = window.speechSynthesis;
      if (!sy || typeof window.SpeechSynthesisUtterance === "undefined") return false;
      sy.cancel();
      var u = new window.SpeechSynthesisUtterance(text);
      u.lang = "en-GB"; u.rate = 0.85;
      var vs = sy.getVoices() || [];
      var v = vs.filter(function (x) { return /^en[-_]GB/i.test(x.lang); })[0] || vs.filter(function (x) { return /^en/i.test(x.lang); })[0];
      if (v) u.voice = v;
      sy.speak(u);
      return true;
    } catch (e) { return false; }
  }
  var rec = { mr: null, chunks: [], url: null, stream: null, t0: 0, timer: null };
  function recSupported() { return !window.claude && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder); }
  function recHTML() {
    if (!recSupported()) return "";
    return '<div class="rec"><b>Voice recorder</b><button class="btn btn-line btn-sm" type="button" id="rec-btn" data-act="rec">Start recording</button><span id="rec-state" class="count">Record yourself, then listen and compare.</span><audio id="rec-audio" controls hidden></audio></div>';
  }
  function recStop(silent) {
    clearInterval(rec.timer); rec.timer = null;
    if (rec.mr && rec.mr.state !== "inactive") { if (silent) rec.mr.onstop = null; try { rec.mr.stop(); } catch (e) { /* ignore */ } }
    if (rec.stream) { rec.stream.getTracks().forEach(function (t) { t.stop(); }); rec.stream = null; }
    rec.mr = null;
  }
  function recToggle() {
    var btn = $("rec-btn"), st = $("rec-state"), au = $("rec-audio");
    if (!btn) return;
    if (rec.mr) { recStop(false); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
      rec.stream = stream; rec.chunks = [];
      var mr = new window.MediaRecorder(stream); rec.mr = mr;
      mr.ondataavailable = function (e) { if (e.data && e.data.size) rec.chunks.push(e.data); };
      mr.onstop = function () {
        if (rec.url) { try { URL.revokeObjectURL(rec.url); } catch (e) { /* ignore */ } }
        rec.url = URL.createObjectURL(new Blob(rec.chunks, { type: mr.mimeType || "audio/webm" }));
        var a = $("rec-audio"), b = $("rec-btn"), s = $("rec-state");
        if (a) { a.src = rec.url; a.hidden = false; }
        if (b) b.textContent = "Record again";
        if (s) s.textContent = "Recorded. Press play to listen. The recording stays on your device.";
      };
      mr.start(); rec.t0 = Date.now();
      btn.textContent = "Stop recording"; if (au) au.hidden = true;
      st.innerHTML = '<span class="dot" style="display:inline-block;vertical-align:middle;margin-right:6px"></span>Recording 0:00';
      rec.timer = setInterval(function () { var s = Math.floor((Date.now() - rec.t0) / 1000), e2 = $("rec-state"); if (e2 && rec.mr) e2.lastChild.textContent = "Recording " + Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); if (s >= 300) recStop(false); }, 500);
    }, function () { st.textContent = "The microphone is blocked. Allow microphone access in your browser, or use your phone's recorder app."; });
  }

  /* ---------- shell ---------- */
  var view = "";
  function updateBackBtn() {
    var btn = document.querySelector('.top-back-btn');
    if (!btn) return;
    var span = btn.querySelector('span') || btn;
    if (view && view !== "home") {
      span.innerHTML = '&larr; Back to Programme';
      btn.setAttribute('title', 'Return to 60-Day Programme Overview');
    } else {
      span.innerHTML = '&larr; Back to Home';
      btn.setAttribute('title', 'Return to IELTS Warrior Home');
    }
  }
  function handleBack() {
    if (view && view !== "home") {
      renderHome();
      updateBackBtn();
      window.scrollTo(0, 0);
      return;
    }
    var videoView = document.getElementById('grammar-video-resources-view');
    if (videoView && videoView.style.display !== 'none') {
      if (window.ieltsApp && window.ieltsApp.returnToGrammarTopics) {
        window.ieltsApp.returnToGrammarTopics();
      }
      return;
    }
    if (window.ieltsApp && window.ieltsApp.showHomeView) {
      window.ieltsApp.showHomeView();
    } else {
      window.location.hash = '';
    }
  }
  function shell() {
    ($("preielts-app") || $("app")).innerHTML =
      '<header class="top" id="top"><div class="wrap top-in">' +
      '<button class="top-back-btn" type="button" onclick="window.PreIelts.handleBack()" aria-label="Back"><span>&larr; Back to Home</span></button>' +
      '<button class="menu-btn" id="menu-btn" type="button" aria-label="Open menu" aria-expanded="false"><span></span></button>' +
      '<nav class="nav" aria-label="Main"><a href="#programme" class="nav-link">Programme (60 Days)</a><a href="#progress" class="nav-link">My progress</a><a href="#videos" class="nav-link">Video channels</a><a href="javascript:void(0)" onclick="if(window.ieltsApp&&window.ieltsApp.showGrammarVideoResources){window.ieltsApp.showGrammarVideoResources();}" class="nav-link">Video Vault &amp; PDFs</a></nav>' +
      '<a class="btn" id="top-cta" href="#day-1">Start with Day 1</a>' +
      '</div></header>' +
      '<main id="view"></main>' +
      '<div id="modal-root"></div><div class="toast" id="toast" role="status" aria-live="polite"></div>';
  }
  function ctaLabel(short) {
    var nx = nextDay(), started = overallPct() > 0;
    if (!nx) return { href: "#progress", text: short ? "Certificate" : "View your certificate" };
    return { href: "#day-" + nx.n, text: (started ? "Continue" : "Start") + (short ? '<span class="long"> with</span> Day ' + nx.n : " with Day " + nx.n) };
  }
  function refreshCta() { var a = $("top-cta"); if (!a) return; var c = ctaLabel(false); a.setAttribute("href", c.href); a.innerHTML = "<span>" + c.text + "</span>"; }

  /* ---------- quiz engine (day tests, mistake practice, home sample) ---------- */
  var quiz = null;
  function mkQuiz(mode, items) { quiz = { mode: mode, items: items, ans: [], order: items.map(function (it) { var q = it.d.quiz[it.i]; return shuffle(q[1].length, q[1][0] === "True"); }), shown: {} }; }
  function qOf(k) { var it = quiz.items[k]; return it.d.quiz[it.i]; }
  function quizTally() { var done = 0, right = 0; for (var k = 0; k < quiz.items.length; k++) if (quiz.ans[k] != null) { done++; if (quiz.ans[k] === qOf(k)[2]) right++; } return { done: done, right: right, n: quiz.items.length }; }
  function questionHTML(k) {
    var q = qOf(k), a = quiz.ans[k], answered = a != null, ord = quiz.order[k];
    var long = q[1].some(function (o) { return o.length > 34; });
    var h = '<div class="q" id="q-' + k + '">' + (quiz.mode === "review" ? '<span class="q-from">From Day ' + quiz.items[k].d.n + ': ' + esc(quiz.items[k].d.t) + '</span>' : "") +
      '<p class="q-t">' + (quiz.mode === "try" ? "<i></i>" : "<i>" + (k + 1) + ".</i>") + '<span>' + fmt(q[0]) + '</span></p>';
    if (q[4]) {
      h += '<div class="btn-row"><button class="chip" type="button" data-say="' + esc(q[4]) + '"><span class="play" aria-hidden="true"></span>Play the audio</button>' + (quiz.shown[k] ? "" : '<button class="btn btn-line btn-sm" type="button" data-act="q-text" data-i="' + k + '">No sound? Show the text</button>') + '</div>';
      if (quiz.shown[k]) h += '<p class="why">' + esc(q[4]) + '</p>';
    }
    h += '<div class="opts' + (long ? " long" : "") + (q[1].length === 3 ? " three" : "") + '">';
    ord.forEach(function (oi, pos) {
      var cls = "opt", mark = "ABCDEF".charAt(pos);
      if (answered) { if (oi === q[2]) { cls += " right"; mark = "&#10003;"; } else if (oi === a) { cls += " wrong"; mark = "&#10007;"; } }
      h += '<button type="button" class="' + cls + '" data-q="' + k + '" data-o="' + oi + '"' + (answered ? " disabled" : "") + '><span class="ob" aria-hidden="true">' + mark + '</span><span>' + fmt(q[1][oi]) + '</span></button>';
    });
    h += '</div>';
    if (answered) h += '<p class="why ' + (a === q[2] ? "ok" : "no") + '" role="status"><b>' + (a === q[2] ? "Correct." : "Not quite.") + '</b>' + fmt(q[3]) + '</p>';
    return h + '</div>';
  }
  function scoreHTML(d) {
    var t = quizTally(), n = t.n, rec2 = S.quiz[d.n];
    if (t.done < n) return rec2 ? '<p class="notice' + (quizPassed(d) ? " good" : "") + '">Your best score so far: ' + rec2.best + ' out of ' + n + (quizPassed(d) ? ". Passed." : ". You need " + passMark(d) + " to pass.") + '</p>' : '<p class="notice">Answer all ' + n + ' questions. You need ' + passMark(d) + ' correct to pass.</p>';
    var pass = t.right >= passMark(d);
    return '<div class="score' + (pass ? " pass" : "") + '"><span class="mark">' + t.right + '/' + n + '</span><p><b>' + (pass ? "Passed." : "Not passed yet.") + '</b> ' + (pass ? "Read the explanations for any question you missed, then move on." : "You need " + passMark(d) + " correct answers. Read the explanations, review the notes and try again.") + '</p><button class="btn ' + (pass ? "btn-line" : "") + '" type="button" data-act="quiz-retry">Try the test again</button></div>';
  }
  function answer(k, o) {
    if (!quiz || quiz.ans[k] != null) return;
    quiz.ans[k] = o;
    var it = quiz.items[k], q = qOf(k), right = o === q[2], mk = it.d.n + ":" + it.i;
    if (quiz.mode !== "try") { if (right) delete S.miss[mk]; else if (!it.d.read) S.miss[mk] = 1; }
    var el = $("q-" + k); if (el) el.outerHTML = questionHTML(k);
    var t = quizTally();
    if (quiz.mode === "day") {
      dayTouched = true;
      if (t.done === t.n) {
        var d = cur, was = isDone(d), r = S.quiz[d.n] || { best: 0, total: t.n, tries: 0 };
        r.total = t.n; r.tries = (r.tries || 0) + 1; r.last = t.right; if (t.right > r.best) r.best = t.right;
        S.quiz[d.n] = r; touch(); save();
        $("quiz-score").innerHTML = scoreHTML(d);
        updateDay(!was);
      } else save();
    } else if (quiz.mode === "review") {
      save();
      if (t.done === t.n) {
        var left = missList().length;
        $("review-end").innerHTML = '<div class="score' + (t.right === t.n ? " pass" : "") + '"><span class="mark">' + t.right + '/' + t.n + '</span><p><b>' + (left ? left + " still to master." : "All mistakes cleared.") + '</b> ' + (left ? "Questions you got wrong stay in your list until you answer them correctly." : "Come back after your next test.") + '</p>' + (left ? '<button class="btn" type="button" data-act="review-more">Practise more</button>' : '<a class="btn" href="#progress">Back to my progress</a>') + '</div>';
      }
    } else {
      var c = ctaLabel(false);
      $("try-after").innerHTML = '<div class="btn-row"><button class="btn btn-line btn-sm" type="button" data-act="try-next">Try another question</button><a class="btn btn-sm" href="' + c.href + '">' + c.text + '</a></div>';
    }
  }

  /* ---------- home ---------- */
  function bubble(d, nx, mini) {
    var p = dayPct(d);
    var cls = "bub" + (d.review ? " bub-test" : "") + (p >= 100 ? " is-done" : "") + (nx && nx.n === d.n ? " is-next" : "");
    if (mini) return '<span class="' + cls + '" style="--fill:' + p + '%" aria-hidden="true"></span>';
    return '<a class="' + cls + '" href="#day-' + d.n + '" style="--fill:' + p + '%" title="Day ' + d.n + ': ' + esc(d.t) + '" aria-label="Day ' + d.n + ', ' + esc(d.t) + ', ' + p + ' percent complete"><span>' + d.n + '</span></a>';
  }
  function sheetHTML() {
    var nx = nextDay(), h = '<div class="omr">';
    WEEKS.forEach(function (w) {
      h += '<div class="omr-row"><span class="omr-wk">Week ' + w.n + '</span><div class="omr-bubbles">';
      weekDays(w.n).forEach(function (d) { h += bubble(d, nx, false); });
      h += '</div></div>';
    });
    return h + '</div>';
  }
  function heroHTML() {
    var c = ctaLabel(false);
    return '<section class="hero"><div class="wrap hero-grid">' +
      '<div class="hero-copy"><h1>Fix your English first. IELTS comes after.</h1>' +
      '<p>' + esc(SCHOOL) + ' gives you a free 60-day programme that takes you from basic sentences to confident reading, listening, writing and speaking. Ten weeks, six days a week, about 50 minutes a day. Finish it and you are ready to start real IELTS preparation.</p>' +
      '<p class="bn">IELTS শুরু করার আগে ইংরেজির ভিত্তি মজবুত করুন। প্রতিদিন একটি পাঠ, অনুশীলন, ভিডিও এবং পরীক্ষা, সম্পূর্ণ বিনামূল্যে।</p>' +
      '<div class="btn-row"><a class="btn btn-inv" href="' + c.href + '">' + c.text + '</a><a class="btn btn-ghost" href="#programme">See the 60-day plan</a></div></div>' +
      '<div class="omr-card"><div class="omr-head"><h2>Your answer sheet</h2><span class="omr-count" id="omr-count">' + doneCount() + ' of 60 days filled</span>' +
      '<label class="omr-name" for="name-in">Name<input id="name-in" type="text" autocomplete="name" maxlength="60" placeholder="write your name here" value="' + esc(S.name) + '"></label></div>' +
      sheetHTML() +
      '<div class="omr-foot"><span class="key"><i></i>not started</span><span class="key"><i class="k-part"></i>in progress</span><span class="key"><i class="k-done"></i>complete</span><span class="key"><i class="k-next"></i>your next day</span><span class="key"><i class="k-test"></i>weekly test</span></div></div>' +
      '</div></section>';
  }
  function tryItem() {
    var pool = [];
    DAYS.forEach(function (d) { if (d.n <= 30 && !d.read && !d.review) d.quiz.forEach(function (q, i) { if (!q[4]) pool.push({ d: d, i: i }); }); });
    return pick(pool, 1);
  }
  function tryHTML() { mkQuiz("try", tryItem()); return '<div id="try-q">' + questionHTML(0) + '</div><div id="try-after"></div>'; }
  function howHTML() {
    var st = [["Learn", "Short notes, tables and the mistakes Bangla speakers make."], ["Watch", "Video lessons on the same topic, in English and in Bangla."], ["Collect words", "Six useful words with Bangla meanings and audio."], ["Warm up and practise", "Sentence building, word matching and notebook tasks."], ["Produce", "Write or record yourself, then compare with a model answer."], ["Take the test", "A short quiz with an explanation for every answer."]];
    return '<section class="band band-tint"><div class="wrap"><h2>How each day works</h2><p class="lede">Every day follows the same six steps, so you always know what to do next. Tick each step and the day fills in on your answer sheet.</p><div class="how-grid"><ol class="steps">' +
      st.map(function (s) { return '<li><b>' + s[0] + '</b><span>' + s[1] + '</span></li>'; }).join("") + '</ol>' +
      '<div class="try"><h3>Try one question now</h3>' + tryHTML() + '</div></div></div></section>';
  }
  function programmeHTML() {
    var nx = nextDay(), openW = nx ? Math.ceil(nx.n / 6) : 1;
    var h = '<section class="band" id="programme"><div class="wrap"><h2>The 60-day programme</h2><p class="lede">Follow the days in order. Each week ends with a review and a test. You need 60% to pass a weekly test and 70% to pass the final one.</p><div class="weeks">';
    WEEKS.forEach(function (w) {
      var ds = weekDays(w.n), dn = ds.filter(isDone).length;
      h += '<details class="week"' + (w.n === openW ? " open" : "") + '><summary><span class="wk-n">Week ' + w.n + '</span><span class="wk-t"><b>' + esc(w.t) + '</b><span>' + esc(w.d) + '</span></span><span class="wk-p">' + dn + ' / ' + ds.length + '</span><span class="wk-c" aria-hidden="true"></span></summary><ul class="day-list">';
      ds.forEach(function (d) { h += '<li><a href="#day-' + d.n + '"><span class="dl-n">' + bubble(d, nx, true) + 'Day ' + d.n + '</span><span class="dl-t">' + esc(d.t) + '</span><span class="tag">' + SKILLS[d.s] + '</span></a></li>'; });
      h += '</ul></details>';
    });
    return h + '</div></div></section>';
  }
  function progressHTML() {
    var qa = quizAvg(), all = doneCount() === DAYS.length, ml = missList().length;
    var h = '<section class="band band-tint" id="progress"><div class="wrap"><h2>My progress</h2><p class="lede">Your ticks, scores and written answers are saved in this browser on this device.' + (storageOK ? "" : " This browser is blocking storage, so progress will be lost when you close the page.") + '</p>' +
      '<div class="stats"><div class="stat"><b>' + doneCount() + '<small> / 60</small></b><span>days completed</span></div><div class="stat"><b>' + overallPct() + '%</b><span>of all steps done</span></div><div class="stat"><b>' + (qa == null ? "&ndash;" : qa + "%") + '</b><span>average test score</span></div><div class="stat"><b>' + streak() + '</b><span>day streak</span></div></div>' +
      '<div class="revise"><a href="#flashcards"><b>Revise my words</b><span>Flashcards from the days you have studied, with audio and Bangla meanings.</span></a>' +
      '<a href="#mistakes"><b>Practise my mistakes</b><span>' + (ml ? ml + " question" + (ml === 1 ? "" : "s") + " you answered wrong. Try them again until they are gone." : "Questions you answer wrong in a test are collected here for another try.") + '</span></a></div>' +
      '<div class="prog-grid"><div><h3>Progress by skill</h3>';
    SKILL_ORDER.forEach(function (k) {
      var ds = DAYS.filter(function (d) { return d.s === k; }); if (!ds.length) return;
      var dn = ds.filter(isDone).length, p = Math.round(dn / ds.length * 100);
      h += '<div class="skill-row"><b>' + (k === "review" ? "Weekly tests" : SKILLS[k]) + '</b><div class="bar" role="img" aria-label="' + p + ' percent"><i style="width:' + p + '%"></i></div><span>' + dn + ' / ' + ds.length + '</span></div>';
    });
    h += '</div><div>';
    if (all) {
      var last = S.act.length ? new Date(S.act[S.act.length - 1] + "T12:00:00") : new Date(), ds2;
      try { ds2 = last.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { ds2 = S.act[S.act.length - 1] || ""; }
      h += '<div class="cert"><span class="cert-school">' + esc(SCHOOL) + '</span><small>Certificate of completion</small><span class="cert-name">' + esc(S.name || "Your name") + '</span><span>has completed all 60 days of the Pre-IELTS foundation programme and passed the final test.</span><small>' + esc(ds2) + '</small></div><div class="btn-row" style="margin-bottom:16px"><button class="btn btn-line btn-sm" type="button" data-act="print">Print certificate</button>' + (S.name ? "" : '<span class="locked">Write your name on the answer sheet at the top of the page to add it here.</span>') + '</div>';
    } else {
      h += '<div class="panel"><h3>Certificate</h3><p>Complete all 60 days and pass the final test to unlock your certificate. You have ' + (DAYS.length - doneCount()) + ' days to go.</p></div>';
    }
    h += '<div class="panel"><h3>Move progress to another device</h3><p>Create a backup code here, then paste it on your other phone or computer.</p><div class="btn-row"><button class="btn btn-line btn-sm" type="button" data-act="backup">Create backup code</button><button class="btn btn-line btn-sm" type="button" data-act="restore-open">Restore from a code</button></div><div id="backup-out"></div></div>' +
      '<div class="panel"><h3>Start again</h3><p>Delete all ticks, scores and written answers on this device.</p><div class="btn-row" id="reset-row"><button class="btn btn-line btn-sm" type="button" data-act="reset-ask">Reset my progress</button></div></div>' +
      '</div></div></div></section>';
    return h;
  }
  function videosHTML() {
    return '<section class="band" id="videos"><div class="wrap"><h2>Video channels worth following</h2><p class="lede">Every day in the programme links to video lessons on that day\'s topic. These channels are reliable places to keep learning. Each link opens the channel search on YouTube.</p><div class="ch-grid">' +
      CHANNELS.map(function (c) { return '<a class="ch" target="_blank" rel="noopener noreferrer" href="' + esc(yt(c[0]) + "&sp=EgIQAg%3D%3D") + '"><b>' + esc(c[0]) + '</b><span>' + esc(c[1]) + '</span></a>'; }).join("") + '</div></div></section>';
  }
  function fact(k, v) { return v ? '<div><dt>' + k + '</dt><dd>' + esc(v) + '</dd></div>' : ""; }
  function courseHTML() {
    return "";
  }
  function renderHome() {
    recStop(true); view = "home"; cur = null;
    $("view").innerHTML = heroHTML() + howHTML() + programmeHTML() + progressHTML() + videosHTML();
    updateBackBtn();
    refreshCta();
  }

  /* ---------- registration ---------- */
  function regVal(id) { var e = $(id); return e ? String(e.value || "").trim() : ""; }
  function regMessage() {
    var L = ["New registration request", "Course: " + course.title, "Name: " + regVal("reg-name"), "Mobile: " + regVal("reg-phone")];
    if (regVal("reg-email")) L.push("Email: " + regVal("reg-email"));
    if (regVal("reg-level")) L.push("Study or work: " + regVal("reg-level"));
    L.push("Preferred time: " + regVal("reg-time"));
    if (regVal("reg-goal")) L.push("Reason for IELTS: " + regVal("reg-goal"));
    L.push("Progress on the site: " + doneCount() + " of 60 days");
    if (regVal("reg-note")) L.push("Message: " + regVal("reg-note"));
    L.push("Sent from the " + SCHOOL + " website");
    return L.join("\n");
  }
  function regValidate() {
    var ok = true, first = null;
    function chk(id, bad, msg) { var el = $(id), er = $(id + "-e"); if (!el) return; if (bad) { ok = false; el.classList.add("bad"); if (er) er.textContent = msg; if (!first) first = el; } else { el.classList.remove("bad"); if (er) er.textContent = ""; } }
    var p = regVal("reg-phone").replace(/[\s-]/g, ""), e = regVal("reg-email");
    chk("reg-name", regVal("reg-name").length < 3, "Enter your full name.");
    chk("reg-phone", !/^(?:\+?88)?01[3-9]\d{8}$/.test(p), "Enter a valid Bangladeshi mobile number, for example 01712345678.");
    chk("reg-email", e && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e), "This email address does not look right.");
    chk("reg-level", !regVal("reg-level"), "Choose your current study or work.");
    if (first) first.focus();
    return ok;
  }
  function regHref() { var a = $("reg-send"); if (a) a.setAttribute("href", "https://wa.me/" + waNumber() + "?text=" + encodeURIComponent(regMessage())); }
  function regSent() {
    var box = $("reg-after"); if (!box) return;
    box.innerHTML = '<div class="wa-box" role="status"><b>WhatsApp should now be open with your request.</b><span>Press Send in WhatsApp to finish. If WhatsApp did not open, copy the message below and send it to <b>' + esc(course.whatsapp) + '</b>.</span><span id="reg-saved"></span><pre id="reg-msg">' + esc(regMessage()) + '</pre><div class="btn-row"><button class="btn btn-line btn-sm" type="button" data-act="copy" data-src="reg-msg">Copy message</button></div></div>';
    if (!API.ok) return;
    call("register", { name: regVal("reg-name"), phone: regVal("reg-phone"), email: regVal("reg-email"), level: regVal("reg-level"), time: regVal("reg-time"), goal: regVal("reg-goal"), note: regVal("reg-note"), website: regVal("reg-website"), progress: doneCount() }, true)
      .then(function (j) { var s = $("reg-saved"); if (s && j.ok) s.textContent = "Your details have also been saved with the school."; }, function () { /* WhatsApp is the fallback */ });
  }

  /* ---------- day view ---------- */
  var cur = null, dayTouched = false, sb = [], wm = null;
  function tableHTML(rows) {
    return '<div class="tbl-wrap"><table' + (rows[0][0] === "Not this" ? ' class="fixtbl"' : "") + '><thead><tr>' + rows[0].map(function (c) { return '<th scope="col">' + fmt(c) + '</th>'; }).join("") + '</tr></thead><tbody>' +
      rows.slice(1).map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + fmt(c) + '</td>'; }).join("") + '</tr>'; }).join("") + '</tbody></table></div>';
  }
  function sbTargets(d) {
    var out = [];
    (d.fix || []).forEach(function (x) {
      var s = String(x[1]).trim();
      if (/[\/:()]/.test(s) || !/^[A-Z]/.test(s) || /[A-Z]{2}/.test(s)) return;
      var m = /^(.*?)([.?!])$/.exec(s); if (!m || /[.?!]/.test(m[1])) return;
      var w = m[1].split(/\s+/); if (w.length < 4 || w.length > 11) return;
      var pool = shuffle(w.length), tries = 0;
      while (tries++ < 6 && pool.map(function (i) { return w[i]; }).join(" ") === w.join(" ")) pool = shuffle(w.length);
      out.push({ w: w, end: m[2], pool: pool, picked: [], won: false, fails: 0, msg: "" });
    });
    return out.slice(0, 3);
  }
  function sbHTML(j) {
    var g = sb[j];
    var h = '<div class="game' + (g.won ? " won" : "") + '" id="sb-' + j + '"><h3>Build the sentence' + (sb.length > 1 ? " " + (j + 1) + " of " + sb.length : "") + '</h3><div class="sb-line" aria-label="Your sentence">' +
      g.picked.map(function (wi, pos) { return '<button class="tile" type="button" data-act="sb-un" data-j="' + j + '" data-p="' + pos + '"' + (g.won ? " disabled" : "") + '>' + esc(g.w[wi]) + '</button>'; }).join("") +
      (g.picked.length ? '<span class="end">' + g.end + '</span>' : '<span class="hint">Tap the words below in the correct order.</span>') + '</div>';
    if (!g.won) h += '<div class="sb-pool">' + g.pool.map(function (wi) { return '<button class="tile' + (g.picked.indexOf(wi) >= 0 ? " used" : "") + '" type="button" data-act="sb-pick" data-j="' + j + '" data-w="' + wi + '"' + (g.picked.indexOf(wi) >= 0 ? ' tabindex="-1" aria-hidden="true"' : "") + '>' + esc(g.w[wi]) + '</button>'; }).join("") + '</div>';
    h += '<div class="btn-row">' + (g.msg ? '<span class="verdict ' + (g.won ? "ok" : "no") + '" role="status">' + g.msg + '</span>' : "") +
      (g.won ? "" : (g.picked.length ? '<button class="btn btn-line btn-sm" type="button" data-act="sb-reset" data-j="' + j + '">Start again</button>' : "") + (g.fails ? '<button class="btn btn-line btn-sm" type="button" data-act="sb-show" data-j="' + j + '">Show the answer</button>' : "")) + '</div></div>';
    return h;
  }
  function sbUpdate(j) {
    var g = sb[j];
    if (g.picked.length === g.w.length) {
      if (g.picked.map(function (i) { return g.w[i]; }).join(" ") === g.w.join(" ")) { g.won = true; g.msg = "Correct. Well done."; }
      else { g.fails++; g.msg = "Not yet. Tap a word in your sentence to take it out, then try again."; }
    } else g.msg = "";
    var el = $("sb-" + j); if (el) el.outerHTML = sbHTML(j);
  }
  function wmNew(d) { wm = { v: d.vocab, L: shuffle(d.vocab.length), R: shuffle(d.vocab.length), sel: null, hit: {}, tries: 0, miss: null }; }
  function wmHTML() {
    var n = wm.v.length, hits = Object.keys(wm.hit).length, won = hits === n;
    var h = '<div class="game' + (won ? " won" : "") + '" id="wm"><h3>Match each word with its meaning</h3><span class="hint">Tap an English word, then tap its Bangla meaning.</span><div class="wm">';
    for (var r = 0; r < n; r++) {
      var l = wm.L[r], m = wm.R[r];
      h += '<button type="button" data-act="wm-l" data-i="' + l + '" class="' + (wm.hit[l] ? "hit" : wm.sel === l ? "sel" : "") + (wm.miss && wm.miss.l === l ? " miss" : "") + '"' + (wm.hit[l] ? " disabled" : "") + '>' + esc(wm.v[l][0]) + '</button>' +
        '<button type="button" data-act="wm-r" data-i="' + m + '" class="bnb ' + (wm.hit[m] ? "hit" : "") + (wm.miss && wm.miss.r === m ? " miss" : "") + '"' + (wm.hit[m] ? " disabled" : "") + '>' + esc(wm.v[m][1]) + '</button>';
    }
    h += '</div><div class="btn-row"><span class="verdict ' + (won ? "ok" : "") + '" role="status">' + (won ? "All " + n + " matched in " + wm.tries + " tries." : hits + " of " + n + " matched") + '</span>' + (won ? '<button class="btn btn-line btn-sm" type="button" data-act="wm-again">Play again</button>' : "") + '</div></div>';
    return h;
  }
  function wmRender() { var el = $("wm"); if (el) el.outerHTML = wmHTML(); wm.miss = null; }
  function normWords(s) { return String(s).toLowerCase().replace(/['\u2019`]/g, "").replace(/[^a-z0-9 ]+/g, " ").trim().split(/\s+/).filter(Boolean); }
  function dictCheck(i) {
    var d = cur, target = d.dict[i], inp = $("dict-in-" + i), out = $("dict-" + i); if (!inp || !out) return;
    var a = normWords(target), b = normWords(inp.value);
    if (!b.length) { out.hidden = false; out.innerHTML = '<span class="verdict no">Type what you hear first.</span>'; return; }
    var n = a.length, m = b.length, L = [], x, y;
    for (x = 0; x <= n; x++) { L.push([]); for (y = 0; y <= m; y++) L[x].push(0); }
    for (x = n - 1; x >= 0; x--) for (y = m - 1; y >= 0; y--) L[x][y] = a[x] === b[y] ? L[x + 1][y + 1] + 1 : Math.max(L[x + 1][y], L[x][y + 1]);
    var got = {}; x = 0; y = 0;
    while (x < n && y < m) { if (a[x] === b[y]) { got[x] = 1; x++; y++; } else if (L[x + 1][y] >= L[x][y + 1]) x++; else y++; }
    var hit = Object.keys(got).length, raw = target.split(/\s+/), wi = 0;
    var marked = raw.map(function (tok) { var isWord = normWords(tok).length > 0, ok = true; if (isWord) { ok = !!got[wi]; wi++; } return ok ? esc(tok) : "<mark>" + esc(tok) + "</mark>"; }).join(" ");
    var perfect = hit === n && m === n;
    out.hidden = false;
    out.innerHTML = '<span class="verdict ' + (perfect ? "ok" : "no") + '">' + (perfect ? "Perfect. Every word is correct." : "You got " + hit + " of " + n + " words.") + '</span> ' + (perfect ? "" : '<span>Correct sentence: ' + marked + '</span>');
  }
  function renderDay(d) {
    recStop(true); view = "day"; cur = d; dayTouched = false;
    updateBackBtn();
    mkQuiz("day", d.quiz.map(function (q, i) { return { d: d, i: i }; }));
    sb = sbTargets(d); if (d.vocab) wmNew(d); else wm = null;
    var w = Math.ceil(d.n / 6), wk = WEEKS[w - 1], step = 0, tasksState = S.tasks[d.n] || [];
    function blk(title, sub, body) { step++; return '<section class="blk"><div class="blk-n" aria-hidden="true">' + step + '.</div><div class="blk-b"><h2>' + title + (sub ? '<small>' + sub + '</small>' : "") + '</h2>' + body + '</div></section>'; }
    var sp = !!d.prod && /^Speaking task/i.test(d.prod[0]);
    var h = '<div class="wrap"><div class="day-top"><div class="crumb"><a href="#programme">All 60 days</a><span>Week ' + w + ': ' + esc(wk.t) + '</span></div>' +
      '<h1>Day ' + d.n + '. ' + esc(d.t) + '</h1><p class="goal">' + esc(d.goal) + '</p>' +
      '<div class="meta"><span class="tag">' + SKILLS[d.s] + '</span><span class="tag">about ' + d.m + ' minutes</span><span class="tag">Day ' + d.n + ' of 60</span></div>' +
      '<div class="bn-tip bn"><b>বাংলায় মূল কথা</b>' + esc(d.bn) + '</div></div></div>' +
      '<div class="dprog"><div class="wrap dprog-in"><span>Day ' + d.n + '</span><div class="bar"><i id="dprog-bar"></i></div><span id="dprog-txt"></span></div></div><div class="wrap"><div class="paper">';
    if (d.notes) {
      var b = d.notes.map(function (n) { return '<div class="note"><h3>' + esc(n[0]) + '</h3><p>' + fmt(n[1]) + '</p>' + (n[2] ? tableHTML(n[2]) : "") + '</div>'; }).join("");
      if (d.fix) b += '<div class="note"><h3>Can you correct these?</h3><p>Say the correct form aloud, then tap to check.</p><ul class="fixes">' + d.fix.map(function (x) { return '<li><span class="no">' + esc(x[0]) + '</span><button class="btn btn-line btn-sm reveal" type="button" data-act="fix-show">Show the correct form</button><span class="yes" hidden>' + esc(x[1]) + '</span></li>'; }).join("") + '</ul></div>';
      h += blk("Learn", "Read the notes slowly. Copy the tables into your notebook.", b);
    }
    if (d.yt || course.videos[d.n]) {
      var vb = '<ul class="vids">';
      (course.videos[d.n] || []).forEach(function (v) { vb += '<li><a target="_blank" rel="noopener noreferrer" href="' + esc(v.u) + '"><span class="yt" aria-hidden="true"></span><span><b>' + esc(v.t) + '</b><small>Chosen by your teacher</small></span></a></li>'; });
      (d.yt || []).forEach(function (q) { vb += '<li><a target="_blank" rel="noopener noreferrer" href="' + esc(yt(q)) + '"><span class="yt" aria-hidden="true"></span><span><b>' + esc(cap(q)) + '</b><small>' + (/bangla|bengali/i.test(q) ? "Explained in Bangla. " : "") + 'Opens YouTube lessons on this topic</small></span></a></li>'; });
      h += blk("Watch", "Choose at least one lesson. Pause and repeat the examples aloud.", vb + '</ul>');
    }
    if (d.vocab) {
      h += blk("Collect words", "Tap the speaker to hear each word. Write all six in your word notebook.", '<div class="tbl-wrap"><table class="words"><thead><tr><th scope="col">Word</th><th scope="col">বাংলা</th><th scope="col">Example</th></tr></thead><tbody>' +
        d.vocab.map(function (v) { return '<tr><td><span class="w"><button class="spk" type="button" data-say="' + esc(v[0]) + '" aria-label="Hear ' + esc(v[0]) + '"><span class="play" aria-hidden="true"></span></button>' + esc(v[0]) + '</span></td><td>' + esc(v[1]) + '</td><td>' + esc(v[2]) + '</td></tr>'; }).join("") + '</tbody></table></div>');
    }
    if (d.read) h += blk("Read", "Use this text for today's tasks and for the test below.", '<div class="passage"><h3>' + esc(d.read.t) + '</h3>' + d.read.p.map(function (p, i) { return '<p>' + (d.read.p.length > 1 ? '<b>' + (i + 1) + '</b>' : "") + esc(p) + '</p>'; }).join("") + '</div>');
    if (d.say || d.dict) {
      var lb = "";
      if (d.say) lb += '<div class="note"><h3>Listen and repeat</h3><div class="chips">' + d.say.map(function (s) { return '<button class="chip" type="button" data-say="' + esc(s) + '"><span class="play" aria-hidden="true"></span>' + esc(s) + '</button>'; }).join("") + '</div></div>';
      if (d.dict) lb += '<div class="note"><h3>Dictation</h3><p>Play each sentence up to three times, type what you hear, then check it.</p><ol class="dict">' + d.dict.map(function (s, i) { return '<li><button class="chip" type="button" data-say="' + esc(s) + '"><span class="play" aria-hidden="true"></span>Play</button><input class="inp dict-in" id="dict-in-' + i + '" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Type sentence ' + (i + 1) + '" placeholder="Type what you hear"><span class="dict-row"><button class="btn btn-sm" type="button" data-act="dict-check" data-i="' + i + '">Check</button><button class="btn btn-line btn-sm" type="button" data-act="dict-show" data-i="' + i + '">Show the answer</button></span><span class="ans" id="dict-' + i + '" hidden></span></li>'; }).join("") + '</ol></div>';
      h += blk("Listen", "The audio uses your device's English voice. Turn your volume up.", lb);
    }
    var pr = "";
    if (sb.length || wm) pr += '<div class="note"><h3>Warm up</h3></div>' + sb.map(function (g, j) { return sbHTML(j); }).join("") + (wm ? wmHTML() : "") + '<div class="note"><h3>Tasks for today</h3></div>';
    pr += '<ul class="tasks">' + d.tasks.map(function (t, i) { return '<li><label><input type="checkbox" data-task="' + i + '"' + (tasksState[i] ? " checked" : "") + '><span>' + esc(t) + '</span></label></li>'; }).join("") + '</ul>' + (sp ? "" : recHTML());
    h += blk(d.review ? "Review" : "Practise", "Tick each task when you have really done it.", pr);
    if (d.prod) {
      var pi = d.tasks.length, note = S.notes[d.n] || "";
      h += blk("Produce", sp ? "Speak first. Then compare with the model." : "Write first. Then compare with the model.", '<p class="prompt">' + esc(d.prod[0]) + '</p>' + (sp ? recHTML() : "") +
        '<label class="f" for="prod-notes">' + (sp ? "Your notes" : "Your answer") + ' <small>saved on this device</small><textarea class="inp" id="prod-notes" rows="6" maxlength="4000" placeholder="' + (sp ? "Write key words for your talk here" : "Write here, or write in your notebook") + '">' + esc(note) + '</textarea><span class="count" id="prod-count">' + words(note) + ' words</span></label>' +
        '<div class="btn-row"><button class="btn btn-line btn-sm" type="button" data-act="model">Show the model answer</button></div><div class="model" id="model" hidden><b>Model answer</b>' + esc(d.prod[1]) + '</div>' +
        '<label class="done-line"><input type="checkbox" data-task="' + pi + '"' + (tasksState[pi] ? " checked" : "") + '><span>I have completed this task</span></label>');
    }
    h += blk(d.review ? (d.n === 60 ? "Final test" : "Weekly test") : "Take the test", "Choose one answer for each question. You will see the explanation at once.", '<div id="quiz-qs">' + d.quiz.map(function (q, i) { return questionHTML(i); }).join("") + '</div><div id="quiz-score">' + scoreHTML(d) + '</div>');
    h += '</div><div id="day-complete"></div><div class="day-nav">' +
      (d.n > 1 ? '<a class="btn btn-line" href="#day-' + (d.n - 1) + '">Previous day</a>' : '<a class="btn btn-line" href="#programme">All 60 days</a>') +
      (d.n < 60 ? '<a class="btn" href="#day-' + (d.n + 1) + '">Next: Day ' + (d.n + 1) + '</a>' : '<a class="btn" href="#progress">See my progress</a>') + '</div></div>';
    $("view").innerHTML = h;
    updateDay(false);
  }
  function updateDay(announce) {
    var d = cur; if (!d || view !== "day") return;
    var u = units(d), dn = doneUnits(d), bar = $("dprog-bar"), txt = $("dprog-txt"), box = $("day-complete");
    if (bar) bar.style.width = Math.round(dn / u * 100) + "%";
    if (txt) txt.textContent = dn + " of " + u + " steps done";
    if (box) {
      if (dn >= u) {
        var allDone = doneCount() === DAYS.length, burst = "";
        if (announce && !reduced()) { burst = '<span class="burst" aria-hidden="true">'; for (var i = 0; i < 16; i++) { var ang = Math.PI * (0.1 + 0.8 * i / 15), dist = 70 + Math.random() * 90; burst += '<i style="--dx:' + Math.round(Math.cos(ang) * dist * 1.8) + 'px;--dy:' + Math.round(-Math.sin(ang) * dist) + 'px;animation-delay:' + (i % 4) * 0.05 + 's"></i>'; } burst += '</span>'; }
        box.innerHTML = '<div class="complete" role="status">' + burst + '<span><b>Day ' + d.n + ' complete.</b> ' + (allDone ? "You have finished the whole programme. Congratulations!" : "This day is now filled in on your answer sheet.") + '</span>' + (allDone ? '<a class="btn" href="#progress">View your certificate</a>' : d.n < 60 ? '<a class="btn" href="#day-' + (d.n + 1) + '">Go to Day ' + (d.n + 1) + '</a>' : '<a class="btn" href="#programme">Finish the remaining days</a>') + '</div>';
        if (announce) toast("Day " + d.n + " complete");
      } else box.innerHTML = "";
    }
    refreshCta();
  }

  /* ---------- flashcards and mistake practice ---------- */
  var deck = null;
  function buildDeck() {
    var pool = [];
    DAYS.forEach(function (d) { if (d.vocab && doneUnits(d) > 0) d.vocab.forEach(function (v) { pool.push({ v: v, n: d.n }); }); });
    var starter = pool.length < 6;
    if (starter) { pool = []; DAYS.slice(0, 2).forEach(function (d) { (d.vocab || []).forEach(function (v) { pool.push({ v: v, n: d.n }); }); }); }
    deck = { cards: pick(pool, Math.min(20, pool.length)), total: 0, known: 0, flipped: false, starter: starter, size: pool.length };
    deck.total = deck.cards.length;
  }
  function cardsHTML() {
    var h = '<div class="wrap"><div class="stage"><div class="crumb"><a href="#progress">Back to my progress</a></div><h1>Revise my words</h1>';
    if (!deck.cards.length) {
      return h + '<div class="score pass"><span class="mark">' + deck.known + '/' + deck.total + '</span><p><b>Deck finished.</b> Words you asked to see again came back until you knew them.</p><button class="btn" type="button" data-act="deck-new">Start a new deck</button></div></div></div>';
    }
    var c = deck.cards[0];
    h += '<p class="lede" style="margin:0">' + (deck.starter ? "These are words from the first two days. Words from each day you study are added automatically." : "A random deck of " + deck.total + " from the " + deck.size + " words in the days you have studied.") + '</p>' +
      '<div class="dprog-in" style="padding:0"><span>Card ' + (deck.known + 1) + ' of ' + deck.total + '</span><div class="bar"><i style="width:' + Math.round(deck.known / deck.total * 100) + '%"></i></div><span></span></div>' +
      '<button class="card' + (deck.flipped ? " flipped" : "") + '" type="button" data-act="card-flip" aria-live="polite"><span class="cw">' + esc(c.v[0]) + '</span>' + (deck.flipped ? '<span class="cb">' + esc(c.v[1]) + '</span><span class="ce">' + esc(c.v[2]) + '</span>' : '<small>Say the meaning, then tap the card to check.</small>') + '<small>Day ' + c.n + '</small></button>' +
      '<div class="btn-row"><button class="chip" type="button" data-say="' + esc(c.v[0]) + '"><span class="play" aria-hidden="true"></span>Hear it</button>' +
      (deck.flipped ? '<button class="btn" type="button" data-act="card-know">I knew it</button><button class="btn btn-line" type="button" data-act="card-again">Show me again later</button>' : '<button class="btn" type="button" data-act="card-flip">Show the meaning</button>') + '</div>';
    return h + '</div></div>';
  }
  function renderCards(fresh) { recStop(true); view = "cards"; cur = null; if (fresh || !deck) buildDeck(); $("view").innerHTML = cardsHTML(); refreshCta(); updateBackBtn(); }
  function renderMistakes() {
    recStop(true); view = "mistakes"; cur = null;
    updateBackBtn();
    var all = missList(), h = '<div class="wrap"><div class="stage"><div class="crumb"><a href="#progress">Back to my progress</a></div><h1>Practise my mistakes</h1>';
    if (!all.length) { quiz = null; h += '<p class="lede" style="margin:0">Nothing to practise yet. When you answer a test question wrong, it is saved here so you can try it again later.</p><div class="btn-row"><a class="btn" href="' + ctaLabel(false).href + '">' + ctaLabel(false).text + '</a></div>'; }
    else {
      mkQuiz("review", pick(all, Math.min(8, all.length)));
      h += '<p class="lede" style="margin:0">' + all.length + ' question' + (all.length === 1 ? "" : "s") + ' in your list. Answer one correctly and it leaves the list.</p><div id="quiz-qs">' + quiz.items.map(function (it, k) { return questionHTML(k); }).join("") + '</div><div id="review-end"></div>';
    }
    $("view").innerHTML = h + '</div></div>'; refreshCta();
  }

  /* ---------- backup ---------- */
  function encodeState() { return window.btoa(unescape(encodeURIComponent(JSON.stringify(S)))); }
  function decodeState(code) {
    var o = JSON.parse(decodeURIComponent(escape(window.atob(String(code).replace(/\s+/g, "")))));
    if (!o || typeof o !== "object" || typeof o.tasks !== "object" || typeof o.quiz !== "object") throw new Error("bad");
    return o;
  }
  function copyFrom(id) {
    var el = $(id); if (!el) return;
    var text = (el.tagName === "TEXTAREA" || el.tagName === "INPUT") ? el.value : el.textContent;
    var ok = function () { toast("Copied"); }, fail = function () { try { if (el.select) el.select(); } catch (e) { /* ignore */ } toast("Select the text and copy it"); };
    try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(ok, fail); else fail(); } catch (e) { fail(); }
  }

  /* ---------- admin ---------- */
  var adTab = "announce", draft = null, adDay = 1, reqs = null, adMsg = "";
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  function videosToText(a) { return (a || []).map(function (v) { return v.t + " | " + v.u; }).join("\n"); }
  function textToVideos(t) {
    var out = [], bad = 0;
    String(t || "").split(/\n+/).forEach(function (ln) {
      ln = ln.trim(); if (!ln) return;
      var i = ln.lastIndexOf("|"), title = i >= 0 ? ln.slice(0, i).trim() : "", url = (i >= 0 ? ln.slice(i + 1) : ln).trim();
      if (!/^https:\/\/[^\s"'<>]+$/i.test(url)) { bad++; return; }
      out.push({ t: (title || "Video lesson").slice(0, 120), u: url });
    });
    return { list: out.slice(0, 8), bad: bad };
  }
  function openAdmin() {
    draft = clone(course); draft._hl = course.highlights.join("\n"); adDay = 1; adTab = "announce"; reqs = null; adMsg = "";
    $("modal-root").innerHTML = '<div class="modal" id="admin-modal" role="dialog" aria-modal="true" aria-labelledby="admin-h"><div class="modal-box"><div class="modal-head"><h2 id="admin-h">Admin</h2><button class="x" type="button" data-act="admin-close" aria-label="Close">&times;</button></div><div id="admin-body"></div></div></div>';
    adminBody();
    var x = document.querySelector("#admin-modal .x"); if (x) x.focus();
  }
  function closeModal(silent) { var r = $("modal-root"); if (r && r.innerHTML) { r.innerHTML = ""; if (!silent) go(view === "home" ? (showCourse() ? "course" : "top") : (backHash || "top")); } }
  function fld(k, label, hint, type) { return '<label class="f" for="ad-' + k + '">' + label + (hint ? ' <small>' + hint + '</small>' : "") + '<input class="inp" id="ad-' + k + '" data-k="' + k + '" type="' + (type || "text") + '" maxlength="160" value="' + esc(draft[k]) + '"></label>'; }
  function area(k, label, hint, rows, val) { return '<label class="f" for="ad-' + k + '">' + label + (hint ? ' <small>' + hint + '</small>' : "") + '<textarea class="inp" id="ad-' + k + '" data-k="' + k + '" rows="' + rows + '" maxlength="900">' + esc(val == null ? draft[k] : val) + '</textarea></label>'; }
  function pwField(id, label, auto) { return '<label class="f" for="' + id + '">' + label + '<input class="inp" id="' + id + '" type="password" autocomplete="' + auto + '" maxlength="200"></label>'; }
  function adminBody() {
    var b = $("admin-body"); if (!b) return;
    if (!draft) { draft = clone(course); draft._hl = (course.highlights || []).join("\n"); }
    if (!API.checked) { b.innerHTML = '<p class="notice">Checking the server&hellip;</p>'; return; }
    if (API.ok && !API.setup) {
      b.innerHTML = '<form id="setup-form" novalidate style="display:flex;flex-direction:column;gap:14px"><p>Create your admin password. You need the setup code that came with the website files.</p><label class="f" for="ad-code">Setup code<input class="inp" id="ad-code" type="text" autocomplete="off" maxlength="80"></label>' + pwField("ad-pw", "New password <small>at least 8 characters</small>", "new-password") + pwField("ad-pw2", "Repeat the password", "new-password") + '<div id="admin-msg"></div><div class="btn-row"><button class="btn" type="submit">Create password and log in</button></div></form>'; return;
    }
    if (API.ok && !API.admin) {
      b.innerHTML = '<form id="login-form" novalidate style="display:flex;flex-direction:column;gap:14px"><p>Log in to edit the announcement, see registration requests and choose videos.</p>' + pwField("ad-pw", "Admin password", "current-password") + '<div id="admin-msg">' + adMsg + '</div><div class="btn-row"><button class="btn" type="submit">Log in</button><button class="btn btn-line" type="button" data-act="admin-close">Cancel</button></div></form>'; adMsg = ""; return;
    }
    if (!API.ok && !previewAdmin) { previewAdmin = true; afterState(); return; }
    var tabs = [["announce", "Announcement"], ["requests", "Requests"], ["videos", "Day videos"], ["account", "Account"]];
    var h = (API.ok ? "" : '<p class="notice warn">Preview mode: the server file api.php is not answering here, so there is no password and your changes are saved in this browser only. On your Hostinger site, Admin asks for your password and changes reach every student.</p>') +
      '<div class="tabs" role="tablist">' + tabs.map(function (t) { return '<button type="button" role="tab" data-act="tab" data-tab="' + t[0] + '" aria-selected="' + (adTab === t[0]) + '">' + t[1] + '</button>'; }).join("") + '</div>';
    var saveRow = '<div id="admin-msg">' + adMsg + '</div><div class="btn-row"><button class="btn" type="submit">Save changes</button><button class="btn btn-line" type="button" data-act="admin-close">Close</button></div>';
    if (adTab === "announce") {
      h += '<form id="course-form" novalidate style="display:flex;flex-direction:column;gap:16px">' +
        '<label class="switch"><input type="checkbox" id="ad-public" data-k="public"' + (draft["public"] ? " checked" : "") + '><span><b>Show the announcement section to students</b><small>While this is off, the section and its menu link are hidden from everyone except you.</small></span></label>' +
        '<label class="switch"><input type="checkbox" id="ad-open" data-k="open"' + (draft.open ? " checked" : "") + '><span><b>Accept registration requests</b><small>Turn this off to keep the announcement visible but close the form.</small></span></label>' +
        '<fieldset><legend>Section text</legend><div class="form-2">' + fld("heading", "Section title") + fld("navLabel", "Menu link text") + '</div>' + area("intro", "Introduction under the title", "", 2) + '<div class="form-2">' + fld("status", "Status badge") + fld("whatsapp", "WhatsApp number for requests") + '</div></fieldset>' +
        '<fieldset><legend>Course details</legend>' + fld("title", "Course name") + area("summary", "Short description", "", 3) +
        '<div class="form-2">' + fld("start", "Start date") + fld("duration", "Duration") + fld("schedule", "Class schedule") + fld("mode", "Mode and place", "online or address") + fld("fee", "Course fee") + fld("seats", "Seats") + fld("deadline", "Register by") + fld("teacher", "Teacher") + '</div>' +
        area("teacherBio", "About the teacher", "optional", 2) + area("_hl", "What students get", "one point per line", 4) + area("note", "Extra notice", "optional", 2) + '<p class="count">Any field you leave empty is not shown to students.</p></fieldset>' +
        '<fieldset><legend>Registration form</legend><div class="form-2">' + fld("formTitle", "Form title") + fld("buttonLabel", "Button text") + '</div></fieldset>' + saveRow + '</form>';
    } else if (adTab === "videos") {
      h += '<form id="course-form" novalidate style="display:flex;flex-direction:column;gap:16px"><p>Add your own videos to any day. They appear first in the Watch step of that day, above the topic links.</p><label class="f" for="ad-vday">Day<select class="inp" id="ad-vday">' + DAYS.map(function (d) { return '<option value="' + d.n + '"' + (d.n === adDay ? " selected" : "") + '>Day ' + d.n + ': ' + esc(d.t) + (draft.videos[d.n] ? " (" + draft.videos[d.n].length + ")" : "") + '</option>'; }).join("") + '</select></label>' +
        '<label class="f" for="ad-vlist">Videos for this day <small>one per line, as: Title | https://youtu.be/...</small><textarea class="inp" id="ad-vlist" rows="4" maxlength="2000">' + esc(videosToText(draft.videos[adDay])) + '</textarea></label><span class="err" id="ad-vlist-e"></span>' + saveRow + '</form>';
    } else if (adTab === "requests") {
      if (!API.ok) h += '<p class="notice">Registration requests are stored on your hosting, so this list works after you upload the site. Every request also opens WhatsApp to ' + esc(course.whatsapp) + '.</p>';
      else if (!reqs) { h += '<p class="notice">Loading requests&hellip;</p>'; loadReqs(); }
      else if (!reqs.length) h += '<p class="notice">No registration requests yet. They appear here as soon as a student presses the button on the form.</p>';
      else {
        h += '<div class="btn-row"><b>' + reqs.length + ' request' + (reqs.length === 1 ? "" : "s") + '</b><button class="btn btn-line btn-sm" type="button" data-act="req-csv">Download as CSV</button><span id="req-clear"><button class="btn btn-line btn-sm" type="button" data-act="req-clear-ask">Delete all</button></span></div><div id="req-csv-out"></div><ul class="reqs">' +
          reqs.map(function (r) {
            var when = ""; try { when = new Date(r.at).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }); } catch (e) { when = r.at || ""; }
            var num = String(r.phone || "").replace(/\D/g, ""); if (/^01\d{9}$/.test(num)) num = "88" + num;
            var bits = [r.level, r.time ? "Prefers: " + r.time : "", r.goal ? "Goal: " + r.goal : "", r.email, "Site progress: " + (r.progress || 0) + " of 60 days"].filter(Boolean).map(esc).join(" &middot; ");
            return '<li><div class="r-top"><b>' + esc(r.name) + '</b><small>' + esc(when) + '</small></div><p><b>' + esc(r.phone) + '</b></p><p>' + bits + '</p>' + (r.note ? '<p>' + esc(r.note) + '</p>' : "") + '<div class="btn-row"><a class="btn btn-sm" target="_blank" rel="noopener noreferrer" href="https://wa.me/' + esc(num) + '">Reply on WhatsApp</a><button class="btn btn-line btn-sm" type="button" data-act="req-del" data-id="' + esc(r.id) + '">Delete</button></div></li>';
          }).join("") + '</ul>';
      }
      h += '<div id="admin-msg">' + adMsg + '</div>';
    } else {
      if (!API.ok) h += '<p class="notice">Your password and login are part of the Hostinger version of the site.</p>';
      else h += '<form id="pw-form" novalidate style="display:flex;flex-direction:column;gap:14px"><h3>Change password</h3>' + pwField("ad-cur", "Current password", "current-password") + pwField("ad-new", "New password <small>at least 8 characters</small>", "new-password") + pwField("ad-new2", "Repeat the new password", "new-password") + '<div id="admin-msg">' + adMsg + '</div><div class="btn-row"><button class="btn" type="submit">Change password</button><button class="btn btn-line" type="button" data-act="logout">Log out</button></div></form>';
    }
    adMsg = "";
    b.innerHTML = h;
  }
  function note(cls, text) { return '<p class="notice ' + cls + '" role="status">' + esc(text) + '</p>'; }
  function setMsg(cls, text) { var m = $("admin-msg"); if (m) m.innerHTML = note(cls, text); }
  function apiFail(e) { if (e && e.noapi) { API.ok = false; setMsg("bad", "The server did not answer. Check that api.php is uploaded next to index.html."); } else setMsg("bad", "Something went wrong. Check your internet connection and try again."); }
  function handle(j, okFn) {
    if (j.ok) { okFn(j); return; }
    if (!API.admin && API.setup && $("admin-body") && adTab) { adMsg = note("bad", j.error || "Please log in again."); adminBody(); return; }
    setMsg("bad", j.error || "That did not work.");
  }
  function loadReqs() { call("registrations").then(function (j) { if (j.ok) { reqs = j.list || []; } else { reqs = []; adMsg = note("bad", j.error || "Could not load the requests."); } if (adTab === "requests") adminBody(); }, function (e) { reqs = []; adminBody(); apiFail(e); }); }
  function stashVideos() { var t = $("ad-vlist"); if (!t) return 0; var r = textToVideos(t.value); if (r.list.length) draft.videos[adDay] = r.list; else delete draft.videos[adDay]; return r.bad; }
  function saveCourse() {
    var bad = stashVideos();
    if (bad) { var ve = $("ad-vlist-e"); if (ve) ve.textContent = bad + " line(s) were ignored because the link does not start with https://"; }
    var c = normCourse(draft);
    c.highlights = String(draft._hl || "").split(/\n+/).map(function (x) { return x.trim(); }).filter(Boolean).slice(0, 10);
    ["heading", "navLabel", "title", "formTitle", "buttonLabel"].forEach(function (k) { c[k] = String(c[k]).trim() || COURSE_DEFAULT[k]; });
    if (String(c.whatsapp).replace(/\D/g, "").length < 10) { setMsg("bad", "Enter the WhatsApp number that should receive registration requests."); return; }
    function done(saved) {
      course = normCourse(saved); draft = clone(course); draft._hl = course.highlights.join("\n");
      adMsg = note("good", "Saved. " + (course["public"] ? "Students can see the announcement section now." : "The announcement section is still hidden from students.") + (API.ok ? "" : " (Preview: this browser only.)"));
      afterState();
    }
    if (!API.ok) { c.rev = Date.now(); try { window.localStorage.setItem(PREVIEW_KEY, JSON.stringify(c)); } catch (e) { /* ignore */ } done(c); return; }
    setMsg("", "Saving...");
    call("save", { course: c }).then(function (j) { handle(j, function () { done(j.course); }); }, apiFail);
  }
  function csvOf(list) {
    var cols = ["at", "name", "phone", "email", "level", "time", "goal", "progress", "note", "course"];
    var q = function (v) { v = String(v == null ? "" : v); if (/^[=+\-@]/.test(v)) v = "'" + v; return '"' + v.replace(/"/g, '""') + '"'; };
    return [cols.join(",")].concat(list.map(function (r) { return cols.map(function (k) { return q(r[k]); }).join(","); })).join("\r\n");
  }

  /* ---------- routing ---------- */
  var lastRouted = null, backHash = "";
  function closeNav() { var t = $("top"), b = $("menu-btn"); if (t) t.classList.remove("nav-open"); if (b) b.setAttribute("aria-expanded", "false"); }
  function updateNavActive(h) {
    var navLinks = document.querySelectorAll("#grammar-view .nav a");
    if (!navLinks || !navLinks.length) return;
    navLinks.forEach(function (a) {
      var href = (a.getAttribute("href") || "").replace(/^#/, "");
      if (h && href === h) {
        a.classList.add("active");
      } else if (!h && href === "programme") {
        a.classList.add("active");
      } else {
        a.classList.remove("active");
      }
    });
  }
  function route(forced, initial) {
    var h = forced != null ? forced : (window.location.hash || "").replace(/^#/, "");
    if (h === "course") h = "programme";
    if (h === "admin" && lastRouted && lastRouted !== "admin") backHash = lastRouted;
    lastRouted = h;
    closeNav();
    updateNavActive(h);
    if (h === "admin") { if (!view) renderHome(); openAdmin(); return; }
    closeModal(true);
    var m = /^day-(\d{1,2})$/.exec(h);
    if (m && byN[+m[1]]) { renderDay(byN[+m[1]]); window.scrollTo(0, 0); return; }
    if (h === "flashcards") { renderCards(true); window.scrollTo(0, 0); return; }
    if (h === "mistakes") { renderMistakes(); window.scrollTo(0, 0); return; }
    if (view !== "home" || !$("view") || !$("view").innerHTML) renderHome();
    var el = h ? $(h) : null;
    if (el && h !== "top") { try { el.scrollIntoView({ behavior: (initial || reduced()) ? "auto" : "smooth", block: "start" }); } catch (e) { el.scrollIntoView(); } }
    else if (!initial) window.scrollTo(0, 0);
  }
  function go(h) {
    var curH = (window.location.hash || "").replace(/^#/, "");
    if (curH === h) { route(h); return; }
    try { window.location.hash = h; } catch (e) { route(h); return; }
    setTimeout(function () { if (lastRouted !== h) route(h); }, 80);
  }

  /* ---------- events ---------- */
  var noteT;
  document.addEventListener("click", function (e) {
    var t = e.target, el;
    if (!(t instanceof Element)) return;
    if ((el = t.closest("#menu-btn"))) { var on = $("top").classList.toggle("nav-open"); el.setAttribute("aria-expanded", on ? "true" : "false"); return; }
    if ((el = t.closest("#reg-send"))) {
      if (!regValidate()) { e.preventDefault(); return; }
      regHref(); var nm = regVal("reg-name"); if (nm && !S.name) { S.name = nm; save(); }
      setTimeout(regSent, 50); return;
    }
    if ((el = t.closest('a[href^="#"]'))) { e.preventDefault(); go(el.getAttribute("href").slice(1)); return; }
    if ((el = t.closest("[data-say]"))) { if (!speak(el.getAttribute("data-say"))) toast("Audio is not available in this browser. Ask someone to read the text aloud."); return; }
    if ((el = t.closest(".opt"))) { if (!el.disabled) answer(+el.getAttribute("data-q"), +el.getAttribute("data-o")); return; }
    if ((el = t.closest(".modal")) && t === el) { closeModal(false); return; }
    if (!(el = t.closest("[data-act]"))) return;
    var act = el.getAttribute("data-act"), j, g, i;
    if (act === "model") { var mo = $("model"); mo.hidden = !mo.hidden; el.textContent = mo.hidden ? "Show the model answer" : "Hide the model answer"; }
    else if (act === "fix-show") { var y = el.parentNode.querySelector(".yes"); if (y) y.hidden = false; el.remove(); }
    else if (act === "sb-pick") { j = +el.getAttribute("data-j"); g = sb[j]; i = +el.getAttribute("data-w"); if (!g.won && g.picked.indexOf(i) < 0) { g.picked.push(i); sbUpdate(j); } }
    else if (act === "sb-un") { j = +el.getAttribute("data-j"); g = sb[j]; if (!g.won) { g.picked.splice(+el.getAttribute("data-p"), 1); sbUpdate(j); } }
    else if (act === "sb-reset") { j = +el.getAttribute("data-j"); sb[j].picked = []; sbUpdate(j); }
    else if (act === "sb-show") { j = +el.getAttribute("data-j"); g = sb[j]; g.picked = g.w.map(function (x, k) { return k; }); g.won = true; g.msg = "This is the correct order. Say it aloud twice."; var se = $("sb-" + j); if (se) se.outerHTML = sbHTML(j); }
    else if (act === "wm-l") { wm.sel = +el.getAttribute("data-i"); wmRender(); }
    else if (act === "wm-r") { i = +el.getAttribute("data-i"); if (wm.sel == null) { toast("Tap an English word first"); } else { wm.tries++; if (i === wm.sel) { wm.hit[i] = 1; } else { wm.miss = { l: wm.sel, r: i }; } wm.sel = null; wmRender(); } }
    else if (act === "wm-again") { wmNew(cur); wmRender(); }
    else if (act === "dict-check") { dictCheck(+el.getAttribute("data-i")); }
    else if (act === "dict-show") { var a = $("dict-" + el.getAttribute("data-i")); if (a) { a.hidden = false; a.innerHTML = '<span class="verdict ok">' + esc(cur.dict[+el.getAttribute("data-i")]) + '</span>'; } }
    else if (act === "rec") { recToggle(); }
    else if (act === "q-text") { i = +el.getAttribute("data-i"); quiz.shown[i] = true; var qe = $("q-" + i); if (qe) qe.outerHTML = questionHTML(i); }
    else if (act === "quiz-retry") { mkQuiz("day", cur.quiz.map(function (q, k) { return { d: cur, i: k }; })); $("quiz-qs").innerHTML = cur.quiz.map(function (q, k) { return questionHTML(k); }).join(""); $("quiz-score").innerHTML = scoreHTML(cur); try { $("quiz-qs").scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" }); } catch (er) { /* ignore */ } }
    else if (act === "try-next") { $("try-q").innerHTML = (mkQuiz("try", tryItem()), questionHTML(0)); $("try-after").innerHTML = ""; }
    else if (act === "review-more") { renderMistakes(); window.scrollTo(0, 0); }
    else if (act === "card-flip") { deck.flipped = true; $("view").innerHTML = cardsHTML(); }
    else if (act === "card-know") { deck.cards.shift(); deck.known++; deck.flipped = false; $("view").innerHTML = cardsHTML(); }
    else if (act === "card-again") { deck.cards.push(deck.cards.shift()); deck.flipped = false; $("view").innerHTML = cardsHTML(); }
    else if (act === "deck-new") { renderCards(true); }
    else if (act === "print") { document.documentElement.classList.add("print-cert"); try { window.print(); } catch (er) { toast("Printing is not available here"); } setTimeout(function () { document.documentElement.classList.remove("print-cert"); }, 1500); }
    else if (act === "backup") { $("backup-out").innerHTML = '<label class="f" for="backup-code">Your backup code<textarea class="inp code" id="backup-code" rows="4" readonly>' + esc(encodeState()) + '</textarea></label><div class="btn-row" style="margin-top:10px"><button class="btn btn-sm" type="button" data-act="copy" data-src="backup-code">Copy code</button></div>'; }
    else if (act === "restore-open") { $("backup-out").innerHTML = '<label class="f" for="restore-code">Paste your backup code<textarea class="inp code" id="restore-code" rows="4"></textarea><span class="err" id="restore-e"></span></label><div class="btn-row" style="margin-top:10px"><button class="btn btn-sm" type="button" data-act="restore">Restore progress</button></div><p>This replaces the progress saved on this device.</p>'; }
    else if (act === "restore") { try { applyState(decodeState($("restore-code").value)); save(); renderHome(); toast("Progress restored"); go("progress"); } catch (er) { $("restore-e").textContent = "This code is not valid. Copy the whole code and try again."; } }
    else if (act === "copy") { copyFrom(el.getAttribute("data-src")); }
    else if (act === "reset-ask") { $("reset-row").innerHTML = '<span style="flex-basis:100%;font-weight:700">Delete everything? This cannot be undone.</span><button class="btn btn-sm" type="button" data-act="reset-yes">Yes, delete my progress</button><button class="btn btn-line btn-sm" type="button" data-act="reset-no">Keep my progress</button>'; }
    else if (act === "reset-no") { $("reset-row").innerHTML = '<button class="btn btn-line btn-sm" type="button" data-act="reset-ask">Reset my progress</button>'; }
    else if (act === "reset-yes") { applyState({ name: S.name }); save(); renderHome(); toast("Progress deleted"); go("progress"); }
    else if (act === "admin-close") { closeModal(false); }
    else if (act === "tab") { stashVideos(); adTab = el.getAttribute("data-tab"); if (adTab === "requests") reqs = null; adminBody(); }
    else if (act === "logout") { call("logout", {}).then(function () { API.admin = false; API.csrf = null; return refreshState(); }, apiFail).then(function () { closeModal(false); toast("Logged out"); }); }
    else if (act === "req-del") { call("reg-delete", { id: el.getAttribute("data-id") }).then(function (r) { handle(r, function () { reqs = r.list || []; adminBody(); }); }, apiFail); }
    else if (act === "req-clear-ask") { $("req-clear").innerHTML = '<button class="btn btn-sm" type="button" data-act="req-clear-yes">Yes, delete all requests</button> <button class="btn btn-line btn-sm" type="button" data-act="tab" data-tab="requests">Keep them</button>'; }
    else if (act === "req-clear-yes") { call("reg-delete", { all: true }).then(function (r) { handle(r, function () { reqs = r.list || []; adminBody(); }); }, apiFail); }
    else if (act === "req-csv") {
      var csv = csvOf(reqs || []);
      try { var u = URL.createObjectURL(new Blob([String.fromCharCode(65279) + csv], { type: "text/csv;charset=utf-8" })), a2 = document.createElement("a"); a2.href = u; a2.download = "registration-requests.csv"; document.body.appendChild(a2); a2.click(); a2.remove(); setTimeout(function () { URL.revokeObjectURL(u); }, 4000); }
      catch (er) { $("req-csv-out").innerHTML = '<label class="f" for="csv-text">Copy this into a spreadsheet<textarea class="inp code" id="csv-text" rows="5" readonly>' + esc(csv) + '</textarea></label>'; }
    }
  });
  document.addEventListener("change", function (e) {
    var t = e.target;
    if (!(t instanceof Element)) return;
    if (t.hasAttribute("data-task") && cur) {
      var was = isDone(cur), a = S.tasks[cur.n] || (S.tasks[cur.n] = []);
      a[+t.getAttribute("data-task")] = !!t.checked; dayTouched = true; touch(); save(); updateDay(!was);
    } else if (t.closest("#reg-form")) { regHref();
    } else if (t.id === "ad-vday") {
      var bad = stashVideos(); adDay = +t.value; $("ad-vlist").value = videosToText(draft.videos[adDay]); $("ad-vlist-e").textContent = bad ? bad + " line(s) were ignored because the link does not start with https://" : "";
    } else if (t.hasAttribute("data-k") && draft && t.type === "checkbox") { draft[t.getAttribute("data-k")] = !!t.checked; }
  });
  document.addEventListener("input", function (e) {
    var t = e.target;
    if (!(t instanceof Element)) return;
    if (t.closest("#reg-form")) regHref();
    if (t.hasAttribute("data-k") && draft && t.type !== "checkbox") { draft[t.getAttribute("data-k")] = t.value; return; }
    if (t.id === "name-in") { S.name = t.value.trim().slice(0, 60); save(); var rn = $("reg-name"); if (rn && !rn.value) rn.value = S.name; }
    else if (t.id === "prod-notes" && cur) { var n = cur.n, v = t.value, pc = $("prod-count"); if (pc) pc.textContent = words(v) + " words"; dayTouched = true; clearTimeout(noteT); noteT = setTimeout(function () { if (v) S.notes[n] = v; else delete S.notes[n]; save(); }, 400); }
    else if (t.classList.contains("dict-in")) { dayTouched = true; }
    else if (t.classList.contains("bad")) { t.classList.remove("bad"); var er = $(t.id + "-e"); if (er) er.textContent = ""; }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && $("admin-modal")) closeModal(false);
    if (e.key === "Enter" && e.target instanceof Element && e.target.classList.contains("dict-in")) { e.preventDefault(); dictCheck(+e.target.id.replace("dict-in-", "")); }
  });
  document.addEventListener("submit", function (e) {
    e.preventDefault();
    var id = e.target && e.target.id, v = function (x) { var el = $(x); return el ? el.value : ""; };
    if (id === "course-form") saveCourse();
    else if (id === "login-form") { setMsg("", "Checking..."); call("login", { password: v("ad-pw") }).then(function (j) { handle(j, function () { API.admin = true; API.csrf = j.csrf; refreshState().then(function () { draft = clone(course); draft._hl = course.highlights.join("\n"); adminBody(); }); }); }, apiFail); }
    else if (id === "setup-form") {
      if (v("ad-pw").length < 8) { setMsg("bad", "Choose a password with at least 8 characters."); return; }
      if (v("ad-pw") !== v("ad-pw2")) { setMsg("bad", "The two passwords are not the same."); return; }
      call("setup", { code: v("ad-code").trim(), password: v("ad-pw") }).then(function (j) { handle(j, function () { API.setup = true; API.admin = true; API.csrf = j.csrf; refreshState().then(function () { draft = clone(course); draft._hl = course.highlights.join("\n"); adMsg = note("good", "Password created. You are logged in."); adminBody(); }); }); }, apiFail);
    }
    else if (id === "pw-form") {
      if (v("ad-new").length < 8) { setMsg("bad", "Choose a new password with at least 8 characters."); return; }
      if (v("ad-new") !== v("ad-new2")) { setMsg("bad", "The two new passwords are not the same."); return; }
      call("password", { current: v("ad-cur"), next: v("ad-new") }).then(function (j) { handle(j, function () { API.csrf = j.csrf; adMsg = note("good", "Password changed."); adminBody(); }); }, apiFail);
    }
  });
  window.addEventListener("hashchange", function () { route(); });

  
  window.PreIelts = {
    init: function() {
      loadState();
      view = "";
      shell();
      route(null, true);
    },
    route: route,
    go: go,
    renderHome: renderHome,
    renderDay: renderDay,
    renderCards: renderCards,
    renderMistakes: renderMistakes,
    handleBack: handleBack,
    updateBackBtn: updateBackBtn,
    openAdmin: openAdmin
  };

  /* ---------- start ---------- */
  loadState(); shell();
  route(null, true);
  refreshState();
  try { if (window.speechSynthesis) window.speechSynthesis.getVoices(); } catch (e) { /* ignore */ }
})();
