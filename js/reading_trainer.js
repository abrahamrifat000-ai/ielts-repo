/**
 * IELTS Reading 12 Question Types Trainer Engine
 * 100% Authentic Cambridge Passages, Prompts, Questions, Explanations & Evidence Locators
 * Features 394 Curated Practice Sets across all 12 Official IELTS Reading Question Types
 */

(() => {
  'use strict';

  // --- Core State & References ---
  let DATA = null;
  let TYPES = [], TOPICS = [], SETS = [], PASSAGES = [];
  const byType = {};
  const byTopic = {};
  const setById = {};

  const CODES = {
    tfng: 'TFNG', ynng: 'YNNG', headings: 'MH', info: 'MI',
    features: 'MF', endings: 'SE', mcq: 'MCQ', 'mcq-multi': 'MCQ+',
    summary: 'SUM', sentence: 'SC', notes: 'NTF', short: 'SA'
  };

  const TCODES = {
    nature: 'NATURE', env: 'ENVIRO', sci: 'SCI-TECH', health: 'HEALTH',
    mind: 'PSYCH', hist: 'HISTORY', soc: 'SOCIETY', arts: 'ARTS', lang: 'LANGUAGE'
  };

  const KEY = 'ielts-type-trainer-v1';
  let progress = {};
  try {
    progress = JSON.parse(localStorage.getItem(KEY) || '{}') || {};
  } catch (e) {
    progress = {};
  }

  function saveProgress() {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress));
    } catch (e) {}
  }

  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const typeName = id => (TYPES.find(t => t.id === id) || {}).name || id;
  const topicName = id => (TOPICS.find(t => t.id === id) || {}).name || id;

  let currentView = 'home'; // 'home' | 'list' | 'set'
  let currentKind = 'type';
  let currentTargetId = '';
  let currentSet = null;
  let timerId = null;
  let timerSeconds = 0;
  let targetSeconds = 0;
  let checked = false;
  let evMarks = {};

  function initData() {
    if (DATA) return true;
    if (typeof window !== 'undefined' && window.READING_TRAINER_DATA) {
      DATA = window.READING_TRAINER_DATA;
    } else if (typeof document !== 'undefined') {
      const el = document.getElementById('data') || document.getElementById('reading-trainer-data');
      if (el) {
        try { DATA = JSON.parse(el.textContent); } catch (e) {}
      }
    }
    if (!DATA) return false;

    TYPES = DATA.types || [];
    TOPICS = DATA.topics || [];
    SETS = DATA.sets || [];
    PASSAGES = DATA.passages || {};

    TYPES.forEach(t => byType[t.id] = SETS.filter(s => s.type === t.id));
    TOPICS.forEach(t => byTopic[t.id] = SETS.filter(s => s.topic === t.id).sort((a, b) => a.test - b.test || a.part - b.part || a.s - b.s));
    SETS.forEach(s => setById[s.id] = s);
    return true;
  }

  function getContainer() {
    return document.getElementById('reading-trainer-root') || document.getElementById('app');
  }

  function syncHeaderBackBtn() {
    const backBtn = document.getElementById('reading-nav-back-btn');
    const headerTitle = document.getElementById('reading-header-title');
    const submitBtn = document.getElementById('reading-header-submit-btn');

    if (currentView === 'set') {
      if (backBtn) {
        backBtn.style.display = 'inline-flex';
        backBtn.innerHTML = '<span>&larr; Exit Practice</span>';
        backBtn.onclick = () => promptExitTest();
      }
      if (headerTitle && currentSet) {
        const t = TYPES.find(x => x.id === currentSet.type);
        headerTitle.textContent = (t ? t.name : 'Reading Drill') + ' • Part ' + currentSet.part;
      }
      if (submitBtn) {
        submitBtn.style.display = 'inline-flex';
        submitBtn.innerHTML = '<span id="reading-header-submit-text">Submit</span>';
        submitBtn.style.background = '#0e332d';
        submitBtn.onclick = () => checkAnswers();
      }
    } else if (currentView === 'list') {
      if (backBtn) {
        backBtn.style.display = 'inline-flex';
        backBtn.innerHTML = '<span>&larr; All Question Types</span>';
        backBtn.onclick = () => backToHome();
      }
      if (headerTitle) {
        const item = (currentKind === 'topic' ? TOPICS : TYPES).find(x => x.id === currentTargetId);
        headerTitle.textContent = (item ? item.name : '12 Official IELTS Question Types');
      }
      if (submitBtn) submitBtn.style.display = 'none';
    } else {
      if (backBtn) {
        backBtn.style.display = 'inline-flex';
        backBtn.innerHTML = '<span>&larr; Back to Home</span>';
        backBtn.onclick = () => {
          if (window.ieltsApp && window.ieltsApp.showHomeView) {
            window.ieltsApp.showHomeView('card-reading-home');
          }
        };
      }
      if (headerTitle) {
        headerTitle.textContent = 'IELTS Reading Practice Hub • 12 Question Types';
      }
      if (submitBtn) submitBtn.style.display = 'none';
    }
  }

  // =========================================================================
  // 1. RENDER HOME (Clean title and 12 red cards)
  // =========================================================================
  function renderHome() {
    if (!initData()) return;
    currentView = 'home';
    currentSet = null;
    clearInterval(timerId);

    const viewEl = document.getElementById('reading-selection-view');
    if (viewEl) viewEl.classList.remove('in-practice-mode');
    syncHeaderBackBtn();

    const root = getContainer();
    if (!root) return;

    const cardsHtml = TYPES.map((t, idx) => {
      const list = byType[t.id] || [];
      const isCompleted = list.length > 0 && list.every(s => progress[s.id]);

      return `
        <div class="rt-type-mod-card-red ${isCompleted ? 'is-completed' : ''}"
             id="rt-type-card-${t.id}"
             onclick="window.ReadingTrainer.openList('type', '${t.id}')"
             title="Explore ${esc(t.name)}">
          <h3 class="rt-type-mod-title">${esc(t.name)}</h3>
          <button type="button" class="rt-type-explore-btn" onclick="event.stopPropagation(); window.ReadingTrainer.openList('type', '${t.id}');">
            Explore &rarr;
          </button>
        </div>
      `;
    }).join('');

    root.innerHTML = `
      <div class="rt-home-wrap" style="padding-top:20px;">
                <!-- IELTS Warriors Reading Practice Showcase Card -->
        <div class="moktadir-reading-banner" style="background:linear-gradient(135deg, #e11d48 0%, #9f1239 100%); border:1.5px solid #f43f5e; border-radius:18px; padding:22px 28px; margin:0 auto 32px auto; max-width:1200px; display:flex; align-items:center; justify-content:space-between; gap:20px; box-shadow:0 10px 30px rgba(225,29,72,0.28); color:#ffffff; flex-wrap:wrap; box-sizing:border-box;">
          <div style="flex:1; min-width:280px;">
            <div style="display:inline-flex; align-items:center; gap:6px; background:rgba(255,255,255,0.18); color:#ffffff; border:1px solid rgba(255,255,255,0.35); padding:4px 12px; border-radius:999px; font-size:0.75rem; font-weight:800; letter-spacing:0.06em; text-transform:uppercase; margin-bottom:10px;">
              <span>⭐</span> OFFICIAL IELTS WARRIORS
            </div>
            <h3 style="font-size:1.4rem; font-weight:900; margin:0 0 6px 0; color:#ffffff; line-height:1.3;">IELTS Warriors Reading Practice</h3>
            <p style="font-size:0.92rem; color:#ffe4e6; line-height:1.5; margin:0; max-width:640px;">
              Timed practice across 4 modules (Science, Environment, Society &amp; History) with 16 original Cambridge-level passages, 5 IELTS question types, instant explanations, and saved progress.
            </p>
          </div>
          <div style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
            <button type="button" onclick="window.ieltsApp.showRealReadingListView('reading-selection')" style="background:#ffffff; color:#be123c; border:none; padding:12px 26px; border-radius:10px; font-weight:800; font-size:0.92rem; cursor:pointer; display:inline-flex; align-items:center; gap:8px; box-shadow:0 4px 14px rgba(0,0,0,0.18); transition:transform 0.15s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
              <span>▶ Start Practice</span>
            </button>
          </div>
        </div>
        <!-- Clean Title Header Only (All promotional banners and stats cards removed) -->
        <div style="text-align:center; margin:16px auto 36px auto;">
          <h2 style="font-size:2.2rem; font-weight:900; color:#0e332d; margin:0;">12 Official IELTS Reading Question Types</h2>
        </div>

        <!-- 12 Question Types Grid -->
        <div class="rt-type-modules-grid" id="rt-cards-container">
          ${cardsHtml}
        </div>
      </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // =========================================================================
  // 2. RENDER LIST PAGE (Sets grid for one question type)
  // =========================================================================
  function openList(kind, id) {
    if (!initData()) return;
    currentView = 'list';
    currentKind = kind;
    currentTargetId = id;
    currentSet = null;
    clearInterval(timerId);

    const viewEl = document.getElementById('reading-selection-view');
    if (viewEl) viewEl.classList.remove('in-practice-mode');
    syncHeaderBackBtn();

    const isTopic = kind === 'topic';
    const item = (isTopic ? TOPICS : TYPES).find(x => x.id === id);
    if (!item) {
      renderHome();
      return;
    }

    const root = getContainer();
    if (!root) return;

    root.innerHTML = `
      <div class="rt-list-wrap" style="padding-top:16px;">
        <!-- Clean Back Navigation & Question Type Name -->
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:16px; margin:12px 0 28px 0; padding-bottom:16px; border-bottom:1px solid #e2e8f0;">
          <div style="display:flex; align-items:center; gap:16px;">
            <button class="rt-back-crumb" onclick="window.ReadingTrainer.backToHome()" style="background:#ffffff; border:1px solid #cbd5e1; border-radius:10px; padding:9px 16px; font-weight:700; color:#0e332d; display:inline-flex; align-items:center; gap:8px; cursor:pointer; box-shadow:0 2px 6px rgba(0,0,0,0.04); transition:all 0.15s ease;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              <span>Back to All Question Types</span>
            </button>
            <h1 style="font-size:1.85rem; font-weight:900; color:#0e332d; margin:0;">${esc(item.name)}</h1>
          </div>
        </div>

        <!-- 5-Column Square Status Cards Grid -->
        <div class="rt-cards-grid-5cols" id="rt-sets-rows-container"></div>
      </div>
    `;

    drawListRows();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function drawListRows() {
    const container = document.getElementById('rt-sets-rows-container');
    if (!container) return;

    const isTopic = currentKind === 'topic';
    const list = isTopic ? byTopic[currentTargetId] : byType[currentTargetId];
    const filtered = list || [];

    if (!filtered.length) {
      container.innerHTML = `<div class="rt-empty-state">No practice sets available for this question type.</div>`;
      return;
    }

    container.innerHTML = filtered.map((s, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      const P = PASSAGES['t' + s.test + 'p' + s.part] || { title: 'Authentic Cambridge Reading Passage' };
      const tag = isTopic ? typeName(s.type) : topicName(s.topic);
      const titleText = P.title || `Test ${s.test} • Passage ${s.part}`;
      const isDone = !!progress[s.id];

      return `
        <article class="rt-square-status-card ${isDone ? 'completed' : 'incomplete'}"
                 onclick="window.ReadingTrainer.openSet('${s.id}')"
                 title="Click to start ${esc(titleText)}">
          <div class="rt-sq-top">
            <span class="rt-sq-serial">${numStr}</span>
            <span class="rt-sq-badge">Test ${s.test} • P${s.part}</span>
          </div>
          <div class="rt-sq-center">
            <h4 class="rt-sq-title">${esc(titleText)}</h4>
            <span class="rt-sq-meta">${esc(tag)} &bull; ${s.n} Qs</span>
          </div>
          <div class="rt-sq-bottom">
            <button type="button"
                    class="rt-sq-status-btn ${isDone ? 'completed' : 'incomplete'}"
                    onclick="window.ReadingTrainer.toggleSetCompletion('${s.id}', event)"
                    title="Click to mark as ${isDone ? 'incomplete' : 'complete'}">
              ${isDone ? 'Complete ✓' : 'Incomplete'}
            </button>
            <span class="rt-sq-play-icon">&rarr;</span>
          </div>
        </article>
      `;
    }).join('');
  }

  function backToHome() {
    renderHome();
  }

  function toggleSetCompletion(setId, event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    if (progress[setId]) {
      delete progress[setId];
    } else {
      const s = setById[setId];
      progress[setId] = {
        best: s ? s.n : 1,
        last: s ? s.n : 1,
        tries: 1,
        manuallyCompleted: true
      };
    }
    saveProgress();
    drawListRows();
  }

  // =========================================================================
  // 3. RENDER PRACTICE SET RUNNER (Authentic Split Screen)
  // =========================================================================
  function optText(o) {
    return o.l && o.l !== o.v ? `${o.v}  ${o.l}` : o.v;
  }

  function controlFor(set, Q) {
    const name = `${set.id}-q${Q.q}`;
    if (Q.m === 'text') {
      return `<input type="text" class="gap-input" id="${name}" data-q="${Q.q}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${Q.q}" aria-label="Answer ${Q.q}">`;
    }
    if (Q.m === 'multi') {
      return Q.o.map(o => `
        <label class="opt multi">
          <input type="checkbox" name="${name}" value="${esc(o.v)}" data-q="${Q.q}">
          <span class="ok-mark">${esc(o.v)}</span>
          <span class="t">${esc(o.l === o.v ? '' : o.l)}</span>
        </label>
      `).join('');
    }
    const short = Q.o && Q.o.every(o => (o.l || '').length <= 12);
    if (Q.s === 'tf' || (Q.s === 'radio' && short)) {
      return `
        <div class="seg" role="radiogroup" aria-label="Question ${Q.q}">
          ${Q.o.map(o => `
            <label>
              <input type="radio" name="${name}" value="${esc(o.v)}" data-q="${Q.q}">
              <span>${esc(o.l === o.v || Q.s === 'tf' ? o.v : o.v + ' · ' + o.l)}</span>
            </label>
          `).join('')}
        </div>
      `;
    }
    if (Q.s === 'radio') {
      return Q.o.map(o => `
        <label class="opt">
          <input type="radio" name="${name}" value="${esc(o.v)}" data-q="${Q.q}">
          <span class="ok-mark">${esc(o.v)}</span>
          <span class="t">${esc(o.l === o.v ? '' : o.l)}</span>
        </label>
      `).join('');
    }
    return `
      <select class="sel" id="${name}" data-q="${Q.q}" aria-label="Answer ${Q.q}">
        <option value="">Choose…</option>
        ${(Q.o || []).map(o => `<option value="${esc(o.v)}">${esc(optText(o))}</option>`).join('')}
      </select>
    `;
  }

  function openSet(setId) {
    if (!initData()) return;
    const set = setById[setId];
    if (!set) {
      renderHome();
      return;
    }

    currentView = 'set';
    currentSet = set;
    checked = false;
    evMarks = {};
    clearInterval(timerId);

    const viewEl = document.getElementById('reading-selection-view');
    if (viewEl) viewEl.classList.add('in-practice-mode');
    syncHeaderBackBtn();

    const t = TYPES.find(x => x.id === set.type) || { name: 'Practice Drill' };
    const P = PASSAGES['t' + set.test + 'p' + set.part] || { title: 'Authentic Cambridge Reading Passage', html: '<p>Passage text not found.</p>' };
    targetSeconds = Math.round(set.n * 90);
    timerSeconds = 0;

    const listBox = set.list ? `
      <div class="listbox">
        <h4>${set.type === 'headings' ? 'List of headings' : 'Options'}</h4>
        <ol>
          ${set.list.map(o => `<li data-v="${esc(o.v)}"><b>${esc(o.v)}</b><span>${esc(o.l === o.v ? '' : o.l)}</span></li>`).join('')}
        </ol>
      </div>
    ` : '';

    const root = getContainer();
    if (!root) return;

    const allQNums = set.qs.flatMap(Q => Q.qs || [Q.q]).sort((a, b) => a - b);

    root.innerHTML = `
      <div class="onmock-reading-container-fullscreen" id="rt-practice-container">
        <!-- Top Header Bar -->
        <header class="onmock-reading-header">
          <div class="onmock-reading-header-left">
            <button class="onmock-reading-back-btn" onclick="window.ReadingTrainer.promptExitTest()" title="Exit Test">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <div class="onmock-reading-brand-badge" onclick="window.ReadingTrainer.promptExitTest()">
              <span style="color:#dc2626; font-size:18px; line-height:1;">&#10148;</span>
              <span class="brand-logo-text">IELTS Warriors</span>
            </div>
          </div>

          <!-- Countdown Timer -->
          <div class="onmock-reading-header-center">
            <div class="onmock-reading-timer-card" id="rt-timer-box" title="Suggested time: about 90 seconds per question">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span id="rt-timer-clock">0:00</span>
              <small style="font-size:12px; color:#64748b; margin-left:4px;">/ ${fmt(targetSeconds)}</small>
            </div>
          </div>

          <!-- Header Right Actions -->
          <div class="onmock-reading-header-right">
            <button class="onmock-reading-icon-action" onclick="window.ReadingTrainer.toggleFullscreen()" title="Fullscreen">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
            </button>
            <button class="onmock-reading-submit-btn" id="rt-header-submit-btn" onclick="window.ReadingTrainer.checkAnswers()" title="Submit and check answers">
              Check answers
            </button>
          </div>
        </header>

        <!-- Sub-header Strip (Clean authentic range without extra labels) -->
        <div class="onmock-reading-substrip">
          <strong style="color:#0f172a; font-size:14.5px; font-weight:800;">Part ${set.part}</strong>
          <span>Questions ${set.s}${set.e > set.s ? '–' + set.e : ''} &bull; ${esc(t.name)}</span>
        </div>

        <!-- Split-Screen Workspace -->
        <div class="onmock-reading-workspace" id="rt-panes">
          <!-- Left Column: Reading Passage -->
          <section class="onmock-reading-pane" id="rt-pane-passage" aria-label="Reading passage">
            <div class="reading-passage-header-block">
              <h2 class="reading-passage-main-title">${esc(P.title)}</h2>
            </div>
            <div id="rt-ptext" class="reading-passage-html-body ptext">
              ${P.html}
            </div>
          </section>

          <!-- Middle Splitter Divider -->
          <div class="onmock-reading-splitter" id="rt-splitter" title="Drag to adjust column widths">
            <div class="onmock-splitter-handle">&#8596;</div>
          </div>

          <!-- Right Column: Questions -->
          <section class="onmock-reading-pane" id="rt-pane-questions" aria-label="Questions">
            <div id="rt-qwrap" class="onmock-questions-container qwrap">
              <div class="instr">${set.prompt}</div>
              ${listBox}
              <div id="rt-qbody" class="qbody">
                ${set.body || ''}
              </div>
              <div id="rt-result" class="result" role="status"></div>
            </div>
          </section>
        </div>

        <!-- Bottom Navigation Dock (No Submit Button, Real-Time Completed Questions Indicator) -->
        <footer class="onmock-reading-bottom-dock" id="rt-bottom-dock">
          <div class="onmock-reading-dock-left">
            <span class="onmock-dock-part-pill active">Part ${set.part} &bull; ${set.n} Qs</span>
            <div class="onmock-dock-answered-pill" id="rt-dock-answered-pill">
              <span class="dock-answered-dot"></span>
              <span id="rt-dock-answered-text">0 / ${set.n} Answered</span>
            </div>
          </div>
          <div class="onmock-reading-dock-right" id="rt-dock-question-btns">
            ${allQNums.map(qNum => `
              <button type="button"
                      class="onmock-dock-qbtn"
                      id="rt-dock-btn-${qNum}"
                      data-q="${qNum}"
                      onclick="window.ReadingTrainer.jumpToQuestion('${qNum}')"
                      title="Jump to Question ${qNum}">
                ${qNum}
                <span class="dock-tick" id="rt-tick-${qNum}" style="display:none;">✓</span>
              </button>
            `).join('')}
          </div>
        </footer>

        <!-- Exit Confirmation Modal Dialog (Continue Test / Exit Test) -->
        <div id="rt-exit-modal" class="onmock-exit-modal-overlay">
          <div class="onmock-exit-modal-dialog">
            <div class="onmock-exit-modal-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h3 class="onmock-exit-modal-title">Exit Reading Practice?</h3>
            <p class="onmock-exit-modal-desc">Are you sure you want to exit this test? Your answers and timer progress will be discarded.</p>
            <div class="onmock-exit-modal-actions">
              <button type="button" class="onmock-btn-continue" onclick="window.ReadingTrainer.closeExitModal()">Continue Test</button>
              <button type="button" class="onmock-btn-exit" onclick="window.ReadingTrainer.confirmExitTest()">Exit Test &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    `;

    setupQuestionsControls(set);
    updateDockStatus();
    setupTimer();
    setupSplitter();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setupQuestionsControls(set) {
    const ptext = document.getElementById('rt-ptext');
    const qbody = document.getElementById('rt-qbody');
    if (!ptext || !qbody) return;

    // Heading zones in passage
    const qnums = new Set(set.qs.flatMap(Q => Q.qs || [Q.q]));
    const pzQs = set.qs.filter(Q => Q.pz);
    if (pzQs.length || set.type === 'headings') ptext.classList.add('show-pz');
    ptext.querySelectorAll('.pz').forEach(z => {
      if (!qnums.has(+z.dataset.q)) z.remove();
      else z.textContent = 'Choose a heading for this section in Question ' + z.dataset.q;
    });

    // Build controls without injecting artificial strings
    set.qs.forEach(Q => {
      const ctl = controlFor(set, Q);
      const gap = qbody.querySelector(`.gap[data-q="${Q.q}"]`);
      const slot = qbody.querySelector(`.q-item[data-q="${Q.q}"]`);

      if (gap) {
        const w = document.createElement('span');
        w.className = 'gapw';
        w.dataset.q = Q.q;
        w.innerHTML = `<span class="qn">${Q.q}</span>${ctl}`;
        gap.replaceWith(w);
      } else {
        const d = document.createElement('div');
        d.className = 'item';
        d.dataset.q = Q.q;
        const label = Q.qs ? `${Q.qs[0]}–${Q.qs[Q.qs.length - 1]}` : Q.q;
        const stmt = Q.t || '';
        const col = Q.m === 'multi' || (Q.s === 'radio' && !Q.o.every(o => (o.l || '').length <= 12));
        d.innerHTML = `
          <span class="qn">${label}</span>
          <div class="stmt">${esc(stmt)}</div>
          ${Q.m === 'multi' ? `<div class="multi-note" style="font-size:13px; color:#64748b; font-weight:600; grid-column:2;">Choose ${Q.qs.length} answers.</div>` : ''}
          <div class="ctl${col ? ' col' : ''}">${ctl}</div>
        `;
        if (slot) slot.replaceWith(d);
        else qbody.appendChild(d);
      }
    });

    // Remove empty leftover placeholders
    qbody.querySelectorAll('.q-item[data-q]').forEach(x => x.remove());

    // Multi-select limit
    set.qs.filter(Q => Q.m === 'multi').forEach(Q => {
      const boxes = [...qbody.querySelectorAll(`input[name="${set.id}-q${Q.q}"]`)];
      boxes.forEach(b => {
        b.addEventListener('change', () => {
          const n = boxes.filter(x => x.checked).length;
          boxes.forEach(x => {
            if (!x.checked) x.disabled = n >= Q.qs.length;
          });
          updateDockStatus();
        });
      });
    });

    // Heading select change listener (reflect in passage + listbox)
    const refreshUsed = () => {
      if (!set.list) return;
      const used = new Set([...qbody.querySelectorAll('select.sel')].map(s => s.value).filter(Boolean));
      document.querySelectorAll('.listbox li').forEach(li => {
        li.classList.toggle('used', used.has(li.dataset.v));
      });
    };

    qbody.addEventListener('change', e => {
      const s = e.target.closest('select.sel');
      if (s) {
        const q = s.dataset.q;
        const z = ptext.querySelector(`.pz[data-q="${q}"]`);
        if (z) {
          const Q = set.qs.find(x => String(x.q) === q);
          const o = Q && Q.o.find(x => x.v === s.value);
          z.classList.toggle('filled', !!o);
          z.textContent = o ? optText(o) : 'Choose a heading for this section in Question ' + q;
        }
        refreshUsed();
      }
      updateDockStatus();
    });

    qbody.addEventListener('input', () => {
      updateDockStatus();
    });
  }

  function updateDockStatus() {
    if (!currentSet) return;
    const qbody = document.getElementById('rt-qbody');
    if (!qbody) return;

    let totalAnswered = 0;

    currentSet.qs.forEach(Q => {
      const qNums = Q.qs || [Q.q];
      let answered = false;
      const name = `${currentSet.id}-q${Q.q}`;

      if (Q.m === 'multi') {
        const checkedCount = qbody.querySelectorAll(`input[name="${name}"]:checked`).length;
        answered = checkedCount > 0;
        if (answered) {
          totalAnswered += Math.min(checkedCount, qNums.length);
        }
      } else if (Q.m === 'text') {
        const inp = document.getElementById(name);
        answered = !!(inp && inp.value.trim());
        if (answered) totalAnswered++;
      } else {
        const radio = qbody.querySelector(`input[name="${name}"]:checked`);
        const sel = document.getElementById(name);
        answered = !!(radio || (sel && sel.value));
        if (answered) totalAnswered++;
      }

      qNums.forEach(qn => {
        const dockBtn = document.getElementById(`rt-dock-btn-${qn}`);
        if (dockBtn && !checked) {
          dockBtn.classList.toggle('answered', answered);
        }
      });
    });

    const statusText = document.getElementById('rt-dock-answered-text');
    if (statusText && !checked) {
      statusText.textContent = `${totalAnswered} / ${currentSet.n} Answered`;
    }
  }

  function jumpToQuestion(qNum) {
    const qbody = document.getElementById('rt-qbody');
    if (!qbody) return;
    const target = qbody.querySelector(`[data-q="${qNum}"]`);
    if (target) {
      target.scrollIntoView({ block: 'center', behavior: 'smooth' });
      target.classList.add('flash');
      setTimeout(() => target.classList.remove('flash'), 1200);
      const input = target.tagName === 'INPUT' ? target : target.querySelector('input, select');
      if (input) input.focus();
    }
  }

  // =========================================================================
  // 4. ANSWER CHECKING & GRADING (100% Cambridge Standard)
  // =========================================================================
  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/[’‘`']/g, '').replace(/[“”"]/g, '').replace(/[–—-]/g, ' ')
      .replace(/[^a-z0-9%.\s]/g, ' ').replace(/\.(?!\d)/g, ' ')
      .replace(/\s+/g, ' ').trim().replace(/^(the|a|an) /, '');
  }

  function isAnswerCorrect(val, acceptedList) {
    if (val === undefined || val === null) return false;
    const userTrim = String(val).trim();
    if (!userTrim) return false;
    const userNorm = norm(userTrim);
    const userLower = userTrim.toLowerCase();

    return acceptedList.some(ans => {
      const ansTrim = String(ans).trim();
      if (ansTrim.toLowerCase() === userLower) return true;
      if (norm(ansTrim) === userNorm && userNorm !== '') return true;
      if (ansTrim.replace(/\./g, '').toLowerCase() === userTrim.replace(/\./g, '').toLowerCase()) return true;
      return false;
    });
  }

  function checkAnswers() {
    if (!currentSet) return;
    if (checked) {
      // If already checked, reset / try again
      openSet(currentSet.id);
      return;
    }

    checked = true;
    clearInterval(timerId);

    const qbody = document.getElementById('rt-qbody');
    const ptext = document.getElementById('rt-ptext');
    if (!qbody || !ptext) return;

    let got = 0;
    const set = currentSet;

    set.qs.forEach(Q => {
      const name = `${set.id}-q${Q.q}`;
      const holder = qbody.querySelector(`.gapw[data-q="${Q.q}"], .item[data-q="${Q.q}"]`);

      if (Q.m === 'multi') {
        const boxes = [...qbody.querySelectorAll(`input[name="${name}"]`)];
        let n = 0;
        boxes.forEach(b => {
          const lab = b.closest('.opt');
          const right = Q.a.includes(b.value);
          if (b.checked && right) {
            n++;
            if (lab) lab.classList.add('right');
          } else if (b.checked) {
            if (lab) lab.classList.add('wrong');
          } else if (right) {
            if (lab) lab.classList.add('right');
          }
          b.disabled = true;
        });

        const needed = Q.qs ? Q.qs.length : 1;
        got += Math.min(n, needed);
        const ok = n === needed;
        if (holder) {
          holder.classList.add(ok ? 'is-ok' : 'is-bad');
          addAnswerBadge(holder, `${Q.a.join(', ')} (${n} of ${needed} correct)`);
        }
        return;
      }

      let val = '';
      const radio = qbody.querySelector(`input[name="${name}"]:checked`);
      const field = document.getElementById(name);

      if (radio) val = radio.value;
      else if (field) val = field.value;

      const ok = Q.m === 'text'
        ? isAnswerCorrect(val, Q.a)
        : Q.a.some(a => a.toLowerCase() === String(val).toLowerCase() && val !== '');

      if (ok) got++;
      if (holder) holder.classList.add(ok ? 'is-ok' : 'is-bad');

      qbody.querySelectorAll(`input[name="${name}"]`).forEach(r => {
        r.disabled = true;
        const lab = r.closest('label');
        if (Q.a.includes(r.value)) {
          if (lab) lab.classList.add('right');
        } else if (r.checked) {
          if (lab) lab.classList.add('wrong');
        }
      });

      if (field) field.disabled = true;

      if (!ok && holder) {
        let shown = Q.a[0];
        if (Q.o) {
          const o = Q.o.find(x => Q.a.includes(x.v));
          if (o) shown = optText(o);
        } else if (Q.a.length > 1) {
          shown = Q.a.slice(0, 3).join(' / ');
        }
        addAnswerBadge(holder, shown);
      }
    });

    // Disable all inputs
    qbody.querySelectorAll('input, select, textarea').forEach(el => el.disabled = true);

    // Show explanations & evidence highlights cleanly
    showExplanations(set, qbody, ptext);

    // Save progress
    const prev = progress[set.id];
    progress[set.id] = {
      best: Math.max(got, prev ? prev.best : 0),
      last: got,
      tries: (prev ? prev.tries : 0) + 1
    };
    saveProgress();

    // Update bottom dock question ticks and colors
    const allQNums = set.qs.flatMap(Q => Q.qs || [Q.q]).sort((a, b) => a - b);
    allQNums.forEach(qNum => {
      const dockBtn = document.getElementById(`rt-dock-btn-${qNum}`);
      const tick = document.getElementById(`rt-tick-${qNum}`);
      const Q = set.qs.find(x => (x.qs && x.qs.includes(qNum)) || x.q === qNum);
      if (dockBtn && Q) {
        let isCorrect = false;
        const name = `${set.id}-q${Q.q}`;
        if (Q.m === 'multi') {
          const checkedBoxes = [...qbody.querySelectorAll(`input[name="${name}"]:checked`)].map(b => b.value);
          const idxInMulti = Q.qs ? Q.qs.indexOf(qNum) : 0;
          if (checkedBoxes[idxInMulti] && Q.a.includes(checkedBoxes[idxInMulti])) isCorrect = true;
        } else {
          const radio = qbody.querySelector(`input[name="${name}"]:checked`);
          const field = document.getElementById(name);
          const v = radio ? radio.value : (field ? field.value : '');
          if (Q.m === 'text') isCorrect = isAnswerCorrect(v, Q.a);
          else isCorrect = Q.a.some(a => a.toLowerCase() === String(v).toLowerCase() && v !== '');
        }

        dockBtn.classList.remove('answered');
        if (isCorrect) {
          dockBtn.classList.add('dock-correct');
          if (tick) { tick.textContent = '✓'; tick.style.display = 'inline'; }
        } else {
          dockBtn.classList.add('dock-wrong');
          if (tick) { tick.textContent = '✗'; tick.style.display = 'inline'; }
        }
      }
    });

    // Update top check button to score
    const headerSubmitBtn = document.getElementById('rt-header-submit-btn');
    if (headerSubmitBtn) {
      headerSubmitBtn.textContent = `Score: ${got} / ${set.n}`;
      headerSubmitBtn.style.setProperty('background', '#10b981', 'important');
    }

    // Update bottom dock answered status pill
    const dockAnsweredText = document.getElementById('rt-dock-answered-text');
    if (dockAnsweredText) {
      dockAnsweredText.textContent = `${got} / ${set.n} Correct`;
    }

    // Show result banner
    const list = currentKind === 'topic' ? byTopic[set.topic] : byType[set.type];
    const idx = list.indexOf(set);
    const nextSet = list[(idx + 1) % list.length];
    const r = got / set.n;
    const msg = (r === 1 ? 'Every answer correct.' : r >= .8 ? 'Strong result.' : r >= .5 ? 'Read the explanations for the ones you missed.' : 'Read each explanation, then try the set again.') + ' Evidence is highlighted in the passage.';

    const res = document.getElementById('rt-result');
    if (res) {
      res.innerHTML = `
        <span class="score">${got}<small> / ${set.n}</small></span>
        <span class="msg">${msg}</span>
        <span class="actions">
          <button class="btn" id="rt-retry-btn" onclick="window.ReadingTrainer.openSet('${set.id}')">Try again</button>
          <button class="btn primary" id="rt-next-btn" onclick="window.ReadingTrainer.openSet('${nextSet.id}')">Next set &rarr;</button>
        </span>
      `;
      res.classList.add('show');
      res.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  function addAnswerBadge(holder, text) {
    const s = document.createElement('span');
    s.className = 'ans';
    s.textContent = text;
    holder.appendChild(s);
  }

  function showExplanations(set, qbody, ptext) {
    const rows = [];
    set.qs.forEach(Q => {
      const label = Q.qs ? `${Q.qs[0]}–${Q.qs[Q.qs.length - 1]}` : String(Q.q);
      const marks = markEvidence(ptext, Q, label);
      evMarks[Q.q] = marks;

      if (!Q.x) return;
      const ex = document.createElement('div');
      ex.className = 'expl';
      ex.innerHTML = `<b>Why</b>${esc(Q.x)}${marks.length ? ` <button class="goto" onclick="window.ReadingTrainer.showEvidence('${Q.q}')">Show in passage</button>` : ''}`;

      const holder = qbody.querySelector(`.gapw[data-q="${Q.q}"], .item[data-q="${Q.q}"]`);
      if (holder && holder.classList.contains('item')) {
        holder.appendChild(ex);
      } else {
        const row = document.createElement('div');
        row.className = 'xrow ' + (holder && holder.classList.contains('is-ok') ? 'is-ok' : 'is-bad');
        row.innerHTML = `<span class="qn">${label}</span>`;
        row.appendChild(ex);

        let shown = Q.a[0];
        if (Q.o) {
          const o = Q.o.find(x => Q.a.includes(x.v));
          if (o) shown = optText(o);
        }
        const an = document.createElement('span');
        an.className = 'ans';
        an.textContent = shown;
        row.appendChild(an);
        rows.push(row);
      }
    });

    if (rows.length) {
      const box = document.createElement('div');
      box.className = 'explist';
      box.innerHTML = '<h4>Explanations</h4>';
      rows.forEach(r => box.appendChild(r));
      qbody.appendChild(box);
    }
  }

  // =========================================================================
  // 5. EVIDENCE HIGHLIGHTING (100% Authentic TreeWalker Engine)
  // =========================================================================
  const loosen = s => s.replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-');

  function markEvidence(root, Q, label) {
    let marks = [];
    if (Q.es) {
      const nums = Q.qs || [Q.q];
      root.querySelectorAll('.ev').forEach(sp => {
        const qs = (sp.dataset.qs || '').split(/\s+/).map(Number);
        if (nums.some(n => qs.includes(n))) {
          sp.classList.add('evhl');
          marks.push(sp);
        }
      });
    }

    if (!marks.length) {
      (Q.ev || []).forEach(t => {
        marks = marks.concat(wrapText(root, t));
      });
    }

    if (marks.length && !root.querySelector(`.evq[data-q="${Q.q}"]`)) {
      const b = document.createElement('span');
      b.className = 'evq';
      b.dataset.q = Q.q;
      b.textContent = label;
      b.title = 'Evidence for question ' + label;
      b.onclick = () => {
        const h = document.getElementById('rt-qbody').querySelector(`[data-q="${Q.q}"]`);
        if (h) h.scrollIntoView({ block: 'center', behavior: 'smooth' });
      };
      marks[0].before(b);
    }
    return marks;
  }

  function wrapText(root, needle) {
    const key = loosen((needle || '').replace(/\s+/g, ''));
    if (key.length < 6) return [];

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement.closest('.pz, .pz-example, .evq, .reading-passage-main-title') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });

    let flat = '';
    const map = [];
    for (let n; (n = walker.nextNode());) {
      const d = n.data;
      for (let i = 0; i < d.length; i++) {
        if (!/\s/.test(d[i])) {
          flat += d[i];
          map.push([n, i]);
        }
      }
    }

    const at = loosen(flat).indexOf(key);
    if (at < 0) return [];

    const segs = [];
    for (let i = at; i < at + key.length; i++) {
      const [n, o] = map[i];
      const last = segs[segs.length - 1];
      if (last && last.n === n) last.e = o;
      else segs.push({ n, s: o, e: o });
    }

    const out = [];
    for (let k = segs.length - 1; k >= 0; k--) {
      const sg = segs[k];
      const r = document.createRange();
      try {
        r.setStart(sg.n, sg.s);
        r.setEnd(sg.n, sg.e + 1);
        const m = document.createElement('span');
        m.className = 'evhl';
        r.surroundContents(m);
        out.unshift(m);
      } catch (err) {}
    }
    return out;
  }

  function showEvidence(q) {
    const marks = evMarks[q];
    if (!marks || !marks.length) return;
    const ptext = document.getElementById('rt-ptext');
    const badge = (ptext && ptext.querySelector(`.evq[data-q="${q}"]`)) || marks[0];
    if (badge) {
      badge.scrollIntoView({ block: 'center', behavior: 'smooth' });
      marks.forEach(m => m.classList.add('flash'));
      setTimeout(() => marks.forEach(m => m.classList.remove('flash')), 1800);
    }
  }

  // =========================================================================
  // 6. TIMER & UI CONTROLS
  // =========================================================================
  function setupTimer() {
    clearInterval(timerId);
    const clockEl = document.getElementById('rt-timer-clock');
    const tBox = document.getElementById('rt-timer-box');
    const t0 = Date.now();

    const tick = () => {
      const s = Math.floor((Date.now() - t0) / 1000);
      timerSeconds = s;
      if (clockEl) clockEl.textContent = fmt(s);
      if (tBox) tBox.classList.toggle('over', s > targetSeconds);
    };
    timerId = setInterval(tick, 1000);
  }

  function fmt(s) {
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  function setupSplitter() {
    const splitter = document.getElementById('rt-splitter');
    const leftPane = document.getElementById('rt-pane-passage');
    const rightPane = document.getElementById('rt-pane-questions');
    const panes = document.getElementById('rt-panes');
    if (!splitter || !leftPane || !rightPane || !panes) return;

    let isDragging = false;
    splitter.onmousedown = e => {
      isDragging = true;
      document.body.style.cursor = 'col-resize';
      e.preventDefault();
    };

    window.onmousemove = e => {
      if (!isDragging) return;
      const rect = panes.getBoundingClientRect();
      const pct = Math.max(25, Math.min(75, ((e.clientX - rect.left) / rect.width) * 100));
      leftPane.style.flex = `0 0 ${pct}%`;
      rightPane.style.flex = `0 0 ${100 - pct}%`;
    };

    window.onmouseup = () => {
      if (isDragging) {
        isDragging = false;
        document.body.style.cursor = '';
      }
    };
  }

  function promptExitTest() {
    const modal = document.getElementById('rt-exit-modal');
    if (modal) {
      modal.classList.add('active');
      modal.style.display = 'flex';
    } else {
      confirmExitTest();
    }
  }

  function closeExitModal() {
    const modal = document.getElementById('rt-exit-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.style.display = 'none';
    }
  }

  function confirmExitTest() {
    closeExitModal();
    clearInterval(timerId);
    currentSet = null;
    if (currentKind && currentTargetId) {
      openList(currentKind, currentTargetId);
    } else {
      renderHome();
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  function stepBack() {
    if (currentView === 'set') {
      promptExitTest();
      return true;
    } else if (currentView === 'list') {
      backToHome();
      return true;
    }
    return false;
  }

  // Expose API
  window.ReadingTrainer = {
    init: renderHome,
    renderHome,
    openList,
    openSet,
    checkAnswers,
    promptExitTest,
    closeExitModal,
    confirmExitTest,
    backToHome,
    toggleFullscreen,
    toggleSetCompletion,
    showEvidence,
    jumpToQuestion,
    syncHeaderBackBtn,
    stepBack
  };

  // Auto initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.getElementById('reading-trainer-root')) renderHome();
    });
  } else {
    if (document.getElementById('reading-trainer-root')) renderHome();
  }
})();
