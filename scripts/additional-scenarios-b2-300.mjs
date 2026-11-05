// Original B2 conversations, editorially reviewed; audio publication remains pending.
const q = (prompt, correct, d1, d2, explanation, type = 'single-choice') => ({prompt, options:[correct,d1,d2], answer:0, explanation, type})
const lesson = (u,t,s,x,qs) => ({l:'B2',u,t,s,x,qs,pending:false})

export const additionalB2Scenarios = [
lesson(0,'Notes before the seminar',['Ruth','Khalid'],[
  'I copied almost every sentence from the reading, but I still cannot explain its argument.',
  'Perhaps try writing the author’s claim in one sentence, then note the evidence separately.',
  'Would that mean leaving out the examples?',
  'Not necessarily. Keep one that illustrates the reasoning, rather than listing them all.',
  'I will try that before the seminar and see whether I can explain it without looking.',
  'And if you get stuck, mark the gap rather than copying more sentences. That will give you a specific question to raise in the discussion.'
],[q('What difficulty does Ruth describe?','She cannot explain the argument despite extensive notes','She understands the argument but cannot locate supporting examples','She has summarised the argument but disagrees with it','Ruth 雖然抄了很多筆記，仍無法解釋文章論點。'),q('How does Khalid suggest organising the notes?','Separate the main claim from its evidence','Keep every example in the order it appears','Replace the author’s claim with a personal opinion','Khalid 建議分開記錄主要論點和證據，而非逐句抄寫。','paraphrase'),q('What does Khalid’s final advice imply about gaps in understanding?','They can guide useful seminar questions','They should be hidden by adding longer quotations','They show that the reading should be abandoned','Khalid 建議標記卡住的位置，再在討論中提問；不理解之處可幫助找出值得問的問題。','inference')]),
lesson(0,'A group project timetable',['Maya','Lewis'],[
  'Our group wants to divide the report into four independent pieces.',
  'That could save time, but the sections may repeat one another.',
  'Shall we agree on an outline first and assign someone to check the whole draft?',
  'Yes. We should also exchange drafts early enough to make changes.',
  'I will suggest a shared deadline a week before submission.',
  'That should help, as long as checking the whole draft is a shared responsibility. One editor cannot resolve contradictions without the section writers explaining their evidence.'
],[q('What risk does Lewis identify?','The sections may overlap','The report will have too few authors','The submission date will change','Lewis 擔心各部分內容可能重複。'),q('What does Maya propose before dividing the work?','Agreeing on an outline','Submitting four separate reports','Waiting until the deadline','Maya 建議先訂好大綱。'),q('What is the purpose of the earlier deadline?','To leave time for review and changes','To replace the official deadline','To prevent anyone reading another section','提早交草稿能預留互相檢視和修改的時間。','inference')]),
lesson(0,'Choosing an optional module',['Imogen','Tutor'],[
  'I enjoy history, but I am considering the data module because it might help my dissertation.',
  'Have you looked at how it is assessed?',
  'Yes, there is a practical project rather than a final examination, which appeals to me.',
  'Then speak to last year’s students about the workload before deciding.',
  'Good idea. Enjoyment and usefulness both matter, but I need a realistic picture of the time involved.',
  'Exactly. A module can be valuable without being the right choice this term, especially while you are planning your dissertation research.'
],[q('Why is Imogen considering data?','It may support her dissertation','It covers the same material as her history module','It requires less work than every other module','Imogen 認為數據科目可能有助撰寫論文；對話沒有說它最輕鬆。'),q('What appeals to her about assessment?','A practical project replaces a final examination','The project is optional rather than assessed','Students choose between a project and an examination','她喜歡以實作項目取代期末考試的安排，並非可自行選擇兩者。'),q('What is the tutor’s overall position?','Usefulness should be weighed against current commitments','A useful module is always worth taking immediately','Enjoyment matters more than any practical consideration','導師肯定科目的價值，但提醒她考慮本學期的時間和論文研究安排。','speaker-opinion')]),
lesson(0,'Revising with a partner',['Nadia','Elliot'],[
  'We spent yesterday testing each other on definitions, but I still struggle to apply them.',
  'Then let us invent examples and explain which concept fits each one.',
  'What if we choose different concepts for the same example?',
  'That is useful: we can compare our reasons and check the course notes.',
  'I like that better than simply repeating the correct definition.',
  'We should still check the definitions when necessary. The aim is to use them accurately, not to treat every interpretation as equally convincing.'
],[q('What does Nadia still find difficult?','Applying definitions','Remembering the examination room','Reading the course notes','Nadia 仍然難以運用定義。'),q('What will the pair do if they disagree?','Compare reasons and consult their notes','Discard the example immediately','Assume both answers must be wrong','他們會比較理由，並查閱課程筆記。'),q('What does Elliot regard disagreement as?','A chance to examine their reasoning','Proof that revision together is pointless','A reason to memorise without examples','Elliot 認為分歧有助檢視推理。','speaker-opinion')]),
lesson(0,'A lecture recording',['Lecturer','Student'],[
  'The lecture recording will be available tomorrow, although the discussion was not recorded.',
  'I missed the class. Could I rely on the recording for everything?',
  'It covers the slides, but classmates raised useful objections afterwards.',
  'I will ask someone for their notes on that discussion.',
  'Please do, and bring any remaining questions to my office hour.',
  'So the recording gives me a starting point, but I should combine it with the discussion notes before deciding what I still need to ask.'
],[q('What is missing from the recording?','The subsequent discussion','The presentation of the slides','The lecturer’s explanation of the slides','錄影沒有包含課後討論；它仍涵蓋投影片內容。'),q('Why does the lecturer mention objections?','They contributed useful material beyond the recording','They showed that the slides had been recorded incorrectly','They replaced the need to study the slides','同學提出的反對意見提供了錄影以外的有用內容。'),q('What conclusion does the student reach about catching up?','Several sources should be combined before seeking clarification','The recording makes classmates’ notes unnecessary','The office hour should replace reviewing the material','學生認為應先結合錄影與討論筆記，再確定仍有甚麼疑問。','inference')]),
lesson(0,'Feedback on an essay',['Aisha','Ben'],[
  'My feedback says my essay describes the sources well but needs more analysis.',
  'Did you explain how the authors’ views relate to your own question?',
  'Not much. I mostly summarised each author in a separate paragraph.',
  'Perhaps compare their claims and explain which evidence is more convincing and why.',
  'That gives me a clearer direction for the next draft.',
  'You may not need more sources. Using the ones you already have to support a clear judgement could be more effective than adding another descriptive paragraph.'
],[q('What does the feedback say is missing?','More analysis','A list of sources','A description of the topic','評語指出文章需要更多分析。'),q('How did Aisha organise the essay?','She summarised authors separately','She compared all authors in one table','She used no sources','Aisha 主要逐段概述不同作者。'),q('What would Ben add?','A reasoned comparison of claims and evidence','More unrelated summaries','An unsupported personal preference','Ben 建議比較觀點及證據，並解釋判斷理由。')]),
lesson(1,'Taking shoes off',['Hana','Tom'],[
  'I am visiting Mei’s family for the first time. Should I take my shoes off at the door?',
  'Their household usually does, although customs differ even within the same community.',
  'I will look for a clue when I arrive and ask if I am unsure.',
  'That makes sense. They may offer slippers, but you do not need to assume they will.',
  'I will wear presentable socks just in case.',
  'And remember that asking politely gives them a chance to explain their own preference. A general guide to customs cannot tell you what every family expects.'
],[q('What does Tom say about the practice?','It varies between households','It is identical in every household','Mei’s family never follows it','Tom 指即使同一社群，不同家庭的做法也可能不同。'),q('What will Hana do if uncertain?','Ask the hosts','Keep her shoes on without checking','Leave immediately','Hana 說不肯定時會詢問主人家。'),q('Why will she choose presentable socks?','She may need to remove her shoes','The hosts require matching socks','She plans to give them as a gift','她可能需要脫鞋，所以會穿得體的襪子。','inference')]),
lesson(1,'A celebration invitation',['Farah','Jon'],[
  'My neighbour invited me to a celebration, but I have never attended one like it.',
  'You could ask whether there is a dress code or anything guests usually bring.',
  'Would asking sound rude?',
  'I think showing interest is better than pretending you already know. People’s preferences differ.',
  'I will thank her for inviting me and ask what would be helpful.',
  'You could mention that you are unfamiliar with the occasion. That explains the question without suggesting that she has to speak for a whole community.'
],[q('What is Farah unsure about?','What is appropriate at the celebration','Whether her neighbour invited her','Where she bought her clothes','Farah 不熟悉這類慶祝活動的習慣。'),q('What does Jon suggest asking?','About clothing and anything guests might bring','How much every guest earns','Whether the celebration can be cancelled','Jon 建議詢問衣著要求及應否帶東西。'),q('What principle underlies Jon’s advice?','Respectful questions are preferable to assumptions','Every celebration follows identical rules','Guests should never ask hosts for guidance','Jon 認為有禮地詢問比假裝知道更好。','speaker-opinion')]),
lesson(1,'Sharing a meal',['Priya','Oscar'],[
  'At our family meals, dishes are usually placed in the middle for everyone to share.',
  'I was about to serve myself a large portion straight away.',
  'You can always take more later; leaving enough for others is appreciated.',
  'Thanks for explaining. Is it all right to ask what is in a dish?',
  'Of course, especially if you need to avoid an ingredient.',
  'That is reassuring. I had mistaken taking a generous portion for showing appreciation, but here I can show it by leaving others a fair share.'
],[q('How are dishes generally served?','In the middle for sharing','As individual portions chosen by the host','As a separate course for each guest','食物通常放在中央供大家分享。'),q('Why does Priya suggest a modest first helping?','Others should have enough too','Second helpings are not permitted','The host expects guests to eat very little','先取適量可讓其他人也有足夠食物；她明確說可以稍後再取。'),q('What does Oscar reconsider?','How to express appreciation appropriately at this meal','Whether asking about ingredients is ever acceptable','Whether shared meals prevent people eating enough','Oscar 原以為多取食物是欣賞，但得知在這個場合留足份量給別人也能表達尊重。','inference')]),
lesson(1,'A greeting at work',['Zara','Colin'],[
  'I am meeting our new colleague tomorrow and wondered whether to offer a handshake.',
  'You could greet them verbally first and follow their lead.',
  'I do not want to make them uncomfortable by guessing.',
  'Exactly. People have different personal preferences, even when they share a background.',
  'I will introduce myself and give them space to choose.',
  'That should work. Being welcoming is about making the other person comfortable, rather than demonstrating that you know a rule you believe applies to their background.'
],[q('What does Colin suggest first?','A verbal greeting','Offering a handshake before speaking','Waiting for someone else to introduce Zara','Colin 建議先用說話打招呼，再按對方反應行事。'),q('Why should Zara avoid assumptions?','Individuals can have different preferences','A shared background determines everyone’s preference','A verbal greeting is compulsory in every workplace','即使背景相同，個人對打招呼方式的喜好仍可不同。'),q('What does Colin regard as the priority?','Helping the new colleague feel comfortable','Showing knowledge of a presumed cultural rule','Ensuring every colleague greets people identically','Colin 強調應令對方自在，而非套用自己以為適用於某背景的規則。','speaker-opinion')]),
lesson(1,'Arriving for dinner',['Lucy','Mateo'],[
  'The invitation says seven. Should we arrive earlier to help?',
  'The host told me she will still be preparing then, so seven would be better.',
  'If the train is late, I will send her a message.',
  'Good. Expectations about timing vary, but her preference is clear here.',
  'Then we can offer to help once we arrive rather than turning up early.',
  'Yes. Help is only helpful if it fits what she needs. Arriving before she is ready might give her another person to look after while she is cooking.'
],[q('Why should they avoid arriving early?','The host will still be preparing','The train only runs after seven','Dinner has been moved to another day','主人家在七時前仍在準備。'),q('What will Lucy do if delayed?','Message the host','Cancel without telling anyone','Ask Mateo to change the invitation','Lucy 若遲到會通知主人家。'),q('What guides their decision about arrival?','This host’s stated preference','A rule that applies to every dinner','The guests’ wish to avoid helping','他們按這位主人家表明的意願決定時間。','inference')]),
lesson(1,'Thanking a volunteer',['Chair','Volunteer'],[
  'We would like to thank you publicly at the community event.',
  'That is kind, but I would rather not go on stage.',
  'Would a note in the programme be comfortable, or would you prefer no mention?',
  'A short note is fine. I am happy to help, just not keen on a public speech.',
  'We will respect that and check the wording with you first.',
  'Thank you. I would also like the note to mention the whole team, since the project depended on many people whose work was less visible.'
],[q('What does the volunteer decline?','Going on stage','Being mentioned in the programme','Continuing to volunteer','義工不想上台，但接受簡短的書面鳴謝。'),q('Which alternative does the volunteer accept?','A short programme note','A short speech delivered by the volunteer','A programme entry written without consultation','義工接受場刊上的簡短鳴謝，主席亦答應先確認措辭。'),q('What does the volunteer’s final request suggest?','Recognition should reflect the collective effort','Only people seen at the event deserve credit','The chair should receive all the credit','義工要求同時提及整個團隊，因為項目依靠多人，包括較少曝光的成員。','inference')]),
lesson(2,'A village bus proposal',['Resident','Councillor'],[
  'The village bus runs only twice a day, which makes appointments difficult.',
  'A full hourly service may be too expensive for the number of passengers.',
  'Could we try an extra journey on market day and record how many people use it?',
  'That would give us evidence, provided the timetable lets people reach their clinic appointments.',
  'I will ask the operator for costs and possible connection times.',
  'Please do. Counting passengers would be useful, but we should also ask whether the trial lets people complete their appointments and get home on the same day.'
],[q('What problem does the resident raise?','The bus runs too infrequently','The bus route avoids the village entirely','The clinic has stopped offering appointments','居民指出巴士每天只有兩班，令赴約不便。'),q('What trial is proposed?','One extra market-day journey','An hourly service throughout the week','A replacement for every existing journey','居民建議在墟日加開一班作試行，並非立即開辦全週每小時一班。'),q('How does the councillor suggest judging the trial?','Consider useful return journeys as well as passenger numbers','Treat passenger numbers as the only relevant evidence','Judge it solely by the operator’s quoted price','議員除了要求點算乘客，也關注居民能否完成診症並即日回家，因此要衡量實際用途。','inference')]),
lesson(2,'A quiet street plan',['Amira','Joel'],[
  'The council proposes closing our street to through traffic during school hours.',
  'I like the idea of safer crossings, but deliveries still need access.',
  'The draft allows access for residents and delivery vehicles.',
  'Then I would support a trial, provided neighbouring streets are monitored too.',
  'Yes, shifting congestion elsewhere would not solve the problem.',
  'We should compare traffic counts before and during the trial, then adjust the hours or access arrangements if the evidence shows new problems on those streets.'
],[q('What benefit does Joel see?','Safer crossings','Faster through traffic','More parking for every visitor','Joel 認為過路會更安全。'),q('Who retains access under the draft?','Residents and delivery vehicles','All through traffic','Only school staff','草案容許居民及送貨車輛進出。'),q('Why monitor neighbouring streets?','Traffic might simply move there','They are already closed permanently','The school plans to relocate','鄰近街道可能承受轉移的車流。','inference')]),
lesson(2,'A shared village hall',['Caretaker','Resident'],[
  'The hall is empty most weekday mornings, but its heating is expensive.',
  'Could local groups share one morning instead of opening it for separate sessions?',
  'Possibly, if they agree on noise and storage arrangements.',
  'I will speak to the craft group and the language class about a joint timetable.',
  'If both agree, we can estimate whether sharing actually saves money.',
  'And ask whether the arrangement still suits their activities. A cheaper timetable would be little use if either group could no longer run its sessions properly.'
],[q('What expense concerns the caretaker?','Heating the hall','Replacing the craft group’s materials','Paying the language teacher','管理員擔心暖氣費用。'),q('What must the groups agree on?','Noise and storage','A common subject for both classes','Cancelling all separate activities','團體須就噪音和儲物安排達成共識。'),q('What reservation does the resident express at the end?','Savings must not prevent the groups working effectively','The groups should share even if their activities become impractical','Financial savings are impossible in a shared building','居民提醒，即使省錢，安排仍須讓兩個團體正常運作；否則便失去意義。','speaker-opinion')]),
lesson(2,'Moving near the station',['Ravi','Ella'],[
  'The flat near the station costs more than the one on the edge of town.',
  'But I could walk to work from there and might not need a car.',
  'Have you included the cost of occasional train trips in your calculation?',
  'Not yet. I should compare total monthly costs rather than rent alone.',
  'And visit both places in the evening to judge the noise.',
  'I will. If the saving on transport offsets the higher rent, the central flat may be affordable, but I would still want to know whether I could sleep there.'
],[q('What advantage does the station flat offer Ella?','She could walk to work','Its rent is lower than the other flat’s','Train fares are included in its rent','Ella 可步行上班，或可不用養車，但租金本身較高。'),q('What has Ella not yet included?','Occasional train fares','The difference in rent','Whether she could walk to work','她尚未計算偶爾乘火車的費用。'),q('What is Ella’s final position?','The total cost and evening noise both need checking','Lower transport costs would settle the decision by themselves','The cheaper rent makes the outer flat the only sensible choice','Ella 會比較租金加交通的總成本，但即使負擔得起，仍要考慮晚上能否安睡。','speaker-opinion')]),
lesson(2,'City park repairs',['Gardener','Resident'],[
  'The park path will close for repairs for three weeks, starting Monday.',
  'Will wheelchair users still be able to reach the pond?',
  'Yes, the eastern entrance remains open and has a level route to it.',
  'Could you put that detail on the notice? The map currently only shows the closure.',
  'Certainly. I will add the accessible route before the weekend.',
  'Thank you. Without that information, people might assume the whole pond area is inaccessible and decide not to visit, even though a suitable route is available.'
],[q('Why is the path closing?','It needs repairs','The eastern entrance needs replacing','The pond is being drained','小徑因維修而暫停開放，並非整個公園關閉。'),q('How can wheelchair users reach the pond?','Use the level route from the eastern entrance','Enter from the eastern side and cross the closed path','Use the main path after the repair team finishes each day','東面入口有平坦路線通往池塘，不需要經過封閉的小徑。'),q('Why does the resident want a more detailed notice?','An incomplete notice could discourage visits unnecessarily','The alternative route is currently unsuitable for wheelchairs','The closure dates have already changed','居民擔心只有封路資料會令人誤以為不能到池塘，明明有可用路線卻放棄到訪。','inference')]),
lesson(2,'A market square at night',['Nia','Sam'],[
  'The new evening market has made the square livelier, but some residents complain about noise.',
  'Could the musicians finish earlier while food stalls stay open?',
  'That might help, though stallholders say music attracts customers.',
  'Perhaps measure noise and ask both residents and traders before changing the licence.',
  'Agreed. A decision based on evidence would be fairer than guessing.',
  'And if an earlier finish reduces the noise but harms trade, we may need a different arrangement, such as moving the musicians away from the nearest homes.'
],[q('What concern have residents raised?','Noise from the evening market','A lack of food stalls','The square being too empty','居民投訴夜市噪音。'),q('Why might traders resist an early finish for music?','They believe music attracts customers','They want all food stalls to close','They live outside the town','攤販認為音樂能吸引顧客。'),q('What do the speakers agree to seek?','Noise measurements and views from both groups','An immediate permanent ban','Only the traders’ opinions','他們希望收集噪音數據，以及居民和商戶意見。')]),
lesson(3,'The orchard label',['Grower','Shopkeeper'],[
  'Our apple juice is pressed locally, but some apples come from an orchard across the county border.',
  'Then the label should not suggest that every apple is grown in this village.',
  'Agreed. We can name both orchards and explain where the pressing happens.',
  'Customers may value the local work without being misled about the ingredients.',
  'I will revise the wording before the next batch is bottled.',
  'That should make the distinction clear: supporting local production does not require claiming that every stage and every ingredient comes from exactly the same place.'
],[q('Where is the juice pressed?','Locally','At the orchard across the county border','At the shopkeeper’s premises','果汁在本地榨製，但部分蘋果來自郡界另一邊的果園。'),q('Why should the label change?','Not all the apples are grown in the village','None of the production happens locally','The pressing location changes with every bottle','並非所有蘋果都在村內種植，標籤不應令顧客產生這個印象。'),q('What distinction does the shopkeeper emphasise?','Local processing and local ingredients are separate claims','Local processing guarantees that all ingredients are local','Ingredients matter more than where the processing takes place','店主區分本地加工與本地原材料：果汁可在本地製造，但部分蘋果仍來自其他地方。','paraphrase')]),
lesson(3,'Bread from a small mill',['Baker','Customer'],[
  'This loaf uses flour from the mill ten miles away, but the seeds are imported.',
  'I appreciate knowing that. Is the flour always available?',
  'Not always; after a poor harvest we may need another supplier.',
  'Would you change the sign if that happened?',
  'Yes, we update it whenever the source changes.',
  'Then I would be comfortable buying it even when you use another supplier. Accurate information matters more to me than a local claim that cannot always be met.'
],[q('Which ingredient comes from the nearby mill?','The flour','The seeds','Both the flour and the seeds','麵粉來自附近磨坊，種籽則是進口的。'),q('Why might the baker use another supplier?','A poor harvest could limit supply','The imported seeds cannot be used with local flour','The customer requests a different recipe','歉收可能令麵粉供應不足，才需要其他供應商。'),q('What does the customer value most?','An honest account of changing sources','A permanent local label regardless of the source','Using the same supplier even when flour is unavailable','顧客表示，即使供應商改變也可接受，最重視資料準確。','speaker-opinion')]),
lesson(3,'Pottery at the fair',['Maker','Visitor'],[
  'These cups are shaped in my workshop, but another studio fires them in its kiln.',
  'Does sharing the kiln affect when an order is ready?',
  'Yes. I wait until several makers have enough work to fill it, which saves energy.',
  'So a custom order could take longer than an item already on the stall?',
  'Exactly. I give each customer an estimated date before they order.',
  'I can allow a little extra time, then. I would rather know about the wait now than discover it after choosing a cup as a present for next weekend.'
],[q('Where are the cups fired?','At another studio','In the maker’s own workshop','At a kiln installed at the fair','杯子在製作者的工作室成形，再到另一間工作室燒製。'),q('Why do makers wait to fill the kiln?','To save energy','To make all cups the same colour','To guarantee a fixed weekly completion date','多位製作者一起裝滿窯可節省能源，但可能影響完成時間。'),q('What does the visitor’s response imply?','Knowing the delay in advance makes planning possible','The visitor needs a custom cup by next weekend','An estimated date removes all uncertainty about completion','訪客願意預留時間，並指出若買作下週末的禮物，便應事前知道等待安排。','inference')]),
lesson(3,'Seasonal farm boxes',['Farmer','Subscriber'],[
  'The box contents change with the season, so we cannot promise tomatoes every week.',
  'Could you publish a likely list beforehand? I plan meals for a large family.',
  'Yes, although weather may force a last-minute substitution.',
  'A provisional list would still help as long as the possible changes are clear.',
  'We will email one on Monday and confirm any substitutions on collection day.',
  'That is a reasonable compromise. I can plan around the likely contents and keep one meal flexible, rather than expecting the farm to guarantee what it cannot control.'
],[q('Why are tomatoes not guaranteed weekly?','Contents depend on the season','Subscribers have already chosen other vegetables','The farm has stopped growing them permanently','農產品盒內容隨季節改變，並非永久停止供應番茄。'),q('Why does the subscriber want an early list?','To plan family meals','To choose crops for the farmer to plant that week','To confirm the weather forecast','訂戶需要為大家庭安排膳食。'),q('What does the subscriber accept in the final response?','Useful advance information can remain provisional','An early list must be a guarantee of every item','Meal planning is impossible without fixed contents','訂戶認為暫定清單仍有用，並可留一餐彈性調整，接受農場無法控制天氣。','speaker-opinion')]),
lesson(3,'A cheese producer’s tour',['Guide','Visitor'],[
  'The dairy offers tours, but production areas cannot be entered during cleaning.',
  'Does that mean the afternoon group sees less?',
  'They view the process through a window and spend more time with the cheesemaker.',
  'That sounds different rather than necessarily worse.',
  'Exactly. The booking page explains both versions so visitors can choose.',
  'I would probably choose the afternoon, then. Asking the maker about decisions interests me more than standing beside the equipment, provided I can still see the process clearly.'
],[q('Why can visitors not enter the production area at certain times?','Cleaning prevents entry','The afternoon group has not booked in advance','The cheesemaker only works in the morning','生產區清潔期間不能進入，並非下午完全沒有製作活動。'),q('How does the afternoon group observe production?','Through a window','Through a recording made the previous day','By entering once the morning visitors leave','下午團可透過窗戶觀看製作過程。'),q('Why does the visitor lean towards the afternoon tour?','More discussion with the maker suits the visitor’s interests','The visitor thinks it includes more time beside the equipment','The visitor expects the process to finish before the tour','遊客較有興趣了解製作者的決定，所以更長的交流時間對他更有吸引力。','inference')]),
lesson(4,'The old library van',['Grandmother','Leah'],[
  'When I was young, a library van stopped near our farm every fortnight.',
  'Did you borrow the same sort of books I do now?',
  'Mostly adventure stories, though I remember the librarian recommending a book about stars.',
  'Is that why you became interested in astronomy?',
  'It helped, but watching the night sky with my brother mattered just as much.',
  'So it was a mixture of reading and experience. I had imagined one book changing everything, but it sounds as though each made the other more interesting.'
],[q('How often did the van visit?','Every fortnight','Twice a week','Once each month','流動圖書館每兩星期來一次，即 every fortnight。'),q('Who recommended the book about stars?','The librarian','Grandmother’s brother','Leah','圖書館員推薦了關於星星的書。'),q('What does Leah revise about her interpretation?','Several influences contributed rather than one decisive book','The book mattered more than Grandmother admits','Watching the sky happened before Grandmother learnt to read','Leah 起初想像是一本書改變一切，後來接受閱讀與親身觀星共同引發興趣。','inference')]),
lesson(4,'A childhood recipe',['Noah','Sister'],[
  'I remember Grandad making soup on Sundays, but I cannot recall what made it taste smoky.',
  'He charred the peppers over a flame first. I wrote the recipe down when we visited him.',
  'I thought he used smoked cheese.',
  'That went on top sometimes, but the peppers were in every batch.',
  'Let us try your notes and see whether the taste brings back the kitchen.',
  'We can add the cheese afterwards if we want. That way we can tell whether the peppers produce the flavour you remember, instead of changing several things at once.'
],[q('What does Noah struggle to remember?','The source of the smoky taste','Whether Grandad cooked on Sundays','Who wrote the recipe down','Noah 記得星期日喝湯，但想不起煙燻味的來源。'),q('What was included in every batch?','Flame-charred peppers','Smoked cheese','Both peppers and smoked cheese','每次都有用火烤至表面焦香的甜椒，煙燻芝士則只是有時加在上面。'),q('Why does the sister suggest adding cheese afterwards?','To distinguish the peppers’ contribution to the remembered taste','To prove that Grandad never used cheese','To avoid following the recorded recipe','先不加芝士可分辨甜椒本身是否帶出記憶中的味道，避免同時改變多個因素。','inference')]),
lesson(4,'The first school play',['Daisy','Father'],[
  'I remember forgetting my line in the school play and everyone laughing.',
  'You paused, but your friend whispered the line and the audience applauded at the end.',
  'Perhaps I mixed up the laughter from the funny scene with my mistake.',
  'Memories can change. We still have the programme, though not a recording.',
  'I would like to see the programme; it might help me remember the other children.',
  'It should help with names, though it cannot tell us exactly when the audience laughed. We may have to accept that part will remain uncertain.'
],[q('How did Daisy’s friend help?','By whispering the line','By turning the mistake into a funny scene','By bringing the play to an early end','朋友低聲提示了台詞，令 Daisy 可以繼續演出。'),q('What does Daisy reconsider?','Whether the laughter followed her mistake','Whether the performance had an audience','Whether her friend appeared in the play','Daisy 重新思考笑聲是否因她出錯而起，可能其實來自搞笑場面。'),q('What limitation does Father identify in the programme?','It can identify participants but not establish the timing of laughter','It provides a full record of the audience’s reactions','It is less useful for names than for checking dialogue','父親指出場刊可幫助確認名字，卻不能證明觀眾何時發笑。','inference')]),
lesson(4,'Learning to cycle',['Hugo','Aunt'],[
  'I was certain you taught me to cycle in the park.',
  'I helped you practise there, but your mother first held the saddle in our street.',
  'That explains why I remember both places.',
  'You fell once in the park and wanted to stop, then tried again after a break.',
  'I had forgotten that part. It makes the memory less simple than I thought.',
  'Your memory of the park is still real; it just does not include the whole sequence. Remembering one important afternoon can make earlier lessons less noticeable.'
],[q('Where did Hugo first learn with help?','In their street','At the park','Inside the house','媽媽最初在街上扶着車座教他。'),q('What happened after Hugo fell?','He took a break and tried again','He never cycled again','His aunt sold the bicycle','他休息後再嘗試。'),q('What does Hugo realise about his memory?','It combines events from different places','Every detail was completely accurate','His aunt was never present','他發現記憶結合了不同地方發生的事。','inference')]),
lesson(4,'A summer at the coast',['Mum','Theo'],[
  'You keep asking about the summer we stayed by the coast.',
  'I remember collecting shells, but I do not remember the cottage.',
  'It was a small caravan, actually, and rain kept us indoors for two days.',
  'That is surprising. My memory is full of sunshine.',
  'You may remember the beach most clearly because that was your favourite part.',
  'That makes sense. The sunny moments are not invented, but perhaps I have let them stand for the whole holiday and forgotten the ordinary time indoors.'
],[q('Where did the family stay?','In a caravan','In a cottage','In a hotel','一家人住在小型拖車屋，並非 Theo 以為的鄉間小屋。'),q('What does Theo remember most clearly?','Collecting shells on the beach','The two days spent indoors','The layout of the caravan','Theo 清楚記得在海灘拾貝殼，卻不記得住宿情況。'),q('What conclusion does Theo reach?','A true but selective memory can give an incomplete picture','Remembering sunshine proves that it did not rain','His beach memories must have been invented','Theo 認為晴天的片段是真的，但只記住喜愛的時刻，未能代表整段假期。','inference')]),
lesson(5,'Sorting food waste',['Resident','Collector'],[
  'Can I put food waste in a plastic bag before placing it in the caddy?',
  'Ordinary plastic bags cannot go in. Use a liner approved by the council or wrap the waste in newspaper.',
  'The packaging on my liners says compostable. Is that enough?',
  'Check the council’s current list, because not every compostable liner suits our processing system.',
  'I will check before using the rest of the packet.',
  'Thank you. A label can describe how a material breaks down under particular conditions without confirming that our collection service can process it. The local instructions are what matter here.'
],[q('Which wrapping is explicitly accepted by this service?','Newspaper','Any bag labelled compostable','Any thin plastic bag','對話中的收集員明確表示這項服務接受報紙包裹。'),q('Why should the resident check the list?','Not all compostable liners suit the local system','Compostable liners have all been prohibited nationally','Approved liners and newspaper must be used together','並非所有可堆肥袋都適合對話中的當地處理系統。'),q('What distinction does the collector make?','A material’s description does not guarantee local acceptance','Every compostable label confirms approval by every council','Collection instructions apply only to unlabelled packaging','「可堆肥」描述物料在特定條件下的性質，不能保證某地的收集服務可以處理。','paraphrase')]),
lesson(5,'A school litter survey',['Teacher','Student'],[
  'Our class collected litter around the school gate and found many takeaway cups.',
  'Does that prove pupils dropped them?',
  'No. People walking past use the same pavement, so we cannot identify the source.',
  'We could count items at different times and ask local businesses about bin provision.',
  'That would give us a better basis for proposing a solution.',
  'And we could repeat the counts after any change. Otherwise a single tidy morning might look like success even if the amount of litter has not fallen overall.'
],[q('What did the class find frequently?','Takeaway cups','Food wrappers from the canteen only','Reusable bottles','學生發現很多外賣杯，但不能單憑地點確認是誰丟棄。'),q('Why can they not blame pupils?','Other people use the same pavement','The cups have already been traced to local shops','The survey took place entirely outside term time','其他途人也使用同一行人路，因此不能認定垃圾全由學生丟棄。'),q('Why does the student suggest repeating the counts?','To distinguish a lasting improvement from a temporary change','To ensure that the same pupils are blamed each time','To avoid comparing the situation before and after action','單一早上的整潔未必代表整體垃圾量下降，重複點算有助判斷改善是否持續。','inference')]),
lesson(5,'Repair or replace',['Technician','Customer'],[
  'Your lamp needs a new switch; the shade and wiring are still in good condition.',
  'Would replacing the switch cost more than buying a new lamp?',
  'The repair is slightly cheaper, and I can give you a written estimate before starting.',
  'Please do. I would prefer to keep it if the total stays within that estimate.',
  'I will contact you if I find any additional problem.',
  'That is fine. Keeping a usable lamp appeals to me, but I am not agreeing to unlimited work. I would want to reconsider if a further repair made the total substantially higher.'
],[q('Which part needs replacement?','The switch','The shade','The whole wiring system','檯燈需要更換開關，燈罩和電線目前狀況良好。'),q('How does the initial repair price compare with a new lamp?','It is slightly lower','It is substantially higher','It is exactly the same','按目前估計，維修價格稍低於購買新燈；額外問題仍可能影響總價。'),q('What best describes the customer’s approval?','Conditional on the scope and cost staying acceptable','Permission to carry out any additional repair automatically','A refusal to reconsider even if the cost rises','顧客想保留可用的燈，但只接受合理範圍內的維修，若成本大幅增加便要重新考慮。','inference')]),
lesson(5,'A river clean-up',['Organiser','Volunteer'],[
  'The river clean-up is on Saturday, but volunteers should not enter the water.',
  'What should we do if we find something sharp on the bank?',
  'Leave it in place and tell a team leader, who has the right equipment.',
  'Will gloves and bags be supplied for ordinary litter?',
  'Yes, and we will explain the collection points at the briefing.',
  'I will wait for those instructions, then. I had hoped to start early, but collecting more rubbish is not worth taking on a task we have not been equipped to do.'
],[q('Where should volunteers remain?','Out of the water','In shallow water only','Wherever litter is visible','這次活動的義工不應進入水中，並沒有容許淺水的例外。'),q('How should they handle a sharp object?','Leave it and notify a leader','Carry it to the collection point in an ordinary bag','Move it away before finding a leader','按活動指示，尖銳物件應留在原處並通知有合適裝備的組長。'),q('What does the volunteer’s final response show?','A willingness to put the briefing before starting work','A belief that collecting more litter overrides the instructions','An intention to begin early with the supplied gloves','義工原想提早開始，但接受先聽指示，認為不應為多收垃圾而處理未獲裝備的工作。','inference')]),
lesson(5,'A low-emission delivery',['Owner','Courier'],[
  'We are considering bicycle deliveries for nearby orders.',
  'That could reduce van journeys, though heavy parcels would still need another vehicle.',
  'Would a trial during the busiest two hours show whether it works?',
  'It would show something, but include a quieter period too or the results may be misleading.',
  'Agreed. We will record distances, delivery times and the weight of parcels.',
  'Then we can identify which orders suit bicycles, rather than treating the trial as a choice between using them for everything or keeping every delivery in a van.'
],[q('What limitation does the courier identify?','Heavy parcels may require another vehicle','Nearby journeys are unsuitable for bicycles','The trial cannot include any van deliveries','較重的包裹可能仍需要其他車輛，並非所有訂單都適合單車。'),q('Why include a quiet period in the trial?','A busy period alone may give a misleading picture','Quiet periods eliminate the need to measure distance','The busiest period has already proved successful','只測試繁忙時間，可能不能反映不同時段的整體情況。'),q('What outcome does the courier favour?','Selecting suitable orders using the trial evidence','Replacing every van delivery regardless of parcel weight','Keeping all van journeys unless bicycles suit every order','速遞員希望按數據找出適合單車的訂單，而非把決定看成全部採用或全部放棄。','speaker-opinion')]),
lesson(6,'Should museums charge?',['Tutor','Jules'],[
  'Should all museums be free to enter?',
  'Free entry removes one barrier, but museums still need funding to care for collections.',
  'How might they balance those concerns?',
  'They could keep the permanent collection free and charge for some special exhibitions, while offering concessions.',
  'What would you check before recommending that policy?',
  'Whether the charges exclude particular groups and whether the income covers the costs. If concessions still leave people unable to attend, I would want to reconsider how those exhibitions are funded.'
],[q('What benefit of free entry does Jules mention?','It removes a barrier','It removes the need for external funding','It makes concessions unnecessary at every exhibition','免費入場可消除其中一個參觀障礙，但博物館仍需要資金。'),q('What compromise does Jules suggest?','Free permanent collections with some paid exhibitions','Free special exhibitions funded by charging for the permanent collection','The same entrance charge for every visitor','Jules 建議常設展覽免費，部分特展收費並提供優惠。'),q('What would make Jules reconsider the funding arrangement?','Concessions still fail to make exhibitions accessible to some groups','Some visitors choose only the free permanent collection','The exhibitions require care for their collections','Jules 會檢查即使有優惠，是否仍有群體無法參觀，並可能因此重新考慮資金安排。','inference')]),
lesson(6,'Working from home',['Tutor','Mariam'],[
  'Does working from home always improve productivity?',
  'Not always. It saves commuting time, but some people lack a quiet workspace.',
  'Would you require everyone to return to an office?',
  'No. A mixture could work if teams agree when they need to meet in person.',
  'How could an employer assess that arrangement?',
  'Ask staff about its effects and compare outcomes over time, rather than assuming one pattern suits everyone. I would include the quality of collaboration as well as individual output, since quick results do not reveal every effect.'
],[q('What benefit does Mariam identify?','Less commuting time','A quieter workspace for every employee','More opportunities for spontaneous office conversations','在家工作可省卻通勤時間，但並非人人家中都有安靜地方。'),q('What arrangement does she favour?','A mixture with agreed in-person meetings','An identical home-working schedule for every team','Daily office attendance regardless of the work','她建議混合安排，並按團隊需要商定何時見面。'),q('What does Mariam imply about measuring success?','Individual output alone may overlook effects on collaboration','Staff opinions should replace every measure of work','One short-term increase in output proves the policy suits everyone','Mariam 提出同時觀察合作質素、個人成果與員工意見；單看短期產出不足以全面評估。','inference')]),
lesson(6,'Learning from mistakes',['Tutor','Alec'],[
  'Some people say failure is always valuable. Do you agree?',
  'It can teach us something, but only if we examine what happened and have a chance to try again.',
  'Can you give an example?',
  'My first community event had poor attendance. We asked residents about the timing and changed it for the next one.',
  'So was the first event useful?',
  'It was disappointing, but the feedback helped us improve; disappointment alone would not have done that. I would not call every failure valuable, because sometimes people lack either useful feedback or the resources to act on it.'
],[q('What condition does Alec attach to learning from failure?','Reflecting and having a chance to retry','Repeating the same action without reflection','Avoiding all feedback','Alec 認為需要反思，並有機會再嘗試。'),q('What did the organisers change?','The timing of the next event','The identity of the residents','The location of the whole town','他們根據居民意見改變下次活動時間。'),q('What distinction does Alec make?','Feedback enabled improvement; disappointment alone did not','Disappointment guarantees success','The first event had excellent attendance','他指出是回饋促成改善，單靠失望並不足夠。','inference')]),
lesson(6,'Public art choices',['Tutor','Mei'],[
  'Who should decide what public art is installed in a town?',
  'Artists bring expertise, but residents live with the result, so both should have a voice.',
  'Could public voting alone settle it?',
  'A vote may reveal preferences, but people also need information about cost and maintenance.',
  'What process would you suggest?',
  'An open shortlist with clear budgets, followed by consultation and an explanation of the final decision. Not everyone will like the outcome, but they should be able to see how their views and the practical constraints were considered.'
],[q('Whose voices does Mei want included?','Artists and residents','Residents with no artistic advice','Artists with no local consultation','Mei 認為藝術家的專業和居民的意見都應納入考慮。'),q('Why is a vote alone insufficient in her view?','People also need cost and maintenance information','The most popular design always costs the least','Residents cannot form any preferences about art','她認為投票前亦需了解成本和維修等資料。'),q('What does Mei want an explanation of the decision to achieve?','Make the reasoning visible even to people who disagree','Guarantee that every resident will like the chosen work','Show that professional advice replaced public consultation','Mei 接受不可能人人喜歡結果，但公眾應能看見意見和實際限制如何影響決定。','inference')]),
lesson(6,'The value of free time',['Tutor','Evan'],[
  'Should people always use their free time to learn a new skill?',
  'Learning can be rewarding, but rest and unstructured time have value too.',
  'Could rest be a waste of time?',
  'Not if it helps someone recover or enjoy being with others, though individuals need different balances.',
  'How do you decide for yourself?',
  'I leave some evenings unplanned and choose a class only when I am interested in it. That does not mean I avoid challenges; it means I want the activity to be a choice rather than another obligation to fill every available hour.'
],[q('What does Evan value alongside learning?','Rest and unstructured time','A timetable with no breaks','Avoiding other people','Evan 也重視休息和沒有固定安排的時間。'),q('Why might rest be worthwhile?','It can support recovery or time with others','It guarantees a new qualification','It removes every obligation permanently','休息可幫助恢復，或讓人與別人相處。'),q('How does Evan select a class?','He chooses one that interests him','He takes every available class','He never considers his interests','Evan 只在有興趣時選擇上課。')]),
lesson(7,'Clarifying a comparison',['Examiner','Candidate'],[
  'You said the second option was more practical. What are you comparing it with?',
  'Sorry, I meant more practical than hiring a car for the whole week.',
  'Why is that?',
  'We only need transport on two days, so hiring for those days would cost less.',
  'Would that work for everyone?',
  'We should check the group’s plans before booking. My suggestion assumes that we will travel together, and it may not suit someone who needs to make a separate journey on another day.'
],[q('What does the candidate clarify?','The comparison is with hiring a car for a week','The comparison is between hiring and buying a car','The comparison is between two weekly hire companies','考生澄清比較的是租車兩天與租車一整星期。','paraphrase'),q('Why might the second option cost less?','Transport is needed on only two days','The group has been offered two days free of charge','Separate travellers will each pay for a whole week','考生認為整組人只需兩天交通，所以按日租車可能較便宜。'),q('What assumption could limit the candidate’s suggestion?','Everyone’s transport needs fit the same two days','Weekly hire always has a lower daily rate','The group has already made a non-refundable booking','建議假設大家一同出行；若有人另一天要單獨出行，安排便未必適合，所以要先確認計劃。','inference')]),
lesson(7,'Trees around the market',['Examiner','Candidate'],[
  'You suggested planting trees in the square. What if they block the market stalls?',
  'That is a fair concern. We could choose positions around the edge and leave the centre clear.',
  'Would any trees be suitable?',
  'No. We would need advice about roots, shade and the available space.',
  'So what is your next step?',
  'Consult the market traders and a tree specialist before choosing the design. I would take a draft layout so they could identify problems with particular positions, rather than asking only whether they like trees in general.'
],[q('How does the candidate address the objection?','Suggest trees at the edge and a clear centre','Keep the original positions and reduce stall numbers','Move all the trees to the centre of the square','考生建議在邊緣種樹並保留中央空間，回應阻礙攤檔的疑慮。'),q('Why seek specialist advice?','Tree roots, shade and space matter','Market traders have already agreed on every position','The same tree species suits all available spaces','樹根、樹蔭及空間均需要專業評估。'),q('Which response best addresses the request for a next step?','Discuss a draft layout with traders and a tree specialist','Choose a species first and ask traders to adapt afterwards','Ask residents whether they generally prefer squares with trees','問題要求具體下一步；帶草圖諮詢商販與專家，才能檢查位置問題，泛泛詢問是否喜歡樹並不足夠。','best-response')]),
lesson(7,'A neighbour coordinates help',['Examiner','Candidate'],[
  'You mentioned that a neighbour helped your community. In what way?',
  'She organised a list of people willing to collect shopping for anyone unable to go out.',
  'Was that useful only once?',
  'No, the list remained available, although volunteers arranged each collection individually.',
  'What did you learn from it?',
  'A small coordination effort can make existing willingness to help more effective. The neighbour did not have to collect every order herself; making it easier for others to organise their help was her main contribution.'
],[q('What did the neighbour organise?','A list of shopping volunteers','A compulsory delivery charge','A new supermarket','鄰居建立了願意代購的義工名單。'),q('How were collections arranged?','Individually as needed','Automatically every hour for everyone','Only on the first day','每次代購均按需要個別安排。'),q('What lesson does the candidate draw?','Coordination can make willingness to help more effective','Help is useful only once','Volunteers should never communicate','考生認為協調能令已有的助人意願更有效。','speaker-opinion')]),
lesson(7,'Revising a strong claim',['Examiner','Candidate'],[
  'You said online lessons are less effective. Is that true for every learner?',
  'No, that was too broad. Some people benefit from being able to replay explanations.',
  'What difficulty were you thinking of?',
  'It can be harder to ask spontaneous questions if a lesson is entirely recorded.',
  'Can that problem be reduced?',
  'A live question session alongside recordings might help. I would need to consider when it takes place, though, because the flexibility of recordings is less useful if students must all attend a single inconvenient session.'
],[q('How does the candidate qualify the claim?','Online lessons can benefit some learners','Recordings are less effective for every learner','Replay is useful only in face-to-face classes','考生承認原先說法太籠統，錄播對可重看解釋的學生可能有益。'),q('What difficulty does the candidate identify?','Asking spontaneous questions during a recorded lesson','Replaying a difficult explanation','Reviewing material at a convenient time','純錄播課程較難即時提問。'),q('What tension does the proposed solution introduce?','Live access to questions may reduce flexibility for some students','Adding live questions removes the ability to replay recordings','A live session guarantees that no learner will have further questions','即時答問有助提問，但若只有一個不方便的時段，便可能削弱原本的時間彈性。','inference')]),
lesson(7,'Checking the question',['Examiner','Candidate'],[
  'How might your proposal affect people who do not use the internet?',
  'Do you mean how they would access the booking service?',
  'Yes, particularly older residents who prefer to speak to someone.',
  'Then a telephone option and an in-person desk could remain available.',
  'Would that increase costs?',
  'Probably, so I would compare those costs with the risk of excluding people. A cheaper service is not necessarily better value if some of the residents it is meant to serve cannot use it at all.'
],[q('Why does the candidate ask a question?','To check what aspect the examiner means','To change the subject completely','To end the conversation','考生詢問是為了確認考官所指的範圍。'),q('What alternatives to online booking are offered?','Telephone and an in-person desk','Email only','A smartphone application only','建議保留電話及現場櫃位。'),q('What trade-off does the candidate recognise?','Extra costs versus excluding users','Fewer books versus larger libraries','Quicker internet versus smaller screens','考生承認需要權衡額外成本與排除使用者的風險。')]),
lesson(8,'A postponed workshop',['Organiser','Participant'],[
  'The photography workshop has moved from Tuesday to Thursday because the tutor is ill.',
  'I can attend Thursday, but only after six. Has the time changed too?',
  'It still starts at five. We can send you the introductory material, but the practical session begins at six thirty.',
  'Then I could read the material beforehand and join the practical part.',
  'Please tell us by Monday so we can reserve your equipment.',
  'I will check my travel arrangements tonight and confirm tomorrow. I expect to arrive at about six fifteen, but I want to make sure that is realistic before asking you to hold the equipment.'
],[q('Why was the workshop moved?','The tutor is ill','The participant could not attend Tuesday','The practical equipment is delayed','導師生病，工作坊由星期二改至星期四。'),q('How could the participant prepare for arriving late?','Read the introductory material beforehand','Wait for the introduction to be repeated at six thirty','Ask for the practical session to be cancelled','參加者可先讀入門材料，再參與六時半開始的實習。'),q('Why has the participant not yet confirmed attendance?','The expected arrival time still needs checking against travel arrangements','The organiser has not decided when the practical session starts','The participant cannot arrive before the practical session ends','參加者預計六時十五分到達，但要先確認交通是否可行，才請主辦方留起器材。','inference')]),
lesson(8,'A delivery with a missing part',['Customer','Assistant'],[
  'My desk arrived yesterday, but one of the brackets is missing.',
  'I am sorry. Is the package damaged, or is just the bracket absent?',
  'The box is intact and the other parts are there.',
  'We can post a replacement bracket today, or collect the entire desk for a refund.',
  'I would rather keep the desk if the bracket arrives this week.',
  'Standard post usually takes two days, but I will email tracking so you can follow it. That is an estimate rather than a guaranteed arrival date; please contact us if it has not arrived by the end of the week.'
],[q('What is wrong with the delivery?','A bracket is missing','The box and the desk are damaged','The brackets have all arrived in the wrong size','送貨缺少一個支架，包裝完好，其餘零件齊全。'),q('Which option does the customer prefer?','Keep the desk if the replacement arrives this week','Return the desk regardless of when the bracket arrives','Keep the desk even if no replacement is sent','顧客希望保留書桌，但條件是支架本週內送到。'),q('What does the assistant clarify about delivery?','The normal two-day service is not a promise of a particular arrival date','Tracking guarantees that the bracket will arrive in two days','The customer must request a refund before the week ends','職員說通常需兩天，但明確指出只是估計，並非保證；若週末前未收到便應聯絡。','paraphrase')]),
lesson(8,'An accessible event booking',['Attendee','Box office'],[
  'I would like two seats for the talk, including one with step-free access.',
  'There are spaces near the front on Friday, but Saturday’s accessible spaces are booked.',
  'Friday works. Can my companion sit beside me?',
  'Yes, there is an adjacent seat. Both tickets are held for fifteen minutes while you complete payment.',
  'Can I pay by phone? The website is difficult for me to use.',
  'Certainly. I can take payment now and email the tickets afterwards. You will not need to complete the website form as well; this call can finish the booking within the time the seats are being held.'
],[q('Which session of the talk has an accessible space available?','Friday','Saturday','Neither day','星期五的講座仍有無障礙位置，星期六則已滿。'),q('Where can the companion sit?','In an adjacent seat','In another row with separate access','In whichever seat is left after payment','售票處確認同行人士可坐在旁邊的座位。'),q('What does the telephone option resolve?','It allows the booking to be completed without the difficult website form','It extends the seat reservation indefinitely','It removes the requirement to pay for both tickets','電話付款可在保留座位的時間內完成預訂，參加者毋須再填有使用困難的網上表格。','inference')]),
lesson(8,'A misleading chart',['Editor','Analyst'],[
  'This chart makes the rise in sales look enormous. Does the vertical axis start at zero?',
  'No, it starts at ninety. The figures rose from ninety-five to one hundred.',
  'Could readers mistake the visual difference for a much larger increase?',
  'Yes. I will start the axis at zero and add the actual values.',
  'Please also state that these are monthly figures, not annual totals.',
  'I will revise the caption and send you the chart again. The numbers themselves were correct, but I can see that accurate figures alone do not prevent a presentation from giving readers the wrong impression.'
],[q('Why might the original chart exaggerate the rise visually?','Its vertical axis starts at ninety','It compares monthly figures with annual totals','It omits the value of one hundred entirely','縱軸由九十開始，會放大九十五與一百之間的視覺差距。'),q('What values are being compared?','Ninety-five and one hundred','Ninety and ninety-five','Zero and one hundred','對話明確說銷售數值由九十五升至一百。'),q('What wider point does the analyst recognise?','Correct data can still be presented in a misleading way','Changing a chart’s axis necessarily changes the underlying data','A caption is unnecessary when all the numbers are accurate','分析員承認數字雖正確，呈現方式仍可能令人誤解，所以也要修正圖軸及說明。','inference')]),
lesson(3,'A wool cooperative',['Spinner','Buyer'],[
  'Our cooperative spins wool from several nearby farms, then sends it to a regional mill for dyeing.',
  'Does every colour use a natural dye?',
  'No. The label specifies the dye used for each shade, because their properties differ.',
  'I need yarn that can withstand frequent washing. Which would you suggest?',
  'Check the care instructions on each label; I can show you two suitable options.',
  'Please do. I was attracted by the idea of natural dyes, but for this project the finished item needs to cope with regular washing, whichever kind of dye is used.'
],[q('Where is the wool dyed?','At a regional mill','At each of the nearby farms','In the spinner’s cooperative shop','羊毛在合作社紡製後，送到區內工廠染色。'),q('What does the label specify?','The dye used for each shade','A guarantee that every dye is natural','Identical washing instructions for every yarn','標籤列明每種顏色所用的染料，並非聲稱全部是天然染料。'),q('How does the buyer’s priority develop?','Suitability for frequent washing outweighs the initial preference for natural dyes','Natural dye becomes a requirement regardless of washing instructions','Colour becomes the only relevant consideration','買家原先對天然染料有興趣，但最後表明這個項目最需要成品耐受經常清洗。','inference')]),
lesson(4,'The childhood garden',['Mina','Uncle'],[
  'I remember a huge pear tree behind our old house.',
  'It seemed huge when you were small, but it was actually a young apple tree.',
  'Perhaps I am thinking of the pears our neighbour gave us.',
  'That is possible. She left a basket at our door each autumn.',
  'I will look at our photographs to see whether the tree appears in any of them.',
  'That may help, although a photograph might not show enough detail to identify it. We can compare what it shows with our memories instead of expecting it to answer everything.'
],[q('What tree does Uncle remember?','A young apple tree','A mature pear tree','A young pear tree','叔叔記得的是一棵樹齡尚淺的蘋果樹，並非 Mina 印象中的大梨樹。'),q('Where did the pears probably come from?','A neighbour','The tree behind the house','A school garden','鄰居每年秋天都送梨，Mina 可能把這件事與後院的樹混合記憶。'),q('What caution does Uncle add about photographs?','They may support the comparison without settling every detail','They will certainly identify the tree’s species','They are useful only if both memories are wrong','叔叔說相片未必拍到足夠細節辨認樹種，可協助核對，卻不能保證解決所有疑問。','inference')]),
lesson(8,'A community garden waiting list',['Coordinator','Applicant'],[
  'All garden plots are occupied, but you can join the waiting list.',
  'Does the list give priority to people who live closest?',
  'No, plots are offered in application order, provided applicants live within the council area.',
  'I live within it. What happens if I cannot accept an offer immediately?',
  'You have seven days to reply. If the timing is unsuitable, contact us to discuss staying on the list.',
  'Please add me. I will keep my contact details up to date, and I understand that contacting you starts a discussion rather than automatically guaranteeing that I can stay in the same position.'
],[q('How are plots normally offered?','In application order to eligible residents','By distance among all applicants regardless of address','By giving current plot holders a second plot first','合資格居民通常按申請次序獲分配，並非單按與花園的距離決定。'),q('How long does an applicant have to reply?','Seven days','Fifteen days','One calendar month','申請人收到通知後有七天回覆。'),q('What does the applicant understand about an unsuitable offer?','Remaining on the list must be discussed rather than assumed','Ignoring it guarantees the same place on the list','Every applicant is entitled to postpone an offer indefinitely','負責人只表示可聯絡商討；申請人明白這不代表自動保留原有輪候位置。','inference')])
]
