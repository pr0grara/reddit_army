import puppeteer from 'puppeteer'

let browser = null;
let context = null;
let page = null;

export default (async (user) => {
  const username = user.username;
  const password = user.password;
  console.log(`initiating protocol for user: ${username}`);
  
  browser = await puppeteer.launch({ headless: false });
  context = await browser.createIncognitoBrowserContext(); 
  page = await context.newPage();

  page.setViewport({
    width: 1280,
    height: 800,
    isMobile: false,
  });

  await page.goto("https://www.reddit.com/login/", {
    waitUntil: "networkidle2",
  });
  
  try {
    await page.type('input[id="loginUsername"]', username, { delay: 50 });
    await page.type('input[id="loginPassword"]', password, { delay: 50 });
    await page.click('button[type="submit"]');
    return {page, browser};
  } catch (e) {
    console.log("Login Error");
  }
});


// page.on("dialog", async (dialog) => { //potentially useful later if we run into alerts, currently not an issue
//   console.log(dialog.message());
//   await dialog.dismiss();
//   // await browser.close();
// });