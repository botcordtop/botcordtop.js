**NPM:** [npmjs.com/package/botcordtop.js](https://www.npmjs.com/package/botcordtop.js/)<br>



<a href="https://nodei.co/npm/botcordtop.js"><img src="https://nodei.co/npm/botcordtop.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>


## Installation
*If you have trouble with the installation, please feel free to visit our [discord](https://botcord.top/dc) address.*
- `npm i botcordtop.js`

#### 1. Where can I get townlist.xyz API?
  [JavaScript Package](https://www.npmjs.com/package/botcordtop.js)
            

#### 2. How do I install it?
 `npm i botcordtop.js or npm install botcordtop.js`
          

#### 3. Does it have any GitHub Repository?
 Yes

#### 4. What is it's uses?
  Ans: To get the daily vote count, server count and information about your bot.
Examples:  avatar, botID, discriminator, shortDescription, prefix, votes, serverCount, ownerID, owner, co-owners, tags, longDescription, certificate etc.

#### 5. How can I get my bot's server count?
  `JavaScript:`
```js
const dbct = require("botcordtop.js");
const dbt = new dtl("TOKEN-HERE", client);

client.on("ready", async () => {
  dbt.serverCount();
});
```

#### 6. How can I get my bot's vote count?
  `Ans:`
```js
let hasVote = await dbt.hasVoted("Your-bot-id");
  if(hasVote === true) {
    console.log("Voted")
  } else {
    console.log("Vote please.")
  }
  
  
  let search = await dbt.search("Your-bot-id")
  console.log(search)

```

#### 7. Full Example?
```js
const dbct = require("api-townlist-xyz");
const dbt = new dtl("TOKEN-HERE", client);

client.on("ready", async () => {
  dbt.serverCount();
  console.log("Server count posted")
  
  let hasVote = await dbt.hasVoted("your-bot-id");
  if(hasVote === true) {
    console.log("Voted")
  } else {
    console.log("Vote please.")
  }
  
  
  let search = await dbt.search("api-townlist-xyz")
  console.log(search)

  /* SearchResults
  {
    avatar: '',
    botID: '',
    username: '',
    discrim: '',
    shortDesc: '',
    prefix: '? [changable]',
    votes: 25,
    ownerID: '',
    owner: '',
    coowners: [ '' ],
    tags: [ 'Moderation', 'NSFW', 'Music' ],
    longDesc: longDesc,
    certificate: 'Certified'
  }
  */
});
```
