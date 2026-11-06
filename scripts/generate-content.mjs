import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { additionalScenarios } from './additional-scenarios.mjs'
import { additionalB1Scenarios } from './additional-scenarios-b1-300.mjs'
import { additionalB2Scenarios } from './additional-scenarios-b2-300.mjs'
import { additionalB1Scenarios600 } from './additional-scenarios-b1-600.mjs'
import { additionalB2Scenarios600 } from './additional-scenarios-b2-600.mjs'
import { additionalB1Scenarios1200 } from './additional-scenarios-b1-1200.mjs'
import { additionalB2Scenarios1200Part1 } from './additional-scenarios-b2-1200.mjs'
import { additionalB2Scenarios1200Part2 } from './additional-scenarios-b2-1200-part2.mjs'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const units = {
  B1: [
    ['festivals','節日'], ['transport','交通方式'], ['special-occasions','特別場合'], ['entertainment','娛樂'],
    ['music','音樂'], ['recent-experiences','近期個人經歷'], ['topic-discussion','自選主題討論'],
    ['examiner-comprehension','理解提問'], ['integrated-listening','綜合聆聽']
  ],
  B2: [
    ['education','教育'], ['customs','國家習俗'], ['village-city-life','鄉村與城市生活'], ['local-products','本地產品'],
    ['early-memories','童年回憶'], ['pollution-recycling','污染與回收'], ['topic-discussion','主題討論'],
    ['interactive-comprehension','互動階段理解'], ['integrated-listening','綜合聆聽']
  ]
}

