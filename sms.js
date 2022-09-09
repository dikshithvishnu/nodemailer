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
  "vanshikasandeephegde@gmail.com",
  "taaran@memechat.app",
  "riddhisaraf19@gmail.com",
  "ranuj9834@gmail.com",
  "miteshprajapati854@gmail.com",
  "sovaibhav25@gmail.com",
  "riteshpadhan24@gmail.com",
  "sanyamdube03@gmail.com",
  "Getabhisheksayre@gmail.com",
  "rajputravi009@gmail.com",
  "yavdo.ond@gmail.com",
  "anuragkethuniya61@gmail.com",
  "ksaurav48@gmail.com",
  "kaushalkishor0000@gmail.com",
  "pulkitshakya225@gmail.com",
  "hridanshu02@gmail.com",
  "vardhmanjain50@gmail.com",
  "nishnatmahajan@gmail.com",
  "singhshashank2962@gmail.com",
  "kanishkkhandelwal@gmail.com",
  "shubhcode.dev@gmail.com",
  "monty6533sahota@gmail.com",
  "dhmanshu@gmail.com",
  "Sahilkorgaonkar099@gmail.com",
  "keshavrathi2000@rediffmail.com",
  "sachinaghicha12@gmail.com",
  "sangeeta1234jha@gmail.com",
  "chaitanyabhau4@gmail.com",
  "savesparsh@gmail.com",
  "nevilparekh2003@gmail.com",
  "yashkadam81120@gmail.com",
  "vandana41115@gmail.com",
  "kaps.yash@gmail.com",
  "nucleyapro@gmail.com",
  "bhivrajsingh1@gmail.com",
  "soodsatyarth@gmail.com",
  "sshhhxt@yahoo.com",
  "ayushbhandarixb123@gmail.com",
  "bttghorse@gmail.com",
  "marshaltrivedi@gmail.com",
  "kushaan07mehta@gmail.com",
  "adityasinghbhadoria00@gmail.com",
  "sameerpoddar31@gmail.com",
  "valakirahul69@gmail.com",
  "kaviarasandevendran9@gmail.com",
  "tapishpandey224@gmail.com",
  "aaryanvt1602@gmail.com",
  "khatwanidhiru@gmail.com",
  "shehzanmehta@gmail.com",
  "girishkumarcbs@gmail.com",
  "deepak.l.meena007@gmail.com",
  "zakirahmed1248@gmail.com",
  "rakeshrawat300@gmail.com",
  "syadavision@gmail.com",
  "ramansinghraftaar@gmail.com",
  "vijaysharma2001.vs@gmail.com",
  "surajrawal2299@gmail.com",
  "zimanshu007@gmail.com",
  "udaivirsingh135@gmail.com",
  "akku8932914580@gmail.com",
  "ladmonster63@gmail.com",
  "devadiga4216@gmail.com",
  "aryanpuri0203@gmail.com",
  "rahuldatika181@gmail.com",
  "isharvaj@yahoo.com",
  "parekhvidit47@gmail.com",
  "abhishekplathia20@gmail.com",
  "richa.rs789@gmail.com",
  "ashmitnarkhede10@gmail.com",
  "anjaliludhani11@gmail.com",
  "sagarpandit40@gmail.com",
  "omborse007@gmail.com",
  "tanejadhruv1908@gmail.com",
  "malik.naman123@gmail.com",
  "mr.suman6002@gmail.com",
  "sagarworldwide12@gmail.com",
  "ishanimenghani@gmail.com",
  "ashutoshgupta581@gmail.com",
  "abhibhil3536@gmail.com",
  "shaktisingha058@gmail.com",
  "seenushankavaram016@gmail.com",
  "saurabhmanu1399@gmail.com",
  "nuvpreetsingh@gmail.com",
  "singhdevraj9425@gmail.com",
  "yr26072002@gmail.com",
  "sagarmarotha2328@gmail.com",
  "jatin001yadav@gmail.com",
  "vaibs23697@gmail.com",
  "kiranahir79@gmail.com",
  "aa266771@gmail.com",
  "memedumpin@gmail.com",
  "kahdhsj22@gmail.com",
  "coolboyshiviydvv@gmail.com",
  "RuchikSonpimple38@gmail.com",
  "khuzemaelectricwala@gmail.com",
  "DMSP2507@GMAIL.COM",
  "17vaibhavsharma@gmail.com",
  "Ufan37857@gmail.com",
  "himanshu16rajput@gmail.com",
  "soumyadeeppal2001@gmail.com",
  "nikhilhingmire@gmail.com",
  "shubhamkuche123@gmail.com",
  "laveshkhaj@gmail.com",
  "keshvendrapratap73@gmail.com",
  "aashurawat1431@gmail.com",
  "ravalbharat179@gmail.com",
  "mohantydivyam17@gmail.com",
  "preemekka862@gmail.com",
  "bilal7mustafa@gmail.com",
  "vyankteshnagre@gmail.com",
  "jpofficial12345@gmail.com",
  "krishnarsinghani999@gmail.com",
  "aryangad84@gmail.com",
  "ritikkohad27@gmail.com",
  "maitraykaushik@gmail.com",
  "rsanket203@gmail.com",
  "gurjarprince919@gmail.com",
  "hpal127@gmail.com",
  "thakutmohit9@gmail.com",
  "addharsh@gmail.com",
  "divyanshp720@gmail.com",
  "saranshpatel1999@gmail.com",
  "asingh53606@gmail.com",
  "akp80428@gmail.com",
  "souravks.2600@gmail.com",
  "saqlainmustaque010@gmail.com",
  "kishan.bijjur@gmail.com",
  "lochabvarnit15@gmail.com",
  "gopal93500@gmail.com",
  "gouravmakhijame@gmail.com",
  "ambadearya@gmail.com",
  "abhishake644@gmail.com",
  "amankangale@gmail.com",
  "iamamitkumar2507@gmail.com",
  "lakshyamathur00@gmail.com",
  "gankit0075@gmail.com",
  "gauravsinghgusain247@gmail.com",
  "porwal.sarthak7641@gmail.com",
  "arshdeepsinghsyan@gmail.com",
  "cutiepriya67@gmail.com",
  "harshk5432@gmail.com",
  "Prempatel1945@gmail.com",
  "animeshmandalani@gmail.com",
  "tanishqmish07@gmail.com",
  "akashdeeph56@gmail.com",
  "gbiswas2110@gmail.com",
  "chaurasiaaaryan333@gmail.com",
  "arunraturi1999@gmail.com",
  "raunakgupta.17@nshm.edu.in",
  "akmathore99@gmail.com",
  "jasmanjeetsinghmehta@duck.com",
  "ashwinpadwal002@gmail.com",
  "stinkystickman1216@gmail.com",
  "kaulpiya@gmail.com",
  "awasthibharat1@gmail.com",
  "omankhan08@gmail.com",
  "jatinsinghcap04@gmail.com",
  "arhatnotey98@gmail.com",
  "prince7658daksh@gmail.com",
  "ankitbantiya@gmail.com",
  "vinyvij@gmail.com",
  "ramubhakt567@gmail.com",
  "gajjubanna862004@gmail.com",
  "ayushohlyan007@gmail.com",
  "tyagi.madhav99@gmail.com",
  "tusharsinha1452@gmail.com",
  "vickyvanshajsingh@gmail.com",
  "sanketdavande27@gmail.com",
  "durgeshpaviya02@gmail.com",
  "tanishwahicool@gmail.com",
  "smartshiva969@gmail.com",
  "zaidajmeri07@gmail.com",
  "skapil142@gmail.com",
  "ketannaulakha09@gmail.com",
  "prathvinaik100@gmail.com",
  "sonal.maggo79@gmail.com",
  "praveenlokesh21@gmail.com",
  "harshkjolania@gmail.com",
  "hussaindanish50@gmail.com",
  "arnavjain30@gmail.com",
  "rupanshurana@gmail.com",
  "ayushranjankashyap101@gmail.com",
  "dhruv45meid@gmail.com",
  "anubhavtrailblazer@gmail.com",
  "tusharrawat311@gmail.com",
  "verma973ishaan@gmail.com",
  "1jayacharya@gmail.com",
  "sahurohitkumar916@gmail.com",
  "abhayprabhupandit@gmail.com",
  "kumbhatumang001@gmail.com",
  "benalshaurya@gmail.com",
  "monikanagpal40@gmail.com",
  "ajaymelwani@icloud.com",
  "harshkurmi2220@gmail.com",
  "gandhigandu21@gmail.com",
  "aniiiketpal@gmail.com",
  "dhruv.dkgautam@gmail.com",
  "prafulldahariya88pd@gmail.com",
  "adarshchauhan46255@gmail.com",
  "hamsarajdevadiga97@gmail.com",
  "pandeyayushman8495@gmail.com",
  "kv321332@gmail.com",
  "kingnoob9690@gmail.com",
  "gautamrawat3333@gmail.com",
  "pratikgahane682@gmail.com",
  "kadlag.sanket82@gmail.com",
  "pawaskarnishant3@gmail.com",
  "aayushtripathi63@gmail.com",
  "amanverma232000@gmail.com",
  "syedabuzar2002@gmail.com",
  "amriteshbhd1@gmail.com",
  "spankbro365@gmail.com",
  "kasidmodi@gmail.com",
  "chitransh.sheel@gmail.com",
  "mudassirfaizan531@gmail.com",
  "pandeyhero8423@gmail.com",
  "manishazad1@gmail.com",
  "onaik116@gmail.com",
  "kanthesharvaj@gmail.com",
  "prigairola@gmail.com",
  "vishistsaini@gmail.com",
  "jain.tanish29@gmail.com",
  "aman.puggi@gmail.com",
  "sunnymelwani5@gmail.com",
  "nihalrox48@gmail.com",
  "nukestorm9@gmail.com",
  "itsreallyankit@gmail.com",
  "agrimporwal.ap@gmail.com",
  "aditya.se.403@gmail.com",
  "atabbas13@gmail.com",
  "chauhanshubham759@gmail.com",
  "akthegameryt008@gmail.com",
  "premgor21@gmail.com",
  "rishimandal619@gmail.com",
  "muhurisoumyajit@gmail.com",
  "samuelchittur67@gmail.com",
  "anaswaqarkhan777@gmail.com",
  "amanagarwalz067@gmail.com",
  "Sayyedadullah@gmail.com",
  "jd166225@gmail.com",
  "ojas.kumar2104@gmail.com",
  "kavitaiyer19@gmail.com",
  "725sahilpatel725@gmail.com",
  "sannidhyabartwal24@gmail.com",
  "jadejarushirajsinh11111@gmail.com",
  "mayank2845@gmail.com",
  "adarshsuryawanshi123654@gmail.com",
  "abuzaidazmi979@gmail.com",
  "dograkaran16@gmail.com",
  "deepsahil336@gmail.com",
  "hsapien25@gmail.com",
  "cdarshan974@gmail.com",
  "samarthmahant1098@gmail.com",
  "kantakdhruv@gmail.com",
  "SakshamxVohra@gmail.com",
  "agrawalaryan891@gmail.com",
  "toseefkhan403@gmail.com",
  "sohailalthamashmohammed@gmail.com",
  "shreyanshguptag@gmail.com",
  "vrinda1512@gmail.com",
  "raviwarmusic18@gmail.com",
  "aaryaman@moreclassescommerce.com",
  "prajnapriyajena@gmail.com",
  "vgnew06012001@gmail.com",
  "sunnybose332@gmail.com",
  "mitshah5515@gmail.com",
  "charmingrmyt@gmail.com",
  "aadarshthakur81@gmail.com",
  "siddharthasarkar0306@gmail.com",
  "chauhananshul510@gmail.com",
  "aashraysood2002@gmail.com",
  "naikrohit430@gmail.com",
  "vivanyadav2004@outlook.com",
  "kirolarakesh14@gmail.com",
  "champ.manohar003@gmail.com",
  "harshkushwah971@gnail.com",
  "ayanbhati404@gmail.com",
  "yatindraperfect@gmail.com",
  "haka8928@gmail.com",
  "tikujangid603979@gmail.com",
  "raiutkarsh710@gmail.com",
  "karankanwar161@gmail.com",
  "siddharthjoshi86@gmail.com",
  "nitishkm999@gmail.com",
  "iamgurmannat@gmail.com",
  "dhruvrawat94@gmail.com",
  "pranavsb3@gmail.com",
  "harshdhakan84@gmail.com",
  "hbagle3@gmail.com",
  "kushagramaheshwari786@gmail.com",
  "squaroot420@gmail.com",
  "divyanshubhati5079@gmail.com",
  "yashruhella@gmail.com",
  "gagan0617@gmail.com",
  "dsirbhaiya@gmail.com",
  "esphakraza10k12@gmail.com",
  "varunifht@gmail.com",
  "rishavptl2001@gmail.com",
  "da0583442@gmail.com",
  "atharvam69@gmail.com",
  "vk162717@gmail.com",
  "vishalbakode03@gmail.com",
  "adityamaheshwari303@gmail.com",
  "harnadarsingh003@gmail.com",
  "timesentertainment3@gmail.com",
  "truelykush18@gmail.com",
  "kalavatia.mihir4@gmail.com",
  "dhruvk55277@gmail.com",
  "ajaysehrawat685@gmail.com",
  "khodaskaramey@gmail.com",
  "varenyambasant2002@gmail.com",
  "manshatiwari759@gmail.com",
  "thedevenrajpurohit@gmail.com",
  "aryanworks09@gmail.com",
  "harshjaiswal356@gmail.com",
  "mohitsavla3@gmail.com",
  "gauravsingh639252@gmail.com",
  "kaleavinash469@gmail.com",
  "prabhudattabiswal2005@gmail.com",
  "vprajapati023@gmail.com",
  "pubgplace@gmail.com",
  "skamini412@gmail.com",
  "vishalbsingh5@gmail.com",
  "shivanggulia4@gmail.com",
  "chaudharyjd6@gmail.com",
  "shaikhuzaif42t@gmail.com",
  "ayushmohata2710@gmail.com",
  "sahoo.ratikanta988@gmail.com",
  "shubhmahajan1234@gmail.com",
  "chiragsonipat@gmail.com",
  "aanchalbajpai0806@gmail.com",
  "pratzs60@gmail.com",
  "avnishv736@gmail.com",
  "utkarshverma01523@gmail.com",
  "samjain239@gmail.com",
  "singhamananya.169@gmail.com",
  "keshavmalpani10@gmail.com",
  "kapil39dev@gmail.com",
  "sorab975@gmail.com",
  "adityaray700@gmail.com",
  "vasu2babita@gmail.com",
  "x3.girish08@gmail.com",
  "raunakghosh99@gmail.com",
  "praharsh291@gmail.com",
  "endkavan@gmail.com",
  "ritulm949@gmail.com",
  "rahulbhaskaran96@gmail.com",
  "tejswiraj436@gmail.com",
  "nickjr1424@gmail.com",
  "pravek413@gmail.com",
  "nazimgori80@gmail.com",
  "saibhishma24@gmail.com",
  "ansh8131@gmail.com",
  "mayanksinghraikwar@gmail.com",
  "ssijio2000@gmail.com",
  "sagarsharma8770@gmail.com",
  "rounakahuja0121@gmail.com",
  "abhiclicks4@gmail.com",
  "divesh848@gmail.com",
  "devvora04@gmail.com",
  "ayumadan158@gmail.com",
  "mt.mohityadav@gmail.com",
  "harshthegreat129@gmail.com",
  "devkumar08m19@gmail.com",
  "ssahaj957@gmail.com",
  "mehulsiyal06@gmail.com",
  "sudanbhawna9910480318@gamil.com",
  "yashkesarwani05@gmail.com",
  "adarsingh2002@gmail.com",
  "shreyashmishra882@gmail.com",
  "chetanranamathura@gmail.com",
  "varuntalwar590@gmail.com",
  "aabantufail@gmail.com",
  "u.smritireddy@gmail.com",
  "dhruvsaini402@gmail.com",
  "Muhammedyassirkhan@gmail.com",
  "alanbjoseph009g@mail.com",
  "yashkharat5@gmail.com",
  "sidgmr11@gmail.com",
  "yashasvi.gautam14@gmail.com",
  "architarthshubham@gmail.com",
  "kunal.tiwary17@gmail.com",
  "kabirchaudhary555@gmail.com",
  "ansariraqib71@gmail.com",
  "Honeykumar@fuwamofu.com",
  "gauravgupta78777@gmail.com",
  "jairajpawar112@gmail.com",
  "nmnkmwat6@gmail.com",
  "vansharora1771@gmail.com",
  "krinshujagiasi@gmail.com",
  "cr7ny11@gmail.com",
  "sharmaris88368@gmail.com",
  "pawar.dhruv@gmail.com",
  "ajitrana202@gmail.com",
  "coolboyshivuydvv@gmail.com",
  "akshatsinghal1313@gmail.com",
  "ketan.dhanjal@outlook.com",
  "agrawaldhruv8085@gmail.com",
  "sarmaarit@gmail.com",
  "aditya.aaruvi@gmail.com",
  "manaktalagitansh@gmail.com",
  "tanvivyas200@gmail.com",
  "khankaif193@gmail.com",
  "preetmanutd@gmail.com",
  "arinjayjainae@gmail.com",
  "b7285pratyushjoshi@gmail.com",
  "arjun1691998@gmail.com",
  "jadejadharmajeet@gmail.com",
  "gurpreetsingh23599@gmail.com",
  "sainajay24@gmail.com",
  "abhijeetchaudhary15@gmail.com",
  "sj185712@gmail.com",
  "hanikethgaddhala@gmail.com",
  "mohdshoeb694@gmail.com",
  "us001402@gmail.com",
  "ghalibarman@gmail.com",
  "jinendradhruw8@gmail.com",
  "daksh.bk.com@gmail.com",
  "arghyyabhattacharyya@gmail.com",
  "svaishnav343@gmail.com",
  "Shaurya.14.2002@gmail.com",
  "zali86817@gmail.com",
  "alhamadyousuf0@gmail.com",
  "deepankarvaatu55@gmail.com",
  "ronishjadaun22@gmail.com",
  "piyush2233shukla@gmail.com",
  "dineshdavy7@gmail.com",
  "ujjwalkakkar300@gmail.com",
  "vinayakparihar2000@gmail.com",
  "shivam7299@gmail.com",
  "sahilnaseer2231@gmail.com",
  "karanbagoria1@gmail.com",
  "dhanushkatari2005@gmail.com",
  "tanmayjain911@gmail.com",
  "tyagi.sarthak1608@gmail.com",
  "andyalexfurner@gmail.com",
  "thakurvijayj7@gmail.com",
  "md.raashid07@gmail.com",
  "deepsahaj5@gmail.com",
  "bhargavisbest@gmail.com",
  "amanmalikaman0123@gmail.com",
  "vs26862@gmail.com",
  "ritiksinghrrtt@gmail.com",
  "dattri86@gmail.com",
  "deepakmehracool02@gmail.com",
  "adityajonai.singh004@gmail.com",
  "bhadauriyayugank@gmail.com",
  "jabbarkhan527@gmail.com",
  "toshawara1dhanraj@gmail.com",
  "jithinprakashk2525@gmail.com",
  "ctcchugh@gmail.com",
  "kartikbirbal@gmail.com",
  "siddharatnesh@gmail.com",
  "srishashwat6@gmail.com",
  "kdipesh20@gmail.com",
  "ramesh69patel69@gmail.com",
  "ritamsarkar8@gmail.com",
  "rohankumarcool7860@gmail.com",
  "aarshmail@gmail.com",
  "salkadeb@gmail.com",
  "shadab.20ahmed@gmail.com",
  "aaditya143chauhan@gmail.com",
  "piyushsahani364@gmail.com",
  "mayankjainjaipur689@gmail.com",
  "kanishk.wagh21@gmail.com",
  "shakshamjain71@gmail.com",
  "sam15017.singh@gmail.com",
  "pantaditya007@gmail.com",
  "ggaurav910.2000@gmail.com",
  "shreyanshkaushal.20@gmail.com",
  "nikhilnj2kumar@gmail.com",
  "tishaanbhatia111@gmail.com",
  "dipakkpatle@gmail.com",
  "dpkj88877@gmail.com",
  "nimituc@gmail.com",
  "sonideepak048@gmail.com",
  "daga18rishabh11@gmail.com",
  "sachinbharat2000@gmail.com",
  "abdulmoidmohammed81@gmail.com",
  "gokulmanda828@gmail.com",
  "kirtivardhan241299@gmail.com",
  "anshul.suresh99@gmail.com",
  "biru46622@gmail.com",
  "piyushpgkumar@gmail.com",
  "kevinanthony3434@gmail.com",
  "teengroot25@gmail.com",
  "tushargargmns@gmail.com",
  "ayushlal12345@gmail.com",
  "crazyhorse0502@gmail.com",
  "aqdasrao4243@gmail.com",
  "yashb0755@gmail.com",
  "teddy.adee@gmail.com",
  "chetanyasingh24@gmail.com",
  "adityamorwal82@gmail.com",
  "subhadeep1908@gmail.com",
  "mihirsolanki3690@gmail.com",
  "shubhamhariyani12@gmail.com",
  "thisisitfornow16@gmail.com",
  "rupam.saini13@gmail.com",
  "vanshettekapil90@gmail.com",
  "djena1638@gmail.com",
  "ynj717@gmail.com",
  "kachintya99@gmail.com",
  "arajvanshi560@gmail.com",
  "mdaasim3476@gmail.com",
  "pr.3071999@gmail.com",
  "adi12sh24@gmail.com",
  "bhanuvasvani56@gmail.com",
  "verulkar1910@gmail.com",
  "bhaumikbhoric1@gmail.com",
  "akhilbandihal@gmail.com",
  "gyanagnihotri2003@gmail.com",
  "bhabanichand1@gmail.com",
  "rohansharma104@gmail.com",
  "adityachaudhary700@gmail.com",
  "sharma.saurabh.1921@gmail.com",
  "bulbayou@gmail.com",
  "chugkrish0@gmail.com",
  "akashgulati15@gmail.com",
  "arvindrao6621@gmail.com",
  "arshpreeti1234@gmail.com",
  "omturkar007@gmail.com",
  "manavlekhwani55@gmail.com",
  "1981shivanshgaggar@gmail.com",
  "ys750015@gmail.com",
  "shresthajaiswal91@gmail.com",
  "gauravchawre574@gmail.com",
  "glenmegrath66@gmail.com",
  "bhawesh.chandola@gmail.com",
  "mohdfarhan2001624@gmail.com",
  "dhurandharmanishkumar@gmail.com",
  "rajputkartavya123@gmail.com",
  "mchandola91@gmail.com",
  "ompatil789only@gmail.com",
  "bharatsawhney2001@gmail.com",
  "singhhitesh647@gmail.com",
  "prakharsinghparihar27@gmail.com",
  "adideshwal@gmail.com",
  "jindalakshett@gmail.com",
  "santanukalar@gmail.com",
  "niharranjan.rtt@gmail.com",
  "sahilkothari884@gmail.com",
  "divyanshkarnwal7@gmail.com",
  "ashuhot650@gmail.com",
  "Rohitpatil1999131@gmail.com",
  "piyushsingha20@gmail.com",
  "singhs47846@gmail.com",
  "sagar.hooda01@gmail.com",
  "rishi7218883023@gmail.com",
  "mananmarjara307@gmail.com",
  "atayush269@gmail.com",
  "Suyash97kaushik@gmail.com",
  "jaiditya@gmail.com",
  "aneeshkalekar@gmail.com",
  "arajsinghjadoun@gmail.com",
  "k.manishtimes@gmail.com",
  "jeetsinghrj1@gmail.com",
  "sonitchopra89@gmail.com",
  "utsavpandya4347@gmail.com",
  "pkmahor10@gmail.com",
  "lilyamity@gmail.com",
  "divyansh47singhal@gmail.com",
  "jsukhinderjindal@gmail.com",
  "vtona5555@gmail.com",
  "sanskarjajoo04@gmail.com",
  "kwattrapuranjay@gmail.com",
  "anirudhsinghsanger@gmail.com",
  "purvamjoshi@gmail.com",
  "adityaparte9763@gmail.com",
  "atulforworkk@gmail.com",
  "manmeetbansal7@gmail.com",
  "azeeyouth2824@gmail.com",
  "khanblogs.in@gmail.com",
  "shubhammishra656@gmail.com",
  "akankshasachdeva9@gmail.com",
  "yashdungarwal20006@gmail.com",
  "vivansharma1502@gmail.com",
  "abhianshdhalta555@gmail.com",
  "khanalkama33@gmail.com",
  "arnavnanchahil123@gmail.com",
  "rajputkunal9717@gmail.com",
  "dhruvpatel515dd@gmail.com",
  "a95pra@gmail.com",
  "tsamarth.sam@gmail.com",
  "vinayak9827198708@gmail.com",
  "barahiakash@gmail.com",
  "ankitpatelabp123@gmail.com",
  "dewani1705@gmail.com",
  "ayushjhawar40@gmail.com",
  "mayanktyagi28jul@gmail.com",
  "jgrhellking10@gmail.com",
  "sonusg8383@gmail.com",
  "bhaktashreesahoo80@gmail.com",
  "parpit269@gmail.com",
  "aman23srivastava@gmail.com",
  "gparashar001@gmail.com",
  "shrikarshanmukha2001@gmail.com",
  "kartikeyjoshi12@gmail.com",
  "guptahritik4544@gmail.com",
  "singhuv61@gmail.com",
  "gupta55946@gmail.com",
  "envymails10@gmail.com",
  "trigunajana@gmail.com",
  "simmer.barque0w@icloud.com",
  "tara.lanba1999@gmail.com",
  "atri.vishu78@gmail.com",
  "secacc34532@gmail.com",
  "anshramgarhia100@gmail.com",
  "nishitkumar801@gmail.com",
  "shukla4897@gmail.com",
  "vsedit100@gmail.com",
  "aaphato03@gmail.com",
  "ojasvikm23@gmail.com",
  "musicbyrudra@gmail.com",
  "sarmavishrut@gmail.com",
  "coolajay580@gmail.com",
  "jaydeep17333@gmail.com",
  "guptaanmol.2311@gmail.com",
  "namanjaiswal25@gmail.com",
  "www.abhidevpur13001@gmail.com",
  "karanbajaj169@gmail.com",
  "arnavdeepsingh.z30@gmail.com",
  "adityakgupta123@gmail.com",
  "skycrazyboy759@gmail.com",
  "anjalirawat24402@gmail.com",
  "yashbabuaa@gmail.com",
  "lakshwanidaksh@gmail.com",
  "crazy.somil@gmail.com",
  "paridaarijeet18@gmail.com",
  "viral.s.panchal1610@gmail.com",
  "amandeep1811kumar@gmail.com",
  "arpitgarg753@gmail.com",
  "shashwat.saxena079@gmail.com",
  "dhruvrajvanshi127@gmail.com",
  "zravi2402@gmail.com",
  "sargampethe123@gmail.com",
  "sandhyak260@gmail.com",
  "maithilkathole@gmail.com",
  "shubhrajput9399@gmail.com",
  "ayushdhandaria@gmail.com",
  "nishchal41@gmail.com",
  "b.bhavukhasija@gmail.com",
  "sankalp.devanand@gmail.com",
  "prototypekillerxx@gmail.com",
  "prathamtewani5712@gmail.com",
  "justabhi1413@gmail.com",
  "devanshmaheshwari12@gmail.com",
  "vimityadav10@gmail.com",
  "originaladipta@gmail.com",
  "bajpaiswapnil2@gmail.com",
  "shob121618@gmail.com",
  "nikhilgulati43@gmail.com",
  "chanksha98@gmail.com",
  "sshkhar21@gmail.com",
  "rishabhsethiya10.7@gmail.com",
  "abhijeetanand832@gmail.com",
  "jaygor.56@gmail.com",
  "himanshunagar31@gmail.com",
  "jasaiwalpriyanshu@gmail.com",
  "prathmesh2530@gmail.com",
  "aayushchauhanphotography@gmail.com",
  "aakshitgusain09@gmail.com",
  "lohiag160@gmail.com",
  "nanditashahi143@gmail.com",
  "muhafizmalik48@gmail.com",
  "anmolyadav.0202@gmail.com",
  "ankitchak07@gmail.com",
  "zaidmohammed87@gmail.com",
  "amirthapa687@gmail.com",
  "satyamchaurasiya31828@gmail.com",
  "monishmeher@gmail.com",
  "maiyuddinshaikh00@gmail.com",
  "thuthuchannelbananahai@gmail.com",
  "purswanijayant@gmail.com",
  "rishabhmalhotra9806@gmail.com",
  "harsh986758@gmail.com",
  "adarsh8288@gmail.com",
  "debojyoti800@gmail.com",
  "krunal.dhuri34@gmail.com",
  "mukulbehl30@gmail.com",
  "varunhardasani4@gmail.com",
  "khansimaak2004@gmail.com",
  "akverma1852@gmail.com",
  "Teenemployee@gmail.com",
  "rishitbhat2001@gmail.com",
  "ayushvishwakarma0063@gmail.com",
  "manavboy@icloud.com",
  "pawarnikhil284@gmail.com",
  "reshamshaikh200e@gmail.com",
  "satubabu2005@gmail.com",
  "ashutoshsinghashutoshrock@gmail.com",
  "ansh.aryan@learner.manipal.edu",
  "aamirshuddi@gmail.com",
  "arjunjain210902@gmail.com",
  "imvshlkshk715@gmail.com",
  "raktim.kalita@gmail.com",
  "pb.19007@gmail.com",
  "prashant786056@gmail.com",
  "fatmaashra27@gmail.com",
  "kulshresthaishaan4@gmail.com",
  "buntyg084@gmail.com",
  "kumarkanishkarai@gmail.com",
  "harshitdawar916@gmail.com",
  "jayashsolanki227@gmail.com",
  "rajvverma2000@gmail.com",
  "kunaljiwnani0@gmail.com",
  "shaswatharsh1@gmail.com",
  "gosai.shubham99@gmail.com",
  "007iamrb@gmail.com",
  "shinghalparth@gmail.com",
  "sathwickkiranms@gmail.com",
  "sahilnagar31.sn@gmail.com",
  "harshverma57240@gmail.com",
  "saquibahsan9@gmail.com",
  "nu4563051@gmail.com",
  "akashtirthani64@gmail.com",
  "misaamane0110@gmail.com",
  "punjabi.sujeet1998@gmail.com",
  "sukritdhiman699@gmail.com",
  "ritikathakur1510@gmail.com",
  "8305anmol@gmail.com",
  "adarsh2the2great@gmail.com",
  "leena.thakur562@gmail.com",
  "ps5999442@gmail.com",
  "yothakor@gmail.com",
  "ayushpatel8651@gmail.com",
  "arjundm16@gmail.com",
  "vasaftotagatti1000@gmail.com",
  "harsh.gohil.39142@gmail.com",
  "rnautiyal883@gmail.com",
  "vmavric10@gmail.com",
  "shashwatsparsh23@gmail.com",
  "stohid4@gmail.com",
  "dev74170@gmail.com",
  "rr20152107@gmail.com",
  "riyagond13@gmail.com",
  "stevenjao18@gmail.com",
  "ashish07rawat@gmail.com",
  "aayushiidesai@gmail.com",
  "gunjanbhadade2014@gmail.com",
  "rawatds152002@gmail.com",
  "vaishaligautam2798@gmail.com",
  "sagardode84@gmail.com",
  "rudrakshpandey444@gmail.com",
  "akshithkumar2016@gmail.com",
  "ritikchauhanr7k@gmail.com",
  "jashekamsingh@gmail.com",
  "devthakkar2210@gmail.com",
  "surajsnair2001@gmail.com",
  "anujborhade74@gmail.com",
  "akashjajee81@Gmail.com",
  "arihantofficial.511@gmail.com",
  "kh187475@gmail.com",
  "adityakumars064@gmail.com",
  "Parimi.ananth1234@gmail.com",
  "kalpkawarat15@gmail.com",
  "rahulrajgnr@gmail.com",
  "rohitaitkd@gmail.com",
  "thkkrpratik@gmail.com",
  "suryawanshimanoj1182@gmail.com",
  "jainamgajjar48@gmail.com",
  "danishansari914935@gmail.com",
  "harshsonibhilai7@gmail.com",
  "mike.thesilentslayer.ehrmantraut@gmail.com",
  "yuvraj04444raj@gmail.com",
  "dholakiajeaan@gmail.com",
  "technicaltayyab786@gmail.com",
  "himashu.iimt@gmail.com",
  "shubhamnaithanisss@gmail.com",
  "g4urav009@gmail.com",
  "sanchit2099@gmail.com",
  "bprathamesh483@gmail.com",
  "abhishekbv2003@gmail.com",
  "bagulakshay9.ab@gmail.com",
  "pankajparchake4@gmail.com",
  "anujbajaj048@gmail.com",
  "udaysingh9422@gmail.com",
  "nikhilreddy0198@gmail.com",
  "pmanurag39@gmail.com",
  "aryan.bhardwaj432@gmail.com",
  "sundaramupadhyay2002@gmail.com",
  "tushar.manna2002@gmail.com",
  "rky2703@gmail.com",
  "arjun16tomar@gmail.com",
  "mehaksachdeva198@gmail.com",
  "inikhilchoudhary2020@gmail.com",
  "raisinghanijayaditya@gmail.com",
  "aabhiyadav804@gmail.com",
  "rohit.bangar9@gmail.com",
  "mahekdhameja123@gmail.com",
  "tanushtomar10@gmail.com",
  "mohammaduzer123@gmail.com",
  "srijitghosh45@gmail.com",
  "rubal.mahajan78@gmail.com",
  "arhankham111@gmail.com",
  "anubhavkr.2906@gmail.com",
  "nevinxavier119@gmail.com",
  "ashrayverma16@gmail.com",
  "flickk787@gmail.com",
  "jinay.kumar@bba.christuniversity.in",
  "thepradipta002@gmail.com",
  "gyanchandradas786@gmail.com",
  "shobhitamishra732@gmail.com",
  "srivastavasuraj.3@gmail.com",
  "isaproo56@gmail.com",
  "jainanik0612@gmail.com",
  "aditya.mishra9783@gmail.com",
  "atul971730@gmail.com",
  "harsh82837@gmail.com",
  "memechatapp1@gmail.com",
  "thekushalsingh18@gmail.com",
  "chiragrawat12@gmail.com",
  "nayefsiddique42@gmail.com",
  "tarunsaravana62@gmail.com",
  "adityashirke2011@gmail.com",
  "gautammaheshwari406@gmail.com",
  "devashishsharma02@gmail.com",
  "arjunchawla32@gmail.com",
  "musicalbproductions@gmail.com",
  "justforgamesvivek@gmail.com",
  "jainashwath2002@gmail.com",
  "swapnilmishira@gmail.com",
  "raykarunya@gmail.com",
  "shashanktamuli9@gmail.com",
  "shubhamdybey48@gmail.com",
  "hirakdas0588@gmail.com",
  "vipuldesai843@gmail.com",
  "pratik.chunarkar88@gmail.com",
  "varun2sonu@gmail.com",
  "shimolarora1@gmail.com",
  "jayrpandya03@gmail.com",
  "muneesh1512@gmail.com",
  "playwithjayant@gmail.com",
  "sharmajagdish1515@gmail.com",
  "deepakmotwani18@gmail.com",
  "anupamdangore@gmail.com",
  "shwetang12jaiswal@gmail.com",
  "rujit1012@gmail.com",
  "pswisepuneet@gmail.com",
  "kosiddharth5@gmail.com",
  "mmohit0386@gmail.com",
  "sauravwalia786@gmail.com",
  "anshulbansal229@gmail.com",
  "avinashpathak3636@gmail.com",
  "pranjalghuge02@gmail.com",
  "sawant.rajat369@gmail.com",
  "pranav94038@gmail.com",
  "mayankkataria830@gmail.com",
  "pawan11243@gmail.com",
  "rathodrohan501@gmail.com",
  "gautamkapoor2311@gmail.com",
  "study092402@gmail.com",
  "mohammadmohid360@gmail.com",
  "adityachopra606@gmail.com",
  "sumairlone@gmail.com",
  "akarsh.shrivastava2004@gmail.com",
  "SHUBHANSHUPAREEK1705@GMAIL.COM",
  "mirzasuleman2425@gmail.com",
  "adityabind2m@gmail.com",
  "sakshamgoyal14@gmail.com",
  "purvamathur95484@gmail.com",
  "pratyushbedi@gmail.com",
  "aslandsouza5@gmail.com",
  "shaikhabrar8855@gmail.com",
  "ayushvashistha2000@gmail.com",
  "tusharkalra95@gmail.com",
  "gayatripatil016@gmail.com",
  "udaymagotra@gmail.com",
  "shreyas.mamgain@gmail.com",
  "basskrorushyy@gmail.com",
  "amankeshri07@gmail.com",
  "harshithrai845@gmail.com",
  "id.akashsingh@gmail.com",
  "bokkasamakshay3@gmail.com",
  "ashutosh.rajput@memechat.app",
  "sanskarnawani2@gmail.com",
  "manvayanand995@gmail.com",
  "siddheshsorapsid@gmail.com",
  "pagalayush000@gmail.com",
  "mr.dhruva04@gmail.com",
  "arnavmalla814@gmail.com",
  "rameshwarsp19@gmail.com",
  "parthaggarwal09@gmail.com",
  "mateen1037@gmail.com",
  "rajstu34@gmail.com",
  "armaanrathore889@gmail.com",
  "akki.sakp01@gmail.com",
  "dipeshsahu2620@gmail.com",
  "jatinkhanzode01@gmail.com",
  "vanshajdixit0502@gmail.com",
  "krit.gupta2024@scmsnoida.ac.in",
  "atharvabarway1870@gmail.com",
  "khar.himnesh@gmail.com",
  "Chandrashekharv450@gmail.com",
  "sumeetmandal0@gmail.com",
  "singhsparsh23@gmail.com",
  "mayureshekbote04@gmail.com",
  "shantanujoshim216@gmail.com",
  "rohhedit@gmail.com",
  "kpraful544@gmail.com",
  "hrishi0102@gmail.com",
  "rushabhshinde007@gmail.com",
  "ys9012208@gmail.com",
  "shubhamch0710@gmail.com",
  "nisbaansayed@gmail.com",
  "10nihaaldatta@gmail.com",
  "chiragthakuri19@gmail.com",
  "saajs69@gmail.com",
  "djintu09@gmail.com",
  "ishaanbudhiraja8@gmail.com",
  "mohitjoshi1945@gmail.com",
  "yuvraj.bais57@gmail.com",
  "neerajsk.6@gmail.com",
  "mishralavanya65@gmail.com",
  "bisman.singh24@gmail.com",
  "karyanjain@gmail.com",
  "varunmotghare1825@gmail.com",
  "kruel1418@gmail.com",
  "nikbhawsar122@gmail.com",
  "sauravm777@gmail.com",
  "tdspoof72@gmail.com",
  "kushagrakandra43831@gmail.com",
  "devlakra25@gmail.com",
  "786riteshjain@gmail.com",
  "jiveshkohli2003@gmail.com",
  "sumedhparekar666@gmail.com",
  "rahulhegde180901@gmail.com",
  "jalajmishra10@gmail.com",
  "ntinihhh@gmail.com",
  "yugarvapple@gmail.com",
  "Vaibhavdixit7@yahoo.com",
  "tanishjajoria2511@gmail.com",
  "nikhilssoni99@gmail.com",
  "zaidkhan8126287019@gmail.com",
  "nilabhgaur2010@gmail.com",
  "chayan.pandey005@gmail.com",
  "kumarisurbhi301@gmail.com",
  "harkiratsingh922002@gmail.com",
  "ayushsverma30@gmail.com",
  "mynameisanthony5290@gmail.com",
  "ag551930@gmail.com",
  "ananyaagrahari@gmail.com",
  "kuvadiyaved303@gmail.com",
  "tarun.krypton@gmail.com",
  "vikramarvind1@gmail.com",
  "aniketswastikey9595@gmail.com",
  "arnavchavanz@gmail.com",
  "arushiverma175@gmail.com",
  "manojkumar29041997@gmail.com",
  "twarit222@gmail.com",
  "pratyakshsingh11@gmail.com",
  "priyabratamallick187@gmail.com",
  "pdmstnzin007@gmail.com",
  "rawalkartikay@gmail.com",
  "shantanumangal2234@gmail.com",
  "dhwaj.u.2910@gmail.com",
  "sumitvijayjaiswal@gmail.com",
  "gaurevgaur3@gmail.com",
  "vanshlohia24@gmail.com",
  "abhiraj06072000@gmail.com",
  "ank.agrawal111@gmail.com",
  "shobhitkashyap880@gmail.com",
  "sid.chaudhary202@gmail.com",
  "himanshu1999rawat@gamil.com",
  "adityamaurya3123@gmail.com",
  "badhanabhishek3@gmail.com",
  "sonalchaudharyk@gmail.com",
  "bsdhami2003@gmail.com",
  "himanshukhodlan19@gmail.com",
  "1234namangupta@gmail.com",
  "devanshgupta747@gmail.com",
  "ksulakshya@gmail.com",
  "svermaanubhav3@gmail.com",
  "rishish.shar@gmail.com",
  "swanandsant11@gmail.com",
  "theprabhjit@gmail.com",
  "siddhesh1447@gmail.com",
  "ashutoshmohapatra5644@gmail.com",
  "surajghosh8011@gmail.com",
  "purvvnahar@gmail.com",
  "Souravnegi72@gmail.com",
  "priyanshrai2004@gmail.com",
  "sharmakeshavji948@gmail.com",
  "Prashant36tiwari@gmail.com",
  "sundramsayss@gmail.com",
  "sachingundla10@gmail.com",
  "kumarharshit728tyagi@gmail.com",
  "shivam.varshney91@gmail.com",
  "vaibhavchandra369@gmail.com",
  "bhandarividhan8@gmail.com",
  "PJMOLYA@GMAIL.COM",
  "cm885075@gmail.com",
  "nikhiljain26jan@gmail.com",
  "intelligentpal9@gmail.com",
  "shashank.crazy2000@gmail.com",
  "drpradeepsharma73@gmail.com",
  "hammad00719@gmail.com",
  "dhritinayyar2003@gmail.com",
  "amoghsadvelkar@gmail.com",
  "nmahto61@gmail.com",
  "anshsoni557@gmail.com",
  "ashkinmad@gmail.com",
  "razarmaan510@gmail.com",
  "karanpargal007@gmail.com",
  "ramanaiyer789@gmail.com",
  "hunterpt420@gmail.com",
  "lalitsehrawat007@gmail.com",
  "mishraswastid@gmail.com",
  "ashumsg213@gmail.com",
  "milindh1029@gmail.com",
  "priyansupanda31@gmail.com",
  "bhavikaperwani@gmail.com",
  "sohampusadkar@gmail.com",
  "ak9870905@gmail.com",
  "jtinpatel38@gmail.com",
  "akashro125@gmail.com",
  "shresthtiwari2007@gmail.com",
  "rastogishubh152@gmail.com",
  "kumaraj461@gmail.com",
  "prajapatidhruv70@gmail.com",
  "apoorvakumar9562@gmail.com",
  "kanusharma0234@gmail.com",
  "laxit966@gmail.com",
  "amanverma9650.9650@gmail.com",
  "vfx.rox@gmail.com",
  "ayush900833@gmail.com",
  "itstarun67@gmail.com",
  "tsirus3@gmail.com",
  "yuvrajsinhdabhi001@gmail.com",
  "ankurparmar044@gmail.com",
  "bebo69always@gmail.com",
  "himanshurana8580@gmail.com",
  "zoumanhashim00@gmail.com",
  "raghavgarg2903@gmail.com",
  "umeshkumar444666@gmail.com",
  "Yeshchakole@gmail.com",
  "dhrv.datta@gmail.com",
  "rohillarohit787@gmail.com",
  "sandeshsambare007@gmail.com",
  "sanketshende169@gmail.com",
  "ab.abhilashbehera0@gmail.com",
  "yadavvikas09998896453@gmail.com",
  "devilabuzar@gmail.com",
  "gaganjoshi1991@gmail.com",
  "rushikeshmurmure65@gmail.com",
  "infinityflixkeker@gmail.com",
  "rohan.munjal1@gmail.com",
  "aaromalbaiju131@gmail.com",
  "palakislub@gmail.com",
  "krishhbarot1112@gmail.com",
  "zayedkhan952@gmail.com",
  "yadav.lovely111@gmail.com",
  "jazyseera909@gmail.com",
  "vigilantstars6@gmail.com",
  "siddharthrajshivam@gmail.com",
  "snappertv19@gmail.com",
  "cheenunimekar@gmail.com",
  "ayushsrivastava0748@gmail.com",
  "mekarn2014@gmail.com",
  "ambershrivastavapvt@gmail.com",
  "samayj10@gmail.com",
  "akshatsafya@gmail.com",
  "ayushmanchaturvedi900@gmail.com",
  "nikhilganeshbhat@gmail.com",
  "samarme0322@gmail.com",
  "iamclement.cr@gmail.com",
  "bivanshi21@gmail.com",
  "harshsodhi918@gmail.com",
  "rohanp502@gmail.com",
  "jeetupadhyay93@gmail.com",
  "vaibhavu8765@gmail.com",
  "coolakul951@gmail.com",
  "sarwansachin33@gmail.com",
  "mekartiksrivastava@gmail.com",
  "rakshitamadan1001@gmail.com",
  "sadhuking555@gmail.com",
  "Sgcutesarah@gmail.com",
  "shardoolp181299@gmail.com",
  "shouryaroxxyo@gmail.com",
  "gonnadevibhooti@gmail.com",
  "choudhary1.hc@gmail.com",
  "shreyacheeya.11@gmail.com",
  "sparshkoolwal123@gmail.com",
  "arjunbky@gmail.com",
  "abbyj5151@gmail.com",
  "kk814783@gmail.com",
  "mansotraabhishek@gmail.com",
  "tyagi.harshit2003@gmail.com",
  "harshvardhan182001@gmail.com",
  "ameydeshpande5998@gmail.com",
  "joshianshumaan58@gmail.com",
  "kr226811@gmail.com",
  "Bediansh@gmail.com",
  "amaanraza1012@gmail.com",
  "prathmeshawle008@gmail.com",
  "kshitijbhosale9545@gmail.com",
  "sharma17piyush@gmail.com",
  "jiteshaarav777@gmail.com",
  "unicorn7d+meme@gmail.com",
  "hdixit806@gmail.com",
  "garvpandey78@gmail.com",
  "rajatshivankar43@gmail.com",
  "tushars3776@gmail.com",
  "prasannaasangihal133@gmail.com",
  "atharhussain808@gmail.com",
  "priyanshusingh.ps25@gmail.com",
  "anuragsen9617@gmail.com",
  "mehtasarthak72@gmail.com",
  "kaustubhshakya123@gmail.com",
  "aditya.sharnagat4@gmail.com",
  "hyogi054@gmail.com",
  "kamaljeetkumar5399@gmail.com",
  "rudrakshs272@gmail.com",
  "ayush.joshi09@gmail.com",
  "yashrajthakurent@gmail.com",
  "rithikesarwani5512@gmail.com",
  "ishantanuchavhan10@gmail.com",
  "diyaschugh@gmail.com",
  "lalwanipiyush565@gmail.com",
  "savansorathiya27@gmail.com",
  "joel.joseph211@gmail.com",
  "ydixit007@gmail.com",
  "rathodmihir28@gmail.com",
  "sushant.rohit.7@gmail.com",
  "chitranshj3@gmail.com",
  "jaiwardhansingh007@gmail.com",
  "shettyhardik2001@gmail.com",
  "jaysopanki@gmail.com",
  "hckrbanda@gmail.com",
  "sarthaknabar2003@gmail.com",
  "Lakshaykumar37c@gmail.com",
  "khushalblue@gmail.com",
  "pranjalsharma2903@gmail.com",
  "mohitjoshi00055@gmail.com",
  "gawririshi@gmail.com",
  "yashatjha@gmail.com",
  "Jatinv3514@gmail.com",
  "aryan.bhaiya822@gmail.com",
  "soni.akash68@gmail.com",
  "atharvashiurkar@gmail.com",
  "rajkalp.bhavya@gmail.com",
  "jadejajaipal5@gmail.com",
  "iamjaikritsingh@gmail.com",
  "piousfm@gmail.com",
  "mananpagarwal@gmail.com",
  "mullanakraaditya@gmail.com",
  "navinjangid732@gmail.com",
  "mrytyunjayraaz54@gmail.com",
  "dr.adarsh123pas@gmail.com",
  "y.khatadia@somaiya.edu",
  "kumaranajay8@gmail.com",
  "rakshit31004@gmail.com",
  "jalajkalra26@gmail.com",
  "idea.rishabh217@gmail.com",
  "ojasm17@gmail.com",
  "agrawalvinit20@gmail.com",
  "aakashchauhan7000@gmail.com",
  "yashacharya01@gmail.com",
  "sgr.viky@gmail.com",
  "kavyajethi18@gmail.com",
  "anshumanpal1607@gmail.com",
  "tejasrsingh09@gmail.com",
  "bistaki888@gmail.com",
  "madaanmadhav6@gmail.com",
  "arkundankumar@gmail.com",
  "nehal.ambrose090604@gmail.com",
  "hemantsoni428@gmail.com",
  "akkaasshh07@gmail.com",
  "ashugour8921@gmail.com",
  "parthsd123@gmail.com",
  "jainamshah754@gmail.com",
  "bamaniyah@gmail.com",
  "yuvrajsawant99@gmail.com",
  "sakshinayak001@gmail.com",
  "Krishnatripathi099@gmail.com",
  "palaashthakkar2312@gmail.com",
  "vishalbalaji017@gmail.com",
  "rohithkumar48@gmail.com",
  "ankitgupta66015@gmail.com",
  "yashpereira1@gmail.com",
  "ashwinmadhu12@gmail.com",
  "prustyrakesh596@gmail.com",
  "mrjash007@gmail.com",
  "sidroxx.sc@gmail.com",
  "ajaychoudhary19990@gmail.com",
  "aditya.bhuwalka9@gmail.com",
  "ppal3207@gmail.com",
  "ayushpanigrahy2002@gmail.com",
  "arshpreet7140@gmail.com",
  "himanshulohana214@gmail.com",
  "callmeshashwat@gmail.com",
  "punity98@gmail.com",
  "rushabhchoudhary011@gmail.com",
  "sobtiarjun@gmail.com",
  "ayushsrivastava2109@gmail.com",
  "apurvadbhavsar@gmail.com",
  "nishant.naik009@gmail.com",
  "Jainbhavy887@gmail.com",
  "dewanshpandey@gmail.com",
  "sharankar9@gmail.com",
  "kumararpanalt173516041909@gmail.com",
  "nithishsai086@gmail.com",
  "jenasanskar72@gmail.com",
  "agdekar@gmail.com",
  "jainnitin198953@gmail.com",
  "bhanu001ale@gmail.com",
  "adi29atm@gmail.com",
  "parashar.harsh078@gmail.com",
  "ps5334421@gmail.com",
  "mohdadnan8112002@gmail.com",
  "parmeet08072006@gmail.com",
  "abs.falke@gmail.com",
  "aryanghosle5@gmail.com",
  "hoqueripon7@gmail.com",
  "ankurhussain5@gmail.com",
  "rockstar.arshit@gmail.com",
  "chiragbhatnagar1234@gmail.com",
  "s.gauravsharma009@gmail.com",
  "gurungashu10@gmail.com",
  "gemsisop123@gmail.com",
  "Alokchaudhary3008@gmail.com",
  "rmp830@gmail.com",
  "sharmasparsh3122@gmail.com",
  "ezionishant@gmail.com",
  "chetanmadan26@gmail.com",
  "kalpak2404@gmail.com",
  "pandeyhirag64@gmail.com",
  "bhaveshparwar@gmail.com",
  "bhowmickshaibal21@gmail.com",
  "syedraza770@gmail.com",
  "abbytamrakar2408@gmail.com",
  "krishdamor11@gmail.com",
  "chandandhiman99@icloud.com",
  "himanzyoti234@gmail.com",
  "saanjhg0@gmail.com",
  "f1exfxedits@gmail.com",
  "bajpaisaurabh57@gmail.com",
  "ashurajput8192@gmail.com",
  "hamzahussain6702@gmail.com",
  "calla.shlok@gmail.com",
  "jayeshachintya@gmail.com",
  "ks5148619@gmail.com",
  "flawspc02@gmail.com",
  "virajdhabi03@gmail.com",
  "dipz931946@gmail.com",
  "yashmangnani@gmail.com",
  "bharwani.yuvraj1@gmail.com",
  "akhileshdevop@gmail.com",
  "rmangale20@gmail.com",
  "subhanshu90@gmail.com",
  "hirakdas058@gmail.com",
  "veerangad77@gmail.com",
  "meetamin19.ma@gmail.com",
  "gurtejbahra1803@gmail.com",
  "adityamote37945@gmail.com",
  "sakshammendiratta05@gmail.com",
  "rajpootkshitiz159@gmail.com",
  "rekeyrajmisra66@gmail.com",
  "mrunalpatilx@gmail.com",
  "kruthik.chowdaryy@gmail.com",
  "harshitsharma3012@gmail.com",
  "twaritarora2411@gmail.com",
  "panditamanmishra1357@gmail.com",
  "gaurang.mathur123@gmail.com",
  "shrreyesethiya3@gmail.com",
  "5090sumit@gmail.com",
  "01abhinay.here@gmail.com",
  "bhawaniptl@gmail.com",
  "at7664706@gmail.com",
  "devanshjaatt@gmail.com",
  "manavsh23@gmail.com",
  "rohitsharma20150081859@gmail.com",
  "akaxxhxd@gmail.com",
  "ahsanulshourya7@gmail.com",
  "iamshivangi0shivu@gmail.com",
  "anujkhichar8385@gmail.com",
  "palpiku2018@gmail.com",
  "misbah.nomani757@gmail.com",
  "okhanna42@gmail.com",
  "kaushikdas61610@gmail.com",
  "shivamtiwari270503@gmail.com",
  "bhavyjain1208@gmail.com",
  "traj07622@gmail.com",
  "rauta9165@gmail.com",
  "kanetkar365@gmail.com",
  "Tanmaydiwan007@gmail.com",
  "sauravku1995@gmail.com",
  "ayushkukreti123@gmail.com",
  "krishvarma85@gmail.com",
  "sujashagrawal10@gmail.com",
  "rahulsic2012@gmail.com",
  "sarthak3299@gmail.com",
  "rishabh.if.99@gmail.com",
  "puneetnegi102@gmail.com",
  "amar19091999@gmail.com",
  "rudrakshrana@gmail.com",
  "harshdoshi03@gmail.com",
  "pratiklahiri2002@gmail.com",
  "harrysinghkanda1@gmail.com",
  "snavman45@gmail.com",
  "gautam.kwatra33@gmail.com",
  "mizan00361@gmail.com",
  "makdiman09@gmail.com",
  "vishalparashar912@gmail.com",
  "rohitsethia37@gmail.com",
  "arun.patelsp@gmail.com",
  "rsonaghela@gmail.com",
  "devashishsonewane8793@gmail.com",
  "devanshbora843@gmail.com",
  "uzerraftaar@gmail.com",
  "okayakhil@gmail.com",
  "patil.omkar619@gmail.com",
  "mananbhosle2210@gmail.com",
  "parthjoshi002@gmail.com",
  "rishyanshpathak@gmail.com",
  "ap7704497@gmail.com",
  "animesh4chaturvedi@gmail.com",
  "ashtitavs@gmail.com",
  "ankurshinde191210@gmail.com",
  "rishirajrathore009@gmail.com",
  "sparshkhurana15@gmail.com",
  "kunaldua694@gmail.com",
  "anujkapoor109@gmail.com",
  "as2213754@gmail.com",
  "agarwalaaryak@gmail.com",
  "laibamalik1681@gmail.com",
  "kunal855686@gmail.com",
  "tarunsorout2003@gmail.com",
  "ashmitrai261@gmail.com",
  "muskaanshanu1234@gmail.com",
  "keshavwason123@gmail.com",
  "kushdeep.kd@gmail.com",
  "goyalsohum@gmail.com",
  "abhinavthakur121120@gmail.com",
  "harshtyagi080@gmail.com",
  "hritikraichand5@gmail.com",
  "arshds289@gmail.com",
  "dragonjittu@gmail.com",
  "yashtomar60@gmail.com",
  "saksham.nag2000@gmail.com",
  "pratham.anulaxmi@gmail.com",
  "amankumar4030@gmail.com",
  "geniuslovish@gmail.com",
  "luqmanmohd009@gmail.com",
  "mjsengupta@gmail.com",
  "shoaib8102000@gmail.com",
  "amanpreetsingh20025@gmail.com",
  "mehar9655@gmail.com",
  "sreepranav60@gmail.com",
  "ankitvukkalkar@gmail.com",
  "rs0340595@gmail.com",
];

