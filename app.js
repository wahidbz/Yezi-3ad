const IS_SUBPAGE = window.location.pathname.includes('/pages/');
const BASE = IS_SUBPAGE ? '..' : '.';
const ROUTES = {
  home: IS_SUBPAGE ? '../index.html' : './index.html',
  categories: IS_SUBPAGE ? './categories.html' : './pages/categories.html',
  prank: IS_SUBPAGE ? './prank.html' : './pages/prank.html',
  favorites: IS_SUBPAGE ? './favorites.html' : './pages/favorites.html',
  profile: IS_SUBPAGE ? './profile.html' : './pages/profile.html'
};

const CATEGORIES = ['realistic', 'tunisian', 'arabic', 'zaghrouda', 'situational', 'retro'];
const SOUNDS = [
  { id: 'haircut_1', file: 'haircut_1.mp3', category: 'realistic', title: { ar: 'ماكنة حلاقة 1', en: 'Haircut Buzz 1' }, popularity: 98 },
  { id: 'haircut_2', file: 'haircut_2.mp3', category: 'realistic', title: { ar: 'ماكنة حلاقة 2', en: 'Haircut Buzz 2' }, popularity: 91 },
  { id: 'haircut_3', file: 'haircut_3.mp3', category: 'realistic', title: { ar: 'ماكنة حلاقة 3', en: 'Haircut Buzz 3' }, popularity: 88 },
  { id: 'fart_1', file: 'fart_1.mp3', category: 'realistic', title: { ar: 'ضحكة غازية 1', en: 'Funny Fart 1' }, popularity: 95 },
  { id: 'fart_2', file: 'fart_2.mp3', category: 'realistic', title: { ar: 'ضحكة غازية 2', en: 'Funny Fart 2' }, popularity: 89 },
  { id: 'fart_3', file: 'fart_3.mp3', category: 'realistic', title: { ar: 'ضحكة غازية 3', en: 'Funny Fart 3' }, popularity: 84 },
  { id: 'siren', file: 'siren.mp3', category: 'realistic', title: { ar: 'سيرين إنذار', en: 'Emergency Siren' }, popularity: 86 },
  { id: 'doorbell', file: 'doorbell.mp3', category: 'realistic', title: { ar: 'جرس باب', en: 'Doorbell' }, popularity: 75 },
  { id: 'mosquito', file: 'mosquito.mp3', category: 'realistic', title: { ar: 'ناموسة مزعجة', en: 'Mosquito' }, popularity: 83 },
  { id: 'ghost', file: 'ghost.mp3', category: 'realistic', title: { ar: 'همسة شبح', en: 'Ghost Whisper' }, popularity: 80 },
  { id: 'battery_low', file: 'battery_low.mp3', category: 'realistic', title: { ar: 'بطارية منخفضة', en: 'Battery Low' }, popularity: 82 },
  { id: 'phone_vibration', file: 'phone_vibration.mp3', category: 'realistic', title: { ar: 'اهتزاز هاتف', en: 'Phone Vibration' }, popularity: 78 },

  { id: 'yezi_3ad', file: 'yezi_3ad.mp3', category: 'tunisian', title: { ar: 'ياخي يزي عاد', en: 'Yezi 3ad' }, popularity: 99 },
  { id: 'barra_rawah', file: 'barra_rawah.mp3', category: 'tunisian', title: { ar: 'برّة روح', en: 'Barra Rawah' }, popularity: 76 },
  { id: 'chbik_labik', file: 'chbik_labik.mp3', category: 'tunisian', title: { ar: 'شبيك لبيك', en: 'Chbik Labik' }, popularity: 73 },
  { id: 'hawk_jak_dour', file: 'hawk_jak_dour.mp3', category: 'tunisian', title: { ar: 'هاو جاك الدور', en: 'Your Turn Came' }, popularity: 71 },
  { id: 'aaychek_idhak', file: 'aaychek_idhak.mp3', category: 'tunisian', title: { ar: 'عيشك اضحك', en: 'Please Laugh' }, popularity: 68 },

  { id: 'ya_salam', file: 'ya_salam.mp3', category: 'arabic', title: { ar: 'يا سلام يا سلام', en: 'Ya Salam' }, popularity: 87 },
  { id: 'la_mustahil', file: 'la_mustahil.mp3', category: 'arabic', title: { ar: 'لا لا مستحيل', en: 'No Way' }, popularity: 81 },
  { id: 'khalas_habibi', file: 'khalas_habibi.mp3', category: 'arabic', title: { ar: 'خلاص يا حبيبي', en: 'Enough Habibi' }, popularity: 79 },
  { id: 'meen_elli', file: 'meen_elli.mp3', category: 'arabic', title: { ar: 'مين اللي عمل كده', en: 'Who Did That' }, popularity: 77 },
  { id: 'ehda_shwaya', file: 'ehda_shwaya.mp3', category: 'arabic', title: { ar: 'اهدى شوية', en: 'Calm Down' }, popularity: 69 },

  { id: 'zag_tn_normal', file: 'zag_tn_normal.mp3', category: 'zaghrouda', title: { ar: 'زغرودة تونسية عادية', en: 'Tunisia Zaghrouda - Normal' }, popularity: 92 },
  { id: 'zag_tn_party', file: 'zag_tn_party.mp3', category: 'zaghrouda', title: { ar: 'زغرودة تونسية حفلة', en: 'Tunisia Zaghrouda - Party' }, popularity: 94 },
  { id: 'zag_tn_echo', file: 'zag_tn_echo.mp3', category: 'zaghrouda', title: { ar: 'زغرودة تونسية إيكو', en: 'Tunisia Zaghrouda - Echo' }, popularity: 85 },
  { id: 'zag_dz_normal', file: 'zag_dz_normal.mp3', category: 'zaghrouda', title: { ar: 'زغرودة جزائرية عادية', en: 'Algeria Zaghrouda - Normal' }, popularity: 83 },
  { id: 'zag_dz_party', file: 'zag_dz_party.mp3', category: 'zaghrouda', title: { ar: 'زغرودة جزائرية حفلة', en: 'Algeria Zaghrouda - Party' }, popularity: 88 },
  { id: 'zag_dz_echo', file: 'zag_dz_echo.mp3', category: 'zaghrouda', title: { ar: 'زغرودة جزائرية إيكو', en: 'Algeria Zaghrouda - Echo' }, popularity: 74 },
  { id: 'zag_ma_normal', file: 'zag_ma_normal.mp3', category: 'zaghrouda', title: { ar: 'زغرودة مغربية عادية', en: 'Morocco Zaghrouda - Normal' }, popularity: 82 },
  { id: 'zag_ma_party', file: 'zag_ma_party.mp3', category: 'zaghrouda', title: { ar: 'زغرودة مغربية حفلة', en: 'Morocco Zaghrouda - Party' }, popularity: 89 },
  { id: 'zag_ma_echo', file: 'zag_ma_echo.mp3', category: 'zaghrouda', title: { ar: 'زغرودة مغربية إيكو', en: 'Morocco Zaghrouda - Echo' }, popularity: 73 },
  { id: 'zag_eg_normal', file: 'zag_eg_normal.mp3', category: 'zaghrouda', title: { ar: 'زغرودة مصرية عادية', en: 'Egypt Zaghrouda - Normal' }, popularity: 84 },
  { id: 'zag_eg_party', file: 'zag_eg_party.mp3', category: 'zaghrouda', title: { ar: 'زغرودة مصرية حفلة', en: 'Egypt Zaghrouda - Party' }, popularity: 90 },
  { id: 'zag_eg_echo', file: 'zag_eg_echo.mp3', category: 'zaghrouda', title: { ar: 'زغرودة مصرية إيكو', en: 'Egypt Zaghrouda - Echo' }, popularity: 72 },

  { id: 'cafe', file: 'cafe.mp3', category: 'situational', title: { ar: 'جو كافيه', en: 'Cafe Ambience' }, popularity: 66 },
  { id: 'wedding', file: 'wedding.mp3', category: 'situational', title: { ar: 'جو عرس', en: 'Wedding Ambience' }, popularity: 85 },
  { id: 'street', file: 'street.mp3', category: 'situational', title: { ar: 'جو شارع', en: 'Street Ambience' }, popularity: 65 },
  { id: 'school', file: 'school.mp3', category: 'situational', title: { ar: 'جو مدرسة', en: 'School Ambience' }, popularity: 61 },

  { id: 'nokia', file: 'nokia.mp3', category: 'retro', title: { ar: 'نغمة نوكيا كلاسيك', en: 'Nokia Style' }, popularity: 96 },
  { id: 'samsung_old', file: 'samsung_old.mp3', category: 'retro', title: { ar: 'نغمة سامسونج قديمة', en: 'Old Samsung' }, popularity: 80 },
  { id: 'sms_retro', file: 'sms_retro.mp3', category: 'retro', title: { ar: 'رسالة قصيرة ريترو', en: 'Retro SMS' }, popularity: 70 },
  { id: 'keypad_typing', file: 'keypad_typing.mp3', category: 'retro', title: { ar: 'كتابة كيباد', en: 'Keypad Typing' }, popularity: 67 }
];

