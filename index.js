import usersToBoost from './users_to_boost.js';
import usersToHarm from './users_to_harm.js';
import upvote from './upvote.js'
import downvote from './downvote.js'
import users from "./users.js";
import login from './login.js';

const run = (async () => {
  for (let i = 0; i < Object.values(users).length; i++) { //for loop to run protocol for every user is users.js
    var page_and_browser = await login(users[i]); //login and return page/browser instance
    var page = page_and_browser.page;
    var browser = page_and_browser.browser;
    await upvote(usersToBoost, page);
    await downvote(usersToHarm, page);
    console.log(`finished protocol for ${users[i].username}`)
  }
  console.log('finished running')
  await browser.close();
})

run();

