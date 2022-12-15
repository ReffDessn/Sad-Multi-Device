let handler = async (m, { conn }) => {


let krtu = `[ *INTRO DULU* ]
ɴᴀᴍᴀ : 
ᴜᴍᴜʀ / ᴋᴇʟᴀꜱ :
ʜᴏʙʙʏ : 
ɢᴇɴᴅᴇʀ : 
ꜱᴛᴀᴛᴜꜱ :
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
