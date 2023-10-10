const autoReply = (msg) => {
    let R = ''
    if(msg.match(/hi|හායි|hey|hello|halo|helow|හලෝ/gi)){
        R = "Hey, කෙල්ලො කිව්වත් මොන්ගල් පිම්පියා මමයි කෙල්ලෙ king දනුව"
    }
    if(msg.match(/😒/gi)){
        R = "මොකො මොකෝ"
    }
    if(msg.match(/🥲/gi)){
        R = "දුක දැනෙන අයුරූ නොදැන වස්තු"
    }
    if(msg.match(/ane|අනේ|අනෙ/gi)){
        R = "අනේ පනේ පිහිය ඉනේ"
    }
    if(msg.match(/yako|yaku|යකෝ|යකො/gi)){
        R = "මමයි බොලව් යකා"
    }
    if(msg.match(/na|නැ|නෑ/gi)){
        R = "හේ හේ නැද්ද ඔයාට ලැජ්ජාවෙ බෑ 😂"
    }
    if(msg.match(/ඔව්|ow /gi)){
        R = "ඔව් නං කමක් නෑ"
    }
    if(msg.match(/ගියා|giya|echcharay|එච්චරයි/gi)){
        R = "එච්චරයි..."
    }
    if(msg.match(/අඩෝ|ado/gi)){
        R = "ඇයි ඩෝ මොකො?"
    }
    if(msg.match(/😁/gi)){
        R = "sendSticker:hii"
    }
    if(msg.match(/බල්ලො|ballo|bllo|බම්ලො/gi)){
        R = "🐶"
    }
    if(msg.match(/කව්ද|කවුද|kawd|who|kwd/gi)){
        R = "මම බොලව් කින්ග් දනුව"
    }
    if(msg.match(/බය|baya/gi)){
        R = "මම බය යක්කුන්ට විතරයි උබල වගෙ ප##න්ට නෙවෙයි"
    }
    if(msg.match(/mn|මං|ඕයි|oi/gi)){
        R = "අවදානෙද ඉල්ලන්නේ බබෝ"
    }
    if(msg.match(/gm|morning/gi)){
        R = `🎤දහසක් මල්🌸 විකසිත වන😊 මේ හිමිදිරි උදෑසනේ🌄 පතන්නම් ඔබ සැමට🙏 සුභම සුභ උදෑසනක් කියා...😃`
    }
    if(msg.match(/😂/gi)){
        R = `හිනා වෙන්න දෙයක් කිව්වේ නෑනෙ හරකෝ ගුලි කාලද ඉන්නෙහ්`
    }
    if(msg.match(/gn|night|නයිට්/gi)){
        R = "🌚ලබන්නා වූ රාත්‍රිය, හීනෙන් හොල්මන් පෙනෙන, මහ රෑ දාඩියෙන් තෙමී ඇහැරෙන, පෙරේතයන් ඇඳ යටට එන, කුම්භාණ්ඩයින් ජනෙල් වලින් එබී බලන, භයානක රාත්‍රියක් වේවා👻👻"
    }if(msg.match(/nikan|නිකං|නිකම්/gi)){
        R = "නිකං ඉන්නෙපා ඇඳුමක් ඇඳගන්න."
    }
    if(msg.match(/lamayo|ළමයෝ|ලමයෝ/gi)){
        R = "ඇයි අම්මියෝ"
    }
    if(msg.match(/දෙන්න|දාන්න|dahn|dapan|dapn|දාපං|දීපං|දීපන්|dipn|dipan|dahn/gi)){
        R = "ආස නැ හරිත ඔව්වට"
    }
    if(msg.match(/plala|ply|පල|පලෑ/gi)){
        R = "එහෙමතේ"
    }
    if(msg.match(/කාලද|kalad/gi)){
        R = "නෑහ් කවන්නකො"
    }
    if(msg.match(/telegram|ටෙලි/gi)){
        R = "Telegram Group එකට එන්න😌\nt.me/+RMAUq3inzkphM2U9"
    }
    if(msg.match(/whatsapp|වට්සැප්|phon|‌පෝන්/gi)){
        R = "sendSricker:phonehate"
    }
    if(msg.match(/hehe|he he|හේහේ/gi)){
        R = "sendSticker:hehe"
    }
    if(msg.match(/❤️/gi)){
        R = "sendSticker:heart"
    }
    if(msg.match(/😒|hm|හ්ම්|හුම්/gi)){
        R = "sendSticker:hmm"
    }
    if(msg.match(/amo|ammo|අමෝ/gi)){
        R = "sendSticker:amo"
    }
    if(msg.match(/🤣/gi)){
        R = "sendSticker:smile"
    }
    if(msg.match(/mk/gi)){
        R = "පෙන් නැද්ද හරකො චැට් කරනව කියල"
    }
    if(msg.match(/🙂/gi)){
        R = "හ්ම්💔"
    }
    return R
}
const autoReply2 = (msg) => {
    let R = ''
    if(msg.match(/hi|හායි|hey|hello|halo|helow|හලෝ/gi)){
        R = "sendAudio:110"
    }
    if(msg.match(/😌/gi)){
        R = "sendAudio:111"
    }
    if(msg.match(/🤣|😂😂/gi)){
        R = "sendAudio:112"
    }
    if(msg.match(/😒/gi)){
        R = "sendAudio:113"
    }
    if(msg.match(/balla|bll|pko/gi)){
        R = "sendAudio:114"
    }
    if(msg.match(/mk/gi)){
        R = "sendAudio:mk"
    }
    if(msg.match(/gm/gi)){
        R = "sendAudio:gom"
    }
    if(msg.match(/gn/gi)){
        R = "sendAudio:gon"
    }
    if(msg.match(/aaw|halo|manika|lamayo|😘|😍|❤️|love|adare/gi)){
        R = "sendAudio:115"
    }
    if(msg.match(/palayan|plyn|පල/gi)){
        R = "sendAudio:116"
    }
    return R
}
const autoReply3 = (msg) => {
    let R = ''
    return R
}
module.exports = {
    autoReply,
    autoReply2,
    autoReply3,
    copyright:"Kumuthu Prabhasha"
}
