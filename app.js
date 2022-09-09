let nodemailer = require("nodemailer");
require("dotenv").config();
// let fs = require('fs');
// let { promisify } = require('util');
// let handlebars = require('handlebars');
// let readFile = promisify(fs.readFile);

// let html = readFile('./newsletter.html', 'utf8');
//     let template = handlebars.compile(html);
//     let emailToSend = template;

let transporter = nodemailer.createTransport({
  // service: "gmail",
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    // user: process.env.GMAIL_USER,
    // pass: process.env.GMAIL_PASS,
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
});

let mailList = [
  "kinjal.sangani@memechat.app",
  // "taaran@memechat.app",
  // "agnik@memechat.app",
  // "ujjawal@memechat.app",
  // "monish@memechat.app",
  // "neil@memechat.app",
  // "akram@memechat.app",
  // "abdul@memechat.app",
  // "hasin.midday@memechat.app",
  // "ankush@memechat.app",
  // "ruchi@memechat.app",
  // "shubham@memechat.app",
  // "shubham.gajra@memechat.app",
  // "gargi@memechat.app",
  // "mishal.udeshi@memechat.app",
  // "yashvi.mehta@memechat.app",
  // "bhavesh.parihar@memechat.app",
  // "rohan.marwaha@memechat.app",
  // "anand.macwan@memechat.app",
  // "shikhar.singh@memechat.app",
  // "harish.sinha@memechat.app",
  // "yash@memechat.app",
  // "aniket@memechat.app",
  // "rahulzucc@memechat.app",
  // "shivansh.chawla@memechat.app",
  // "vasu@memechat.app",
  // "jaimin.gosai@memechat.app",
  // "jaymin.suhagiya@memechat.app",
  // "ankit.jaiswal@memechat.app",
  // "riyaz@memechat.app",
  // "sanjeev.kumar@memechat.app",
  // "ashutosh.rajput@memechat.app",
  // "mushir.khan@memechat.app",
  // // "tanya.chaudhary@memechat.app",
  // "rajat.srivastava@memechat.app",
  // "Shivamarora1221@gmail.com",
  // "ritesh.suman@memechat.app",
  // "ratanjeet51@gmail.com",
  // "himanshukaushik437@gmail.com",
  // "anmol.singh@memechat.app",
  // "naganiruddha9@gmail.com",
  // "Gautam.sharma@memechat.app",
  // "shahkenil900@gmail.com",
  // "aich.aditya2000@gmail.com",
  // "jatinhemnani01@gmail.com",
  // "rjustad555@gmail.com",
  // "naman7451@gmail.com",
  // "nikhil.n1209@gmail.com",
  // "varunifht@gmail.com",
  // "aryabenade@gmail.com",
  // "anshsingh520@gmail.com",
  // "soham.mundhada@gmail.com",
  // "adarshbajpai2002@icloud.com",
  // "asimalimidday09@gmail.com",
  // "himanshupaliwal1503@gmail.com",
  //   "dikshithvishnu2@gmail.com",
  "dikshith@memechat.app",
  //   "eng18ct0033.vdikshith@gmail.com",
  //   "memechatapp1@gmail.com",
  //   "Amitrajyadav947@gmail.com",
  //   "dipeshsahu2620@gmail.com",
  //   "vishalkanjwani2006@gmail.com",
  //   "lalitverma7060@gmail.com",
  //   "arushiverma175@gmail.com",
  //   "choudharyamit913@gmail.com",
  //   "yashh.you@gmail.com",
  //   "cp9470899@gmail.com",
  //   "Gauravgoswami207@gmail.com",
  //   "rahul919209@gmail.com",
  //   "einsteinmemer@gmail.com",
  //   "jhaayush61@gmail.com",
  //   "vishalkumar99399@gmail.com",
  //   "roshansinghb08@gmail.com",
  //   "bikramroy52000@gmail.com",
  //   "ankitnegiofficial@gmail.com",
  //   "aryanpg23@gmail.com",
  //   "amitmetri57@gmail.com",
  //   "m.ashutosh963@gmail.com",
  //   "dalald304@gmail.com",
  //   "nr811082@gmail.com",
  //   "rishi.verma84392@gmail.com",
  //   "ashusingla532@gmail.com",
  //   "himanshuuchaudhary1999@gmail.com",
  //   "jarman1019@gmail.com",
  //   "niharrpaliwal6662@gmail.com",
  //   "sachinst9621@gmail.com",
  //   "tejasshinde123456@gmail.com",
  //   "jeeta1b2c3@gmail.com",
  //   "iamfirki@gmail.com",
  //   "gaurangbhardwaj007@gmail.com",
  //   "shobhitkashyap880@gmail.com",
  //   "manya1910@gmail.com",
  //   "aamirbaba62@gmail.com",
  //   "diwakar.arya9810@gmail.com",
  //   "inderjeethope@gmail.com",
  //   "vickysingh842034@gmail.com",
  //   "dakansharma@gmail.com",
  //   "yash214kumar@gmail.com",
  //   "dikshith@memechat.app",
  //   "akshatkothari41@gmail.com",
  //   "nandishjoshi7@gmail.com",
  //   "gourpratham24@gmail.com",
  //   "kothariayush0101@gmail.com",
  //   "prakharj124@gmail.com",
  //   "sharma.hritik654@gmail.com",
  //   "ujjawalmishra035@gmail.com",
  //   "pradeep.bhargav.7791@gmail.com",
  //   "mukulr05@gmail.com",
  //   "dankharsh@gmail.com",
  //   "asinghal2001@gmail.com",
  //   "saraschourasiya886@gmail.com",
  //   "adistylish25@gmail.com",
  //   "depanrajesh68@gmail.com",
  //   "mansuriaman621@gmail.com",
  //   "chouhan78vikas@gmail.com",
  //   "Shagunjugran44@gmail.com",
  //   "tanishqdhama369@gmail.com",
  //   "subhsingh241@gmail.com",
  //   "panditamanmishra1357@gmail.com",
  //   "harshitsharma3012@gmail.com",
  //   "sahilmondal140902@gmail.com",
];

