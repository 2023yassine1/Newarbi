// service-worker.js

const CACHE_NAME = 'molino-pro-cache-v1';

// قائمة بجميع الموارد الثابتة التي يجب تخزينها مسبقاً
const urlsToCache = [
    '/',
    '/index.html',
    '/translations.js', // ملف الترجمات الخاص بك
    
    // الموارد الخارجية
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js',
    
    // Firebase SDKs
    'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js',
    'https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js',
    'https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js',
];

// حدث التثبيت (Install Event)
self.addEventListener('install', event => {
    console.log('Service Worker: Installing and Caching App Shell...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                // تخزين جميع الموارد في القائمة
                return cache.addAll(urlsToCache);
            })
            .catch(error => {
                console.error('Service Worker: Cache addAll failed:', error);
            })
    );
    self.skipWaiting(); // لتفعيل الـ SW الجديد فوراً
});

// حدث الجلب (Fetch Event) - استراتيجية Cache-First
self.addEventListener('fetch', event => {
    // نتجاهل طلبات Firebase (Realtime Database) لأنها تُعالَج بواسطة الـ SDK نفسه (Persistence)
    if (event.request.url.includes('firebaseio.com')) {
        return; 
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // إرجاع النسخة المخزنة إذا وجدت
                if (response) {
                    return response;
                }
                // وإلا، قم بطلبها من الشبكة
                return fetch(event.request);
            })
            .catch(error => {
                // يمكن إضافة صفحة أوفلاين مخصصة هنا إذا فشل جلب أي مورد غير مخزن
                console.log('Service Worker: Fetch failed; returning network or cache failure:', error);
            })
    );
});

// حدث التفعيل (Activate Event) - لتنظيف النسخ القديمة
self.addEventListener('activate', event => {
    console.log('Service Worker: Activating and cleaning old caches...');
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Service Worker: Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});
