/**
 * IELTS Academic Reading Platform
 * Computer-Delivered IELTS Simulation Engine & Reading Skills Builder
 * Features:
 * - 30 Reading Skills Passages (10 Easy, 10 Medium, 10 Hard)
 * - Parallel per-paragraph vocab note-taking with auto-save to localStorage
 * - A1-A2 simplified 1-2 line summaries & academic vocabulary definitions
 * - Bulletproof, user-friendly Drag & Drop and Click-to-Place matching headings
 * - 100% Selectable text with smart floating highlighter
 * - Count-Up Timer (00:00 -> 59:59)
 * - High-visibility active TFNG buttons
 */

(function () {
  'use strict';

  // --- Official IELTS Academic Reading Band Score Table ---
  function calculateBandScore(correctCount, totalQuestions) {
    let scaled = correctCount;
    if (totalQuestions !== 40 && totalQuestions > 0) {
      scaled = Math.round((correctCount / totalQuestions) * 40);
    }

    if (scaled >= 39) return { band: '9.0', desc: 'Expert User' };
    if (scaled >= 37) return { band: '8.5', desc: 'Very Good User' };
    if (scaled >= 35) return { band: '8.0', desc: 'Very Good User' };
    if (scaled >= 33) return { band: '7.5', desc: 'Good User' };
    if (scaled >= 30) return { band: '7.0', desc: 'Good User' };
    if (scaled >= 27) return { band: '6.5', desc: 'Competent User' };
    if (scaled >= 23) return { band: '6.0', desc: 'Competent User' };
    if (scaled >= 20) return { band: '5.5', desc: 'Modest User' };
    if (scaled >= 16) return { band: '5.0', desc: 'Modest User' };
    if (scaled >= 13) return { band: '4.5', desc: 'Limited User' };
    if (scaled >= 10) return { band: '4.0', desc: 'Limited User' };
    if (scaled >= 7) return { band: '3.5', desc: 'Extremely Limited User' };
    return { band: '3.0', desc: 'Intermittent User' };
  }

  // --- App State ---
  const state = {
    tests: [],
    readingPassages: [],
    currentTest: null,
    currentPartIndex: 0,
    currentQuestionNumber: 1,
    userAnswers: {},       // { [qNum]: string | string[] }
    flaggedQuestions: new Set(),
    
    // Timer: starts at 00:00 and counts up to 59:59
    elapsedSeconds: 0,
    maxSeconds: 3600,
    timerMode: 'countup',  // 'countup' or 'countdown'
    timerInterval: null,
    isPaused: false,
    
    isSubmitted: false,
    isReviewMode: false,
    
    homeMode: 'tests',     // 'tests', 'skills', or 'roadmap'
    currentCategoryFilter: 'all',
    currentDifficultyFilter: 'all',
    currentRoadmapFilter: 'all',
    currentSelectedDay: null,
    currentReadingPassage: null,
    
    fontSizeIndex: 0,
    fontSizes: ['16px', '18px', '20px'],
    themeIndex: 0,
    themes: ['', 'theme-dark', 'theme-yellow-black'],
    
    selectedHeadingForPlacement: null // For click-to-place matching headings
  };

  // --- DOM Elements ---
  const dom = {
    homeView: document.getElementById('home-view'),
    examView: document.getElementById('exam-view'),
    readerView: document.getElementById('reader-view'),
    
    homeBtn: document.getElementById('home-nav-btn'),
    homeBrandBtn: document.getElementById('home-brand-btn'),
    homeTestsSection: document.getElementById('home-tests-section'),
    homeSkillsSection: document.getElementById('home-skills-section'),
    homeRoadmapSection: document.getElementById('home-roadmap-section'),
    tabMockTests: document.getElementById('tab-mock-tests'),
    tabReadingSkills: document.getElementById('tab-reading-skills'),
    tabRoadmap: document.getElementById('tab-roadmap'),
    calendarGrid: document.getElementById('calendar-grid'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    progressPct: document.getElementById('progress-pct'),
    taskModal: document.getElementById('task-modal'),
    modalDayTitle: document.getElementById('modal-day-title'),
    modalTaskDetails: document.getElementById('modal-task-details'),
    modalPhaseTag: document.getElementById('modal-phase-tag'),
    completeTaskBtn: document.getElementById('complete-task-btn'),
    
    testCardsGrid: document.getElementById('test-cards-grid'),
    readingCardsGrid: document.getElementById('reading-cards-grid'),
    catFilterBtns: document.querySelectorAll('.cat-filter-btn'),
    
    readerBody: document.getElementById('reader-body'),
    readerHeaderBadge: document.getElementById('reader-header-badge'),

    timerDisplay: document.getElementById('timer-display'),
    timerModeToggle: document.getElementById('timer-mode-toggle'),
    pauseBtn: document.getElementById('pause-timer-btn'),
    resetTimerBtn: document.getElementById('reset-timer-btn'),
    testSelector: document.getElementById('test-selector'),
    addTestBtn: document.getElementById('add-test-btn'),
    homeAddTestBtn: document.getElementById('home-add-test-btn'),
    fontSizeBtn: document.getElementById('font-size-btn'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    fullscreenBtn: document.getElementById('fullscreen-btn'),
    bannerPartTitle: document.getElementById('banner-part-title'),
    bannerInstructions: document.getElementById('banner-instructions'),
    flagToggleBtn: document.getElementById('flag-toggle-btn'),
    passagePane: document.getElementById('passage-pane'),
    questionsPane: document.getElementById('questions-pane'),
    splitter: document.getElementById('splitter-handle'),
    workspace: document.getElementById('workspace-container'),
    partsTabContainer: document.getElementById('parts-tab-container'),
    questionsGridStrip: document.getElementById('questions-grid-strip'),
    checkAnswersBtn: document.getElementById('check-answers-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    hlFloatingBar: document.getElementById('hl-floating-bar'),
    scoreModal: document.getElementById('score-modal'),
    uploaderModal: document.getElementById('uploader-modal')
  };

  // --- Initialization ---
  function init() {
    initAvatarSystem();
    loadTestsFromStorage();
    loadReadingSkillsData();
    renderHomePage();
    renderReadingSkillsGrid();
    renderRoadmapCalendar();
    populateTestSelector();

    setupSplitter();
    setupTimer();
    setupHighlighter();
    setupGlobalEventListeners();
    initFeedbackSection();
    initAuth();

    showHomeView();
  }

  // --- Data Loading ---
  function loadTestsFromStorage() {
    let custom = [];
    try {
      const stored = localStorage.getItem('ielts_custom_tests');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Only permit user-created custom tests that don't overwrite authentic PDF tests
          custom = parsed.filter(t => t && t.id && t.id.startsWith('custom-'));
        }
      }
    } catch (e) {
      console.error('Error loading custom tests:', e);
    }
    const defaultTests = (typeof DEFAULT_TESTS !== 'undefined') ? DEFAULT_TESTS : (window.DEFAULT_TESTS || []);
    const crackTests = (typeof CRACK_IELTS_TESTS !== 'undefined') ? CRACK_IELTS_TESTS : (window.CRACK_IELTS_TESTS || []);
    const testMap = new Map();
    // Authentic PDF tests take priority
    [...defaultTests, ...crackTests].forEach(function(t) {
      if (t && t.id) testMap.set(t.id, t);
    });
    // Add custom tests only if ID does not collide
    custom.forEach(function(t) {
      if (t && t.id && !testMap.has(t.id)) testMap.set(t.id, t);
    });
    state.tests = Array.from(testMap.values());
  }

  function loadReadingSkillsData() {
    state.readingPassages = (typeof READING_SKILLS_PASSAGES !== 'undefined') ? READING_SKILLS_PASSAGES : [];
  }

  // --- Screen Navigation: Home vs Exam vs Reader ---
  function navigateToHomeSection(sectionId) {
    showHomeView();
    setTimeout(function() {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 50);
  }

  function showIeltsPracticeView() {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('ielts-practice-view');
    if (v) v.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function showIeltsPractice() {
    showIeltsPracticeView();
  }

  function showPracticePortals() {
    showIeltsPracticeView();
  }

  function showHomeView() {
    stopTimer();
    hideAllViews();
    if (dom.homeView) dom.homeView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'instant' });
    renderHomePage();
  }

  function showExamView(testId) {
    stopTimer();
    hideAllViews();
    if (dom.examView) dom.examView.classList.add('active-view');

    if (testId) {
      dom.testSelector.value = testId;
      loadTest(testId);
    }
  }

  function showReaderView(passageId) {
    stopTimer();
    hideAllViews();
    if (dom.readerView) dom.readerView.classList.add('active-view');
    renderReaderPassage(passageId);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  
  // Mobile Navigation Drawer Controls
  function toggleMobileMenu() {
    const navMenu = document.getElementById('main-nav-menu') || document.querySelector('.nav-menu');
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    if (!navMenu) return;
    const isOpen = navMenu.classList.toggle('is-open');
    if (toggleBtn) {
      toggleBtn.classList.toggle('active', isOpen);
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
  }

  function closeMobileMenu() {
    const navMenu = document.getElementById('main-nav-menu') || document.querySelector('.nav-menu');
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    if (navMenu && navMenu.classList.contains('is-open')) {
      navMenu.classList.remove('is-open');
      if (toggleBtn) {
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    }
  }

  // Document listeners for closing mobile menu on outside tap or Escape
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.top')) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeYouTubeResourcesModal();
      closeMobileMenu();
    }
  });

  function hideAllViews() {
    closeMobileMenu();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      isPlayingPassageAudio = false;
      updateAudioBtnUI(false);
    }
    const viewIds = [
      'home-view', 'exam-view', 'reader-view', 'writing-view',
      'listening-view', 'shadowing-view', 'podcast-view', 'roadmap-view', 'grammar-view',
      'reading-selection-view', 'reading-skills-selection-view', 'listening-exam-view', 'vocabulary-view', 'reading-test-frame-view', 'ielts-practice-view'
    ];
    viewIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.classList.remove('active-view');
    });
  }

  // --- Home Mode Switcher: Tests vs Skills vs Roadmap ---
  function switchHomeMode(mode) {
    state.homeMode = mode;
    
    if (dom.tabMockTests) dom.tabMockTests.classList.toggle('active', mode === 'tests');
    if (dom.tabReadingSkills) dom.tabReadingSkills.classList.toggle('active', mode === 'skills');
    if (dom.tabRoadmap) dom.tabRoadmap.classList.toggle('active', mode === 'roadmap');

    if (dom.homeTestsSection) dom.homeTestsSection.style.display = (mode === 'tests') ? 'block' : 'none';
    if (dom.homeSkillsSection) dom.homeSkillsSection.style.display = (mode === 'skills') ? 'block' : 'none';
    if (dom.homeRoadmapSection) dom.homeRoadmapSection.style.display = (mode === 'roadmap') ? 'block' : 'none';

    if (mode === 'tests') {
      renderHomePage();
    } else if (mode === 'skills') {
      renderReadingSkillsGrid();
    } else if (mode === 'roadmap') {
      renderRoadmapCalendar(state.currentRoadmapFilter || 'all');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- Home Page Rendering: Mock Tests ---
  function renderHomePage() {
    if (!dom.testCardsGrid) return;

    let filtered = state.tests;
    if (state.currentCategoryFilter === 'full') {
      filtered = state.tests.filter(t => t.category === 'full' || t.parts.length > 1);
    } else if (state.currentCategoryFilter === 'single') {
      filtered = state.tests.filter(t => t.category === 'single' || t.parts.length === 1);
    }

    let html = '';
    filtered.forEach(test => {
      const isFeatured = test.id === 'test-comm-conflict';
      const questionCount = countTotalQuestions(test);
      const badges = [];

      if (test.badge) {
        badges.push(`<span class="test-badge ${isFeatured ? 'badge-featured' : (test.category === 'full' ? 'badge-full' : 'badge-single')}">${escapeHtml(test.badge)}</span>`);
      }

      const qTypes = getQuestionTypesInTest(test);

      html += `
        <div class="test-card ${isFeatured ? 'featured-card' : ''}">
          <div class="test-card-top">
            <div>${badges.join(' ')}</div>
            <h3 class="test-card-title">${escapeHtml(test.title)}</h3>
            <p class="test-card-subtitle">${escapeHtml(test.subtitle || '')}</p>
            
            <div class="test-meta-pills">
              <span class="meta-pill">${Math.round((test.duration || 3600) / 60)} Mins</span>
              <span class="meta-pill"> ${questionCount} Questions</span>
              ${qTypes.map(t => `<span class="meta-pill">${escapeHtml(t)}</span>`).join('')}
            </div>
          </div>

          <div>
            <button class="test-start-btn" onclick="window.ieltsApp.startTestFromHome('${test.id}')">
              <span>Start Mock Test</span>
              <span>→</span>
            </button>
          </div>
        </div>
      `;
    });

    dom.testCardsGrid.innerHTML = html;
  }

  function countTotalQuestions(test) {
    let count = 0;
    (test.parts || []).forEach(p => {
      (p.questionGroups || []).forEach(g => {
        count += (g.questions || []).length;
      });
    });
    return count;
  }

  function getQuestionTypesInTest(test) {
    const types = new Set();
    (test.parts || []).forEach(p => {
      (p.questionGroups || []).forEach(g => {
        if (g.type === 'matching-headings') types.add('Matching Headings');
        else if (g.type === 'true-false-not-given') types.add('True/False/Not Given');
        else if (g.type === 'diagram-labeling') types.add('Diagram Labeling');
        else if (g.type === 'summary-completion') types.add('Summary Completion');
        else if (g.type === 'multiple-choice') types.add('Multiple Choice');
        else if (g.type === 'matching-researchers') types.add('Matching Researchers');
        else if (g.type === 'short-answer') types.add('Short Answer');
      });
    });
    return Array.from(types).slice(0, 3);
  }

  // --- Reading Skills Grid Rendering (30 Passages) ---
  function filterReadingSkills(difficulty) {
    state.currentDifficultyFilter = difficulty;
    document.querySelectorAll('#home-skills-section .cat-filter-btn').forEach(btn => {
      if (btn.getAttribute('data-difficulty') === difficulty) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    renderReadingSkillsGrid();
  }

  function renderReadingSkillsGrid() {
    if (!dom.readingCardsGrid) return;

    let list = state.readingPassages;
    if (state.currentDifficultyFilter !== 'all') {
      list = list.filter(p => p.level === state.currentDifficultyFilter);
    }

    let html = '';
    list.forEach(p => {
      let badgeClass = 'reading-badge-easy';
      if (p.level === 'medium') badgeClass = 'reading-badge-medium';
      if (p.level === 'hard') badgeClass = 'reading-badge-hard';

      html += `
        <div class="reading-card">
          <div class="reading-card-top">
            <div>
              <span class="reading-badge ${badgeClass}">${escapeHtml(p.levelLabel)}</span>
            </div>
            <h3 class="reading-card-title">${escapeHtml(p.title)}</h3>
            <p class="reading-card-subtitle">Topic: ${escapeHtml(p.topic)}</p>
            
            <div class="reading-meta-pills">
              <span class="meta-pill">~${p.estimatedMinutes} mins read</span>
              <span class="meta-pill"> ${p.wordCount} words</span>
              <span class="meta-pill"> Vocab Notes</span>
              <span class="meta-pill"> A1-A2 Summary</span>
            </div>
          </div>

          <div>
            <button class="read-passage-btn" onclick="window.ieltsApp.openReadingPassage('${p.id}')">
              <span>Read &amp; Learn Vocab</span>
              <span>→</span>
            </button>
          </div>
        </div>
      `;
    });

    dom.readingCardsGrid.innerHTML = html;
  }

  // --- Reading Skills Interactive Reader Screen ---
  let isPlayingPassageAudio = false;

  function togglePassageAudio(passageId) {
    if (!('speechSynthesis' in window)) {
      showReaderToast('Speech synthesis is not supported in this browser.');
      return;
    }

    if (isPlayingPassageAudio) {
      window.speechSynthesis.cancel();
      isPlayingPassageAudio = false;
      updateAudioBtnUI(false);
      return;
    }

    const passage = state.currentReadingPassage;
    if (!passage) return;

    window.speechSynthesis.cancel();

    // Prepare full text
    const fullText = passage.title + '. ' + passage.paragraphs.map(p => p.text).join(' ');
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'en-US';
    utterance.rate = 0.93; // Comfortable learning speed
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const engVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('en-GB') || v.name.includes('en-US')));
    if (engVoice) utterance.voice = engVoice;

    utterance.onstart = function() {
      isPlayingPassageAudio = true;
      updateAudioBtnUI(true);
    };

    utterance.onend = function() {
      isPlayingPassageAudio = false;
      updateAudioBtnUI(false);
    };

    utterance.onerror = function() {
      isPlayingPassageAudio = false;
      updateAudioBtnUI(false);
    };

    window.speechSynthesis.speak(utterance);
  }

  function updateAudioBtnUI(isPlaying) {
    const btn = document.getElementById('r-tts-btn');
    const label = document.getElementById('r-audio-btn-label');
    if (!btn || !label) return;
    if (isPlaying) {
      btn.classList.add('r-playing');
      label.textContent = 'Pause Narration';
    } else {
      btn.classList.remove('r-playing');
      label.textContent = 'Listen to Passage';
    }
  }

  function copyPassageText() {
    const passage = state.currentReadingPassage;
    if (!passage) return;
    const textToCopy = passage.title + '\n\n' + passage.paragraphs.map(p => (p.label ? p.label + ':\n' : '') + p.text).join('\n\n');
    navigator.clipboard.writeText(textToCopy).then(() => {
      showReaderToast('Passage copied to clipboard!');
    }).catch(() => {
      showReaderToast('Could not copy passage text.');
    });
  }

  function showReaderToast(message) {
    let toast = document.getElementById('r-floating-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'r-floating-toast';
      toast.className = 'r-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  function updateConsolidatedNotesReview(passageId) {
    const passage = state.currentReadingPassage;
    if (!passage || passage.id !== passageId) return;

    const container = document.getElementById('consolidated-notes-container');
    const badge = document.getElementById('consolidated-notes-badge');
    if (!container) return;

    let userNotesCount = 0;
    const notesList = passage.paragraphs.map((para, idx) => {
      const key = `ielts_reading_notes_${passage.id}_${para.id}`;
      const note = (localStorage.getItem(key) || '').trim();
      if (note) userNotesCount++;
      return { label: para.label || `Paragraph ${idx + 1}`, note };
    }).filter(item => item.note);

    if (badge) badge.textContent = `${userNotesCount} Notes Saved`;

    if (notesList.length > 0) {
      container.innerHTML = `
        <div class="r-saved-notes-grid">
          ${notesList.map(item => `
            <div class="r-saved-note-item">
              <span class="r-saved-note-label">${escapeHtml(item.label)}</span>
              <div class="r-saved-note-text">${escapeHtml(item.note)}</div>
            </div>
          `).join('')}
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="r-empty-notes-prompt">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          <p>You haven't typed any notes for this passage yet. Use the <strong>"Paragraph Notes"</strong> box under any paragraph above to jot down difficult vocabulary or collocations—they will be neatly consolidated here!</p>
        </div>
      `;
    }
  }

  function saveParaNote(passageId, paraId, text) {
    const key = `ielts_reading_notes_${passageId}_${paraId}`;
    localStorage.setItem(key, text);

    const statusEl = document.getElementById(`note-status-${paraId}`);
    if (statusEl) {
      statusEl.textContent = 'Saving...';
      statusEl.style.color = '#eab308';
      clearTimeout(statusEl._timer);
      statusEl._timer = setTimeout(() => {
        statusEl.textContent = '✓ Saved';
        statusEl.style.color = '#10b981';
      }, 400);
    }

    updateConsolidatedNotesReview(passageId);
  }

  function renderReaderPassage(passageId) {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    isPlayingPassageAudio = false;

    const list = (typeof READING_SKILLS_PASSAGES !== 'undefined') ? READING_SKILLS_PASSAGES : (state.readingPassages || []);
    const passage = list.find(p => p.id === passageId);
    if (!passage) return;
    state.currentReadingPassage = passage;

    // Update header badge
    let badgeClass = 'reading-badge-easy';
    if (passage.level === 'medium') badgeClass = 'reading-badge-medium';
    if (passage.level === 'hard') badgeClass = 'reading-badge-hard';
    if (dom.readerHeaderBadge) {
      dom.readerHeaderBadge.className = `reading-badge ${badgeClass}`;
      dom.readerHeaderBadge.textContent = passage.levelLabel || (passage.level ? passage.level.toUpperCase() : 'EASY');
    }

    // Collect all saved notes for this passage
    let userNotesCount = 0;
    const userNotesList = passage.paragraphs.map((para, idx) => {
      const storageKey = `ielts_reading_notes_${passage.id}_${para.id}`;
      const note = (localStorage.getItem(storageKey) || '').trim();
      if (note) userNotesCount++;
      return { label: para.label || `Paragraph ${idx + 1}`, note: note };
    }).filter(item => item.note);

    const currentIndex = list.findIndex(p => p.id === passage.id);
    const prevPassage = currentIndex > 0 ? list[currentIndex - 1] : null;
    const nextPassage = currentIndex < list.length - 1 ? list[currentIndex + 1] : null;

    let html = `
      <!-- 1. Hero Card -->
      <div class="r-hero-card">
        <div class="r-hero-badges">
          <span class="r-badge r-badge-${passage.level || 'easy'}">
            ${escapeHtml(passage.levelLabel || (passage.level ? passage.level.toUpperCase() : 'EASY'))}
          </span>
          <span class="r-topic-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            ${escapeHtml(passage.topic || 'Academic IELTS')}
          </span>
          <span class="r-stat-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ~${passage.estimatedMinutes || 4} Mins Read
          </span>
          <span class="r-stat-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            ${passage.wordCount || 325} Words (Academic)
          </span>
        </div>

        <h1 class="r-hero-title">${escapeHtml(passage.title)}</h1>

        <div class="r-hero-toolbar">
          <button class="r-tool-btn r-audio-btn" id="r-tts-btn" onclick="window.ieltsApp.togglePassageAudio('${passage.id}')" title="Listen to clear pronunciation">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            <span id="r-audio-btn-label">Listen to Passage</span>
          </button>

          <button class="r-tool-btn" onclick="window.ieltsApp.copyPassageText()" title="Copy entire passage">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy Passage</span>
          </button>

          <button class="r-tool-btn" onclick="document.getElementById('study-hub').scrollIntoView({behavior:'smooth'})" title="Jump to Summary &amp; Vocab">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m16 12-4 4-4-4"/><path d="M12 8v8"/></svg>
            <span>Jump to Vocab &amp; Summary</span>
          </button>
        </div>

        <div class="r-hero-tip">
          💡 <strong>IELTS Reader Tip:</strong> Read paragraph by paragraph. Note down unfamiliar collocations or words in the box below each paragraph—they are automatically saved and summarized at the bottom!
        </div>
      </div>
    `;

    // 2. Editorial Paragraph Cards
    passage.paragraphs.forEach((para, idx) => {
      const storageKey = `ielts_reading_notes_${passage.id}_${para.id}`;
      const savedNote = localStorage.getItem(storageKey) || '';
      const paraWc = para.text.trim().split(/\s+/).filter(Boolean).length;

      html += `
        <article class="r-para-card" id="r-para-${para.id}">
          <div class="r-para-header">
            <div class="r-para-badge-wrap">
              <span class="r-para-num-pill">${escapeHtml(para.label || `PARAGRAPH ${idx + 1}`)}</span>
              <span class="r-para-wc-pill">${paraWc} words</span>
            </div>
            <span style="font-size:0.8rem; color:#64748b; font-weight:500;">Academic Reading Drill</span>
          </div>

          <div class="r-para-text-body">
            <p class="r-para-text">${formatParagraphText(para.text)}</p>
          </div>

          <div class="r-para-note-drawer" id="r-note-drawer-${para.id}">
            <div class="r-note-drawer-header">
              <div class="r-note-drawer-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                <span>My Notes &amp; Difficult Vocab (${escapeHtml(para.label || `Paragraph ${idx + 1}`)})</span>
              </div>
              <span class="r-note-autosave-badge" id="note-status-${para.id}">✓ Saved</span>
            </div>
            <textarea class="r-note-textarea"
                      id="note-input-${para.id}"
                      placeholder="Type hard vocabularies, Bengali meanings, or main ideas here... (Auto-saves to browser)"
                      oninput="window.ieltsApp.saveParaNote('${passage.id}', '${para.id}', this.value)">${escapeHtml(savedNote)}</textarea>
          </div>
        </article>
      `;
    });

    // 3. Comprehensive Study & Analysis Hub
    html += `
      <section class="r-study-hub" id="study-hub">
        <div class="r-hub-header">
          <div class="r-hub-title-box">
            <span class="r-hub-icon">🎓</span>
            <div>
              <h2 class="r-hub-title">Comprehensive Study &amp; Analysis Hub</h2>
              <p class="r-hub-subtitle">Simplified paragraph summaries, core meaning, and band 8+ academic vocabulary.</p>
            </div>
          </div>
        </div>

        <!-- Card 1: Paragraph-by-Paragraph Summaries -->
        <div class="r-hub-card">
          <div class="r-hub-card-header">
            <div class="r-card-title-group">
              <span class="r-card-icon">📋</span>
              <h3 class="r-card-title">Paragraph-by-Paragraph Summaries</h3>
            </div>
            <span class="r-card-badge">Simplified A1–A2 Plain English</span>
          </div>

          <div class="r-summary-timeline">
            ${passage.paragraphs.map((p, idx) => `
              <div class="r-summary-item r-summary-item-${(idx % 3) + 1}">
                <div class="r-summary-pill">${escapeHtml(p.label || `Paragraph ${idx + 1}`)}</div>
                <p class="r-summary-text">${escapeHtml(p.paraSummaryA1 || 'No summary available.')}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Card 2: Full Passage Core Takeaway -->
        <div class="r-hub-card r-takeaway-card">
          <div class="r-hub-card-header">
            <div class="r-card-title-group">
              <span class="r-card-icon">🎯</span>
              <h3 class="r-card-title">Full Passage Core Takeaway</h3>
            </div>
            <span class="r-card-badge r-badge-takeaway">Master Meaning in 1–2 Lines</span>
          </div>

          <div class="r-takeaway-content">
            <p class="r-takeaway-text">${escapeHtml(passage.overallSummaryA1 || '')}</p>
          </div>
        </div>

        <!-- Card 3: Key Academic Vocabulary & Definitions -->
        ${passage.keyVocab && passage.keyVocab.length > 0 ? `
          <div class="r-hub-card">
            <div class="r-hub-card-header">
              <div class="r-card-title-group">
                <span class="r-card-icon">📚</span>
                <h3 class="r-card-title">Key Academic Vocabulary &amp; Definitions</h3>
              </div>
              <span class="r-card-badge">${passage.keyVocab.length} Essential Words</span>
            </div>

            <div class="r-vocab-grid">
              ${passage.keyVocab.map(v => `
                <div class="r-vocab-item">
                  <div class="r-vocab-head">
                    <span class="r-vocab-word">${escapeHtml(v.word)}</span>
                  </div>
                  <div class="r-vocab-meaning">${escapeHtml(v.meaning)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Card 4: Consolidated Saved Notes Review -->
        <div class="r-hub-card">
          <div class="r-hub-card-header">
            <div class="r-card-title-group">
              <span class="r-card-icon">📝</span>
              <h3 class="r-card-title">My Saved Vocabulary Notes</h3>
            </div>
            <span class="r-card-badge" id="consolidated-notes-badge">${userNotesCount} Notes Saved</span>
          </div>

          <div id="consolidated-notes-container">
            ${userNotesList.length > 0 ? `
              <div class="r-saved-notes-grid">
                ${userNotesList.map(item => `
                  <div class="r-saved-note-item">
                    <span class="r-saved-note-label">${escapeHtml(item.label)}</span>
                    <div class="r-saved-note-text">${escapeHtml(item.note)}</div>
                  </div>
                `).join('')}
              </div>
            ` : `
              <div class="r-empty-notes-prompt">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                <p>You haven't typed any notes for this passage yet. Use the <strong>"Paragraph Notes"</strong> box under any paragraph above to jot down difficult vocabulary or collocations—they will be neatly consolidated here!</p>
              </div>
            `}
          </div>
        </div>

        <!-- Card 5: Bottom Navigation Between Passages -->
        <div class="r-nav-footer">
          ${prevPassage ? `
            <button class="r-nav-btn" onclick="window.ieltsApp.openReadingPassage('${prevPassage.id}')">
              <span class="r-nav-dir">← Previous Drill</span>
              <span class="r-nav-title">${escapeHtml(prevPassage.title.length > 32 ? prevPassage.title.substring(0, 30) + '...' : prevPassage.title)}</span>
            </button>
          ` : `<div class="r-nav-placeholder"></div>`}

          <button class="r-nav-btn r-nav-all" onclick="window.ieltsApp.showReadingSkillsSelection();">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            <span>All 30 Passages</span>
          </button>

          ${nextPassage ? `
            <button class="r-nav-btn" onclick="window.ieltsApp.openReadingPassage('${nextPassage.id}')">
              <span class="r-nav-dir">Next Drill →</span>
              <span class="r-nav-title">${escapeHtml(nextPassage.title.length > 32 ? nextPassage.title.substring(0, 30) + '...' : nextPassage.title)}</span>
            </button>
          ` : `<div class="r-nav-placeholder"></div>`}
        </div>
      </section>
    `;

    dom.readerBody.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- 60-Day IELTS Routine & Roadmap (Moktadir's IELTS School Framework) ---
  function convertToBanglaNumber(number) {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return number.toString().split('').map(digit => banglaDigits[digit] || digit).join('');
  }

  function getCompletedRoadmapDays() {
    try {
      const saved = localStorage.getItem('mis_roadmap_progress');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Error reading mis_roadmap_progress:', e);
    }
    return [];
  }

  function saveCompletedRoadmapDays(days) {
    localStorage.setItem('mis_roadmap_progress', JSON.stringify(days));
  }

  function getRoadmapTasks() {
    return (typeof ROADMAP_TASKS !== 'undefined') ? ROADMAP_TASKS : {};
  }

  function renderRoadmapCalendar(filter = 'all') {
    state.currentRoadmapFilter = filter;
    if (!dom.calendarGrid) return;

    const completed = getCompletedRoadmapDays();
    const tasks = getRoadmapTasks();

    let daysToDisplay = [];
    for (let i = 1; i <= 60; i++) {
      if (filter === 'all') {
        daysToDisplay.push(i);
      } else if (filter === 'w1' && i >= 1 && i <= 7) {
        daysToDisplay.push(i);
      } else if (filter === 'w2' && i >= 8 && i <= 14) {
        daysToDisplay.push(i);
      } else if (filter === 'w3' && i >= 15 && i <= 21) {
        daysToDisplay.push(i);
      } else if (filter === 'w4' && i >= 22 && i <= 28) {
        daysToDisplay.push(i);
      } else if (filter === 'w5' && i >= 29 && i <= 35) {
        daysToDisplay.push(i);
      } else if (filter === 'w6' && i >= 36 && i <= 42) {
        daysToDisplay.push(i);
      } else if (filter === 'w7' && i >= 43 && i <= 49) {
        daysToDisplay.push(i);
      } else if (filter === 'w8' && i >= 50 && i <= 60) {
        daysToDisplay.push(i);
      } else if (filter === 'completed' && completed.includes(i)) {
        daysToDisplay.push(i);
      } else if (filter === 'pending' && !completed.includes(i)) {
        daysToDisplay.push(i);
      }
    }

    let html = '';
    daysToDisplay.forEach(dayNum => {
      const isDone = completed.includes(dayNum);
      const dayHtml = tasks[dayNum] || '';
      // Extract title snippet from first <strong>
      const titleMatch = dayHtml.match(/<strong>(.*?)<\/strong>/);
      let dayTitle = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : `Day ${dayNum} Tasks`;
      // Clean up repetitive "Day X:" from title if present
      dayTitle = dayTitle.replace(/^Day\s*\d+\s*:\s*/i, '');

      html += `
        <div class="day-card ${isDone ? 'completed' : ''}" id="day-${dayNum}" onclick="window.ieltsApp.openRoadmapDayModal(${dayNum})" title="Day ${dayNum} Task">
          <span class="day-card-num">Day ${dayNum}</span>
        </div>
      `;
    });

    if (daysToDisplay.length === 0) {
      html = `<div style="grid-column: 1 / -1; text-align:center; padding: 40px; color:var(--text-muted);">No days match this filter.</div>`;
    }

    dom.calendarGrid.innerHTML = html;
    updateRoadmapProgressUI();
  }

  function updateRoadmapProgressUI() {
    const completed = getCompletedRoadmapDays();
    const count = completed.length;
    const pct = Math.round((count / 60) * 100);

    if (dom.progressText) {
      dom.progressText.textContent = `${convertToBanglaNumber(count)}/৬০`;
    }
    if (dom.progressPct) {
      dom.progressPct.textContent = `${pct}% Complete`;
    }
    if (dom.progressBar) {
      dom.progressBar.style.width = `${pct}%`;
    }
  }

  function filterRoadmap(filter) {
    document.querySelectorAll('[data-roadmap-filter]').forEach(btn => {
      if (btn.getAttribute('data-roadmap-filter') === filter) btn.classList.add('active');
      else btn.classList.remove('active');
    });
    renderRoadmapCalendar(filter);
  }

  function openRoadmapDayModal(dayNumber) {
    state.currentSelectedDay = dayNumber;
    const tasks = getRoadmapTasks();
    const completed = getCompletedRoadmapDays();
    const isDone = completed.includes(dayNumber);

    if (dom.modalDayTitle) {
      dom.modalDayTitle.textContent = `Day ${dayNumber} Task`;
    }

    // Determine Phase Tag
    let phase = 'Phase 1: Foundation';
    if (dayNumber > 15 && dayNumber <= 30) phase = 'Phase 2: Question Types & Skills';
    else if (dayNumber > 30 && dayNumber <= 45) phase = 'Phase 3: Speed & Mocks';
    else if (dayNumber > 45) phase = 'Phase 4: Final Exam Readiness';
    if (dom.modalPhaseTag) dom.modalPhaseTag.textContent = phase;

    let contentHtml = tasks[dayNumber] || "<div style='text-align:center; padding: 20px; color:#666;'>এই দিনের টাস্ক খুব শীঘ্রই আপডেট করা হবে! বেসিক ইমপ্রুভমেন্টের ওপর ফোকাস রাখুন।</div>";
    if (dom.modalTaskDetails) {
      dom.modalTaskDetails.innerHTML = contentHtml;

      // Restore and bind individual task checkboxes
      const checkboxes = dom.modalTaskDetails.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((cb, idx) => {
        const boxId = cb.id || `d${dayNumber}-t${idx + 1}`;
        const key = `mis_task_checkbox_${dayNumber}_${boxId}`;
        const savedChecked = localStorage.getItem(key) === 'true';
        cb.checked = savedChecked || isDone;

        cb.addEventListener('change', () => {
          localStorage.setItem(key, cb.checked);
        });
      });
    }

    if (dom.completeTaskBtn) {
      if (isDone) {
        dom.completeTaskBtn.textContent = 'Mark as Incomplete ↺';
        dom.completeTaskBtn.style.background = '#475569';
      } else {
        dom.completeTaskBtn.textContent = 'Mark as Complete ';
        dom.completeTaskBtn.style.background = 'linear-gradient(135deg, #e31837 0%, #b91c1c 100%)';
      }
    }

    if (dom.taskModal) {
      dom.taskModal.style.display = 'flex';
    }
  }

  function closeRoadmapModal() {
    if (dom.taskModal) {
      dom.taskModal.style.display = 'none';
    }
  }

  function toggleCurrentDayComplete() {
    const dayNumber = state.currentSelectedDay;
    if (!dayNumber) return;

    let completed = getCompletedRoadmapDays();
    if (completed.includes(dayNumber)) {
      completed = completed.filter(d => d !== dayNumber);
    } else {
      completed.push(dayNumber);
      // Also mark all checkboxes for this day as checked
      if (dom.modalTaskDetails) {
        dom.modalTaskDetails.querySelectorAll('input[type="checkbox"]').forEach(cb => {
          cb.checked = true;
          const boxId = cb.id || '';
          if (boxId) localStorage.setItem(`mis_task_checkbox_${dayNumber}_${boxId}`, 'true');
        });
      }
    }

    saveCompletedRoadmapDays(completed);
    updateRoadmapProgressUI();
    renderRoadmapCalendar(state.currentRoadmapFilter || 'all');
    closeRoadmapModal();
  }

  // --- CD IELTS Exam Simulation ---
  function populateTestSelector() {
    if (!dom.testSelector) return;
    dom.testSelector.innerHTML = '';
    state.tests.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id;
      opt.textContent = t.title;
      dom.testSelector.appendChild(opt);
    });
  }

  function loadTest(testId) {
    const found = state.tests.find(t => t.id === testId);
    if (!found) return;

    state.currentTest = found;
    state.currentPartIndex = 0;
    state.userAnswers = {};
    state.flaggedQuestions.clear();
    state.isSubmitted = false;
    state.isReviewMode = false;
    state.selectedHeadingForPlacement = null;

    // Reset elapsed timer to 00:00
    state.elapsedSeconds = 0;
    state.maxSeconds = found.duration || 3600;
    state.isPaused = false;

    dom.checkAnswersBtn.textContent = 'Check Answers';
    dom.checkAnswersBtn.style.display = 'block';

    const firstQ = found.parts[0]?.questionGroups[0]?.questions[0]?.number || 1;
    state.currentQuestionNumber = firstQ;

    renderCurrentPart();
    updateTimerDisplay();
    startTimer();
  }

  function renderCurrentPart() {
    if (!state.currentTest) return;
    const part = state.currentTest.parts[state.currentPartIndex];
    if (!part) return;

    const isFullMock = state.currentTest.category === 'full' || state.currentTest.parts.length === 3;
    if (isFullMock) {
      dom.bannerPartTitle.textContent = `${state.currentTest.title} • ${part.passage.title} (${part.range})`;
    } else {
      dom.bannerPartTitle.textContent = `${part.title} - ${part.passage.title}`;
    }
    dom.bannerInstructions.textContent = part.instructions || `Read the text and answer ${part.range}.`;

    renderPassage(part);
    renderQuestions(part);
    renderBottomNavBar();
    updateFlagBtn();
    highlightActiveQuestion();
  }

  function renderPassage(part) {
    const p = part.passage;
    let html = `
      <div class="passage-header">
        <h1 class="passage-title">${escapeHtml(p.title)}</h1>
        ${p.subtitle ? `<div class="passage-subtitle">${escapeHtml(p.subtitle)}</div>` : ''}
      </div>
      <div class="passage-body" id="passage-text-container">
    `;

    if (p.paragraphs && p.paragraphs.length > 0) {
      p.paragraphs.forEach(sec => {
        html += `<div class="passage-section" id="section-${sec.id}">`;
        
        // Matching Headings Drop Zone
        if (sec.headingQuestion) {
          const qNum = sec.headingQuestion;
          const placedVal = state.userAnswers[qNum] || '';
          
          html += `
            <div class="heading-drop-zone ${placedVal ? 'has-placed' : ''}" 
                 id="drop-zone-${qNum}" 
                 data-question-number="${qNum}"
                 onclick="window.ieltsApp.handleDropZoneClick(${qNum})"
                 title="Drag a heading here or click to place">
              ${placedVal ? `
                <div class="placed-heading-chip">
                  <span>${escapeHtml(placedVal)}</span>
                  ${!state.isReviewMode ? `
                    <button class="remove-heading-btn" title="Remove" onclick="event.stopPropagation(); window.ieltsApp.removePlacedHeading(${qNum})">×</button>
                  ` : ''}
                </div>
              ` : `
                <span class="drop-zone-placeholder">[ ${qNum} ] Drop heading here</span>
              `}
            </div>
          `;
        }

        if (sec.label && !sec.headingQuestion) {
          html += `<div class="section-label">${escapeHtml(sec.label)}</div>`;
        }

        html += `<p class="passage-paragraph">${formatParagraphText(sec.text)}</p>`;
        html += `</div>`;
      });
    }

    html += `</div>`;
    dom.passagePane.innerHTML = html;

    setupPassageDropZones();
  }

  function formatParagraphText(text) {
    return escapeHtml(text).replace(/\n/g, '<br>');
  }

  function renderQuestions(part) {
    let html = '';

    part.questionGroups.forEach(group => {
      html += `
        <div class="question-group-header">
          <h2 class="question-group-title">${escapeHtml(group.range || '')}</h2>
          <div class="question-group-instructions">${escapeHtml(group.instructions || '')}</div>
        </div>
      `;

      if (group.type === 'diagram-labeling' && group.image) {
        html += `
          <div class="diagram-container">
            ${group.title ? `<h3 style="margin-bottom:10px; font-weight:700;">${escapeHtml(group.title)}</h3>` : ''}
            <img src="${group.image}" alt="Diagram" class="diagram-image">
          </div>
        `;
      }

      // Matching Headings List
      if (group.type === 'matching-headings' && group.headings) {
        html += `
          <div class="headings-box">
            <div class="headings-box-title">List of Headings:</div>
            <div class="headings-list">
        `;
        group.headings.forEach((heading, idx) => {
          const headingNum = heading.split('.')[0].trim();
          const isPlaced = Object.values(state.userAnswers).some(ans => {
            if (typeof ans !== 'string') return false;
            return ans.trim() === headingNum || ans.trim() === heading.trim();
          });

          html += `
            <div class="heading-chip ${isPlaced ? 'placed' : ''} ${(state.selectedHeadingForPlacement && state.selectedHeadingForPlacement.toLowerCase() === headingNum.toLowerCase()) ? 'active picked-up' : ''}" 
                 id="heading-chip-${idx}"
                 draggable="${!isPlaced && !state.isReviewMode}"
                 data-heading="${escapeHtml(heading)}"
                 data-roman="${escapeHtml(headingNum)}"
                 title="${isPlaced ? 'Already placed in a section' : 'Drag this heading into a gap on the left, or click to select'}"
                 onclick="window.ieltsApp.selectHeadingForPlacement('${escapeHtml(headingNum)}')">
              ${escapeHtml(heading)}
            </div>
          `;
        });
        html += `
            </div>
          </div>
        `;
      }

      if (['summary-completion', 'notes-completion', 'sentence-completion', 'flow-chart-completion', 'table-completion'].includes(group.type)) {
        html += renderNotesOrSummaryGroup(group);
      } else {
        group.questions.forEach(q => {
          html += renderSingleQuestion(q, group);
        });
      }
    });

    html += `
      <div class="pane-navigation-controls">
        <button class="nav-arrow-btn" id="pane-prev-btn" onclick="window.ieltsApp.goToPrevQuestion()" title="Previous Question">&lt;</button>
        <button class="nav-arrow-btn" id="pane-next-btn" onclick="window.ieltsApp.goToNextQuestion()" title="Next Question">&gt;</button>
      </div>
    `;

    dom.questionsPane.innerHTML = html;
    setupDraggableHeadings();
  }

  
  
  function renderGapInputHTML(q) {
    const num = q.number;
    const userAnswer = state.userAnswers[num] || '';
    const isFlagged = state.flaggedQuestions.has(num);
    const isActive = num === state.currentQuestionNumber;

    let reviewHtml = '';
    let statusClass = '';
    if (state.isReviewMode) {
      const isCorrect = checkIsAnswerCorrect(q, userAnswer);
      statusClass = isCorrect ? 'ok' : 'bad';
      const correctStr = (q.correctAnswers || []).join(' OR ');
      reviewHtml = isCorrect 
        ? ` <span class="ans ok-text">✔</span>`
        : ` <span class="ans bad-text">✔ Correct answer: <strong>${escapeHtml(correctStr)}</strong></span>` +
          (q.evidence ? ` <button type="button" class="locate-evidence-btn mini" onclick="window.ieltsApp.locateEvidence(${num})" title="Show in Passage">Show in Passage</button>` : '');
    }

    return `<span class="gap-slot ${isFlagged ? 'flagged' : ''}" id="gap-slot-${num}">` +
      `<b class="n-badge ${isActive ? 'active' : ''}">${num}</b> ` +
      `<input type="text" ` +
             `class="cd-gap-input ${statusClass} ${userAnswer ? 'has-val' : ''}" ` +
             `id="input-q-${num}" ` +
             `name="t${num}" ` +
             `data-qnum="${num}" ` +
             `value="${escapeHtml(String(userAnswer))}" ` +
             `autocomplete="off" ` +
             `spellcheck="false" ` +
             `${state.isReviewMode ? 'disabled' : ''} ` +
             `onfocus="window.ieltsApp.setActiveQuestion(${num})" ` +
             `oninput="window.ieltsApp.handleAnswerChange(${num}, this.value)">` +
      reviewHtml +
    `</span>`;
  }

  function renderNotesOrSummaryGroup(group) {
    let mainTitle = group.title || '';
    
    let html = `<div class="notes" id="group-notes-${group.range || ''}">`;
    if (mainTitle) {
      html += `<h4 class="notes-main-title" style="font-size:17px">${escapeHtml(mainTitle)}</h4>`;
    }

    let lastHeading = '';

    group.questions.forEach((q) => {
      const num = q.number;
      let prompt = (q.prompt || '').trim();
      let suffix = (q.suffix || '').trim();
      const isFlagged = state.flaggedQuestions.has(num);
      const isActive = num === state.currentQuestionNumber;

      // Extract section/heading prefix (e.g., "Appearance:", "Nesting:", "Hunting:", etc.)
      let currentHeading = '';
      const headingMatch = prompt.match(/^([A-Za-z0-9\s,'’()–—-]+):\s*(.*)$/);
      if (headingMatch) {
        currentHeading = headingMatch[1].trim();
        prompt = headingMatch[2].trim();
      }

      // Output <h4> if new section heading detected
      if (currentHeading && currentHeading.toLowerCase() !== lastHeading.toLowerCase()) {
        html += `<h4>${escapeHtml(currentHeading)}</h4>`;
        lastHeading = currentHeading;
      }

      const inputHtml = renderGapInputHTML(q);
      const exactBracket = new RegExp('\\[\\s*' + num + '\\s*\\]', 'g');
      const anyBracket = /\\[\\s*\\d+\\s*\\]/g;

      let lineHtml = '';
      if (exactBracket.test(prompt)) {
        lineHtml = escapeHtml(prompt).replace(exactBracket, inputHtml);
      } else if (anyBracket.test(prompt)) {
        lineHtml = escapeHtml(prompt).replace(anyBracket, inputHtml);
      } else if (prompt.endsWith('?')) {
        lineHtml = `<div class="short-answer-prompt">${escapeHtml(prompt)}</div><div class="short-answer-input-row">${inputHtml}</div>`;
      } else {
        lineHtml = escapeHtml(prompt) + ' ' + inputHtml + (suffix ? ' ' + escapeHtml(suffix) : '');
      }

      html += `
        <p class="notes-item question-item ${isActive ? 'active active-focus' : ''} ${isFlagged ? 'flagged' : ''}" 
           id="question-item-${num}" 
           data-qnum="${num}"
           onclick="window.ieltsApp.setActiveQuestion(${num})">
          – ${lineHtml}
        </p>
      `;

      // Render contextAfter line if present (e.g. non-question bullet in original exam)
      if (q.contextAfter) {
        html += `<p class="notes-bullet-context">– ${escapeHtml(q.contextAfter)}</p>`;
      }
    });

    html += `</div>`;
    return html;
  }

  function renderSingleQuestion(q, group) {
    const isFlagged = state.flaggedQuestions.has(q.number);
    const userAnswer = state.userAnswers[q.number] || '';
    const isActive = q.number === state.currentQuestionNumber;

    let html = `
      <div class="question-item ${isActive ? 'active active-focus' : ''} ${isFlagged ? 'flagged' : ''}" 
           id="question-item-${q.number}" 
           data-qnum="${q.number}"
           onclick="window.ieltsApp.setActiveQuestion(${q.number})">
        <div class="question-header-row">
          <span class="question-num-tag">${q.number}</span>
          <div class="question-prompt">
            ${escapeHtml(q.prompt || '')}
            ${q.suffix ? ` <span class="prompt-suffix">${escapeHtml(q.suffix)}</span>` : ''}
          </div>
        </div>
    `;

    // 1. True / False / Not Given & Yes / No / Not Given
    if (group.type === 'true-false-not-given' || group.type === 'yes-no-not-given') {
      const options = group.type === 'yes-no-not-given' 
        ? ['YES', 'NO', 'NOT GIVEN'] 
        : ['TRUE', 'FALSE', 'NOT GIVEN'];
      
      html += `<div class="opts tfng-options" style="margin-top:8px;">`;
      options.forEach(opt => {
        const isSelected = String(userAnswer).toUpperCase() === opt;
        let reviewClass = '';
        if (state.isReviewMode) {
          const isCorrect = (q.correctAnswers || []).some(c => String(c).toUpperCase() === opt);
          if (isCorrect) reviewClass = 'ok';
          else if (isSelected) reviewClass = 'bad';
        }
        html += `
          <label class="tfng-label ${isSelected ? 'active selected' : ''} ${reviewClass}" 
                 data-option="${opt}"
                 id="tfng-lbl-${q.number}-${opt}">
            <input type="radio" 
                   name="q-${q.number}" 
                   value="${opt}" 
                   ${isSelected ? 'checked' : ''} 
                   ${state.isReviewMode ? 'disabled' : ''}
                   onchange="window.ieltsApp.handleAnswerChange(${q.number}, '${opt}')">
            ${opt}
          </label>
        `;
      });
      html += `</div>`;
    }
    // 2. Short Answer / Diagram Labeling (when rendered singly)
    else if (group.type === 'short-answer' || group.type === 'diagram-labeling') {
      html += `
        <div class="cd-short-answer-row" style="margin: 10px 0 14px; display:flex; align-items:center; gap:10px;">
          <span class="cd-gap-badge">[ ${q.number} ]</span>
          <input type="text" 
                 class="cd-gap-input full-width ${userAnswer ? 'has-val' : ''}" 
                 id="input-q-${q.number}" 
                 data-qnum="${q.number}"
                 placeholder="Type your answer here..." 
                 value="${escapeHtml(String(userAnswer))}"
                 autocomplete="off"
                 spellcheck="false"
                 ${state.isReviewMode ? 'disabled' : ''}
                 onfocus="window.ieltsApp.setActiveQuestion(${q.number})"
                 oninput="window.ieltsApp.handleAnswerChange(${q.number}, this.value)">
        </div>
      `;
    }
    // 2B. Matching Information (Paragraphs A-G)
    else if (group.type === 'matching-information') {
      const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      html += `
        <div class="matching-info-pills" style="display:flex; flex-wrap:wrap; gap:8px; margin:10px 0 12px;">
      `;
      letters.forEach(letter => {
        const isSelected = String(userAnswer).toUpperCase() === letter;
        html += `
          <button type="button" 
                  class="matching-pill-btn ${isSelected ? 'active selected' : ''}" 
                  style="min-width:38px; height:36px; padding:0 12px; border-radius:8px; font-weight:700; font-size:0.9rem; border:1.5px solid ${isSelected ? '#2563eb' : '#cbd5e1'}; background:${isSelected ? '#2563eb' : '#ffffff'}; color:${isSelected ? '#ffffff' : '#1e293b'}; cursor:pointer; transition:all 0.15s ease;"
                  ${state.isReviewMode ? 'disabled' : ''}
                  onclick="window.ieltsApp.handleAnswerChange(${q.number}, '${letter}')">
            ${letter}
          </button>
        `;
      });
      html += `
        </div>
        <div class="blank-input-row" style="margin-bottom:12px; display:flex; align-items:center; gap:8px;">
          <span style="font-size:0.85rem; color:#64748b; font-weight:600;">Or type letter:</span>
          <input type="text" 
                 class="blank-text-input" 
                 id="input-q-${q.number}"
                 maxlength="2"
                 placeholder="A" 
                 value="${escapeHtml(String(userAnswer))}"
                 style="max-width:70px; text-transform:uppercase; text-align:center; font-weight:800; font-size:1rem; padding:6px 10px; border:1.5px solid #cbd5e1; border-radius:6px;"
                 ${state.isReviewMode ? 'disabled' : ''}
                 oninput="window.ieltsApp.handleAnswerChange(${q.number}, this.value.toUpperCase())">
        </div>
      `;
    }
    // 3. Multiple Choice
    else if (group.type === 'multiple-choice') {
      html += `<div class="mcq-options">`;
      (q.options || []).forEach(opt => {
        const isSelected = String(userAnswer).toUpperCase() === opt.letter.toUpperCase();
        html += `
          <label class="mcq-option-label ${isSelected ? 'active selected' : ''}" data-letter="${opt.letter}">
            <input type="radio" 
                   name="q-${q.number}" 
                   value="${opt.letter}" 
                   ${isSelected ? 'checked' : ''}
                   ${state.isReviewMode ? 'disabled' : ''}
                   onchange="window.ieltsApp.handleAnswerChange(${q.number}, '${opt.letter}')"
                   style="display:none">
            <span class="mcq-letter">${opt.letter}</span>
            <span class="mcq-text">${escapeHtml(opt.text)}</span>
          </label>
        `;
      });
      html += `</div>`;
    }
    // 4. Multiple Choice Multi
    else if (group.type === 'multiple-choice-multi') {
      const selectedArr = Array.isArray(userAnswer) ? userAnswer : (userAnswer ? [userAnswer] : []);
      html += `<div class="mcq-options">`;
      (group.options || []).forEach(opt => {
        const isSelected = selectedArr.includes(opt.letter);
        html += `
          <label class="mcq-option-label ${isSelected ? 'active selected' : ''}" data-letter="${opt.letter}">
            <input type="checkbox" 
                   name="q-${q.number}" 
                   value="${opt.letter}" 
                   ${isSelected ? 'checked' : ''}
                   ${state.isReviewMode ? 'disabled' : ''}
                   onchange="window.ieltsApp.handleMultiChoiceChange(${q.number}, '${opt.letter}', ${group.maxChoices || 2})"
                   style="display:none">
            <span class="mcq-letter">${opt.letter}</span>
            <span class="mcq-text">${escapeHtml(opt.text)}</span>
          </label>
        `;
      });
      html += `</div>`;
    }
    // 5. Matching Researchers
    else if (group.type === 'matching-researchers') {
      html += `<div class="tfng-options">`;
      (group.researchers || []).forEach(r => {
        const isSelected = String(userAnswer).toUpperCase() === r.code.toUpperCase();
        html += `
          <label class="tfng-label ${isSelected ? 'active selected' : ''}" data-option="${r.code}" id="tfng-lbl-${q.number}-${r.code}">
            <input type="radio" 
                   name="q-${q.number}" 
                   value="${r.code}" 
                   ${isSelected ? 'checked' : ''}
                   ${state.isReviewMode ? 'disabled' : ''}
                   onchange="window.ieltsApp.handleAnswerChange(${q.number}, '${r.code}')">
            ${r.code} - ${escapeHtml(r.name)}
          </label>
        `;
      });
      html += `</div>`;
    }
    // 6. Matching Headings (Interactive Roman numeral pills + input)
    else if (group.type === 'matching-headings') {
      const romanList = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];
      html += `
        <div class="matching-headings-pills" style="display:flex; flex-wrap:wrap; gap:6px; margin:8px 0 10px;">
      `;
      romanList.forEach(r => {
        const isSelected = String(userAnswer).toLowerCase() === r;
        html += `
          <button type="button" 
                  class="matching-pill-btn ${isSelected ? 'active selected' : ''}" 
                  style="min-width:34px; height:32px; padding:0 10px; border-radius:6px; font-weight:700; font-size:0.82rem; border:1.5px solid ${isSelected ? '#2563eb' : '#cbd5e1'}; background:${isSelected ? '#2563eb' : '#ffffff'}; color:${isSelected ? '#ffffff' : '#1e293b'}; cursor:pointer;"
                  ${state.isReviewMode ? 'disabled' : ''}
                  onclick="window.ieltsApp.handleAnswerChange(${q.number}, '${r}')">
            ${r}
          </button>
        `;
      });
      html += `
        </div>
        <div class="blank-input-row" style="margin-bottom:12px; display:flex; align-items:center; gap:8px;">
          <span style="font-size:0.85rem; color:#64748b; font-weight:600;">Heading numeral:</span>
          <input type="text" 
                 class="blank-text-input" 
                 id="input-q-${q.number}"
                 placeholder="e.g. iii" 
                 value="${escapeHtml(String(userAnswer))}"
                 style="max-width:100px; text-transform:lowercase; text-align:center; font-weight:700; padding:6px 10px; border:1.5px solid #cbd5e1; border-radius:6px;"
                 ${state.isReviewMode ? 'disabled' : ''}
                 oninput="window.ieltsApp.handleAnswerChange(${q.number}, this.value)">
        </div>
      `;
    }

    if (state.isReviewMode) {
      const isCorrect = checkIsAnswerCorrect(q, userAnswer);
      const correctStr = (q.correctAnswers || []).join(' OR ');

      html += `
        <div class="review-card ${isCorrect ? 'correct' : 'incorrect'}">
          <div class="review-status-header ${isCorrect ? 'correct' : 'incorrect'}">
            <span>${isCorrect ? ' Correct' : ' Incorrect'}</span>
            ${q.evidence ? `
              <button class="locate-evidence-btn" onclick="window.ieltsApp.locateEvidence(${q.number})">
                 Show in Passage
              </button>
            ` : ''}
          </div>
          <div><strong>Your Answer:</strong> ${escapeHtml(String(userAnswer || '(No answer)'))}</div>
          <div><strong>Correct Answer:</strong> <span style="font-weight:700; color:var(--success);">${escapeHtml(correctStr)}</span></div>
          ${q.explanation ? `
            <div class="explanation-text">
              <strong>Explanation:</strong> ${escapeHtml(q.explanation)}
            </div>
          ` : ''}
        </div>
      `;
    }

    html += `</div>`;
    return html;
  }

  // --- Bottom Navigation Bar ---
  function renderBottomNavBar() {
    if (!state.currentTest) return;

    dom.partsTabContainer.innerHTML = '';
    state.currentTest.parts.forEach((part, idx) => {
      const partQuestions = getAllQuestionsInPart(part);
      const totalInPart = partQuestions.length;
      let answeredCount = 0;
      partQuestions.forEach(q => {
        const val = state.userAnswers[q.number];
        if (val !== undefined && val !== null && String(val).trim() !== '') {
          answeredCount++;
        }
      });

      const btn = document.createElement('button');
      btn.className = `part-tab-btn ${idx === state.currentPartIndex ? 'active' : ''}`;
      const isFullMock = state.currentTest.category === 'full' || state.currentTest.parts.length === 3;
      let displayTitle = part.title;
      if (isFullMock) {
        displayTitle = (part.passage && part.passage.title) ? part.passage.title : part.title;
        displayTitle = displayTitle.replace(/^Passage\s*\d+\s*[:-]?\s*/i, '');
      }
      btn.innerHTML = `
        <span title="${escapeHtml(displayTitle)}">${escapeHtml(displayTitle)} (${part.range})</span>
        <span class="part-count-text">${answeredCount} of ${totalInPart}</span>
      `;
      btn.onclick = () => switchPart(idx);
      dom.partsTabContainer.appendChild(btn);
    });

    dom.questionsGridStrip.innerHTML = '';
    const currentPart = state.currentTest.parts[state.currentPartIndex];
    if (!currentPart) return;

    const questions = getAllQuestionsInPart(currentPart);
    questions.forEach(q => {
      const pill = document.createElement('button');
      const val = state.userAnswers[q.number];
      const isAnswered = val !== undefined && val !== null && String(val).trim() !== '';
      const isActive = q.number === state.currentQuestionNumber;
      const isFlagged = state.flaggedQuestions.has(q.number);

      pill.className = `q-nav-pill ${isActive ? 'active' : ''} ${isAnswered ? 'answered' : ''} ${isFlagged ? 'flagged' : ''}`;
      pill.textContent = q.number;
      pill.onclick = () => {
        setActiveQuestion(q.number);
      };
      dom.questionsGridStrip.appendChild(pill);
    });
  }

  function getAllQuestionsInPart(part) {
    const list = [];
    part.questionGroups.forEach(g => {
      g.questions.forEach(q => list.push(q));
    });
    return list;
  }

  function switchPart(partIndex) {
    if (partIndex === state.currentPartIndex) return;
    state.currentPartIndex = partIndex;
    const part = state.currentTest.parts[partIndex];
    if (part && part.questionGroups[0]?.questions[0]) {
      state.currentQuestionNumber = part.questionGroups[0].questions[0].number;
    }
    renderCurrentPart();
  }

  function setActiveQuestion(qNum) {
    state.currentQuestionNumber = qNum;

    let targetPartIdx = -1;
    state.currentTest.parts.forEach((p, pIdx) => {
      const qList = getAllQuestionsInPart(p);
      if (qList.some(q => q.number === qNum)) {
        targetPartIdx = pIdx;
      }
    });

    if (targetPartIdx !== -1 && targetPartIdx !== state.currentPartIndex) {
      state.currentPartIndex = targetPartIdx;
      renderCurrentPart();
    } else {
      highlightActiveQuestion();
    }

    updateFlagBtn();

    const qEl = document.getElementById(`question-item-${qNum}`);
    if (qEl) {
      qEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      document.querySelectorAll('.question-item, .cd-completion-row').forEach(el => el.classList.remove('active', 'active-focus'));
      qEl.classList.add('active', 'active-focus');
    }

    document.querySelectorAll('.cd-inline-gap').forEach(el => el.classList.remove('active-gap'));
    const gapWrap = document.getElementById(`gap-wrapper-${qNum}`);
    if (gapWrap) {
      gapWrap.classList.add('active-gap');
    }

    const inputEl = document.getElementById(`input-q-${qNum}`);
    if (inputEl && document.activeElement !== inputEl) {
      inputEl.focus();
    }
  }

  function highlightActiveQuestion() {
    document.querySelectorAll('.q-nav-pill').forEach(pill => {
      const pNum = parseInt(pill.textContent, 10);
      if (pNum === state.currentQuestionNumber) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
  }

  function updateFlagBtn() {
    const isFlagged = state.flaggedQuestions.has(state.currentQuestionNumber);
    if (dom.flagToggleBtn) {
      dom.flagToggleBtn.classList.toggle('flagged', isFlagged);
      dom.flagToggleBtn.classList.toggle('active', isFlagged);
      dom.flagToggleBtn.innerHTML = isFlagged ? 'Flagged' : 'Review';
    }
    const qEl = document.getElementById(`question-item-${state.currentQuestionNumber}`);
    if (qEl) {
      qEl.classList.toggle('flagged', isFlagged);
    }
    const gapWrap = document.getElementById(`gap-wrapper-${state.currentQuestionNumber}`);
    if (gapWrap) {
      gapWrap.classList.toggle('flagged-gap', isFlagged);
    }
  }

  // --- Answer Handling with Live High-Visibility Feedback ---
  function handleAnswerChange(qNum, value) {
    state.userAnswers[qNum] = value;
    
    // Sync input element value and has-val styling
    const inputEl = document.getElementById(`input-q-${qNum}`);
    if (inputEl) {
      if (inputEl.value !== value) inputEl.value = value;
      inputEl.classList.toggle('has-val', Boolean(String(value).trim()));
    }

    // Update question item and option active styling immediately
    const qItem = document.getElementById(`question-item-${qNum}`);
    if (qItem) {
      // 1. TFNG & Yes/No & Researchers
      const labels = qItem.querySelectorAll('.tfng-label');
      labels.forEach(lbl => {
        const optVal = lbl.getAttribute('data-option');
        const isMatch = optVal && optVal.toUpperCase() === String(value).toUpperCase();
        lbl.classList.toggle('active', isMatch);
        lbl.classList.toggle('selected', isMatch);
      });

      // 2. MCQ Single Choice
      const mcqLabels = qItem.querySelectorAll('.mcq-option-label');
      mcqLabels.forEach(lbl => {
        const letVal = lbl.getAttribute('data-letter') || lbl.querySelector('input')?.value;
        const isMatch = letVal && letVal.toUpperCase() === String(value).toUpperCase();
        lbl.classList.toggle('active', isMatch);
        lbl.classList.toggle('selected', isMatch);
      });

      // 3. Matching Information & Headings Pill Buttons
      const pillBtns = qItem.querySelectorAll('.matching-pill-btn');
      pillBtns.forEach(btn => {
        const bVal = btn.getAttribute('data-letter') || btn.getAttribute('data-roman') || btn.textContent.trim();
        const isMatch = bVal && bVal.toUpperCase() === String(value).trim().toUpperCase();
        btn.classList.toggle('active', isMatch);
        btn.classList.toggle('selected', isMatch);
        btn.style.borderColor = isMatch ? '#2563eb' : '#cbd5e1';
        btn.style.background = isMatch ? '#2563eb' : '#ffffff';
        btn.style.color = isMatch ? '#ffffff' : '#1e293b';
      });
    }

    // Sync with passage drop zone if matching heading
    const dropZone = document.getElementById(`drop-zone-${qNum}`);
    if (dropZone) {
      if (value && String(value).trim() !== '') {
        dropZone.innerHTML = `
          <div class="placed-heading-chip">
            <span>${escapeHtml(value)}</span>
            <button class="remove-heading-btn" title="Remove" onclick="event.stopPropagation(); window.ieltsApp.removePlacedHeading(${qNum})">×</button>
          </div>
        `;
        dropZone.classList.add('has-placed', 'active');
      } else {
        dropZone.innerHTML = `<span class="drop-zone-placeholder">[ ${qNum} ] Drop heading here</span>`;
        dropZone.classList.remove('has-placed', 'active');
      }
    }

    updateHeadingChipsState();
    renderBottomNavBar();
  }

  function handleMultiChoiceChange(qNum, letter, maxChoices) {
    let current = state.userAnswers[qNum];
    let arr = Array.isArray(current) ? [...current] : (current ? [current] : []);

    const idx = arr.indexOf(letter);
    if (idx !== -1) {
      arr.splice(idx, 1);
    } else {
      if (arr.length < maxChoices) {
        arr.push(letter);
      } else {
        arr.shift();
        arr.push(letter);
      }
    }

    state.userAnswers[qNum] = arr;
    renderCurrentPart();
  }

  function updateHeadingChipsState() {
    document.querySelectorAll('.heading-chip').forEach(chip => {
      const roman = chip.getAttribute('data-roman') || chip.getAttribute('data-heading')?.split('.')[0].trim();
      const isPlaced = Object.values(state.userAnswers).some(ans => {
        if (!ans) return false;
        return ans.trim().toLowerCase() === roman.toLowerCase();
      });

      if (isPlaced) {
        chip.classList.add('placed');
        chip.setAttribute('draggable', 'false');
      } else {
        chip.classList.remove('placed');
        chip.setAttribute('draggable', 'true');
      }
    });
  }

  // --- User-Friendly Drag & Drop + Click-to-Place ---
  function setupDraggableHeadings() {
    const chips = document.querySelectorAll('.heading-chip');
    chips.forEach(chip => {
      chip.addEventListener('dragstart', (e) => {
        if (state.isReviewMode || chip.classList.contains('placed')) {
          e.preventDefault();
          return;
        }
        const roman = chip.getAttribute('data-roman') || chip.getAttribute('data-heading').split('.')[0].trim();
        e.dataTransfer.setData('text/plain', roman);
        e.dataTransfer.effectAllowed = 'move';
        chip.classList.add('dragging');
      });

      chip.addEventListener('dragend', () => {
        chip.classList.remove('dragging');
        document.querySelectorAll('.heading-drop-zone').forEach(z => z.classList.remove('drag-over'));
      });
    });
  }

  function setupPassageDropZones() {
    const zones = document.querySelectorAll('.heading-drop-zone');
    zones.forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        if (state.isReviewMode) return;
        e.dataTransfer.dropEffect = 'move';
        zone.classList.add('drag-over');
      });

      zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
      });

      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');
        if (state.isReviewMode) return;

        const headingVal = e.dataTransfer.getData('text/plain');
        if (!headingVal) return;

        const qNum = parseInt(zone.getAttribute('data-question-number'), 10);
        handleAnswerChange(qNum, headingVal);

        const inputEl = document.getElementById(`input-q-${qNum}`);
        if (inputEl) inputEl.value = headingVal;
      });
    });
  }

  // Click-to-Place Selection
  function selectHeadingForPlacement(roman) {
    if (state.isReviewMode) return;

    if (state.selectedHeadingForPlacement === roman) {
      // Deselect if clicked again
      state.selectedHeadingForPlacement = null;
      document.querySelectorAll('.heading-chip').forEach(c => c.classList.remove('active', 'picked-up'));
      return;
    }

    state.selectedHeadingForPlacement = roman;
    document.querySelectorAll('.heading-chip').forEach(c => {
      const isMatch = (c.getAttribute('data-roman') || '').toLowerCase() === String(roman).toLowerCase();
      c.classList.toggle('active', isMatch);
      c.classList.toggle('picked-up', isMatch);
    });
  }

  function handleDropZoneClick(qNum) {
    if (state.isReviewMode) return;

    // If a heading was selected by click, drop it here!
    if (state.selectedHeadingForPlacement) {
      handleAnswerChange(qNum, state.selectedHeadingForPlacement);
      state.selectedHeadingForPlacement = null;
      document.querySelectorAll('.heading-chip').forEach(c => c.classList.remove('picked-up'));
      const inputEl = document.getElementById(`input-q-${qNum}`);
      if (inputEl) inputEl.value = state.userAnswers[qNum];
      return;
    }

    setActiveQuestion(qNum);
  }

  function removePlacedHeading(qNum) {
    if (state.isReviewMode) return;
    handleAnswerChange(qNum, '');
    const inputEl = document.getElementById(`input-q-${qNum}`);
    if (inputEl) inputEl.value = '';
  }

  // --- Text Highlighting & Copying (Passage & Writing Masterclass) ---
  var activeHighlightRange = null;

  function setupHighlighter() {
    var bar = document.getElementById('hl-floating-bar');
    if (bar) {
      bar.addEventListener('mousedown', function(e) {
        e.preventDefault(); // Prevents selection from collapsing when clicking buttons
      });
    }

    document.addEventListener('mouseup', handleTextSelection);
    document.addEventListener('keyup', handleTextSelection);

    document.addEventListener('mousedown', function(e) {
      var b = document.getElementById('hl-floating-bar');
      if (b && !b.contains(e.target)) {
        b.style.display = 'none';
      }
    });

    // Single-click on ANY highlight in Writing or Reading to clear/remove it
    document.addEventListener('click', function(e) {
      var mark = e.target.closest('.highlight-yellow, .highlight-green, .highlight-blue, .ielts-hl');
      if (mark) {
        e.stopPropagation();
        e.preventDefault();
        var parent = mark.parentNode;
        if (parent) {
          while (mark.firstChild) {
            parent.insertBefore(mark.firstChild, mark);
          }
          parent.removeChild(mark);
          parent.normalize();
        }
        var b = document.getElementById('hl-floating-bar');
        if (b) b.style.display = 'none';
        activeHighlightRange = null;
      }
    });
  }

  function handleTextSelection() {
    var bar = document.getElementById('hl-floating-bar');
    if (!bar) return;

    var sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) {
      bar.style.display = 'none';
      return;
    }

    var text = sel.toString().trim();
    if (!text || text.length === 0) {
      bar.style.display = 'none';
      return;
    }

    var range = sel.getRangeAt(0);
    var target = range.commonAncestorContainer;
    if (target.nodeType === 3) target = target.parentNode;

    // Never highlight inside editable textareas or inputs
    if (target.closest('textarea, input')) {
      bar.style.display = 'none';
      return;
    }

    // Verify selection is within an active passage, reader area, or writing area
    var isAllowed = target.closest(
      '#writing-modal, ' +
      '#writing-view, ' +
      '.writing-fullscreen-container, ' +
      '#writing-modal-essay, ' +
      '#writing-modal-prompt, ' +
      '#writing-modal-rationale, ' +
      '#writing-modal-vocab-container, ' +
      '#sim-model-preview, ' +
      '#sim-prompt-title, ' +
      '#exam-view, ' +
      '#reader-view, ' +
      '#passage-pane, ' +
      '#passage-content, ' +
      '.pane-content, ' +
      '.reader-text, ' +
      '.reader-passage-wrap'
    );

    if (!isAllowed) {
      bar.style.display = 'none';
      return;
    }

    activeHighlightRange = range.cloneRange();

    var rect = range.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) {
      bar.style.display = 'none';
      return;
    }

    // Position using fixed coordinates above the selection
    var barWidth = 280;
    var top = rect.top - 50;
    var left = rect.left + (rect.width / 2) - (barWidth / 2);

    if (top < 10) top = rect.bottom + 12;
    if (left < 10) left = 10;
    if (left + barWidth > window.innerWidth - 10) left = window.innerWidth - barWidth - 10;

    bar.style.top = top + 'px';
    bar.style.left = left + 'px';
    bar.style.display = 'flex';
  }

  function applyHighlight(colorClass) {
    if (!colorClass.startsWith('highlight-')) {
      colorClass = 'highlight-' + colorClass;
    }
    var sel = window.getSelection();
    var range = activeHighlightRange || (sel && !sel.isCollapsed && sel.rangeCount > 0 ? sel.getRangeAt(0) : null);
    if (!range) return;

    try {
      var span = document.createElement('span');
      span.className = colorClass;
      span.title = 'Click to remove this highlight';

      try {
        range.surroundContents(span);
      } catch (err) {
        var content = range.extractContents();
        span.appendChild(content);
        range.insertNode(span);
      }

      if (sel) sel.removeAllRanges();
      activeHighlightRange = null;

      var bar = document.getElementById('hl-floating-bar');
      if (bar) bar.style.display = 'none';
    } catch (e) {
      console.warn('Highlight apply error:', e);
    }
  }

  function clearHighlight() {
    var sel = window.getSelection();
    var range = activeHighlightRange || (sel && !sel.isCollapsed && sel.rangeCount > 0 ? sel.getRangeAt(0) : null);
    if (range) {
      var allMarks = Array.from(document.querySelectorAll('.highlight-yellow, .highlight-green, .highlight-blue, .ielts-hl'));
      var removed = 0;
      allMarks.forEach(function(m) {
        var isIntersect = false;
        try {
          if (range.intersectsNode) isIntersect = range.intersectsNode(m);
        } catch (err) {}
        if (isIntersect) {
          var p = m.parentNode;
          if (p) {
            while (m.firstChild) p.insertBefore(m.firstChild, m);
            p.removeChild(m);
            p.normalize();
            removed++;
          }
        }
      });

      if (removed === 0) {
        var node = range.commonAncestorContainer;
        while (node && node !== document.body) {
          if (node.nodeType === 1 && (
            node.classList.contains('highlight-yellow') ||
            node.classList.contains('highlight-green') ||
            node.classList.contains('highlight-blue') ||
            node.classList.contains('ielts-hl')
          )) {
            var parent = node.parentNode;
            if (parent) {
              while (node.firstChild) parent.insertBefore(node.firstChild, node);
              parent.removeChild(node);
              parent.normalize();
              break;
            }
          }
          node = node.parentNode;
        }
      }
    }
    if (sel) sel.removeAllRanges();
    activeHighlightRange = null;
    var bar = document.getElementById('hl-floating-bar');
    if (bar) bar.style.display = 'none';
  }

  function clearAllWritingHighlights() {
    var marks = document.querySelectorAll(
      '#writing-modal .highlight-yellow, #writing-modal .highlight-green, #writing-modal .highlight-blue, #writing-modal .ielts-hl, ' +
      '#writing-view .highlight-yellow, #writing-view .highlight-green, #writing-view .highlight-blue, #writing-view .ielts-hl'
    );
    marks.forEach(function(m) {
      var p = m.parentNode;
      if (p) {
        while (m.firstChild) p.insertBefore(m.firstChild, m);
        p.removeChild(m);
        p.normalize();
      }
    });
    var bar = document.getElementById('hl-floating-bar');
    if (bar) bar.style.display = 'none';
    activeHighlightRange = null;
  }

  function copySelectedText() {
    var sel = window.getSelection();
    if (!sel) return;
    navigator.clipboard.writeText(sel.toString()).then(function() {
      var bar = document.getElementById('hl-floating-bar');
      if (bar) bar.style.display = 'none';
    });
  }

  // --- Locate Evidence in Passage ---
  function locateEvidence(qNum) {
    let questionObj = null;
    state.currentTest.parts.forEach(p => {
      p.questionGroups.forEach(g => {
        g.questions.forEach(q => {
          if (q.number === qNum) questionObj = q;
        });
      });
    });

    if (!questionObj || !questionObj.evidence) {
      alert('Evidence sentence not indexed for question ' + qNum);
      return;
    }

    const passageContainer = dom.passagePane;
    const evidenceText = questionObj.evidence.trim();
    const cleanEv = evidenceText.replace(/^[.\s"“”'’]+|[.\s"“”'’]+$/g, '').trim();

    const paragraphs = passageContainer.querySelectorAll('.passage-paragraph');
    let matchedPara = null;

    // 1. Try exact or normalized slice match
    const probe = cleanEv.slice(0, Math.min(28, cleanEv.length));
    paragraphs.forEach(p => {
      if (p.textContent.includes(probe) || p.textContent.toLowerCase().includes(probe.toLowerCase())) {
        matchedPara = p;
      }
    });

    // 2. Fallback: try match by distinct phrase or keywords
    if (!matchedPara && cleanEv.length > 15) {
      const words = cleanEv.split(/\s+/).filter(w => w.length > 4);
      if (words.length >= 2) {
        const phrase = words.slice(0, 3).join(' ').toLowerCase();
        paragraphs.forEach(p => {
          if (p.textContent.toLowerCase().includes(phrase)) {
            matchedPara = p;
          }
        });
      }
    }

    // 3. Fallback: try by questionObj.section
    if (!matchedPara && questionObj.section) {
      const secEl = passageContainer.querySelector('#section-' + questionObj.section.toLowerCase());
      if (secEl) {
        matchedPara = secEl.querySelector('.passage-paragraph') || secEl;
      }
    }

    if (matchedPara) {
      document.querySelectorAll('.locate-evidence-btn').forEach(b => b.classList.remove('active'));
      const currBtn = document.querySelector(`#question-item-${qNum} .locate-evidence-btn`);
      if (currBtn) currBtn.classList.add('active');

      document.querySelectorAll('.evidence-highlight').forEach(el => {
        el.classList.remove('evidence-highlight');
      });

      matchedPara.classList.add('evidence-highlight');
      matchedPara.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      alert('Evidence located in Section ' + (questionObj.section || '') + ':\n"' + evidenceText + '"');
    }
  }

  // --- Splitter Logic ---
  function setupSplitter() {
    if (!dom.splitter) return;
    let isDragging = false;

    dom.splitter.addEventListener('mousedown', (e) => {
      isDragging = true;
      dom.splitter.classList.add('dragging');
      document.body.style.cursor = 'col-resize';
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const containerRect = dom.workspace.getBoundingClientRect();
      const offset = e.clientX - containerRect.left;
      const percentage = (offset / containerRect.width) * 100;

      if (percentage > 20 && percentage < 80) {
        dom.passagePane.style.flex = `0 0 ${percentage}%`;
        dom.questionsPane.style.flex = `0 0 ${100 - percentage}%`;
      }
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        dom.splitter.classList.remove('dragging');
        document.body.style.cursor = '';
      }
    });
  }

  // --- Timer Engine: Count-up (00:00 -> 59:59) ---
  function setupTimer() {
    if (dom.pauseBtn) dom.pauseBtn.addEventListener('click', toggleTimerPause);
    if (dom.resetTimerBtn) dom.resetTimerBtn.addEventListener('click', resetTimer);
    if (dom.timerModeToggle) dom.timerModeToggle.addEventListener('click', toggleTimerMode);
  }

  function startTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      if (!state.isPaused && !state.isSubmitted) {
        state.elapsedSeconds++;

        if (state.elapsedSeconds >= state.maxSeconds) {
          clearInterval(state.timerInterval);
          alert('60 minutes reached! Submitting your test.');
          submitTest();
        }

        updateTimerDisplay();
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(state.timerInterval);
  }

  function toggleTimerPause() {
    state.isPaused = !state.isPaused;
    if (dom.pauseBtn) {
      dom.pauseBtn.innerHTML = state.isPaused ? '▶' : '||';
      dom.pauseBtn.title = state.isPaused ? 'Resume Timer' : 'Pause Timer';
      dom.pauseBtn.classList.toggle('active', state.isPaused);
    }
  }

  function resetTimer() {
    if (confirm('Reset timer to 00:00?')) {
      state.elapsedSeconds = 0;
      state.isPaused = false;
      dom.pauseBtn.innerHTML = '||';
      updateTimerDisplay();
    }
  }

  function toggleTimerMode() {
    state.timerMode = state.timerMode === 'countup' ? 'countdown' : 'countup';
    if (dom.timerModeToggle) {
      dom.timerModeToggle.textContent = state.timerMode === 'countup' ? 'UP' : 'DOWN';
      dom.timerModeToggle.classList.toggle('active', state.timerMode === 'countdown');
    }
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    if (!dom.timerDisplay) return;

    let displaySeconds = state.elapsedSeconds;
    if (state.timerMode === 'countdown') {
      displaySeconds = Math.max(0, state.maxSeconds - state.elapsedSeconds);
    }

    const minutes = Math.floor(displaySeconds / 60);
    const seconds = displaySeconds % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    dom.timerDisplay.textContent = formatted;

    if (state.elapsedSeconds >= 3300) {
      dom.timerDisplay.className = 'timer-box danger';
    } else if (state.elapsedSeconds >= 3000) {
      dom.timerDisplay.className = 'timer-box warning';
    } else {
      dom.timerDisplay.className = 'timer-box';
    }
  }

  // --- Navigation Controls ---
  function goToPrevQuestion() {
    const allQNums = getAllQuestionNumbersInTest();
    const curIdx = allQNums.indexOf(state.currentQuestionNumber);
    if (curIdx > 0) {
      setActiveQuestion(allQNums[curIdx - 1]);
    }
  }

  function goToNextQuestion() {
    const allQNums = getAllQuestionNumbersInTest();
    const curIdx = allQNums.indexOf(state.currentQuestionNumber);
    if (curIdx < allQNums.length - 1) {
      setActiveQuestion(allQNums[curIdx + 1]);
    }
  }

  function getAllQuestionNumbersInTest() {
    const list = [];
    if (!state.currentTest) return list;
    state.currentTest.parts.forEach(p => {
      p.questionGroups.forEach(g => {
        g.questions.forEach(q => list.push(q.number));
      });
    });
    return list;
  }

  // --- Submission & Scoring ---
  function checkIsAnswerCorrect(question, userAns) {
    if (!userAns || String(userAns).trim() === '') return false;

    const correctList = question.correctAnswers || [];
    const cleanUser = String(userAns).trim().toLowerCase().replace(/[.,;:'"]/g, '');

    if (Array.isArray(userAns)) {
      const match = userAns.some(val => {
        const cleanVal = String(val).trim().toLowerCase();
        return correctList.some(c => String(c).trim().toLowerCase() === cleanVal);
      });
      return match;
    }

    return correctList.some(correct => {
      const cleanCorrect = String(correct).trim().toLowerCase().replace(/[.,;:'"]/g, '');
      return cleanUser === cleanCorrect;
    });
  }

  function submitTest() {
    state.isSubmitted = true;
    state.isReviewMode = true;
    clearInterval(state.timerInterval);

    let totalQuestions = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    const partBreakdowns = [];

    state.currentTest.parts.forEach(part => {
      let partTotal = 0;
      let partCorrect = 0;

      part.questionGroups.forEach(g => {
        g.questions.forEach(q => {
          totalQuestions++;
          partTotal++;

          const userAns = state.userAnswers[q.number];
          if (!userAns || String(userAns).trim() === '') {
            unattemptedCount++;
          } else {
            const isCorr = checkIsAnswerCorrect(q, userAns);
            if (isCorr) {
              correctCount++;
              partCorrect++;
            } else {
              incorrectCount++;
            }
          }
        });
      });

      partBreakdowns.push({
        title: part.title,
        passageTitle: part.passage.title,
        correct: partCorrect,
        total: partTotal
      });
    });

    const bandInfo = calculateBandScore(correctCount, totalQuestions);

    showScoreModal({
      band: bandInfo.band,
      desc: bandInfo.desc,
      correct: correctCount,
      incorrect: incorrectCount,
      unattempted: unattemptedCount,
      total: totalQuestions,
      parts: partBreakdowns,
      timeTaken: state.elapsedSeconds
    });

    dom.checkAnswersBtn.textContent = 'View Scorecard';
    renderCurrentPart();
  }

  function showScoreModal(data) {
    const mins = Math.floor(data.timeTaken / 60);
    const secs = data.timeTaken % 60;

    let partsHtml = '';
    data.parts.forEach(p => {
      partsHtml += `
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border-light);">
          <span><strong>${escapeHtml(p.title)}:</strong> ${escapeHtml(p.passageTitle)}</span>
          <span style="font-weight:700;">${p.correct} / ${p.total}</span>
        </div>
      `;
    });

    const modalBody = document.getElementById('score-modal-body');
    modalBody.innerHTML = `
      <div class="band-hero-box">
        <div class="band-hero-title">Overall IELTS Band Score</div>
        <div class="band-hero-number">${data.band}</div>
        <div class="band-hero-desc">${data.desc}</div>
      </div>

      <div class="score-summary-grid">
        <div class="score-stat-card">
          <div class="score-stat-number" style="color:var(--success);">${data.correct}</div>
          <div class="score-stat-label">Correct</div>
        </div>
        <div class="score-stat-card">
          <div class="score-stat-number" style="color:var(--danger);">${data.incorrect}</div>
          <div class="score-stat-label">Incorrect</div>
        </div>
        <div class="score-stat-card">
          <div class="score-stat-number" style="color:var(--text-muted);">${data.unattempted}</div>
          <div class="score-stat-label">Unattempted</div>
        </div>
        <div class="score-stat-card">
          <div class="score-stat-number">${mins}m ${secs}s</div>
          <div class="score-stat-label">Time Elapsed</div>
        </div>
      </div>

      <div style="margin-top:20px;">
        <h4 style="margin-bottom:10px; font-weight:800;">Breakdown by Passage:</h4>
        ${partsHtml}
      </div>

      <div class="score-modal-actions" style="margin-top:24px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
        <button class="btn-primary" onclick="document.getElementById('score-modal').classList.remove('active')" style="padding:10px 20px; font-weight:700; border-radius:8px; cursor:pointer;">
          Review Answers &amp; Evidence
        </button>
        <button class="btn-secondary" onclick="window.ieltsApp.retakeTest()" style="padding:10px 20px; font-weight:700; border-radius:8px; cursor:pointer;">
          ↺ Retake Test
        </button>
        <button class="btn-secondary" onclick="document.getElementById('score-modal').classList.remove('active'); window.ieltsApp.showHomeView();" style="padding:10px 20px; font-weight:700; border-radius:8px; cursor:pointer;">
          Back to Home
        </button>
      </div>
    `;

    dom.scoreModal.classList.add('active');
  }

  // --- Accessibility Controls ---
  function cycleFontSize() {
    state.fontSizeIndex = (state.fontSizeIndex + 1) % state.fontSizes.length;
    document.documentElement.style.setProperty('--font-base', state.fontSizes[state.fontSizeIndex]);
  }

  function cycleTheme() {
    state.themeIndex = (state.themeIndex + 1) % state.themes.length;
    document.body.className = state.themes[state.themeIndex];
  }

  // --- Global Event Listeners ---
  function setupGlobalEventListeners() {
    if (dom.homeBtn) {
      dom.homeBtn.addEventListener('click', () => {
        if (!state.isSubmitted && Object.keys(state.userAnswers).length > 0) {
          if (confirm('Leave test and return to Home? Your timer will pause.')) {
            showHomeView();
          }
        } else {
          showHomeView();
        }
      });
    }

    if (dom.homeBrandBtn) {
      dom.homeBrandBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showHomeView();
      });
    }

    dom.catFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dom.catFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.currentCategoryFilter = btn.getAttribute('data-category') || 'all';
        renderHomePage();
      });
    });

    dom.testSelector.addEventListener('change', (e) => {
      loadTest(e.target.value);
    });

    dom.checkAnswersBtn.addEventListener('click', () => {
      if (!state.isSubmitted) {
        if (confirm('Are you sure you want to finish the test and check your answers?')) {
          submitTest();
        }
      } else {
        dom.scoreModal.classList.add('active');
      }
    });

    dom.flagToggleBtn.addEventListener('click', () => {
      const qNum = state.currentQuestionNumber;
      if (state.flaggedQuestions.has(qNum)) {
        state.flaggedQuestions.delete(qNum);
      } else {
        state.flaggedQuestions.add(qNum);
      }
      updateFlagBtn();
      renderBottomNavBar();
      const qEl = document.getElementById(`question-item-${qNum}`);
      if (qEl) {
        qEl.classList.toggle('flagged', state.flaggedQuestions.has(qNum));
      }
    });

    dom.fontSizeBtn.addEventListener('click', cycleFontSize);
    dom.themeToggleBtn.addEventListener('click', cycleTheme);

    dom.fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    if (dom.prevBtn) dom.prevBtn.addEventListener('click', goToPrevQuestion);
    if (dom.nextBtn) dom.nextBtn.addEventListener('click', goToNextQuestion);
    if (dom.addTestBtn) dom.addTestBtn.addEventListener('click', () => dom.uploaderModal.classList.add('active'));
    if (dom.homeAddTestBtn) dom.homeAddTestBtn.addEventListener('click', () => dom.uploaderModal.classList.add('active'));

    if (dom.completeTaskBtn) {
      dom.completeTaskBtn.addEventListener('click', toggleCurrentDayComplete);
    }

    if (dom.taskModal) {
      dom.taskModal.addEventListener('click', (e) => {
        if (e.target === dom.taskModal) closeRoadmapModal();
      });
    }

    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
      });
    });
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }


  // ========================================================================
  // ABRAHAM RIFAT PHOTO PERSISTENCE & AVATAR ENGINE
  // ========================================================================
  function initAvatarSystem() {
    const imgEl = document.getElementById('img');
    const photoBox = document.getElementById('photo');
    if (photoBox) photoBox.classList.add('has');
    if (imgEl && !imgEl.getAttribute('src')) {
      imgEl.src = 'assets/images/abraham_rifat.jpg';
    }
  }

  // ========================================================================
  // WRITING MASTERCLASS & SIMULATOR ENGINE
  // ========================================================================
  state.currentWritingTab = 'hub';
  state.currentTask2Filter = 'all';
  state.currentTask1Filter = 'all';
  state.writingSimTimer = null;
  state.writingSimTimeRemaining = 40 * 60; // 40 mins default
  state.writingSimRunning = false;

  function showWritingView(tab) {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('writing-view');
    if (v) v.classList.add('active-view');
    switchWritingTab(tab || 'hub');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchWritingTab(tab) {
    state.currentWritingTab = tab;
    
    // Update tab button active states
    document.querySelectorAll('.writing-mode-tabs .mode-tab-btn').forEach(function(b) {
      const target = b.id.replace('btn-tab-', '');
      b.classList.toggle('active', target === tab);
    });

    const sections = {
      hub: document.getElementById('writing-hub-container') || document.getElementById('writing-hub-section'),
      task2: document.getElementById('writing-task2-container') || document.getElementById('writing-task2-section'),
      task1: document.getElementById('writing-task1-container') || document.getElementById('writing-task1-section'),
      simulator: document.getElementById('writing-simulator-container') || document.getElementById('writing-sim-section')
    };

    Object.keys(sections).forEach(function(k) {
      if (sections[k]) {
        sections[k].style.display = (k === tab) ? 'block' : 'none';
      }
    });

    if (tab === 'task2') renderWritingTask2(state.currentTask2Filter || 'all');
    if (tab === 'task1') renderWritingTask1(state.currentTask1Filter || 'all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterWritingTask2(cat) {
    state.currentTask2Filter = cat;
    document.querySelectorAll('#t2-filter-bar .cat-filter-btn').forEach(function(b) {
      const onclickAttr = b.getAttribute('onclick') || '';
      if (cat === 'all') {
        b.classList.toggle('active', onclickAttr.includes("'all'"));
      } else {
        b.classList.toggle('active', onclickAttr.toLowerCase().includes(cat.toLowerCase()));
      }
    });
    renderWritingTask2(cat);
  }

  function renderWritingTask2(cat) {
    const grid = document.getElementById('task2-grid') || document.getElementById('writing-task2-grid');
    const wData = (typeof WRITING_DATA !== 'undefined') ? WRITING_DATA : (window.WRITING_DATA || null);
    if (!grid || !wData) return;

    let items = wData.task2 || WRITING_DATA.task2Essays || [];
    if (cat && cat !== 'all') {
      items = items.filter(function(e) {
        return (e.type && e.type.toLowerCase() === cat.toLowerCase()) ||
               (e.topic && e.topic.toLowerCase() === cat.toLowerCase());
      });
    }

    const stepColors = [
      { name: 'crimson', bg: '#8B1E2D', light: '#FDF2F4', text: '#6C151E', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>' },
      { name: 'teal', bg: '#134B45', light: '#F0F9F8', text: '#0F3D3A', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>' },
      { name: 'amber', bg: '#C05621', light: '#FDF6EC', text: '#9C4221', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' },
      { name: 'navy', bg: '#1E3A8A', light: '#EFF6FF', text: '#1E3A8A', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
      { name: 'forest', bg: '#2D6A4F', light: '#F0FDF4', text: '#1E4633', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' }
    ];

    let html = '';
    items.forEach(function(essay, idx) {
      const c = stepColors[idx % stepColors.length];
      const numStr = (idx + 1 < 10 ? '0' : '') + (idx + 1);
      const promptSnippet = (essay.prompt || '').length > 140 ? essay.prompt.substring(0, 140) + '...' : essay.prompt;

      html += '<div class="reading-step-card writing-step-card" onclick="window.ieltsApp.openWritingModal(\'' + essay.id + '\')">' +
        '<div class="reading-step-left" style="background:' + c.bg + ';">' +
          '<span class="reading-step-lbl">task 2</span>' +
          '<span class="reading-step-num">' + numStr + '</span>' +
          '<div class="reading-step-perforation"></div>' +
        '</div>' +
        '<div class="reading-step-right">' +
          '<div class="reading-step-icon-badge" style="background:' + c.bg + ';" title="' + escapeHtml(essay.type || 'Task 2') + '">' +
            '<span>' + c.icon + '</span>' +
          '</div>' +
          '<div class="reading-step-header-tag" style="color:' + c.text + ';">' +
            '<span>' + escapeHtml(essay.type || 'Task 2 Essay') + ' &bull; ' + escapeHtml(essay.bandScore || 'Band 9.0') + ' Model</span>' +
          '</div>' +
          '<h3 class="reading-step-title">' + escapeHtml(essay.title || essay.topic || 'IELTS Advantage Model Essay') + '</h3>' +
          '<p class="reading-step-desc">' + escapeHtml(promptSnippet) + '</p>' +
          '<div class="reading-step-meta-chips">' +
            '<span class="reading-chip">' + (essay.wordCount || 265) + ' Words</span>' +
            '<span class="reading-chip" style="background:' + c.light + '; color:' + c.text + ';">Band 9 Vocabulary Included</span>' +
          '</div>' +
          '<div class="reading-step-actions">' +
            '<button class="reading-step-btn-start" style="background:' + c.bg + ';" onclick="event.stopPropagation(); window.ieltsApp.openWritingModal(\'' + essay.id + '\')">' +
              '<span>View Model Essay &rarr;</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    grid.innerHTML = html || '<p style="padding:40px; color:#64748b; text-align:center;">No essays found.</p>';
  }

  function filterWritingTask1(type) {
    state.currentTask1Filter = type;
    document.querySelectorAll('#t1-filter-bar .cat-filter-btn').forEach(function(b) {
      const onclickAttr = b.getAttribute('onclick') || '';
      if (type === 'all') {
        b.classList.toggle('active', onclickAttr.includes("'all'"));
      } else {
        b.classList.toggle('active', onclickAttr.toLowerCase().includes(type.toLowerCase()));
      }
    });
    renderWritingTask1(type);
  }

  function renderWritingTask1(type) {
    const grid = document.getElementById('task1-grid') || document.getElementById('writing-task1-grid');
    const wData = (typeof WRITING_DATA !== 'undefined') ? WRITING_DATA : (window.WRITING_DATA || null);
    if (!grid || !wData) return;

    let items = wData.task1 || WRITING_DATA.task1Reports || [];
    if (type && type !== 'all') {
      items = items.filter(function(r) {
        return (r.type && r.type.toLowerCase() === type.toLowerCase());
      });
    }

    const stepColors = [
      { name: 'crimson', bg: '#8B1E2D', light: '#FDF2F4', text: '#6C151E', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>' },
      { name: 'teal', bg: '#134B45', light: '#F0F9F8', text: '#0F3D3A', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>' },
      { name: 'amber', bg: '#C05621', light: '#FDF6EC', text: '#9C4221', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>' },
      { name: 'navy', bg: '#1E3A8A', light: '#EFF6FF', text: '#1E3A8A', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' },
      { name: 'forest', bg: '#2D6A4F', light: '#F0FDF4', text: '#1E4633', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>' }
    ];

    let html = '';
    items.forEach(function(report, idx) {
      const c = stepColors[idx % stepColors.length];
      const numStr = (idx + 1 < 10 ? '0' : '') + (idx + 1);
      const promptSnippet = (report.prompt || '').length > 140 ? report.prompt.substring(0, 140) + '...' : report.prompt;

      html += '<div class="reading-step-card writing-step-card" onclick="window.ieltsApp.openWritingModal(\'' + report.id + '\')">' +
        '<div class="reading-step-left" style="background:' + c.bg + ';">' +
          '<span class="reading-step-lbl">task 1</span>' +
          '<span class="reading-step-num">' + numStr + '</span>' +
          '<div class="reading-step-perforation"></div>' +
        '</div>' +
        '<div class="reading-step-right">' +
          '<div class="reading-step-icon-badge" style="background:' + c.bg + ';" title="' + escapeHtml(report.type || 'Task 1') + '">' +
            '<span>' + c.icon + '</span>' +
          '</div>' +
          '<div class="reading-step-header-tag" style="color:' + c.text + ';">' +
            '<span>' + escapeHtml(report.type || 'Task 1 Report') + ' &bull; Band 9.0 Model</span>' +
          '</div>' +
          '<h3 class="reading-step-title">' + escapeHtml(report.title || 'IELTS Liz Task 1') + '</h3>' +
          '<p class="reading-step-desc">' + escapeHtml(promptSnippet) + '</p>' +
          '<div class="reading-step-meta-chips">' +
            '<span class="reading-chip">' + (report.wordCount || 185) + ' Words</span>' +
            '<span class="reading-chip" style="background:' + c.light + '; color:' + c.text + ';">Band 9 Vocabulary Included</span>' +
          '</div>' +
          '<div class="reading-step-actions">' +
            '<button class="reading-step-btn-start" style="background:' + c.bg + ';" onclick="event.stopPropagation(); window.ieltsApp.openWritingModal(\'' + report.id + '\')">' +
              '<span>View Model Report &rarr;</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    grid.innerHTML = html || '<p style="padding:40px; color:#64748b; text-align:center;">No reports found.</p>';
  }

  function openWritingModal(itemId) {
    const wData = (typeof WRITING_DATA !== 'undefined') ? WRITING_DATA : (window.WRITING_DATA || null);
    if (!wData) return;
    const task2List = wData.task2 || wData.task2Essays || [];
    const task1List = wData.task1 || wData.task1Reports || [];

    let found = task2List.find(function(e) { return e.id === itemId; });
    let isTask2 = true;
    if (!found) {
      found = task1List.find(function(r) { return r.id === itemId; });
      isTask2 = false;
    }
    if (!found) return;

    const modal = document.getElementById('writing-modal') || document.getElementById('writing-detail-modal');
    if (!modal) return;

    const typeEl = document.getElementById('writing-modal-type');
    const titleEl = document.getElementById('writing-modal-title');
    const chartEl = document.getElementById('writing-modal-chart');
    const promptEl = document.getElementById('writing-modal-prompt');
    const wordsEl = document.getElementById('writing-modal-words');
    const essayEl = document.getElementById('writing-modal-essay');
    const rationaleEl = document.getElementById('writing-modal-rationale');
    const vocabContainer = document.getElementById('writing-modal-vocab-container');
    const practiceBtn = document.getElementById('writing-modal-practice-btn');

    if (typeEl) {
      typeEl.textContent = isTask2 ? ('Task 2: ' + (found.type || 'Essay')) : ('Task 1: ' + (found.type || 'Report'));
      typeEl.style.background = isTask2 ? '#dbeafe' : '#fef3c7';
      typeEl.style.color = isTask2 ? '#1d4ed8' : '#92400e';
    }
    if (titleEl) {
      titleEl.textContent = found.title || found.topic || (isTask2 ? 'IELTS Task 2 Essay' : 'IELTS Task 1 Report');
    }
    if (chartEl) {
      let figureHtml = '';
      if (!isTask2 && typeof window.TASK1_FIGURES !== 'undefined' && window.TASK1_FIGURES[found.id]) {
        figureHtml = window.TASK1_FIGURES[found.id];
      }
      if (figureHtml || found.chartDescription) {
        let descHtml = '';
        if (found.chartDescription) {
          descHtml = '<div class="task1-desc-box" style="background:#f8fafc; padding:16px 20px; border-radius:12px; border:1px solid #e2e8f0; font-size:0.92rem; color:#334155; line-height:1.55; margin:20px auto 0 auto; max-width:820px; box-sizing:border-box;">' +
            '<div style="font-weight:800; color:#0f172a; margin-bottom:4px; display:flex; align-items:center; gap:6px;">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>' +
              '<span>Visual Data Overview:</span>' +
            '</div>' +
            escapeHtml(found.chartDescription) +
          '</div>';
        }
        chartEl.innerHTML = figureHtml + descHtml;
        chartEl.style.display = 'block';
      } else {
        chartEl.style.display = 'none';
      }
    }
    if (promptEl) {
      promptEl.innerHTML = '<div style="font-weight:800; color:#0f172a; margin-bottom:8px; display:flex; align-items:center; gap:6px;">' +
        '<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#2563eb;"></span>' +
        '<span>Official IELTS Exam Prompt:</span>' +
      '</div>' +
      '<p style="margin:0; line-height:1.6; font-size:1.02rem; color:#1e293b;">' + escapeHtml(found.prompt) + '</p>';
    }
    if (wordsEl) {
      wordsEl.textContent = 'Word Count: ' + (found.wordCount || (isTask2 ? 260 : 185)) + ' words';
    }
    if (essayEl) {
      const rawText = found.modelEssay || found.modelAnswer || '';
      const paragraphs = rawText.split(/\n\s*\n/).filter(function(p) { return p.trim().length > 0; });
      if (paragraphs.length > 1) {
        essayEl.innerHTML = paragraphs.map(function(p) {
          return '<p style="margin: 0 0 16px 0; line-height: 1.85; font-size: 1.05rem; color: #1e293b;">' + escapeHtml(p.trim()) + '</p>';
        }).join('');
      } else {
        essayEl.innerHTML = '<p style="margin: 0 0 16px 0; line-height: 1.85; font-size: 1.05rem; color: #1e293b; white-space: pre-line;">' + escapeHtml(rawText.trim()) + '</p>';
      }
    }
    if (rationaleEl) {
      const rationaleText = found.whyBestScore || found.rationale || 'Task Achievement (Band 9): Fully addresses all parts of the task with well-developed ideas. Coherence & Cohesion: Seamless transitions between paragraphs. Lexical Resource: Natural and sophisticated vocabulary. Grammatical Range & Accuracy: Full flexibility with wide variety of structures.';
      const parts = rationaleText.split(/(?=[A-Z][a-zA-Z\s&]+(?:\(Band\s*9\)|\:))/);
      if (parts.length > 1) {
        rationaleEl.innerHTML = parts.map(function(pt) {
          return '<p style="margin: 0 0 10px 0; line-height: 1.65; color: #1e293b;">' + escapeHtml(pt.trim()) + '</p>';
        }).join('');
      } else {
        rationaleEl.innerHTML = '<p style="margin: 0; line-height: 1.65; color: #1e293b;">' + escapeHtml(rationaleText) + '</p>';
      }
    }
    if (vocabContainer) {
      if (found.keyVocabulary && found.keyVocabulary.length > 0) {
        let vocabHtml = '<div class="study-section-card" style="margin-top:24px; border-left:4px solid #3b82f6;">' +
          '<div class="study-section-header"><div class="study-section-title"><span style="color:#1d4ed8; font-weight:800;">Key Band 9 Vocabulary & Collocations</span></div></div>' +
          '<div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:12px;">';
        found.keyVocabulary.forEach(function(word) {
          vocabHtml += '<span style="background:#eff6ff; color:#1d4ed8; padding:6px 12px; border-radius:8px; font-weight:700; font-size:0.88rem; border:1px solid #bfdbfe;">' + escapeHtml(word) + '</span>';
        });
        vocabHtml += '</div></div>';
        vocabContainer.innerHTML = vocabHtml;
        vocabContainer.style.display = 'block';
      } else {
        vocabContainer.style.display = 'none';
      }
    }
    if (practiceBtn) {
      practiceBtn.onclick = function() {
        closeWritingModal();
        loadWritingPromptIntoSim(found.id);
      };
    }

    modal.style.display = 'block';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) modalContent.scrollTop = 0;
  }

  function closeWritingModal() {
    const modal = document.getElementById('writing-modal') || document.getElementById('writing-detail-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Keyboard shortcut: close writing modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const modal = document.getElementById('writing-modal') || document.getElementById('writing-detail-modal');
      if (modal && (modal.style.display === 'block' || modal.classList.contains('active'))) {
        closeWritingModal();
      }
    }
  });

  function loadWritingPromptIntoSim(itemId) {
    switchWritingTab('simulator');
    let promptTitle = 'Writing Practice Simulator';
    let promptText = '';
    let modelText = '';

    const wData = (typeof WRITING_DATA !== 'undefined') ? WRITING_DATA : (window.WRITING_DATA || null);
    if (wData) {
      const task2List = wData.task2 || WRITING_DATA.task2Essays || [];
      const task1List = WRITING_DATA.task1 || WRITING_DATA.task1Reports || [];
      const found = task2List.find(function(e) { return e.id === itemId; }) || task1List.find(function(r) { return r.id === itemId; });
      if (found) {
        promptTitle = found.title || found.topic || 'Practice Prompt';
        promptText = found.prompt || '';
        modelText = found.modelEssay || found.modelAnswer || '';
      }
    }

    const titleEl = document.getElementById('sim-prompt-title');
    const modelBox = document.getElementById('sim-model-preview');
    const textArea = document.getElementById('sim-textarea');

    if (titleEl) {
      let figureHtml = '';
      if (typeof window.TASK1_FIGURES !== 'undefined' && window.TASK1_FIGURES[itemId]) {
        figureHtml = '<div style="margin-top:14px; margin-bottom:14px; overflow-x:auto;">' + window.TASK1_FIGURES[itemId] + '</div>';
      }
      titleEl.innerHTML = escapeHtml(promptTitle) + 
        (promptText ? '<div style="font-size:0.95rem; font-weight:normal; color:#475569; margin-top:8px; line-height:1.45; background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #e2e8f0;"><strong>Prompt:</strong> ' + escapeHtml(promptText) + '</div>' : '') +
        figureHtml;
    }
    if (modelBox && modelText) {
      modelBox.textContent = modelText;
    }
    if (textArea) {
      textArea.value = '';
      textArea.focus();
    }
    updateSimWordCount();
  }

  function updateSimWordCount() {
    const textArea = document.getElementById('sim-textarea');
    const countEl = document.getElementById('sim-word-count');
    if (!textArea || !countEl) return;
    const text = textArea.value.trim();
    const count = text ? text.split(/\s+/).length : 0;
    const target = (state.currentWritingTab === 'task1') ? 150 : 250;
    countEl.textContent = 'Words: ' + count + ' / ' + target;
    countEl.style.color = count >= target ? '#16a34a' : '#2563eb';
  }

  function toggleSimTimer() {
    const btn = document.getElementById('sim-timer-toggle') || document.getElementById('sim-timer-toggle-btn');
    if (state.writingSimRunning) {
      clearInterval(state.writingSimTimer);
      state.writingSimRunning = false;
      if (btn) btn.textContent = 'Resume Timer';
    } else {
      state.writingSimRunning = true;
      if (btn) btn.textContent = 'Pause Timer';
      state.writingSimTimer = setInterval(function() {
        if (state.writingSimTimeRemaining > 0) {
          state.writingSimTimeRemaining--;
          updateSimTimerDisplay();
        } else {
          clearInterval(state.writingSimTimer);
          state.writingSimRunning = false;
          if (btn) btn.textContent = 'Time Up!';
          alert('Time is up for your writing practice session!');
        }
      }, 1000);
    }
  }

  function updateSimTimerDisplay() {
    const timerBox = document.getElementById('sim-timer') || document.getElementById('sim-timer-display');
    if (!timerBox) return;
    const m = Math.floor(state.writingSimTimeRemaining / 60);
    const s = state.writingSimTimeRemaining % 60;
    timerBox.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }

  // ========================================================================
  // SPEAKING & SHADOWING ENGINE
  // ========================================================================
  state.currentShadowingFilter = 'all';
  state.isVoiceRecording = false;

  function showShadowingView() {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('shadowing-view');
    if (v) v.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterShadowing(type) {
    state.currentShadowingFilter = type;
    renderShadowingGrid(type);
  }

  function renderShadowingGrid(type) {}

  function speakShadowingLine(lineText) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(lineText);
      u.lang = 'en-GB';
      u.rate = 0.95;
      window.speechSynthesis.speak(u);
    } else {
      alert('Speech synthesis is not supported in this browser.');
    }
  }

  function toggleVoiceRecording() {
    state.isVoiceRecording = !state.isVoiceRecording;
    alert(state.isVoiceRecording ? 'Microphone recording started. Speak clearly.' : 'Recording stopped.');
  }

  // ========================================================================
  // TED TALKS & BBC PODCASTS ENGINE
  // ========================================================================
  function showPodcastView() {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('podcast-view');
    if (v) v.classList.add('active-view');
    filterMediaCards('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchPodcastTab(tab) {
    filterMediaCards(tab === 'ted' ? 'ted' : (tab === 'bbc' ? 'bbc' : 'all'));
  }

  function filterMediaCards(channel) {
    channel = channel || 'all';
    ['all', 'bbc', 'ted'].forEach(function(ch) {
      const btn = document.getElementById('btn-tab-media-' + ch);
      if (btn) btn.classList.toggle('active', ch === channel);
    });
    const cardBbc = document.getElementById('media-card-bbc');
    const cardTed = document.getElementById('media-card-ted');
    if (cardBbc) cardBbc.style.display = (channel === 'all' || channel === 'bbc') ? 'flex' : 'none';
    if (cardTed) cardTed.style.display = (channel === 'all' || channel === 'ted') ? 'flex' : 'none';
  }

  function renderTedGrid() {}
  function renderBbcGrid() {}
  function checkMediaQuiz(qId, optIdx) {}

  // ========================================================================
  // 60-DAY ROUTINE VIEW CALLER
  // ========================================================================
  function showRoadmapView() {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('roadmap-view');
    if (v) v.classList.add('active-view');
    renderRoadmapCalendar('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ========================================================================
  // EDITORIAL READING SELECTION & SKILLS SELECTION VIEWS
  // ========================================================================
  function showReadingSelection() {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('reading-selection-view');
    if (v) v.classList.add('active-view');
    ['all','p1','p2','p3'].forEach(function(f) {
      const btn = document.getElementById('btn-mock-filter-' + f);
      if (btn) btn.classList.toggle('active', f === 'all');
    });
    const sInput = document.getElementById('reading-test-search');
    if (sInput) sInput.value = '';
    currentReadingFilter = 'all';
    currentReadingSearch = '';
    renderReadingSelectionGrid('all', '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  let currentReadingFilter = 'all';
  let currentReadingSearch = '';

  const OFFICIAL_26_TESTS = [
    { num: "01", title: "A Survivor's Story (Morepork owl)", part: 1, range: "Questions 1–13", dur: "20 min", summary: "One native bird in New Zealand that has managed to survive the introduction of non-native species." },
    { num: "02", title: "James Hargreaves and the Spinning Jenny", part: 1, range: "Questions 1–13", dur: "20 min", summary: "The invention that revolutionized cotton yarn production during the British Industrial Revolution." },
    { num: "03", title: "John Ray and the Study of Plants", part: 2, range: "Questions 14–26", dur: "20 min", summary: "The pioneering 17th-century naturalist whose meticulous classification shaped modern botanical science." },
    { num: "04", title: "Australia's Cane Toad Problem", part: 1, range: "Questions 1–13", dur: "20 min", summary: "The ecological catastrophe following the 1935 biological control attempt against sugar cane beetles." },
    { num: "05", title: "The Myth of the Eight-hour Sleep", part: 2, range: "Questions 14–26", dur: "20 min", summary: "Historical evidence revealing segmented bimodal sleep patterns before the advent of artificial lighting." },
    { num: "06", title: "The Weeping Wood (Rubber)", part: 1, range: "Questions 1–13", dur: "20 min", summary: "The discovery, vulcanization, and global commercial history of natural latex harvested from Hevea trees." },
    { num: "07", title: "Scott and Bowne's Cod Liver Oil", part: 1, range: "Questions 1–13", dur: "20 min", summary: "The early marketing, taste innovations, and medical rise of Scott's Emulsion in 19th-century America." },
    { num: "08", title: "How to Be Happy", part: 2, range: "Questions 14–26", dur: "20 min", summary: "Scientific exploration into subjective well-being, genetic set points, and intentional happiness activities." },
    { num: "09", title: "Starting School Later (Teen Sleep)", part: 1, range: "Questions 1–13", dur: "20 min", summary: "Neuroscience and biological circadian shifts advocating later school starting bells for adolescent health." },
    { num: "10", title: "Think Small (Nanoscience)", part: 1, range: "Questions 1–13", dur: "20 min", summary: "The emergence of nanotechnology, Izon Science qNano pore detection, and molecular level physics." },
    { num: "11", title: "Redesigning the Cleveland Museum of Art", part: 3, range: "Questions 27–40", dur: "20 min", summary: "Architectural transformation blending Breuer's modernism with Rafael Viñoly's expansive skylit atrium." },
    { num: "12", title: "NZ Home Textile Crafts 1930s-1950s", part: 3, range: "Questions 27–40", dur: "20 min", summary: "Depression and wartime domestic frugality reflected in thrifty thrifting, flour bag clothes, and quilting." },
    { num: "13", title: "Gordon Moore - Titan of Technology", part: 1, range: "Questions 1–13", dur: "20 min", summary: "The co-founder of Intel and the famous exponential prediction that governed microchip advancement." },
    { num: "14", title: "The History of Ice Cream", part: 1, range: "Questions 1–13", dur: "20 min", summary: "From ancient chilled delicacies and Renaissance iced custards to industrial pasteurized cream churns." },
    { num: "15", title: "Bristlecone Pines", part: 2, range: "Questions 14–26", dur: "20 min", summary: "The ancient gnarled trees of the White Mountains surviving millennia in arid subalpine dolomite soils." },
    { num: "16", title: "Learning from the Romans", part: 2, range: "Questions 14–26", dur: "20 min", summary: "Modern geotechnical engineers rediscovering the self-healing pozzolanic longevity of Roman maritime concrete." },
    { num: "17", title: "Corporate Social Responsibility", part: 2, range: "Questions 14–26", dur: "20 min", summary: "Balancing Milton Friedman's shareholder wealth theory against modern stakeholder accountability." },
    { num: "18", title: "Memory in Plants", part: 2, range: "Questions 17–27", dur: "20 min", summary: "Monica Gagliano's habituation drop tests on Mimosa pudica demonstrating learned memory retention." },
    { num: "19", title: "A Great Leap Forward (Maud Island Frogs)", part: 2, range: "Questions 14–24", dur: "20 min", summary: "Conservation translocation of New Zealand's primitive, voiceless Leiopelma pakeka frogs." },
    { num: "20", title: "How the Mind Ages", part: 2, range: "Questions 14–26", dur: "20 min", summary: "Cognitive aging research differentiating fluid intelligence decline from crystalized wisdom resilience." },
    { num: "21", title: "The Art of Deception", part: 3, range: "Questions 27–40", dur: "20 min", summary: "Paul Ekman's Facial Action Coding System, micro-expressions, and psychological markers of deceit." },
    { num: "22", title: "The Development of Plastics", part: 1, range: "Questions 1–13", dur: "20 min", summary: "From natural shellac and Parkesine to Baekeland's fully synthetic Bakelite thermosetting polymers." },
    { num: "23", title: "Tunnelling under the Thames", part: 1, range: "Questions 1–13", dur: "20 min", summary: "Marc Brunel's shipworm-inspired cast-iron shield conquering the treacherous London riverbed in 1843." },
    { num: "24", title: "Some Views on the Use of Headphones", part: 3, range: "Questions 27–40", dur: "20 min", summary: "Acoustic ecology, urban solitude, and sociability dynamics in the auditory cocoon of personal stereos." },
    { num: "25", title: "Lights Along a Dangerous Coast", part: 1, range: "Questions 1–13", dur: "20 min", summary: "The Stevenson engineering dynasty and hazardous wave-swept granite lighthouse construction in Scotland." },
    { num: "26", title: "Coral Reefs", part: 2, range: "Questions 14–25", dur: "20 min", summary: "The vital symbiosis between coral polyps and zooxanthellae algae, biodiversity, and bleaching risks." }
  ];

  function filterReadingPassages(filter) {
    currentReadingFilter = filter || 'all';
    ['all','p1','p2','p3'].forEach(function(f) {
      const btn = document.getElementById('btn-mock-filter-' + f);
      if (btn) btn.classList.toggle('active', f === currentReadingFilter);
    });
    renderReadingSelectionGrid(currentReadingFilter, currentReadingSearch);
  }

  function searchReadingPassages(query) {
    currentReadingSearch = (query || '').toLowerCase().trim();
    renderReadingSelectionGrid(currentReadingFilter, currentReadingSearch);
  }

  function renderReadingSelectionGrid(filter, search) {
    const grid = document.getElementById('reading-selection-grid');
    if (!grid) return;

    filter = filter || currentReadingFilter || 'all';
    search = (search !== undefined ? search : currentReadingSearch) || '';

    const filtered = OFFICIAL_26_TESTS.filter(function(t) {
      let matchesPart = true;
      if (filter === 'p1') matchesPart = (t.part === 1);
      else if (filter === 'p2') matchesPart = (t.part === 2);
      else if (filter === 'p3') matchesPart = (t.part === 3);

      let matchesSearch = true;
      if (search) {
        matchesSearch = t.title.toLowerCase().includes(search) ||
                        t.num.includes(search) ||
                        t.summary.toLowerCase().includes(search);
      }
      return matchesPart && matchesSearch;
    });

    // Theme matching Image 2: Step/Ticket card layout with perforated notch & top-right icon badge
    const stepColors = [
      { name: 'crimson', bg: '#8B1E2D', light: '#FDF2F4', text: '#6C151E', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' },
      { name: 'teal', bg: '#134B45', light: '#F0F9F8', text: '#0F3D3A', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"/></svg>' },
      { name: 'amber', bg: '#C05621', light: '#FDF6EC', text: '#9C4221', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' },
      { name: 'navy', bg: '#1E3A8A', light: '#EFF6FF', text: '#1E3A8A', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
      { name: 'forest', bg: '#2D6A4F', light: '#F0FDF4', text: '#1E4633', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' }
    ];

    let html = '';
    filtered.forEach(function(card, idx) {
      const c = stepColors[idx % stepColors.length];
      const testUrl = 'ielts reading/ielts-mock-tests/Test' + card.num + '.html';

      html += '<div class="reading-step-card">' +
        // Left Colored Step Block with Ticket Notch
        '<div class="reading-step-left" style="background:' + c.bg + ';">' +
          '<span class="reading-step-lbl">step</span>' +
          '<span class="reading-step-num">' + card.num + '</span>' +
          '<div class="reading-step-perforation"></div>' +
        '</div>' +
        // Right White Card Body
        '<div class="reading-step-right">' +
          // Top-right colored icon badge
          '<div class="reading-step-icon-badge" style="background:' + c.bg + ';" title="Passage ' + card.part + '">' +
            '<span>' + c.icon + '</span>' +
          '</div>' +
          '<div class="reading-step-header-tag" style="color:' + c.text + ';">' +
            '<span>CAMBRIDGE TEST ' + card.num + ' &bull; PASSAGE ' + card.part + '</span>' +
          '</div>' +
          '<h3 class="reading-step-title">' + escapeHtml(card.title) + '</h3>' +
          '<p class="reading-step-desc">' + escapeHtml(card.summary) + '</p>' +
          '<div class="reading-step-meta-chips">' +
            '<span class="reading-chip">20 Mins</span>' +
            '<span class="reading-chip">Q ' + card.range + '</span>' +
            '<span class="reading-chip" style="background:' + c.light + '; color:' + c.text + ';">Live Timer &amp; Answers</span>' +
          '</div>' +
          '<div class="reading-step-actions">' +
            '<button class="reading-step-btn-start" style="background:' + c.bg + ';" onclick="window.ieltsApp.openReadingMockTest(\'' + card.num + '\')">' +
              '<span>Start Mock Test</span>' +
              '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
            '</button>' +
            '<a href="' + testUrl + '" target="_blank" rel="noopener noreferrer" class="reading-step-btn-link" title="Open in separate tab">' +
              '<span>Full</span> &nearr;' +
            '</a>' +
          '</div>' +
        '</div>' +
      '</div>';
    });

    grid.innerHTML = html || '<div style="grid-column:1/-1; padding:48px 20px; text-align:center; color:#64748b; font-weight:600; font-size:1.1rem; background:rgba(255,255,255,0.6); border-radius:12px; border:1px dashed #cbd5e1;">No mock tests found matching "' + escapeHtml(search) + '".</div>';
  }

  function openReadingMockTest(num) {
    stopTimer();
    hideAllViews();
    const frameView = document.getElementById('reading-test-frame-view');
    const iframe = document.getElementById('reading-test-iframe');
    const titleEl = document.getElementById('reading-frame-active-title');
    const newTabBtn = document.getElementById('reading-frame-newtab-btn');

    // Normalize num to 2-digit format e.g. "01"
    const normalizedNum = String(parseInt(num, 10) || 1).padStart(2, '0');
    const test = OFFICIAL_26_TESTS.find(t => t.num === normalizedNum) || OFFICIAL_26_TESTS[0];
    const testUrl = 'ielts reading/ielts-mock-tests/Test' + test.num + '.html';

    if (titleEl) titleEl.textContent = 'Test ' + test.num + ': ' + test.title + ' (' + test.range + ')';
    if (newTabBtn) newTabBtn.href = testUrl;
    if (iframe) iframe.src = testUrl;

    if (frameView) frameView.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function startReadingPassage(testId, partIndex) {
    // Graceful routing from legacy or direct passage requests
    if (typeof testId === 'number' || (typeof testId === 'string' && /^\d+$/.test(testId))) {
      openReadingMockTest(testId);
      return;
    }
    const legacyMap = {
      'drill-morepork': '01',
      'drill-spinning-jenny': '02',
      'drill-john-ray': '03',
      'drill-cane-toad': '04',
      'drill-eight-hour-sleep': '05',
      'drill-rubber': '06',
      'test-3': '07',
      'test-4': '09',
      'drill-izon': '10',
      'test-5': '14',
      'test-2': '25',
      'test-1': '23',
      'drill-maud-frog': '19',
      'test-6': '22'
    };
    if (legacyMap[testId]) {
      openReadingMockTest(legacyMap[testId]);
      return;
    }
    openReadingMockTest('01');
  }

  function startReadingTest(testId) {
    startReadingPassage(testId, 0);
  }

  function showReadingSkills(passageId) {
    if (passageId) {
      showReaderView(passageId);
    } else {
      showReadingSkillsSelection();
    }
  }

  function showReadingSkillsSelection() {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('reading-skills-selection-view');
    if (v) v.classList.add('active-view');
    ['all','initial','easy','medium','hard'].forEach(function(l) {
      const btn = document.getElementById('btn-rs-' + l);
      if (btn) btn.classList.toggle('active', l === 'all');
    });
    renderReadingSkillsCards('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterReadingSkillsCards(level) {
    ['all','initial','easy','medium','hard'].forEach(function(l) {
      const btn = document.getElementById('btn-rs-' + l);
      if (btn) btn.classList.toggle('active', l === level);
    });
    renderReadingSkillsCards(level);
  }

  function renderReadingSkillsCards(level) {
    const grid = document.getElementById('reading-skills-selection-grid');
    const passages = (typeof READING_SKILLS_PASSAGES !== 'undefined') ? READING_SKILLS_PASSAGES : (state.readingPassages || []);
    if (!grid || !passages || passages.length === 0) return;
    level = level || 'all';
    const filtered = level === 'all' ? passages : passages.filter(function(p){ return p.level === level; });

    const stepColors = [
      { name: 'crimson', bg: '#8B1E2D', light: '#FDF2F4', text: '#6C151E', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' },
      { name: 'teal', bg: '#134B45', light: '#F0F9F8', text: '#0F3D3A', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"/></svg>' },
      { name: 'amber', bg: '#C05621', light: '#FDF6EC', text: '#9C4221', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' },
      { name: 'navy', bg: '#1E3A8A', light: '#EFF6FF', text: '#1E3A8A', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
      { name: 'forest', bg: '#2D6A4F', light: '#F0FDF4', text: '#1E4633', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' }
    ];

    let html = '';
    filtered.forEach(function(p, idx) {
      const c = stepColors[idx % stepColors.length];
      const numStr = (idx + 1 < 10 ? '0' : '') + (idx + 1);
      const lvl = (p.level || 'easy').toUpperCase();
      const isComplete = localStorage.getItem('ielts_reading_complete_' + p.id) === '1';
      const completeBtnHtml = isComplete
        ? '<button class="reading-step-btn-complete is-done" onclick="event.stopPropagation();" disabled><span>✓ Completed</span></button>'
        : '<button class="reading-step-btn-complete" onclick="event.stopPropagation(); window.ieltsApp.markPassageComplete(\'' + p.id + '\')"><span>Mark Complete</span></button>';

      html += '<div class="reading-step-card reading-drill-card' + (isComplete ? ' rs-card-complete' : '') + '" onclick="window.ieltsApp.showReaderView(\'' + p.id + '\')">' +
        '<div class="reading-step-left" style="background:' + c.bg + ';">' +
          '<span class="reading-step-lbl">' + (p.level || 'drill') + '</span>' +
          '<span class="reading-step-num">' + numStr + '</span>' +
          '<div class="reading-step-perforation"></div>' +
        '</div>' +
        '<div class="reading-step-right">' +
          '<div class="reading-step-icon-badge" style="background:' + c.bg + ';" title="' + lvl + '">' +
            '<span>' + c.icon + '</span>' +
          '</div>' +
          '<div class="reading-step-header-tag" style="color:' + c.text + ';">' +
            '<span>SKILL DRILL ' + numStr + ' &bull; ' + (p.levelLabel || lvl) + '</span>' +
          '</div>' +
          '<h3 class="reading-step-title">' + escapeHtml(p.title) + '</h3>' +
          '<p class="reading-step-desc">' + escapeHtml((p.summary || p.lead || 'Practice reading comprehension, speed, paragraph notes and vocabulary building.').substring(0, 140)) + '...</p>' +
          '<div class="reading-step-meta-chips">' +
            '<span class="reading-chip">' + (p.wordCount || 350) + ' Words</span>' +
            '<span class="reading-chip" style="background:' + c.light + '; color:' + c.text + ';">Paragraph Notes &amp; Summary</span>' +
          '</div>' +
          '<div class="reading-step-actions">' +
            '<button class="reading-step-btn-start" style="background:' + c.bg + ';" onclick="event.stopPropagation(); window.ieltsApp.showReaderView(\'' + p.id + '\')">' +
              '<span>Read Passage</span>' +
              '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
            '</button>' +
            completeBtnHtml +
          '</div>' +
        '</div>' +
      '</div>';
    });
    grid.innerHTML = html || '<p style="color:var(--muted);padding:40px;text-align:center;">No passages found.</p>';
  }

  function retakeTest() {
    if (confirm('Retake test? All answers will be reset.')) {
      if (dom.scoreModal) dom.scoreModal.classList.remove('active');
      if (state.currentTest) loadTest(state.currentTest.id);
    }
  }

  function startTestFromHome(testId) {
    showExamView(testId);
  }

  function openReadingPassage(passageId) {
    showReaderView(passageId);
  }

  function markPassageComplete(passageId) {
    const key = 'ielts_reading_complete_' + passageId;
    localStorage.setItem(key, '1');
    renderReadingSkillsCards(state.currentDifficultyFilter || 'all');
    showReaderToast('✓ Passage marked as complete!');
  }

  // ========================================================================
  // LISTENING PRACTICE VIEW (USER SPEC: CLEAN CARD LINKING TO YOUTUBE)
  // ========================================================================
  function showListeningView() {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('listening-view');
    if (v) v.classList.add('active-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchListeningTab(tab) {
    showListeningView();
  }

  function renderListeningMocks() {
    showListeningView();
  }

  function filterListeningDrills() {
    showListeningView();
  }

  function renderListeningDrills() {
    showListeningView();
  }

  function startListeningMock() {
    showListeningView();
  }

  function startListeningDrill() {
    showListeningView();
  }

  function switchListeningExamPart() {}
  function toggleListeningAudio() {}
  function seekListeningAudio() {}
  function setListeningVolume() {}
  function toggleListeningTimer() {}
  function resetListeningTimer() {}
  function recordListeningAnswer() {}
  function scrollToListeningQ() {}
  function toggleListeningFlag() {}
  function submitListeningExam() {}


// ========================================================================
  // VOCABULARY ENGINE (TOPICS-WISE EXPLORER & 60-DAY ROUTINE)
  // ========================================================================
  state.currentVocabMode = 'topics';
  state.currentVocabCategory = 'all';
  state.vocabSearchQuery = '';
  state.currentVocabFilter = 'all';
  state.currentSelectedVocabDay = 1;

  function getCompletedVocabDays() {
    try {
      const stored = localStorage.getItem('ielts_vocab_completed_days');
      return stored ? JSON.parse(stored) : [];
    } catch(e) {
      return [];
    }
  }

  function setCompletedVocabDays(days) {
    try {
      localStorage.setItem('ielts_vocab_completed_days', JSON.stringify(days));
    } catch(e) {}
  }

  function showVocabularyView() {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('vocabulary-view');
    if (v) v.classList.add('active-view');
    renderVocabTopicsHub();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }



  function filterVocabCategory(cat) {
    state.currentVocabCategory = cat;
    document.querySelectorAll('#vocab-category-filter-bar .cat-filter-btn').forEach(function(b) {
      b.classList.toggle('active', b.getAttribute('data-cat-filter') === cat);
    });
    renderVocabTopicsHub();
  }

  function searchVocab(query) {
    state.vocabSearchQuery = (query || '').trim().toLowerCase();
    renderVocabTopicsHub();
  }

  function renderVocabTopicsHub() {
    const grid = document.getElementById('vocab-topics-cards-grid');
    if (!grid) return;

    if (typeof VOCABULARY_DATA === 'undefined' || !Array.isArray(VOCABULARY_DATA)) {
      grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:40px; color:#64748b;">Vocabulary database loading...</div>';
      return;
    }

    const cat = state.currentVocabCategory || 'all';
    const query = (state.vocabSearchQuery || '').toLowerCase().trim();

    let filteredDays = VOCABULARY_DATA.filter(function(day) {
      if (cat !== 'all' && day.category !== cat) return false;
      if (!query) return true;

      if ((day.theme || '').toLowerCase().includes(query)) return true;
      if ((day.category || '').toLowerCase().includes(query)) return true;

      const wordMatch = (day.words || []).some(function(w) {
        return (w.word && w.word.toLowerCase().includes(query)) ||
               (w.definition && w.definition.toLowerCase().includes(query)) ||
               (w.synonyms && w.synonyms.some(function(s) { return s.toLowerCase().includes(query); }));
      });
      if (wordMatch) return true;

      const phrasalMatch = (day.phrasalVerbs || []).some(function(p) {
        return (p.verb && p.verb.toLowerCase().includes(query)) ||
               (p.meaning && p.meaning.toLowerCase().includes(query));
      });
      if (phrasalMatch) return true;

      const idiomMatch = (day.idioms || []).some(function(i) {
        return (i.idiom && i.idiom.toLowerCase().includes(query)) ||
               (i.meaning && i.meaning.toLowerCase().includes(query));
      });
      return idiomMatch;
    });

    if (filteredDays.length === 0) {
      grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:50px 20px; background:#fff; border-radius:14px; border:1px solid #e2e8f0; color:#64748b;">' +
        
        '<h4 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin:0 0 6px;">No Vocabulary Topics Found</h4>' +
        '<p style="margin:0; font-size:0.92rem;">Try clearing your search query or selecting another topic filter.</p>' +
      '</div>';
      return;
    }

    // Palette matching Image 1: Yellow/Orange, Green, Cyan/Blue, Magenta/Pink
    const themePalettes = [
      // 1. Crimson Velvet (User's snippet: #8b1a2b -> #c0392b)
      {
        c1: '#8b1a2b',
        c2: '#c0392b',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'
      },
      // 2. Deep Pine Teal (Website --ink: #0f3d3a -> #166e66)
      {
        c1: '#0f3d3a',
        c2: '#166e66',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"/></svg>'
      },
      // 3. Warm Amber Gold (Website --t4: #b45309 -> #d97706)
      {
        c1: '#b45309',
        c2: '#d97706',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>'
      },
      // 4. Cambridge Navy Blue (Website Cambridge: #1e3a8a -> #2563eb)
      {
        c1: '#1e3a8a',
        c2: '#2563eb',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'
      },
      // 5. Rose Quartz Velvet (Website --t3: #7f1d38 -> #9f2b48)
      {
        c1: '#7f1d38',
        c2: '#9f2b48',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>'
      },
      // 6. Forest Jade Emerald (Website --t2: #1b4332 -> #2d6a4f)
      {
        c1: '#1b4332',
        c2: '#2d6a4f',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>'
      }
    ];

    let html = '';
    const completed = getCompletedVocabDays();

    filteredDays.forEach(function(day, idx) {
      const p = themePalettes[idx % themePalettes.length];
      const isDone = completed.includes(day.day);
      const wordsPreview = (day.words || []).slice(0, 4).map(function(w) { return w.word; }).join(', ');
      const numStr = (day.day < 10 ? '0' : '') + day.day;

      // Single Direct Card (Flip option OFF as requested)
      html += '<article class="topic-card ' + (isDone ? 'is-completed' : '') + '" id="vocab-card-' + day.day + '" style="--c1:' + p.c1 + '; --c2:' + p.c2 + ';" onclick="window.ieltsApp.openVocabDayModal(' + day.day + ')">' +
        '<header class="topic-head">' +
          '<span class="topic-num">' + numStr + '</span>' +
          '<h3 class="topic-title">Topic ' + numStr + '</h3>' +
          '<span class="topic-icon">' + p.icon + '</span>' +
        '</header>' +
        '<div class="topic-body">' +
          '<span class="topic-label">' + escapeHtml((day.category || 'IELTS Core').toUpperCase()) + '</span>' +
          '<h4>' + escapeHtml(day.theme) + '</h4>' +
          '<p class="keywords">' + escapeHtml(wordsPreview) + '...</p>' +
          '<div class="tags">' +
            '<span>10 Words</span>' +
            '<span>3 Phrasals</span>' +
            '<span>2 Idioms</span>' +
            '<span style="color:var(--c1); font-weight:800; background:#fef2f2;">Band 7.5-9.0</span>' +
          '</div>' +
          '<div class="topic-foot">' +
            '<button type="button" class="status ' + (isDone ? 'is-done' : '') + '" onclick="event.stopPropagation(); ' + (isDone ? 'window.ieltsApp.markVocabIncomplete(' + day.day + ')' : 'window.ieltsApp.markVocabComplete(' + day.day + ')') + '">' +
              (isDone ? '✓ Completed' : 'Incomplete') +
            '</button>' +
            '<a href="#" onclick="event.preventDefault(); event.stopPropagation(); window.ieltsApp.openVocabDayModal(' + day.day + ')">Explore &rarr;</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    });

    grid.innerHTML = html;
  }

  function openVocabDayModal(dayNum) {
    dayNum = parseInt(dayNum, 10) || 1;
    state.currentSelectedVocabDay = dayNum;

    if (typeof VOCABULARY_DATA === 'undefined' || !Array.isArray(VOCABULARY_DATA)) {
      console.error('VOCABULARY_DATA is not defined!');
      return;
    }
    const dayData = VOCABULARY_DATA.find(function(d) { return d.day === dayNum; }) || VOCABULARY_DATA[0];
    if (!dayData) return;

    const modal = document.getElementById('vocab-day-modal');
    const title = document.getElementById('vocab-modal-day-title') || document.getElementById('vocab-modal-title');
    const phaseTag = document.getElementById('vocab-modal-phase-tag');
    const content = document.getElementById('vocab-modal-body') || document.getElementById('vocab-modal-content');
    const completeBtn = document.getElementById('vocab-complete-btn') || document.getElementById('vocab-modal-complete-btn');

    if (phaseTag) {
      phaseTag.textContent = 'Day ' + dayData.day + ' Routine • ' + (dayData.category || 'Academic');
    }
    if (title) {
      title.textContent = 'Day ' + dayData.day + ': ' + dayData.theme;
    }

    const completed = getCompletedVocabDays();
    const isDone = completed.includes(dayData.day);
    if (completeBtn) {
      completeBtn.textContent = isDone ? '↺ Mark as Incomplete' : '✓ Mark as Complete';
      completeBtn.style.background = isDone ? '#dc2626' : '#15803d';
      completeBtn.style.color = '#ffffff';
      completeBtn.style.borderColor = isDone ? '#b91c1c' : '#166534';
    }

    let html = '<div style="margin-bottom:20px;">' +
      '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:18px; background:#f8fafc; padding:14px 20px; border-radius:12px; border:1px solid #e2e8f0;">' +
        '<div style="font-size:0.95rem; font-weight:700; color:#334155;">' +
          '<span>Category: <strong style="color:#2563eb;">' + escapeHtml(dayData.category || 'Academic') + '</strong></span> &bull; ' +
          '<span>Target Score: <strong style="color:#16a34a;">Band 8.0 - 9.0</strong></span>' +
        '</div>' +
        '<div style="font-size:0.85rem; color:#64748b; font-weight:600;">10 Academic Words &bull; 3 Phrasal Verbs &bull; 2 Idioms</div>' +
      '</div>';

    // 10 Words
    html += '<h4 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin:0 0 14px; display:flex; align-items:center; gap:8px;">' +
      '<span style="background:#2563eb; color:#fff; width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:900;">10</span>' +
      'Academic Vocabulary Words (Band 7.5 - 9.0)' +
    '</h4>' +
    '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:14px; margin-bottom:24px;">';

    (dayData.words || []).forEach(function(w) {
      const synHtml = (w.synonyms || []).map(function(s) {
        return '<span style="background:#f1f5f9; color:#334155; font-size:0.75rem; font-weight:700; padding:2px 8px; border-radius:4px; border:1px solid #e2e8f0;">' + escapeHtml(s) + '</span>';
      }).join(' ');

      html += '<div style="background:#ffffff; border:1.5px solid #e2e8f0; border-radius:12px; padding:16px; box-shadow:0 2px 6px rgba(0,0,0,0.03);">' +
        '<div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">' +
          '<div>' +
            '<span style="font-size:1.12rem; font-weight:800; color:#0f172a;">' + escapeHtml(w.word) + '</span> ' +
            '<small style="color:#64748b; font-style:italic;">(' + escapeHtml(w.pos || 'n.') + ')</small>' +
          '</div>' +
          '<button type="button" data-speak="' + escapeHtml(w.word || '') + '" onclick="window.ieltsApp.speakShadowingLine(this.getAttribute(\'data-speak\'))" title="Listen Pronunciation" style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:6px; cursor:pointer; color:#2563eb; padding:4px 8px; display:inline-flex; align-items:center; gap:4px; font-size:0.78rem; font-weight:700;">' +
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>' +
            '<span>Pronounce</span>' +
          '</button>' +
        '</div>' +
        '<p style="margin:0 0 10px; font-size:0.9rem; color:#334155; line-height:1.45;">' + escapeHtml(w.definition || '') + '</p>' +
        '<div style="margin-bottom:10px; display:flex; align-items:center; gap:6px; flex-wrap:wrap;">' +
          '<span style="font-size:0.75rem; font-weight:800; color:#64748b; text-transform:uppercase;">Synonyms:</span>' +
          synHtml +
        '</div>' +
        '<div style="background:#f8fafc; border-left:3px solid #2563eb; padding:8px 12px; border-radius:0 6px 6px 0; font-size:0.86rem; color:#1e293b; line-height:1.45;">' +
          '<strong>Example:</strong> "' + escapeHtml(w.example || '') + '"' +
        '</div>' +
      '</div>';
    });

    html += '</div>';

    // 3 Phrasal Verbs
    html += '<h4 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin:0 0 14px; display:flex; align-items:center; gap:8px;">' +
      '<span style="background:#059669; color:#fff; width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:900;">3</span>' +
      'Academic Phrasal Verbs (from 100 Reference Sheet)' +
    '</h4>' +
    '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:12px; margin-bottom:24px;">';

    (dayData.phrasalVerbs || []).forEach(function(p) {
      html += '<div style="background:#ffffff; border:1.5px solid #a7f3d0; border-radius:12px; padding:14px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
          '<strong style="font-size:1.05rem; color:#065f46;">' + escapeHtml(p.verb) + '</strong>' +
          '<span style="background:#d1fae5; color:#065f46; font-size:0.7rem; font-weight:800; padding:2px 6px; border-radius:4px;">Phrasal</span>' +
        '</div>' +
        '<p style="margin:0 0 8px; font-size:0.88rem; color:#334155; line-height:1.4;">' + escapeHtml(p.meaning || '') + '</p>' +
        '<div style="background:#f0fdf4; border-left:3px solid #059669; padding:6px 10px; border-radius:0 6px 6px 0; font-size:0.84rem; color:#064e3b; font-style:italic;">' +
          '"' + escapeHtml(p.example || '') + '"' +
        '</div>' +
      '</div>';
    });

    html += '</div>';

    // 2 Idioms
    html += '<h4 style="font-size:1.15rem; font-weight:800; color:#0f172a; margin:0 0 14px; display:flex; align-items:center; gap:8px;">' +
      '<span style="background:#d97706; color:#fff; width:28px; height:28px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:900;">2</span>' +
      'Band 8+ Idioms (from 100 Reference Sheet)' +
    '</h4>' +
    '<div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:12px; margin-bottom:12px;">';

    (dayData.idioms || []).forEach(function(i) {
      html += '<div style="background:#ffffff; border:1.5px solid #fde68a; border-radius:12px; padding:14px; box-shadow:0 2px 6px rgba(0,0,0,0.02);">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
          '<strong style="font-size:1.05rem; color:#92400e;">' + escapeHtml(i.idiom) + '</strong>' +
          '<span style="background:#fef3c7; color:#92400e; font-size:0.7rem; font-weight:800; padding:2px 6px; border-radius:4px;">Idiom</span>' +
        '</div>' +
        '<p style="margin:0 0 8px; font-size:0.88rem; color:#334155; line-height:1.4;">' + escapeHtml(i.meaning || '') + '</p>' +
        '<div style="background:#fffbeb; border-left:3px solid #d97706; padding:6px 10px; border-radius:0 6px 6px 0; font-size:0.84rem; color:#78350f; font-style:italic;">' +
          '"' + escapeHtml(i.example || '') + '"' +
        '</div>' +
      '</div>';
    });

    html += '</div></div>';

    if (content) {
      content.innerHTML = html;
    }
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.add('active');
    }
  }

  function closeVocabModal() {
    const modal = document.getElementById('vocab-day-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('active');
      const img = document.getElementById('vocab-cheat-img');
      if (img) { img.style.display = 'none'; img.src = ''; }
    }
  }

  function markVocabIncomplete(dayNum) {
    dayNum = parseInt(dayNum, 10) || 1;
    let completed = getCompletedVocabDays();
    completed = completed.filter(function(d) { return d !== dayNum; });
    setCompletedVocabDays(completed);
    renderVocabTopicsHub();
  }

  function markVocabComplete(dayNum) {
    dayNum = parseInt(dayNum, 10) || 1;
    let completed = getCompletedVocabDays();
    if (!completed.includes(dayNum)) {
      completed.push(dayNum);
    }
    setCompletedVocabDays(completed);
    renderVocabTopicsHub();
  }

  function toggleVocabDayComplete() {
    const dayNum = state.currentSelectedVocabDay || 1;
    let completed = getCompletedVocabDays();
    if (completed.includes(dayNum)) {
      completed = completed.filter(function(d) { return d !== dayNum; });
    } else {
      completed.push(dayNum);
    }
    setCompletedVocabDays(completed);

    openVocabDayModal(dayNum);
    if (state.currentVocabMode === 'topics') renderVocabTopicsHub();
  }

  function navigateVocabModal(offset) {
    let nextDay = (state.currentSelectedVocabDay || 1) + offset;
    if (nextDay < 1) nextDay = 60;
    if (nextDay > 60) nextDay = 1;
    openVocabDayModal(nextDay);
  }

  function openVocabCheatSheet(type) {
    const modal = document.getElementById('vocab-cheat-modal');
    const title = document.getElementById('vocab-cheat-title');
    const img = document.getElementById('vocab-cheat-img');
    if (!modal || !img) return;

    let src = '';
    let name = '';
    if (type === 'phrasals') {
      src = 'assets/images/vocab/academic_phrasal_verbs_100.jpg';
      name = '100 Phrasal Verbs for Academic English Reference Sheet';
    } else if (type === 'idioms') {
      src = 'assets/images/vocab/english_idioms_100.jpg';
      name = '100 English Idioms Reference Sheet';
    } else if (type === 'collocations') {
      src = 'assets/images/vocab/collocations_have_do_make.jpg';
      name = 'Collocations with HAVE, DO, and MAKE Cheat Sheet';
    } else if (type === 'basic_grammar') {
      src = 'assets/images/vocab/basic_grammar_infographic.jpg';
      name = 'Basic English Grammar & Parts of Speech Infographic';
    } else if (type === 'time_prepositions') {
      src = 'assets/images/vocab/prepositions_time_clock.jpg';
      name = 'Prepositions of Time (IN, ON, AT) Clock';
    }

    if (title) title.textContent = name;
    img.src = src;
    img.style.display = 'block';
    modal.style.display = 'flex';
    modal.classList.add('active');
  }

  function closeVocabCheatSheet() {
    const modal = document.getElementById('vocab-cheat-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('active');
    }
  }

  // ========================================================================
  // GRAMMAR PRACTICE LAB ENGINE (5 TOPICS • 10 EXERCISES • 20 QS: 10 DND + 10 GAP)
  // ========================================================================
  state.currentGrammarTopicId = 'subject-verb-agreement';
  state.currentGrammarExerciseNum = 1;
  state.grammarExerciseState = {};
  state.grammarSubmitted = false;

    function getCompletedGrammarTopics() {
    try {
      const data = localStorage.getItem('ielts_grammar_completed_topics');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCompletedGrammarTopic(topicId) {
    try {
      let list = getCompletedGrammarTopics();
      if (!list.includes(topicId)) {
        list.push(topicId);
        localStorage.setItem('ielts_grammar_completed_topics', JSON.stringify(list));
      }
    } catch (e) {}
  }

  function removeCompletedGrammarTopic(topicId) {
    try {
      let list = getCompletedGrammarTopics();
      list = list.filter(function(id) { return id !== topicId; });
      localStorage.setItem('ielts_grammar_completed_topics', JSON.stringify(list));
    } catch (e) {}
  }

  function toggleGrammarTopicComplete(topicId) {
    const completed = getCompletedGrammarTopics();
    if (completed.includes(topicId)) {
      removeCompletedGrammarTopic(topicId);
    } else {
      saveCompletedGrammarTopic(topicId);
    }
    renderGrammarTopicsHub();
    updateTopicDetailStatus(topicId);
  }

  function toggleCurrentTopicComplete() {
    if (!state.currentGrammarTopicId) return;
    toggleGrammarTopicComplete(state.currentGrammarTopicId);
  }

  function updateTopicDetailStatus(topicId) {
    const completed = getCompletedGrammarTopics();
    const isDone = completed.includes(topicId);
    const pill = document.getElementById('grammar-topic-status-pill');
    const btn = document.getElementById('grammar-topic-toggle-btn');
    if (pill) {
      pill.textContent = isDone ? '✓ Completed' : 'Incomplete';
      pill.style.background = isDone ? '#dcfce7' : '#f1f5f9';
      pill.style.color = isDone ? '#15803d' : '#475569';
    }
    if (btn) {
      btn.textContent = isDone ? 'Mark as Incomplete' : '✓ Mark as Complete';
      btn.className = isDone ? 'btn alt' : 'btn main';
    }
  }

  function showGrammarView() {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('grammar-view');
    if (v) v.classList.add('active-view');
    returnToGrammarTopics();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function returnToGrammarTopics() {
    const hub = document.getElementById('grammar-topics-hub');
    const detailView = document.getElementById('grammar-detail-view');
    const videoView = document.getElementById('grammar-video-resources-view');
    const headerTitle = document.getElementById('grammar-header-title');
    const backBtn = document.getElementById('grammar-back-nav-btn');

    if (hub) hub.style.display = 'block';
    if (detailView) detailView.style.display = 'none';
    if (videoView) videoView.style.display = 'none';
    if (headerTitle) headerTitle.textContent = 'IELTS Grammar Mastery Hub';
    if (backBtn) backBtn.innerHTML = '<span>&larr; Back to Home</span>';

    renderGrammarTopicsHub();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderGrammarTopicsHub() {
    const grid = document.getElementById('grammar-topics-grid');
    if (!grid || typeof GRAMMAR_DATA === 'undefined') return;

    // Palette matching Vocabulary topic cards
    const themePalettes = [
      { c1: '#8b1a2b', c2: '#c0392b', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' },
      { c1: '#0f3d3a', c2: '#166e66', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"/></svg>' },
      { c1: '#b45309', c2: '#d97706', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>' },
      { c1: '#1e3a8a', c2: '#2563eb', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
      { c1: '#7f1d38', c2: '#9f2b48', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' },
      { c1: '#1b4332', c2: '#2d6a4f', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>' },
      { c1: '#3730a3', c2: '#4f46e5', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>' },
      { c1: '#9a3412', c2: '#ea580c', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' }
    ];

    const completed = getCompletedGrammarTopics();
    let html = '';

    (GRAMMAR_DATA.topics || []).forEach(function(topic, idx) {
      const p = themePalettes[idx % themePalettes.length];
      const isDone = completed.includes(topic.id);
      const numStr = (topic.number < 10 ? '0' : '') + topic.number;

      // Matching Vocabulary Topic Card layout exactly
      html += '<article class="topic-card ' + (isDone ? 'is-completed' : '') + '" id="grammar-card-' + topic.id + '" style="--c1:' + p.c1 + '; --c2:' + p.c2 + ';" onclick="window.ieltsApp.openGrammarTopic(\'' + topic.id + '\')">' +
        '<header class="topic-head">' +
          '<span class="topic-num">' + numStr + '</span>' +
          '<h3 class="topic-title">Topic ' + numStr + '</h3>' +
          '<span class="topic-icon">' + p.icon + '</span>' +
        '</header>' +
        '<div class="topic-body">' +
          '<span class="topic-label">' + escapeHtml((topic.category || 'GRAMMAR').toUpperCase()) + '</span>' +
          '<h4>' + escapeHtml(topic.title) + '</h4>' +
          '<p class="keywords">' + escapeHtml(topic.summary) + '</p>' +
          '<div class="tags">' +
            '<span>' + (topic.rules ? topic.rules.length : 4) + ' Easy Rules</span>' +
            '<span>' + (topic.questions ? topic.questions.length : 15) + ' Gap-Fill Qs</span>' +
            '<span style="color:var(--c1); font-weight:800; background:#fef2f2;">' + escapeHtml(topic.level || 'Band 7.0-9.0') + '</span>' +
          '</div>' +
          '<div class="topic-foot">' +
            '<button type="button" class="status ' + (isDone ? 'is-done' : '') + '" onclick="event.stopPropagation(); window.ieltsApp.toggleGrammarTopicComplete(\'' + topic.id + '\')">' +
              (isDone ? '✓ Completed' : 'Incomplete') +
            '</button>' +
            '<a href="#" onclick="event.preventDefault(); event.stopPropagation(); window.ieltsApp.openGrammarTopic(\'' + topic.id + '\')">Study &amp; Practice &rarr;</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    });

    // 9th Special Topic Card: Grammar Video Resources
    const watchedCount = getWatchedGrammarClassCount();
    html += '<article class="topic-card" id="grammar-card-video-resources" style="--c1:#e11d48; --c2:#be123c;" onclick="window.ieltsApp.showGrammarVideoResources()">' +
      '<header class="topic-head">' +
        '<span class="topic-num" style="font-size:22px;">VID</span>' +
        '<h3 class="topic-title">Video Vault</h3>' +
        '<span class="topic-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>' +
      '</header>' +
      '<div class="topic-body">' +
        '<span class="topic-label">VIDEO MASTERCLASSES</span>' +
        '<h4>Grammar Video Resources</h4>' +
        '<p class="keywords">17 Comprehensive video classes with 21 video lectures and 30+ official downloadable lecture PDFs &amp; practice sheets.</p>' +
        '<div class="tags">' +
          '<span>17 Classes</span>' +
          '<span>21 Videos</span>' +
          '<span>30+ PDFs</span>' +
          '<span style="color:#e11d48; font-weight:800; background:#fff1f2;">Full Series</span>' +
        '</div>' +
        '<div class="topic-foot">' +
          '<span style="font-size:0.8rem; font-weight:700; color:' + (watchedCount > 0 ? '#16a34a' : '#64748b') + ';">' + (watchedCount > 0 ? watchedCount + '/17 Watched' : 'Free Access') + '</span>' +
          '<a href="#" onclick="event.preventDefault(); event.stopPropagation(); window.ieltsApp.showGrammarVideoResources()">Watch &amp; Download &rarr;</a>' +
        '</div>' +
      '</div>' +
    '</article>';

    grid.innerHTML = html;
  }

  function openGrammarTopic(topicId) {
    state.currentGrammarTopicId = topicId;
    state.grammarTopicAnswers = {};
    state.grammarTopicSubmitted = false;

    if (typeof GRAMMAR_DATA === 'undefined') return;
    const topic = (GRAMMAR_DATA.topics || []).find(function(t) { return t.id === topicId; });
    if (!topic) return;

    const hub = document.getElementById('grammar-topics-hub');
    const detailView = document.getElementById('grammar-detail-view');
    const headerTitle = document.getElementById('grammar-header-title');
    const backBtn = document.getElementById('grammar-back-nav-btn');

    if (hub) hub.style.display = 'none';
    if (detailView) detailView.style.display = 'block';
    if (headerTitle) headerTitle.textContent = 'Topic ' + topic.number + ': ' + topic.title;
    if (backBtn) backBtn.innerHTML = '<span>&larr; Back to Grammar Hub</span>';

    // Render Banner Box
    const bannerBox = document.getElementById('grammar-topic-banner-box');
    if (bannerBox) {
      bannerBox.innerHTML = '<div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">' +
        '<div style="max-width:760px;">' +
          '<div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">' +
            '<span class="pill" style="background:#0e332d; color:#f59e0b; font-weight:800; font-size:0.75rem; padding:4px 12px; border-radius:20px;">' + escapeHtml(topic.category) + '</span>' +
            '<span style="font-size:0.85rem; font-weight:700; color:#2563eb;">' + escapeHtml(topic.level) + '</span>' +
          '</div>' +
          '<h2 style="font-size:1.85rem; font-weight:900; color:#0f172a; margin:0 0 10px;">Topic ' + topic.number + ': ' + escapeHtml(topic.title) + '</h2>' +
          '<p style="font-size:1.02rem; color:#475569; line-height:1.6; margin:0 0 14px;">' + escapeHtml(topic.overview) + '</p>' +
          (topic.ieltsTip ? '<div style="background:#eff6ff; border-left:4px solid #2563eb; padding:12px 18px; border-radius:0 10px 10px 0; font-size:0.92rem; color:#1e40af; line-height:1.5;"><strong>🎯 IELTS Examiner Tip:</strong> ' + escapeHtml(topic.ieltsTip) + '</div>' : '') +
        '</div>' +
      '</div>';
    }

    updateTopicDetailStatus(topic.id);
    renderGrammarTopicRules(topic);
    renderGrammarTopicPractice(topic);
    switchGrammarTab('rules');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchGrammarTab(tab) {
    state.grammarActiveTab = tab;
    const btnRules = document.getElementById('btn-grammar-tab-rules');
    const btnPractice = document.getElementById('btn-grammar-tab-practice');
    const rulesContent = document.getElementById('grammar-rules-tab-content');
    const practiceContent = document.getElementById('grammar-practice-tab-content');

    if (btnRules) btnRules.classList.toggle('active', tab === 'rules');
    if (btnPractice) btnPractice.classList.toggle('active', tab === 'practice');

    if (rulesContent) rulesContent.style.display = (tab === 'rules') ? 'block' : 'none';
    if (practiceContent) practiceContent.style.display = (tab === 'practice') ? 'block' : 'none';
  }

  function renderGrammarTopicRules(topic) {
    const container = document.getElementById('grammar-rules-content-body');
    if (!container || !topic) return;

    let html = '';
    (topic.rules || []).forEach(function(r, idx) {
      let examplesHtml = '';
      (r.examples || []).forEach(function(ex) {
        examplesHtml += '<div class="grammar-examples-container">' +
          '<div class="grammar-example-box wrong-box">' +
            '<span class="grammar-example-badge" style="color:#b91c1c;">❌ Common IELTS Error (Band 5.5–6.0)</span>' +
            '<div>' + escapeHtml(ex.wrong) + '</div>' +
          '</div>' +
          '<div class="grammar-example-box correct-box">' +
            '<span class="grammar-example-badge" style="color:#15803d;">✅ High-Scoring Academic Structure (Band 8.0–9.0)</span>' +
            '<div>' + escapeHtml(ex.correct) + '</div>' +
          '</div>' +
          (ex.note ? '<div style="font-size:0.86rem; color:#64748b; font-style:italic; margin-top:4px;">💡 ' + escapeHtml(ex.note) + '</div>' : '') +
        '</div>';
      });

      html += '<div class="grammar-rule-card">' +
        '<div class="grammar-rule-title-row">' +
          '<h3 class="grammar-rule-name">Rule ' + (idx + 1) + ': ' + escapeHtml(r.name) + '</h3>' +
          '<span style="background:#f1f5f9; color:#475569; font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:12px;">Core Pattern</span>' +
        '</div>' +
        '<p style="font-size:0.96rem; color:#334155; line-height:1.6; margin:0 0 10px;">' + escapeHtml(r.explanation) + '</p>' +
        (r.formula ? '<div class="grammar-formula-box">' + escapeHtml(r.formula) + '</div>' : '') +
        examplesHtml +
      '</div>';
    });

    // Call to action button at the bottom of rules
    html += '<div style="text-align:center; margin:36px 0 20px;">' +
      '<button class="btn main" onclick="window.ieltsApp.switchGrammarTab(\'practice\'); window.scrollTo({top:320, behavior:\'smooth\'});" style="padding:16px 36px; font-size:1.1rem; font-weight:800; border-radius:14px; background:#0e332d; border-color:#0e332d; box-shadow:0 8px 24px rgba(14,51,45,0.25);">' +
        '<span>Proceed to Gap-Fill Practice Questions (' + (topic.questions ? topic.questions.length : 15) + ' Qs) &rarr;</span>' +
      '</button>' +
    '</div>';

    container.innerHTML = html;
  }

  function renderGrammarTopicPractice(topic) {
    const container = document.getElementById('grammar-gap-questions-list');
    const scoreCard = document.getElementById('grammar-practice-score-card');
    const submitBar = document.getElementById('grammar-practice-submit-bar');
    if (!container || !topic) return;

    if (!state.grammarTopicSubmitted && scoreCard) {
      scoreCard.style.display = 'none';
    }
    if (submitBar) {
      submitBar.style.display = 'flex';
    }

    const isSub = !!state.grammarTopicSubmitted;
    let html = '';

    (topic.questions || []).forEach(function(q) {
      const selected = state.grammarTopicAnswers[q.id] || '';
      let resultClass = '';
      let isCorrect = false;

      if (isSub) {
        isCorrect = (selected.toLowerCase() === q.answer.toLowerCase());
        resultClass = isCorrect ? 'result-correct' : 'result-incorrect';
      }

      // Sentence with interactive blank display
      const blankDisplay = '<span class="grammar-blank-display" id="gap-display-' + q.id + '">' + (selected ? escapeHtml(selected) : '______') + '</span>';
      const sentenceHtml = escapeHtml(q.sentence).replace(/___/g, blankDisplay);

      const letters = ['A', 'B', 'C', 'D'];
      let optionsHtml = '<div class="grammar-options-grid">';

      (q.options || []).forEach(function(opt, optIdx) {
        let optClass = 'grammar-option-pill';
        const isOptSelected = (selected === opt);
        const isOptCorrect = (opt.toLowerCase() === q.answer.toLowerCase());

        if (isSub) {
          if (isOptCorrect) {
            optClass += ' correct-ans';
          } else if (isOptSelected && !isOptCorrect) {
            optClass += ' wrong-ans';
          }
        } else {
          if (isOptSelected) optClass += ' selected';
        }

        const clickHandler = !isSub ? 'onclick="window.ieltsApp.selectGrammarGapOption(\'' + q.id + '\', \'' + escapeHtml(opt.replace(/'/g, "\\\'")) + '\')"' : '';

        optionsHtml += '<div class="' + optClass + '" ' + clickHandler + ' id="opt-' + q.id + '-' + optIdx + '">' +
          '<span class="grammar-option-letter">' + (letters[optIdx] || (optIdx + 1)) + '</span>' +
          '<span style="flex:1;">' + escapeHtml(opt) + '</span>' +
          (isSub && isOptCorrect ? '<span style="color:#15803d; font-weight:900;">✓</span>' : '') +
          (isSub && isOptSelected && !isOptCorrect ? '<span style="color:#b91c1c; font-weight:900;">✕</span>' : '') +
        '</div>';
      });
      optionsHtml += '</div>';

      // Explanation card shown only after submission
      let explanationHtml = '';
      if (isSub) {
        explanationHtml = '<div style="margin-top:16px; padding-top:14px; border-top:1px solid #e2e8f0;">' +
          '<div style="font-size:0.92rem; margin-bottom:6px;"><strong>Correct Answer:</strong> <span style="color:#16a34a; font-weight:800;">' + escapeHtml(q.answer) + '</span></div>' +
          (!isCorrect ? '<div style="font-size:0.92rem; margin-bottom:8px;"><strong>Your Selection:</strong> <span style="color:#dc2626; font-weight:700;">' + (selected ? escapeHtml(selected) : '<em>Unattempted</em>') + '</span></div>' : '') +
          '<div class="grammar-explanation-card">' +
            '<div class="grammar-explanation-title">📖 Grammatical Explanation</div>' +
            '<p class="grammar-explanation-text">' + escapeHtml(q.explanation) + '</p>' +
          '</div>' +
        '</div>';
      }

      html += '<div class="grammar-q-card ' + resultClass + '" id="q-card-' + q.id + '">' +
        '<div class="grammar-q-header">' +
          '<span class="grammar-q-badge badge-gap">Question ' + q.number + ' &bull; Gap-Fill</span>' +
          (isSub ? (isCorrect ? '<span style="background:#16a34a; color:#fff; font-size:0.78rem; font-weight:800; padding:4px 12px; border-radius:12px;">✓ Correct (+1)</span>' : '<span style="background:#dc2626; color:#fff; font-size:0.78rem; font-weight:800; padding:4px 12px; border-radius:12px;">✕ Incorrect (0/1)</span>') : '') +
        '</div>' +
        '<div class="grammar-gap-sentence">' + sentenceHtml + '</div>' +
        optionsHtml +
        explanationHtml +
      '</div>';
    });

    container.innerHTML = html;
    updateGrammarGapAnsweredCount(topic);
  }

  function selectGrammarGapOption(qId, optionText) {
    if (state.grammarTopicSubmitted) return;
    state.grammarTopicAnswers[qId] = optionText;

    if (typeof GRAMMAR_DATA === 'undefined') return;
    const topic = (GRAMMAR_DATA.topics || []).find(function(t) { return t.id === state.currentGrammarTopicId; });
    if (!topic) return;

    // Update blank slot in DOM
    const blankEl = document.getElementById('gap-display-' + qId);
    if (blankEl) blankEl.textContent = optionText;

    // Update selected class on pills
    const q = (topic.questions || []).find(function(item) { return item.id === qId; });
    if (q) {
      (q.options || []).forEach(function(opt, optIdx) {
        const pill = document.getElementById('opt-' + qId + '-' + optIdx);
        if (pill) {
          pill.classList.toggle('selected', opt === optionText);
        }
      });
    }

    updateGrammarGapAnsweredCount(topic);
  }

  function updateGrammarGapAnsweredCount(topic) {
    const answeredCount = Object.keys(state.grammarTopicAnswers || {}).length;
    const totalCount = topic && topic.questions ? topic.questions.length : 15;
    const countEl = document.getElementById('grammar-gap-answered-count');
    if (countEl) countEl.textContent = answeredCount;
  }

  function submitCurrentTopicPractice() {
    if (state.grammarTopicSubmitted) return;
    if (typeof GRAMMAR_DATA === 'undefined') return;
    const topic = (GRAMMAR_DATA.topics || []).find(function(t) { return t.id === state.currentGrammarTopicId; });
    if (!topic) return;

    const questions = topic.questions || [];
    const answered = Object.keys(state.grammarTopicAnswers || {}).length;
    if (answered < questions.length) {
      if (typeof confirm === 'function' && !confirm('You have answered ' + answered + ' of ' + questions.length + ' questions. Do you want to submit anyway?')) {
        return;
      }
    }

    let score = 0;
    questions.forEach(function(q) {
      const userAns = (state.grammarTopicAnswers[q.id] || '').trim().toLowerCase();
      if (userAns === q.answer.trim().toLowerCase()) {
        score++;
      }
    });

    state.grammarTopicSubmitted = true;
    const pct = Math.round((score / questions.length) * 100);

    // Auto mark complete if score >= 70%
    if (pct >= 70) {
      saveCompletedGrammarTopic(topic.id);
      updateTopicDetailStatus(topic.id);
    }

    // Render score banner
    const scoreCard = document.getElementById('grammar-practice-score-card');
    if (scoreCard) {
      let bandComment = 'Band 8.5–9.0 Expert Grammatical Command';
      if (pct < 50) bandComment = 'Band 5.5–6.0 Modest Accuracy (Review Rules & Retake)';
      else if (pct < 70) bandComment = 'Band 6.5–7.0 Competent User (Good Foundation)';
      else if (pct < 85) bandComment = 'Band 7.5–8.0 Very Good User';

      scoreCard.innerHTML = '<div class="grammar-score-banner" style="background:linear-gradient(135deg, #0e332d 0%, #164e63 100%);">' +
        '<div>' +
          '<div style="font-size:0.85rem; font-weight:800; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:6px; opacity:0.9;">' + escapeHtml(topic.title) + ' Practice Results</div>' +
          '<h2 style="font-size:2.2rem; font-weight:900; margin:0 0 6px;">Score: ' + score + ' / ' + questions.length + ' (' + pct + '%)</h2>' +
          '<div style="font-size:1.05rem; font-weight:700; color:#67e8f9;">' + bandComment + '</div>' +
        '</div>' +
        '<div style="display:flex; gap:12px; flex-wrap:wrap;">' +
          '<div class="grammar-score-stat-box">' +
            '<div class="grammar-score-num" style="color:#86efac;">' + score + '</div>' +
            '<div class="grammar-score-label">Correct</div>' +
          '</div>' +
          '<div class="grammar-score-stat-box">' +
            '<div class="grammar-score-num" style="color:#fca5a5;">' + (questions.length - score) + '</div>' +
            '<div class="grammar-score-label">Incorrect</div>' +
          '</div>' +
          '<div class="grammar-score-stat-box">' +
            '<div class="grammar-score-num">' + pct + '%</div>' +
            '<div class="grammar-score-label">Accuracy</div>' +
          '</div>' +
        '</div>' +
      '</div>';
      scoreCard.style.display = 'block';
      scoreCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    renderGrammarTopicPractice(topic);
  }

  function resetCurrentTopicPractice() {
    state.grammarTopicAnswers = {};
    state.grammarTopicSubmitted = false;
    if (typeof GRAMMAR_DATA === 'undefined') return;
    const topic = (GRAMMAR_DATA.topics || []).find(function(t) { return t.id === state.currentGrammarTopicId; });
    if (topic) renderGrammarTopicPractice(topic);
  }

  // ========================================================================
  // GRAMMAR VIDEO RESOURCES ENGINE (17 CLASSES • 21 VIDEOS • 30+ PDFS)
  // ========================================================================
  function handleGrammarBackNav() {
    const videoView = document.getElementById('grammar-video-resources-view');
    const detailView = document.getElementById('grammar-detail-view');
    if ((videoView && videoView.style.display !== 'none') || (detailView && detailView.style.display !== 'none')) {
      returnToGrammarTopics();
    } else {
      showHomeView();
    }
  }

  function showGrammarVideoResources() {
    stopTimer();
    hideAllViews();
    const v = document.getElementById('grammar-view');
    if (v) v.classList.add('active-view');

    const hub = document.getElementById('grammar-topics-hub');
    const detailView = document.getElementById('grammar-detail-view');
    const videoView = document.getElementById('grammar-video-resources-view');
    const headerTitle = document.getElementById('grammar-header-title');
    const backBtn = document.getElementById('grammar-back-nav-btn');

    if (hub) hub.style.display = 'none';
    if (detailView) detailView.style.display = 'none';
    if (videoView) videoView.style.display = 'block';
    if (headerTitle) headerTitle.textContent = 'IELTS Grammar Video Resources (17 Classes)';
    if (backBtn) backBtn.innerHTML = '<span>&larr; Back to Grammar Hub</span>';

    renderGrammarVideoCards('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function filterGrammarVideos(filter) {
    ['all', 'foundation', 'core', 'advanced', 'speech'].forEach(function(f) {
      const btn = document.getElementById('btn-gvideo-' + f);
      if (btn) btn.classList.toggle('active', f === filter);
    });
    renderGrammarVideoCards(filter);
  }

  function getWatchedGrammarClassCount() {
    let count = 0;
    for (let i = 1; i <= 17; i++) {
      const id = 'class-' + (i < 10 ? '0' : '') + i;
      if (localStorage.getItem('ielts_gclass_watched_' + id) === '1') {
        count++;
      }
    }
    return count;
  }

  function toggleGrammarClassWatched(classId) {
    const key = 'ielts_gclass_watched_' + classId;
    const isWatched = localStorage.getItem(key) === '1';
    if (isWatched) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, '1');
    }
    const card = document.getElementById('gcard-' + classId);
    const btn = document.getElementById('gbtn-watched-' + classId);
    const nowWatched = !isWatched;
    if (card) {
      if (nowWatched) {
        card.classList.add('is-completed');
      } else {
        card.classList.remove('is-completed');
      }
    }
    if (btn) {
      btn.textContent = nowWatched ? '✓ Watched' : 'Mark Watched';
      btn.className = 'status' + (nowWatched ? ' is-done' : '');
    }
  }

  function renderGrammarVideoCards(filter) {
    const grid = document.getElementById('grammar-video-cards-grid');
    if (!grid || typeof GRAMMAR_DATA === 'undefined') return;

    filter = filter || 'all';
    let classes = GRAMMAR_DATA.videoResources || [];

    if (filter === 'foundation') {
      classes = classes.filter(function(c) { return c.num >= 1 && c.num <= 5; });
    } else if (filter === 'core') {
      classes = classes.filter(function(c) { return c.num >= 6 && c.num <= 9; });
    } else if (filter === 'advanced') {
      classes = classes.filter(function(c) { return c.num >= 10 && c.num <= 14; });
    } else if (filter === 'speech') {
      classes = classes.filter(function(c) { return c.num >= 15 && c.num <= 17; });
    }

    // 6 Rotating Palettes exactly matching Vocabulary cards
    const themePalettes = [
      { c1: '#8b1a2b', c2: '#c0392b', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>' },
      { c1: '#0f3d3a', c2: '#166e66', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"/></svg>' },
      { c1: '#b45309', c2: '#d97706', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="6" r="2"/><circle cx="12" cy="18" r="2"/></svg>' },
      { c1: '#1e3a8a', c2: '#2563eb', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' },
      { c1: '#7f1d38', c2: '#9f2b48', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' },
      { c1: '#1b4332', c2: '#2d6a4f', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>' }
    ];

    let html = '';
    classes.forEach(function(item, idx) {
      const p = themePalettes[idx % themePalettes.length];
      const isWatched = localStorage.getItem('ielts_gclass_watched_' + item.id) === '1';
      const numStr = (item.num < 10 ? '0' : '') + item.num;
      const vCount = (item.videos || []).length;
      const pCount = (item.pdfs || []).length;

      // Video items styled
      let videosHtml = '';
      (item.videos || []).forEach(function(v) {
        videosHtml += '<a href="' + v.url + '" target="_blank" rel="noopener noreferrer" class="gclass-item-link gclass-video-link" title="Watch on YouTube" onclick="event.stopPropagation();">' +
          '<span class="gclass-icon-tag">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="color:#e11d48; flex-shrink:0;"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' +
            '<span>' + escapeHtml(v.title) + '</span>' +
          '</span>' +
          '<span class="gclass-action-pill">Watch &nearr;</span>' +
        '</a>';
      });

      // PDF items styled
      let pdfsHtml = '';
      (item.pdfs || []).forEach(function(pdf) {
        pdfsHtml += '<a href="' + pdf.url + '" target="_blank" rel="noopener noreferrer" class="gclass-item-link gclass-pdf-link" title="Open PDF in Google Drive" onclick="event.stopPropagation();">' +
          '<span class="gclass-icon-tag">' +
            '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style="color:#16a34a; flex-shrink:0;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>' +
            '<span>' + escapeHtml(pdf.title) + '</span>' +
          '</span>' +
          '<span class="gclass-action-pill">PDF &nearr;</span>' +
        '</a>';
      });

      const firstVideoUrl = (item.videos && item.videos.length > 0) ? item.videos[0].url : '#';

      html += '<article class="topic-card ' + (isWatched ? 'is-completed' : '') + '" id="gcard-' + item.id + '" style="--c1:' + p.c1 + '; --c2:' + p.c2 + ';">' +
        '<header class="topic-head">' +
          '<span class="topic-num">' + numStr + '</span>' +
          '<h3 class="topic-title">Class ' + numStr + '</h3>' +
          '<span class="topic-icon">' + p.icon + '</span>' +
        '</header>' +
        '<div class="topic-body">' +
          '<span class="topic-label">' + escapeHtml((item.category || 'GRAMMAR').toUpperCase()) + '</span>' +
          '<h4>' + escapeHtml(item.title) + '</h4>' +
          '<p class="keywords">' + escapeHtml(item.summary) + '</p>' +
          '<div class="tags">' +
            '<span>🎥 ' + vCount + (vCount === 1 ? ' Video' : ' Videos') + '</span>' +
            '<span>📄 ' + pCount + (pCount === 1 ? ' PDF' : ' PDFs') + '</span>' +
            '<span style="color:var(--c1); font-weight:800; background:#fef2f2;">' + (item.duration || 'Full Lecture') + '</span>' +
          '</div>' +
          '<div class="gclass-links-list" style="margin:6px 0 16px 0;">' +
            videosHtml +
            pdfsHtml +
          '</div>' +
          '<div class="topic-foot">' +
            '<button type="button" class="status ' + (isWatched ? 'is-done' : '') + '" id="gbtn-watched-' + item.id + '" onclick="event.stopPropagation(); window.ieltsApp.toggleGrammarClassWatched(\'' + item.id + '\')">' +
              (isWatched ? '✓ Watched' : 'Mark Watched') +
            '</button>' +
            '<a href="' + firstVideoUrl + '" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();">Watch First &rarr;</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    });

    grid.innerHTML = html || '<div style="grid-column:1/-1; text-align:center; padding:48px; color:#64748b;">No classes found for this category.</div>';
  }

  // ========================================================================
  // CAMBRIDGE OFFICIAL GUIDE CATALOG & MODAL ENGINE
  // ========================================================================
  const CAMBRIDGE_TEST_DETAILS = {
    7: {
      title: 'The Official Cambridge Guide to IELTS - Academic Reading Test 7',
      book: 'The Official Cambridge Guide to IELTS for Academic & General Training',
      authors: 'Pauline Cullen, Amanda French, Vanessa Jakeman',
      publisher: 'Cambridge University Press (ISBN: 978-1-107-62069-8)',
      passages: [
        {
          num: 'Passage 1',
          title: 'The Great Fire of London',
          qRange: 'Questions 1–13',
          qTypes: 'True / False / Not Given (Q1–8), Note Completion (Q9–13)'
        },
        {
          num: 'Passage 2',
          title: 'The Myth of the Multitasker',
          qRange: 'Questions 14–26',
          qTypes: 'Locating Information in Paragraphs (Q14–19), Sentence Completion (Q20–26)'
        },
        {
          num: 'Passage 3',
          title: 'What is Exploration?',
          qRange: 'Questions 27–40',
          qTypes: 'Multiple Choice (Q27–32), Summary Completion with Box (Q33–37), Yes / No / Not Given (Q38–40)'
        }
      ],
      notice: 'In strict compliance with publisher copyright guidelines and educational fair use standards, practice questions and full texts for Cambridge Guide Tests 7 & 8 are to be referenced from the official printed volume. Practice Tests 1 through 6 are available in our interactive CD-IELTS simulator.'
    },
    8: {
      title: 'The Official Cambridge Guide to IELTS - Academic Reading Test 8',
      book: 'The Official Cambridge Guide to IELTS for Academic & General Training',
      authors: 'Pauline Cullen, Amanda French, Vanessa Jakeman',
      publisher: 'Cambridge University Press (ISBN: 978-1-107-62069-8)',
      passages: [
        {
          num: 'Passage 1',
          title: 'Ancient Chinese Chariots',
          qRange: 'Questions 1–13',
          qTypes: 'Short-Answer Questions (Q1–5), Diagram Label Completion (Q6–10), True / False / Not Given (Q11–13)'
        },
        {
          num: 'Passage 2',
          title: 'The Meaning and Power of Smell',
          qRange: 'Questions 14–26',
          qTypes: 'Matching Headings (Q14–19), Summary Completion (Q20–24), Multiple Choice (Q25–26)'
        },
        {
          num: 'Passage 3',
          title: 'The Psychology of Innovation',
          qRange: 'Questions 27–40',
          qTypes: 'Multiple Choice (Q27–31), Matching Features / Researchers (Q32–36), Yes / No / Not Given (Q37–40)'
        }
      ],
      notice: 'In strict compliance with publisher copyright guidelines and educational fair use standards, practice questions and full texts for Cambridge Guide Tests 7 & 8 are to be referenced from the official printed volume. Practice Tests 1 through 6 are available in our interactive CD-IELTS simulator.'
    }
  };

  function openCambridgeModal(testNum) {
    const modal = document.getElementById('cambridge-ref-modal');
    if (!modal) return;
    const detail = CAMBRIDGE_TEST_DETAILS[testNum] || CAMBRIDGE_TEST_DETAILS[7];
    const titleEl = document.getElementById('cambridge-modal-title');
    const bodyEl = document.getElementById('cambridge-modal-body');

    if (titleEl) titleEl.textContent = detail.title;
    if (bodyEl) {
      let passHtml = '';
      detail.passages.forEach(function(p) {
        passHtml += '<div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:10px; padding:14px; margin-bottom:12px;">' +
          '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
            '<span style="background:#eff6ff; color:#1d4ed8; font-weight:800; font-size:0.78rem; padding:3px 8px; border-radius:4px;">' + p.num + '</span>' +
            '<span style="font-weight:700; color:#64748b; font-size:0.84rem;">' + p.qRange + '</span>' +
          '</div>' +
          '<h4 style="margin:0 0 6px; font-size:1.05rem; font-weight:800; color:#0f172a;">' + p.title + '</h4>' +
          '<p style="margin:0; font-size:0.88rem; color:#475569;"><strong>Question Types:</strong> ' + p.qTypes + '</p>' +
        '</div>';
      });

      bodyEl.innerHTML = '<div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:16px; margin-bottom:18px;">' +
        '<div style="font-size:0.8rem; font-weight:800; color:#2563eb; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:4px;">Official Publication Source</div>' +
        '<div style="font-size:1rem; font-weight:800; color:#0f172a; margin-bottom:4px;">' + detail.book + '</div>' +
        '<div style="font-size:0.86rem; color:#475569;"><strong>Authors:</strong> ' + detail.authors + '</div>' +
        '<div style="font-size:0.86rem; color:#475569;"><strong>Publisher:</strong> ' + detail.publisher + '</div>' +
      '</div>' +
      '<h4 style="font-size:1rem; font-weight:800; color:#0f172a; margin:0 0 10px;">Test Structure &amp; Breakdown:</h4>' +
      passHtml +
      '<div style="background:#fffbeb; border-left:4px solid #f59e0b; padding:12px 16px; border-radius:0 8px 8px 0; margin-top:16px; font-size:0.85rem; color:#92400e; line-height:1.5;">' +
        '<strong>Fair Use Citation Notice:</strong> ' + detail.notice +
      '</div>';
    }

    modal.style.display = 'flex';
    modal.classList.add('active');
  }

  function closeCambridgeModal() {
    const modal = document.getElementById('cambridge-ref-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('active');
    }
  }

  // ========================================================================
  // WINDOW API (ALL USER ACTIONS & NAVIGATION)
  // ========================================================================
  
  // YouTube Resources Modal Handlers
  function openYouTubeResourcesModal() {
    const modal = document.getElementById('youtube-resources-modal');
    if (modal) {
      modal.style.display = 'flex';
      modal.classList.add('active');
    }
  }

  function closeYouTubeResourcesModal() {
    const modal = document.getElementById('youtube-resources-modal');
    if (modal) {
      modal.style.display = 'none';
      modal.classList.remove('active');
    }
  }

  
  // --- Task 1 Visual Lightbox Zoom ---
  function openTask1Lightbox(src, alt) {
    const overlay = document.getElementById('task1-lightbox-overlay');
    const img = document.getElementById('task1-lightbox-img');
    const cap = document.getElementById('task1-lightbox-caption');
    if (!overlay || !img) return;
    img.src = src;
    img.alt = alt || 'IELTS Task 1 Visual Chart';
    if (cap) cap.textContent = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(e) {
    if (e && e.target && e.target.classList && e.target.classList.contains('task1-lightbox-img')) {
      return;
    }
    const overlay = document.getElementById('task1-lightbox-overlay');
    const img = document.getElementById('task1-lightbox-img');
    if (overlay) {
      overlay.classList.remove('active');
      if (img) img.src = '';
      document.body.style.overflow = '';
    }
  }

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeLightbox();
    }
  });

  // Delegated click on any task 1 figure image
  document.addEventListener('click', function(e) {
    const img = e.target.closest('.task1-question-image, .task1-img-container img, .chart-box img');
    if (img) {
      e.preventDefault();
      e.stopPropagation();
      openTask1Lightbox(img.src, img.alt || img.title || 'IELTS Task 1 Visual Chart');
    }
  });


  // =========================================================================
  // COMMUNITY REACH & FEEDBACK SECTION (Image Replica & Supabase Engine)
  // =========================================================================
  const SUPABASE_CONFIG = {
    url: 'https://ipumroknrrqhzvxtwxrz.supabase.co',
    key: 'sb_publishable_LDzwcTQEn-36g-OWA9qKfg_00zg21hb'
  };

  let feedbackComments = [];
  let isTickerPaused = false;
  let currentVisitorCount = 14860;

  const AVATAR_COLORS = [
    '#f59e0b', '#ec4899', '#3b82f6', '#10b981', '#8b5cf6',
    '#f97316', '#14b8a6', '#6366f1', '#d97706', '#06b6d4'
  ];

  function getAvatarColor(name) {
    if (!name) return AVATAR_COLORS[0];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
  }

  async function initFeedbackSection() {
    const track = document.getElementById('feedback-ticker-track');
    if (!track) return;

    // 1. Try to fetch comments from Supabase cloud first
    let loadedFromSupabase = false;
    try {
      const spResp = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/comments?select=*&order=id.desc`, {
        headers: {
          'apikey': SUPABASE_CONFIG.key,
          'Authorization': `Bearer ${SUPABASE_CONFIG.key}`
        }
      });
      if (spResp.ok) {
        const spData = await spResp.json();
        if (Array.isArray(spData) && spData.length > 0) {
          feedbackComments = spData;
          loadedFromSupabase = true;
        }
      }
    } catch(err) {
      console.log('Supabase sync info:', err.message);
    }

    // 2. Fallback to local server API /api/comments
    if (!loadedFromSupabase) {
      try {
        const commResp = await fetch('/api/comments');
        if (commResp.ok) {
          const data = await commResp.json();
          if (Array.isArray(data) && data.length > 0) {
            feedbackComments = data;
          }
        }
      } catch (e) {}
    }

    // 3. Fallback to localStorage or bundled community benchmarks
    if (!feedbackComments || feedbackComments.length === 0) {
      try {
        const saved = localStorage.getItem('ielts_community_comments');
        if (saved) {
          feedbackComments = JSON.parse(saved);
        }
      } catch (err) {}
    }

    if (!feedbackComments || feedbackComments.length === 0) {
      feedbackComments = [
        { id: 1, name: "Imran", rating: 5, text: "Delivered the authentic Cambridge test feel. Boosted my Reading score to 7.5!", color: "#f59e0b" },
        { id: 2, name: "Mitu", rating: 5, text: "Great interface! The 60-day vocabulary routine with phrasal verbs is gold.", color: "#ec4899" },
        { id: 3, name: "Rafiq H.", rating: 5, text: "The Band 9 Writing Task 1 & 2 models with examiner rationale are unbeatable.", color: "#3b82f6" },
        { id: 4, name: "Sadia", rating: 5, text: "Timed Reading simulator with instant band calculation saved my exam prep.", color: "#10b981" },
        { id: 5, name: "Tanvir A.", rating: 4, text: "Smooth UI and distraction-free essay reader. Highly recommended for IELTS warriors!", color: "#8b5cf6" },
        { id: 6, name: "Farhana", rating: 5, text: "Engnovate & Mini-IELTS practice cards make daily drills so easy to access.", color: "#f97316" },
        { id: 7, name: "Nabil", rating: 5, text: "From Band 6.0 to 7.0 in Writing! The Liz models and vocabulary breakdown worked.", color: "#14b8a6" }
      ];
    }

    // 4. Load visitor count
    try {
      const isNewSession = !sessionStorage.getItem('ielts_session_counted');
      const reachResp = await fetch('/api/reach', {
        method: isNewSession ? 'POST' : 'GET'
      });
      if (reachResp.ok) {
        const data = await reachResp.json();
        currentVisitorCount = data.count || 14860;
      }
      if (isNewSession) {
        sessionStorage.setItem('ielts_session_counted', '1');
      }
    } catch (e) {
      let localCount = parseInt(localStorage.getItem('ielts_visitor_count') || '14860', 10);
      if (!sessionStorage.getItem('ielts_session_counted')) {
        localCount += 1;
        localStorage.setItem('ielts_visitor_count', localCount);
        sessionStorage.setItem('ielts_session_counted', '1');
      }
      currentVisitorCount = localCount;
    }

    updateFeedbackMetrics();
    renderFeedbackTicker();
  }

  function updateFeedbackMetrics() {
    const commentCountEl = document.getElementById('metric-comment-count');
    const avgRatingEl = document.getElementById('metric-avg-rating');
    const visitorCountEl = document.getElementById('metric-visitor-count');

    if (commentCountEl) {
      commentCountEl.textContent = feedbackComments.length;
    }
    if (avgRatingEl) {
      const sum = feedbackComments.reduce((acc, c) => acc + (Number(c.rating) || 5), 0);
      const avg = feedbackComments.length ? (sum / feedbackComments.length).toFixed(1) : '5.0';
      avgRatingEl.textContent = avg;
    }
    if (visitorCountEl) {
      visitorCountEl.textContent = currentVisitorCount.toLocaleString('en-US');
    }
  }

  function renderFeedbackTicker() {
    const track = document.getElementById('feedback-ticker-track');
    if (!track) return;

    const pillsHtml = feedbackComments.map(c => {
      const initial = (c.name || 'U').charAt(0).toUpperCase();
      const color = c.color || getAvatarColor(c.name);
      const rating = c.rating || 5;
      return `<div class="feedback-comment-pill">
        <span class="feedback-pill-avatar" style="background:${color}">${escapeHtml(initial)}</span>
        <span class="feedback-pill-name">${escapeHtml(c.name)}</span>
        <span class="feedback-pill-rating">★ ${rating}</span>
        <span class="feedback-pill-text">${escapeHtml(c.text)}</span>
      </div>`;
    }).join('');

    // Duplicate list 2 times to ensure seamless infinite marquee scrolling
    track.innerHTML = pillsHtml + pillsHtml;
  }

  function toggleCommentTicker() {
    const track = document.getElementById('feedback-ticker-track');
    const textEl = document.getElementById('ticker-playback-text');
    const iconEl = document.getElementById('ticker-playback-icon');
    if (!track) return;

    isTickerPaused = !isTickerPaused;
    if (isTickerPaused) {
      track.classList.add('paused');
      if (textEl) textEl.textContent = 'Play';
      if (iconEl) iconEl.textContent = '▶';
    } else {
      track.classList.remove('paused');
      if (textEl) textEl.textContent = 'Pause';
      if (iconEl) iconEl.textContent = '❚❚';
    }
  }

  function setFeedbackRating(val) {
    const ratingInput = document.getElementById('fb-rating');
    if (ratingInput) ratingInput.value = val;

    const stars = document.querySelectorAll('#feedback-star-picker .star-btn');
    stars.forEach((s, idx) => {
      if (idx < val) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  }

  function handleCommentCharCount(textarea) {
    const countEl = document.getElementById('fb-char-count');
    if (!countEl || !textarea) return;
    const len = textarea.value.length;
    countEl.textContent = len;
    if (len >= 110) {
      countEl.style.color = '#f59e0b';
      countEl.style.fontWeight = '700';
    } else {
      countEl.style.color = '#cbd5e1';
      countEl.style.fontWeight = 'normal';
    }
  }

  async function submitFeedbackComment(e) {
    if (e && e.preventDefault) e.preventDefault();

    const nameInput = document.getElementById('fb-name');
    const emailInput = document.getElementById('fb-email');
    const ratingInput = document.getElementById('fb-rating');
    const commentInput = document.getElementById('fb-comment');
    const statusMsg = document.getElementById('fb-status-msg');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const rating = ratingInput ? parseInt(ratingInput.value, 10) || 5 : 5;
    const text = commentInput ? commentInput.value.trim() : '';

    if (!name || !text) {
      alert('Please enter your name and comment.');
      return;
    }

    const newComment = {
      id: Date.now(),
      name: name,
      email: email,
      rating: rating,
      text: text,
      date: new Date().toISOString().split('T')[0],
      color: getAvatarColor(name)
    };

    feedbackComments.unshift(newComment);

    try {
      localStorage.setItem('ielts_community_comments', JSON.stringify(feedbackComments));
    } catch(err){}

    updateFeedbackMetrics();
    renderFeedbackTicker();

    // 1. Sync to Supabase Cloud Database
    try {
      fetch(`${SUPABASE_CONFIG.url}/rest/v1/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_CONFIG.key,
          'Authorization': `Bearer ${SUPABASE_CONFIG.key}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          name: newComment.name,
          email: newComment.email,
          rating: newComment.rating,
          text: newComment.text,
          color: newComment.color
        })
      }).catch(function(err){ console.log('Supabase sync note:', err.message); });
    } catch(err){}

    // 2. Sync to local backend server
    try {
      fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment)
      }).catch(function(err){ console.log('Comment post sync:', err); });
    } catch(err){}

    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    if (commentInput) commentInput.value = '';
    const countEl = document.getElementById('fb-char-count');
    if (countEl) countEl.textContent = '0';
    setFeedbackRating(5);

    if (statusMsg) {
      statusMsg.className = 'feedback-status-msg success';
      statusMsg.innerHTML = `&#10003; Thank you, <strong>${escapeHtml(name)}</strong>! Your review has been published.`;
      statusMsg.style.display = 'block';
      setTimeout(() => {
        statusMsg.style.display = 'none';
      }, 5000);
    }
  }


  // =========================================================================
  // SUPABASE AUTHENTICATION SYSTEM (Google OAuth + Email/Password + Password Reset)
  // =========================================================================
  let supabaseClient = null;
  let currentUser = null;
  let currentAuthMode = 'signin'; // 'signin', 'signup', 'forgot', 'update_password'

  function getSupabaseClient() {
    if (!supabaseClient) {
      const sup = (typeof window !== 'undefined' && window.supabase) || (typeof supabase !== 'undefined' ? supabase : null);
      if (sup && sup.createClient) {
        try {
          supabaseClient = sup.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.key, {
            auth: {
              persistSession: true,
              autoRefreshToken: true,
              detectSessionInUrl: true,
              flowType: 'implicit'
            }
          });
        } catch (e) {
          console.warn('Supabase client init note:', e.message);
        }
      }
    }
    return supabaseClient;
  }

  async function initAuth() {
    const sp = getSupabaseClient();
    if (!sp) {
      try {
        const saved = localStorage.getItem('ielts_cached_user');
        if (saved) {
          currentUser = JSON.parse(saved);
          renderNavAuthState();
        }
      } catch (e) {}
      return;
    }

    try {
      // 1. Check for password recovery or magic link tokens in hash
      const hash = window.location.hash || '';
      if (hash.includes('type=recovery') || hash.includes('type=magiclink')) {
        setTimeout(() => {
          openAuthModal('update_password');
        }, 400);
      }

      // 2. Get existing session
      const { data: { session }, error } = await sp.auth.getSession();
      if (session && session.user) {
        currentUser = session.user;
        localStorage.setItem('ielts_cached_user', JSON.stringify({
          id: currentUser.id,
          email: currentUser.email,
          user_metadata: currentUser.user_metadata
        }));
      } else {
        currentUser = null;
        localStorage.removeItem('ielts_cached_user');
      }
      renderNavAuthState();

      // 3. Real-time auth state listener (OAuth redirects, logins, logouts, password recovery)
      sp.auth.onAuthStateChange((event, session) => {
        if (event === 'PASSWORD_RECOVERY') {
          openAuthModal('update_password');
          return;
        }

        if (session && session.user) {
          currentUser = session.user;
          localStorage.setItem('ielts_cached_user', JSON.stringify({
            id: currentUser.id,
            email: currentUser.email,
            user_metadata: currentUser.user_metadata
          }));
          closeAuthModal();
        } else if (event === 'SIGNED_OUT') {
          currentUser = null;
          localStorage.removeItem('ielts_cached_user');
        }
        renderNavAuthState();
      });
    } catch (err) {
      console.warn('Auth init check:', err.message);
    }
  }

  function renderNavAuthState() {
    const slot = document.getElementById('nav-auth-slot');
    if (!slot) return;

    if (currentUser) {
      const email = currentUser.email || 'Candidate';
      const meta = currentUser.user_metadata || {};
      const fullName = meta.full_name || meta.name || email.split('@')[0];
      const avatarUrl = meta.avatar_url || meta.picture || '';
      const initial = fullName.charAt(0).toUpperCase();

      slot.innerHTML = `
        <div class="nav-user-chip" id="nav-user-chip" title="${email}">
          ${avatarUrl 
            ? `<img class="nav-user-avatar" src="${avatarUrl}" alt="${fullName}" referrerpolicy="no-referrer">` 
            : `<span class="nav-user-initial">${initial}</span>`}
          <span class="nav-user-name">${fullName}</span>
          <button type="button" class="nav-signout-btn" onclick="window.ieltsApp.signOut()" title="Sign Out">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      `;
    } else {
      slot.innerHTML = `
        <button type="button" class="nav-auth-btn" id="nav-login-btn" onclick="window.ieltsApp.openAuthModal('signin');">
          <svg class="nav-auth-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" width="16" height="16"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>Sign In</span>
        </button>
      `;
    }
  }

  function openAuthModal(mode = 'signin') {
    currentAuthMode = mode;
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    updateAuthModalUI();
    clearAuthStatus();
    modal.classList.add('active');
    modal.style.setProperty('display', 'flex', 'important');
    document.body.style.overflow = 'hidden';
  }

  function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
      modal.classList.remove('active');
      modal.style.setProperty('display', 'none', 'important');
      document.body.style.overflow = '';
      clearAuthStatus();
    }
    showHomeView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchAuthTab(mode) {
    currentAuthMode = mode;
    updateAuthModalUI();
    clearAuthStatus();
  }

  function toggleAuthMode() {
    if (currentAuthMode === 'signin') {
      switchAuthTab('signup');
    } else {
      switchAuthTab('signin');
    }
  }

  function updateAuthModalUI() {
    const isSignIn = currentAuthMode === 'signin';
    const isSignUp = currentAuthMode === 'signup';
    const isForgot = currentAuthMode === 'forgot';
    const isUpdatePw = currentAuthMode === 'update_password';

    const title = document.getElementById('auth-modal-title');
    const subtitle = document.getElementById('auth-modal-subtitle');
    const tabRow = document.getElementById('auth-tab-row');
    const tabSignIn = document.getElementById('auth-tab-signin');
    const tabSignUp = document.getElementById('auth-tab-signup');
    const googleBtn = document.getElementById('auth-google-btn');
    const divider = document.getElementById('auth-divider');
    const nameField = document.getElementById('auth-name-field');
    const emailField = document.getElementById('auth-email-field');
    const pwField = document.getElementById('auth-pw-field');
    const pwLabel = document.getElementById('auth-pw-label');
    const submitBtn = document.getElementById('auth-submit-btn');
    const togglePrompt = document.getElementById('auth-toggle-prompt');
    const toggleAction = document.getElementById('auth-toggle-action');
    const forgotLink = document.getElementById('auth-forgot-link');
    const optionsRow = document.getElementById('auth-options-row');

    // Section Visibilities
    if (tabRow) tabRow.style.display = (isSignIn || isSignUp) ? 'flex' : 'none';
    if (googleBtn) googleBtn.style.display = (isSignIn || isSignUp) ? 'flex' : 'none';
    if (divider) divider.style.display = (isSignIn || isSignUp) ? 'flex' : 'none';
    if (nameField) nameField.style.display = isSignUp ? 'block' : 'none';
    if (emailField) emailField.style.display = isUpdatePw ? 'none' : 'block';
    if (pwField) pwField.style.display = isForgot ? 'none' : 'block';
    if (forgotLink) forgotLink.style.display = isSignIn ? 'inline-block' : 'none';
    if (optionsRow) optionsRow.style.display = isSignIn ? 'flex' : 'none';

    if (tabSignIn) tabSignIn.classList.toggle('active', isSignIn);
    if (tabSignUp) tabSignUp.classList.toggle('active', isSignUp);

    if (isSignIn) {
      if (title) title.textContent = 'Login';
      if (subtitle) subtitle.textContent = "Prepare & Practice with confidence";
      if (pwLabel) pwLabel.textContent = 'Password';
      if (submitBtn) submitBtn.innerHTML = '<span>Log In</span>';
      if (togglePrompt) togglePrompt.textContent = "Don't have an account?";
      if (toggleAction) {
        toggleAction.textContent = 'Create an account';
        toggleAction.onclick = () => switchAuthTab('signup');
      }
    } else if (isSignUp) {
      if (title) title.textContent = 'Create Account';
      if (subtitle) subtitle.textContent = 'Join IELTS Warrior to start your full Cambridge preparation.';
      if (pwLabel) pwLabel.textContent = 'Create Password';
      if (submitBtn) submitBtn.innerHTML = '<span>Create Account</span>';
      if (togglePrompt) togglePrompt.textContent = 'Already have an account?';
      if (toggleAction) {
        toggleAction.textContent = 'Log In';
        toggleAction.onclick = () => switchAuthTab('signin');
      }
    } else if (isForgot) {
      if (title) title.textContent = 'Reset Password';
      if (subtitle) subtitle.textContent = "Enter your registered email and we'll send you a password reset link.";
      if (submitBtn) submitBtn.innerHTML = '<span>Send Password Reset Link</span>';
      if (togglePrompt) togglePrompt.textContent = 'Remembered your password?';
      if (toggleAction) {
        toggleAction.textContent = 'Back to Log In';
        toggleAction.onclick = () => switchAuthTab('signin');
      }
    } else if (isUpdatePw) {
      if (title) title.textContent = 'Create New Password';
      if (subtitle) subtitle.textContent = 'Enter your new password below to secure your account.';
      if (pwLabel) pwLabel.textContent = 'New Password';
      if (submitBtn) submitBtn.innerHTML = '<span>Save New Password</span>';
      if (togglePrompt) togglePrompt.textContent = 'Need help?';
      if (toggleAction) {
        toggleAction.textContent = 'Back to Home';
        toggleAction.onclick = () => closeAuthModal();
      }
    }
  }

  function setAuthStatus(msg, type = 'error') {
    const el = document.getElementById('auth-status-msg');
    if (!el) return;
    el.textContent = msg;
    el.className = 'auth-status-msg ' + type;
    el.style.display = 'block';
  }

  function clearAuthStatus() {
    const el = document.getElementById('auth-status-msg');
    if (el) {
      el.textContent = '';
      el.style.display = 'none';
      el.className = 'auth-status-msg';
    }
  }

  function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      btn.textContent = '🔒';
    } else {
      input.type = 'password';
      btn.textContent = '👁';
    }
  }

  async function signInWithGoogle() {
    clearAuthStatus();
    const sp = getSupabaseClient();
    if (!sp) {
      setAuthStatus('Authentication client is initializing. Please refresh and try again.', 'error');
      return;
    }

    try {
      setAuthStatus('Connecting to Google...', 'info');
      const { data, error } = await sp.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + window.location.pathname
        }
      });
      if (error) {
        setAuthStatus(error.message, 'error');
        return;
      }
      // Guaranteed browser redirection to Google Consent
      if (data && data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setAuthStatus(err.message || 'Failed to connect to Google.', 'error');
    }
  }

  async function handleAuthSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    clearAuthStatus();

    const sp = getSupabaseClient();
    if (!sp) {
      setAuthStatus('Authentication client is initializing. Please refresh.', 'error');
      return;
    }

    const emailEl = document.getElementById('auth-input-email');
    const pwEl = document.getElementById('auth-input-password');
    const nameEl = document.getElementById('auth-input-name');

    const email = emailEl ? emailEl.value.trim() : '';
    const password = pwEl ? pwEl.value : '';
    const name = nameEl ? nameEl.value.trim() : '';

    const submitBtn = document.getElementById('auth-submit-btn');

    // Case 1: Forgot Password Mode
    if (currentAuthMode === 'forgot') {
      if (!email) {
        setAuthStatus('Please enter your email address.', 'error');
        if (emailEl) emailEl.focus();
        return;
      }
      if (submitBtn) { submitBtn.disabled = true; submitBtn.classList.add('loading'); }
      try {
        const { data, error } = await sp.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + window.location.pathname
        });
        if (error) {
          setAuthStatus(error.message, 'error');
        } else {
          setAuthStatus('A password reset link has been sent to ' + email + '. Please check your inbox and spam folder.', 'success');
        }
      } catch (err) {
        setAuthStatus(err.message || 'Failed to send reset link.', 'error');
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.classList.remove('loading'); }
      }
      return;
    }

    // Case 2: Update New Password Mode (from email recovery link)
    if (currentAuthMode === 'update_password') {
      if (!password || password.length < 6) {
        setAuthStatus('Please enter a new password (at least 6 characters).', 'error');
        if (pwEl) pwEl.focus();
        return;
      }
      if (submitBtn) { submitBtn.disabled = true; submitBtn.classList.add('loading'); }
      try {
        const { data, error } = await sp.auth.updateUser({ password: password });
        if (error) {
          setAuthStatus(error.message, 'error');
        } else {
          setAuthStatus('Password updated successfully! Welcome back.', 'success');
          setTimeout(() => {
            closeAuthModal();
            if (window.history && window.history.replaceState) {
              window.history.replaceState(null, '', window.location.pathname);
            }
          }, 1200);
        }
      } catch (err) {
        setAuthStatus(err.message || 'Failed to update password.', 'error');
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.classList.remove('loading'); }
      }
      return;
    }

    // Case 3: Sign In or Sign Up Mode
    if (!email) {
      setAuthStatus('Please enter your email address.', 'error');
      if (emailEl) emailEl.focus();
      return;
    }
    if (!password) {
      setAuthStatus('Please enter your password.', 'error');
      if (pwEl) pwEl.focus();
      return;
    }
    if (password.length < 6) {
      setAuthStatus('Password must be at least 6 characters.', 'error');
      if (pwEl) pwEl.focus();
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');
    }

    try {
      if (currentAuthMode === 'signin') {
        const { data, error } = await sp.auth.signInWithPassword({
          email: email,
          password: password
        });

        if (error) {
          setAuthStatus(error.message || 'Invalid email or password.', 'error');
        } else if (data && data.user) {
          currentUser = data.user;
          localStorage.setItem('ielts_cached_user', JSON.stringify({
            id: currentUser.id,
            email: currentUser.email,
            user_metadata: currentUser.user_metadata
          }));
          renderNavAuthState();
          setAuthStatus('Signed in successfully! Welcome back.', 'success');
          setTimeout(() => {
            closeAuthModal();
          }, 800);
        }
      } else {
        // Sign Up Mode
        const { data, error } = await sp.auth.signUp({
          email: email,
          password: password,
          options: {
            emailRedirectTo: window.location.origin + window.location.pathname,
            data: {
              full_name: name || email.split('@')[0]
            }
          }
        });

        if (error) {
          setAuthStatus(error.message, 'error');
        } else if (data && data.user) {
          currentUser = data.user;
          localStorage.setItem('ielts_cached_user', JSON.stringify({
            id: currentUser.id,
            email: currentUser.email,
            user_metadata: currentUser.user_metadata
          }));
          renderNavAuthState();
          setAuthStatus('Account created and signed in successfully! Welcome to IELTS Warrior.', 'success');
          setTimeout(() => {
            closeAuthModal();
          }, 900);
        }
      }
    } catch (err) {
      setAuthStatus(err.message || 'Authentication error. Please try again.', 'error');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
      }
    }
  }

  async function signOut() {
    const sp = getSupabaseClient();
    try {
      if (sp) {
        await sp.auth.signOut();
      }
    } catch (e) {
      console.warn('Sign out note:', e.message);
    }
    currentUser = null;
    localStorage.removeItem('ielts_cached_user');
    renderNavAuthState();
  }

  function handleForgotPassword(e) {
    if (e && e.preventDefault) e.preventDefault();
    switchAuthTab('forgot');
  }

  window.ieltsApp = {
    // Supabase Authentication
    openAuthModal,
    closeAuthModal,
    switchAuthTab,
    toggleAuthMode,
    togglePasswordVisibility,
    signInWithGoogle,
    handleAuthSubmit,
    signOut,
    handleForgotPassword,

    // Community Reach & Feedback
    initFeedbackSection,
    toggleCommentTicker,
    setFeedbackRating,
    handleCommentCharCount,
    submitFeedbackComment,

    navigateToHomeSection,
    openYouTubeResourcesModal,
    closeYouTubeResourcesModal,
    toggleMobileMenu,
    closeMobileMenu,
    // Cambridge Guide Reference Modal
    openCambridgeModal,
    closeCambridgeModal,

    // Navigation Views
    showHomeView,
    showIeltsPracticeView,
    showIeltsPractice,
    showPracticePortals,
    showExamView,
    showReaderView,
    showWritingView,
    showListeningView,
    showShadowingView,
    showPodcastView,
    showRoadmapView,
    showVocabularyView,
    showGrammarView,
    showReadingSelection,
    openReadingMockTest,
    searchReadingPassages,
    showReadingSkillsSelection,
    showReadingSkills,
    startReadingTest,
    startReadingPassage,

    // Home Mode & Filters
    switchHomeMode,
    filterReadingPassages,
    renderReadingSelectionGrid,
    filterReadingSkills,
    filterReadingSkillsCards,
    renderReadingSkillsCards,
    markPassageComplete,
    filterRoadmap,
    openRoadmapDayModal,
    closeRoadmapModal,
    toggleCurrentDayComplete,

    // Reading Exam & Reader Interactivity
    loadTest,
    switchPart,
    setActiveQuestion,
    handleAnswerChange,
    handleMultiChoiceChange,
    selectHeadingForPlacement,
    handleDropZoneClick,
    removePlacedHeading,
    locateEvidence,
    goToPrevQuestion,
    goToNextQuestion,
    applyHighlight,
    clearHighlight,
    clearAllWritingHighlights,
    copySelectedText,
    saveParaNote,
    togglePassageAudio,
    copyPassageText,
    showReaderToast,
    cycleFontSize,
    cycleTheme,
    submitTest,
    showScoreModal,
    retakeTest,
    startTestFromHome,
    openReadingPassage,

    // Writing Module
    switchWritingTab,
    filterWritingTask2,
    renderWritingTask2,
    filterWritingTask1,
    renderWritingTask1,
    openWritingModal,
    openTask1Lightbox,
    closeLightbox,
    closeWritingModal,
    loadWritingPromptIntoSim,
    updateSimWordCount,
    toggleSimTimer,

    // Shadowing & Podcasts
    filterShadowing,
    speakShadowingLine,
    toggleVoiceRecording,
    switchPodcastTab,
    filterMediaCards,
    checkMediaQuiz,

    // Listening Module
    switchListeningTab,
    renderListeningMocks,
    filterListeningDrills,
    renderListeningDrills,
    startListeningMock,
    startListeningDrill,
    switchListeningExamPart,
    toggleListeningAudio,
    seekListeningAudio,
    setListeningVolume,
    toggleListeningTimer,
    resetListeningTimer,
    recordListeningAnswer,
    scrollToListeningQ,
    toggleListeningFlag,
    submitListeningExam,

    // Vocabulary Topics Engine
    filterVocabCategory,
    searchVocab,
    renderVocabTopicsHub,
    openVocabDayModal,
    closeVocabModal,
    toggleVocabDayComplete,
    markVocabIncomplete,
    markVocabComplete,
    navigateVocabModal,
    openVocabCheatSheet,
    closeVocabCheatSheet,

    // Grammar Practice Lab Engine
    returnToGrammarTopics,
    renderGrammarTopicsHub,
    openGrammarTopic,
    toggleGrammarTopicComplete,
    toggleCurrentTopicComplete,
    switchGrammarTab,
    selectGrammarGapOption,
    submitCurrentTopicPractice,
    resetCurrentTopicPractice,
    showGrammarVideoResources,
    filterGrammarVideos,
    toggleGrammarClassWatched,
    handleGrammarBackNav
  };

  // Initialize App on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', init);
})();
