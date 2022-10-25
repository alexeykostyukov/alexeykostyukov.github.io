'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "837b3047393cb4e4027f3eb9a06baa99",
"assets/assets/fonts/Comfortaa/Comfortaa-Bold.ttf": "2df2dd0ee326686649aadb345e25c32c",
"assets/assets/fonts/Comfortaa/Comfortaa-Light.ttf": "a32b6e45c316fd976351f29fedd25de8",
"assets/assets/fonts/Comfortaa/Comfortaa-Medium.ttf": "cca5f204199167bb2048b1550d4bba8e",
"assets/assets/fonts/Comfortaa/Comfortaa-Regular.ttf": "26795cfa08319b4e939b9c26dfc59311",
"assets/assets/fonts/Comfortaa/Comfortaa-SemiBold.ttf": "170d22d9ab52b04a17ac34a3935815e6",
"assets/assets/fonts/Exo_2/Exo2-Bold.ttf": "5d4f587039304fcdaaac13d16d26fda2",
"assets/assets/fonts/Exo_2/Exo2-Italic.ttf": "c4751bb388a9d0d242eb25b4b802e3e2",
"assets/assets/fonts/Exo_2/Exo2-Regular.ttf": "d1a552c4d4489fe0ed010009ef192da7",
"assets/assets/fonts/Lobster/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/assets/problems/1/1.json": "81bda3a199971b61a816f4ea15e03766",
"assets/assets/problems/1/1.jsonbuilder.rtf.sb-9ee92644-JysQ0P": "e88091202ab4a566207c75ef24171635",
"assets/assets/problems/1/1.jsonbuilder.txt": "24f7c2ba8e4903eeac49204caed7ff70",
"assets/assets/problems/1/sol1_1_1.svg": "84c3c14ff8941909dd2912114f708791",
"assets/assets/problems/1/some.json": "02a727f2af4d077b1e1b602ddae67b03",
"assets/assets/problems/10/10.json": "b6d79e36ce7fa49c76e3f2f251b117b3",
"assets/assets/problems/10/10.jsonbuilder.txt": "7b21b3329fe3bca17d7ae72d247b4ab3",
"assets/assets/problems/10/10bkp.svg": "352e8d71a3b9a626ffd5f704f99c7a70",
"assets/assets/problems/10/10_1_1.svg": "a54437638aa722277a56d516042588a4",
"assets/assets/problems/11/11.json": "284553ce737464cc541f3e5ffb5a3128",
"assets/assets/problems/11/11.jsonbuilder.txt": "dcc00b93c0dd360f7e157f3e6d575517",
"assets/assets/problems/12/12.json": "eac77161a14557f7807582f71cf0aa1f",
"assets/assets/problems/12/12.jsonbuilder.txt": "4e174f049f5e55705a9cb541dba2fb4a",
"assets/assets/problems/12/12_1.svg": "f6e1c0f4e30fdb8c92755f19b1eb1374",
"assets/assets/problems/13/13.json": "03ee0784ae3ec4e6ecafb9813cc718c9",
"assets/assets/problems/13/13.jsonbuilder.txt": "4bc5f67db028df6571af839d172509d8",
"assets/assets/problems/13/sol13_1.svg": "343de4adfcf2e1ec68a60bb5862f243f",
"assets/assets/problems/14/14.json": "bc689c67d8b6786ebb93a8731b8ba9c9",
"assets/assets/problems/14/14.jsonbuilder.txt": "cd500afd761bf9b28c309e744fa13e77",
"assets/assets/problems/14/sol14_1.svg": "f8e96cf90f80aa18f581b00bfa167681",
"assets/assets/problems/15/15.json": "749e9b1cd52ee46c54fff25d5027e1ea",
"assets/assets/problems/15/15_1.jsonbuilder.txt": "d7b14e276c4c7a990a8a6e0ba163ce18",
"assets/assets/problems/15/15_1.svg": "0fdb04472ff45ddc49b8640460fdcd7f",
"assets/assets/problems/16/16.json": "85a5b1b5ef696a91e38d3c8129db3edd",
"assets/assets/problems/16/16.jsonbuilder.txt": "1dd3c3c17c5eccefcafe2dd840661ae4",
"assets/assets/problems/16/sol16_1.svg": "4633afa2b12d5237e8b4d0b708e95437",
"assets/assets/problems/17/17.json": "908a2a81130dc5b760fcf15f2d284e01",
"assets/assets/problems/17/17.jsonbuilder.txt": "71a60de48538989adab5399233fb8928",
"assets/assets/problems/17/17bkp.jsonbuilder.txt": "f38598701c681dd6b2e64ac890e0fa4f",
"assets/assets/problems/17/sol17_1.svg": "123eef6b5acd22bb8503fd76758b913c",
"assets/assets/problems/18/18.json": "5a1610feb1d222e24e397556c1048ca6",
"assets/assets/problems/18/18.jsonbuilder.txt": "4182da12090e54ecb54a6d2a7f84ae26",
"assets/assets/problems/2/2.json": "a575b53c06c5ba61fa3361d4afdaec43",
"assets/assets/problems/2/2.jsonbuilder.txt": "143fd2cabf248b3b9b27f147274a0ea4",
"assets/assets/problems/2/prob2_1_1.svg": "6b8ee1084872b124ca6a352d9da86b23",
"assets/assets/problems/3/3.json": "c305e1012c0240118205b6c1d4cb8bd5",
"assets/assets/problems/3/3.jsonbuilder.txt": "1ab05be92511a835d147952e014a74c8",
"assets/assets/problems/4/4.json": "5fbf3fda70ec2e66594f24c9f098dfd9",
"assets/assets/problems/4/4.jsonbuilder.txt": "07e99e7f3493993ed023231f61b14e58",
"assets/assets/problems/5/5.json": "f87c2b5b3070c37968e6f57c3c1090da",
"assets/assets/problems/5/5.jsonbuilder.rtf": "a9df492dabe25cc42226ece8fcd839e2",
"assets/assets/problems/6/6.json": "9171e5fd3db6fc1aa6dd0e63bc486b91",
"assets/assets/problems/6/6.jsonbuilder.txt": "addba50866cc82985697c2ca1d9303b2",
"assets/assets/problems/7/7.json": "621e7f5fd72a3b7116876c8afb912e55",
"assets/assets/problems/7/7.jsonbuilder.txt": "f432dadc2f63c0ca6429cd2f86175572",
"assets/assets/problems/7/7bkp.svg": "1296ab3d13150f4f14f02d6bd01b5112",
"assets/assets/problems/7/7_1_1.svg": "99d28c6636cdb72c1a668bd30e42eb2f",
"assets/assets/problems/8/8.json": "e8261baaff8ffcbe57185d50bfb1060c",
"assets/assets/problems/8/8.jsonbuilder.txt": "8083b348da3f982ab007a807b487fd3a",
"assets/assets/problems/9/9.json": "0ba152fb9363a6b6e79c947e0501a7e8",
"assets/assets/problems/9/9.jsonbuilder.txt": "0583fd7caeae57f3c23176538d8a9689",
"assets/assets/rive_animations/basketball.riv": "eb582fe8f21bb790c0d4ed2a6fd8bae7",
"assets/FontManifest.json": "c867fe35630a06df0404d3a548159d6d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "974e5f573a1e1b1400b5471cf9ceeea4",
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
"index.html": "c43babc8779b8c185bc2f499c86b9582",
"/": "c43babc8779b8c185bc2f499c86b9582",
"main.dart.js": "62717184a4ad4211c401a33d56f1055a",
"manifest.json": "d8ab3615a247bcda06d10bca7758623e",
"version.json": "5fba043c580be7b0c61fbba6dafe872c"
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
