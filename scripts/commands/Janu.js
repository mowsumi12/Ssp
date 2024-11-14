const axios = require('axios');

const baseApiUrl = async () => {
    const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
    return base.data.api;
};

module.exports.config = {
  name: "janu",
  version: "6.9.0",
  credits: "dipto",
  cooldowns: 0,
  permission: 0,
  description: "better than all sim simi",
  category: "chat",
  category: "chat",
  prefix: false,
  usages: `[anyMessage] OR\nteach [YourMessage] - [Reply1], [Reply2], [Reply3]... OR\nteach [react] [YourMessage] - [react1], [react2], [react3]... OR\nremove [YourMessage] OR\nrm [YourMessage] - [indexNumber] OR\nmsg [YourMessage] OR\nlist OR\nall OR\nedit [YourMessage] - [NewMessage]`,
};

module.exports🙏.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);
    var tl = ["\nআমি এখন জিঁলাঁপিঁ বস আর সাথে বিজি আছি\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\njan ইনবক্সে গুতা মি😑😑 ?\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n ভেঙে মোর ঘরের তালা৷ কেউ জি্ঁলা্ঁপি্ঁকে্ঁ নিয়া পালা😑😑\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\nI love you baby meye hole chipay aso\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nLove you 3000-😍ummah 9000💋💝\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nji bolen ki korte pari ami apnar jonno?\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\nআমাকে না ডেকে আমার বস জিঁলাঁলিঁ কে একটা জি এফ দেন\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\n Ato daktasen kn bujhlam na 😡\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\n jan bal falaba,🙂\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\nask amr mon vlo nei dakben na🙂\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nHmm jan ummah bby😘😘\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\njan hanga korba 😑🙂😑","\niss ato dako keno lojja lage to 🫦🙈\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\nsuna tomare amar valo lage,🙈😽\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\nজি তুমি কি আমাকে ডেকেছো 😇🖤🥀\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n jan moye moye😑😑\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\nতোর কোন কোন জায়গায় বেথা গো বান্ধবী ললিতা🥵🥵\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\nজান জিলাপি 20 বছরের কচি প্লিজ পটে যাও🤐😁😁\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\nএত ডাকিস কেন বুঝা আমারে😡 আপডেট মাইয়া 🤪🤪\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n__চা দিয়ে চানাচুর খাচ্ছি-😌\n\n_ ᴍʏ ʟɪғᴇ ᴍʏ ʀᴜʟᴇs ! 😎\n_ তাতে তোমার কি--😒\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n💋💋💋💋👈👈এই নে মিষ্টি দিলাম খাও💋😋😋🤪🤪🤣🤣\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n জান কাম টু মাই চেম্বার🤪🤣\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\nকচি মেয়েরা আমার বস জিঁলাঁপিঁ কে গুতা দাও\n👇👇👇👇👇👇👇👇 \nhttps://m.me/ji.la.pi.6\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nজান যদি থাকে নসিরে বাচ্চা সহ আসিবে🤣🤣🤣😁😀\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n জান তোর ওই গলিগে উম্মাহ💋💋\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\nজানু আমি জি্ঁলা্ঁপি্ঁর্ঁ লুচ্চা বট🥵🥵🥵\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\njan যেহেতু তুমি সিঙ্গেল তাই 😐\n\n মানবতার খাতিরে 😊🙃\n🙈 🙈I LOVE YOU 🙈🙈\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\n--- 🦟 মশাকে মারতে চেয়েছিলাম\nকিন্তু পারলাম না কারণ 😒\n-- ওর শরীরে তো আমারই রক্ত বইছে!🙂\n...... this is মানবতা bro🙈\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nJan চুপচাপ🤫\n~~তোর নাম্বার দিয়া যা 😒🐸\n\n°•প্রেম করমু😁🙈🙈😁\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nআম্মু ওই যে ওরে লাগবে 🫵🥺===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nhmm jan\nআমিচাঁদে বসে টিভি দেখছি🥱🤧\nতুই ও দেখবি আয়...!! 🍂🤓\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\n-oii jan Tumi 🫵---\nনাকি আমার উপর\n-ক্রাশ খাইলে সত্যিই নাকি..🤨🙈\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\noii--তাকায় আছো কেন?\nপ্রেম করবা🤭🙈\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====","\n কি খুঁজছো, আপন মানুষ.?🙂🤍\nআকাশের দিকে তাকাও 'সৃষ্টিকর্তা ছাড়া কাউকে\nআপন মনে হবে না..!❤️‍🩹🌸", "\nকিরে---- --------\nশুনলাম তুমি নাকি প্রতি রাত বিয়ের জন্য কদিস😁😁\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nজীবনের গল্পটা শুরু হওয়ার আগেই শেষ হয়ে গেছে হয়তো আর কখনো সাজাতে পারবো না আগের মত করে\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nথাকতে কদর করতে শিখো\n কারন \nকিছু মানুষ জীবনে বারবার আসে না\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nপ্রয়োজনের চেয়ে বেশি পেয়ে গেলে \n সেটাকে অবহেলা করে\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nএকদিন হারিয়ে  দাফনে\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nমুখের কথা.......\n\nরাগের সময়ই সই,,নিয় না মনে রাগের মথায় অনেক কিছু কই\nরাগ শেষে তোমারি রই\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nখুব করে চেয়েও তোমাকে পাইনি\n অথচ তুমি যে আমার ভাগ্যে ছিলে না সেটা কখনো বুঝতে পারনি\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nবেহারা মন সারাক্ষণ শুধু তাকেই চায়\nযার কাছে আমি অবহেলিত\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nআমরা বড় হয়ে মানুষ চিনি না\n\n আমরা মানুষ চিনতে চিনতে বড় হই\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nআমি অল্পতেই খুশি হয়ে যাই তাই হয়তো আমার ভাগ্যে ওই অল্পটুকুও জোটে টা\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nযদি জীবনে একটা delete button থাকতো তাহলে কিছু স্মৃতি কিছু অনুভুতি আর কিছু মানুষ কে মুছে ফেলতাম জীবনের ডায়েরি থেকে\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nজানু\n\nআমার তো সবাই মানুষ \nপার্থক্য শুধু মানসিতায়\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nশরীল তো সবাই ছুঁতে পারে\n\nকিন্ত মন ছোয়ার ক্ষমতা সবার থাকে না\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\n জীবনের সব চেয়ে পছন্দের জীনিস গুলো\n\nহয়তো অবৈধ , নয়তো নিষিদ্ধ\nহয়তো দামি নয়তো অন্যকরো\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nকে তুমি বৎস,\nধরিয়া মৎস,\nবেচিয়া গঞ্জে,\nআকুলো কুঞ্জে,\nনা খাইয়া তাজা,\nকেনো তুমি সেবন করিলে,\nমেয়াদ উত্তির্ন গাজা।🧘‍♀️\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====", "\nতুমি আমার মিষ্টী আলু\n লাল টুকটুকে গাজর\nতুমি আমার প্রাণভোমরা\n তুমি বুকের ফাঁজর\nতুমি আমার ফুচকা চটপটি\n মজার ঝালমুড়ি\nতুমি কি চাও তোমার জন্য\n আরো চাপা মারি\n===== 𝐍𝐀𝐙𝐑𝐔𝐋 𝐁𝐎𝐓 =====" ,];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    if (!prompt) return api.sendMessage(`${name}\n ${rand}`, event.threadID, event.messageID);
    }

    if (args[0] === 'remove') {
      const fina = dipto.replace("remove ", "");
      const respons = await axios.get(`${link}?remove=${fina}&senderID=${uid}`);
      return api.sendMessage(respons.data.message, event.threadID, event.messageID);
    }

    if (args[0] === 'rm' && dipto.includes('-')) {
      const [fi, f] = dipto.replace("rm ", "").split(' - ');
      const respons = await axios.get(`${link}?remove=${fi}&index=${f}`);
      return api.sendMessage(respons.data.message, event.threadID, event.messageID);
    }

    if (args[0] === 'list') {
      if (args[1] === 'all') {
        const res = await axios.get(`${link}?list=all`);
        const data = res.data.teacher.teacherList;
        const teachers = await Promise.all(data.map(async (item) => {
          const number = Object.keys(item)[0];
          const value = item[number];
          const name = await Users.getName(number) || "unknown";
          return { name, value };
        }));
        teachers.sort((a, b) => b.value - a.value);
        const output = teachers.map((teacher, index) => `${index + 1}/ ${teacher.name}: ${teacher.value}`).join('\n');
        return api.sendMessage(`Total Teach = ${res.data.length}\n\n👑 | List of Teachers of baby\n${output}`, event.threadID, event.messageID);
      } else {
        const respo = await axios.get(`${link}?list=all`);
        return api.sendMessage(`Total Teach = ${respo.data.length}`, event.threadID, event.messageID);
      }
    }

    if (args[0] === 'msg' || args[0] === 'message') {
      const fuk = dipto.replace("msg ", "");
      const respo = await axios.get(`${link}?list=${fuk}`);
      return api.sendMessage(`Message ${fuk} = ${respo.data.data}`, event.threadID, event.messageID);
    }

    if (args[0] === 'edit') {
      const command = dipto.split(' - ')[1];
      if (command.length < 2) {
        return api.sendMessage('❌ | Invalid format! Use edit [YourMessage] - [NewReply]', event.threadID, event.messageID);
      }
      const res = await axios.get(`${link}?edit=${args[1]}&replace=${command}`);
      return api.sendMessage(`changed ${res.data.message}`, event.threadID, event.messageID);
    }

    if (args[0] === 'teach' && args[1] !== 'amar' && args[1] !== 'react') {
      const [comd, command] = dipto.split(' - ');
      const final = comd.replace("teach ", "");
      if (command.length < 2) {
        return api.sendMessage('❌ | Invalid format! Use [YourMessage] - [Reply1], [Reply2], [Reply3]... OR remove [YourMessage] OR list OR edit [YourMessage] - [NewReply]', event.threadID, event.messageID);
      }
      const re = await axios.get(`${link}?teach=${final}&reply=${command}&senderID=${uid}`);
      const name = await Users.getName(re.data.teacher) || "";
      return api.sendMessage(`✅ Replies added ${re.data.message}\nTeacher: ${name || "unknown"}\nTeachs: ${re.data.teachs}`, event.threadID, event.messageID);
    }

    if (args[0] === 'teach' && args[1] === 'amar') {
      const [comd, command] = dipto.split(' - ');
      const final = comd.replace("teach ", "");
      if (command.length < 2) {
        return api.sendMessage('❌ | Invalid format! Use [YourMessage] - [Reply1], [Reply2], [Reply3]... OR remove [YourMessage] OR list OR edit [YourMessage] - [NewReply]', event.threadID, event.messageID);
      }
      const re = await axios.get(`${link}?teach=${final}&senderID=${uid}&reply=${command}&key=intro`);
      return api.sendMessage(`✅ Replies added ${re.data.message}`, event.threadID, event.messageID);
    }

    if (args[0] === 'teach' && args[1] === 'react') {
      const [comd, command] = dipto.split(' - ');
      const final = comd.replace("teach react ", "");
      if (command.length < 2) {
        return api.sendMessage('❌ | Invalid format! Use [teach] [YourMessage] - [Reply1], [Reply2], [Reply3]... OR [teach] [react] [YourMessage] - [react1], [react2], [react3]... OR remove [YourMessage] OR list OR edit [YourMessage] - [NewReply]', event.threadID, event.messageID);
      }
      const re = await axios.get(`${link}?teach=${final}&react=${command}`);
      return api.sendMessage(`✅ Replies added ${re.data.message}`, event.threadID, event.messageID);
    }

    if (['amar name ki', 'amr nam ki', 'amar nam ki', 'amr name ki'].some(phrase => dipto.includes(phrase))) {
      const response = await axios.get(`${link}?text=amar name ki&senderID=${uid}&key=intro`);
      return api.sendMessage(response.data.reply, event.threadID, event.messageID);
    }

     const a = (await axios.get(`${link}?text=${dipto}&senderID=${uid}&font=1`)).data.reply;
    return api.sendMessage(a, event.threadID,
        (error, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            lnk: a,
            apiUrl: link
          });
        }, event.messageID);

  } catch (e) {
    console.error('Error in command execution:', e);
    return api.sendMessage(`Error: ${e.message}`, event.threadID, event.messageID);
  }
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
try{
  if (event.type == "message_reply") {
    const reply = event.body.toLowerCase();
    if (isNaN(reply)) {
      const b = (await axios.get(`${handleReply.apiUrl}?text=${encodeURIComponent(reply)}&senderID=${event.senderID}&font=1`)).data.reply;
      await api.sendMessage(b, event.threadID, (error, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            lnk: b
          });
        }, event.messageID,
      )}}
}catch(err){
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
}};