const state = {
  lang: localStorage.getItem('yezi_lang') || 'ar',
  favorites: JSON.parse(localStorage.getItem('yezi_favorites') || '[]'),
  likedSounds: JSON.parse(localStorage.getItem('yezi_liked') || '{}'),
  likeCounts: JSON.parse(localStorage.getItem('yezi_like_counts') || '{}'),
  search: '',
  category: 'all',
  reactionBest: Number(localStorage.getItem('yezi_reaction_best') || 9999),
  laughScore: Number(localStorage.getItem('yezi_laugh_score') || 0),
  laughTimer: 10,
  audio: null,
  activeSoundId: null,
  reactionTimer: null,
  reactionCanTap: false,
  reactionStartedAt: 0,
  haircutAudio: null,
  fakeCallAudio: null,
  fakeCallInterval: null,
  laughInterval: null,
  laughCurrent: null
};

function t(path) {
  const parts = path.split('.');
  let current = window.TRANSLATIONS?.[state.lang];
  for (const p of parts) current = current?.[p];
  return current ?? path;
}

function currentDir() {
  return state.lang === 'ar' ? 'rtl' : 'ltr';
}

function saveState() {
  localStorage.setItem('yezi_lang', state.lang);
  localStorage.setItem('yezi_favorites', JSON.stringify(state.favorites));
  localStorage.setItem('yezi_liked', JSON.stringify(state.likedSounds));
  localStorage.setItem('yezi_like_counts', JSON.stringify(state.likeCounts));
  localStorage.setItem('yezi_reaction_best', String(state.reactionBest));
  localStorage.setItem('yezi_laugh_score', String(state.laughScore));
}

function setLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = currentDir();
  document.body.classList.toggle('rtl', lang === 'ar');
  document.body.classList.toggle('ltr', lang === 'en');
  saveState();
  hydrateShell();
  renderPage();
  toast(t('toast.languageSwitched'));
}

function hydrateShell() {
  const page = document.body.dataset.page || 'home';
  document.title = `${window.TRANSLATIONS[state.lang].appName} • ${t(`nav.${page === 'home' ? 'home' : page}`)}`;

  const logo = document.getElementById('brand-logo');
  if (logo) logo.src = `${BASE}/assets/icons/logo.svg`;
  const splashLogo = document.getElementById('splash-logo');
  if (splashLogo) splashLogo.src = `${BASE}/assets/icons/logo.svg`;
  const brandTitle = document.getElementById('brand-title');
  if (brandTitle) brandTitle.textContent = t('appName');
  const brandTag = document.getElementById('brand-tagline');
  if (brandTag) brandTag.textContent = t('tagline');

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.textContent = state.lang === 'ar' ? 'EN' : 'AR';
    langToggle.setAttribute('aria-label', t('common.language'));
  }

  document.querySelectorAll('[data-nav]').forEach((el) => {
    const key = el.dataset.nav;
    el.href = ROUTES[key];
    const label = el.querySelector('.nav-label');
    if (label) label.textContent = t(`nav.${key}`);
    el.classList.toggle('active', key === page || (page === 'home' && key === 'home'));
  });
}

function getCategoryName(category) {
  return t(`categories.${category}`);
}

function isFavorite(id) {
  return state.favorites.includes(id);
}

function getLikeCount(sound) {
  return state.likeCounts[sound.id] ?? sound.popularity;
}

function getUserLikeCount() {
  return Object.values(state.likedSounds).filter(Boolean).length;
}

function waveMarkup() {
  return '<div class="wave">' + Array.from({ length: 16 }).map((_, i) => `<span style="height:${12 + ((i * 7) % 20)}px"></span>`).join('') + '</div>';
}

