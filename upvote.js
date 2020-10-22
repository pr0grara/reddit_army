import scrollDown from './scroll_down.js';

export default (async (usersToBoost, page) => {
  console.log(`initiating upvote protocol`)
  for (let i = 0; i < usersToBoost.length; i++) {
    await page.waitFor(5000);
    await page.goto(`https://www.reddit.com/user/${usersToBoost[i]}/posts/`);
    await page.waitFor('button[aria-label="upvote"]');
    await scrollDown(page);

    var upvotes = await page.$$('button[aria-label="upvote"]');
    while (upvotes.length > 0) {
      let length = upvotes.length / 2;
      let upvote = upvotes.shift();
      upvotes.shift(); //to remove unused element from nodelist (they come in pairs)

      try {
        upvote.click();
        // console.log(`${length}`); //debugging
        await page.waitFor(500);
      } catch (e) {
        console.log("error upvoting");
      }
    }
  }
})
