let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama Bot* : ᴠʀᴄ-ʙᴏᴛ
*✉️ Nama RL* : ʀʏᴀɴ ᴀᴅɪᴛʏᴀ 
*♂️ Gender* : ʟᴀᴋɪ ʟᴀᴋɪ
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 12 ᴀɢᴜꜱᴛᴜꜱ 1997
*🎨 Umur* : 24
*🧮 Kelas* : ᴜᴅᴀʜ ʟᴜʟᴜꜱ
*🧩 Pekerjaan* : ɢᴜʀᴜ,ᴄᴇᴏ ᴠᴇʀᴄ ɪɴᴅ
*🗺️ Tinggal* : ʙᴀɴᴊᴀʀᴍᴀꜱɪɴ, ᴋᴀʟɪᴍᴀɴᴛᴀɴ ꜱᴇʟᴀᴛᴀɴ, ɪɴᴅᴏɴᴇꜱɪᴀ

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @7code_bot
*🇫  Facebook* : Ryan Aditya Pratama
*🏮 Chanel Youtube* : https://youtube.com/@vrc_ind
*🐈 Github:* YannPrtm

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