//   let sendMail = async () => {

//   }
mailList.forEach(function (to, i, array) {
  let mailOptions = {
    from: "store@memechat.app",
    subject: "Test Email",
    html: `
    
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
style="font-family:arial, 'helvetica neue', helvetica, sans-serif">

<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1" name="viewport">
<meta name="x-apple-disable-message-reformatting">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="telephone=no" name="format-detection">
<title>MemeChat Newsletter #2</title>
<!--[if (mso 16)]>
<style type="text/css">
a {text-decoration: none;}
</style>
<![endif]-->
<!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
<!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG></o:AllowPNG>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
<style type="text/css">
    /* body {
        width: 650px;
    }
    @media screen and (max-width: 50em) {
        body {
        width: 100%;
    }
    } */
    #outlook a {
        padding: 0;
    }

    .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
    }

    a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
    }

    .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
    }

    [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 10px 30px 10px 30px !important;
    }

    @media only screen and (max-width:600px) {

        p,
        ul li,
        ol li,
        a {
            line-height: 150% !important
        }

        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
            line-height: 120% !important
        }

        h1 {
            font-size: 36px !important;
            text-align: left
        }

        h2 {
            font-size: 26px !important;
            text-align: left
        }

        h3 {
            font-size: 20px !important;
            text-align: left
        }

        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
            font-size: 36px !important;
            text-align: left
        }

        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
            font-size: 26px !important;
            text-align: left
        }

        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
            font-size: 20px !important;
            text-align: left
        }

        .es-menu td a {
            font-size: 12px !important
        }

        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
            font-size: 14px !important
        }

        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
            font-size: 14px !important
        }

        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
            font-size: 14px !important
        }

        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
            font-size: 12px !important
        }

        *[class="gmail-fix"] {
            display: none !important
        }

        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
            text-align: center !important
        }

        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
            text-align: right !important
        }

        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
            text-align: left !important
        }

        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
            display: inline !important
        }

        .es-button-border {
            display: inline-block !important
        }

        a.es-button,
        button.es-button {
            font-size: 20px !important;
            display: inline-block !important
        }

        .es-adaptive table,
        .es-left,
        .es-right {
            width: 100% !important
        }

        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
            width: 100% !important;
            max-width: 600px !important
        }

        .es-adapt-td {
            display: block !important;
            width: 100% !important
        }

        .adapt-img {
            width: 100% !important;
            height: auto !important
        }

        .es-m-p0 {
            padding: 0 !important
        }

        .es-m-p0r {
            padding-right: 0 !important
        }

        .es-m-p0l {
            padding-left: 0 !important
        }

        .es-m-p0t {
            padding-top: 0 !important
        }

        .es-m-p0b {
            padding-bottom: 0 !important
        }

        .es-m-p20b {
            padding-bottom: 20px !important
        }

        .es-mobile-hidden,
        .es-hidden {
            display: none !important
        }

        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important
        }

        tr.es-desk-hidden {
            display: table-row !important
        }

        table.es-desk-hidden {
            display: table !important
        }

        td.es-desk-menu-hidden {
            display: table-cell !important
        }

        .es-menu td {
            width: 1% !important
        }

        table.es-table-not-adapt,
        .esd-block-html table {
            width: auto !important
        }

        table.es-social {
            display: inline-block !important
        }

        table.es-social td {
            display: inline-block !important
        }

        .es-m-p5 {
            padding: 5px !important
        }

        .es-m-p5t {
            padding-top: 5px !important
        }

        .es-m-p5b {
            padding-bottom: 5px !important
        }

        .es-m-p5r {
            padding-right: 5px !important
        }

        .es-m-p5l {
            padding-left: 5px !important
        }

        .es-m-p10 {
            padding: 10px !important
        }

        .es-m-p10t {
            padding-top: 10px !important
        }

        .es-m-p10b {
            padding-bottom: 10px !important
        }

        .es-m-p10r {
            padding-right: 10px !important
        }

        .es-m-p10l {
            padding-left: 10px !important
        }

        .es-m-p15 {
            padding: 15px !important
        }

        .es-m-p15t {
            padding-top: 15px !important
        }

        .es-m-p15b {
            padding-bottom: 15px !important
        }

        .es-m-p15r {
            padding-right: 15px !important
        }

        .es-m-p15l {
            padding-left: 15px !important
        }

        .es-m-p20 {
            padding: 20px !important
        }

        .es-m-p20t {
            padding-top: 20px !important
        }

        .es-m-p20r {
            padding-right: 20px !important
        }

        .es-m-p20l {
            padding-left: 20px !important
        }

        .es-m-p25 {
            padding: 25px !important
        }

        .es-m-p25t {
            padding-top: 25px !important
        }

        .es-m-p25b {
            padding-bottom: 25px !important
        }

        .es-m-p25r {
            padding-right: 25px !important
        }

        .es-m-p25l {
            padding-left: 25px !important
        }

        .es-m-p30 {
            padding: 30px !important
        }

        .es-m-p30t {
            padding-top: 30px !important
        }

        .es-m-p30b {
            padding-bottom: 30px !important
        }

        .es-m-p30r {
            padding-right: 30px !important
        }

        .es-m-p30l {
            padding-left: 30px !important
        }

        .es-m-p35 {
            padding: 35px !important
        }

        .es-m-p35t {
            padding-top: 35px !important
        }

        .es-m-p35b {
            padding-bottom: 35px !important
        }

        .es-m-p35r {
            padding-right: 35px !important
        }

        .es-m-p35l {
            padding-left: 35px !important
        }

        .es-m-p40 {
            padding: 40px !important
        }

        .es-m-p40t {
            padding-top: 40px !important
        }

        .es-m-p40b {
            padding-bottom: 40px !important
        }

        .es-m-p40r {
            padding-right: 40px !important
        }

        .es-m-p40l {
            padding-left: 40px !important
        }

        button.es-button {
            width: 100%
        }
    }
</style>
</head>

<body data-new-gr-c-s-loaded="14.1062.0"
style="font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
<div class="es-wrapper-color" style="background-color:#FAFAFA">
    <!--[if gte mso 9]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
<v:fill type="tile" color="#fafafa"></v:fill>
</v:background>
<![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
        <tr>
            <td valign="top" style="padding:0;Margin:0">
                <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                    <tr>
                        <td class="es-info-area" align="center" style="padding:0;Margin:0">
                            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                bgcolor="#FFFFFF">
                                <tr>
                                    <td align="left" style="padding:20px;Margin:0">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top"
                                                    style="padding:0;Margin:0;width:560px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" class="es-infoblock es-m-txt-c"
                                                                style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">
                                                                    <a target="_blank"
                                                                        href="https://meme-chat.github.io/Email-Templates/newsletter-2.html"
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">View
                                                                        online version</a></p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-header" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                    <tr>
                        <td align="center" style="padding:0;Margin:0">
                            <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0"
                                cellspacing="0"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                <tr>
                                    <td align="left" bgcolor="#000"
                                        style="Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;padding-bottom:40px;background-color:#000000;background-image:url(https://i.ibb.co/LxjLLLL/image-8.png);background-repeat:no-repeat;background-position:left top"
                                        background="https://i.ibb.co/LxjLLLL/image-8.png">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td class="es-m-p0r" valign="top" align="center"
                                                    style="padding:0;Margin:0;width:560px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;font-size:0px"><a
                                                                    target="_blank" href="https://memechat.app/"
                                                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#666666;font-size:14px"><img
                                                                        src="https://i.ibb.co/wNv8vrW/image-10.png"
                                                                        alt="Logo"
                                                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                        width="200" title="Logo"></a></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                    <tr>
                        <td align="center" style="padding:0;Margin:0">
                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                cellspacing="0"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                <tr>
                                    <td align="left"
                                        style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top"
                                                    style="padding:0;Margin:0;width:560px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="left" class="es-m-txt-l"
                                                                style="padding:0;Margin:0;padding-bottom:10px;padding-top:20px">
                                                                <h1
                                                                    style="Margin:0;line-height:46px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:46px;font-style:normal;font-weight:bold;color:#333333">
                                                                    Hi Y'all,</h1>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left"
                                                                style="padding:0;Margin:0;padding-top:30px;padding-bottom:30px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                                                                    Hoping that your week is going well. You all
                                                                    have been working extremely hard and it's time
                                                                    to step up your game!<br><br>In the recent past
                                                                    start-ups like Unacademy have laid off 600
                                                                    employees, Vedantu with 424, Meesho with 150
                                                                    employees, and so on. Over 8,300 employees have
                                                                    been laid off from 13 well-known Indian
                                                                    start-ups which have ten times greater funding
                                                                    than ours. Not only this but many big- tech
                                                                    companies like Google, Microsoft, and Amazon
                                                                    have even frozen fresh hiring. You all must be
                                                                    aware of the global sell-off pressure which
                                                                    prompted a stock market crash earlier this month
                                                                    and it hasn't been going too well for start-ups
                                                                    since then. Interpreting this as a cost-cutting
                                                                    measure to focus on gaining higher profits.</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                    <tr>
                        <td align="center" style="padding:0;Margin:0">
                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                cellspacing="0"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                <tr>
                                    <td align="left"
                                        style="Margin:0;padding-bottom:10px;padding-top:20px;padding-left:20px;padding-right:20px">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top"
                                                    style="padding:0;Margin:0;width:560px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:5px;font-size:0px">
                                                                <img class="adapt-img"
                                                                    src="https://i.ibb.co/9grPbZm/Whats-App-Image-2022-05-31-at-9-56-11-PM.jpg"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="560"></td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left"
                                        style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top"
                                                    style="padding:0;Margin:0;width:0px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="left" class="es-m-txt-l"
                                                                style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                                                                    However, we at Meme Chat believe that this isn't
                                                                    the best move. Employees are the ones that take
                                                                    a company to greater heights. We are nothing but
                                                                    utterly grateful to you for your contribution be
                                                                    it in the good times or now. We have been
                                                                    looking forward and expect more as you give your
                                                                    best, outdo yourself and strive towards making
                                                                    MemeChat the best platform of all times! You all
                                                                    are amazingly talented individuals and there is
                                                                    no one else we would rather work with. As the
                                                                    markets are plummeting and we are almost in a
                                                                    recession please be kind and still give your
                                                                    best even if there aren't the most likeable
                                                                    rewards or increments coming your way until we
                                                                    raise another round of funding. With a promise
                                                                    to take you all on a fun-filled retreat as soon
                                                                    as we do.&nbsp; Consider this a wake-up call,
                                                                    make us proud for believing in you.</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                    <tr>
                        <td align="center" style="padding:0;Margin:0">
                            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                cellspacing="0"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                <tr>
                                    <td align="left" style="padding:20px;Margin:0">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="left" style="padding:0;Margin:0;width:560px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;font-size:0px"><img
                                                                    class="adapt-img"
                                                                    src="https://i.ibb.co/C5DKdDL/Whats-App-Image-2022-05-31-at-9-58-13-PM-1.jpg"
                                                                    alt
                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                                                    width="560"></td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" class="es-m-txt-l"
                                                                style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;color:#333333;font-size:18px">
                                                                    <em><strong>Tough times never last, but tough
                                                                            people do!&nbsp;</strong></em></p>
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px;display:none">
                                                                    <br></p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" style="padding:0;Margin:0">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                                                                    Regards,<br></p>
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                                                                    HR &amp; Team</p>
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;font-size:14px">
                                                                    MemeChat Private Limited</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-footer" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
                    <tr>
                        <td align="center" style="padding:0;Margin:0">
                            <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:640px">
                                <tr>
                                    <td align="left"
                                        style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="left" style="padding:0;Margin:0;width:600px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                                                                <table cellpadding="0" cellspacing="0"
                                                                    class="es-table-not-adapt es-social"
                                                                    role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr>
                                                                        <td align="center" valign="top"
                                                                            style="padding:0;Margin:0;padding-right:40px">
                                                                            <a target="_blank"
                                                                                href="https://www.facebook.com/memetechpvtltd"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img
                                                                                    title="Facebook"
                                                                                    src="https://uqhesy.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
                                                                                    alt="Fb" width="32"
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                        </td>
                                                                        <td align="center" valign="top"
                                                                            style="padding:0;Margin:0;padding-right:40px">
                                                                            <a target="_blank"
                                                                                href="https://twitter.com/memechat_app"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img
                                                                                    title="Twitter"
                                                                                    src="https://uqhesy.stripocdn.email/content/assets/img/social-icons/logo-black/twitter-logo-black.png"
                                                                                    alt="Tw" width="32"
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                        </td>
                                                                        <td align="center" valign="top"
                                                                            style="padding:0;Margin:0;padding-right:40px">
                                                                            <a target="_blank"
                                                                                href="https://www.instagram.com/memechatapp/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img
                                                                                    title="Instagram"
                                                                                    src="https://uqhesy.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png"
                                                                                    alt="Inst" width="32"
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                        </td>
                                                                        <td align="center" valign="top"
                                                                            style="padding:0;Margin:0;padding-right:40px">
                                                                            <a target="_blank"
                                                                                href="https://www.youtube.com/channel/UCh6Dx8tAeSVuQ02-FGVX_3g"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img
                                                                                    title="Youtube"
                                                                                    src="https://uqhesy.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png"
                                                                                    alt="Yt" width="32"
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                        </td>
                                                                        <td align="center" valign="top"
                                                                            style="padding:0;Margin:0"><a
                                                                                target="_blank"
                                                                                href="https://www.linkedin.com/company/meme-chat/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:12px"><img
                                                                                    title="Linkedin"
                                                                                    src="https://uqhesy.stripocdn.email/content/assets/img/social-icons/logo-black/linkedin-logo-black.png"
                                                                                    alt="In" width="32"
                                                                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center"
                                                                style="padding:0;Margin:0;padding-bottom:35px">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">
                                                                    MemeChat © 2022&nbsp;MemeChat Private Limited.
                                                                    All Rights Reserved.</p>
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;color:#333333;font-size:12px">
                                                                    <br></p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="padding:0;Margin:0">
                                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                                    class="es-menu" role="presentation"
                                                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                    <tr class="links">
                                                                        <td align="center" valign="top"
                                                                            width="33.33%"
                                                                            style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0">
                                                                            <a target="_blank"
                                                                                href="https://memechat.app/"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:12px">Visit
                                                                                Us </a></td>
                                                                        <td align="center" valign="top"
                                                                            width="33.33%"
                                                                            style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0;border-left:1px solid #cccccc">
                                                                            <a target="_blank"
                                                                                href="https://memechat.app/privacy.html"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:12px">Privacy
                                                                                Policy</a></td>
                                                                        <td align="center" valign="top"
                                                                            width="33.33%"
                                                                            style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:5px;border:0;border-left:1px solid #cccccc">
                                                                            <a target="_blank"
                                                                                href="https://memechat.app/privacy.html"
                                                                                style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:arial, 'helvetica neue', helvetica, sans-serif;color:#999999;font-size:12px">Terms
                                                                                of Use</a></td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <table cellpadding="0" cellspacing="0" class="es-content" align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                    <tr>
                        <td class="es-info-area" align="center" style="padding:0;Margin:0">
                            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                bgcolor="#FFFFFF">
                                <tr>
                                    <td align="left" style="padding:20px;Margin:0">
                                        <table cellpadding="0" cellspacing="0" width="100%"
                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                            <tr>
                                                <td align="center" valign="top"
                                                    style="padding:0;Margin:0;width:560px">
                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                        role="presentation"
                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                        <tr>
                                                            <td align="center" class="es-infoblock"
                                                                style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC">
                                                                <p
                                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">
                                                                    <a target="_blank" href=""
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a>No
                                                                    longer want to receive these emails?&nbsp;<a
                                                                        href="" target="_blank"
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">Unsubscribe</a>.<a
                                                                        target="_blank" href=""
                                                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"></a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>
</body>

</html>

          `,
  };
  mailOptions.to = to;
  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent to: " + to);
    }
    if (i === mailList.length - 1) {
      mailOptions.transporter.close();
    }
  });
});
