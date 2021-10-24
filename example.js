const Discord = require("discord.js");  
const client = new Discord.Client();
const dbct = require("botcordtop.js");
const dbt = new dbct("TOKEN_HERE", client);

client.on("ready", async () => {
  dbt.serverCount();
  console.log("Server count posted")
  
  let hasVote = await dbt.hasVoted("DISCORD_BOT_CLIENT_ID");
  if(hasVote === true) {
    console.log("Voted")
  } else {
    console.log("Vote please.")
  }
});

client.login("DISCORD_BOT_TOKEN_HERE")
