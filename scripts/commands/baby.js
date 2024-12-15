const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`
  );
  return base.data.api;
};

module.exports.config = {
  name: "baby",
  version: "6.9.9",
  credits: "dipto",
  cooldowns: 0,
  permission: 0,
  description: "better than all sim simi",
  category: "chat",
  prefix: true,
  usages: `[anyMessage] OR\nteach [YourMessage] - [Reply1], [Reply2], [Reply3]... OR\nteach [react] [YourMessage] - [react1], [react2], [react3]... OR\nremove [YourMessage] OR\nrm [YourMessage] - [indexNumber] OR\nmsg [YourMessage] OR\nlist OR\nall OR\nedit [YourMessage] - [NewMessage]`,
};

module.exports.run = async function ({ api, event, args, Users }) {
  try {
    const link = `${await baseApiUrl()}/baby`;
    const dipto = args.join(" ").toLowerCase();
    const uid = event.senderID;


    const namee = await Users.getName(uid) || "User";

    if (!args[0]) {
      const ran = ["Bolo baby", "hum", "type help baby", "type !baby hi"];
      const r = ran[Math.floor(Math.random() * ran.length)];
      return api.sendMessage(`${namee}, ${r}`, event.threadID, event.messageID);
    }

    if (args[0] === "remove") {
      const fina = dipto.replace("remove ", "");
      const respons = await axios.get(
        `${link}?remove=${fina}&senderID=${uid}`
      );
      return api.sendMessage(
        `${namee}, ${respons.data.message}`,
        event.threadID,
        event.messageID
      );
    }

    if (args[0] === "rm" && dipto.includes("-")) {
      const [fi, f] = dipto.replace("rm ", "").split(" - ");
      const respons = await axios.get(`${link}?remove=${fi}&index=${f}`);
      return api.sendMessage(
        `${namee}, ${respons.data.message}`,
        event.threadID,
        event.messageID
      );
    }

    if (args[0] === "list") {
      if (args[1] === "all") {
        const res = await axios.get(`${link}?list=all`);
        const data = res.data.teacher.teacherList;
        const teachers = await Promise.all(
          data.map(async (item) => {
            const number = Object.keys(item)[0];
            const value = item[number];
            const name = (await Users.getName(number)) || "unknown";
            return { name, value };
          })
        );
        teachers.sort((a, b) => b.value - a.value);
        const output = teachers
          .map(
            (teacher, index) =>
              `${index + 1}/ ${teacher.name}: ${teacher.value}`
          )
          .join("\n");
        return api.sendMessage(
          `${namee}, Total Teach = ${res.data.length}\n\n👑 | List of Teachers of baby\n${output}`,
          event.threadID,
          event.messageID
        );
      } else {
        const respo = await axios.get(`${link}?list=all`);
        return api.sendMessage(
          `${namee}, Total Teach = ${respo.data.length}`,
          event.threadID,
          event.messageID
        );
      }
    }

    if (args[0] === "msg" || args[0] === "message") {
      const fuk = dipto.replace("msg ", "");
      const respo = await axios.get(`${link}?list=${fuk}`);
      return api.sendMessage(
        `${namee}, Message ${fuk} = ${respo.data.data}`,
        event.threadID,
        event.messageID
      );
    }

    if (args[0] === "edit") {
      const command = dipto.split(" - ")[1];
      if (command.length < 2) {
        return api.sendMessage(
          `${namee}, ❌ | Invalid format! Use edit [YourMessage] - [NewReply]`,
          event.threadID,
          event.messageID
        );
      }
      const res = await axios.get(
        `${link}?edit=${args[1]}&replace=${command}`
      );
      return api.sendMessage(
        `${namee}, changed ${res.data.message}`,
        event.threadID,
        event.messageID
      );
    }

    if (args[0] === "teach" && args[1] !== "amar" && args[1] !== "react") {
      const [comd, command] = dipto.split(" - ");
      const final = comd.replace("teach ", "");
      if (command.length < 2) {
        return api.sendMessage(
          `${namee}, ❌ | Invalid format! Use [YourMessage] - [Reply1], [Reply2], [Reply3]... OR remove [YourMessage] OR list OR edit [YourMessage] - [NewReply]`,
          event.threadID,
          event.messageID
        );
      }
      const re = await axios.get(
        `${link}?teach=${final}&reply=${command}&senderID=${uid}`
      );
      const name = (await Users.getName(re.data.teacher)) || "unknown";
      return api.sendMessage(
        `${namee}, ✅ Replies added ${re.data.message}\nTeacher: ${name}\nTeachs: ${re.data.teachs}`,
        event.threadID,
        event.messageID
      );
    }

    if (['amar name ki', 'amr nam ki', 'amar nam ki', 'amr name ki'].some(phrase => dipto.includes(phrase))) {
      const response = await axios.get(`${link}?text=amar name ki&senderID=${uid}&key=intro`);
      return api.sendMessage(`${namee}, ${response.data.reply}`, event.threadID, event.messageID);
    }

    const a = (await axios.get(`${link}?text=${dipto}&senderID=${uid}&font=1`)).data.reply;
    return api.sendMessage(`${namee}, ${a}`, event.threadID, (error, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        type: "reply",
        messageID: info.messageID,
        author: event.senderID,
        lnk: a,
        apiUrl: link,
      });
    }, event.messageID);

  } catch (e) {
    console.error("Error in command execution:", e);
    return api.sendMessage(
      `Error: ${e.message}`,
      event.threadID,
      event.messageID
    );
  }
};

module.exports.handleReply = async function ({ api, event, handleReply, Users }) {
  try {
    const uid = event.senderID;
    const namee = await Users.getName(uid) || "User";

    if (event.type == "message_reply") {
      const reply = event.body.toLowerCase();
      const b = (await axios.get(
        `${await baseApiUrl()}/baby?text=${encodeURIComponent(
          reply
        )}&senderID=${uid}&font=1`
      )).data.reply;
      return api.sendMessage(`${namee}, ${b}`, event.threadID, event.messageID);
    }
  } catch (err) {
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  try {
    const uid = event.senderID;
    const namee = await Users.getName(uid) || "User";

    const body = event.body ? event.body.toLowerCase() : "";
    if (body.startsWith("baby") || body.startsWith("bby") || body.startsWith("janu")) {
      const arr = body.replace(/^\S+\s*/, "");
      if (!arr) return api.sendMessage(`${namee}, Yes 😀, I am here`, event.threadID, event.messageID);

      const a = (await axios.get(
        `${await baseApiUrl()}/baby?text=${encodeURIComponent(
          arr
        )}&senderID=${uid}&font=1`
      )).data.reply;
      return api.sendMessage(`${namee}, ${a}`, event.threadID, event.messageID);
    }
  } catch (err) {
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
};
