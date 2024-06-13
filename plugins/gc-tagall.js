let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `|➢ 𝐀𝐜𝐭𝐢𝐯𝐞𝐧𝐬𝐞 😈🔥   ${pesan}`
let teks = `👨🏻‍💻💚 𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐀𝐑𝐀𝐁𝐄-𝐉𝐁 𝐁𝐎𝐓 💚👨🏻‍💻 \n\n ${oi}\n\n ➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `|👨🏻‍💻💚≽  @${mem.id.split('@')[0]}\n`}
teks += `|𝐀𝐑𝐀𝐁𝐄 𝐁𝐎𝐓 👨🏻‍💻💚💜
|𝐂𝐎𝐋𝐀𝐁𝐎𝐑𝐀𝐂𝐈𝐎𝐍: 𝐆𝐄𝐑𝐀𝐋 𝐁𝐎𝐓 / 
|+51988802645
|𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎: 𝐀𝐑𝐀𝐁𝐈𝐀 / 
|+51985018729 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
