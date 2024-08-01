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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_06_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTksXG4gICAgICAgIDg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDU5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE5LFxuICAgICAgICA1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTksXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgMTU0LFxuICAgICAgICA5OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MixcbiAgICAgICAgMTg2LFxuICAgICAgICAzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyLFxuICAgICAgICAxODAsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyLFxuICAgICAgICA2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzLFxuICAgICAgICA2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICAzNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMCxcbiAgICAgICAgODksXG4gICAgICAgIDI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICA3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDQzLFxuICAgICAgICA2LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOTzErbnpCVnZ1bVpVRG9pNnRNN1NWcGVKc3Npdkt0ZnloUTdhUW45bWI4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkEwN0I5NzcyQTI5NzVBOUJEMkE5NTE0QjQyRkVFM0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTQyNzYzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDcxMDAzMDcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDRDg3QzYwODBCREJEQjlERTg5NjlEMDYyMUJDQjRCMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1NDI3NjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwNzEwMDMwNzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZDQzc1RDY4N0M2RDhBNDg5QTQ5Mzc1RjQ1MkVGMEM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU0Mjc2NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA3MTAwMzA3MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzRBODEwQjE1RUY4MjZBNkQ5MDYyRkRBQ0JCMjAyNEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTQyNzY0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpuR05LVzVKU2ZpSUdjZXVlQ1F6VUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjI3YzE4N2MtMjY1Ni00YmMwLWExNzQtOGRjMmIwMDY0NWU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NixcbiAgICAgIDI0MCxcbiAgICAgIDIxOCxcbiAgICAgIDE2MSxcbiAgICAgIDUyLFxuICAgICAgMTU5LFxuICAgICAgMzIsXG4gICAgICAxMjQsXG4gICAgICAxMTcsXG4gICAgICAyNyxcbiAgICAgIDE5MixcbiAgICAgIDI0NCxcbiAgICAgIDI1MixcbiAgICAgIDE0NSxcbiAgICAgIDQzLFxuICAgICAgMjM0LFxuICAgICAgMzIsXG4gICAgICAyMjMsXG4gICAgICA4MSxcbiAgICAgIDIwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDExNixcbiAgICAgIDE1OSxcbiAgICAgIDE3NSxcbiAgICAgIDExOCxcbiAgICAgIDEzNyxcbiAgICAgIDEzMSxcbiAgICAgIDEyOCxcbiAgICAgIDE5NixcbiAgICAgIDE5OSxcbiAgICAgIDczLFxuICAgICAgMjM3LFxuICAgICAgMTQ2LFxuICAgICAgMTcsXG4gICAgICAxMjMsXG4gICAgICAyMjgsXG4gICAgICAxNjUsXG4gICAgICAyNTMsXG4gICAgICAyMTQsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSVzhIRE1BNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDcxMDAzMDcxOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi2K3aqduM2YVcIixcbiAgICBcImxpZFwiOiBcIjI0NDUyNTY5MTg3MTI1NzoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJWGMvSzRDRUtiVnI3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm52Rk9zeDFqbkhIVnEvU0Z3ZjBlWkpKNTI3WHJvdXlwWE1OR3pUbTRNRmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaVVkcVRvRmR0MG5CS1V6Y0g0OXNyc3ZxMW5KUzNEQnNLdFhXUVJnbGNnYVBiekFNc1crS1oyT2wyWkVQbG5ubUM5Z3F3TUdKYUlENFozMDRLS3YyQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNzJPemhtdmsvK3NGenllM3FuajZqeDQrVXZtQjdiRlZ1YWtFckllRjR1TFc0RmN6azJuUkswSmI1TUNnbVJNdFk0U2Rtbk4yWUJvdXNQUkpIT0Q0amc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDcxMDAzMDcxOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTQyNzYxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlZOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKVk4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaMGtsbzRpS0FpTTZkZHZjQW5kWlBXd0pVemJKMmRZdEMrbnJKSC9JMG5nPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYzNTM4MzMwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNTQyNzYyMjQxXCJ9Igp9="  // PUT your SESSION_ID 


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
