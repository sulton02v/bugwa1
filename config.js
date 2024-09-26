/*
       RESMI DARI DrayXD Official

  LARANGAN
 
- DI LARANG MEMPERJUAL SC INI
- DI LARANG MEMPERBAGI SC INI

JIKA MELANGGAR LARANGAN YANG DI BERIKAN DRAY, YAPIT SE UMUR HIDUP + 7 TURUNAN

JANGAN LUPA SUPPORT

*/

global.prefa = ['','!','.',',','🐤','🗿'] 
// Setting Contact
global.namaown = "sulton"
global.namabot = "𝐬𝐮𝐥𝐭𝐨𝐧"
global.versisc = " 𝟒.𝟎"
global.owner = ["6282322444975"]
global.tele = "https://wa.me/6282322444975"
global.url = "https://instagram.com/sultonkahfi02"
global.namastore = "sulton"

// Global Simbol
global.simbol = "₪"
global.wlcm = []
global.wlcmm = []
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Global Respon
global.mess = {
    success: '𝗗𝗼𝗻𝗲 𝗕𝗿𝗼',
    admin: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !`,
    botAdmin: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !`,
    OnlyOwner: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Oleh Owner !`,
    OnlyGrup: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Di Group Chat !`,
    private: `\`[ # ]\` Perintah Ini Hanya Bisa Digunakan Di Private Chat !`,
    wait: `\`[ # ]\` Wait Tunggu Sebentar`,
    notregist: `\`[ # ]\` Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu`,
    premium: `\`[ # ]\` khusus Murbug" Mau Join? Chat Owner`,
    endLimit: `\`[ # ]\` Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB`,
     bugrespon: `\`[ # ]\` 𝗧𝘂𝗻𝗴𝗴𝘂 𝗦𝗲𝗯𝗲𝗻𝘁𝗮𝗿
     𝘚𝘦𝘥𝘢𝘯𝘨 𝘔𝘦𝘯𝘺𝘦𝘳𝘢𝘯𝘨 𝘛𝘢𝘳𝘨𝘦𝘵`,
     donebug: `\`[ # ]\` 𝗦𝘂𝗰𝗰𝗲𝘀𝗳𝘂𝗹𝗹𝘆 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴
     𝘉𝘦𝘳𝘩𝘢𝘴𝘪𝘭 𝘈𝘵𝘵𝘢𝘤𝘬`,
}


// Batas Setting
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})