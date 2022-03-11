const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIs = {
sanzy: 'https://zeroyt7-api.xyz',
zenz: 'https://zenzapi.xyz',
}

//━━━━━━━━━━━━━━━[ APIKEY WEBSITE API ]━━━━━━━━━━━━━━━━━//

global.APIKeys = {
'https://zeroyt7-api.xyz': 'gysnzbsja',
'https://zenzapi.xyz': 'f2116e96b4',
}

//━━━━━━━━━━━━━━━[ OTHER ]━━━━━━━━━━━━━━━━━//

global.ownername = 'Indra>_<'
global.owner = ['6289667644225']
global.packname = 'Sanzy'
global.author = 'IndraGanz'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
admin: 'Cuma Buat Admin Banh',
    botAdmin: 'Jadiin Admin Dulu Lah',
    owner: 'Lu Bukn Owner Saia',
    group: 'Di Gc Bisanya',
    private: 'Pm Bae Jan Disini',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Sabar Banh Lagi Di Proses...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
