let problems = document.getElementById("problems");
let buttonContainer = document.getElementById("button-container");

let test1 = [
    ["Nihilist",    1,    "Solve this quote by a singer and actress named Pearl Bailey. The keyword is HUNGR and the encryption alphabet starts with the word OBLIGE.",     "62 90 68 30 84 85 80 55 26 77 44 66 57 37 76 65 56 78 27 63 46 56 45 39 64 75 58 55 37 84 65 59 68 30 53 73 80 76 26 66 76 68 48 49 57 53 79 88 59 73 45 79 49 36 95 54 66 69 59 77 52 87 65 37 77 74 96 48 26 55 52 79 57 36"],
    ["Porta",           1,    "Please solve this Porta about a random frustration of using a phone when typing. The keyword is ANDROID.",     "PIDJYTFVHUVACAPIDJYTFVMNGKVQBSNGGCVNHOMMKQBLDZWCQBLDZWCZLVAJKVQGOMO"],
    ["Nihilist",    1,    "Solve this quote where I meshed two random quotes from my quote generator API. Keyword: RINSE; start of encryption alphabet: DIGITAL.",           "55 27 67 96 48 64 33 75 59 68 57 26 65 68 39 56 36 86 75 48 86 36 46 59 57 58 35 57 68 65 57 27 56 65 48 97 36 48 58 55 67 64 46 87 48 54 25 58 78 48 86 27 48 56 59 77 24 78 76 36 77 23 69 69 47 78 47 55"],
    ["Hill",        1,    "I use an API called API Ninjas to get random quotes and words. Solve this quote about the shadowy assassins of feudal Japan with the encryption matrix DARK.",     "CMYGQOYICUNXFDMEOUZHPRZDYGBX"],
    ["Columnar Transposition",      1,    "Here's a columnar that kind of relates to world civ. Any thoughts on Ms. Blevins or Mr. Warren? Keyword is SCREWED, which perfectly describes my grades in that class.",     "YJDEOIODYELANOESDOALTAIRSEAHIRRORCIETHENTWAEHTGFUMSNSRIHYUTMDLRTUMNLHLNITTTIMOEPEAN"],
    ["Xenocrypt",                   1,    "Here's a much dreaded xenocrypt. Not sure how much I agree with the quote...",     "TZ VAKZNOMWOB BW SWM QMAVTVM WZ BD BDOMN RSWOZD CVWZ BDOMN SWVHZD<br><img src='images/dreaded.png'"],
    ["Hill",        1,    "Call me goofy, but I like listening to the Beatles. Solve this quote from the song “Till There Was You” (1963) encoded with the keyword BELL.",     "VZUFOIUFILWRFQONCZARPLSBINKXUFXSQFBBXSCFINMKLO"],
    ["Aristocrat",      1,    "He's goofy. Anyways, time for some more modern music. Solve this K1 aristocrat which uses lyrics from “Painkiller” by Ruel.",     "EQQUMVQ OKUXOMD, MUP X PGU'E BQMDDK ZUGI. IWME'C EWQ SGXUE GT DXHXUV XT RK WQMBE VQEC NBGZQU.<br><img src='images/ruel.png'"],
    ["Baconian",    1,    "Some quote I found from a rando archived test: The name of this famous physicist is encoded with a Baconian Cipher. ",     "AAAAAAcAdAAAcAAdAAAcdAAAcAAAAAAdcAAAAAdcdAAAAAcdAcdAAcdAcdAcAdAcAdAAcAAAAAA"],
    ["Columnar Transposition",      1,    "Here's a columnar which is a weird quote from the internet. Keyword is CRUSH.",     "IIUEVNHRWOYECOEUWNNLVEOWEOTOSDAPETHMLDALOARAIEEILENTOOGRTEEDIEWYEDYNWIRDOLETNARSALMDRRRISDIEWPMEIUISFN"],
    ["Patristocrat",    1,    "Solve this patristocrat, which is an indirect quote by Andrew Kim taken out of context.",     "LKCAA TXSGL TIIBS MIJAH CSYSL HIAOH EQI.<br><img src='images/andrew.png'"],
    ["Fractionated Morse",          1,    "This fractionated morse is the last line from my favorite poem, “The Morning After I Killed Myself” by Meggie Royer. It starts with “THE” and ends with “RTED”.",     "N R U W W N J J G J K Y N T X C J Q Z B G T C H U H Z O A Q C S G E F G X T Q U H Z W P E V V N C H S G W V M R U T C T Z R Q O Z T W N B T D G J P E C D C C G F A Q G B P G Q D S S D U H"],
    ["Aristocrat",      1,    "Hope your brain cells are still intact. Take a “break” and solve an aristocrat!",     "SKKAMGEXP HA PAAPTI, HCIMI SMI STQALH ITIFIX QETTEAX BIABTI EX PIAMPES SXG IEPCHN LED JETTEAX JMSEX KITTL BIM BIMLAX. E YAXGIM CAY QSXN JMSEX KITTL SMI BMILIXH EX PIAMPES.<br><img src='images/break.png'"],
    ["Porta",           1,    "I feel like I've been neglecting porta, so here's another one! It's a random unpopular opinion about kpop that I found on Reddit. Key is KPOP.",     "BOPL GYUK ZULV WYGU IHAM AMUG VPGN QEVU VEYU MZHK RALP UPGR KHI"],
    ["Fractionated Morse",          1,    "Don't solve this fractionated morse about reverse psychology. It probably doesn't start with “WE HA” and ends with “RKS”.",     "V T Q H I B M Y P M U U O U U G F P N L S M N R Z W P V O G K Q I C M B Q U W O H S M G K U W C V Q H H F O B Y O H S M B U L S O Q I O G B T S G B U L F O B W D W N G F P V W M G F Q C"],
    // ["Aristocrat",    1,  "Hi Morgan, love you. I totally am not running out of things to say for these aristo test texts.", "VEC JYL PVEUL JFEDPSEN DJDLYU WEMSNO JKENO? VEDLZXKKH JNFYLC JOYLLF PE TL PVL CSPNLUU.<br><img src='images/morgan-love.png'>"],
    ["Cryptarithm",    1,  "Here's a cryptarithm, because why suffer alone when you can suffer together?", "<img src='images/cryptarithm.png'>"],
    ["Aristocrat",    1,  "I can't think of anymore quotes for aristocrats, so here are some cringe pick up lines instead~", "TAK LFC T OTZUBUTS? UD'Q DGK QDATSZKQD DGUSZ, YCD KHKAL DUOK U NFFJ TD LFC, KHKALFSK KNQK PUQTRRKTAQ.<br><img src='images/pickup.png'>"],
    ["Hill Cipher",    1,  "I'm currently procrastinating my history homework, so here's a history related quote so that I feel somewhat productive. Encryption key is BANK.", "HNMCLVOASYIAAACCAGPTAATXAYSSMOSIAIEEEKTLWASUOATBOCEOSCAGBFTZAYPNSYEE"],
    ["Patristocrat",    1,  "Patristocrat pick up line ;-; Here's a hint though, it starts with “I WISH I'D\"", "PUPZM PVJIP VXKEF IRRFW RPKWR KZHPF WHFPW MPLMZ HMKKT SFHIN ZFQKN IWVPG FLKRH MFXPZ REQIW VPUIW RRKYW KUITT ISKNR PR<br><img src='images/patristopickup.png'>"],
    ["Aristocrat",    1,  "One last pick up line, or is it?", "PZE ULZF, J NBI B HJXUEH QJLS MSBIP RZ OZ, GER PZE'MS DZ NZR JR CEDR QSVR TP TJLI.<br><img src='images/last-pickup.png'>"],
    // ["",    1,  "", ""],
];

let notStarted = true;
function start(action) {
    if(action == 0) {
        problems.innerHTML = `<div class=\"bold-text\">You cannot start this test yet. Contact your test proctors for help.</div>`;
    }else if(action == 1) {
        showTest(test1);
    }else {
        problems.innerHTML = `<div class=\"bold-text\">System error. Contact your test proctors for help.</div>`;
    }
    
}

function showTest(test) {
    if(notStarted) {
        for(let i = 0; i < test.length; i++) {
            let problem = test[i];
            let type = problem[0];
            let points = problem[1];
            let question = problem[2]
            let text = problem[3];
            problems.innerHTML += `
            <div class=\"container problem\" id=\"problems\">
                <div class=\"question bold-text\">
                    ${i + 1}. ${type} (${points} points) <br> ${question}
                </div>
                <div class=\"question-text\">${text}</div>
            </div>`
            notStarted = false;
            buttonContainer.innerHTML = "";
        }
    }
}