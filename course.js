/* Jidr course data. Shared by index.html (the app) and record.html (the recorder).
   Word:   [arabic with vowel marks, transliteration, English, Russian, root ("" if none), pattern code ("" if none)]
   Phrase: [arabic, transliteration, English, Russian]
   Every word's letters must be taught by its step or an earlier one (the tests check this).
   Audio keys: "L:" + letter, "W:" + word arabic, "P:" + phrase arabic. Do not change an item's arabic once recorded. */
window.COURSE = {
version: 2,

/* [char, name, translit, EN sound, RU sound, dots, joins next letter, shape family, what to say when recording] */
letters: [
["ا","alif","ā","a long “a”, as in father","долгое «а»","n",0,"alif","ا — long aa"],
["ء","hamza","ʾ","a short catch in the throat, like the break in uh-oh","короткая смычка в горле, как пауза в «не-а»","n",0,"hamza","أَ — a with a catch"],
["ب","bāʾ","b","b as in bat","«б»","b1",1,"ba","بَ — ba"],
["ت","tāʾ","t","t as in tea","«т»","a2",1,"ba","تَ — ta"],
["ث","thāʾ","th","th as in think, tongue tip between the teeth","как шепелявое «с»: кончик языка между зубами","a3",1,"ba","ثَ — tha"],
["ن","nūn","n","n as in net","«н»","a1",1,"ba","نَ — na"],
["ي","yāʾ","y / ī","y as in yes, or a long “ee”","«й» или долгое «и»","b2",1,"ba","يَ — ya"],
["ج","jīm","j","j as in jam","«дж», как в «джаз»","i1",1,"jim","جَ — ja"],
["ح","ḥāʾ","ḥ","a breathy h from deep in the throat, like fogging a mirror","выдох из глубины горла, как будто дышишь на стекло; не русское «х»","n",1,"jim","حَ — ḥa"],
["خ","khāʾ","kh","like “ch” in Scottish loch","как русское «х»","a1",1,"jim","خَ — kha"],
["د","dāl","d","d as in dog","«д»","n",0,"dal","دَ — da"],
["ذ","dhāl","dh","th as in this, tongue between the teeth","звонкое «з» с языком между зубами","a1",0,"dal","ذَ — dha"],
["ر","rāʾ","r","a quick rolled r","как русское «р», только короче","n",0,"ra","رَ — ra"],
["ز","zāy","z","z as in zoo","«з»","a1",0,"ra","زَ — za"],
["س","sīn","s","s as in sun","«с»","n",1,"sin","سَ — sa"],
["ش","shīn","sh","sh as in ship","«ш»","a3",1,"sin","شَ — sha"],
["ص","ṣād","ṣ","a heavy s: tongue pulled back and low","«с» с оттянутым назад языком, глубже и «темнее»","n",1,"sad","صَ — ṣa"],
["ض","ḍād","ḍ","a heavy d, same trick as ṣ","тяжёлое «д», тот же приём, что у ṣ","a1",1,"sad","ضَ — ḍa"],
["ط","ṭāʾ","ṭ","a heavy t","тяжёлое «т»","n",1,"ta","طَ — ṭa"],
["ظ","ẓāʾ","ẓ","a heavy dh","тяжёлое «з» с языком между зубами","a1",1,"ta","ظَ — ẓa"],
["ع","ʿayn","ʿ","a squeezed-throat “ah”, no English match","«а» со сжатым горлом; в русском нет","n",1,"ayn","عَ — ʿa"],
["غ","ghayn","gh","a gargled r, like the French r","картавое «г», как французское r","a1",1,"ayn","غَ — gha"],
["ف","fāʾ","f","f as in fan","«ф»","a1",1,"fa","فَ — fa"],
["ق","qāf","q","a k said far back in the throat","«к» глубоко в горле","a2",1,"fa","قَ — qa"],
["ك","kāf","k","k as in kite","«к»","n",1,"kaf","كَ — ka"],
["ل","lām","l","l as in lamp","«л»","n",1,"lam","لَ — la"],
["م","mīm","m","m as in moon","«м»","n",1,"mim","مَ — ma"],
["ه","hāʾ","h","h as in hat, just a breath","лёгкий выдох «х»","n",1,"ha","هَ — ha"],
["ة","tāʾ marbūṭa","-a","the -a ending of words like madrasa (only at the end)","окончание «-а», как в «мадраса» (только в конце слова)","a2",0,"ha","ـة — as in madrasa"],
["و","wāw","w / ū","w as in water, or a long “oo”","«в» как в английском water, или долгое «у»","n",0,"waw","وَ — wa"]
],

dots: {n:["no dots","без точек"],a1:["1 dot above","1 точка сверху"],a2:["2 dots above","2 точки сверху"],a3:["3 dots above","3 точки сверху"],b1:["1 dot below","1 точка снизу"],b2:["2 dots below","2 точки снизу"],i1:["1 dot inside","1 точка внутри"]},

shapes: {
  alif:["Stick","Палочка"], hamza:["Small hamza","Хамза"], ba:["Boat family","Лодочки"], jim:["Hook family","Крючки"],
  dal:["Corner","Уголки"], ra:["Slide","Горки"], sin:["Teeth","Зубцы"], sad:["Loop + tooth","Петля с зубцом"],
  ta:["Loop with a stick","Петля с палкой"], ayn:["Open mouth","Открытый рот"], fa:["Dot loop","Кружок"],
  kaf:["Kāf","Каф"], lam:["Tall hook","Высокий крючок"], mim:["Small loop","Маленькая петля"], ha:["Round h","Круглое h"], waw:["Comma loop","Запятая"]
},

/* Letters that sound alike — drilled together */
sounds: [
 {L:"سصث", t:["s · ṣ · th","s · ṣ · th"], en:"ṣ is s with the tongue pulled back (the vowel around it darkens). ث is th as in think.", ru:"ṣ — это s с оттянутым назад языком (гласная рядом темнеет). ث — английское th в think."},
 {L:"زظذ", t:["z · ẓ · dh","z · ẓ · dh"], en:"ذ is the th in this. ظ is the same sound, heavy.", ru:"ذ — английское th в this. ظ — тот же звук, только «тяжёлый»."},
 {L:"تط", t:["t · ṭ","t · ṭ"], en:"ط is a heavy t: the back of the tongue rises, the a after it sounds like “u”.", ru:"ط — тяжёлое т: корень языка поднят, «а» после него звучит глубже."},
 {L:"دض", t:["d · ḍ","d · ḍ"], en:"ض is a heavy d. It is so typical that Arabic is called “the language of ḍād”.", ru:"ض — тяжёлое д. Он настолько характерен, что арабский называют «языком ḍād»."},
 {L:"هحخ", t:["h · ḥ · kh","h · ḥ · kh"], en:"ه is a light breath, ح a strong breath from the throat, خ a scrape like Russian х.", ru:"ه — лёгкий выдох, ح — сильный выдох из горла, خ — хрип, как русское х."},
 {L:"ءعا", t:["ʾ · ʿ · a","ʾ · ʿ · a"], en:"ء is a clean stop, ع squeezes the throat, ا is just a long a.", ru:"ء — чистая смычка, ع — сжатое горло, ا — просто долгое а."},
 {L:"كق", t:["k · q","k · q"], en:"ق is a k made further back, almost in the throat.", ru:"ق — это к, сделанное глубже, почти в горле."},
 {L:"خغ", t:["kh · gh","kh · gh"], en:"Same place in the throat: خ is voiceless (х), غ is voiced (a French r).", ru:"Одно место в горле: خ глухой (х), غ звонкий (французское r)."}
],

/* Patterns: root letters ف ع ل stand in for any root */
pats: {
 v:   {t:"فَعَلَ",  en:"he did it (past)",       ru:"он сделал (прошедшее)"},
 yf:  {t:"يَفعَلُ", en:"he does it (present)",    ru:"он делает (настоящее)"},
 dr:  {t:"فاعِل",  en:"the one who does it",     ru:"тот, кто делает"},
 dn:  {t:"مَفعول", en:"the thing it was done to", ru:"то, что сделано"},
 pl:  {t:"مَفعَل",  en:"the place for it (also مَفعَلة, مَفعِل)", ru:"место для этого (также مَفعَلة, مَفعِل)"},
 mu:  {t:"مُفَعِّل", en:"the one who makes others do it", ru:"тот, кто учит / заставляет делать"},
 tf:  {t:"تَفعيل",  en:"the act of making it happen", ru:"процесс, действие"},
 fy:  {t:"فَعيل",   en:"a quality (adjective)",   ru:"качество (прилагательное)"},
 af:  {t:"أَفعَل",  en:"more / the most",          ru:"более / самый"},
 fi:  {t:"فِعال",   en:"a thing (noun)",           ru:"предмет (существительное)"},
 fa:  {t:"فَعال",   en:"a thing (noun)",           ru:"предмет (существительное)"},
 fu:  {t:"فُعُل",   en:"plural",                    ru:"множественное число"},
 afl: {t:"أَفعال",  en:"plural",                    ru:"множественное число"}
},

roots: {
 "بيت":["house","дом"], "يوم":["day","день"], "كلل":["all","все"], "كتب":["write","писать"], "وقت":["time","время"],
 "قلب":["heart, turn","сердце, переворачивать"], "فهم":["understand","понимать"], "حبب":["love","любить"], "حلب":["milk","доить"],
 "لحم":["meat","мясо"], "جمل":["beauty","красота"], "جبن":["cheese","сыр"], "أكل":["eat","есть"], "قلل":["little","мало"],
 "رجل":["man, foot","человек, нога"], "ولد":["give birth","рождать"], "جدد":["new","новый"], "كبر":["big","большой"],
 "برد":["cold","холод"], "خبز":["bread, bake","хлеб, печь"], "شكر":["thank","благодарить"], "صبح":["morning","утро"],
 "صدق":["truth, friend","правда, друг"], "كثر":["many","много"], "درس":["study","учиться"], "شرب":["drink","пить"],
 "عند":["at, with","у, при"], "طعم":["taste, food","вкус, еда"], "طلب":["ask, seek","просить, искать"], "عرب":["Arab","араб"],
 "عمل":["work","работать"], "صغر":["small","маленький"], "ظهر":["appear, noon","появляться, полдень"], "طيب":["good","хороший"],
 "علم":["know","знать"], "عرف":["know (a fact)","знать (факт)"], "جمع":["gather","собирать"], "لعب":["play","играть"],
 "ركب":["ride","ехать верхом"], "سوق":["drive, market","гнать, рынок"], "بيع":["sell","продавать"], "طبخ":["cook","готовить"],
 "سجد":["bow down","кланяться"], "نزل":["go down, stay","спускаться, останавливаться"], "قرب":["near","близко"],
 "زوج":["pair, spouse","пара, супруг"], "طفل":["child","ребёнок"], "عيل":["family","семья"], "شرع":["road, start","путь, начинать"],
 "سير":["go, travel","идти, ехать"], "قطر":["line up, train","выстраивать, поезд"], "بعد":["far","далеко"], "حطط":["put down","класть"],
 "رخص":["cheap","дешёвый"], "حسن":["good","хороший"], "رسل":["send","посылать"], "سعد":["happy","счастье"], "تعب":["tire","уставать"],
 "جوع":["hunger","голод"], "مرض":["illness","болезнь"], "خير":["good","добро"], "سلم":["peace","мир"], "كلم":["speak","говорить"],
 "سأل":["ask","спрашивать"], "شهر":["month","месяц"], "عفو":["pardon","прощать"], "فضل":["favour","милость"], "سهل":["easy","лёгкий"], "أهل":["family, welcome","семья, родные"]
},

steps: [
{ id:"s01", kind:"letters", L:"اءبتني",
  t:["Alif and the boat family","Алиф и «лодочки»"],
  en:"ب ت ن ي share one body; only the dots change. أ is alif carrying a hamza: the word opens with a clean vowel. At the end of a word ي can drop its dots: ى, read as a long a. The ending ـي means “my”.",
  ru:"У ب ت ن ي одно тело, меняются только точки. أ — алиф с хамзой: слово начинается с чистой гласной. В конце слова ي может потерять точки: ى, читается как долгое а. Окончание ـي значит «мой».",
  words:[
   ["أَنا","anā","I","я","",""],
   ["أَنتَ","anta","you (m)","ты (м.)","",""],
   ["أَنتِ","anti","you (f)","ты (ж.)","",""],
   ["بَيت","bayt","house","дом","بيت",""],
   ["بَيتي","baytī","my house","мой дом","بيت",""],
   ["بِنت","bint","girl, daughter","девочка, дочь","",""],
   ["اِبن","ibn","son","сын","",""],
   ["أَب","ab","father","отец","",""],
   ["باب","bāb","door","дверь","",""],
   ["أَينَ","ayna","where?","где?","",""]],
  phrases:[
   ["أَينَ أَنتَ؟","ayna anta?","Where are you?","Где ты?"],
   ["أَنتِ بِنتي","anti bintī","You are my daughter","Ты моя дочь"]]},

{ id:"s02", kind:"letters", L:"لكمو",
  t:["Tall strokes and loops","Палочки и петли"],
  en:"ل and ك are tall; م and و are small loops. لا is lam + alif tied in one knot. الـ means “the”. و alone means “and” and sticks to the next word.",
  ru:"ل и ك высокие; م и و — маленькие петли. لا — лам и алиф, связанные в узел. الـ значит определённый артикль. و отдельно значит «и» и пишется слитно со следующим словом.",
  words:[
   ["لا","lā","no","нет","",""],
   ["وَ","wa","and","и","",""],
   ["مَن","man","who?","кто?","",""],
   ["ما","mā","what?","что?","",""],
   ["كَم","kam","how many?","сколько?","",""],
   ["مِن","min","from","из, от","",""],
   ["أُمّ","umm","mother","мать","",""],
   ["يَوم","yawm","day","день","يوم",""],
   ["اليَوم","al-yawm","today","сегодня","يوم",""],
   ["كُلّ","kull","all, every","все, каждый","كلل",""],
   ["لٰكِن","lākin","but","но","",""]],
  phrases:[
   ["مَن أَنتَ؟","man anta?","Who are you?","Кто ты?"],
   ["كُلَّ يَوم","kulla yawm","Every day","Каждый день"],
   ["أُمّي وَأَبي","ummī wa-abī","My mom and my dad","Моя мама и мой папа"]]},

{ id:"s03", kind:"root", root:"كتب",
  t:["One root, a whole family","Один корень — целая семья"],
  en:"The root letters (amber) carry the meaning “write”. The pattern around them says what kind of word it is: فاعِل is the one who does it, مَفعَل the place, مَفعول the thing it was done to.",
  ru:"Корневые буквы (янтарные) несут смысл «писать». Шаблон вокруг них говорит, что это за слово: فاعِل — кто делает, مَفعَل — место, مَفعول — то, что сделано.",
  words:[
   ["كَتَبَ","kataba","he wrote","он написал","كتب","v"],
   ["كِتاب","kitāb","book","книга","كتب","fi"],
   ["كُتُب","kutub","books","книги","كتب","fu"],
   ["كاتِب","kātib","writer","писатель","كتب","dr"],
   ["مَكتَب","maktab","office, desk","офис, письменный стол","كتب","pl"],
   ["مَكتوب","maktūb","written; a letter","написанный; письмо","كتب","dn"]],
  phrases:[
   ["أَينَ كِتابي؟","ayna kitābī?","Where is my book?","Где моя книга?"]]},

{ id:"s04", kind:"letters", L:"فقهة",
  t:["Dot loops and the ending ة","Кружки и окончание ة"],
  en:"ف has one dot, ق has two and dips lower. ة is a ه with two dots that only ends words; say -a. It often marks feminine words.",
  ru:"У ف одна точка, у ق две, и он опускается ниже строки. ة — это ه с двумя точками, бывает только в конце слова; читается -а. Часто показывает женский род.",
  words:[
   ["في","fī","in","в","",""],
   ["هُوَ","huwa","he","он","",""],
   ["هِيَ","hiya","she","она","",""],
   ["هُنا","hunā","here","здесь","",""],
   ["أَهلاً","ahlan","hi, welcome","привет","أهل",""],
   ["قَهوة","qahwa","coffee","кофе","",""],
   ["وَقت","waqt","time","время","وقت",""],
   ["قَلب","qalb","heart","сердце","قلب",""],
   ["فَم","fam","mouth","рот","",""],
   ["كَيفَ","kayfa","how?","как?","",""],
   ["أَفهَم","afham","I understand","я понимаю","فهم",""],
   ["مَكتَبة","maktaba","library, bookshop","библиотека, книжный","كتب","pl"]],
  phrases:[
   ["لا أَفهَم","lā afham","I don't understand","Я не понимаю"],
   ["أَنا في البَيت","anā fī l-bayt","I'm at home","Я дома"],
   ["هِيَ في المَكتَب","hiya fī l-maktab","She's at the office","Она в офисе"]]},

{ id:"s05", kind:"letters", L:"جحخ",
  t:["The hook family","Крючки"],
  en:"One hook, three letters: a dot inside is ج, no dot is ح, a dot above is خ. ح is a strong breath from the throat; خ is like Russian х.",
  ru:"Один крючок, три буквы: точка внутри — ج, без точки — ح, точка сверху — خ. ح — сильный выдох из горла; خ — как русское х.",
  words:[
   ["أَخ","akh","brother","брат","",""],
   ["أُخت","ukht","sister","сестра","",""],
   ["أُحِبّ","uḥibb","I love, I like","я люблю","حبب",""],
   ["حَمّام","ḥammām","bathroom","ванная, туалет","",""],
   ["حَليب","ḥalīb","milk","молоко","حلب","fy"],
   ["لَحم","laḥm","meat","мясо","لحم",""],
   ["جَميل","jamīl","beautiful","красивый","جمل","fy"]],
  phrases:[
   ["كَيفَ الحال؟","kayfa l-ḥāl?","How are you?","Как дела?"],
   ["أَينَ الحَمّام؟","ayna l-ḥammām?","Where is the bathroom?","Где туалет?"],
   ["أُحِبُّ القَهوة","uḥibbu l-qahwa","I love coffee","Я люблю кофе"]]},

{ id:"s06", kind:"theme",
  t:["Food and drink","Еда и напитки"],
  en:"No new letters: everything here is built from what you already read.",
  ru:"Новых букв нет: всё здесь собрано из того, что вы уже читаете.",
  words:[
   ["ماء","māʾ","water","вода","",""],
   ["تُفّاح","tuffāḥ","apples","яблоки","",""],
   ["لَيمون","laymūn","lemon","лимон","",""],
   ["جُبنة","jubna","cheese","сыр","جبن",""],
   ["أَكَلَ","akala","he ate","он ел","أكل","v"],
   ["أَكل","akl","food","еда","أكل",""],
   ["قَليل","qalīl","a little, few","мало","قلل","fy"],
   ["كوب","kūb","cup, glass","чашка, стакан","",""]],
  phrases:[
   ["كوبُ ماء","kūbu māʾ","A glass of water","Стакан воды"],
   ["قَهوة وَحَليب","qahwa wa-ḥalīb","Coffee and milk","Кофе и молоко"]]},

{ id:"s07", kind:"letters", L:"دذرز",
  t:["Short stoppers","Короткие стопоры"],
  en:"These four never join the next letter, so a word breaks after them. ذ is د plus a dot, ز is ر plus a dot. ر sits lower and curves more than د.",
  ru:"Эти четыре никогда не соединяются со следующей буквой, поэтому слово после них разрывается. ذ — это د с точкой, ز — ر с точкой. ر ниже и изогнут сильнее, чем د.",
  words:[
   ["هٰذا","hādhā","this (m)","это (м.)","",""],
   ["هٰذِهِ","hādhihi","this (f)","это (ж.)","",""],
   ["ماذا","mādhā","what?","что?","",""],
   ["أُريد","urīd","I want","я хочу","",""],
   ["رَجُل","rajul","man","мужчина","رجل",""],
   ["وَلَد","walad","boy","мальчик","ولد",""],
   ["جَديد","jadīd","new","новый","جدد","fy"],
   ["كَبير","kabīr","big","большой","كبر","fy"],
   ["بارِد","bārid","cold","холодный","برد","dr"],
   ["حارّ","ḥārr","hot","горячий, жаркий","",""],
   ["خُبز","khubz","bread","хлеб","خبز",""],
   ["رُزّ","ruzz","rice","рис","",""]],
  phrases:[
   ["أُريدُ قَهوة","urīdu qahwa","I want coffee","Я хочу кофе"],
   ["هٰذا جَميل","hādhā jamīl","This is beautiful","Это красиво"],
   ["ماذا تُريد؟","mādhā turīd?","What do you want?","Что ты хочешь?"]]},

{ id:"s08", kind:"root", root:"حبب",
  t:["Love: ح ب ب","Любовь: ح ب ب"],
  en:"A root can double its last letter. The mark ّ (shadda) writes a doubled letter once. فَعيل makes a quality, مَفعول the one it happens to.",
  ru:"Корень может удваивать последнюю букву. Знак ّ (шадда) пишет удвоенную букву один раз. فَعيل даёт качество, مَفعول — того, с кем это происходит.",
  words:[
   ["حُبّ","ḥubb","love","любовь","حبب",""],
   ["حَبيب","ḥabīb","darling, beloved","любимый, дорогой","حبب","fy"],
   ["حَبيبي","ḥabībī","my darling","мой любимый","حبب",""],
   ["مَحبوب","maḥbūb","loved, popular","любимый, популярный","حبب","dn"]],
  phrases:[
   ["أُحِبُّكَ","uḥibbuka","I love you (to a man)","Я тебя люблю (мужчине)"],
   ["أُحِبُّكِ","uḥibbuki","I love you (to a woman)","Я тебя люблю (женщине)"]]},

{ id:"s09", kind:"letters", L:"سشصضث",
  t:["Teeth and their heavy twins","Зубцы и их тяжёлые близнецы"],
  en:"س has three teeth; ش adds three dots. ص ض add a loop and sound heavy. ث is a boat with three dots: th as in think. With الـ before س ش ص ض ث the l disappears and the letter doubles: الشّاي = ash-shāy.",
  ru:"У س три зубца; у ش ещё три точки. ص ض с петлёй и звучат «тяжело». ث — лодочка с тремя точками: th в think. Перед س ش ص ض ث в الـ звук л пропадает, буква удваивается: الشّاي = аш-шай.",
  words:[
   ["اِسم","ism","name","имя","",""],
   ["شُكراً","shukran","thank you","спасибо","شكر",""],
   ["شاي","shāy","tea","чай","",""],
   ["سوق","sūq","market","рынок","سوق",""],
   ["صَباح","ṣabāḥ","morning","утро","صبح","fa"],
   ["مَساء","masāʾ","evening","вечер","",""],
   ["صَديق","ṣadīq","friend","друг","صدق","fy"],
   ["شَمس","shams","sun","солнце","",""],
   ["كَثير","kathīr","a lot, many","много","كثر","fy"],
   ["أَيضاً","ayḍan","also","тоже","",""],
   ["بَيض","bayḍ","eggs","яйца","",""]],
  phrases:[
   ["صَباحُ الخَير","ṣabāḥu l-khayr","Good morning","Доброе утро"],
   ["مَساءُ الخَير","masāʾu l-khayr","Good evening","Добрый вечер"],
   ["ما اسمُكَ؟","mā smuka?","What is your name?","Как тебя зовут?"],
   ["اِسمي ناتاليا","ismī Natalia","My name is Natalia","Меня зовут Наталья"],
   ["شُكراً جَزيلاً","shukran jazīlan","Thank you very much","Большое спасибо"]]},

{ id:"s10", kind:"root", root:"درس",
  t:["Study: د ر س","Учёба: د ر س"],
  en:"The same root in five patterns. مُفَعِّل is the one who makes others do it: مُدَرِّس, the one who makes you study. يَفعَلُ is “he does it now”.",
  ru:"Один корень в пяти шаблонах. مُفَعِّل — тот, кто заставляет других делать: مُدَرِّس, тот, кто заставляет учиться. يَفعَلُ — «он делает сейчас».",
  words:[
   ["دَرَسَ","darasa","he studied","он учился","درس","v"],
   ["يَدرُسُ","yadrusu","he studies","он учится","درس","yf"],
   ["دَرس","dars","lesson","урок","درس",""],
   ["مَدرَسة","madrasa","school","школа","درس","pl"],
   ["مُدَرِّس","mudarris","teacher","учитель","درس","mu"]],
  phrases:[
   ["أَدرُسُ كُلَّ يَوم","adrusu kulla yawm","I study every day","Я занимаюсь каждый день"]]},

{ id:"s11", kind:"root", root:"شرب",
  t:["Eat and drink","Есть и пить"],
  en:"Present tense starts with a letter that says who: أَ = I, تَ = you, يَ = he. أَشرَبُ “I drink”, تَشرَبُ “you drink”.",
  ru:"Настоящее время начинается с буквы, которая говорит, кто: أَ — я, تَ — ты, يَ — он. أَشرَبُ «я пью», تَشرَبُ «ты пьёшь».",
  words:[
   ["شَرِبَ","shariba","he drank","он выпил","شرب",""],
   ["أَشرَبُ","ashrabu","I drink","я пью","شرب",""],
   ["مَشروب","mashrūb","a drink","напиток","شرب","dn"],
   ["شَراب","sharāb","drink, syrup","питьё, сироп","شرب","fa"],
   ["آكُلُ","ākulu","I eat","я ем","أكل",""]],
  phrases:[
   ["ماذا تَشرَبُ؟","mādhā tashrabu?","What will you drink?","Что будешь пить?"],
   ["أَشرَبُ الشّاي","ashrabu sh-shāy","I drink tea","Я пью чай"]]},

{ id:"s12", kind:"letters", L:"طظعغ",
  t:["Heavy letters and the throat","Тяжёлые буквы и горло"],
  en:"ط ظ are loops with a tall stick; ظ adds a dot. ع and غ share a shape: ع squeezes the throat, غ is a gargled r. These are the last letters: you can now read any Arabic word.",
  ru:"ط ظ — петли с высокой палкой; у ظ есть точка. ع и غ одной формы: ع — сжатое горло, غ — картавое r. Это последние буквы: теперь вы можете прочитать любое арабское слово.",
  words:[
   ["نَعَم","naʿam","yes","да","",""],
   ["عَلى","ʿalā","on","на","",""],
   ["مَعَ","maʿa","with","с","",""],
   ["عِندي","ʿindī","I have","у меня есть","عند",""],
   ["طَعام","ṭaʿām","food","еда","طعم","fa"],
   ["مَطعَم","maṭʿam","restaurant","ресторан","طعم","pl"],
   ["طالِب","ṭālib","student","студент","طلب","dr"],
   ["عَرَبيّ","ʿarabiyy","Arabic, Arab","арабский","عرب",""],
   ["ساعة","sāʿa","hour, watch","час, часы","",""],
   ["غَداً","ghadan","tomorrow","завтра","",""],
   ["صَغير","ṣaghīr","small","маленький","صغر","fy"],
   ["ظُهر","ẓuhr","noon","полдень","ظهر",""],
   ["طَيِّب","ṭayyib","good, okay","хорошо, ладно","طيب",""]],
  phrases:[
   ["السَّلامُ عَلَيكُم","as-salāmu ʿalaykum","Hello (peace be upon you)","Здравствуйте (мир вам)"],
   ["وَعَلَيكُمُ السَّلام","wa-ʿalaykumu s-salām","Hello back (and upon you peace)","И вам мир (ответ)"],
   ["عِندي سُؤال","ʿindī suʾāl","I have a question","У меня вопрос"],
   ["أَتَكَلَّمُ العَرَبيّةَ قَليلاً","atakallamu l-ʿarabiyyata qalīlan","I speak Arabic a little","Я немного говорю по-арабски"]]},

{ id:"s13", kind:"root", root:"علم",
  t:["Know: ع ل م","Знать: ع ل م"],
  en:"تَفعيل is the act of making something happen: تَعليم, teaching. Compare مُعَلِّم (teacher) with مُدَرِّس: same pattern, another root.",
  ru:"تَفعيل — процесс, действие: تَعليم, обучение. Сравните مُعَلِّم (учитель) и مُدَرِّس: шаблон тот же, корень другой.",
  words:[
   ["عِلم","ʿilm","knowledge, science","знание, наука","علم",""],
   ["عالِم","ʿālim","scientist","учёный","علم","dr"],
   ["مُعَلِّم","muʿallim","teacher","учитель","علم","mu"],
   ["تَعليم","taʿlīm","education","обучение","علم","tf"],
   ["مَعلومات","maʿlūmāt","information","информация","علم",""]],
  phrases:[
   ["لا أَعرِفُ","lā aʿrifu","I don't know","Я не знаю"],
   ["مَن مُعَلِّمُكِ؟","man muʿallimuki?","Who is your teacher? (to a woman)","Кто твой учитель? (женщине)"]]},

{ id:"s14", kind:"root", root:"عمل",
  t:["Work: ع م ل","Работа: ع م ل"],
  en:"The doer, the place and the action from one root.",
  ru:"Кто делает, где и само действие — из одного корня.",
  words:[
   ["عَمَل","ʿamal","work","работа","عمل",""],
   ["عامِل","ʿāmil","worker","рабочий","عمل","dr"],
   ["مَعمَل","maʿmal","lab, workshop","лаборатория, мастерская","عمل","pl"],
   ["أَعمَلُ","aʿmalu","I work","я работаю","عمل",""],
   ["جامِعة","jāmiʿa","university","университет","جمع",""]],
  phrases:[
   ["أَينَ تَعمَلُ؟","ayna taʿmalu?","Where do you work?","Где ты работаешь?"],
   ["أَعمَلُ في الجامِعة","aʿmalu fī l-jāmiʿa","I work at the university","Я работаю в университете"]]},

{ id:"s15", kind:"theme",
  t:["Time","Время"],
  en:"Words for when. Tanwīn ً at the end (-an) often turns a noun into “in the …”: صَباحاً = in the morning.",
  ru:"Слова про «когда». Танвин ً в конце (-ан) часто превращает существительное в «…ом»: صَباحاً = утром.",
  words:[
   ["الآن","al-āna","now","сейчас","",""],
   ["أَمس","ams","yesterday","вчера","",""],
   ["دَقيقة","daqīqa","minute","минута","",""],
   ["لَيلة","layla","night","ночь","",""],
   ["أُسبوع","usbūʿ","week","неделя","",""],
   ["شَهر","shahr","month","месяц","شهر",""],
   ["سَنة","sana","year","год","",""],
   ["صَباحاً","ṣabāḥan","in the morning","утром","صبح",""]],
  phrases:[
   ["كَمِ السّاعة؟","kami s-sāʿa?","What time is it?","Который час?"],
   ["إِلى اللِّقاء","ilā l-liqāʾ","See you, goodbye","До встречи"]]},

{ id:"s16", kind:"pattern", pat:"dr",
  t:["Who does it: فاعِل","Кто делает: فاعِل"],
  en:"Drop any root into فاعِل and you get the person who does it. Add ة for a woman: طالِب → طالِبة.",
  ru:"Вставьте любой корень в فاعِل — получится тот, кто делает. Добавьте ة для женщины: طالِب → طالِبة.",
  words:[
   ["لاعِب","lāʿib","player","игрок","لعب","dr"],
   ["راكِب","rākib","passenger","пассажир","ركب","dr"],
   ["سائِق","sāʾiq","driver","водитель","سوق","dr"],
   ["بائِع","bāʾiʿ","seller","продавец","بيع","dr"],
   ["طالِبة","ṭāliba","student (f)","студентка","طلب","dr"]],
  phrases:[
   ["أَنا طالِبة","anā ṭāliba","I'm a student (f)","Я студентка"],
   ["هُوَ سائِقُ تاكسي","huwa sāʾiqu tāksī","He's a taxi driver","Он таксист"]]},

{ id:"s17", kind:"pattern", pat:"pl",
  t:["Where it happens: مَفعَل","Где это происходит: مَفعَل"],
  en:"مَـ + root = the place for it. Cook → kitchen, play → stadium, bake → bakery.",
  ru:"مَـ + корень = место для этого. Готовить → кухня, играть → стадион, печь → пекарня.",
  words:[
   ["مَطبَخ","maṭbakh","kitchen","кухня","طبخ","pl"],
   ["مَلعَب","malʿab","stadium, playground","стадион, площадка","لعب","pl"],
   ["مَخبَز","makhbaz","bakery","пекарня","خبز","pl"],
   ["مَسجِد","masjid","mosque","мечеть","سجد","pl"],
   ["مَنزِل","manzil","home","дом, жилище","نزل","pl"],
   ["قَريب","qarīb","near","близко","قرب","fy"]],
  phrases:[
   ["المَخبَزُ قَريب","al-makhbazu qarīb","The bakery is close","Пекарня рядом"],
   ["أَنا في المَطبَخ","anā fī l-maṭbakh","I'm in the kitchen","Я на кухне"]]},

{ id:"s18", kind:"theme",
  t:["Family","Семья"],
  en:"هَل turns a sentence into a yes/no question. أَفعال is a common plural: طِفل → أَطفال.",
  ru:"هَل превращает фразу в вопрос «да/нет». أَفعال — частое множественное число: طِفل → أَطفال.",
  words:[
   ["هَل","hal","(yes/no question)","ли (вопрос)","",""],
   ["عائِلة","ʿāʾila","family","семья","عيل",""],
   ["زَوج","zawj","husband","муж","زوج",""],
   ["زَوجة","zawja","wife","жена","زوج",""],
   ["جَدّ","jadd","grandfather","дедушка","",""],
   ["جَدّة","jadda","grandmother","бабушка","",""],
   ["طِفل","ṭifl","child","ребёнок","طفل",""],
   ["أَطفال","aṭfāl","children","дети","طفل","afl"],
   ["ناس","nās","people","люди","",""]],
  phrases:[
   ["هٰذِهِ عائِلَتي","hādhihi ʿāʾilatī","This is my family","Это моя семья"],
   ["هَل عِندَكَ أَطفال؟","hal ʿindaka aṭfāl?","Do you have children?","У тебя есть дети?"]]},

{ id:"s19", kind:"theme",
  t:["Getting around","В городе"],
  en:"Directions and transport. عَلى اليَمين = on the right.",
  ru:"Направления и транспорт. عَلى اليَمين = справа.",
  words:[
   ["شارِع","shāriʿ","street","улица","شرع","dr"],
   ["سَيّارة","sayyāra","car","машина","سير",""],
   ["باص","bāṣ","bus","автобус","",""],
   ["قِطار","qiṭār","train","поезд","قطر","fi"],
   ["مَحَطّة","maḥaṭṭa","station","станция","حطط","pl"],
   ["يَمين","yamīn","right","право","",""],
   ["يَسار","yasār","left","лево","",""],
   ["بَعيد","baʿīd","far","далеко","بعد","fy"]],
  phrases:[
   ["أَينَ المَحَطّة؟","ayna l-maḥaṭṭa?","Where is the station?","Где станция?"],
   ["عَلى اليَمين","ʿalā l-yamīn","On the right","Справа"],
   ["هَل هُوَ بَعيد؟","hal huwa baʿīd?","Is it far?","Это далеко?"]]},

{ id:"s20", kind:"theme",
  t:["Shopping","Покупки"],
  en:"بِـ means “with, for”: بِكَم = for how much?",
  ru:"بِـ значит «с, за»: بِكَم = за сколько?",
  words:[
   ["بِكَم","bikam","how much (price)?","сколько стоит?","",""],
   ["غالي","ghālī","expensive","дорогой","",""],
   ["رَخيص","rakhīṣ","cheap","дешёвый","رخص","fy"],
   ["نُقود","nuqūd","money","деньги","",""],
   ["جِدّاً","jiddan","very","очень","",""]],
  phrases:[
   ["بِكَم هٰذا؟","bikam hādhā?","How much is this?","Сколько это стоит?"],
   ["هٰذا غالي جِدّاً","hādhā ghālī jiddan","This is very expensive","Это очень дорого"],
   ["أُريدُ هٰذا","urīdu hādhā","I want this","Я хочу это"]]},

{ id:"s21", kind:"pattern", pat:"af",
  t:["More and most: أَفعَل","Больше и самый: أَفعَل"],
  en:"Put a root you know into أَفعَل: big → bigger. The same word also means “the biggest”.",
  ru:"Вставьте знакомый корень в أَفعَل: большой → больше. То же слово значит и «самый большой».",
  words:[
   ["أَكبَر","akbar","bigger","больше","كبر","af"],
   ["أَصغَر","aṣghar","smaller","меньше","صغر","af"],
   ["أَكثَر","akthar","more","больше (по количеству)","كثر","af"],
   ["أَجمَل","ajmal","more beautiful","красивее","جمل","af"],
   ["أَحسَن","aḥsan","better","лучше","حسن","af"]],
  phrases:[
   ["هٰذا أَحسَن","hādhā aḥsan","This is better","Так лучше"],
   ["أَكثَرَ قَليلاً","akthara qalīlan","A bit more","Чуть больше"]]},

{ id:"s22", kind:"grammar", root:"كتب",
  t:["I, you, he, we: the present","Я, ты, он, мы: настоящее время"],
  en:"One root, four people. The first letter tells who: أَ I, تَ you, يَ he, نَ we.",
  ru:"Один корень, четыре лица. Первая буква говорит, кто: أَ я, تَ ты, يَ он, نَ мы.",
  words:[
   ["أَكتُبُ","aktubu","I write","я пишу","كتب",""],
   ["تَكتُبُ","taktubu","you write","ты пишешь","كتب",""],
   ["يَكتُبُ","yaktubu","he writes","он пишет","كتب","yf"],
   ["نَكتُبُ","naktubu","we write","мы пишем","كتب",""],
   ["رِسالة","risāla","letter, message","письмо, сообщение","رسل",""]],
  phrases:[
   ["أَكتُبُ رِسالة","aktubu risāla","I'm writing a message","Я пишу сообщение"],
   ["ماذا تَكتُبُ؟","mādhā taktubu?","What are you writing?","Что ты пишешь?"]]},

{ id:"s23", kind:"theme",
  t:["How I feel","Как я себя чувствую"],
  en:"Feelings. For a woman add ة: سَعيد → سَعيدة.",
  ru:"Чувства. Для женщины добавьте ة: سَعيد → سَعيدة.",
  words:[
   ["بِخَير","bikhayr","fine, well","хорошо, в порядке","خير",""],
   ["سَعيد","saʿīd","happy","счастливый","سعد","fy"],
   ["مُتعَب","mutʿab","tired","уставший","تعب",""],
   ["جائِع","jāʾiʿ","hungry","голодный","جوع","dr"],
   ["عَطشان","ʿaṭshān","thirsty","хочет пить","",""],
   ["مَريض","marīḍ","sick","больной","مرض","fy"]],
  phrases:[
   ["أَنا بِخَير، شُكراً","anā bikhayr, shukran","I'm fine, thanks","Я в порядке, спасибо"],
   ["هَل أَنتِ مُتعَبة؟","hal anti mutʿaba?","Are you tired? (to a woman)","Ты устала?"]]},

{ id:"s24", kind:"theme",
  t:["Numbers 1–10","Числа 1–10"],
  en:"Arabic words for 1 to 10. Many end in ة.",
  ru:"Арабские слова для 1–10. Многие оканчиваются на ة.",
  words:[
   ["واحِد","wāḥid","one","один","",""],
   ["اِثنان","ithnān","two","два","",""],
   ["ثَلاثة","thalātha","three","три","",""],
   ["أَربَعة","arbaʿa","four","четыре","",""],
   ["خَمسة","khamsa","five","пять","",""],
   ["سِتّة","sitta","six","шесть","",""],
   ["سَبعة","sabʿa","seven","семь","",""],
   ["ثَمانية","thamāniya","eight","восемь","",""],
   ["تِسعة","tisʿa","nine","девять","",""],
   ["عَشَرة","ʿashara","ten","десять","",""]],
  phrases:[
   ["كَم عُمرُكَ؟","kam ʿumruka?","How old are you?","Сколько тебе лет?"]]},

{ id:"s25", kind:"theme",
  t:["Polite everyday phrases","Вежливые фразы на каждый день"],
  en:"The phrases you will hear and use most.",
  ru:"Фразы, которые вы будете слышать и говорить чаще всего.",
  words:[
   ["عَفواً","ʿafwan","you're welcome; excuse me","пожалуйста (в ответ); простите","عفو",""],
   ["آسِف","āsif","sorry","извините","",""]],
  phrases:[
   ["مِن فَضلِكَ","min faḍlika","Please (to a man)","Пожалуйста (мужчине)"],
   ["لا بَأس","lā baʾs","No problem","Ничего страшного"],
   ["مَعَ السَّلامة","maʿa s-salāma","Goodbye","До свидания"],
   ["أَهلاً وَسَهلاً","ahlan wa-sahlan","Welcome","Добро пожаловать"],
   ["إِن شاءَ الله","in shāʾa llāh","God willing; hopefully","Если Бог даст; надеюсь"]]}
]
};