function soundPath(file) {
  return `${BASE}/assets/sounds/${file}`;
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function soundCard(sound) {
  const favorite = isFavorite(sound.id);
  const liked = !!state.likedSounds[sound.id];
  const isPlaying = state.activeSoundId === sound.id;
  const title = escapeHtml(sound.title[state.lang]);
  return `
    <article class="sound-card">
      <div class="sound-top">
        <span class="badge">${escapeHtml(getCategoryName(sound.category))}</span>
        <span class="count-pill">🔥 ${getLikeCount(sound)}</span>
      </div>
      <h4 class="sound-title">${title}</h4>
      <div class="sound-meta">
        <span>${t('common.instantPlay')}</span>
        <span>•</span>
        <span>${t('common.offlineReady')}</span>
      </div>
      ${waveMarkup()}
      <div class="sound-actions">
        <button class="action-btn ${isPlaying ? 'playing' : ''}" data-action="play-sound" data-id="${sound.id}">▶</button>
        <button class="action-btn" data-action="download-sound" data-id="${sound.id}">⬇</button>
        <button class="action-btn ${favorite ? 'active' : ''}" data-action="toggle-favorite" data-id="${sound.id}">⭐</button>
        <button class="action-btn ${liked ? 'active' : ''}" data-action="like-sound" data-id="${sound.id}">👍</button>
      </div>
    </article>
  `;
}

function filterSounds(list = SOUNDS) {
  const query = state.search.trim().toLowerCase();
  return list.filter((sound) => {
    const matchCategory = state.category === 'all' || sound.category === state.category;
    const haystack = `${sound.title.ar} ${sound.title.en} ${getCategoryName(sound.category)}`.toLowerCase();
    return matchCategory && (!query || haystack.includes(query));
  });
}

function topSounds(limit = 6) {
  return [...SOUNDS].sort((a, b) => getLikeCount(b) - getLikeCount(a)).slice(0, limit);
}

function quickLink(href, icon, title, text) {
  return `
    <a class="mini-card" href="${href}">
      <h4>${icon} ${title}</h4>
      <p>${text}</p>
    </a>
  `;
}

function renderHome() {
  const top = topSounds(6);
  const preview = filterSounds().slice(0, 6);
  return `
    <section class="hero glass">
      <div>
        <span class="badge">${t('common.top')} • ${t('tagline')}</span>
        <h2>${t('home.heroTitle')}</h2>
        <p>${t('home.heroText')}</p>
        <div class="hero-actions">
          <a class="primary-btn" href="${ROUTES.categories}">🎵 ${t('home.exploreSounds')}</a>
          <a class="secondary-btn" href="${ROUTES.prank}">🎭 ${t('home.prankModes')}</a>
          <button class="ghost-btn" data-action="download-all">⬇ ${t('common.downloadAll')}</button>
        </div>
        <p class="footer-note">${t('home.languageHint')}</p>
      </div>
      <div class="section-card">
        <div class="stat-row">
          <div class="stat-pill"><strong>${SOUNDS.length}</strong><span>${t('home.statsSounds')}</span></div>
          <div class="stat-pill"><strong>5</strong><span>${t('home.statsPranks')}</span></div>
          <div class="stat-pill"><strong>100%</strong><span>${t('home.statsOffline')}</span></div>
        </div>
        <div class="search-shell" style="margin-top:14px">
          <label class="search-box">
            <span>🔎</span>
            <input id="search-input" type="search" value="${escapeHtml(state.search)}" placeholder="${escapeHtml(t('common.search'))}">
          </label>
          <div class="chip-row">${renderCategoryChips()}</div>
        </div>
      </div>
    </section>

    <section class="section-card">
      <div class="section-title">
        <div>
          <h3>${state.lang === 'ar' ? 'تشغيل فوري' : 'Instant play'}</h3>
          <p>${state.lang === 'ar' ? 'نتائج مباشرة حسب البحث والتصنيف المختار.' : 'Live results based on your search and category filter.'}</p>
        </div>
        <a class="ghost-btn" href="${ROUTES.categories}">${t('home.exploreSounds')}</a>
      </div>
      ${preview.length ? `<div class="sound-grid">${preview.map(soundCard).join('')}</div>` : `<div class="empty-state muted">${t('common.noResults')}</div>`}
    </section>

    <section class="section-card">
      <div class="section-title">
        <div>
          <h3>${t('common.topSounds')}</h3>
          <p>${t('home.topIntro')}</p>
        </div>
        <a class="ghost-btn" href="${ROUTES.categories}">${t('home.exploreSounds')}</a>
      </div>
      <div class="sound-grid">${top.map(soundCard).join('')}</div>
    </section>

    <section class="two-col">
      <div class="section-card">
        <div class="section-title">
          <div>
            <h3>${t('home.quickActions')}</h3>
            <p>${t('home.topPranks')}</p>
          </div>
        </div>
        <div class="two-col">
          ${quickLink(ROUTES.categories, '🎵', t('nav.categories'), t('categories.subtitle'))}
          ${quickLink(ROUTES.prank, '🎭', t('nav.prank'), t('prank.subtitle'))}
          ${quickLink(ROUTES.favorites, '⭐', t('nav.favorites'), t('favorites.subtitle'))}
          ${quickLink(ROUTES.profile, '👤', t('nav.profile'), t('profile.subtitle'))}
        </div>
      </div>

      <div class="upload-card">
        <h4>🌍 ${t('home.uploadTitle')}</h4>
        <p>${t('home.uploadText')}</p>
        <div class="grid upload-form-grid">
          <input id="upload-title" type="text" placeholder="${escapeHtml(state.lang === 'ar' ? 'اسم الصوت' : 'Sound title')}">
          <select id="upload-category">
            <option value="realistic">${t('categories.realistic')}</option>
            <option value="tunisian">${t('categories.tunisian')}</option>
            <option value="arabic">${t('categories.arabic')}</option>
            <option value="zaghrouda">${t('categories.zaghrouda')}</option>
            <option value="situational">${t('categories.situational')}</option>
            <option value="retro">${t('categories.retro')}</option>
          </select>
          <button class="primary-btn" data-action="simulate-upload">☁ ${t('home.uploadButton')}</button>
        </div>
      </div>
    </section>

    <section class="two-col">
      <div class="mini-card">
        <h4>🎮 ${t('common.miniGames')}</h4>
        <p>${t('games.reactionText')}</p>
        <div class="btn-row">
          <a class="primary-btn" href="${ROUTES.prank}#reaction">⚡ ${t('games.reaction')}</a>
          <a class="secondary-btn" href="${ROUTES.prank}#laugh">😂 ${t('games.laugh')}</a>
        </div>
      </div>
      <div class="mini-card">
        <h4>👥 ${t('common.community')}</h4>
        <p>${state.lang === 'ar' ? 'ترتيب التريند بيتحدث محليًا على حسب إعجاباتك المخزنة على الجهاز.' : 'Trending order updates locally based on your stored likes.'}</p>
        <div class="chip-row">${top.slice(0, 4).map(s => `<span class="chip">${escapeHtml(s.title[state.lang])}</span>`).join('')}</div>
      </div>
    </section>
  `;
}

function renderCategoryChips() {
  const items = ['all', ...CATEGORIES];
  return items.map((cat) => `
    <button class="chip ${state.category === cat ? 'active' : ''}" data-action="filter-category" data-category="${cat}">${cat === 'all' ? t('common.all') : getCategoryName(cat)}</button>
  `).join('');
}

function renderCategoriesPage() {
  const filtered = filterSounds();
  return `
    <section class="section-card">
      <div class="section-title">
        <div>
          <h2>${t('categories.title')}</h2>
          <p>${t('categories.subtitle')}</p>
        </div>
        <button class="ghost-btn" data-action="download-all">⬇ ${t('common.downloadAll')}</button>
      </div>
      <div class="search-shell">
        <label class="search-box">
          <span>🔎</span>
          <input id="search-input" type="search" value="${escapeHtml(state.search)}" placeholder="${escapeHtml(t('common.search'))}">
        </label>
        <div class="chip-row">${renderCategoryChips()}</div>
      </div>
    </section>

    <section class="section-card">
      <div class="section-title">
        <div>
          <h3>${state.category === 'all' ? t('common.categories') : getCategoryName(state.category)}</h3>
          <p>${filtered.length} ${state.lang === 'ar' ? 'نتيجة' : 'results'}</p>
        </div>
      </div>
      ${filtered.length ? `<div class="sound-grid">${filtered.map(soundCard).join('')}</div>` : `<div class="empty-state muted">${t('common.noResults')}</div>`}
    </section>
  `;
}

function renderPrankPage() {
  return `
    <section class="section-card">
      <div class="section-title">
        <div>
          <h2>${t('prank.title')}</h2>
          <p>${t('prank.subtitle')}</p>
        </div>
      </div>
      <div class="mode-grid">
        <article class="mode-card">
          <h4>✂️ ${t('prank.haircut')}</h4>
          <p>${t('prank.haircutText')}</p>
          <div class="range-wrap">
            <label>${t('prank.simulatorSpeed')} <strong id="haircut-speed-label">1.0x</strong></label>
            <input id="haircut-speed" type="range" min="0.6" max="1.6" step="0.1" value="1">
          </div>
          <div class="btn-row">
            <button class="primary-btn" data-action="start-haircut">▶ ${t('prank.startHaircut')}</button>
            <button class="ghost-btn" data-action="stop-haircut">■ ${t('prank.stopHaircut')}</button>
          </div>
        </article>

        <article class="mode-card">
          <h4>📞 ${t('prank.fakeCall')}</h4>
          <p>${t('prank.fakeCallText')}</p>
          <div class="inline-form">
            <input id="caller-name" type="text" placeholder="${escapeHtml(t('prank.callerName'))}">
            <button class="primary-btn" data-action="start-fake-call">☎ ${t('common.tryNow')}</button>
          </div>
        </article>

        <article class="mode-card">
          <h4>👻 ${t('prank.ghost')}</h4>
          <p>${t('prank.ghostText')}</p>
          <button class="secondary-btn" data-action="activate-ghost">✨ ${t('common.start')}</button>
        </article>

        <article class="mode-card">
          <h4>🚨 ${t('prank.panic')}</h4>
          <p>${t('prank.panicText')}</p>
          <button class="secondary-btn" data-action="activate-panic">⚠ ${t('common.start')}</button>
        </article>

        <article class="mode-card">
          <h4>🥳 ${t('prank.party')}</h4>
          <p>${t('prank.partyText')}</p>
          <button class="secondary-btn" data-action="activate-party">🎉 ${t('common.start')}</button>
        </article>
      </div>
    </section>

    <section class="two-col" id="reaction">
      <article class="mini-card">
        <h4>⚡ ${t('games.reaction')}</h4>
        <p>${t('games.reactionText')}</p>
        <button id="reaction-btn" class="reaction-btn" data-action="reaction-press">${t('games.wait')}</button>
        <div class="btn-row" style="margin-top:12px">
          <button class="primary-btn" data-action="reaction-start">${t('common.start')}</button>
          <span class="count-pill">${t('games.bestScore')}: <strong>${state.reactionBest === 9999 ? '--' : `${state.reactionBest} ms`}</strong></span>
        </div>
      </article>

      <article class="mini-card" id="laugh">
        <h4>😂 ${t('games.laugh')}</h4>
        <p>${t('games.laughText')}</p>
        <div class="dont-laugh-line" id="laugh-line">${state.laughCurrent ? escapeHtml(state.laughCurrent) : '🙂'}</div>
        <div class="btn-row" style="margin-top:12px">
          <button class="primary-btn" data-action="laugh-start">${t('games.challenge')}</button>
          <button class="ghost-btn" data-action="laugh-survived">${t('games.survived')}</button>
        </div>
        <div class="btn-row" style="margin-top:12px">
          <span class="count-pill">${t('games.score')}: <strong>${state.laughScore}</strong></span>
          <span class="count-pill">${t('games.timer')}: <strong id="laugh-timer-value">${state.laughTimer}</strong></span>
        </div>
      </article>
    </section>
  `;
}

function renderFavoritesPage() {
  const favorites = SOUNDS.filter((sound) => isFavorite(sound.id));
  return `
    <section class="section-card">
      <div class="section-title">
        <div>
          <h2>${t('favorites.title')}</h2>
          <p>${t('favorites.subtitle')}</p>
        </div>
      </div>
      ${favorites.length ? `<div class="sound-grid">${favorites.map(soundCard).join('')}</div>` : `<div class="empty-state muted">⭐<br>${t('favorites.empty')}</div>`}
    </section>
  `;
}

function renderProfilePage() {
  return `
    <section class="profile-card">
      <div class="section-title">
        <div>
          <h2>${t('profile.title')}</h2>
          <p>${t('profile.subtitle')}</p>
        </div>
      </div>
      <div class="profile-stats">
        <div class="profile-stat"><strong>${SOUNDS.length}</strong><span>${t('profile.soundsUsed')}</span></div>
        <div class="profile-stat"><strong>${state.favorites.length}</strong><span>${t('profile.favCount')}</span></div>
        <div class="profile-stat"><strong>${getUserLikeCount()}</strong><span>${t('profile.likesGiven')}</span></div>
        <div class="profile-stat"><strong>${state.lang === 'ar' ? 'مفعل' : 'Ready'}</strong><span>${t('profile.offlineMode')}</span></div>
      </div>
    </section>

    <section class="two-col">
      <article class="stats-card">
        <h4>🌐 ${t('common.language')}</h4>
        <p>${t('profile.storage')}</p>
        <div class="lang-switch-row">
          <button class="action-btn lang-btn ${state.lang === 'ar' ? 'active' : ''}" data-action="switch-lang" data-lang="ar">${t('common.arabic')}</button>
          <button class="action-btn lang-btn ${state.lang === 'en' ? 'active' : ''}" data-action="switch-lang" data-lang="en">${t('common.english')}</button>
        </div>
      </article>

      <article class="stats-card">
        <h4>💾 Offline / Deploy</h4>
        <p>${t('common.offlineReady')}</p>
        <p class="muted">${t('profile.deploy')}</p>
        <div class="btn-row">
          <button class="ghost-btn" data-action="download-all">${t('common.downloadAll')}</button>
        </div>
      </article>
    </section>

    <section class="two-col">
      <article class="stats-card">
        <h4>⭐ ${t('profile.resetFavorites')}</h4>
        <p>${state.lang === 'ar' ? 'احذف كل المفضلة المحفوظة على الجهاز.' : 'Clear all locally saved favorites.'}</p>
        <button class="secondary-btn" data-action="reset-favorites">${t('profile.resetFavorites')}</button>
      </article>
      <article class="stats-card">
        <h4>👍 ${t('profile.resetLikes')}</h4>
        <p>${state.lang === 'ar' ? 'ارجع ترتيب التريند للوضع الافتراضي.' : 'Restore local trending counts to default.'}</p>
        <button class="secondary-btn" data-action="reset-likes">${t('profile.resetLikes')}</button>
      </article>
    </section>
  `;
}

function renderPage() {
  const root = document.getElementById('app');
  const page = document.body.dataset.page || 'home';
  if (!root) return;

  if (page === 'categories') root.innerHTML = renderCategoriesPage();
  else if (page === 'prank') root.innerHTML = renderPrankPage();
  else if (page === 'favorites') root.innerHTML = renderFavoritesPage();
  else if (page === 'profile') root.innerHTML = renderProfilePage();
  else root.innerHTML = renderHome();

  bindPageInputs();
}

function bindPageInputs() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.search = e.target.value;
      renderPage();
    });
  }

  const speedRange = document.getElementById('haircut-speed');
  const speedLabel = document.getElementById('haircut-speed-label');
  if (speedRange && speedLabel) {
    const syncSpeed = () => {
      speedLabel.textContent = `${Number(speedRange.value).toFixed(1)}x`;
      if (state.haircutAudio) state.haircutAudio.playbackRate = Number(speedRange.value);
    };
    speedRange.addEventListener('input', syncSpeed);
    syncSpeed();
  }
}

