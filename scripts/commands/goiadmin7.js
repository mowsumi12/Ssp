module.exports.config = {
  name: "goiadmin7",
    version: "1.0.0",
    permission: 0,
    credits: "nazrul",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100082346106643") {
    var aid = ["100082346106643"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["nazrul er chipai", "বিয়া হয়ে গেছে", "সাব্বিরকে পটাতে গেছে", "সাব্বির এর চিপায়", "সাব্বির এর সঙ্গে টেম্পো চালাচ্ছে"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
                 }
