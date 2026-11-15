import test from 'node:test';import assert from 'node:assert/strict';import{readFileSync}from'node:fs';
const read=(f)=>readFileSync(new URL('../'+f,import.meta.url),'utf8');
test('includes 200+ unique countries with ISO codes',()=>{const c=JSON.parse(read('countries.json'));assert.ok(c.length>=200);assert.equal(new Set(c.map(x=>x.code)).size,c.length)});
test('HTML has destination selector and modal',()=>{const h=read('index.html');for(const id of ['countrySearch','regionFilter','placesGrid','modal','modalClose'])assert.ok(h.includes(`id="${id}"`))});
test('Wikipedia and Wikidata integrations do not embed credentials',()=>{const s=read('app.js');assert.ok(s.includes("origin:'*'"));assert.ok(s.includes('en.wikipedia.org'));assert.ok(!s.includes('api_key='))});
test('Cloudflare security headers present',()=>{const h=read('_headers');assert.ok(h.includes('Content-Security-Policy'));assert.ok(h.includes('X-Content-Type-Options'))});