function getSoundById(id) {
  return SOUNDS.find((sound) => sound.id === id);
}

function stopCurrentAudio() {
  if (state.audio) {
    state.audio.pause();
    state.audio.currentTime = 0;
  }
  state.audio = null;
  state.activeSoundId = null;
}

function playSound(id, options = {}) {
  const sound = getSoundById(id);
  if (!sound) return;
  stopCurrentAudio();
  const audio = new Audio(soundPath(sound.file));
  audio.loop = !!options.loop;
  audio.volume = options.volume ?? 1;
  audio.playbackRate = options.playbackRate ?? 1;
  audio.play().catch(() => {});
  audio.onended = () => {
    state.activeSoundId = null;
    renderPage();
  };
  state.audio = audio;
  state.activeSoundId = id;
  renderPage();
  return audio;
}

function triggerDownload(file, name) {
  const a = document.createElement('a');
  a.href = file;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function downloadSound(id) {
  const sound = getSoundById(id);
  if (!sound) return;
  triggerDownload(soundPath(sound.file), sound.file);
  toast(t('toast.downloaded'));
}

function toggleFavorite(id) {
  if (isFavorite(id)) state.favorites = state.favorites.filter((item) => item !== id);
  else state.favorites.push(id);
  saveState();
  renderPage();
  toast(isFavorite(id) ? t('toast.addedFav') : t('toast.removedFav'));
}

function toggleLike(id) {
  const sound = getSoundById(id);
  if (!sound) return;
  const already = !!state.likedSounds[id];
  if (already) {
    state.likedSounds[id] = false;
    state.likeCounts[id] = Math.max(sound.popularity, getLikeCount(sound) - 1);
  } else {
    state.likedSounds[id] = true;
    state.likeCounts[id] = getLikeCount(sound) + 1;
  }
  saveState();
  renderPage();
}

function downloadAllSounds() {
  toast(t('toast.downloadingAll'));
  SOUNDS.forEach((sound, index) => {
    setTimeout(() => triggerDownload(soundPath(sound.file), sound.file), index * 180);
  });
}

function toast(message) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('show'), 1900);
}

