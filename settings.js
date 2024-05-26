//base by fanfantechno
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: dope.boy.286
//Telegram: t.me/xeonbotinc
//GitHub: @dopeboy28
//WhatsApp: +50937872734
//want more free bot scripts? subscribe to my instagramm: https://www.instagram.com/dope.boy.286?igsh=MW8zdDZpOG1ybXdkeA==

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.igname = "IG: dope.boy.286" //ur ig channel name dope.boy.286
global.socialm = "GitHub: DGXeon" //ur github or insta name dopeboy28
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'fanfantechno' //ur bot name
global.ownernumber = '50937872734' //ur owner number
global.ownername = 'Fanfan Florient' //ur owner name
global.websitex = "https://www.instagram.com/dope.boy.286?igsh=MW8zdDZpOG1ybXdkeA=="
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "fanfantechno"
global.author = "fanfantechno\n\n+50937872734"
global.creator = "50937872734@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["50937872734"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
