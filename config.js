const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/pQNLH6c" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Vu Study Solution" 


global.devs = "923071003071" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923071003071";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 1
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923071003071";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_09_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk4LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIxLFxuICAgICAgICA0LFxuICAgICAgICA2MixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NixcbiAgICAgICAgNDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDYxLFxuICAgICAgICA4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDc3LFxuICAgICAgICA0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICA5MixcbiAgICAgICAgMTYyLFxuICAgICAgICAzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI5LFxuICAgICAgICAzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTEyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAyLFxuICAgICAgICAxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNSxcbiAgICAgICAgOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWkVwS3ppdU8ycUcyUVZhZ3BvZGkzWk9FZkdqcTk2ZjdMRytjVmpUN25END1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRDNjQ1MkEwNDRGQjNBQzE5OEQxRkJCMEE5NjU4MTM5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjIxNTM0OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUZENDc3QzA0NTBDRTZGODZFMzcyQTMzNjQyMURCOTBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjE1MzQ5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRHbFpQNE1tUXQyWktNQUtOeWtfM3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmVlYzA3Y2YtNzE2NC00ZjczLWEwNDctNGM0ZTE0NTdlYzE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAxODAsXG4gICAgICAzOSxcbiAgICAgIDIxNixcbiAgICAgIDIwNyxcbiAgICAgIDQsXG4gICAgICAzNixcbiAgICAgIDMxLFxuICAgICAgNzksXG4gICAgICA1LFxuICAgICAgMTYsXG4gICAgICAyNTIsXG4gICAgICAxMDgsXG4gICAgICAxMTAsXG4gICAgICAxMTIsXG4gICAgICAxMDgsXG4gICAgICAyMTYsXG4gICAgICA1NSxcbiAgICAgIDE3MSxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDEyNyxcbiAgICAgIDE0MCxcbiAgICAgIDEyLFxuICAgICAgMixcbiAgICAgIDExMixcbiAgICAgIDEyNyxcbiAgICAgIDE2MyxcbiAgICAgIDE2OSxcbiAgICAgIDE4MCxcbiAgICAgIDY2LFxuICAgICAgMjgsXG4gICAgICAyMzksXG4gICAgICAzLFxuICAgICAgMjI5LFxuICAgICAgMTIwLFxuICAgICAgMjQyLFxuICAgICAgMjU0LFxuICAgICAgMjM5LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFCUzY3Qk1EXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzEwMDMwNzE6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYrdqp24zZhVwiLFxuICAgIFwibGlkXCI6IFwiMjQ0NTI1NjkxODcxMjU3OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzS3JyY0JFSy9YbTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU0FMZzVVZ3IyOExZbkdzNXhEWGp3NkRacW9GSzBsVVRDRkZsemUwK1dCbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUZXJZVzExdUlRZnowaENDMy9iRTh6dTMzL0RuRG5oVS9xVmtsVkFiYXltWVc0bjJqZzIwNVQxNC9HZWxkM1FLQThXZG9HQ1d2RlBuSzhMc1pxbWFEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ1ekxZTEUxQkppQ2FrWTZNWnpvVCtLNjFkNG8vaDE2NnVBZlMraGFzaUhqSWlnQlJHMVhSVmlWZGJ5NXFJY2NvMnVXbjd4L0Y0S3FmOVhoR080NjZDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzEwMDMwNzE6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjIxNTM0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBKWlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUEpaLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWUdFYzVsa29MZHRiSHhpYTltS2lQVDArOGVUa0ZBb1pBZnNpblFWNmRqVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODQ1NDIwNzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjIxNTM0OTQyOFwifSIKfQ="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "حکیم",
  ownername:process.env.OWNER_NAME|| "Usama",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "1WXVmBXjsJWWUFfq1kTP78RQ",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL-Md"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