const qtypes = ['single-choice','paraphrase','best-response','true-false-not-given','event-ordering','matching','inference','speaker-opinion']
const V = { A:'en-GB-SoniaNeural', B:'en-GB-RyanNeural', C:'en-GB-LibbyNeural' }
const q = (prompt, options, answer, explanation) => ({ prompt, options, answer, explanation })
const scenarios = [
  // B1 — 20 original scripts
  {l:'B1',u:0,t:'A rainy street festival',s:['Maya','Tom'],x:[
    'The street festival starts at eleven, but the forecast says heavy rain after two.',
    'Then let’s arrive early. I mainly want to see the lion dance at half past eleven.',
    'Good idea. We can have lunch at the community hall if the outdoor tables are wet.',
    'I’ll bring a light raincoat. The organisers say umbrellas block people’s view.'
  ],qs:[q('What does Tom most want to see?',['The lion dance','The food market','A fireworks show'],0,'Tom 明確說他主要想看十一時半的舞獅。'),q('Why will they arrive early?',['To avoid an afternoon downpour','To help set up tables','To buy cheaper tickets'],0,'預報下午二時後有大雨，所以他們決定早到。'),q('Which item is more suitable than an umbrella?',['A light raincoat','A picnic blanket','A large hat'],0,'主辦方表示雨傘會阻礙視線，因此 Tom 會帶輕便雨衣。')]},
  {l:'B1',u:0,t:'Lantern evening plans',s:['Nina','George'],x:[
    'Are you still coming to the lantern evening on Saturday?',
    'Yes, but I finish work at six. Does the parade begin straight away?',
    'No, the craft stalls open at five, and the parade leaves the library at seven fifteen.',
    'Perfect. I’ll meet you by the library steps at seven. I made my lantern from an old cereal box.'
  ],qs:[q('When will George meet Nina?',['At 7:00','At 6:00','At 7:15'],0,'George 說會在七時於圖書館梯級旁會合。'),q('What happens at 7:15?',['The parade leaves the library','The craft stalls open','George finishes work'],0,'Nina 說巡遊於七時十五分從圖書館出發。'),q('What is special about George’s lantern?',['It uses recycled packaging','It was bought at work','It has no light'],0,'燈籠由舊穀物早餐盒製成，屬重用物料。')]},
  {l:'B1',u:1,t:'The cheaper train',s:['Sam','Priya'],x:[
    'The direct train to Brighton is thirty-eight pounds. That’s more than I expected.',
    'There’s a slower one for twenty-four pounds, but we change at Hove.',
    'It only takes twenty minutes longer. I’d rather save the money for lunch.',
    'Agreed. Let’s take the 9:10 and sit near the doors so the change is easy.'
  ],qs:[q('Which train do they choose?',['The 9:10 slower train','The direct train','The evening train'],0,'他們同意乘搭 9:10、需要轉車但較便宜的班次。'),q('Why does Sam prefer it?',['To save money for lunch','To arrive before nine','To avoid Hove'],0,'Sam 寧願把省下的錢用於午餐。'),q('How much longer does it take?',['Twenty minutes','Thirty-eight minutes','Twenty-four minutes'],0,'對話直接指出只多花二十分鐘。')]},
  {l:'B1',u:1,t:'Cycling to the market',s:['Ellie','Ben'],x:[
    'Shall we cycle to the farmers’ market? The new riverside path is open.',
    'I’d like to, but my back tyre feels soft. The bus might be safer today.',
    'There’s a repair stand beside the park entrance. We could pump it up there.',
    'All right. If it still loses air, we’ll lock the bikes and catch the number twelve bus.'
  ],qs:[q('What problem does Ben have?',['A soft back tyre','A broken lock','A missing bus pass'],0,'Ben 說後輪胎氣不足。'),q('What will they try first?',['Use the repair stand','Catch the number twelve bus','Walk beside the river'],0,'他們先到公園入口旁的維修站打氣。'),q('When will they take the bus?',['If the tyre keeps losing air','If the market is busy','If the path is closed'],0,'若輪胎仍然漏氣，他們才鎖車轉乘巴士。')]},
  {l:'B1',u:2,t:'A surprise retirement tea',s:['Aisha','Luke'],x:[
    'We need to keep Mrs Evans in the office until four for her surprise tea.',
    'I can ask her to check my report at half past three. How long do you need?',
    'About twenty minutes. The cake is arriving at ten to four through the side door.',
    'Fine. I’ll bring her to the staff room when you send me a message.'
  ],qs:[q('Why will Luke ask about his report?',['To delay Mrs Evans','To improve it before lunch','To invite her outside'],0,'查報告只是讓 Mrs Evans 留在辦公室的安排。'),q('When is the cake due?',['3:50','3:30','4:20'],0,'ten to four 即下午三時五十分。'),q('What will Aisha do when ready?',['Message Luke','Call the baker','Open the main door'],0,'Aisha 準備好後會傳訊息給 Luke。')]},
  {l:'B1',u:2,t:'Birthday picnic change',s:['Ruby','Callum'],x:[
    'The park café rang. They can’t prepare our birthday picnic because their fridge has stopped working.',
    'That’s a shame. We could each bring something instead. I can make sandwiches.',
    'Great. I’ll bring fruit and ask Leila to bring drinks. We still have the picnic tables booked.',
    'Let’s text everyone tonight so nobody buys food at the café tomorrow.'
  ],qs:[q('Why can the café not prepare the picnic?',['Its fridge is broken','The tables are fully booked','The staff are at a party'],0,'咖啡店的雪櫃壞了，不能準備食物。'),q('What will Callum make?',['Sandwiches','Fruit salad','Drinks'],0,'Callum 主動提出製作三文治。'),q('Why will they text everyone tonight?',['To stop people buying café food','To cancel the birthday','To change the park'],0,'他們要及早告知大家自行帶食物。')]},
  {l:'B1',u:3,t:'Choosing a film',s:['Holly','Dan'],x:[
    'The comedy starts at eight, but it finishes after ten thirty. That’s late for a weekday.',
    'What about the nature documentary at seven? Reviews say the photography is excellent.',
    'I saw it last month. There’s also a mystery at quarter past seven.',
    'Let’s choose that. We’ll have time for the last bus home.'
  ],qs:[q('Which film do they choose?',['The mystery','The comedy','The documentary'],0,'他們最後決定看七時十五分的懸疑片。'),q('Why not choose the comedy?',['It finishes too late','Its reviews are poor','Dan has seen it'],0,'喜劇在平日晚上十時半後才完場，對他們太遲。'),q('What practical concern affects the choice?',['Catching the last bus','Finding cheap popcorn','Booking front seats'],0,'Dan 提到這樣有時間趕上尾班巴士。')]},
  {l:'B1',u:3,t:'Museum late opening',s:['Ivy','Noah'],x:[
    'The science museum stays open until nine on Fridays, and entry after six is half price.',
    'Brilliant. Is the space talk included in the ticket?',
    'Yes, but places are limited. We should reserve online before we go.',
    'I’ll book it now. Let’s meet inside because the forecast is cold.'
  ],qs:[q('What is cheaper after six?',['Museum entry','The space talk only','Online booking'],0,'星期五六時後入場費半價。'),q('What must they reserve?',['A place at the space talk','A table in the café','A coat locker'],0,'太空講座座位有限，需網上預留。'),q('Why meet inside?',['The weather will be cold','The entrance is hard to find','Noah will arrive late'],0,'Noah 因預報寒冷而建議在館內會面。')]},
  {l:'B1',u:4,t:'First guitar lesson',s:['Zoe','Martin'],x:[
    'How was your first guitar lesson?',
    'Better than I expected. I couldn’t change chords quickly, but the teacher was patient.',
    'Did you learn a whole song?',
    'Only the introduction. I’m practising ten minutes every morning instead of one long session at weekends.'
  ],qs:[q('What was difficult for Martin?',['Changing chords quickly','Reading the song title','Holding the guitar'],0,'Martin 說自己未能快速轉和弦。'),q('How much of the song did he learn?',['Only the introduction','The whole song','The final verse'],0,'他只學會歌曲的引子。'),q('What is his new practice plan?',['Ten minutes each morning','One hour every Saturday','Only during lessons'],0,'他會每天早上練十分鐘。')]},
  {l:'B1',u:4,t:'Community choir audition',s:['Owen','Fatima'],x:[
    'I’m thinking of joining the community choir, but the word “audition” makes me nervous.',
    'It isn’t a competition. The conductor only listens to find which group suits your voice.',
    'That sounds less frightening. Do I need to prepare a song?',
    'No. You’ll sing a few notes with the piano, then join Thursday’s rehearsal if you want.'
  ],qs:[q('Why does the conductor listen to new singers?',['To choose the right voice group','To select one competition winner','To record an album'],0,'試音目的是判斷聲部分組，並非比賽。'),q('Does Owen need to prepare a song?',['No','Yes, two songs','The conversation does not say'],0,'Fatima 明確回答不需要。'),q('What can Owen attend afterwards?',['Thursday’s rehearsal','A piano exam','A Saturday concert'],0,'完成簡單試音後可參加星期四排練。')]},
  {l:'B1',u:5,t:'A day at the coast',s:['Grace','Imran'],x:[
    'You went to Whitby yesterday, didn’t you?',
    'Yes. The morning was foggy, so we visited the abbey first instead of walking on the beach.',
    'Did the weather improve?',
    'By lunchtime it was sunny. We walked along the harbour, but the boat trips were cancelled because the sea was rough.'
  ],qs:[q('Where did Imran go first?',['The abbey','The beach','The harbour'],0,'因早上有霧，他們先參觀修道院。'),q('What improved by lunchtime?',['The weather','The sea conditions','The boat timetable'],0,'到午飯時天氣轉晴。'),q('Why were boat trips cancelled?',['The sea was rough','The harbour was closed','There were too few tourists'],0,'海面大浪令船程取消。')]},
  {l:'B1',u:5,t:'The cooking workshop',s:['Leo','Mei'],x:[
    'I tried a bread-making workshop on Sunday. My first loaf looked terrible.',
    'But did it taste all right?',
    'Surprisingly, yes. I added too much flour while shaping it, so it was rather heavy.',
    'Will you try again?',
    'Definitely. Next time I’ll leave the dough sticky and wait longer for it to rise.'
  ],qs:[q('What was wrong with Leo’s first loaf?',['It was heavy','It tasted terrible','It was too sticky'],0,'加了太多麵粉令麵包質地較重。'),q('How did it taste?',['Better than its appearance suggested','Exactly as bad as it looked','The conversation does not say'],0,'Leo 用 surprisingly 表示味道出乎意料地可以。'),q('What will he change next time?',['Use less flour and allow more rising time','Shape it for longer','Bake it on Saturday'],0,'他會保留麵糰黏性並等待更久發酵。')]},
  {l:'B1',u:6,t:'Talking about gardening',s:['Tutor','Sophie'],x:[
    'You chose balcony gardening as your topic. What attracted you to it?',
    'I wanted fresh herbs, but I only had a small outdoor space.',
    'What did you learn from your first attempt?',
    'That sunlight matters more than pot size. My mint grew well, but the tomatoes needed a brighter corner.'
  ],qs:[q('Why did Sophie begin balcony gardening?',['To grow fresh herbs','To win a local prize','To fill a large garden'],0,'她想種新鮮香草，且只有小型戶外空間。'),q('What mattered more than pot size?',['Sunlight','Plant labels','Water temperature'],0,'Sophie 明確說陽光比花盆大小更重要。'),q('Which plant needed a brighter place?',['Tomatoes','Mint','Herbs in general'],0,'番茄需要放在光線更充足的角落。')]},
  {l:'B1',u:6,t:'Photography as a hobby',s:['Tutor','Kieran'],x:[
    'Why do you prefer taking photographs early in the morning?',
    'The streets are quieter and the light is softer. I notice details that I miss later.',
    'Do you use an expensive camera?',
    'No, usually my phone. Planning where to stand makes a bigger difference than buying new equipment.'
  ],qs:[q('Why does Kieran photograph early?',['The streets are quieter and light softer','His phone only works then','Shops offer discounts'],0,'他指出早上街道較靜、光線較柔和。'),q('What camera does he usually use?',['His phone','An expensive studio camera','A borrowed film camera'],0,'他通常用手機拍攝。'),q('What does he consider most important?',['Choosing where to stand','Buying new equipment','Editing every photograph'],0,'他認為構圖位置比新器材影響更大。')]},
  {l:'B1',u:7,t:'Understanding a follow-up',s:['Examiner','Ana'],x:[
    'Tell me about a journey you enjoyed.',
    'I took a train through Wales last summer. The mountain views were beautiful.',
    'Had you expected the journey itself to be memorable?',
    'Not really. I chose the train because it was cheaper than flying, so the scenery was an unexpected bonus.'
  ],qs:[q('What is the examiner asking in the follow-up?',['Whether Ana thought the journey would be special','Whether Ana had visited Wales before','Why flying was beautiful'],0,'follow-up 查問她事前是否預期旅程本身令人難忘。'),q('Why did Ana originally choose the train?',['It was cheaper than flying','She wanted mountain views','The airport was closed'],0,'她原先因火車較便宜而選擇它。'),q('How did Ana feel about the scenery?',['Pleasantly surprised','Disappointed','Uninterested'],0,'unexpected bonus 表示意外驚喜。')]},
  {l:'B1',u:7,t:'Clarifying the question',s:['Examiner','Jay'],x:[
    'What sort of live entertainment is available where you live?',
    'Do you mean performances that I can attend in person?',
    'Yes, exactly.',
    'There is a small theatre and free music in the square during summer. The theatre is more varied, but the outdoor concerts feel friendlier.'
  ],qs:[q('Why does Jay ask a question?',['To check the meaning of “live entertainment”','To avoid giving an answer','To ask for a ticket'],0,'Jay 用反問確認 live entertainment 是否指現場演出。'),q('What is free in summer?',['Music in the square','Every theatre performance','Cinema tickets'],0,'廣場夏季有免費音樂演出。'),q('Which place offers more variety?',['The small theatre','The square','The conversation does not say'],0,'Jay 說劇院節目較多元。')]},
  {l:'B1',u:8,t:'Library announcement',s:['Announcer','Visitor'],x:[
    'Attention please. The second floor will close at four today while new shelves are installed.',
    'Excuse me, can I still return books after four?',
    'Yes. The ground-floor desk stays open until six. Computers will be available, but printing may be interrupted for about fifteen minutes.',
    'Thank you. I’ll print my form now, then return my books later.'
  ],qs:[q('Which area closes at four?',['The second floor','The ground-floor desk','The whole library'],0,'廣播只說二樓四時關閉。'),q('What may stop briefly?',['Printing','Book returns','Computer use'],0,'打印服務可能中斷約十五分鐘。'),q('What will the visitor do first?',['Print a form','Return books','Install shelves'],0,'訪客說先打印表格，稍後才還書。')]},
  {l:'B1',u:8,t:'Café order correction',s:['Server','Customer'],x:[
    'Here’s your chicken sandwich and black coffee.',
    'Sorry, I ordered the cheese sandwich. The coffee is right, though.',
    'My apologies. I’ll replace the sandwich. Would you like the salad without onions as requested?',
    'Yes, please. I’m not allergic; I just dislike raw onion.'
  ],qs:[q('What part of the order is wrong?',['The sandwich','The coffee','The salad dressing'],0,'客人點芝士三文治，但送來雞肉三文治。'),q('Which request is still correct?',['No onions in the salad','No coffee','Extra chicken'],0,'客人確認沙律不要洋蔥。'),q('Why does the customer avoid raw onion?',['Personal preference','An allergy','Medical advice'],0,'客人清楚說並非敏感，只是不喜歡。')]},
  {l:'B1',u:8,t:'Sports centre message',s:['Receptionist','Dylan'],x:[
    'Hello, this is Westfield Sports Centre. Tonight’s beginner swimming class has moved from the main pool to the training pool.',
    'Is it still at half past seven?',
    'Yes, but please arrive ten minutes early because the training pool entrance is behind the building.',
    'Thanks. I’ll allow extra time to find it.'
  ],qs:[q('What has changed?',['The pool used for the class','The class time','The skill level'],0,'課堂由主池移至訓練池。'),q('What time does the class begin?',['7:30','7:20','8:00'],0,'課堂仍於七時半開始；七時二十分是建議到達時間。'),q('Why should Dylan arrive early?',['The entrance is in a different place','He must pay again','The lesson is longer'],0,'訓練池入口在建築物後方，需預留尋找時間。')]},
  {l:'B1',u:8,t:'Changing a volunteer shift',s:['Coordinator','Amelia'],x:[
    'Could you help at the charity shop on Friday morning instead of Thursday afternoon?',
    'I have a dentist appointment at ten on Friday, but I could come from eleven thirty.',
    'That works. We mainly need help sorting donated books before the lunchtime delivery.',
    'I’ll come straight from the dentist and stay until two.'
  ],qs:[q('Why can Amelia not start early on Friday?',['She has a dentist appointment','She is working Thursday','She must collect books'],0,'她星期五十時要看牙醫。'),q('What task needs doing?',['Sorting donated books','Delivering lunch','Cleaning the dentist’s office'],0,'店舖需要人整理捐贈書籍。'),q('How long will Amelia stay?',['Until 2:00','Until 11:30','Until lunchtime only'],0,'她會由十一時半做到下午二時。')]},

  // B2 — 20 original scripts
  {l:'B2',u:0,t:'Rethinking homework',s:['Ms Cole','Mr Shah'],x:[
    'I’m considering replacing Friday worksheets with short research tasks. Pupils complete the sheets, but rarely discuss them afterwards.',
    'Research could be more engaging, although some families have limited internet access.',
    'True. We could let pupils choose between online research and interviewing someone at home.',
    'That keeps the purpose while making the task fairer. We should trial it with one class before changing the whole year group.'
  ],qs:[q('What weakness does Ms Cole see in worksheets?',['They do not lead to much discussion','They require internet access','They take a whole week'],0,'學生雖完成工作紙，之後卻很少討論。'),q('Why is an interview option suggested?',['To make access fairer','To assess speaking only','To reduce teacher marking'],0,'考慮到部分家庭上網受限，提供訪問選項較公平。'),q('What does Mr Shah recommend first?',['A trial with one class','Immediate change for all pupils','Cancelling Friday homework'],0,'他建議先在一班試行。')]},
  {l:'B2',u:0,t:'Choosing a college course',s:['Adviser','Rosa'],x:[
    'Your application mentions both graphic design and marketing. Which matters more to you?',
    'I enjoy design, but I also want to understand why campaigns succeed. The combined course seems practical, though it includes fewer studio hours.',
    'That trade-off is important. You could take the marketing course and join the design society.',
    'Perhaps, but I learn best through projects. I think the combined course fits that style, even if I practise drawing independently.'
  ],qs:[q('What is the disadvantage of the combined course?',['Fewer studio hours','No practical projects','No marketing content'],0,'Rosa 指出綜合課程的工作室時數較少。'),q('Why does Rosa still favour it?',['Its project-based approach suits her','It guarantees a job','It avoids independent practice'],0,'她表示自己透過項目學得最好。'),q('What is the adviser’s alternative?',['Study marketing and join a design society','Study drawing abroad','Leave college for work'],0,'顧問建議主修市場推廣並參加設計學會。')]},
  {l:'B2',u:1,t:'Guests and punctuality',s:['Harriet','Kenji'],x:[
    'When I first moved here, I arrived exactly on time for every dinner invitation and sometimes found the host still cooking.',
    'Where I grew up, arriving late can seem disrespectful, so I understand why you did that.',
    'Now I ask what people mean by “come around seven”. With close friends, it often means any time before half past.',
    'That’s sensible. Customs are useful guides, but asking prevents us from treating every household as identical.'
  ],qs:[q('What surprised Harriet at first?',['Hosts were sometimes not ready at the stated time','Guests always ate before seven','Dinner invitations were rare'],0,'她準時到達時，有時主人仍在煮食。'),q('What does “around seven” often mean among close friends?',['A flexible arrival before 7:30','Exactly 7:00','After 8:00'],0,'她說親友間通常指七時至七時半前。'),q('What broader view does Kenji express?',['Ask rather than assume every family follows one custom','Customs should never change','Punctuality is always disrespectful'],0,'Kenji 認為習俗只是指引，直接詢問可避免一概而論。')]},
  {l:'B2',u:1,t:'Sharing food at New Year',s:['Leah','Arun'],x:[
    'My neighbours invited me to their New Year meal and asked everyone to bring a dish connected with home.',
    'That sounds welcoming, but did choosing one feel difficult?',
    'Yes. My family has moved several times, so “home” is not a single place. I made my grandmother’s spiced bread but used local apples.',
    'Then the dish tells your actual story rather than pretending traditions never change.'
  ],qs:[q('Why was choosing a dish difficult for Leah?',['She associates home with several places','She cannot cook bread','Her neighbours dislike apples'],0,'她的家庭多次搬遷，「家」並非單一地方。'),q('How did Leah adapt the family recipe?',['She added local apples','She removed all spices','She bought it ready-made'],0,'她用本地蘋果配祖母的香料麵包食譜。'),q('How does Arun interpret the dish?',['As a truthful mix of experience and tradition','As a failed traditional recipe','As proof customs must stay unchanged'],0,'Arun 認為這道菜反映她真正的經歷，顯示傳統會演變。')]},
  {l:'B2',u:2,t:'Moving out of the city',s:['Ethan','Mariam'],x:[
    'Since moving to the village, I sleep better and know more of my neighbours. Still, I miss being able to walk to a late-night chemist.',
    'Could improved bus services solve that?',
    'Partly, but the last bus leaves at nine. A shared electric car scheme might help people who only need a car occasionally.',
    'It could, provided membership is affordable. Otherwise it would serve commuters like you while excluding older residents.'
  ],qs:[q('What city convenience does Ethan miss?',['A late-night chemist within walking distance','Knowing his neighbours','Quiet nights'],0,'他懷念可步行到深夜藥房。'),q('Why are buses only a partial solution?',['The last service is early','They are electric','They only serve older residents'],0,'尾班巴士九時開出，未能滿足較晚需要。'),q('What condition does Mariam place on car sharing?',['Membership must be affordable','Only commuters may join','Cars must replace all buses'],0,'她擔心價格太高會排除長者。')]},
  {l:'B2',u:2,t:'A quieter city centre',s:['Planner','Resident'],x:[
    'The council proposes removing through-traffic from Market Street and adding benches and trees.',
    'I support cleaner air, but shop owners worry customers will go elsewhere if parking disappears.',
    'The plan keeps short-stay spaces on side roads and increases the shuttle bus to every ten minutes.',
    'That helps, though the council should publish sales figures during the trial, not just traffic data.'
  ],qs:[q('What will be removed from Market Street?',['Through-traffic','All shops','Shuttle buses'],0,'計劃移除穿越 Market Street 的車流。'),q('How does the plan address parking concerns?',['It keeps short-stay spaces nearby','It builds an underground car park','It gives every shop a garage'],0,'附近支路會保留短時泊車位。'),q('What extra evidence does the resident want?',['Shop sales figures','Tree heights','Bus-driver interviews only'],0,'居民希望試行期間亦公布銷售數據。')]},
  {l:'B2',u:3,t:'The value of local wool',s:['Shopkeeper','Designer'],x:[
    'Customers like the idea of local wool, but some hesitate when they see the price.',
    'Small batches cost more to process. We could explain that the farmers are paid fairly and repairs are free for two years.',
    'A label would help, but I don’t want vague claims about sustainability.',
    'Then include the farm, mill and transport distance for each item. Specific facts are more convincing than a green symbol.'
  ],qs:[q('Why is the wool relatively expensive?',['It is processed in small batches','It travels very far','Repairs cost extra'],0,'小批量加工令成本較高。'),q('What concern does the shopkeeper have about labels?',['Environmental claims may be vague','Customers cannot read prices','Farm names are too long'],0,'店主不想使用含糊的可持續發展說法。'),q('What does the designer propose instead?',['Traceable, specific production facts','A green symbol alone','Removing all labels'],0,'設計師建議列明農場、工場和運輸距離。')]},
  {l:'B2',u:3,t:'Reviving an old biscuit',s:['Nadia','Oliver'],x:[
    'The bakery wants to bring back its oat biscuit from the 1950s, but the original recipe is extremely sweet.',
    'If we reduce the sugar, can we honestly call it the same product?',
    'Perhaps call it “inspired by” the original. We can keep the toasted-oat flavour and use less packaging.',
    'That respects the history without claiming perfect authenticity. Let’s invite older customers to taste the trial batch.'
  ],qs:[q('What problem is found in the original recipe?',['It contains too much sugar','It contains no oats','It cannot be baked'],0,'原食譜甜度極高。'),q('Why use the phrase “inspired by”?',['The recipe will be adapted','The bakery opened in the 1950s','Customers dislike history'],0,'產品保留特色但會減糖，不能聲稱完全相同。'),q('Who will be asked to taste the trial?',['Older customers','Only bakery staff','Packaging designers'],0,'Oliver 建議邀請年長顧客試食。')]},
  {l:'B2',u:4,t:'The red bicycle',s:['Saira','Jon'],x:[
    'My clearest early memory is riding a red bicycle in the courtyard, although my mother says the bicycle was blue.',
    'Perhaps you remember a photograph rather than the event itself.',
    'There is a photo, but it is black and white. I may have borrowed the red from my cousin’s bicycle years later.',
    'Memory often rebuilds a story from different pieces. That doesn’t make the feeling of independence unreal.'
  ],qs:[q('What detail is disputed?',['The bicycle’s colour','The location','Saira’s ability to ride'],0,'Saira 記得紅色，母親卻說是藍色。'),q('Why can the photograph not confirm the colour?',['It is black and white','It shows another child','It was taken years later'],0,'黑白相片不能證實顏色。'),q('What is Jon’s view of memory?',['It can combine details while preserving genuine feelings','It records every fact accurately','It is useless without photographs'],0,'他認為記憶會重組片段，但獨立感仍可真實。')]},
  {l:'B2',u:4,t:'Learning to swim',s:['Patrick','Elena'],x:[
    'I used to say I learned to swim during a seaside holiday, but my sister insists it happened at the council pool.',
    'Do you remember the water or what people told you later?',
    'Mostly the smell of chlorine and my father holding out a striped towel. That supports my sister, doesn’t it?',
    'Probably, although seaside pools also use chlorine. The towel may be a stronger clue if it appears in family photos from that period.'
  ],qs:[q('Where does Patrick’s sister say he learned?',['At the council pool','In the sea','At school'],0,'姐姐堅持事情發生在市營泳池。'),q('Which memory seems to support her account?',['The smell of chlorine','The seaside weather','A boat trip'],0,'氯氣味較符合泳池情境，但並非絕對證據。'),q('Why is Elena cautious?',['Seaside pools can also smell of chlorine','Patrick has no sister','Striped towels did not exist'],0,'Elena 指海邊泳池亦使用氯，因此不能單憑氣味確定。')]},
  {l:'B2',u:5,t:'Recycling confusion',s:['Councillor','Resident'],x:[
    'Our survey shows residents want to recycle, yet a quarter of collected material is contaminated.',
    'The labels differ between flats, street bins and the council website. Motivation isn’t the only issue.',
    'We’re designing one set of pictures for every location and adding feedback tags to rejected bins.',
    'Good. But tags should explain the mistake politely; otherwise people may feel blamed and give up.'
  ],qs:[q('What proportion of recycling is contaminated?',['One quarter','One half','Three quarters'],0,'調查顯示四分之一收集物受到污染。'),q('What cause does the resident identify?',['Inconsistent instructions','A lack of street bins','No interest in recycling'],0,'不同地點和網站的標籤不一致，造成混亂。'),q('Why should rejection tags be polite?',['Blame may discourage participation','Polite tags cost less','Only children read them'],0,'責備語氣可能令人放棄回收。')]},
  {l:'B2',u:5,t:'Traffic pollution near school',s:['Headteacher','Parent'],x:[
    'Air readings are highest during the morning drop-off, so we propose closing the road for forty minutes.',
    'That may shift cars to the next street rather than reduce them. Some parents drive because they continue to work outside town.',
    'We could create a drop-off point near the ring road and run a supervised walking group.',
    'I’d support a trial if the school measures surrounding streets as well as the gate.'
  ],qs:[q('When are pollution readings highest?',['During morning drop-off','At lunchtime','After evening clubs'],0,'校門早上接送時段錄得最高污染。'),q('What unintended effect worries the parent?',['Traffic moving to a nearby street','Children walking too quickly','The school closing permanently'],0,'封路可能只把車流轉移到下一條街。'),q('Under what condition will the parent support a trial?',['Monitor nearby streets too','Ban all working parents','Build a new school gate'],0,'家長要求同時監測周邊街道。')]},
  {l:'B2',u:6,t:'Remote work and community',s:['Interviewer','Beth'],x:[
    'You argue that remote work can strengthen small towns. Isn’t isolation a serious drawback?',
    'It can be. My point is not that everyone should stay home, but that fewer long commutes leave time for local activities.',
    'Only if workers use that time locally.',
    'Exactly. That’s why shared workspaces matter: they offer social contact and bring customers to nearby cafés without requiring a journey to the city.'
  ],qs:[q('What claim is Beth actually making?',['Reduced commuting can free time for local life','Everyone should work alone at home','Cities should ban offices'],0,'她並非主張人人留家，而是減少通勤可騰出社區時間。'),q('What limitation does the interviewer raise?',['Saved time may not benefit the town','Shared offices are illegal','Cafés dislike workers'],0,'只有當人們在本地使用所省時間，社區才受惠。'),q('Why does Beth favour shared workspaces?',['They combine social contact with local spending','They make commutes longer','They remove the need for cafés'],0,'共享工作間既減少孤立，也為附近商戶帶來顧客。')]},
  {l:'B2',u:6,t:'Should museums return objects?',s:['Tutor','Malik'],x:[
    'Your topic is the return of museum objects. Do you think every object should go back to its country of origin?',
    'A single rule would ignore how objects were acquired and what present communities want. Each case needs transparent evidence.',
    'Could long-term loans be a compromise?',
    'Sometimes, but calling a loan a solution can preserve unequal ownership. Museums should first speak with the communities concerned, not decide the compromise alone.'
  ],qs:[q('Why does Malik reject one universal rule?',['Cases have different histories and community wishes','Museums have no records','All objects were gifts'],0,'物件取得方式和當代社群意願各異。'),q('What concern does he have about long-term loans?',['They may leave unequal ownership unchanged','They are always too short','They prevent public display'],0,'借展可能看似解決，實際仍維持不平等擁有權。'),q('Who should be consulted first?',['The communities concerned','Only museum directors','Tourists at the entrance'],0,'他強調先與相關社群對話。')]},
  {l:'B2',u:7,t:'Responding to a challenge',s:['Examiner','Lina'],x:[
    'You say public transport should be free. Wouldn’t that be unfair to people who rarely use it?',
    'I understand the objection, but roads are also funded by people who do not drive. The wider benefit is less congestion and cleaner air.',
    'Are those benefits guaranteed?',
    'No. Free fares must be combined with frequent, reliable services; otherwise existing passengers benefit but few drivers change their habits.'
  ],qs:[q('What objection does the examiner raise?',['Non-users may subsidise the service','Buses are already too frequent','Drivers want cleaner air'],0,'提問質疑少用公共交通者亦需承擔費用是否公平。'),q('How does Lina respond initially?',['She compares it with shared road funding','She says benefits are guaranteed','She withdraws the proposal'],0,'她以非駕駛者也資助道路作類比。'),q('What condition is necessary to change drivers’ habits?',['Frequent and reliable service','Free fares alone','Higher parking availability'],0,'Lina 說免費車資必須配合頻密可靠班次。')]},
  {l:'B2',u:7,t:'Interpreting a hypothetical',s:['Examiner','Theo'],x:[
    'If your local market closed, how might the area change?',
    'At first, supermarkets would gain customers, but the social effect could be greater than the economic one.',
    'In what sense?',
    'The market is where new residents meet long-term neighbours. Without it, the area would lose an informal meeting place, even if another shop sold the same food.'
  ],qs:[q('What does “in what sense?” ask Theo to do?',['Explain the social effect','List supermarket prices','Predict the closing date'],0,'考官要求他具體解釋「社會影響較大」的意思。'),q('Who currently meet at the market?',['New and long-term residents','Only supermarket staff','Tourists and farmers only'],0,'市場讓新居民與長期街坊相遇。'),q('Why can another food shop not fully replace it?',['The market also serves as a meeting place','The food is unavailable elsewhere','The market has free parking'],0,'相同商品不能取代其非正式社交功能。')]},
  {l:'B2',u:8,t:'Delayed conference journey',s:['Manager','Delegate'],x:[
    'The 8:40 train is cancelled. The next direct service arrives after the first conference session begins.',
    'Could I take the 9:05 to Reading and change there?',
    'Yes, but the connection is only six minutes. If you miss it, you’ll arrive even later than on the direct train.',
    'Then I’ll take the direct service and join the opening session online from the train. Please tell the organiser I’ll be there for the workshop.'
  ],qs:[q('What risk comes with changing at Reading?',['The connection is very short','The ticket becomes invalid','The conference is cancelled'],0,'轉車只有六分鐘，錯過便更遲。'),q('Which journey does the delegate choose?',['The next direct service','The 9:05 with a change','A taxi to Reading'],0,'他決定乘下一班直達車。'),q('How will the delegate handle the opening session?',['Join online from the train','Skip the whole conference','Ask to move the workshop'],0,'他會在列車上網上參與開場環節。')]},
  {l:'B2',u:8,t:'Community grant decision',s:['Chair','Committee member'],x:[
    'We can fund either the youth theatre’s equipment or the garden group’s accessible paths, not both in full.',
    'The theatre could borrow lights from the college, whereas the paths cannot be created without materials.',
    'So give the garden the full amount and reject the theatre?',
    'Not necessarily. Fund the paths, then offer the theatre a smaller grant for transport to the college. That supports both aims, though not both original requests.'
  ],qs:[q('Why is the garden project harder to do without funding?',['It needs physical materials','It cannot borrow actors','It has no committee'],0,'無材料便不能興建無障礙通道。'),q('What does the committee member propose for the theatre?',['A smaller transport grant','The full equipment budget','No support at all'],0,'建議給較小款項，用於前往學院借燈的交通。'),q('What principle guides the proposal?',['Support both aims by adapting the requests','Always split money equally','Reject projects that borrow equipment'],0,'方案調整用途，使兩個目標均獲支援。')]},
  {l:'B2',u:8,t:'Radio interview correction',s:['Host','Dr Reed'],x:[
    'Your study proves that listening to music improves everyone’s concentration.',
    'I need to correct that. We found a small improvement among adults doing familiar tasks, not among every participant or every kind of work.',
    'So should offices play music?',
    'The study cannot answer that. Participants chose their own music and used headphones; a shared office playlist would be a different condition.'
  ],qs:[q('What does Dr Reed correct?',['The host has generalised the findings too far','The study involved no music','All participants were children'],0,'研究只在特定成人及熟悉任務中發現小幅改善，不能推廣至所有人。'),q('Which condition was used in the study?',['Participants chose music and wore headphones','Offices used one shared playlist','Participants performed only new tasks'],0,'參與者自行選歌並用耳機。'),q('Why can the study not justify office playlists?',['A shared playlist is a different condition','Music never affects concentration','Offices have no headphones'],0,'集體播放與實驗條件不同，不能直接推論。')]},
  {l:'B2',u:8,t:'Repair café instructions',s:['Organiser','Volunteer'],x:[
    'Before opening, test every donated appliance for electrical safety. A green label means it passed last month, but check the date rather than assuming it is current.',
    'What if an item fails but the fault looks simple?',
    'Move it to the red shelf and record the fault. Do not repair electrical items until Kamal, our qualified technician, arrives.',
    'Understood. I can examine torn clothing meanwhile because that station does not require him.'
  ],qs:[q('Why must volunteers check green-label dates?',['A previous test may no longer be current','Green labels indicate failure','Labels show repair prices'],0,'綠標只代表上月曾通過，仍需核對日期。'),q('What happens to a failed appliance first?',['It goes on the red shelf and is recorded','It is repaired immediately','It is returned without a note'],0,'失敗物品先移至紅架並記錄故障。'),q('Which work can the volunteer do before Kamal arrives?',['Examine torn clothing','Repair electrical appliances','Approve safety tests'],0,'衣物站不需要合資格電器技師。')]},
]

