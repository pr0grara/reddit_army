# reddit_army
### this program contains an automated upvoting and downvoting function for reddit
0. $npm install (chromium should take about a minute)
### to run main function
1. Add your bot users to the users object
2. Add your recipients to love and hate (users_to_boost.js and users_to_harm.js)
4. Run index.js
### index.js will:
#### begin a for loop iterating over every bot user you add to users.js:
1. open an incognito browser instance in chromium
2. navigate to reddit login, enter user credentials and submit
3. enter upvote function which iterates over every user in users_to_boost.js
4. navigates to users posts and upvotes every post it finds 
* NOTE there currently is no measure to prevent double upvoting
5. upon completion of last userToBoost iteration enters downvoting function which is respectively identical
6. upon completion of last user's iteration browser is closed

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*godspeed general* 