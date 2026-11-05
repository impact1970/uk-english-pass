// Original scripts reviewed for publication with locally generated audio.
const q = (prompt, correct, distractor1, distractor2, explanation, type = 'single-choice') => ({ prompt, options:[correct,distractor1,distractor2], answer:0, explanation, type })
const lesson = (l,u,t,s,x,qs) => ({l,u,t,s,x,qs,pending:false})
export const additionalScenarios = [
lesson('B1',0,'A festival stall',['Erin','Josh'],[
  'The spring festival needs volunteers on Sunday. Would you rather sell plants or welcome visitors?',
  'I know very little about plants, so welcoming people would suit me better.',
  'The welcome desk opens at ten, but volunteers should meet at nine thirty for instructions.',
  'I can do that. I will bring a water bottle because we will be outside.'
],[q('Which job does Josh prefer?','Welcoming visitors','Selling plants','Giving instructions','Josh 說自己較適合迎接訪客。'),q('When should volunteers meet?','At 9:30','At 10:00','At 10:30','義工須於九時半集合聽取指示。'),q('Why will Josh bring water?','He will work outdoors','The desk sells drinks','He is watering plants','他會在戶外工作，所以帶水。')]),
lesson('B1',1,'A missed bus',['Sara','Milo'],[
  'The number six has just left. The next one is in twenty minutes.',
  'Our appointment starts in half an hour. Could we walk to the clinic instead?',
  'Yes, it takes fifteen minutes, and the route through the park is shorter than the main road.',
  'Let’s walk through the park then. I will ring the clinic if we are delayed.'
],[q('How long is the wait for the next bus?','Twenty minutes','Fifteen minutes','Half an hour','下一班巴士要等二十分鐘。'),q('Which route do they choose?','Through the park','Along the main road','By the number six bus','他們決定步行穿過公園。'),q('When will Milo ring the clinic?','If they are delayed','Before leaving the bus stop','After the appointment','Milo 說若延誤便會致電診所。')]),
lesson('B1',2,'A leaving card',['Nora','Alex'],[
  'It is Peter’s last day on Thursday. Shall we get him a leaving card?',
  'Yes. I can buy one today, but I do not know everyone on his team.',
  'I will take it round the office tomorrow so people can write a message.',
  'Good. Let’s give it to him after lunch, before he leaves for his train.'
],[q('What will Alex buy?','A card','A train ticket','Lunch','Alex 主動買一張卡。'),q('When will Nora take it round?','Tomorrow','Next week','After Peter leaves','Nora 會在明天把卡拿給同事簽寫。'),q('When will Peter receive it?','After lunch','Before breakfast','On the train','他們打算午飯後、Peter 趕火車前送卡。')]),
lesson('B1',3,'A play at the hall',['Chloe','Arun'],[
  'The village play is on Friday and Saturday. Which evening are you free?',
  'Friday, although I cannot arrive before seven because of work.',
  'The doors open at seven and the play starts at seven thirty. Shall I reserve two seats?',
  'Please do. I will pay you back when we meet at the hall.'
],[q('Which evening suits Arun?','Friday','Saturday','Neither evening','Arun 星期五有空。'),q('When does the play begin?','At 7:30','At 7:00','Before 7:00','七時開門，七時半演出開始。'),q('What will Chloe reserve?','Two seats','A parking space','A table for dinner','Chloe 提議預留兩個座位。')]),
lesson('B1',4,'A music playlist',['Finn','Lara'],[
  'I am making a playlist for the school fair. Should every song be fast?',
  'A mixture would be better. Some people may want to sit and talk.',
  'Good point. I will ask the teachers to check the words before we play anything.',
  'I can suggest some quieter songs tonight, if that helps.'
],[q('What does Lara recommend?','A mixture of song speeds','Only fast songs','No music at the fair','Lara 建議快慢歌曲混合。'),q('Who will check the words?','The teachers','The visitors','The musicians','Finn 會請老師檢查歌詞。'),q('What will Lara suggest?','Quieter songs','A different venue','More teachers','Lara 會提供較安靜歌曲的建議。')]),
lesson('B1',5,'A first pottery class',['Mina','Jack'],[
  'How did your pottery class go?',
  'I made a bowl, but one side was thicker than the other.',
  'Will you take it home today?',
  'Not yet. It must dry and go in the kiln first. The teacher will email us when it is ready.'
],[q('What did Jack make?','A bowl','A plate','A cup','Jack 製作了一個碗。'),q('What was uneven?','The thickness of the sides','The colour of the clay','The temperature of the kiln','碗的一邊較厚。'),q('How will Jack know it is ready?','The teacher will email him','He must phone every day','Mina will collect it','老師會在作品準備好時發電郵。')]),
lesson('B1',6,'A favourite walk',['Tutor','Evie'],[
  'Tell me about a place you enjoy walking.',
  'I like the canal path near my flat. It is peaceful even though the road is close.',
  'Do you always walk alone?',
  'Usually, but on Saturdays my neighbour joins me and we stop for tea afterwards.'
],[q('Where does Evie enjoy walking?','Along the canal','Beside the beach','In a shopping centre','Evie 喜歡在寓所附近的運河小徑散步。'),q('How does she describe the path?','Peaceful','Crowded and noisy','Difficult to find','她形容小徑寧靜。'),q('Who joins her on Saturdays?','Her neighbour','Her tutor','Her brother','星期六，她的鄰居會同行。')]),
lesson('B1',7,'Asking for an example',['Examiner','Omar'],[
  'What makes a good celebration?',
  'For me, it is when everyone feels included, even if the event is small.',
  'Could you give me an example of that?',
  'At my cousin’s party, we chose games that both children and grandparents could enjoy.'
],[q('Which response best answers the examiner’s follow-up?','At my cousin’s party, we chose games for all ages.','The party is next Tuesday.','Could we change the subject?','考官要求舉例；描述適合各年齡人士的遊戲直接回應問題。','best-response'),q('What matters most to Omar?','Including everyone','Inviting a large crowd','Buying expensive decorations','他認為每個人都能參與最重要。','speaker-opinion'),q('Who could enjoy the games?','Both children and grandparents','Only children','Only the hosts','遊戲適合小孩和祖父母一起玩。')]),
lesson('B1',8,'A parcel collection',['Assistant','Customer'],[
  'Your parcel is ready to collect from the shop until Friday evening.',
  'I am working late. Can my sister collect it for me?',
  'Yes, if she brings the collection code and her own identification.',
  'That is helpful. I will send her the code now.'
],[q('When is the collection deadline?','Friday evening','Thursday morning','Saturday evening','包裹最遲可於星期五晚上領取。'),q('What must the sister bring?','The code and her identification','The customer’s bank card','A printed receipt only','代領者須帶領取碼及自己的身份證明。'),q('What will the customer do now?','Send the code to their sister','Visit the shop','Cancel the parcel','顧客會立即將領取碼傳給代領的家人。')]),
lesson('B1',0,'A shared celebration',['Beth','Yusuf'],[
  'For the neighbourhood celebration, shall we put the tables in the garden?',
  'Only if it stays dry. The hall is available as a backup.',
  'I will check the forecast on Friday and tell the guests where to go.',
  'I can put signs at both entrances so late arrivals can find us.'
],[q('What is the backup venue?','The hall','The library','A café','如天氣欠佳，會堂可作後備場地。'),q('When will Beth check the forecast?','On Friday','On the morning after the event','Next month','Beth 會於星期五查看天氣預報。'),q('Why will Yusuf put up signs?','To help late arrivals','To advertise a café','To reserve the garden','標示可幫助遲到的人找到場地。')]),
lesson('B1',1,'Booking a ferry',['Paula','Reece'],[
  'The ferry website offers a morning crossing and an afternoon crossing.',
  'The afternoon one is cheaper, but we would miss the guided walk on the island.',
  'Then the morning ticket is worth the extra cost. It includes a bicycle space too.',
  'Fine. I will book it after checking that the walk still has places.'
],[q('Why favour the morning crossing?','To attend the guided walk','Because it is cheaper','To avoid taking bicycles','下午渡輪雖較便宜，卻趕不上導賞步行。'),q('What is included in the morning ticket?','A bicycle space','A guided lunch','A hotel room','早上船票包括單車位置。'),q('What will Reece check before booking?','Places on the walk','The hotel menu','The ferry captain’s name','Reece 先確認導賞步行是否仍有名額。')]),
lesson('B1',5,'A new recipe',['Tara','Elliot'],[
  'I made the soup you recommended, but I used carrots instead of squash.',
  'Did it work?',
  'Yes, although I added too much pepper. A spoonful of yoghurt made it milder.',
  'I will remember that. I am making it for my family this weekend.'
],[q('What did Tara use instead of squash?','Carrots','Potatoes','Yoghurt','Tara 用紅蘿蔔代替南瓜。'),q('What made the soup milder?','Yoghurt','Extra pepper','More squash','加入乳酪令湯沒那麼辣。'),q('When will Elliot make the soup?','This weekend','Yesterday','Next month','Elliot 打算本週末煮給家人吃。')]),
lesson('B1',8,'A change at the library',['Librarian','Visitor'],[
  'The reading group normally meets upstairs, but the lift is being repaired today.',
  'Will the meeting be cancelled?',
  'No, it will be in the ground-floor room at two, as planned. Please use the garden entrance.',
  'Thank you. I will tell my friend, who is bringing the books.'
],[q('Why has the room changed?','The lift is being repaired','The books have not arrived','The garden is closed','升降機維修，因此更換房間。'),q('What remains unchanged?','The meeting time','The entrance','The room','聚會仍在原定兩時舉行。'),q('Which entrance should visitors use?','The garden entrance','The upstairs entrance','The car park entrance','館員指示使用花園入口。'),q('Who is bringing the books?','The visitor’s friend','The librarian','The repair worker','訪客的朋友會帶書。')]),
lesson('B2',0,'A practical assessment',['Lecturer','Student'],[
  'The department is considering replacing the final written exam with a group project.',
  'That could test collaboration, but individual contributions might be hard to distinguish.',
  'We could combine the project mark with a short individual reflection explaining each person’s decisions.',
  'That sounds fairer, provided the marking criteria are published before the project begins.'
],[q('What concern does the student raise?','Individual work may be difficult to identify','A reflection would replace the group project','Published criteria would prevent collaboration','學生擔心難以分辨個人貢獻。'),q('What would supplement the group mark?','An individual reflection','A separate written exam','An assessment by other groups','建議以個人反思補充小組成績。'),q('What condition does the student attach?','Publish criteria in advance','Let each group set its own criteria','Publish criteria after the project','學生要求事先公布評分準則。','speaker-opinion')]),
lesson('B2',1,'Welcoming guests',['Amina','Rob'],[
  'At my grandmother’s house, guests are offered tea before anyone discusses business.',
  'In my family we tend to get straight to the reason for the visit. Neither approach is necessarily unfriendly.',
  'Exactly. Problems arise when people assume their own custom is the only polite one.',
  'Perhaps a host can explain what to expect, especially when guests are unfamiliar with the routine.'
],[q('What happens first at Amina’s grandmother’s house?','Guests are offered tea','Business is discussed','Guests make their own meal','客人到訪時先獲奉茶。'),q('What do the speakers agree?','Different customs can both be polite','Direct discussion is always rude','Guests should never ask questions','兩人同意不同習慣都可以有禮貌。','speaker-opinion'),q('What does Rob suggest hosts do?','Explain unfamiliar routines','Expect guests to discover the routine','Replace family customs with formal rules','Rob 建議向不熟悉習慣的客人解釋安排。')]),
lesson('B2',2,'A village health service',['Councillor','Nurse'],[
  'The mobile clinic visits the village once a fortnight, but some appointments go unused.',
  'Residents told us the booking line is open only during working hours, when many cannot call.',
  'We could extend the phone hours and add an online form.',
  'Both would help, but please keep a telephone option for people who do not use the internet.'
],[q('What might explain the unused appointments?','Some residents face barriers to booking','The village has no demand for appointments','Online booking has already failed','部分居民在預約電話開放時未能致電，因此有空位不代表沒有人需要服務。','inference'),q('What booking problem did residents identify?','The phone line opens only during working hours','Appointments can only be booked in person','The clinic accepts only online bookings','電話預約只於工作時間開放，部分居民不方便致電。'),q('Why retain telephone booking?','Some people do not use the internet','Longer phone hours have been rejected','Online forms cannot handle appointments','護士提醒有些人不上網，應保留電話選項。')]),
lesson('B2',3,'A local cheese label',['Producer','Retailer'],[
  'Our cheese is made here, but the milk comes from farms across the county.',
  'Then a label saying “made in the village” is accurate, though customers might assume the milk comes from the village too.',
  'We could name the dairy and explain where the milk comes from on the same label.',
  'That gives shoppers useful detail without suggesting every ingredient comes from one place.'
],[q('Where does the milk come from?','Farms across the county','Only one village farm','Another country','牛奶來自郡內各農場。'),q('Why does the retailer favour a more detailed label?','An accurate statement can still give a misleading impression','County-wide sourcing makes the village claim false','Customers should choose only cheese made from village milk','「村內製造」雖然屬實，仍可能令人誤以為牛奶亦來自村內；補充來源可避免誤解。','inference'),q('What information will clarify the label?','The dairy and the milk’s origin','The farm name without the dairy','The dairy name without the milk’s origin','標籤會說明乳品廠及牛奶來源。')]),
lesson('B2',4,'A remembered classroom',['Molly','Hassan'],[
  'I remember our primary classroom as enormous, but I visited recently and it seemed quite small.',
  'You were much smaller then. Your memory of the space may be accurate from a child’s perspective.',
  'Possibly. The windows have changed too, so I cannot assume everything is exactly as it was.',
  'A photograph from that time might help, although it would show only one angle.'
],[q('What surprised Molly on her visit?','The classroom seemed smaller','The windows were unchanged','The classroom seemed larger','重訪時課室比她記憶中小。'),q('How does Hassan explain her memory?','A child experiences scale differently','The room must have been rebuilt','The changed windows explain everything','Hassan 認為孩童體型較小，感受空間大小的角度不同。'),q('What limit does Hassan mention about a photograph?','It shows only one angle','It would show only the new windows','It could confirm the room’s exact dimensions','一張相片只顯示單一角度。')]),
lesson('B2',5,'Reducing food waste',['Manager','Cook'],[
  'We throw away more prepared sandwiches on Mondays than on any other day.',
  'Monday sales vary because nearby offices have different attendance patterns each week.',
  'Instead of a fixed quantity, let us prepare a smaller first batch and make more if demand rises.',
  'That could reduce waste, provided we monitor whether customers have to wait too long.'
],[q('Why is a fixed Monday quantity problematic?','Office attendance makes demand vary','Monday demand is always higher than expected','Office workers no longer buy sandwiches','附近辦公室每星期的出勤情況不同，令星期一銷量不穩定，固定製作數量容易造成浪費。','inference'),q('What production change is proposed?','Make a smaller batch first','Prepare the same larger batch every Monday','Prepare all Monday sandwiches on Sunday','建議先做較少數量，有需求再增加。'),q('What should be monitored during the change?','Customer waiting time','Office attendance on Fridays','Demand for a wider menu','廚師提醒須留意顧客會否等太久。')]),
lesson('B2',6,'Sharing public space',['Tutor','Grace'],[
  'You propose more seating in the town square. How would you answer people who fear it will obstruct events?',
  'The seats need not be permanent. Movable benches could be rearranged when a market or performance takes place.',
  'Would movable furniture create any difficulties?',
  'Storage and maintenance would cost money, so the council should test a few benches before buying a full set.'
],[q('How does Grace address the concern about events?','Use movable benches','Keep permanent benches around each stall','Move every event to another venue','可移動長椅能在活動時重新安排。'),q('What drawback does Grace acknowledge?','Storage and maintenance cost money','Movable benches require permanent foundations','Events would have to stop during the trial','她承認儲存及維修需要費用。'),q('What does her proposed trial suggest?','She wants to assess practical costs before committing','She has abandoned the seating proposal','She believes a full set would cost nothing','她建議先試用少量長椅，反映她希望了解實際儲存及維修需要，再決定是否全面購置。','inference')]),
lesson('B2',7,'Qualifying an opinion',['Examiner','Dev'],[
  'You said technology makes people less sociable. Do you think that is always true?',
  'No, I should qualify that. Video calls help my family stay in touch across countries.',
  'Then what concerns you?',
  'When people check their phones throughout a meal, those present may feel ignored. The effect depends on how technology is used.'
],[q('How does Dev revise his original claim?','It is not always true','It applies to video calls in particular','It is true whenever families live apart','Dev 收窄原先的說法，承認並非總是如此。','paraphrase'),q('What benefit does he mention?','Video calls connect distant family','Phones improve conversation at every meal','Technology prevents families from moving apart','視像通話幫助身處不同國家的家人保持聯繫。'),q('What determines the effect in Dev’s view?','How technology is used','Whether contact happens face to face','How far apart people live','他認為影響取決於使用方式。','speaker-opinion')]),
lesson('B2',8,'A workshop waiting list',['Organiser','Attendee'],[
  'The Saturday repair workshop is full, but we have a waiting list in case anyone cancels.',
  'I can only attend in the morning. Would being on the list commit me to the whole day?',
  'No. We will contact you if a place opens, and you can decide then. The morning session covers bicycles.',
  'Please add me. If no place becomes available, I will use the online guide instead.'
],[q('Why is there a waiting list?','The workshop is full','The online guide is unavailable','The morning session is cancelled','工作坊已滿，候補名單用於有人取消時。'),q('What does joining the waiting list involve?','An opportunity to accept a place later','A commitment to attend the whole day','A guaranteed place in the morning session','候補名單只提供日後接受空位的機會，並不保證有位，也不要求參加全日。','paraphrase'),q('What is the attendee’s alternative?','Use the online guide','Attend on Sunday','Book the afternoon session','若沒有空位，參加者會使用網上指南。')]),
lesson('B2',0,'Feedback after a presentation',['Tutor','Student'],[
  'Your presentation was well researched, but the audience struggled to follow the final section.',
  'I added several statistics at the last minute. Was the slide too crowded?',
  'Partly. More importantly, you did not explain how the figures supported your conclusion.',
  'I will select fewer figures and make that connection explicit when I revise it.'
],[q('What did the audience struggle with?','The final section','The introduction only','The research topic itself','聽眾難以跟上最後部分。'),q('What was the main issue with the figures?','Their link to the conclusion was unexplained','They were all incorrect','There were no figures','導師最關注數據與結論的關係沒有解釋。'),q('How will the student revise?','Use fewer figures and explain their relevance','Add every available statistic','Remove the conclusion','學生會精選數據並說明其關聯。')]),
lesson('B2',1,'A gift for a host',['Lena','Harish'],[
  'Your aunt has invited me to dinner and I thought I would bring flowers. Is that appropriate?',
  'Usually, but my aunt is allergic to strong scents. Something edible might be easier.',
  'I could bring biscuits, though I should ask whether anyone has dietary restrictions.',
  'That is considerate. Asking beforehand is more useful than guessing what a host expects.'
],[q('Why might flowers be unsuitable?','The host has a scent allergy','The host has a dietary restriction','The host expects guests to bring biscuits','女主人對濃烈香味敏感。'),q('What will Lena check about biscuits?','Dietary restrictions','Whether every guest prefers sweet gifts','Whether the host expects expensive brands','Lena 會先詢問有沒有飲食限制。'),q('What principle does Harish favour?','Ask instead of guessing','Bring the same gift to every host','Assume edible gifts are always suitable','Harish 認為預先詢問比猜測更周到。','speaker-opinion')]),
lesson('B2',5,'A refill scheme',['Owner','Customer'],[
  'We are introducing refill containers for cleaning liquid. Customers pay a deposit for the bottle.',
  'Does that mean I must return it to this branch?',
  'Any of our branches will accept it. The deposit is returned even if you decide not to refill.',
  'That makes the scheme more flexible. Clear signs would help people understand the deposit is refundable.'
],[q('Where can the bottle be returned?','At any branch','Only at this branch','At any supermarket','任何一間該店分店都接受退瓶。'),q('What does the owner clarify about the deposit?','A refill purchase is not required for a refund','It can be refunded only at the original branch','It can only be used as credit for another refill','退瓶時即使不再補充清潔液，按金仍會退還。','paraphrase'),q('Why does the customer want clear signs?','To explain that the deposit is refundable','To explain why returns are branch-specific','To encourage customers to buy another bottle','清晰標示可讓顧客知道按金可退。')]),
lesson('B2',8,'A survey result',['Researcher','Presenter'],[
  'Our survey found that sixty per cent of respondents supported the proposed cycle lane.',
  'Can I say sixty per cent of all residents support it?',
  'Not safely. The survey was voluntary and may not represent residents who did not respond.',
  'I will report the figure as a share of respondents and mention that limitation. We can gather further evidence before the decision.'
],[q('Who made up the sixty per cent?','Survey respondents','All residents','All cyclists in the country','百分之六十的基數是調查回應者。'),q('Why should the result not be generalised automatically?','Voluntary respondents may not represent everyone','Sixty per cent is too small a majority to report','Only surveys with unanimous answers are useful','自願回應者可能不能代表所有居民。'),q('How will the presenter describe the figure?','As a share of respondents','As a proven share of all residents','As a share of all local cyclists','發表者會清楚指出比例來自回應者。'),q('What can they do before the decision?','Gather further evidence','Treat the survey as a binding vote','Assume non-respondents oppose the proposal','他們可在決定前收集更多證據。')])
]
