**NPM:** [npmjs.com/package/botcordtop.js](https://www.npmjs.com/package/botcordtop.js/)<br>



<a href="https://nodei.co/npm/botcordtop.js"><img src="https://nodei.co/npm/botcordtop.js.png?downloads=true&stars=true" alt="npm installnfo" /></a>

---

### Installation

`npm i botcordtop.js` If that does not work try `npm install botcordtop.js`

---
This would be to update the server count on [BOTCORD](https://botcord.top/bots)

```js
const dbct = require("botcordtop.js");
const dbt = new dbct("TOKEN_HERE", client);

client.on("ready", async () => {
  dbt.serverCount();
  console.log("[BOTCORD.TOP] - Server Count Updated!")
```

---
Check to see if the author has voted on the bot recently!
```js
  let hasVote = await dbt.hasVoted("DISCORD_BOT_CLIENT_ID");
  if(hasVote === true) {
    console.log("[BOTCORD.TOP] - Bot voted recently.")
  } else {
    console.log("[BOTCORD.TOP] - Please vote on the Bot.")
  }
```

---

If you are still having issue's please join our [DISCORD](https://botcord.top/discord)

---


❤️ System Developers ❤️ 