function simulateUpload() {
  const titleInput = document.getElementById('upload-title');
  const value = titleInput?.value?.trim();
  toast(value ? `${t('toast.uploadDone')} • ${value}` : t('toast.uploadDone'));
}

function startHaircut() {
  const speed = Number(document.getElementById('haircut-speed')?.value || 1);
  if (state.haircutAudio) {
    state.haircutAudio.pause();
    state.haircutAudio.currentTime = 0;
  }
  state.haircutAudio = new Audio(soundPath('haircut_1.mp3'));
  state.haircutAudio.loop = true;
  state.haircutAudio.playbackRate = speed;
  state.haircutAudio.play().catch(() => {});
}

function stopHaircut() {
  if (!state.haircutAudio) return;
  state.haircutAudio.pause();
  state.haircutAudio.currentTime = 0;
  state.haircutAudio = null;
}

function closeOverlay() {
  const overlayRoot = document.getElementById('overlay-root');
  if (overlayRoot) overlayRoot.innerHTML = '';
  if (state.fakeCallAudio) {
    state.fakeCallAudio.pause();
    state.fakeCallAudio.currentTime = 0;
    state.fakeCallAudio = null;
  }
  if (state.fakeCallInterval) {
    clearInterval(state.fakeCallInterval);
    state.fakeCallInterval = null;
  }
}

