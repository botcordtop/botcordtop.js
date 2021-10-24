# botcordtop.js
<a href="https://discord.gg/yMuNjUegtX" target="_blank"><img src="https://img.devsforum.net/tr/img/h1Z2X3.png" alt="Join our discord" width="256"></a><br>
**Support:** [https://discord.gg/yMuNjUegtX](https://discord.gg/yMuNjUegtX) <br>
**NPM:** [npmjs.com/package/botcordtop.js](https://www.npmjs.com/package/botcordtop.js)<br>

## Installation
*If you have trouble with the installation, please feel free to visit our [discord](https://discord.gg/8ZBYQAS4Q9) address.*
- `npm i botcordtop.js`

# Define Module & Client
```js
const Discord = require("discord.js");
const client = new Discord.Client();
const BotCord = require("botcordtop.js");
const bcdl = new BotCord("TOKEN-HERE", client);

client.login("TOKEN_LOL_POGGERS");
```

# Certificate Application
```js
bcdl.certificateApplication("Bla bla bla bla bla bla bla bla bla bla bla bla...", () => {
    console.log("Certificate successfully applied.");
})
```

# Vote Checking
```js
bcdl.checkVote("userId").then((value) => {
    if(value === 1) {
        console.log("User voted.")
    } else {
        console.log("User not voted.")
    }
})
```


# All Operations
```js
const vCodes = require('vcodes.js');
const { Client } = require("discord.js");
const client = new Client();
const BotCord = new BotCord("BotCord-Bot-Token-Here", client)

bcdl.on("ready", () => {
    console.log('vCodes ready!')
})

bcdl.checkVote("userId").then((value) => {
    if(value === 1) {
        console.log("User voted.")
    } else {
        console.log("User not voted.")
    }
})

bcdl.certificateApplication("Bla bla bla bla bla bla bla bla bla bla bla bla...", () => {
    console.log("Certificate successfully applied.");
})

client.on("ready", () => {
    console.log("Logged as in "+client.user.tag)
})

client.login("Discord-Bot-Token")
```

