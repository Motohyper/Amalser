const Ktb = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
Ktb.addCommand({ pattern: 'git ?(.*)', fromMe: false, desc: 'owner number' }, (async (message, match) => {

//coded by Adhilshah
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Adhilshah [OWNER]\n' // full name
            + 'ORG:Adhilshah;\n' // 
            + 'TEL;type=CELL;type=VOICE;waid=918129505730\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await message.client.sendMessage(message.jid,{displayname: "Adhilshah [OWNER]", vcard: vcard}, MessageType.contact)
}))
