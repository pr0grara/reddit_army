import scrollDown from "./scroll_down.js";

export default async (usersToHarm, page) => {
  console.log(`initiating downvote protocol`);
  for (let i = 0; i < usersToHarm.length; i++) {
    await page.waitFor(5000);
    await page.goto(`https://www.reddit.com/user/${usersToHarm[i]}/posts/`);
    await page.waitFor('button[aria-label="downvote"]');
    await scrollDown(page);

    var downvotes = await page.$$('button[aria-label="downvote"]');
    while (downvotes.length > 0) {
      let length = downvotes.length / 2;
      let downvote = downvotes.shift();
      downvotes.shift(); //to remove unused element from nodelist (they come in pairs)

      try {
        downvote.click();
        // console.log(`${length}`); //debugging
        await page.waitFor(500);
      } catch (e) {
        console.log("error downvoting");
      }
    }
  }
};
