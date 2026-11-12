/**
 * IELTS Reading Type & Topic Trainer Engine
 * Handles browsing by 12 question types, 9 topics, and running interactive practice for 394 sets.
 * Fully embedded inside IELTS Warrior platform with zero new tabs.
 */
(function() {
  'use strict';

  let DATA = null;
  let TYPES = [];
  let TOPICS = [];
  let SETS = [];
  let PASSAGES = {};
  let byType = {};
  let byTopic = {};
  let setById = {};

  const CODES = {
    tfng: 'TFNG',
    ynng: 'YNNG',
    headings: 'MH',
    info: 'MI',
    features: 'MF',
    endings: 'SE',
    mcq: 'MCQ',
    'mcq-multi': 'MCQ+',
    summary: 'SUM',
    sentence: 'SC',
    notes: 'NTF',
    short: 'SA'
  };

  const TCODES = {
    nature: 'NATURE',
    env: 'ENVIRO',
    sci: 'SCI-TECH',
    health: 'HEALTH',
    mind: 'PSYCH',
    hist: 'HISTORY',
    soc: 'SOCIETY',
    arts: 'ARTS',
    lang: 'LANGUAGE'
  };

  // Rotating vocabulary palettes for topic cards
  const CARD_PALETTES = [
    {
      c1: '#0e332d', c2: '#164e44',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>'
    },
    {
      c1: '#059669', c2: '#10b981',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>'
    },
    {
      c1: '#0284c7', c2: '#0ea5e9',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M10.5 10.5 6.5 17.5"/><path d="m13.5 13.5 4-7"/></svg>'
    },
    {
      c1: '#e11d48', c2: '#f43f5e',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>'
    },
    {
      c1: '#7c3aed', c2: '#8b5cf6',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"/></svg>'
    },
    {
      c1: '#d97706', c2: '#f59e0b',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'
    },
    {
      c1: '#1e3a8a', c2: '#2563eb',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
    },
    {
      c1: '#861c2f', c2: '#9f1239',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>'
    },
    {
      c1: '#0f766e', c2: '#14b8a6',
      icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>'
    }
  ];

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

  function initData() {
    if (DATA) return true;
    if (window.READING_TRAINER_DATA) {
      DATA = window.READING_TRAINER_DATA;
      TYPES = DATA.types || [];
      TOPICS = DATA.topics || [];
      SETS = DATA.sets || [];
      PASSAGES = DATA.passages || {};

      byType = {};
      TYPES.forEach(t => {
        byType[t.id] = SETS.filter(s => s.type === t.id);
      });

      byTopic = {};
      TOPICS.forEach(t => {
        byTopic[t.id] = SETS.filter(s => s.topic === t.id).sort((a, b) => a.test - b.test || a.part - b.part || a.s - b.s);
      });

      setById = {};
      SETS.forEach(s => {
        setById[s.id] = s;
      });
      return true;
    }
    return false;
  }

  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
  const fmt = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  const typeName = id => (TYPES.find(t => t.id === id) || {}).name || id;
  const topicName = id => (TOPICS.find(t => t.id === id) || {}).name || id;

  function pillFor(s) {
    const p = progress[s.id];
    if (!p) return '<span class="rt-pill rt-pill-not-tried">Not tried</span>';
    const r = p.best / s.n;
    const cls = r >= 0.8 ? 'rt-pill-good' : r >= 0.5 ? 'rt-pill-mid' : 'rt-pill-low';
    return `<span class="rt-pill ${cls}">Best ${p.best}/${s.n}</span>`;
  }

  // State management
  let currentView = 'home'; // 'home' | 'list' | 'practice'
  let browseMode = 'topic'; // 'topic' default as requested by user ("Browse by 9 Academic Topics")
  let currentKind = 'topic';
  let currentTargetId = '';
  let activeFilter = 'all';
  let activeSubFilter = 'all';
  let currentSet = null;
  let timerId = null;

  function getContainer() {
    return document.getElementById('reading-trainer-root');
  }

  // 1. RENDER HOME (Browse by Topics or Question Types)
  function renderHome() {
    if (!initData()) return;
    currentView = 'home';
    clearInterval(timerId);

    const viewEl = document.getElementById('reading-selection-view');
    if (viewEl) viewEl.classList.remove('in-practice-mode');

    const root = getContainer();
    if (!root) return;

    const totalQ = SETS.reduce((n, s) => n + s.n, 0);
    const done = SETS.filter(s => progress[s.id]);
    const doneQ = done.reduce((n, s) => n + s.n, 0);
    const gotQ = done.reduce((n, s) => n + progress[s.id].best, 0);
    const testsCount = new Set(SETS.map(s => s.test)).size;

    const cardsHtml = browseMode === 'topic'
      ? TOPICS.map((t, idx) => renderTopicCard(t, byTopic[t.id] || [], idx)).join('')
      : TYPES.map((t, idx) => renderTypeCard(t, byType[t.id] || [], idx)).join('');

    root.innerHTML = `
      <div class="rt-home-wrap">
        <!-- Hero Introduction Card -->
        <section class="rt-hero-card">
          <div class="rt-hero-content">
            <span class="rt-hero-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              AUTHENTIC CAMBRIDGE IELTS DRILLS
            </span>
            <h1 class="rt-hero-title">IELTS Reading Type &amp; Topic Trainer</h1>
            <p class="rt-hero-desc">
              Master all 12 official IELTS Reading question types across 9 academic subjects. 
              Features <strong>394 curated question sets</strong> from <strong>${testsCount} full Cambridge tests</strong> (${Object.keys(PASSAGES).length} passages) with instant answer checking, in-depth explanations, and interactive in-passage evidence locators.
            </p>
          </div>
          <div class="rt-stats-grid">
            <div class="rt-stat-box">
              <span class="rt-stat-num">${done.length} <small>/ ${SETS.length}</small></span>
              <span class="rt-stat-lbl">Sets Done</span>
            </div>
            <div class="rt-stat-box">
              <span class="rt-stat-num">${doneQ} <small>/ ${totalQ}</small></span>
              <span class="rt-stat-lbl">Questions Done</span>
            </div>
            <div class="rt-stat-box">
              <span class="rt-stat-num">${doneQ ? pct(gotQ, doneQ) + '%' : '–'}</span>
              <span class="rt-stat-lbl">Best Accuracy</span>
            </div>
          </div>
        </section>

        <!-- Browse Selector Toolbar -->
        <div class="rt-browse-bar">
          <div class="rt-browse-title">
            <h2>${browseMode === 'topic' ? 'Browse by 9 Academic Topics' : 'Browse by 12 Question Types'}</h2>
            <p>Select any category below to access its individual passage sets and targeted drills.</p>
          </div>
          <div class="rt-toggle-group">
            <button class="rt-toggle-btn ${browseMode === 'topic' ? 'active' : ''}" onclick="window.ReadingTrainer.switchBrowseMode('topic')">
              <span>9 Academic Topics</span>
            </button>
            <button class="rt-toggle-btn ${browseMode === 'type' ? 'active' : ''}" onclick="window.ReadingTrainer.switchBrowseMode('type')">
              <span>12 Question Types</span>
            </button>
          </div>
        </div>

        <!-- 3 Cards Per Row in Vocabulary Section Card Style -->
        <div class="topics-grid" id="reading-trainer-cards-grid">
          ${cardsHtml}
        </div>

        <p class="rt-note-footer">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          All your practice scores, highlighted notes, and completed sets are automatically preserved.
        </p>
      </div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Vocabulary Section Style Card Generator for Academic Topics
  function renderTopicCard(t, list, idx) {
    const numStr = String(idx + 1).padStart(2, '0');
    const p = CARD_PALETTES[idx % CARD_PALETTES.length];
    const d = list.filter(s => progress[s.id]);
    const q = list.reduce((n, s) => n + s.n, 0);
    const passagesCount = new Set(list.map(s => s.test + '-' + s.part)).size;
    const isCompleted = list.length > 0 && d.length === list.length;

    // Get up to 4 question type tags
    const typeTags = [...new Set(list.map(s => s.type))]
      .sort((a, b) => TYPES.findIndex(x => x.id === a) - TYPES.findIndex(x => x.id === b))
      .slice(0, 4)
      .map(tid => `<span>${CODES[tid] || tid}</span>`)
      .join('');

    return `
      <article class="topic-card ${isCompleted ? 'is-completed' : ''}" id="rt-topic-card-${t.id}" style="--c1:${p.c1}; --c2:${p.c2};" onclick="window.ReadingTrainer.openList('topic', '${t.id}')">
        <header class="topic-head">
          <span class="topic-num">${numStr}</span>
          <h3 class="topic-title">Topic ${numStr}</h3>
          <span class="topic-icon">${p.icon}</span>
        </header>
        <div class="topic-body">
          <span class="topic-label">ACADEMIC TOPIC</span>
          <h4>${esc(t.name)}</h4>
          <p class="keywords">${esc(t.desc)}</p>
          <div class="tags">
            <span>${passagesCount} Full Passages</span>
            <span>${list.length} Practice Sets</span>
            ${typeTags}
            <span style="color:var(--c1); font-weight:800; background:#fef2f2;">Band 7.5–9.0</span>
          </div>
          <div class="topic-foot">
            <span class="status ${isCompleted ? 'is-done' : ''}" style="font-size:0.8rem; font-weight:700; padding:6px 12px; border-radius:8px; border:1px solid #cbd5e1; background:#f8fafc; color:#475569;">
              ${isCompleted ? '✓ Completed' : d.length > 0 ? d.length + '/' + list.length + ' Done' : 'Incomplete'}
            </span>
            <span style="font-size:0.86rem; font-weight:700; color:var(--c1); display:inline-flex; align-items:center; gap:4px;">
              Explore Sets &rarr;
            </span>
          </div>
        </div>
      </article>
    `;
  }

  // Vocabulary Section Style Card Generator for Question Types
  function renderTypeCard(t, list, idx) {
    const numStr = String(idx + 1).padStart(2, '0');
    const p = CARD_PALETTES[idx % CARD_PALETTES.length];
    const d = list.filter(s => progress[s.id]);
    const q = list.reduce((n, s) => n + s.n, 0);
    const isCompleted = list.length > 0 && d.length === list.length;

    return `
      <article class="topic-card ${isCompleted ? 'is-completed' : ''}" id="rt-type-card-${t.id}" style="--c1:${p.c1}; --c2:${p.c2};" onclick="window.ReadingTrainer.openList('type', '${t.id}')">
        <header class="topic-head">
          <span class="topic-num">${numStr}</span>
          <h3 class="topic-title">Type ${numStr}</h3>
          <span class="topic-icon">${p.icon}</span>
        </header>
        <div class="topic-body">
          <span class="topic-label">QUESTION TYPE &bull; ${CODES[t.id] || 'IELTS'}</span>
          <h4>${esc(t.name)}</h4>
          <p class="keywords">${esc(t.desc)}</p>
          <div class="tags">
            <span>${list.length} Practice Sets</span>
            <span>${q} Questions</span>
            <span style="color:var(--c1); font-weight:800; background:#fef2f2;">All Band Levels</span>
          </div>
          <div class="topic-foot">
            <span class="status ${isCompleted ? 'is-done' : ''}" style="font-size:0.8rem; font-weight:700; padding:6px 12px; border-radius:8px; border:1px solid #cbd5e1; background:#f8fafc; color:#475569;">
              ${isCompleted ? '✓ Completed' : d.length > 0 ? d.length + '/' + list.length + ' Done' : 'Incomplete'}
            </span>
            <span style="font-size:0.86rem; font-weight:700; color:var(--c1); display:inline-flex; align-items:center; gap:4px;">
              Start Drills &rarr;
            </span>
          </div>
        </div>
      </article>
    `;
  }

  // 2. RENDER LIST VIEW (One Type or One Topic)
  function openList(kind, id) {
    if (!initData()) return;
    currentView = 'list';
    currentKind = kind;
    currentTargetId = id;
    clearInterval(timerId);

    const viewEl = document.getElementById('reading-selection-view');
    if (viewEl) viewEl.classList.remove('in-practice-mode');

    const isTopic = kind === 'topic';
    const item = (isTopic ? TOPICS : TYPES).find(x => x.id === id);
    if (!item) {
      renderHome();
      return;
    }

    const list = isTopic ? byTopic[id] : byType[id];
    const nextSet = list.find(s => !progress[s.id]) || list[0];

    const subOpts = isTopic
      ? TYPES.filter(t => list.some(s => s.type === t.id)).map(t => [t.id, t.name])
      : TOPICS.filter(t => list.some(s => s.topic === t.id)).map(t => [t.id, t.name]);

    const code = isTopic ? TCODES[id] : CODES[id];
    const root = getContainer();
    if (!root) return;

    root.innerHTML = `
      <div class="rt-list-wrap">
        <!-- Breadcrumbs Navigation -->
        <div class="rt-crumbs-nav">
          <button class="rt-back-crumb" onclick="window.ReadingTrainer.backToHome()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>Back to ${isTopic ? 'All 9 Topics' : 'All Question Types'}</span>
          </button>
          <span class="rt-crumb-sep">/</span>
          <span class="rt-crumb-cur">${esc(item.name)}</span>
        </div>

        <!-- Banner Header -->
        <div class="rt-list-hero">
          <div class="rt-list-hero-main">
            <span class="rt-code-badge" style="background:#e3f1ec; color:#0e332d; font-size:0.85rem; padding:4px 12px;">
              ${code}
            </span>
            <h1 class="rt-list-title">${esc(item.name)}</h1>
            <p class="rt-list-desc">${esc(item.desc)}</p>
          </div>
          <div class="rt-list-hero-action">
            ${nextSet ? `
              <button class="btn main rt-next-set-btn" onclick="window.ReadingTrainer.openSet('${nextSet.id}')">
                <span>${progress[nextSet.id] ? 'Practise Again' : 'Start Next Set'}</span>
                <span>&rarr;</span>
              </button>
            ` : ''}
          </div>
        </div>

        <!-- Strategy Box -->
        <div class="rt-strategy-box">
          <div class="rt-strategy-tag">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            ${isTopic ? 'ACADEMIC TOPIC OVERVIEW' : 'EXAM STRATEGY & TIPS'}
          </div>
          <p class="rt-strategy-text">
            ${isTopic 
              ? 'Every set below features an authentic Cambridge passage on this academic theme. Sets from the same passage are grouped in sequence so you can complete the entire passage question by question.'
              : esc(item.tip || 'Read the question prompt first, identify key anchor keywords, and scan the passage for synonymous rewording. Do not rely on assumptions; every answer is provable by evidence in the text.')}
          </p>
        </div>

        <!-- Filtering Controls -->
        <div class="rt-filter-bar">
          <div class="rt-chip-group">
            <button class="rt-filter-chip ${activeFilter === 'all' ? 'active' : ''}" onclick="window.ReadingTrainer.setFilter('all')">All Sets (${list.length})</button>
            <button class="rt-filter-chip ${activeFilter === 'new' ? 'active' : ''}" onclick="window.ReadingTrainer.setFilter('new')">Not Tried</button>
            <button class="rt-filter-chip ${activeFilter === 'weak' ? 'active' : ''}" onclick="window.ReadingTrainer.setFilter('weak')">Needs Review (&lt;70%)</button>
            <button class="rt-filter-chip ${activeFilter === 'done' ? 'active' : ''}" onclick="window.ReadingTrainer.setFilter('done')">Completed</button>
          </div>
          <div class="rt-sub-filter">
            <label for="rt-sub-select">${isTopic ? 'Filter by Type:' : 'Filter by Topic:'}</label>
            <select id="rt-sub-select" class="rt-select-dropdown" onchange="window.ReadingTrainer.setSubFilter(this.value)">
              <option value="all">${isTopic ? 'All Question Types' : 'All Topics'}</option>
              ${subOpts.map(([v, l]) => `<option value="${v}" ${activeSubFilter === v ? 'selected' : ''}>${esc(l)}</option>`).join('')}
            </select>
          </div>
        </div>

        <!-- Sets Rows Container -->
        <div class="rt-sets-table" id="rt-sets-rows-container"></div>
      </div>
    `;

    drawListRows();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Light IELTS Warrior Brand Color Themes (Soft, Bright & Academic - No Deep/Heavy Bars)
  const PILL_THEMES = [
    // 01 Light Forest Mint (Primary Brand)
    {
      bar1: '#ffffff',
      bar2: '#f0fdf9',
      border: '#a7f3d0',
      circle: '#0e332d',
      circleText: '#ffffff',
      text: '#0e332d',
      meta: '#164e44',
      badgeBg: '#ecfdf5',
      badgeColor: '#065f46',
      statusBg: '#ffffff',
      statusColor: '#0e332d',
      statusBorder: '#a7f3d0',
      arrowBg: '#ecfdf5',
      arrowColor: '#0e332d'
    },
    // 02 Light Warm Amber Gold
    {
      bar1: '#ffffff',
      bar2: '#fffbeb',
      border: '#fde68a',
      circle: '#b45309',
      circleText: '#ffffff',
      text: '#78350f',
      meta: '#92400e',
      badgeBg: '#fef3c7',
      badgeColor: '#92400e',
      statusBg: '#ffffff',
      statusColor: '#92400e',
      statusBorder: '#fde68a',
      arrowBg: '#fef3c7',
      arrowColor: '#b45309'
    },
    // 03 Light Cambridge Sky Blue
    {
      bar1: '#ffffff',
      bar2: '#f0f9ff',
      border: '#bae6fd',
      circle: '#0284c7',
      circleText: '#ffffff',
      text: '#0c4a6e',
      meta: '#0369a1',
      badgeBg: '#e0f2fe',
      badgeColor: '#0369a1',
      statusBg: '#ffffff',
      statusColor: '#0284c7',
      statusBorder: '#bae6fd',
      arrowBg: '#e0f2fe',
      arrowColor: '#0284c7'
    },
    // 04 Light Academic Emerald
    {
      bar1: '#ffffff',
      bar2: '#f0fdf4',
      border: '#bbf7d0',
      circle: '#059669',
      circleText: '#ffffff',
      text: '#064e3b',
      meta: '#047857',
      badgeBg: '#dcfce7',
      badgeColor: '#047857',
      statusBg: '#ffffff',
      statusColor: '#059669',
      statusBorder: '#bbf7d0',
      arrowBg: '#dcfce7',
      arrowColor: '#059669'
    },
    // 05 Light Academic Crimson
    {
      bar1: '#ffffff',
      bar2: '#fff1f2',
      border: '#fecdd3',
      circle: '#be123c',
      circleText: '#ffffff',
      text: '#881337',
      meta: '#9f1239',
      badgeBg: '#ffe4e6',
      badgeColor: '#9f1239',
      statusBg: '#ffffff',
      statusColor: '#be123c',
      statusBorder: '#fecdd3',
      arrowBg: '#ffe4e6',
      arrowColor: '#be123c'
    },
    // 06 Light Royal Indigo
    {
      bar1: '#ffffff',
      bar2: '#f5f3ff',
      border: '#ddd6fe',
      circle: '#4338ca',
      circleText: '#ffffff',
      text: '#312e81',
      meta: '#3730a3',
      badgeBg: '#ede9fe',
      badgeColor: '#3730a3',
      statusBg: '#ffffff',
      statusColor: '#4338ca',
      statusBorder: '#ddd6fe',
      arrowBg: '#ede9fe',
      arrowColor: '#4338ca'
    },
    // 07 Light Slate Ocean Teal
    {
      bar1: '#ffffff',
      bar2: '#f0fdfa',
      border: '#99f6e4',
      circle: '#0f766e',
      circleText: '#ffffff',
      text: '#134e48',
      meta: '#115e59',
      badgeBg: '#ccfbf1',
      badgeColor: '#115e59',
      statusBg: '#ffffff',
      statusColor: '#0f766e',
      statusBorder: '#99f6e4',
      arrowBg: '#ccfbf1',
      arrowColor: '#0f766e'
    },
    // 08 Light Warm Terracotta
    {
      bar1: '#ffffff',
      bar2: '#fff7ed',
      border: '#fed7aa',
      circle: '#c2410c',
      circleText: '#ffffff',
      text: '#7c2d12',
      meta: '#9a3412',
      badgeBg: '#ffedd5',
      badgeColor: '#9a3412',
      statusBg: '#ffffff',
      statusColor: '#c2410c',
      statusBorder: '#fed7aa',
      arrowBg: '#ffedd5',
      arrowColor: '#c2410c'
    }
  ];

  function drawListRows() {
    const container = document.getElementById('rt-sets-rows-container');
    if (!container) return;

    const isTopic = currentKind === 'topic';
    const list = isTopic ? byTopic[currentTargetId] : byType[currentTargetId];

    const filtered = list.filter(s => {
      const p = progress[s.id];
      if (activeSubFilter !== 'all' && (isTopic ? s.type : s.topic) !== activeSubFilter) return false;
      if (activeFilter === 'new') return !p;
      if (activeFilter === 'done') return !!p;
      if (activeFilter === 'weak') return p && (p.best / s.n < 0.7);
      return true;
    });

    if (!filtered.length) {
      container.innerHTML = `<div class="rt-empty-state">No practice sets match the selected filter criteria.</div>`;
      return;
    }

    container.innerHTML = filtered.map((s, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      const p = PILL_THEMES[idx % PILL_THEMES.length];
      const P = PASSAGES['t' + s.test + 'p' + s.part] || { title: 'Authentic Cambridge Reading Passage' };
      const tag = isTopic ? typeName(s.type) : topicName(s.topic);
      const prog = progress[s.id];
      const statusText = !prog ? 'Not tried' : `Best ${prog.best}/${s.n}`;

      return `
        <article class="rt-pill-card" style="
          --p-bar1: ${p.bar1};
          --p-bar2: ${p.bar2};
          --p-border: ${p.border};
          --p-circle: ${p.circle};
          --p-circle-text: ${p.circleText || '#ffffff'};
          --p-text: ${p.text};
          --p-meta-color: ${p.meta};
          --p-badge-bg: ${p.badgeBg};
          --p-badge-color: ${p.badgeColor};
          --p-status-bg: ${p.statusBg};
          --p-status-color: ${p.statusColor};
          --p-status-border: ${p.statusBorder};
          --p-arrow-bg: ${p.arrowBg};
          --p-arrow-color: ${p.arrowColor};
        " onclick="window.ReadingTrainer.openSet('${s.id}')" title="Click to start ${esc(P.title)}">
          <!-- Left Overlapping Elevated Circle (Image Replica) -->
          <div class="rt-pill-circle">
            <span class="rt-pill-circle-num">${numStr}</span>
          </div>

          <!-- Long Slim Horizontal Pill Bar (Light Brand Tone) -->
          <div class="rt-pill-bar">
            <div class="rt-pill-left">
              <span class="rt-pill-kicker">Test ${s.test} &bull; P${s.part}</span>
              <h4 class="rt-pill-title">${esc(P.title)}</h4>
              <span class="rt-pill-meta">${esc(tag)} &bull; ${s.n} Qs (${s.s}–${s.e})</span>
            </div>
            <div class="rt-pill-right">
              <span class="rt-pill-badge">${statusText}</span>
              <span class="rt-pill-action-circle">&rarr;</span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // 3. RENDER PRACTICE SET RUNNER (Image 2 Full-Height Split Screen)
  function optText(o) {
    return o.l && o.l !== o.v ? `${o.v}  ${o.l}` : o.v;
  }

  function controlFor(set, Q) {
    const name = `${set.id}-q${Q.q}`;
    if (Q.m === 'text') {
      return `<input type="text" class="rt-input-text" id="${name}" data-q="${Q.q}" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type answer...">`;
    }
    if (Q.m === 'multi') {
      return Q.o.map(o => `
        <label class="rt-opt rt-opt-multi">
          <input type="checkbox" name="${name}" value="${esc(o.v)}">
          <span class="rt-opt-box">${esc(o.v)}</span>
          <span class="rt-opt-text">${esc(o.l === o.v ? '' : o.l)}</span>
        </label>
      `).join('');
    }
    const short = Q.o && Q.o.every(o => (o.l || '').length <= 12);
    if (Q.s === 'tf' || (Q.s === 'radio' && short)) {
      return `
        <div class="rt-segmented-group" role="radiogroup" aria-label="Question ${Q.q}">
          ${Q.o.map(o => `
            <label class="rt-seg-lbl">
              <input type="radio" name="${name}" value="${esc(o.v)}">
              <span>${esc(o.l === o.v || Q.s === 'tf' ? o.v : o.v + ' · ' + o.l)}</span>
            </label>
          `).join('')}
        </div>
      `;
    }
    if (Q.s === 'radio') {
      return Q.o.map(o => `
        <label class="rt-opt">
          <input type="radio" name="${name}" value="${esc(o.v)}">
          <span class="rt-opt-box">${esc(o.v)}</span>
          <span class="rt-opt-text">${esc(o.l === o.v ? '' : o.l)}</span>
        </label>
      `).join('');
    }
    return `
      <select class="rt-select-control" id="${name}" data-q="${Q.q}" aria-label="Answer ${Q.q}">
        <option value="">Choose option…</option>
        ${Q.o.map(o => `<option value="${esc(o.v)}">${esc(optText(o))}</option>`).join('')}
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

    currentView = 'practice';
    currentSet = set;
    clearInterval(timerId);

    // Apply practice mode to fill screen with zero cream void
    const viewEl = document.getElementById('reading-selection-view');
    if (viewEl) viewEl.classList.add('in-practice-mode');

    const t = TYPES.find(x => x.id === set.type) || { name: 'IELTS Reading' };
    const P = PASSAGES[`t${set.test}p${set.part}`] || { title: 'Authentic Cambridge Reading Passage', html: '<p>Passage content unavailable.</p>' };
    const targetSeconds = Math.round(set.n * 90);

    const listBox = set.list ? `
      <div class="rt-listbox-card">
        <h4>${set.type === 'headings' ? 'List of Headings' : 'Options List'}</h4>
        <ol class="rt-listbox-ol">
          ${set.list.map(o => `
            <li data-v="${esc(o.v)}">
              <b>${esc(o.v)}</b>
              <span>${esc(o.l === o.v ? '' : o.l)}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    ` : '';

    const root = getContainer();
    if (!root) return;

    // Structure matching Image 2 with top toolbar, resizer divider, and full-height panes
    root.innerHTML = `
      <div class="rt-practice-wrap" id="rt-practice-container">
        <!-- Practice Top Bar (Fullscreen, Back, Highlighter, Clear, Timer, Check) -->
        <header class="rt-practice-topbar">
          <div class="rt-pbar-left">
            <button class="rt-tb-btn" id="rt-fullscreen-btn" onclick="window.ReadingTrainer.toggleFullscreen()" title="Toggle full-screen view">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
              <span id="rt-fs-text">Fullscreen</span>
            </button>

            <button class="rt-tb-btn" onclick="window.ReadingTrainer.backToList()" title="Return to sets list">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              <span>Back to Sets</span>
            </button>

            <div class="rt-pbar-tools" title="Text Highlighting (Writing Section Style & Colors)">
              <button class="rt-tb-btn rt-hl-btn-tool" onclick="window.ieltsApp && window.ieltsApp.applyHighlight('highlight-yellow')" title="Highlight Yellow">
                <span class="color-dot dot-yellow"></span>
                <span>Yellow</span>
              </button>
              <button class="rt-tb-btn rt-hl-btn-tool" onclick="window.ieltsApp && window.ieltsApp.applyHighlight('highlight-green')" title="Highlight Green">
                <span class="color-dot dot-green"></span>
                <span>Green</span>
              </button>
              <button class="rt-tb-btn rt-hl-btn-tool" onclick="window.ieltsApp && window.ieltsApp.applyHighlight('highlight-blue')" title="Highlight Blue">
                <span class="color-dot dot-blue"></span>
                <span>Blue</span>
              </button>
              <button class="rt-tb-btn" onclick="window.ReadingTrainer.clearHighlights()" title="Clear all text highlights in this passage">
                <span>Clear All</span>
              </button>
            </div>
          </div>

          <div class="rt-pbar-center">
            <span class="rt-pbar-passage-tag">${esc(t.name)} &bull; ${esc(topicName(set.topic))}</span>
            <span class="rt-pbar-info">Test ${set.test}, Passage ${set.part} &bull; Q ${set.s}${set.e > set.s ? '–' + set.e : ''} (${set.n} Qs)</span>
          </div>

          <div class="rt-pbar-right">
            <div class="rt-timer-box" id="rt-timer" title="Standard IELTS timing (~90s per question)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span id="rt-timer-clock">0:00</span>
              <small>/ ${fmt(targetSeconds)}</small>
            </div>
            <button class="btn main rt-submit-btn" id="rt-check-btn" onclick="window.ReadingTrainer.checkAnswers()">
              <span>Check Answers</span>
            </button>
          </div>
        </header>

        <!-- Mobile Tab Switcher (<=860px) -->
        <div class="rt-mobile-tabs" id="rt-mobile-tabs">
          <button class="rt-tab-btn active" data-tab="passage" onclick="window.ReadingTrainer.switchMobileTab('passage')">Passage</button>
          <button class="rt-tab-btn" data-tab="questions" onclick="window.ReadingTrainer.switchMobileTab('questions')">Questions</button>
        </div>

        <!-- Edge-to-Edge Split Screen (Image 2 Standard) -->
        <div class="rt-split-panes" id="rt-panes" data-tab="passage">
          <!-- Left Column: Reading Passage -->
          <section class="rt-pane rt-pane-passage" id="rt-pane-passage" aria-label="Reading Passage">
            <div class="rt-passage-content" id="rt-passage-content">
              <div class="rt-passage-header-tag">Reading Passage ${set.part}</div>
              <h2 class="rt-passage-title">${esc(P.title)}</h2>
              <div class="rt-passage-text" id="rt-ptext">
                ${P.html}
              </div>
            </div>
          </section>

          <!-- Middle Splitter Divider [ ◄ ► ] -->
          <div class="rt-splitter" id="rt-splitter" title="Drag to adjust column widths">
            <span class="rt-splitter-handle">&#9664;&#9654;</span>
          </div>

          <!-- Right Column: Questions & Answer Sheet -->
          <section class="rt-pane rt-pane-questions" id="rt-pane-questions" aria-label="Questions Sheet">
            <div class="rt-questions-content" id="rt-qwrap">
              <div class="rt-instructions-card">
                <span class="rt-instr-badge">Instructions</span>
                <div class="rt-instr-text">${set.prompt}</div>
              </div>
              ${listBox}
              <div class="rt-qbody" id="rt-qbody">${set.body || ''}</div>
              <div class="rt-result-card" id="rt-result"></div>
            </div>
          </section>
        </div>
      </div>
    `;

    // Process questions controls & zones
    setupQuestionsControls(set);

    // Setup interactive draggable splitter between panes
    setupSplitter();

    // Start live timer
    const t0 = Date.now();
    const timerClock = document.getElementById('rt-timer-clock');
    const timerBox = document.getElementById('rt-timer');

    timerId = setInterval(() => {
      const s = Math.floor((Date.now() - t0) / 1000);
      if (timerClock) timerClock.textContent = fmt(s);
      if (timerBox) timerBox.classList.toggle('overtime', s > targetSeconds);
    }, 1000);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Setup draggable splitter between passage and questions
  function setupSplitter() {
    const splitter = document.getElementById('rt-splitter');
    const container = document.getElementById('rt-panes');
    const leftPane = document.getElementById('rt-pane-passage');
    const rightPane = document.getElementById('rt-pane-questions');
    if (!splitter || !container || !leftPane || !rightPane) return;

    let isDragging = false;

    splitter.addEventListener('mousedown', function(e) {
      isDragging = true;
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      const rect = container.getBoundingClientRect();
      const offset = e.clientX - rect.left;
      const totalWidth = rect.width;
      const minW = 280;
      if (offset >= minW && (totalWidth - offset) >= minW) {
        const leftPct = (offset / totalWidth) * 100;
        container.style.gridTemplateColumns = `${leftPct}% 8px 1fr`;
      }
    });

    document.addEventListener('mouseup', function() {
      if (isDragging) {
        isDragging = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }
    });

    // Double-click splitter to reset back to 50/50
    splitter.addEventListener('dblclick', function() {
      container.style.gridTemplateColumns = '1fr 8px 1fr';
    });
  }

  // Fullscreen Toggle
  function toggleFullscreen() {
    const container = document.getElementById('rt-practice-container') || document.documentElement;
    const fsText = document.getElementById('rt-fs-text');

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
      }
      if (fsText) fsText.textContent = 'Exit Fullscreen';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      if (fsText) fsText.textContent = 'Fullscreen';
    }
  }

  document.addEventListener('fullscreenchange', function() {
    const fsText = document.getElementById('rt-fs-text');
    if (fsText) {
      fsText.textContent = document.fullscreenElement ? 'Exit Fullscreen' : 'Fullscreen';
    }
  });

  function setupQuestionsControls(set) {
    const ptext = document.getElementById('rt-ptext');
    const qbody = document.getElementById('rt-qbody');
    if (!ptext || !qbody) return;

    const qnums = new Set(set.qs.flatMap(Q => Q.qs || [Q.q]));
    const pzQs = set.qs.filter(Q => Q.pz);
    if (pzQs.length || set.type === 'headings') ptext.classList.add('show-pz');

    ptext.querySelectorAll('.pz').forEach(z => {
      if (!qnums.has(+z.dataset.q)) z.remove();
      else z.textContent = 'Choose a heading for this section in Question ' + z.dataset.q;
    });

    // Replace gaps or append items
    set.qs.forEach(Q => {
      const ctl = controlFor(set, Q);
      const gap = qbody.querySelector(`.gap[data-q="${Q.q}"]`);
      const slot = qbody.querySelector(`.q-item[data-q="${Q.q}"]`);

      if (gap) {
        const w = document.createElement('span');
        w.className = 'rt-gapw';
        w.dataset.q = Q.q;
        w.innerHTML = `<span class="rt-qn-badge">${Q.q}</span>${ctl}`;
        gap.replaceWith(w);
      } else {
        const d = document.createElement('div');
        d.className = 'rt-item-box';
        d.dataset.q = Q.q;
        const label = Q.qs ? `${Q.qs[0]}–${Q.qs[Q.qs.length - 1]}` : Q.q;
        const stmt = Q.t || '';
        const col = Q.m === 'multi' || (Q.s === 'radio' && !Q.o.every(o => (o.l || '').length <= 12));

        d.innerHTML = `
          <span class="rt-qn-badge">${label}</span>
          <div class="rt-item-content">
            ${stmt ? `<div class="rt-item-stmt">${esc(stmt)}</div>` : ''}
            ${Q.m === 'multi' ? `<div class="rt-multi-note">Choose ${Q.qs.length} correct answers:</div>` : ''}
            <div class="rt-ctl-container ${col ? 'is-col' : ''}">${ctl}</div>
          </div>
        `;
        if (slot) slot.replaceWith(d);
        else qbody.appendChild(d);
      }
    });

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
        });
      });
    });

    // Reflect heading choices in passage zones
    const refreshUsed = () => {
      if (!set.list) return;
      const used = new Set([...qbody.querySelectorAll('select.rt-select-control')].map(s => s.value).filter(Boolean));
      document.querySelectorAll('.rt-listbox-ol li').forEach(li => {
        li.classList.toggle('used', used.has(li.dataset.v));
      });
    };

    qbody.addEventListener('change', e => {
      const s = e.target.closest('select.rt-select-control');
      if (!s) return;
      const q = s.dataset.q;
      const z = ptext.querySelector(`.pz[data-q="${q}"]`);
      if (z) {
        const Q = set.qs.find(x => String(x.q) === q);
        const o = Q && Q.o && Q.o.find(x => x.v === s.value);
        z.classList.toggle('filled', !!o);
        z.textContent = o ? optText(o) : 'Choose a heading for this section in Question ' + q;
      }
      refreshUsed();
    });

    setupHighlighter(ptext);
  }

  // Highlighter Integration with Writing Masterclass Style
  function setupHighlighter(ptext) {
    if (!ptext) return;
    // Single-click on ANY highlight in passage removes it immediately (writing section standard)
    ptext.addEventListener('click', e => {
      const m = e.target.closest('.highlight-yellow, .highlight-green, .highlight-blue, .ielts-hl, .rt-mark, mark');
      if (m) {
        e.stopPropagation();
        e.preventDefault();
        const parent = m.parentNode;
        if (parent) {
          while (m.firstChild) parent.insertBefore(m.firstChild, m);
          parent.removeChild(m);
          parent.normalize();
        }
        const b = document.getElementById('hl-floating-bar');
        if (b) b.style.display = 'none';
      }
    });
  }

  function clearHighlights() {
    const container = document.getElementById('rt-practice-container') || document;
    const marks = container.querySelectorAll('.highlight-yellow, .highlight-green, .highlight-blue, .ielts-hl, .rt-mark, mark');
    marks.forEach(m => {
      const p = m.parentNode;
      if (p) {
        while (m.firstChild) p.insertBefore(m.firstChild, m);
        p.removeChild(m);
        p.normalize();
      }
    });
    const bar = document.getElementById('hl-floating-bar');
    if (bar) bar.style.display = 'none';
  }

  function switchMobileTab(tab) {
    const panes = document.getElementById('rt-panes');
    if (panes) panes.dataset.tab = tab;
    document.querySelectorAll('.rt-tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tab);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 4. CHECK ANSWERS & EVALUATION
  let checked = false;
  const evMarks = {};

  function checkAnswers() {
    if (!currentSet) return;
    if (checked) {
      checked = false;
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
      const holder = qbody.querySelector(`.rt-gapw[data-q="${Q.q}"], .rt-item-box[data-q="${Q.q}"]`);

      if (Q.m === 'multi') {
        const boxes = [...qbody.querySelectorAll(`input[name="${name}"]`)];
        let n = 0;
        boxes.forEach(b => {
          const lab = b.closest('.rt-opt');
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
        got += Math.min(n, Q.qs.length);
        if (holder) {
          holder.classList.add(n === Q.qs.length ? 'is-ok' : 'is-bad');
          addAnswerBadge(holder, `${Q.a.join(', ')} (${n} of ${Q.qs.length} correct)`);
        }
        return;
      }

      let val = '';
      const radio = qbody.querySelector(`input[name="${name}"]:checked`);
      const field = document.getElementById(name);

      if (radio) val = radio.value;
      else if (field) val = field.value;

      const ok = Q.m === 'text'
        ? Q.a.some(a => norm(a) === norm(val) && norm(val) !== '')
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

    showExplanations(set, qbody, ptext);

    const prev = progress[set.id];
    progress[set.id] = {
      best: Math.max(got, prev ? prev.best : 0),
      last: got,
      tries: (prev ? prev.tries : 0) + 1
    };
    saveProgress();

    const isTopic = currentKind === 'topic';
    const list = isTopic ? byTopic[set.topic] : byType[set.type];
    const idx = list.indexOf(set);
    const nextSet = list[(idx + 1) % list.length];

    const r = got / set.n;
    const msg = r === 1
      ? 'Perfect score! Every answer is 100% correct.'
      : r >= 0.8
        ? 'Excellent performance! High IELTS Band standard.'
        : r >= 0.5
          ? 'Good attempt! Study the in-passage evidence and explanations for any missed questions.'
          : 'Review each explanation and the highlighted evidence in the passage, then try again.';

    const res = document.getElementById('rt-result');
    if (res) {
      res.innerHTML = `
        <div class="rt-res-left">
          <span class="rt-res-score">${got} <small>/ ${set.n}</small></span>
          <div class="rt-res-feedback">
            <strong>${r >= 0.8 ? 'Band 8.0–9.0 Result' : r >= 0.6 ? 'Band 6.5–7.5 Result' : 'Review Needed'}</strong>
            <p>${msg}</p>
          </div>
        </div>
        <div class="rt-res-actions">
          <button class="btn alt" onclick="window.ReadingTrainer.openSet('${set.id}')">Try Again</button>
          ${nextSet ? `<button class="btn main" onclick="window.ReadingTrainer.openSet('${nextSet.id}')">Next Set &rarr;</button>` : ''}
        </div>
      `;
      res.classList.add('show');
      res.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    const checkBtn = document.getElementById('rt-check-btn');
    if (checkBtn) {
      checkBtn.innerHTML = `<span>Try Again</span>`;
    }

    const panes = document.getElementById('rt-panes');
    if (panes && panes.dataset.tab === 'passage' && window.matchMedia('(max-width: 860px)').matches) {
      switchMobileTab('questions');
    }
  }

  function addAnswerBadge(holder, text) {
    const s = document.createElement('span');
    s.className = 'rt-correct-ans-tag';
    s.innerHTML = `<strong>Correct:</strong> ${esc(text)}`;
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
      ex.className = 'rt-explanation-box';
      ex.innerHTML = `
        <strong>WHY:</strong>
        <span>${esc(Q.x)}</span>
        ${marks.length ? `<button class="rt-evidence-jump-btn" onclick="window.ReadingTrainer.showEvidence('${Q.q}')">&#128065; Show in passage</button>` : ''}
      `;

      const holder = qbody.querySelector(`.rt-gapw[data-q="${Q.q}"], .rt-item-box[data-q="${Q.q}"]`);
      if (holder && holder.classList.contains('rt-item-box')) {
        holder.appendChild(ex);
      } else {
        const row = document.createElement('div');
        row.className = 'rt-xrow ' + (holder && holder.classList.contains('is-ok') ? 'is-ok' : 'is-bad');
        row.innerHTML = `<span class="rt-qn-badge">${label}</span>`;
        row.appendChild(ex);

        let shown = Q.a[0];
        if (Q.o) {
          const o = Q.o.find(x => Q.a.includes(x.v));
          if (o) shown = optText(o);
        }
        const an = document.createElement('span');
        an.className = 'rt-correct-ans-tag';
        an.innerHTML = `<strong>Correct:</strong> ${esc(shown)}`;
        row.appendChild(an);
        rows.push(row);
      }
    });

    if (rows.length) {
      const box = document.createElement('div');
      box.className = 'rt-explanations-list';
      box.innerHTML = '<h4>Detailed Answer Explanations</h4>';
      rows.forEach(r => box.appendChild(r));
      qbody.after(box);
    }

    ptext.querySelectorAll('.rt-ev-badge').forEach(b => {
      b.onclick = () => {
        const h = qbody.querySelector(`.rt-gapw[data-q="${b.dataset.q}"], .rt-item-box[data-q="${b.dataset.q}"]`);
        if (window.matchMedia('(max-width: 860px)').matches) switchMobileTab('questions');
        if (h) h.scrollIntoView({ block: 'center', behavior: 'smooth' });
      };
    });
  }

  function showEvidence(q) {
    const marks = evMarks[q];
    if (!marks || !marks.length) return;

    if (window.matchMedia('(max-width: 860px)').matches) switchMobileTab('passage');

    const ptext = document.getElementById('rt-ptext');
    const badge = (ptext && ptext.querySelector(`.rt-ev-badge[data-q="${q}"]`)) || marks[0];

    badge.scrollIntoView({ block: 'center', behavior: 'smooth' });
    marks.forEach(m => m.classList.add('flash'));
    setTimeout(() => {
      marks.forEach(m => m.classList.remove('flash'));
    }, 1800);
  }

  function markEvidence(root, Q, label) {
    let marks = [];
    if (Q.es) {
      const nums = Q.qs || [Q.q];
      root.querySelectorAll('.ev').forEach(sp => {
        const qs = (sp.dataset.qs || '').split(/\s+/).map(Number);
        if (nums.some(n => qs.includes(n))) {
          sp.classList.add('rt-evhl');
          marks.push(sp);
        }
      });
    }

    if (!marks.length) {
      (Q.ev || []).forEach(t => {
        marks = marks.concat(wrapText(root, t));
      });
    }

    if (marks.length) {
      const b = document.createElement('span');
      b.className = 'rt-ev-badge';
      b.dataset.q = Q.q;
      b.textContent = label;
      b.title = 'Evidence for Question ' + label;
      marks[0].before(b);
    }
    return marks;
  }

  const loosen = s => s.replace(/[’‘`]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-');
  function wrapText(root, needle) {
    const key = loosen(needle.replace(/\s+/g, ''));
    if (key.length < 6) return [];

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement.closest('.pz, .pz-example, .rt-ev-badge, .rt-passage-title')
        ? NodeFilter.FILTER_REJECT
        : NodeFilter.FILTER_ACCEPT
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
      r.setStart(sg.n, sg.s);
      r.setEnd(sg.n, sg.e + 1);
      const m = document.createElement('span');
      m.className = 'rt-evhl';
      r.surroundContents(m);
      out.unshift(m);
    }
    return out;
  }

  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/[’‘`']/g, '').replace(/[“”"]/g, '').replace(/[–—-]/g, ' ')
      .replace(/[^a-z0-9%.\s]/g, ' ').replace(/\.(?!\d)/g, ' ')
      .replace(/\s+/g, ' ').trim().replace(/^(the|a|an) /, '');
  }

  // Navigation helpers
  function switchBrowseMode(mode) {
    browseMode = mode;
    renderHome();
  }

  function setFilter(f) {
    activeFilter = f;
    document.querySelectorAll('.rt-filter-chip').forEach(b => {
      b.classList.toggle('active', b.textContent.toLowerCase().includes(f));
    });
    drawListRows();
  }

  function setSubFilter(val) {
    activeSubFilter = val;
    drawListRows();
  }

  function backToHome() {
    const viewEl = document.getElementById('reading-selection-view');
    if (viewEl) viewEl.classList.remove('in-practice-mode');
    renderHome();
  }

  function backToList() {
    const viewEl = document.getElementById('reading-selection-view');
    if (viewEl) viewEl.classList.remove('in-practice-mode');
    if (currentTargetId) {
      openList(currentKind, currentTargetId);
    } else {
      renderHome();
    }
  }

  // Public API
  window.ReadingTrainer = {
    init: renderHome,
    switchBrowseMode,
    openList,
    openSet,
    setFilter,
    setSubFilter,
    backToHome,
    backToList,
    checkAnswers,
    applyHighlight: color => window.ieltsApp && window.ieltsApp.applyHighlight(color),
    toggleHighlighter: () => window.ieltsApp && window.ieltsApp.applyHighlight('highlight-yellow'),
    clearHighlights,
    switchMobileTab,
    showEvidence,
    toggleFullscreen
  };

})();
