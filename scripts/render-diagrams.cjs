const fs = require('fs');
const path = require('path');
const puppeteer = require(process.env.PUPPETEER_MODULE || 'puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({executablePath:process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless:true});
  try {
  const page = await browser.newPage();
  await page.setViewport({width:1600,height:900,deviceScaleFactor:1});
  const dir=path.resolve(__dirname, '../diagrams');
  for (const file of fs.readdirSync(dir).filter(f=>f.endsWith('.svg'))) {
    await page.setContent('<html><head><style>html,body{margin:0;padding:0}</style></head><body>'+fs.readFileSync(path.join(dir,file),'utf8')+'</body></html>');
    await page.evaluate(()=>document.fonts.ready);
    const fonts=await page.evaluate(()=>Array.from(document.fonts).map(f=>({family:f.family,status:f.status})));
    if (!fonts.some(f=>f.family==='Inter'&&f.status==='loaded')) throw new Error('Inter not loaded in '+file);
    await page.screenshot({path:path.join(dir,file.replace(/\.svg$/,'.png'))});
    console.log(file+': Inter loaded; PNG exported');
  }
  } finally {
    await browser.close();
  }
})().catch(e=>{console.error(e);process.exit(1)});
