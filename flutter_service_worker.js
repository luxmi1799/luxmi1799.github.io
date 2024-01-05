'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "1ac57eb0214a8f5216f1da7dd479b33f",
"index.html": "f7b4b3a704d3e502662d4b9bab336975",
"/": "f7b4b3a704d3e502662d4b9bab336975",
"main.dart.js": "7056efd5c32441f11152bb7f5c16f962",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "46f9fb764c7fbc77358050176d495ad2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "14533758d5adebb52c270151b0335f00",
".git/config": "e4ffc59a888867f71230197b6b94414f",
".git/objects/95/9ab5c09e25cd9a52c454c27e9f6c69f42be579": "960d93ceed855d1e56be7f536d5f71d4",
".git/objects/59/eb585f4150284b1f46927f3aa32b968f11a763": "2cd016343da3b02e66071146c9702ea7",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/6d61088f1645d6c9b21aead0aa57e2269291d2": "115b77423e3ff3a497bd46d07641017b",
".git/objects/9b/9acd64591239d3d315258cfc41aca8f997fce3": "d13c20e0e8158d3e869d21aae4e06200",
".git/objects/04/bec0f5cc047486b43b0bb7e7f1e82a844d0977": "51b15e6cacf7415b362b6f3f1aaabda3",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/ad3387e6aeec70021ea00636b3b0d664f0994e": "28fd15a659d4efe92fa6d62bdf5f03a5",
".git/objects/94/f6313fdb62d882d3967140b1619d9614df4d65": "b35dbefa84b975e346a96601b03f9b77",
".git/objects/5a/d6f64eeb5d9bfb2f197e0c22a667028ef3d2b3": "ccdeeba1f4c09cd7641e7150f7d2dd54",
".git/objects/5f/8199d435b22e47e592d52a601571c82dbf3d87": "db7b94a5ab3e2cbe64c6488dfec12ec9",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b2/20036c3553a23e89a12510f824eb2875953c5d": "a9cd8ff5fc172c1a1e2b0fde55fcc4c2",
".git/objects/ad/89f68c3dd1305db5472aa11985852d6d342c5f": "892f9c2423ec0d3539b7273524257192",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/c64f8094a3710128374a84b0501e6da0594b03": "893e1dc90eb334781c8b2e66d6a4e9f2",
".git/objects/d0/3d820294e4edaa118e7ac5df3b915be143c77f": "857d42d122aa7d051d539295f2ef0f2b",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d1/c6fe147b54e535ce49bb363347512db1e03114": "86d1df6f15eccdcdd34913e1b20e7103",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/5f4f4e40256fe573d49e20e6485a5b30c74978": "7074ff01fa7dbb513aad14a33611c48a",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/c7/742122e334357b594c34205623ca16fcc5acee": "4637bcbc7b65566f4d815cb2168a7c86",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/0c3bb740b5d203ff1e0f3e611a92a2e09ef819": "3128a9d8402247db49d6444d1912adbf",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/591a2004eaf61f30b5f474e15b89ac01c90700": "a8c0abce8a87073ac9e8ba433aeaea0c",
".git/objects/7c/9c1b86fd54a91376a39fac00d12d63831596c0": "e76f03904334fcf7f70decb3ea4e5fd2",
".git/objects/1f/232c6b935056830efc239d2d2ef04a4e7cf1d7": "62c361bda03b6b055dc4c9f52851f5fc",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/87/aabd9188073716ca82201bc446da6d97c0f9b4": "32526aaf0b3106ab566e82c9cc2b5943",
".git/objects/1a/3f5274755b3c0e2398dd501a02a6648f2aa10f": "e8eb8dca9da3c786557c1192a6d97301",
".git/objects/17/3f91e88bdf99ed9b3b5548dae7227523a74c8a": "893bac006bb574cb65490ea711e699fe",
".git/objects/7b/21aa739c110272d8aae7abce6c3bf5a4781032": "b60dbf2084693a593407962e8206af15",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/21/74e9d39ccf1e97777de9f802238494286062b8": "fd341120e0edceb8a30e8ed10a1e0ca3",
".git/objects/81/7ad370aada6321d17ca33d4a58b404bf36ff00": "b996cde2f5ca6ea279f0d860f32ad4a7",
".git/objects/44/a3df724570c259ab9a175a0c35c46c10ff3783": "421d19c237d65a11caffb3c800ab0103",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/0028ad4aaa418897d0a79ac219327608426a43": "9e99522c6a402a2897a267294499dee1",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/69d21cd07dd271eee4e4e3124fafd63f3278aa": "ca9918452c59d11738a00b989d2e3cc7",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/f2d216696b37c39462dc39bc2a62a2f1c86da2": "691c3e0c0534dd145cd183d410cc5de5",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6c/6e1903e64b8732d0abac216cf43f4d721a3fe5": "426672eab7ae8a98d647280445727fdc",
".git/objects/39/4ba8cd094d785a7c8956636f011bbaf0d7ee5c": "f959f23af6b4ce1a5d739708a14635c1",
".git/objects/52/37db1b26c9847ace99646d7292b8ddf25ed98d": "7a6fd8f3f0d41afa7cddc68ae440dc00",
".git/objects/0a/42ba7823bf038d51a46a8b50ba6f24f1d2ad26": "abfd559baf6f7ba18124c57bf7e4754e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/b1/dd85360386fc7c8fd6427bde548019d47139b8": "04a56651805a632a0cb4aaece1c587b1",
".git/objects/a9/5846ac5f24a0e8c858bf2e72f8de6b47961cfd": "2191149297a35485e72d7a1637084e60",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/a3364c234ad144bd663c3b761dd03215935ef6": "f143b42e76e94a0533d290eaa83d106c",
".git/objects/a6/441fcd8ec2db70b9e06e87ef95eecf34e563e9": "f77b9b228ce7d4f2d5d0d2cf26c62d71",
".git/objects/a1/afb4eb5f32825e02cc3bb8471a1b94105e916b": "c65cce0b8ed00010d076dbef2e7c087f",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f7/e06c1179224d17a321e63d66ccabf83571a23d": "d315a57d6aea11c86e008581f77ed95b",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c5/ac233b43e3200af70308f4a635dff57e014e44": "6f21f3eba5fa191d161bf2ebf5a9ae64",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/f6/3442940db5999f8035d5bb2358de4f2f88fe7f": "5dea5547936771f5a73ba86a354d59c2",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/07d3362cbea886788fa1efc38686d9366eb1e4": "193bfae39cd3cbd4dcf4b2f552a8dd5f",
".git/objects/ce/76b988c8366991bb8032b9127b674194794d39": "d06d9b2036840d4d9d07dae8dfffc3ba",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/92975f4918a7d648412142566460f6999f80a8": "2a9d2304d2f39c86f5b5fdd3388fe4d2",
".git/objects/41/b5004f22af3dd6204744215a4c5c4c449d0c9b": "87181c3e2218e70dbef37f576b3da409",
".git/objects/1b/2472429d0dd9366fff19bdaf7ba290469d23ef": "99c1cab724ce618d5011e600269286e1",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4f/6d9b06be072d56adfb6f17042444d50278fbf0": "466da38ca8fbbc8386220e475c80d223",
".git/objects/8d/53d8ef6d2a12841af70a9d3785e0af659b670b": "641b52a0135cb48311c9b8794ef74aa8",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1c/fdd80a9cea4174df7de04b0c1a693c2ad6a4ab": "eaa7f42f79d64b986d027e7c7fe65c3c",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/2e/a2c10fd18e9a23089c318cf22652a32b065440": "21885690661256e3270a5ea3ad63e5c4",
".git/objects/78/8e441a1f7ec1f2d0cf12803c836fc76eabd226": "d47a42639ceddc50077a2672456dbeba",
".git/objects/7a/41a1fd730aecced3d22cc84ab9c6b504349f35": "762fa8a6d5407222af906f45c28bff58",
".git/objects/14/2a764c3d3bb29ce9d3bcfa8c3b6d97a1476a65": "403f22d1632cba254455a3e825573096",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "14c435e8f326695fa527a58824ea149a",
".git/logs/refs/heads/main": "5d1e7f201ca5d294c21a5424a75ea968",
".git/logs/refs/remotes/origin/main": "27384344ce2381cccd3e9513062f2835",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "84ae8a43f61bb8dc1e456067005fb0d2",
".git/refs/remotes/origin/main": "609c3f8f81759a796ec9f24101d1f293",
".git/index": "48414dc2ea3a9290b8232df9176b28ba",
".git/COMMIT_EDITMSG": "bb77460f4cbee3a9ef441e54d213fbea",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "2fe476463ff8f87907ccbc80df199c5e",
"assets/NOTICES": "92701b03078885a4e54d8831466208f5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "f7f4391ef9fb15d0bd552df144bae8b9",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/imgp.png": "e44fc2d83260ba35c39203596f81df56",
"assets/assets/images/bcg.jpeg": "af450bec47c1fd478dbca8fd50ed5c1b",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
