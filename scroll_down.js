export default (async page => {
  for (let i = 0; i < 5; i++) {
    await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
    await page.waitFor(1000);
  }
});