//   let sendMail = async () => {

//   }
mailList.forEach(function (to, i, array) {
  let mailOptions = {
    from: "store@memechat.app",
    subject: "Claim your Phase 2 Mystery Box Now",
    html: `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <title></title>

    <style type="text/css">
        @media only screen and (min-width: 620px) {
            .u-row {
                width: 600px !important;
            }

            .u-row .u-col {
                vertical-align: top;
            }

            .u-row .u-col-50 {
                width: 300px !important;
            }

            .u-row .u-col-100 {
                width: 600px !important;
            }

        }

        @media (max-width: 620px) {
            .u-row-container {
                max-width: 100% !important;
                padding-left: 0px !important;
                padding-right: 0px !important;
            }

            .u-row .u-col {
                min-width: 320px !important;
                max-width: 100% !important;
                display: block !important;
            }

            .u-row {
                width: calc(100% - 40px) !important;
            }

            .u-col {
                width: 100% !important;
            }

            .u-col>div {
                margin: 0 auto;
            }
        }

        body {
            margin: 0;
            padding: 0;
        }

        table,
        tr,
        td {
            vertical-align: top;
            border-collapse: collapse;
        }

        p {
            margin: 0;
        }

        .ie-container table,
        .mso-container table {
            table-layout: fixed;
        }

        * {
            line-height: inherit;
        }

        a[x-apple-data-detectors='true'] {
            color: inherit !important;
            text-decoration: none !important;
        }

        table,
        td {
            color: #000000;
        }

        #u_body a {
            color: #0000ee;
            text-decoration: underline;
        }
    </style>



    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"
        type="text/css">
    <!--<![endif]-->

</head>

<body class="clean-body u_body"
    style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
    <!--[if IE]><div class="ie-container"><![endif]-->
    <!--[if mso]><div class="mso-container"><![endif]-->
    <table id="u_body"
        style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%"
        cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
                <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->


                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:5px;font-family:'Montserrat',sans-serif;"
                                                            align="left">

                                                            <table height="0px" align="center" border="0"
                                                                cellpadding="0" cellspacing="0" width="100%"
                                                                style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                <tbody>
                                                                    <tr style="vertical-align: top">
                                                                        <td
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                            <span>&#160;</span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 1px solid #000000;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 1px solid #000000;">
                                            <!--<![endif]-->

                                            <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;"
                                                            align="left">

                                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                                border="0">
                                                                <tr>
                                                                    <td style="padding-right: 0px;padding-left: 0px;"
                                                                        align="center">

                                                                        <img align="center" border="0"
                                                                            src="https://cdn.shopify.com/s/files/1/0605/0709/5215/files/memechat_store_logo_transparent_white_bg_540x.png?v=1649059684"
                                                                            alt="" title=""
                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 38%;max-width: 220.4px;"
                                                                            width="220.4" />

                                                                    </td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;"
                                                            align="left">

                                                            <table width="100%" cellpadding="0" cellspacing="0"
                                                                border="0">
                                                                <tr>
                                                                    <td style="padding-right: 0px;padding-left: 0px;"
                                                                        align="center">

                                                                        <img align="center" border="0"
                                                                            src="https://i.ibb.co/8YrSDNW/Screenshot-2022-08-29-at-2-55-57-PM.png"
                                                                            alt="" title=""
                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 580px;"
                                                                            width="580" />

                                                                    </td>
                                                                </tr>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 10px;font-family:'Montserrat',sans-serif;"
                                                            align="left">

                                                            <div
                                                                style="line-height: 140%; text-align: center; word-wrap: break-word;">
                                                                <p
                                                                    style="line-height: 140%; font-size: 14px; text-align: left;">
                                                                    <span
                                                                        style="font-size: 24px; line-height: 33.6px;"><strong>AYOOO!
                                                                            THE MOMENT IS HERE. DID YOU WIN AN iPhone?
                                                                            DID YOU WANT BONKY KI TATTI? ONLY YOU CAN
                                                                            FIND OUT.</strong></span></p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 40px;font-family:'Montserrat',sans-serif;"
                                                            align="left">

                                                            <div
                                                                style="line-height: 210%; text-align: center; word-wrap: break-word;">
                                                                <p
                                                                    style="font-size: 14px; line-height: 210%; text-align: left;">
                                                                    TAP THE LINK BELOW TO FIND OUT WHAT YOU WON IN YOUR
                                                                    MYSTERY BOXES.

                                                                    (and remember, whether you got a big prize or not -
                                                                    Gajju and Bonky will always love you no matter what
                                                                    and don't forget to buy more boxes in Phase 3)</p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>


                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 1px solid #000000;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 1px solid #000000;">
                                            <!--<![endif]-->

                                            <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 30px 40px;font-family:'Montserrat',sans-serif;"
                                                            align="left">

                                                            <div
                                                                style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                                <a href="https://gajju.net/" target="_blank"><button style="font-size: 14px; line-height: 160%;background-color: #fcd400; color: #000000; border: none; padding: 15px 25px; border-radius: 5px;"><span
                                                                        style="font-size: 18px; line-height: 28.8px;"><strong><span
                                                                                style="line-height: 28.8px; font-size: 18px;">Claim Now</span></strong></span></button></a>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>


                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 1px solid #000000;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 1px solid #000000;">
                                            <!--<![endif]-->

                                            <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:30px 30px 40px;font-family:'Montserrat',sans-serif;"
                                                            align="left">

                                                            <div
                                                                style="line-height: 160%; text-align: center; word-wrap: break-word;">
                                                                <p style="font-size: 14px; line-height: 160%;"><span
                                                                        style="font-size: 18px; line-height: 28.8px;"><strong><span
                                                                                style="line-height: 28.8px; font-size: 18px;">MEMECHAT
                                                                                STORE</span></strong></span></p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 10px;font-family:'Montserrat',sans-serif;"
                                                            align="left">

                                                            <div
                                                                style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
                                                                <p style="font-size: 14px; line-height: 140%;"><span
                                                                        style="font-size: 14px; line-height: 19.6px; font-family: Montserrat, sans-serif; color: #000000;"><strong><span
                                                                                style="line-height: 19.6px; font-size: 14px;">FOLLOW 
                                                                                US  ON</span></strong></span></p>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 20px;font-family:'Montserrat',sans-serif;"
                                                            align="left">

                                                            <div align="center">
                                                                <div style="display: table; max-width:41px;">
                                                                    <!--[if (mso)|(IE)]><table width="41" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:41px;"><tr><![endif]-->


                                                                    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                                                    <table align="left" border="0" cellspacing="0"
                                                                        cellpadding="0" width="32" height="32"
                                                                        style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
                                                                        <tbody>
                                                                            <tr style="vertical-align: top">
                                                                                <td align="left" valign="middle"
                                                                                    style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                                                                    <a href="https://www.instagram.com/memechat.store/"
                                                                                        title="Instagram"
                                                                                        target="_blank">
                                                                                        <img src="https://cdn.tools.unlayer.com/social/icons/circle-black/instagram.png"
                                                                                            alt="Instagram"
                                                                                            title="Instagram" width="32"
                                                                                            style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                                                                    </a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <!--[if (mso)|(IE)]></td><![endif]-->


                                                                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                                                </div>
                                                            </div>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>



                    <div class="u-row-container" style="padding: 0px;background-color: transparent">
                        <div class="u-row"
                            style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                            <div
                                style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->

                                <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                                <div class="u-col u-col-100"
                                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                                    <div style="height: 100%;width: 100% !important;">
                                        <!--[if (!mso)&(!IE)]><!-->
                                        <div
                                            style="height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                                            <!--<![endif]-->

                                            <table style="font-family:'Montserrat',sans-serif;" role="presentation"
                                                cellpadding="0" cellspacing="0" width="100%" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Montserrat',sans-serif;"
                                                            align="left">

                                                            <table height="0px" align="center" border="0"
                                                                cellpadding="0" cellspacing="0" width="100%"
                                                                style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                <tbody>
                                                                    <tr style="vertical-align: top">
                                                                        <td
                                                                            style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                                                            <span>&#160;</span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>

                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <!--[if (!mso)&(!IE)]><!-->
                                        </div>
                                        <!--<![endif]-->
                                    </div>
                                </div>
                                <!--[if (mso)|(IE)]></td><![endif]-->
                                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                            </div>
                        </div>
                    </div>


                    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                </td>
            </tr>
        </tbody>
    </table>
    <!--[if mso]></div><![endif]-->
    <!--[if IE]></div><![endif]-->
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
