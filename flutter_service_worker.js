'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "59987e2b175dd4c28745734650ee0b95",
"assets/assets/fonts/Comfortaa/Comfortaa-Bold.ttf": "2df2dd0ee326686649aadb345e25c32c",
"assets/assets/fonts/Comfortaa/Comfortaa-Light.ttf": "a32b6e45c316fd976351f29fedd25de8",
"assets/assets/fonts/Comfortaa/Comfortaa-Medium.ttf": "cca5f204199167bb2048b1550d4bba8e",
"assets/assets/fonts/Comfortaa/Comfortaa-Regular.ttf": "26795cfa08319b4e939b9c26dfc59311",
"assets/assets/fonts/Comfortaa/Comfortaa-SemiBold.ttf": "170d22d9ab52b04a17ac34a3935815e6",
"assets/assets/fonts/Exo_2/Exo2-Bold.ttf": "5d4f587039304fcdaaac13d16d26fda2",
"assets/assets/fonts/Exo_2/Exo2-Italic.ttf": "c4751bb388a9d0d242eb25b4b802e3e2",
"assets/assets/fonts/Exo_2/Exo2-Regular.ttf": "d1a552c4d4489fe0ed010009ef192da7",
"assets/assets/fonts/Lobster/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/problems/1/1.json": "c4d12a4818bf1da36f846c17bdff3061",
"assets/assets/problems/1/1.jsonbuilder.txt": "e18215965da3a4a0623613a0b3b62483",
"assets/assets/problems/1/sol1_1_1.svg": "43781e854de4671e356edb5fcb12cec0",
"assets/assets/problems/10/10.json": "c08bd20d06caf45c2a1e1195a92dca8f",
"assets/assets/problems/10/10.jsonbuilder.txt": "0e9df697908ca6d0f0a801c687a7a54a",
"assets/assets/problems/10/10.svg": "352e8d71a3b9a626ffd5f704f99c7a70",
"assets/assets/problems/11/11.json": "1702110319fc86f3df1366c37f339eff",
"assets/assets/problems/11/11.jsonbuilder.txt": "2209365ad31b639d77fe3ef6d68b3d2e",
"assets/assets/problems/2/2.json": "91faea85219188191d0203d59ff89c10",
"assets/assets/problems/2/2.jsonbuilder.txt": "81c0b5d32272f447ebebb054cdbea4a4",
"assets/assets/problems/2/prob2_1_1.svg": "b818901aaba46dcc8c935bf595589752",
"assets/assets/problems/3/3.json": "4f88aa0d93b5ced250bf84c062e4f27b",
"assets/assets/problems/3/3.jsonbuilder.txt": "671470b648483f8a2ac387132192847a",
"assets/assets/problems/4/4.json": "7a0fbc6c4e13ada7e5574ceeec1960c9",
"assets/assets/problems/4/4.jsonbuilder.txt": "0af32263dd62793feabd7de73f21c38b",
"assets/assets/problems/5/5.json": "ffda5eecc247491573909fce3f4845be",
"assets/assets/problems/5/5.jsonbuilder.rtf": "07e2b018b74a5fc47f2299b2ab5f1516",
"assets/assets/problems/6/6.json": "caf3bde0becc9f56b75ac0df6328d22f",
"assets/assets/problems/6/6.jsonbuilder.txt": "64d8bc2ddce704ae040d1f6c21201322",
"assets/assets/problems/7/7.json": "8f9b2c33abf399ff9158fc0bfb1549b4",
"assets/assets/problems/7/7.jsonbuilder.txt": "3b3b3f530fb8c40afc12d9f010b657f1",
"assets/assets/problems/7/7.svg": "1296ab3d13150f4f14f02d6bd01b5112",
"assets/assets/problems/8/8.json": "44ebe124429428cc681291050b0d1360",
"assets/assets/problems/8/8.jsonbuilder.txt": "9147c47612d4b268b719df8ba078a85f",
"assets/assets/problems/9/9.json": "903828f5e399d976815096d207a6a3b7",
"assets/assets/problems/9/9.jsonbuilder.txt": "c10ed359cb4f439ea0e29565967bd0e1",
"assets/assets/rive_animations/basketball.riv": "eb582fe8f21bb790c0d4ed2a6fd8bae7",
"assets/FontManifest.json": "c867fe35630a06df0404d3a548159d6d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "90646c6a862f57dc504f344ac82fbba6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/math_keyboard/fonts/CustomKeyIcons.ttf": "b0bace3f25c2bd05862680e5ad4c6b54",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d0636fc00a3e46814b71ba8da0e3bb6e",
"/": "d0636fc00a3e46814b71ba8da0e3bb6e",
"main.dart.js": "628bf1cf7928509aecc6184a34f5c2e4",
"manifest.json": "d8ab3615a247bcda06d10bca7758623e",
"version.json": "103fc98e4108aec1b9d9e2de13957119"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