function startFakeCall() {
  const caller = (document.getElementById('caller-name')?.value || '').trim() || t('prank.defaultCaller');
  const overlayRoot = document.getElementById('overlay-root');
  if (!overlayRoot) return;
  closeOverlay();
  state.fakeCallAudio = new Audio(soundPath('nokia.mp3'));
  state.fakeCallAudio.loop = true;
  state.fakeCallAudio.play().catch(() => {});
  overlayRoot.innerHTML = `
    <div class="fake-call-overlay">
      <div class="overlay-card">
        <div class="caller-avatar">☎</div>
        <p class="muted">${t('prank.incomingCall')}</p>
        <h3>${escapeHtml(caller)}</h3>
        <p class="muted" id="call-status">${t('prank.incomingCall')}</p>
        <div class="overlay-actions">
          <button class="primary-btn answer-btn" data-action="answer-call">${t('prank.answer')}</button>
          <button class="primary-btn decline-btn" data-action="close-overlay">${t('prank.decline')}</button>
        </div>
      </div>
    </div>
  `;
}

function answerCall() {
  const status = document.getElementById('call-status');
  if (state.fakeCallAudio) {
    state.fakeCallAudio.pause();
    state.fakeCallAudio.currentTime = 0;
  }
  playSound('khalas_habibi');
  let secs = 0;
  if (status) status.textContent = `${t('prank.connected')} • 00:00`;
  state.fakeCallInterval = setInterval(() => {
    secs += 1;
    const mm = String(Math.floor(secs / 60)).padStart(2, '0');
    const ss = String(secs % 60).padStart(2, '0');
    if (status) status.textContent = `${t('prank.connected')} • ${mm}:${ss}`;
  }, 1000);
}

function activateGhostMode() {
  const overlayRoot = document.getElementById('overlay-root');
  if (!overlayRoot) return;
  const lines = t('ghosts');
  const line = lines[Math.floor(Math.random() * lines.length)];
  playSound('ghost');
  overlayRoot.innerHTML = `
    <div class="ghost-overlay">
      <div class="overlay-card">
        <div class="ghost-visual">👻</div>
        <h3>${t('prank.ghost')}</h3>
        <p>${escapeHtml(line)}</p>
        <button class="primary-btn" data-action="close-overlay">${t('common.close')}</button>
      </div>
    </div>
  `;
  toast(t('prank.ghostActive'));
}

function activatePanicMode() {
  document.body.classList.add('panic-flash');
  playSound('siren');
  setTimeout(() => { new Audio(soundPath('battery_low.mp3')).play().catch(() => {}); }, 900);
  setTimeout(() => { new Audio(soundPath('phone_vibration.mp3')).play().catch(() => {}); }, 1500);
  toast(t('prank.panicActive'));
  setTimeout(() => document.body.classList.remove('panic-flash'), 3000);
}

