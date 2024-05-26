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
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"6GUotvyHvPwSbgjNZDdnVgowP5hn8VY7PwStSNLb40w="},"public":{"type":"Buffer","data":"ATc3lTRQeXIb5uqFmbonvOWr7+r40AcpdJqijgsqBRg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"GGfPi9hHOd0KdJZVJodvDWHV5InRKNXBKVgZXrrJS0Q="},"public":{"type":"Buffer","data":"D7IIZwqRGovH8Dw7jlp7pcNDGJHiix5O6caDFhhzTzU="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"WDIBEMvt/qu9oM/uEyNB+NR/AxkyiF6JVke7FnCGn1g="},"public":{"type":"Buffer","data":"bK4ODASrehfKrnPOfEaGL2vY9bRZZ/ynplLXWFeEf1M="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"SLK0fePY18PKhbOf6HWfWfkOrqenpQ23XJfSQg1UI2Q="},"public":{"type":"Buffer","data":"27nq0xR5NFuE12tkH5cpfALXFhYOvvVT1q+4CmJqcF4="}},"signature":{"type":"Buffer","data":"fRnhF23nrN30c2ZYNJof/GHF6sKHyU2deWB/rFUJ+omSelEYVuS1Rk+Px8poSmAWxqd2IsL4OPOaK2AkjJQFjw=="},"keyId":1},"registrationId":134,"advSecretKey":"ZUDnfJtBQVajS1kqH956DBiWNvRgz1Rm+CDU4tp6B9k=","processedHistoryMessages":[{"key":{"remoteJid":"50937872734@s.whatsapp.net","fromMe":true,"id":"749A16C49A2420AC25B7313EC8661D6C"},"messageTimestamp":1716707368}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"cnsnkjs-SJWGLJ3HGOl8bg","phoneId":"46d61e8e-56eb-47a0-acc8-327945945fd6","identityId":{"type":"Buffer","data":"d3BgkoqoYp5pf4MVQuCnwDQqmSA="},"registered":true,"backupToken":{"type":"Buffer","data":"OklvxeQrE5+xEifkXVotMf+8VgE="},"registration":{},"pairingCode":"QV614SS1","me":{"id":"50937872734:17@s.whatsapp.net","name":"(\\_/)\n( •.•)\n/>Fanfan_______Techno","lid":"174822885716140:17@lid"},"account":{"details":"CKjWqeIHEJ3Ay7IGGAQgACgA","accountSignatureKey":"bg8q3w8q2t01DxSBaMyj8rvni6UNeHHTfjgy66jLNl8=","accountSignature":"3Uf0+dV2kEkiUpN6NfcPdKwveCFFlIuWBdVL6yZUoC35v1b3ZkAK2jJDGFovrxislgO7d+lnxBQb9zkIEm6IDg==","deviceSignature":"WPct2YftPeYv2hmKJ0LRWo5RFdbh2DRi5sjUho0+OBMdXwuY/bxKCQEQhx0vd5rJtYE+YIkZDvF6BsM7qHiNhA=="},"signalIdentities":[{"identifier":{"name":"50937872734:17@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BW4PKt8PKtrdNQ8UgWjMo/K754ulDXhx0344MuuoyzZf"}}],"platform":"smba","lastAccountSyncTimestamp":1716707359,"myAppStateKeyId":"AAAAAIaO"}'

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
