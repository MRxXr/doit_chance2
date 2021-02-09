const staticCacheName = 'static-cache-v1'
const dynamicCacheName = 'dynamic-cache-v0'

const staticAssets = [
    './',
    './index.html',
    './manifest.json',
    './doit_chance2.css',
    './doit_chance2.umd.js',
    './doit_chance2.common.js',
    './app.js',
    './img/icon-192x192.png',
    './img/icon-256x256.png',
    './img/icon-384x384.png',
    './img/icon-512x512.png',
    './fonts/e-Ukraine-Bold.794162f5.otf',
    './fonts/e-Ukraine-Light.99c471b1.otf',
    './fonts/e-Ukraine-Medium.1f9e434b.otf',
    './fonts/e-Ukraine-Regular.945426f5.otf',
    './fonts/e-Ukraine-Thin.4a809fad.otf',
    './fonts/e-Ukraine-UltraLight.644e48c0.otf',
];

self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName);
    await cache.addAll(staticAssets);
    console.log('Service worker has been installed');
});

self.addEventListener('activate', async event => {
    const cachesKeys = await caches.keys()
    const checkKeys = cachesKeys.map(async key => {
        if (staticCacheName !== key) {
            await caches.delete(key)
        }
    });
    await Promise.all(checkKeys)
    console.log('Service worker has been activated')
})

self.addEventListener('fetch', event => {
    console.log(`Trying to fetch ${event.request.url}`)
    event.respondWith(checkCache(event.request))
})

async function checkCache(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || checkOnline(req)
}

async function checkOnline(req) {
    const cache = await caches.open(dynamicCacheName);
    try {
        const res = await fetch(req);
        await cache.put(req, res.clone())
        return res;
    } catch (error) {
        return await cache.match(req)
    }
}
