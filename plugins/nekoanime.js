/* Copyright (C) 2020 TOXIC DEVIL

CODDED BY TOXIC DEVIL

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.
WhatsAsenaPublic - TOXIC DEVIL
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');

    Asena.addCommand({ pattern: 'nekoanime', fromMe: false }, async (message, match) => {

        if (message.jid === '905524317852-1612300121@g.us') {

            return;
        }

        await axios
          .get(`https://videfikri.com/api/anime/neko`)
          .then(async (response) => {
            const {
              url_gbr,
            } = response.data.result

            const imageBuffer = await axios.get(url_gbr, {
              responseType: 'arraybuffer',
            })

            await message.sendMessage(Buffer.from(imageBuffer.data), MessageType.image, {
                        caption: "Made By WhatsAsenaPublic"
            })
          })
      },
    )
