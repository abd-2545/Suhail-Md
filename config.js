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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_30_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMixcbiAgICAgICAgNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM4LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgMjUwLFxuICAgICAgICA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjgsXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg4LFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICA3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NixcbiAgICAgICAgMjE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQQW81NFB6MVl3WkhLRjZKZzkwOFc0am1tYkltbDh3Z0ozMzB1U0EvTlZnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyZVNEbm12aVIwNlNSZ056bmdSUm93XCIsXG4gIFwicGhvbmVJZFwiOiBcIjYxNGZkMTljLThjZmMtNGU3OS1iZGU5LTdjYjNhYjZmMjZlMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxNDMsXG4gICAgICAxODQsXG4gICAgICAzMSxcbiAgICAgIDE1MCxcbiAgICAgIDcyLFxuICAgICAgNTgsXG4gICAgICA4NixcbiAgICAgIDEyNixcbiAgICAgIDIxNSxcbiAgICAgIDE0NCxcbiAgICAgIDExMSxcbiAgICAgIDE2LFxuICAgICAgMzYsXG4gICAgICAxMjcsXG4gICAgICAxMDEsXG4gICAgICAyMzQsXG4gICAgICAxMDMsXG4gICAgICAxOTUsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzgsXG4gICAgICA3MyxcbiAgICAgIDE1OSxcbiAgICAgIDExMixcbiAgICAgIDYyLFxuICAgICAgMTQ1LFxuICAgICAgOTgsXG4gICAgICA5NyxcbiAgICAgIDE2NixcbiAgICAgIDE2NyxcbiAgICAgIDIwMixcbiAgICAgIDYwLFxuICAgICAgNCxcbiAgICAgIDIyMyxcbiAgICAgIDU2LFxuICAgICAgODAsXG4gICAgICAyNDUsXG4gICAgICAxMjQsXG4gICAgICA2NyxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRROEtHVDNFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNzEwMDMwNzE6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLYrdqp24zZhVwiLFxuICAgIFwibGlkXCI6IFwiMjQ0NTI1NjkxODcxMjU3OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lYYy9LNENFT2Y1c2JVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibnZGT3N4MWpuSEhWcS9TRndmMGVaSko1MjdYcm91eXBYTU5HelRtNE1GYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwSHJBVzIzVGNLbjdramsyMzlKNnRyUUc2ZE5JMEtHZU1xWXRTSUhmMUxuWVZOWkVKby9CUUJ3QVZxYk82S2lNQ21HMXQrNndXbFp3UG43M2kxTW9Cdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2Qkc4T05CU1ZsdGJCMVl3NWFQYmtKamdsOVdBbHBXMURhclA4bC9GY3E2YVNuTk5teUxqcDh0UU4zZ3RoVWtCVXJXdXNGMllEQ0hVbjM4L0s2cXFpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNzEwMDMwNzE6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI1ODAyMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKVk5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpWTi5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
