const CACHE_NAME = 'yezi3ad-v1';
const APP_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './lang.js',
  './manifest.webmanifest',
  './assets/icons/logo.svg',
  './assets/icons/favicon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/images/hero-bg.png',
  './assets/images/phone-mock.png',
  './pages/home.html',
  './pages/categories.html',
  './pages/prank.html',
  './pages/favorites.html',
  './pages/profile.html',
  './assets/sounds/haircut_1.mp3',
  './assets/sounds/haircut_2.mp3',
  './assets/sounds/haircut_3.mp3',
  './assets/sounds/fart_1.mp3',
  './assets/sounds/fart_2.mp3',
  './assets/sounds/fart_3.mp3',
  './assets/sounds/siren.mp3',
  './assets/sounds/doorbell.mp3',
  './assets/sounds/mosquito.mp3',
  './assets/sounds/ghost.mp3',
  './assets/sounds/battery_low.mp3',
  './assets/sounds/phone_vibration.mp3',
  './assets/sounds/yezi_3ad.mp3',
  './assets/sounds/barra_rawah.mp3',
  './assets/sounds/chbik_labik.mp3',
  './assets/sounds/hawk_jak_dour.mp3',
  './assets/sounds/aaychek_idhak.mp3',
  './assets/sounds/ya_salam.mp3',
  './assets/sounds/la_mustahil.mp3',
  './assets/sounds/khalas_habibi.mp3',
  './assets/sounds/meen_elli.mp3',
  './assets/sounds/ehda_shwaya.mp3',
  './assets/sounds/zag_tn_normal.mp3',
  './assets/sounds/zag_tn_party.mp3',
  './assets/sounds/zag_tn_echo.mp3',
  './assets/sounds/zag_dz_normal.mp3',
  './assets/sounds/zag_dz_party.mp3',
  './assets/sounds/zag_dz_echo.mp3',
  './assets/sounds/zag_ma_normal.mp3',
  './assets/sounds/zag_ma_party.mp3',
  './assets/sounds/zag_ma_echo.mp3',
  './assets/sounds/zag_eg_normal.mp3',
  './assets/sounds/zag_eg_party.mp3',
  './assets/sounds/zag_eg_echo.mp3',
  './assets/sounds/cafe.mp3',
  './assets/sounds/wedding.mp3',
  './assets/sounds/street.mp3',
  './assets/sounds/school.mp3',
  './assets/sounds/nokia.mp3',
  './assets/sounds/samsung_old.mp3',
  './assets/sounds/sms_retro.mp3',
  './assets/sounds/keypad_typing.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const cloned = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
