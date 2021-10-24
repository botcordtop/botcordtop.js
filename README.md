**NPM:** [npmjs.com/package/botcordtop.js](https://www.npmjs.com/package/botcordtop.js/)<br>



<a href="https://nodei.co/npm/botcordtop.js"><img src="https://nodei.co/npm/botcordtop.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>


## Installation
*If you have trouble with the installation, please feel free to visit our [discord](https://botcord.top/dc) address.*
- `npm i botcordtop.js`

#### What is it's uses?
  Answer: To get the daily vote count, server count and information about your bot.

#### How can I get my bot's server count?
  `JavaScript:`
```js
const dbct = require("botcordtop.js");
const dbt = new dtl("TOKEN-HERE", client);

client.on("ready", async () => {
  dbt.serverCount();
});
```

#### How can I get my bot's vote count?
  `Answer:`
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

#### Full Example?
```js
const dbct = require("botcordtop.js");
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
  
  
  let search = await dbt.search("botcordtop.js")
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
