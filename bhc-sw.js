// Conținutul echipei se încarcă din rețea după autentificare.
self.addEventListener('fetch', event => {
  if (event.request.mode !== 'navigate') return;
  const url = new URL(event.request.url);
  if (url.href.split('?')[0] !== new URL('BHC_Race_HQ_2027.html', self.registration.scope).href) return;
  event.respondWith(fetch(event.request).catch(() => new Response(
    '<!doctype html><html lang="ro"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>BHC · Offline</title><main style="font:18px system-ui;padding:8vw"><h1>Conexiune întreruptă</h1><p>Reconectează telefonul pentru a accesa datele echipei.</p><a href="./BHC_Race_HQ_2027.html">Reîncearcă</a></main></html>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  )));
});
