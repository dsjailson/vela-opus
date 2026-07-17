// VELA OPUS · Service Worker mínimo
// Único propósito: satisfazer o critério de instalabilidade do Chrome/Android
// (exige um listener de 'fetch' registrado). Não faz cache agressivo de
// propósito — sempre busca a rede primeiro, para nunca servir uma versão
// desatualizada do app. Isso pode evoluir depois para suporte offline real.

self.addEventListener('install', function (event) {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fetch(event.request));
});
