**NPM:** [npmjs.com/package/botcordtop](https://www.npmjs.com/package/botcordtop.js/)<br>



<a href="https://nodei.co/npm/botcordtop.js"><img src="https://nodei.co/npm/botcordtop.js.png?downloads=true&stars=true" alt="npm botcordtop.js" /></a>

  [JavaScript Package](https://www.npmjs.com/package/botcordtop.js)
            

#### How do I install it?
 `npm i botcordtop.js or npm install botcordtop.js`
          

#### How can I get my bot's server count?
  `JavaScript:`
```js
const bct = require("botcordtop.js");
const bct = new dtl("TOKEN-HERE", client);

client.on("ready", async () => {
  bct.serverCount();
});
```

#### How can I get my bot's vote count?
  `Ans:`
```js
let hasVote = await bct.hasVoted("Your-bot-id");
  if(hasVote === true) {
    console.log("Voted")
  } else {
    console.log("Vote please.")
  }
  
  
  let search = await bct.search("Your-bot-id")
  console.log(search)

```

### Full Example?
```js
const dtl = require("botcordtop.js");
const bct = new dtl("TOKEN-HERE", client);

client.on("ready", async () => {
  bct.serverCount();
  console.log("Server count posted")
  
  let hasVote = await bct.hasVoted("your-bot-id");
  if(hasVote === true) {
    console.log("Voted")
  } else {
    console.log("Vote please.")
  }
  
  
  let search = await bct.search("botcordtop.js")
  console.log(search)
});
```
