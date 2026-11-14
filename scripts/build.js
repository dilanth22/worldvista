import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
for(const f of ['index.html','styles.css','app.js','countries.json','_headers'])await copyFile(f,`dist/${f}`);
console.log('Cloudflare Pages output prepared: dist/');