scenarios.push(
  ...additionalScenarios,
  ...additionalB1Scenarios,
  ...additionalB2Scenarios,
  ...additionalB1Scenarios600,
  ...additionalB2Scenarios600,
  ...additionalB1Scenarios1200.map(scenario => ({ ...scenario, pending: false })),
  ...additionalB2Scenarios1200Part1.map(scenario => ({ ...scenario, pending: false })),
  ...additionalB2Scenarios1200Part2.map(scenario => ({ ...scenario, pending: false })),
)
const counts = { B1: 0, B2: 0 }
const lessons = scenarios.map((r, idx) => {
  counts[r.l]++
  const lessonNo = String(counts[r.l]).padStart(2, '0')
  const [unit, unitZh] = units[r.l][r.u]
  const turns = r.x.map((text, i) => ({ speaker: r.s[i % r.s.length], voice: i % 2 ? V.B : V.A, text }))
  const questions = r.qs.map((item, qi) => {
    const offset = idx >= 40 ? (idx + qi) % item.options.length : 0
    const orderedOptions = [...item.options.slice(offset), ...item.options.slice(0, offset)]
    const answerIndex = (item.answer - offset + item.options.length) % item.options.length
    return {
      id: `${r.l.toLowerCase()}-${lessonNo}-q${qi + 1}`,
      type: item.type || qtypes[(idx * 3 + qi) % qtypes.length],
      prompt: item.prompt,
      options: orderedOptions.map((text, oi) => ({ id: String.fromCharCode(65 + oi), text })),
      answer: String.fromCharCode(65 + answerIndex),
      explanation_zh_hk: item.explanation
    }
  })
  return {
    level: r.l, unit, unit_zh_hk: unitZh, lesson_id: `${r.l.toLowerCase()}-${lessonNo}`,
    title: r.t, difficulty: r.l === 'B1' ? 2 + (idx % 2) : 4 + (idx % 2),
    skill_tags: r.l === 'B1' ? ['main-idea','detail','reason'] : ['inference','opinion','contrast','follow-up'],
    script: turns, questions,
    audio: r.pending ? { status:'pending', file:`audio/${r.l.toLowerCase()}-${lessonNo}.m4a`, format:'m4a', engine:'Kokoro-82M', engine_version:'v1.0', voice:'bf_isabella', accent:'British English', sample_rate_hz:24000, fallback:'SpeechSynthesis en-GB', model_license:'Apache-2.0' } : {
      status:'ready', file:`audio/${r.l.toLowerCase()}-${lessonNo}.m4a`, format:'m4a', engine:'Kokoro-82M',
      engine_version:'v1.0', voice:'bf_isabella', accent:'British English', sample_rate_hz:24000,
      fallback:'SpeechSynthesis en-GB', model_license:'Apache-2.0', generated:'2026-11-05'
    },
    rights: { licence:'CC BY-NC 4.0', author:'UK English Pass editorial corpus', original:true },
    review_status:r.pending ? 'pending' : 'editorially-reviewed', version:'2026.11-regenerated'
  }
})

