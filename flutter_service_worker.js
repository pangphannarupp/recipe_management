'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "294792bd1833bb96416c52e3ee556f42",
".git/config": "c9101801f7c2f1730405ffedb0c3f967",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "20b232c78d5ed3c9192e9c68f75fdca8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ae6f786d2c652d3fedfd1e8ba263e8c9",
".git/logs/refs/heads/main": "c90d9f9093b773dd52ec4efd31287050",
".git/logs/refs/remotes/origin/main": "4a85c5f5956c26c49009cf3c4ac2d792",
".git/objects/06/859d82a40a384cfcb08e6b92afcfec3a35eb1c": "d30f02fac4bfbd3fd41d3871d71f46c5",
".git/objects/06/b8fc7d21fe65bc10e0f9a878ae3f409613b977": "66f73c7d85579781d4497754b656e29e",
".git/objects/10/aa20b5b6364ae4f80a1e959cb61d448ea63d2b": "30ceb07424d53ba68ea1634c8a2cd81e",
".git/objects/19/05d5f1930527a9a66caa56849fff985bfabc76": "01054c09002fa6144e62bbede0acbc0b",
".git/objects/19/95a727c188445b8c4e145f5fe083618cf84420": "e6fc209ca2805f066034e1a7f3a3dbd8",
".git/objects/1d/18fff7545b6badeb0eeac8810a84af1e9c7f14": "05e365e463fdaea9a586447e0105519d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/01756717fb786166a6ecdc85e8f6a53ebf7f8f": "76a4991b10d62aeff5be5a9b23e30066",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/2b/710aa305c9ba7fb319dcbb012c64e910426c77": "330a32d7c094b0a21adcfb49f3f581b4",
".git/objects/2b/86cba5edbd2b64dacfd56ead855c0fd937b5c3": "e3cbab1265a2e9a5b0a59096d4574690",
".git/objects/30/04bcdd6534a5876aca16d48c7b16778c8b353d": "da80fe9bdc00753837b2a67f0b5b055e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/11ad30feda759dd17ddf82eac6f0ac011c63e1": "b2ef9e4ad74aed37e464385fb3ea1d16",
".git/objects/40/b203082895ff304978af0f3527639f90c2a29b": "09e1b37e78d2bc006acbd9d8cee1b8a0",
".git/objects/43/39d009bf83616fe2d05ba145680a6314363d29": "ca9f3c3d35afff409f455b9af89c06b6",
".git/objects/43/c407d4684edb2180811939a97b1b9b5363353a": "53d39607fdf5f4a763d2a0c6594f666e",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/49/7fda51705919bd6ebcc12b946ba8b52a8a3c3b": "c440f56fa9df31c69bf7c566a921e42f",
".git/objects/4b/6f4ea3064c9adcabae06f96fb3f7e5167774ac": "da612c0fb6f31ed4362d935fcd4a8115",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/a5e469a790c952b64d91e2e73624d0c20256ef": "549b96103395e394ef36263a8c03f75c",
".git/objects/4f/047db9a0e2df65099bbd7173951f3c80b7129e": "dd215cce10edebcd47a1554f1b98cd31",
".git/objects/51/c843efadfbc20e22ed1c94748c29c336297495": "5bf96fefb1073d59abe39f2dfa618725",
".git/objects/5c/688be9ac5d364a5fcf860cd2adc2531f94a67b": "36e2f8bacc8a869043a47daa487339ac",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/6afc9ad94715899ef7837283a94a031c905942": "b2165db9ec3190800ab1304729d8b6dc",
".git/objects/64/194bb349070cc0588eaa38697803d7372fad53": "dc494af5e98d2dede2e6c9f012cec36c",
".git/objects/64/ef84c145cf08f0aa62e6d7c0bfb1f3a4793da9": "7539ad00be877f89cb3f0d65fa8b4184",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6c/4f2283814188010cb43f4070cf9a4ab498ee5e": "e4976d361de40c003355e560ab2843a3",
".git/objects/77/54b22438ef9e6ba79250fa17c9a537a65d6bfd": "43a3ea1da5af04775f7940f25cb47cb9",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/29656fb88beae89d5ce8ed751ac5f6c16ad234": "9eb3d72b797916e47fd385b67bbb6acb",
".git/objects/83/fb838629d7132ac66337c8746cc948b914746a": "8d1fd61c2ab18c98b4d62ddef36a277b",
".git/objects/85/06ac132b36bdc1ce3aae018e230bf588a25e28": "678b52249bf0c2253009ec70a868562c",
".git/objects/85/6154d1605bdebc9d342448f91b46b7d48a53fe": "f70d7f9373c8a1af92f6f17140426a9a",
".git/objects/85/d16d3a2f0c3b622cebd699157a1b429d7ed265": "172153335917a65ee27c0e558ff38b53",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8461f3617142366e949339779da3ca652f60c6": "17998a2205c4ee64d8a642eae06d7e0f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9a/02bc6d2a62b235485000b02fd03fa1b92498c2": "7ec2f0ce62219c8c7795cbe73c806e4b",
".git/objects/9d/02ab11d2e4a840b72b96d9eecc0c61fd2f0d47": "f66e7c56f1c092d0c0eedaa5ca6fc0bb",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/c8dff56da0a696ab53892a8002a5179684a756": "91ab98d4d7f0a1a6c188866849994210",
".git/objects/a3/6c61c813bb29087828baf3fc774a367c4a1256": "a24a62feb0e3edde4ae8401113b5aeac",
".git/objects/a6/d02c166c22698e6549deba59294f4e756f2c13": "6e493d800516c9877fea16f2ff4067f4",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/1b5d73870f8355e8dc6952369c0b4efbe87556": "4a448d20ede514a897f25b555bedd457",
".git/objects/ae/c2caf8f302b4f658a7207c0665f30e1f2b3e6d": "5b7f63d4321915d42368dd3d84c0bdfb",
".git/objects/af/0592c0108208ffa92ef40a2d6c286fb7bf92cf": "d6f4604ba9dd1bea3063c01fb4082bee",
".git/objects/b0/614034ad3a95e4ae9f53c2b015eeb3e8d68bde": "7ac75a1205d6369de21c8c4b5e901c5f",
".git/objects/b1/d926868e5901dd9ddf92f4d570fc2cb38b0326": "51498ebd58c41a78d737ebfa01d77bff",
".git/objects/b6/2f657f1263a30d83b88b2f3a1a3b662f204b43": "0fae779244d32767cfd000066ba4e98c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a8c3716484b1aa7be6a3b176e0204312deb94b": "261d88342880f828f1427a1cb856cbf9",
".git/objects/bb/867e166af074217eb8f33ffeba580f06da93ef": "53af677fd18ed2f5c462c38d0baca613",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/c4/43462a1d5b31e1f466841de8a5051cef0eb74a": "60c63675cf6d5635746f25afec07ed55",
".git/objects/c7/80f5feb808d22c33e2956c4975f86f4a077aa7": "3ba96cac9befa121cc360cd5127ba3c4",
".git/objects/cc/440869bc510e24cd2d2caf0cc746bc2a470cb8": "b5a41a21e0b3c74623787a5b82a42b0a",
".git/objects/ce/c7bca78188128295e360f584a1015b91d8bbea": "25e8901ca371ce88da396cee8bdd6b8f",
".git/objects/cf/0d9bdb4aa0af88589aaae3f732a9ea479ec999": "2d1160cfb60dca88d432d916e76c3848",
".git/objects/d8/e9999a07a7dc3cc4a46ff8de43b85312706fec": "2a61a7f54328c4acff2c2e7525312a71",
".git/objects/df/245f79dd7a78b06b7984319910aaa2c70ae366": "5e19b739734806946901ce00102d9654",
".git/objects/df/d4f6626b1045270b4cee325b8455c342c52d13": "bfa2df4e02ae33206558879960ceabf3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/0fe31ebb8d2e9b5e0655f019e1ad79b6ef7aa0": "df9dcebc6b6fb82cc006b236a217b77b",
".git/objects/ed/fd3f519865d75a727166795d32d941a779bc8a": "3e216d85368ec6ff09b1948be428f32e",
".git/objects/fb/0b52ff256140f0c0a4164f685a4f3daf3b63e6": "21963d8f359e8c419261e2916921e8b6",
".git/objects/fd/06b0ee653b0fa14aebd2324be3a6eb0337c22e": "e71a62e5de9cf5be8292776151665a8d",
".git/objects/fd/1255625c341c70a4200b6de5aeb9e149bf72a4": "f8687dd6d55fb06b8bdbcf380f9eeef8",
".git/objects/fe/4cd0eb5ddbb3240fc8d6760b4b5e5aa6370ac8": "a90d7186ba7bacfc949f21b069e8356c",
".git/refs/heads/main": "197661b3f9a960975e5d54e02055c402",
".git/refs/remotes/origin/main": "197661b3f9a960975e5d54e02055c402",
"assets/AssetManifest.json": "2e70c9e8cf7f1f5a0136e0fe0205b524",
"assets/assets/fonts/KHMMOOL1.ttf": "2bdfb26ca7c50733b046a58739fce996",
"assets/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Siemreap.ttf": "01a09003da4063952afa7734f4f393af",
"assets/assets/images/example.png": "9e718c6394ea643b9c3659c45eb4b60f",
"assets/assets/images/facebook.jpg": "e78b8801fec15b36530841424b13057d",
"assets/assets/images/flag-english.png": "7329dc1b4637cffb56a1c3033f18778b",
"assets/assets/images/flag-khmer.png": "948a0fe85ddd04f3dd1309a7a483738d",
"assets/assets/images/google.jpg": "d0991539b51f1520c42d1dee04ba0faa",
"assets/assets/images/icon.png": "fbfe90f885ce28edfa37961b85f24eca",
"assets/assets/images/image-not-found.png": "0de1b5aaad52d2881b6c20a5102cfe5d",
"assets/FontManifest.json": "450e14af9f5ddc3a81ed2947b3f61d65",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "dd0906c6190a011520927738e1552868",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "dc5e7f18c8d36ac1d3d4753a87c98d0a",
"assets/packages/html_editor_enhanced/assets/plugins/additional-text-tags/summernote-add-text-tags.css": "de07ab5a4d56bb952997e73f70293fd3",
"assets/packages/html_editor_enhanced/assets/plugins/additional-text-tags/summernote-add-text-tags.js": "92b9bdd6bf477b2b5f6a9dcc3548c360",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/bundle.js": "58a2dc285852219a0370ef62a80c899d",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-case-converter/summernote-case-converter.js": "436223c547bc8fe220f58da03e27bdcc",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-codewrapper/summernote-ext-codewrapper.min.js": "fcee96125f8310c1ebe51d06f7ab761e",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-emoji/summernote-ext-emoji-ajax.css": "fcd1d224545428dad2f684887738724d",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-emoji/summernote-ext-emoji-ajax.js": "841136db7b3fe2db4db070e06769d674",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-file/summernote-file.js": "7c0b9373a106ecbe66ddbe8650065f74",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-list-styles/summernote-list-styles.css": "af3d39f54c88336cfec859e9aee90fea",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-list-styles/summernote-list-styles.js": "0ea0e9e9a5474573e1b133bab3fd39b1",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-rtl/summernote-ext-rtl.js": "3e921472369ed4d53776cea3e3047238",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "e43795ac694ce873fd375cadc044e996",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "4f81344100a4f8b701e0fd05c19f50d1",
"assets/packages/html_editor_enhanced/assets/summernote.html": "3c30a7f2fb5d81cc589e611ebe67d99b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "95220e4b872c2877515e56afce56cb1c",
"/": "95220e4b872c2877515e56afce56cb1c",
"main.dart.js": "61dd001536d5c98b4d160ded3b8f8c7b",
"manifest.json": "881ca1499774a6b54e67b090a8f80d55",
"version.json": "d8dda4381dc786535616f7854f9426db"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
