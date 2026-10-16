import fs from 'node:fs/promises';
import sharp from 'sharp';
const root='output/strongholds-scripture-art';
const manifest=JSON.parse(await fs.readFile(root+'/prompts.json','utf8'));
for(const item of manifest){
 await fs.copyFile(item.source,`${root}/${item.name}.png`);
 const target=`public/images/strongholds/${item.name}.webp`;
 await sharp(item.source).webp({quality:88}).toFile(target);
 const metadata=await sharp(target).metadata();
 item.width=metadata.width;item.height=metadata.height;
 item.originalBytes=(await fs.stat(item.source)).size;item.optimizedBytes=(await fs.stat(target)).size;
}
await fs.writeFile(root+'/prompts.json',JSON.stringify(manifest,null,2)+'\n');
console.log(manifest.map(({name,width,height,originalBytes,optimizedBytes})=>({name,width,height,originalBytes,optimizedBytes})));