const dataDir = path.join(root, 'src', 'data')
fs.mkdirSync(dataDir, { recursive: true })
fs.writeFileSync(path.join(dataDir, 'lessons.json'), JSON.stringify(lessons, null, 2) + '\n')

const csv = [['level','unit','lesson_id','question_id','type','prompt','answer','explanation_zh_hk'], ...lessons.flatMap(l => l.questions.map(x => [l.level,l.unit,l.lesson_id,x.id,x.type,x.prompt,x.answer,x.explanation_zh_hk]))]
  .map(row => row.map(v => `"${String(v).replaceAll('"','""')}"`).join(',')).join('\n')
fs.mkdirSync(path.join(root, 'exports'), { recursive: true })
fs.writeFileSync(path.join(root, 'exports', 'teacher-review.csv'), '\ufeff' + csv)
const md = lessons.map(l => `## ${l.lesson_id} · ${l.title}\n\n**${l.level} / ${l.unit_zh_hk}**\n\n${l.script.map(t => `- **${t.speaker}:** ${t.text}`).join('\n')}\n\n${l.questions.map((x,i)=>`${i+1}. ${x.prompt}\n   - ${x.options.map(o=>`${o.id}. ${o.text}`).join(' / ')}\n   - **答案：${x.answer}** — ${x.explanation_zh_hk}`).join('\n')}`).join('\n\n---\n\n')
fs.writeFileSync(path.join(root, 'exports', 'teacher-review.md'), `# UK English Pass 題庫教師審閱版\n\n> 2026.11 重新製作原創版本。\n\n${md}\n`)
console.log(`Generated ${lessons.length} lessons and ${lessons.reduce((n,l)=>n+l.questions.length,0)} questions.`)
