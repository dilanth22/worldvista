import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const f of ['index.html','styles.css','app.js','countries.json','curated.json','_headers'])await copyFile(f,`dist/${f}`);
console.log('WorldVista V4 Cloudflare Pages build completed');
