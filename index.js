const d = require("discord.js")
const client = new d.Client()

client.on("ready", r => {
    console.log("Loaded")
    client.user.setActivity("FluffyHub > All", { type: "STREAMING", url: "https://twitch.tv/PewDiePIe"})
})

client.on("guildMemberAdd", member => {
    let role = member.guild.roles.find(r => r.name === "Not Verified")
    member.addRole(role)
    let messageEmbed = new d.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Welcome!")
    .setDescription("Welcome To The FluffyHub Server!\nPlease Go To https://dylanshub.xyz/FluffyHub/Verify.php?Verification=" + member.user.id + " To Verify!")
    .setFooter("From FluffyHub")
    .setTimestamp()
    member.send(messageEmbed)
})

client.on("message", message => {
    if(message.content === ".fake"){
        let role = message.member.guild.roles.find(r => r.name === "Not Verified")
        message.member.addRole(role)
        let messageEmbed = new d.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Welcome!")
        .setDescription("Welcome To iHax Fan Server!\nPlease Go To https://dylanshub.xyz/FluffyHub/Verify.php?Verification=" + message.member.id + " To Verify!")
        .setFooter("From FluffyHub")
        .setTimestamp()
     message.member.send(messageEmbed)
    }
    if (message.content.startsWith("verify")) {
        if (!message.author.bot) return;
        let mem = message.mentions.members.first();
        mem.addRole(message.guild.roles.find(role => role.name === "Fluffies"))
        mem.removeRole(message.guild.roles.find(role => role.name === "Not Verified"))
        let verifiedEMbed = new d.RichEmbed()
        verifiedEMbed.setColor("RANDOM")
        verifiedEMbed.setTitle("Verified!")
        verifiedEMbed.setDescription("You Have Been Verified, " + mem.user.tag)
        verifiedEMbed.setFooter("FluffyHub Verification")
        verifiedEMbed.setTimestamp()
        mem.send(verifiedEMbed)
    }
    if (message.content === ".script") {
        let script = new d.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Script")
        .setDescription('Script: ```lua\nloadstring(game:HttpGet("https://raw.githubusercontent.com/flufl/bignukes/master/FluffyHub.txt",true))()`')
        .setFooter("FluffyHub")
        .setTimestamp()
        message.member.send(script)
    }
    if (message.content === "checkRoles") {
        if (message.member.id === "545597556684619786") {
            message.member.addRole(message.guild.roles.find(role => role.name === "Developer"))
            message.reply("I have found the Developer Role for DyIan#9999.")
        } else {
            return message.reply("I found none of your roles in the database.")
        }
    }
})
client.login(process.env.token)