function activatePartyMode() {
  document.body.classList.add('party-glow');
  playSound('zag_tn_party');
  setTimeout(() => { new Audio(soundPath('wedding.mp3')).play().catch(() => {}); }, 900);
  toast(t('prank.partyActive'));
  setTimeout(() => document.body.classList.remove('party-glow'), 4200);
}

function startReactionGame() {
  clearTimeout(state.reactionTimer);
  state.reactionCanTap = false;
  const btn = document.getElementById('reaction-btn');
  if (!btn) return;
  btn.textContent = t('games.wait');
  btn.classList.remove('ready');
  state.reactionTimer = setTimeout(() => {
    state.reactionCanTap = true;
    state.reactionStartedAt = performance.now();
    btn.textContent = t('games.tapNow');
    btn.classList.add('ready');
  }, 1000 + Math.random() * 2500);
}

function pressReactionGame() {
  const btn = document.getElementById('reaction-btn');
  if (!btn) return;
  if (!state.reactionCanTap) {
    clearTimeout(state.reactionTimer);
    btn.textContent = t('games.tooSoon');
    btn.classList.remove('ready');
    toast(t('games.tooSoon'));
    return;
  }
  const result = Math.max(1, Math.round(performance.now() - state.reactionStartedAt));
  state.reactionCanTap = false;
  btn.textContent = `${result} ms`;
  btn.classList.remove('ready');
  state.reactionBest = Math.min(state.reactionBest, result);
  saveState();
  renderPage();
}

function startLaughChallenge() {
  const jokes = t('jokes');
  state.laughCurrent = jokes[Math.floor(Math.random() * jokes.length)];
  state.laughTimer = 10;
  const line = document.getElementById('laugh-line');
  const timer = document.getElementById('laugh-timer-value');
  if (line) line.textContent = state.laughCurrent;
  if (timer) timer.textContent = String(state.laughTimer);
  clearInterval(state.laughInterval);
  playSound(Math.random() > 0.5 ? 'ya_salam' : 'yezi_3ad');
  state.laughInterval = setInterval(() => {
    state.laughTimer -= 1;
    const currentTimer = document.getElementById('laugh-timer-value');
    if (currentTimer) currentTimer.textContent = String(state.laughTimer);
    if (state.laughTimer <= 0) {
      clearInterval(state.laughInterval);
      toast(state.lang === 'ar' ? 'خلص الوقت... لو ما ضحكتش إنت كسبت!' : 'Timer done... if you did not laugh, you win!');
    }
  }, 1000);
}

function survivedLaugh() {
  if (state.laughTimer > 0 && state.laughTimer < 10) {
    state.laughScore += 1;
    saveState();
    clearInterval(state.laughInterval);
    state.laughTimer = 10;
    renderPage();
  }
}

function resetFavorites() {
  state.favorites = [];
  saveState();
  renderPage();
  toast(t('toast.favoritesReset'));
}

function resetLikes() {
  state.likedSounds = {};
  state.likeCounts = {};
  saveState();
  renderPage();
  toast(t('toast.likesReset'));
}

function attachEvents() {
  document.addEventListener('click', (e) => {
    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;
    const action = actionEl.dataset.action;
    const id = actionEl.dataset.id;

    if (action === 'play-sound') playSound(id);
    else if (action === 'download-sound') downloadSound(id);
    else if (action === 'toggle-favorite') toggleFavorite(id);
    else if (action === 'like-sound') toggleLike(id);
    else if (action === 'filter-category') { state.category = actionEl.dataset.category; renderPage(); }
    else if (action === 'download-all') downloadAllSounds();
    else if (action === 'simulate-upload') simulateUpload();
    else if (action === 'start-haircut') startHaircut();
    else if (action === 'stop-haircut') stopHaircut();
    else if (action === 'start-fake-call') startFakeCall();
    else if (action === 'answer-call') answerCall();
    else if (action === 'close-overlay') closeOverlay();
    else if (action === 'activate-ghost') activateGhostMode();
    else if (action === 'activate-panic') activatePanicMode();
    else if (action === 'activate-party') activatePartyMode();
    else if (action === 'reaction-start') startReactionGame();
    else if (action === 'reaction-press') pressReactionGame();
    else if (action === 'laugh-start') startLaughChallenge();
    else if (action === 'laugh-survived') survivedLaugh();
    else if (action === 'reset-favorites') resetFavorites();
    else if (action === 'reset-likes') resetLikes();
    else if (action === 'switch-lang') setLanguage(actionEl.dataset.lang);
  });

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) langToggle.addEventListener('click', () => setLanguage(state.lang === 'ar' ? 'en' : 'ar'));
}

function showSplashThenHide() {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;
  setTimeout(() => splash.classList.add('hidden'), 1100);
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register(`${BASE}/sw.js`).catch(() => {});
  }
}

function init() {
  document.body.classList.add(IS_SUBPAGE ? 'subpage' : 'rootpage');
  hydrateShell();
  attachEvents();
  renderPage();
  showSplashThenHide();
  registerServiceWorker();
}

document.addEventListener('DOMContentLoaded', init);
