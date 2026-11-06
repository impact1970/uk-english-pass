// Original B2 practice conversations awaiting editorial review.
const q = (prompt, correct, d1, d2, explanation, type = 'single-choice') => ({prompt, options:[correct,d1,d2], answer:0, explanation, type})
const lesson = (u,t,s,x,qs) => ({l:'B2',u,t,s,x,qs,pending:true})
export const additionalB2Scenarios1200Part2 = [
lesson(0,"A question after the lecture",["Rhea","Callum"],[
 "I wanted to challenge the lecturer’s conclusion, but the questions afterwards seemed to be about definitions.",
 "You could still ask how her conclusion accounts for the evidence that appeared to contradict it.",
 "Would that sound as though I was accusing her of ignoring the evidence?",
 "Not if you explain what you understood first and invite her to clarify the connection.",
 "Then I might discover that I misunderstood the graph rather than the argument itself.",
 "Exactly. A respectful challenge can improve your understanding even when you end up changing your own view."
],[q("What concerns Rhea about her question?","It might sound like an accusation","It might reveal that she missed the whole lecture","It might repeat a definition the lecturer has already explained","Rhea 擔心問題聽起來像指責講者忽略證據。","inference"),q("What does Callum recommend she do first?","Explain her understanding before asking for clarification","State that the conclusion is wrong before discussing the graph","Wait for another student to ask the same question","Callum 建議先說明自己的理解，再請講者澄清。","single-choice"),q("What benefit does Callum see in a challenge?","It may deepen understanding even if the questioner changes their mind","It allows the questioner to defend their first interpretation without revising it","It is useful only if the lecturer withdraws the conclusion","即使最後改變自己看法，提出質疑仍可加深理解。","speaker-opinion")]),
lesson(0,"Testing a study app",["Amina","Rob"],[
 "The college is offering a study app that promises to identify the topics we are weakest at.",
 "That sounds useful, but does it explain how it reaches that judgement?",
 "It counts mistakes in short quizzes. I suppose a rushed answer could look like a gap in knowledge.",
 "Yes, and a correct guess could hide one. I would use its suggestions as a starting point.",
 "We could compare them with our coursework feedback before deciding what to revise.",
 "And tell the college what happens after a trial, especially if the app repeatedly misidentifies a topic."
],[q("Why might the app misjudge a student?","Quiz answers can reflect haste or guessing","It judges revision needs from coursework rather than quiz results","It treats unanswered questions as correct answers","趕答或猜中答案都可能令小測結果未能反映真正理解。","inference"),q("How do they plan to use its suggestions?","Compare them with feedback from coursework","Use them to replace feedback from their tutors","Recommend the app before comparing its results","他們會把程式建議與課業評語比較。","single-choice"),q("What is Rob’s attitude to the app?","Cautiously interested, with a wish to evaluate its results","Convinced that the app is more reliable than coursework feedback","Unwilling to test it until it can explain every incorrect answer","Rob 覺得建議可作起點，但希望試用後評估準確度。","speaker-opinion")]),
lesson(0,"The history source label",["Tess","Harun"],[
 "Our exhibition label says the photograph proves that the factory was a pleasant place to work.",
 "It shows workers smiling on one occasion, but can a single photograph establish their usual conditions?",
 "Perhaps the photographer asked them to pose, although we have no record of that either.",
 "Then say what is visible and mention that the circumstances of the photograph are unknown.",
 "I will put the wage records nearby so visitors can consider another kind of evidence.",
 "Good, as long as we explain their date; conditions may have changed between the records and the photograph."
],[q("What is wrong with the original label?","It draws a broad conclusion from a single image","It claims the photograph was staged without any evidence","It gives wages and working conditions equal importance","單張照片不足以證明工廠一貫的工作環境。","inference"),q("How should Tess describe the photograph?","State what can be seen and acknowledge unknown circumstances","State that the workers were posed because they are smiling","Use the wage records to date the photograph without checking","應描述可見內容，並承認拍攝情況不明。","single-choice"),q("Why does the date of the wage records matter?","Working conditions might have changed over time","The records must be more recent to be useful at all","The date would establish why the workers were smiling","記錄與照片的時間可能不同，工作環境亦可能已改變。","single-choice")]),
lesson(0,"A practical course assessment",["Luca","Fern"],[
 "Our design course is assessing the final model, but I spent most of my time testing failed versions.",
 "Could the assessor see your development notes as well? They might reveal decisions the model alone cannot show.",
 "The instructions allow a short portfolio, though I was going to fill it with photographs of the finished object.",
 "Perhaps select a few experiments and explain what each taught you, including one that did not work.",
 "I will check the marking criteria so I do not leave out a required technical drawing.",
 "That sounds sensible. Showing your process is valuable, provided you still meet the stated requirements."
],[q("Why does Fern suggest including development notes?","They can show reasoning behind the finished model","They make the required drawings unnecessary","They establish that the final model performed better than earlier versions","過程筆記能展示單靠成品看不到的設計決定。","single-choice"),q("Why does Luca mention checking the marking criteria?","He wants to include process evidence without omitting required material","He has decided the experiments matter more than any stated requirement","He wants to replace the portfolio with a technical drawing alone","Luca 想展示設計過程，同時確保沒有漏交評分準則要求的材料。","inference"),q("Which principle sums up Fern’s advice?","Explain selected attempts while satisfying the assessment criteria","Show only the finished object so the assessor is not distracted","Include the full testing record even if required work is omitted","Fern 建議選擇有意思的實驗解釋，同時符合評核要求。","paraphrase")]),
lesson(1,"Translating a wedding speech",["Mariam","Ed"],[
 "My uncle wants me to translate his wedding speech, including a joke that depends on two similar-sounding words.",
 "A literal translation might preserve the words while losing what makes the joke funny.",
 "I could replace it with a different joke, but then I would be putting my own humour into his speech.",
 "Explain the difficulty to him and offer a brief explanation of the wordplay or an alternative he approves.",
 "I will show him both versions. He may prefer a straightforward message if the explanation interrupts the speech.",
 "Exactly. Your job is to help his meaning reach the guests, and he should have a say in any substantial change."
],[q("Why might a literal translation fail?","The humour relies on sounds that may not work in the other language","The uncle has asked for a completely different speech","The guests have already heard an explanation of the joke","笑話靠近音字製造效果，直譯未必能在另一種語言保留笑點。","inference"),q("What does Ed recommend before replacing the joke?","Discuss the difficulty and seek the uncle’s approval","Choose a new joke and surprise the uncle during the speech","Remove the whole speech to avoid explaining the wordplay","Ed 建議先解釋翻譯難處，重大改動須讓叔叔參與決定。","single-choice"),q("Which response would best follow Ed’s advice?","I will ask which version best conveys what he wants to say.","I will keep every word even if the guests cannot understand the joke.","I will choose whichever version I find funniest without consulting him.","應讓叔叔比較版本，選擇最能傳達其心意的一個。","best-response")]),
lesson(1,"The order of the procession",["Jo","Sanjay"],[
 "The festival committee has asked our dance group to lead the procession, but another group says it has always gone first.",
 "Have you checked last year’s programme, or are both groups relying on what their members remember?",
 "The programmes show that the order has varied. Still, the other group sees going first as recognition of its long involvement.",
 "Then showing them the programmes may settle the history without addressing why the position matters to them.",
 "We could acknowledge their contribution in the introduction and discuss alternating the lead between groups each year.",
 "That is worth proposing. Agree the arrangement together before printing it, so neither group feels a decision has been imposed."
],[q("Why might the old programmes not resolve the disagreement?","The position has symbolic importance beyond the historical record","The programmes confirm that the other group always led","Neither group is interested in taking part in the procession","另一組重視帶頭位置所代表的肯定，歷年次序並非唯一爭議。","inference"),q("What compromise does Jo propose?","Recognise the group’s contribution and alternate who leads","Give the other group a permanent right to lead","Keep the order secret until the procession begins","Jo 建議公開肯定對方的貢獻，並商量每年輪流帶頭。","single-choice"),q("What does Sanjay consider essential?","The groups should agree before the arrangement is published","The committee should print its choice before discussion","The oldest programme should determine every future procession","Sanjay 認為應在印製安排前共同議定，避免任何一組覺得被迫接受。","speaker-opinion")]),
lesson(1,"A community toast",["Elise","Bilal"],[
 "At the club dinner the chair traditionally proposes a toast with wine, and this year I have been asked to lead it.",
 "You could keep the words of appreciation while offering a choice of drinks for the toast.",
 "Would changing the drink make the older members think I am dismissing the tradition?",
 "You could explain that the shared thanks is the part you want everyone to take part in.",
 "I will discuss it with the chair beforehand and make sure the non-alcoholic choices are visible.",
 "That sounds inclusive, and it gives the chair a chance to explain any history you may not know."
],[q("What does Bilal suggest preserving?","The shared expression of appreciation","The requirement to use the traditional drink","The custom of asking the chair to lead every toast","Bilal 建議保留共同表達感謝的意義，同時提供不同飲品。","single-choice"),q("Why will Elise speak to the chair first?","To discuss the change and learn any relevant history","To obtain permission to omit the words of thanks","To persuade the chair to remove wine from the dinner altogether","事先商量可討論改動，並了解自己未必知道的傳統背景。","inference"),q("How does Elise feel about changing the toast?","She worries some members may regard it as disrespectful","She wants to remove the tradition because it excludes younger members","She assumes offering several drinks will weaken the thanks","Elise 擔心較年長的會員會以為她不尊重傳統。","speaker-opinion")]),
lesson(1,"A festival window display",["Poppy","Chen"],[
 "The high street shops want matching lanterns for the festival, but I found several different designs in the local archive.",
 "Then a single design might make the tradition appear more uniform than it really was.",
 "A matching display would be easier to recognise from the bus, though.",
 "Could the shops use the same colours but choose different shapes, with a short note explaining the variety?",
 "That would give us a visible theme without suggesting that the archive contains only one pattern.",
 "Ask the archive staff to check the note too; we should not invent meanings for shapes we do not understand."
],[q("What tension are they trying to resolve?","A recognisable display versus an accurate account of variety","An attractive display versus a ban on using archive designs","A shared historical explanation versus the need for more shops","他們要兼顧展示的一致視覺效果與傳統設計的多樣性。","paraphrase"),q("What compromise does Chen propose?","Use common colours with varied shapes and an explanation","Copy one archived shape in several unrelated colours","Use several shapes but describe them as one unchanging tradition","Chen 建議用相同顏色、不同形狀，加上簡短說明。","single-choice"),q("Why should archive staff check the note?","To avoid assigning unsupported meanings to the designs","To decide which design should replace all the others","To confirm that the new display exactly reproduces the old festival","檔案館職員可協助避免替不明圖案編造意義。","single-choice")]),
lesson(2,"The station footbridge",["Molly","Yusuf"],[
 "The council wants to close the station footbridge for repairs, leaving the road crossing as the temporary route.",
 "That crossing is a long detour for people coming from the estate, especially with a pushchair.",
 "The engineers say the bridge cannot stay open safely while they replace the supports.",
 "I am not asking them to keep it open. Could they add a temporary crossing nearer the station?",
 "I will raise that at the meeting and ask how long any alternative would take to install.",
 "Good. The repair and a usable diversion both matter, so residents need the details before work starts."
],[q("What does Yusuf propose?","Consider a temporary crossing closer to the station","Use the bridge for pushchairs while other people take the diversion","Postpone repairs until residents no longer need the bridge","Yusuf 建議考慮在車站附近設臨時過路處。","single-choice"),q("Why is the existing diversion a concern?","It adds a long journey for some residents","It prevents anyone from reaching the station at all","It will take engineers too long to repair","現有繞道對屋邨居民來說很遠，推嬰兒車尤其不便。","single-choice"),q("What is Yusuf’s position on the repair?","He accepts the closure but wants a practical alternative","He supports the repairs only if the footbridge stays partly open","He wants the council to begin work before discussing the diversion","他接受因安全需要關橋，但希望有可行的替代路線。","speaker-opinion")]),
lesson(2,"A late pharmacy service",["Holly","Idris"],[
 "Our neighbourhood pharmacy is considering opening later on Fridays, but it would close earlier on Monday to cover staffing.",
 "That may help commuters, while making things harder for people who collect prescriptions on Mondays.",
 "The owner has asked customers to vote for one option at the counter this week.",
 "A counter vote could miss anyone who cannot visit this week. Could she also take responses by phone?",
 "I will suggest that, along with recording which times people actually need rather than just their preferred option.",
 "The extra detail could reveal whether a smaller change would serve both groups better."
],[q("What is the trade-off in the proposal?","Later Friday opening would mean earlier Monday closing","Friday staff would work longer without any reduction elsewhere","Monday customers would have to collect prescriptions on Friday","延長星期五營業時間，代價是星期一提早關門。","single-choice"),q("Why suggest telephone responses?","People unable to visit the counter can still contribute","The counter results show that most customers prefer telephone voting","Telephone responses would replace the need to ask in person","電話回覆可讓本星期無法到店的人表達意見。","inference"),q("What could more detailed feedback reveal?","Whether a smaller adjustment could help both groups","Whether most customers agree to stop collecting on Mondays","Whether the two groups have the same reason for choosing Friday","了解實際需要的時段，或可找出兼顧兩組人的較小改動。","single-choice")]),
lesson(2,"The empty office block",["Naveen","Claire"],[
 "A developer proposes turning the empty office block into flats, with a café on the ground floor.",
 "More homes near the railway would be welcome, but the plans show very little space for storing bicycles.",
 "The developer says residents can use the public racks outside the station.",
 "Those are often full, and leaving a bike outdoors overnight is different from parking there for an hour.",
 "I will support the conversion in principle but ask the planning committee to address secure storage.",
 "That seems reasonable. Supporting more housing does not require accepting every detail of the first plan."
],[q("What concern does Claire raise?","The proposed homes lack adequate secure bicycle storage","The conversion would remove the station’s existing bicycle racks","The development provides more bicycle parking than residents need","Claire 認為計劃提供的單車存放空間不足。","single-choice"),q("Why are station racks not necessarily a solution?","They may be full and are less suitable for overnight storage","They are intended for residents rather than rail passengers","They would require the developer to reduce the number of flats","車站的單車架經常泊滿，而且在露天過夜存放與短時間停泊的需要不同。","inference"),q("What is Naveen’s position?","He supports the conversion subject to resolving a detail","He supports the plans because public racks meet residents’ needs","He will oppose conversion regardless of any revised storage plan","Naveen 原則上支持改建，但會要求處理單車存放問題。","speaker-opinion")]),
lesson(2,"The village notice delivery",["Bea","Martin"],[
 "The village newsletter may go entirely online because printing costs have risen sharply.",
 "That saves money, but my neighbour uses a basic phone and relies on the paper copy for local news.",
 "The editor says subscriptions are too low to pay for printing the current number.",
 "Perhaps fewer copies could be left at the post office and delivered to people who request them.",
 "We should ask the volunteers whether a smaller delivery round is manageable before promising it.",
 "Yes, and check whether anyone who needs a copy would be unable to collect one or make a request online."
],[q("Why is an online-only newsletter a problem for some residents?","They may lack suitable digital access","They would need a subscription even though the website is free","They rely on the paper because it contains different local news","部分居民只有基本手機，未必方便網上閱讀。","single-choice"),q("What compromise is proposed?","Print fewer copies and make them available through collection or delivery","Keep home delivery but make every copy available only by subscription","Replace delivered copies with collection from the post office alone","Martin 建議減少印量，讓居民領取或按需要派送。","single-choice"),q("Which question would best help check whether the smaller print run is workable?","How can someone without internet request a delivered copy?","Which website design would attract the most new advertisers?","Can we stop consulting volunteers once printing costs fall?","最後一句關注有需要的人能否領取或申請報紙；追問離線申請方法最切合討論。","best-response")]),
lesson(3,"Collecting a smoked fish order",["Ewan","Saira"],[
 "The fish smoker has offered to prepare our café’s trout order on Friday, but the delivery van cannot collect it until Monday.",
 "Has the producer agreed to store it over the weekend, or does the price assume collection as soon as it is ready?",
 "The quotation only lists the fish and packaging. I had assumed storage was included because the delay is short.",
 "We should confirm that rather than treat an unmentioned service as part of the price.",
 "I will ask whether she can hold it until Monday and what that would cost, then compare it with collecting it ourselves on Friday.",
 "Include our staff time and transport in that comparison. An option with no storage charge may not be cheaper overall."
],[q("What assumption does Saira question?","Weekend storage is included in the quoted price","The producer has refused to prepare the order on Friday","The café must buy a different kind of fish","報價只列魚及包裝，不能假設已包括週末代存服務。","inference"),q("What will Ewan confirm with the producer?","Whether she can store the order and whether there is a charge","Whether Monday collection has already been cancelled","Whether the packaging charge covers the café’s transport","Ewan 會確認能否代存至星期一，以及是否另收費。","single-choice"),q("What is Saira’s view of the comparison?","It should include the café’s time and travel costs","It should be decided by the storage charge alone","It should assume both options require the same amount of work","Saira 認為應比較整體成本，包括員工時間和交通。","speaker-opinion")]),
lesson(3,"The small cider batch",["Fran","Ollie"],[
 "The orchard made less cider this year because a late frost damaged some of the apple blossom.",
 "How will the maker divide the limited stock between regular shops and visitors to the farm?",
 "Filling the shop orders first would honour our usual arrangements, but it would leave nothing for visitors who come every autumn.",
 "Could the shops agree to smaller allocations, with a clear limit on sales at the farm as well?",
 "I will discuss that before confirming quantities. Some shops may already have advertised a tasting event.",
 "Then ask about those commitments rather than assuming every order can be reduced equally. A fair decision needs more than an identical percentage cut."
],[q("What difficulty does the smaller harvest create?","There may not be enough stock for both shops and farm visitors","The shops have stopped ordering all orchard products","Visitors have asked for cider from a different grower","產量減少，可能無法同時滿足店舖訂單及到農場購買的訪客。","single-choice"),q("What compromise does Ollie initially suggest?","Reduce shop allocations and also limit farm sales","Keep every shop order unchanged and close the farm to visitors","Give farm visitors priority over all existing shop orders","Ollie 建議店舖少取一些，同時限制農場現場銷量。","single-choice"),q("Why might an identical cut be unfair?","Some shops may have made commitments based on their orders","Every shop has already received exactly the same quantity","Farm visitors have already paid for all the remaining cider","部分店舖可能已按訂量宣傳試飲活動，作決定前須了解其承諾。","inference")]),
lesson(3,"A handwoven scarf commission",["Megan","Dev"],[
 "A visitor wants twenty handwoven scarves in time for the Christmas market, all with the same intricate pattern.",
 "Can the weaver produce that many without taking time away from existing commissions?",
 "Not at the usual pace. She could simplify the pattern or offer ten scarves by the deadline.",
 "The visitor should see a sample of the simpler design before agreeing to it.",
 "I will also ask whether the remaining ten could be delivered in January if the original pattern matters most.",
 "That gives the buyer a real choice and protects the quality the weaver has promised other customers."
],[q("Why can the weaver not simply accept the order as requested?","The quantity and deadline conflict with her usual pace and existing work","The original pattern is no longer available to the weaver","The buyer has requested a quantity below the workshop’s minimum","按平常製作速度，限期和數量會影響現有訂單。","inference"),q("Why show a sample of the simpler pattern?","The buyer can assess the changed design before agreeing","The sample lets the buyer assume the deadline will no longer matter","The sample proves the original and simpler patterns look identical","買家可先看簡化後的設計，再決定是否接受。","single-choice"),q("What further option will Megan explore?","Deliver part of the original design later","Delay all twenty scarves until January without asking the buyer","Deliver ten simpler scarves and decide the remaining design later","Megan 會詢問能否將原設計的部分貨品延至一月交付。","single-choice")]),
lesson(3,"The local honey tasting",["Ruth","Zaid"],[
 "At the food fair I want to describe this honey as tasting of heather, but the bees forage over a wide area.",
 "Did the beekeeper test the pollen, or is the description based on the flavour alone?",
 "She says it reminds her of heather but has not had the batch analysed.",
 "Then present it as her tasting impression rather than claiming that the honey comes entirely from heather.",
 "I can invite visitors to compare it with another batch and explain why flavours vary by season.",
 "That makes the tasting interesting without suggesting a level of certainty the producer does not have."
],[q("What evidence supports the heather description?","The beekeeper’s impression of the flavour","A pollen analysis confirming a single floral source","Records showing where the bees foraged throughout the season","養蜂人只是根據味道聯想到石南花，並未化驗。","single-choice"),q("How should Ruth present the description?","As a tasting impression rather than a proven sole source","As confirmation that all the bees stayed near heather","As a guarantee that every batch will have the same flavour","應說明這是品嚐感受，不可斷言蜜糖完全來自石南花。","paraphrase"),q("Why compare another batch?","To explore how flavour can vary without overstating certainty","To prove which flowers supplied all the nectar","To choose one fixed description for every season","比較不同批次有助了解季節性味道變化。","inference")]),
lesson(4,"The piano in the hallway",["Nina","Grandad"],[
 "I remember practising the piano in your hallway, but I thought it belonged to you.",
 "Actually, it belonged to your aunt. She left it with us while her flat was being repaired.",
 "That explains why it disappeared so suddenly. I had imagined you sold it because I played badly.",
 "Not at all. Your aunt collected it when the builders finished, and you were disappointed for weeks.",
 "I might ask her whether she remembers the tune I kept trying to learn.",
 "Do. My memory of the dates is uncertain, but I am quite sure the piano was never sold."
],[q("Why did the piano leave the hallway?","Its owner collected it after repairs to her flat","Grandad gave it away after Nina stopped practising","Her aunt sold it when the builders finished","鋼琴原主人在住所維修完成後取回，並非因 Nina 彈得不好而被賣掉。","single-choice"),q("What had Nina assumed as a child?","Her playing caused the piano to be sold","Her aunt had taken it away because she needed lessons","Grandad had borrowed it specifically for Nina’s birthday","Nina 兒時以為自己彈得不好，令鋼琴被賣掉。","single-choice"),q("What distinction does Grandad make about his memory?","He is unsure of the dates but confident it was not sold","He knows the dates precisely but is unsure whether it was sold","He trusts Nina’s explanation more than his recollection of the owner","他不肯定日期，但肯定鋼琴沒有被賣掉。","inference")]),
lesson(4,"The paper boat race",["Javed","Sister"],[
 "I found a photograph of us racing paper boats in the stream behind our old house.",
 "I remember that afternoon too, although I thought we had made the boats from newspaper, not coloured paper.",
 "The photograph shows coloured sails, but perhaps we added them after the first boats became soggy.",
 "That is possible. Mum might remember because she helped us retrieve one that got stuck under a branch.",
 "It is funny how the picture brings back the excitement but cannot settle every detail.",
 "Yes, and our different memories are worth keeping even if neither of us can reconstruct the whole afternoon."
],[q("What detail do the siblings remember differently?","The paper used for the boats","Whether they raced in the stream or at the beach","Which parent helped them make the first boat","他們對紙船是否用報紙製作有不同記憶。","single-choice"),q("Why might they ask Mum?","She took part in retrieving a stuck boat","She kept a written record of the paper they used","She can confirm that coloured sails were used from the start","媽媽曾幫忙取回卡住的紙船，可能記得當時情況。","single-choice"),q("What do they conclude about the photograph?","It prompts memories but does not settle every detail","It settles the material used for every boat that afternoon","It is less useful than memory because it shows only the sails","照片能喚起回憶，卻無法解答所有細節。","paraphrase")]),
lesson(4,"A voice on an old recording",["Ellie","Dad"],[
 "I found a recording of myself at seven, and my accent sounds different. I thought I had always spoken as I do now.",
 "We moved towns the following year. You gradually picked up expressions from your new classmates.",
 "I remember copying a few words, but I had assumed I could switch back whenever I wanted.",
 "You did keep some of the old expressions at home. The change was less sudden than that recording makes it seem.",
 "I will play it to my cousin and ask what she remembers, rather than use one recording to describe my whole childhood.",
 "That seems fair. It captures your voice on one occasion, while your cousin may remember how you spoke in different settings."
],[q("What assumption does the recording challenge?","Ellie’s way of speaking has remained unchanged since childhood","Ellie moved towns before learning to speak","Ellie’s cousin used the same expressions as her classmates","錄音中的口音與現在不同，令 Ellie 重新考慮自己說話方式一直沒有改變的想法。","inference"),q("How does Dad qualify Ellie’s impression of the change?","It happened gradually, with some older expressions retained at home","It happened entirely on the day they moved towns","It was limited to the words used in that single recording","爸爸說轉變是逐漸發生的，而且她在家仍保留一些舊有用語。","paraphrase"),q("Why does Ellie want her cousin’s recollections?","They may add information about speech in settings beyond the recording","They can prove that the recording gives a complete account of her speech","They will establish that Ellie deliberately changed her accent overnight","親戚的回憶可補充其他場合的說話情況；單次錄音不足以代表整段童年。","inference")]),
lesson(4,"The school garden photograph",["Amir","Nana"],[
 "In this picture I am holding a huge carrot from the school garden, and I always said I grew it myself.",
 "You helped water that bed, but the older children planted it before your class joined the project.",
 "So calling it my carrot makes the work sound more individual than it was.",
 "You were proud because everyone shared the harvest at lunch, not because you wanted the credit alone.",
 "I will tell my daughter that part when I show her the photograph.",
 "She might enjoy hearing how the garden brought different classes together as much as seeing the carrot."
],[q("What does Nana clarify about the carrot?","Several children contributed to growing it","Amir planted it before the other children joined the project","The older children grew it without any help from Amir","較年長的學生先播種，Amir 也有幫忙澆水。","single-choice"),q("Why does Amir reconsider the phrase “my carrot”?","It overlooks the shared work behind the harvest","It understates his role in planting the whole bed","It makes the harvest sound larger than the photograph suggests","說成「我的紅蘿蔔」會忽略其他人的共同付出。","inference"),q("How does Nana think the photograph could interest Amir’s daughter?","It could lead to a story about cooperation across classes","It could show that Amir contributed more than the older pupils","It could establish that his class planted the garden alone","Nana 認為照片可帶出不同班別合作及分享收成的故事。","inference")]),
lesson(5,"The reusable cup trial",["Nell","Hassan"],[
 "The leisure centre wants to replace disposable cups with reusable ones for its weekend matches.",
 "That could cut waste, but who will wash and return them between games?",
 "The caterer has offered a washing service if the centre provides enough storage for clean cups.",
 "We should count the cups lost during a trial as well; replacing them often would reduce the benefit.",
 "I will propose a four-week trial and compare purchases, washing costs and waste with the current system.",
 "Include staff time too. A fair comparison needs the less visible work as well as the number of bins emptied."
],[q("What practical issue does Hassan raise first?","How cups will be washed and returned","How much the centre should charge spectators for the cups","Whether the caterer can supply more disposable cups","Hassan 首先問杯子如何在比賽之間清洗和歸還。","single-choice"),q("Why count lost cups during the trial?","Frequent replacement could reduce the environmental benefit","Lost cups would make the caterer’s storage unnecessary","The number lost would show how well each cup was washed","若經常遺失而須補購，可重用杯的環保效益便會減少。","inference"),q("What does Hassan imply about counting bins alone?","It would miss some of the work and costs involved","It would reveal exactly how many cups had been lost","It would make a comparison with disposable cups unnecessary","只計垃圾桶數量，會忽略清洗、員工時間等較不顯眼的工作和成本。","inference")]),
lesson(5,"Dust beside the building site",["Asha","Colin"],[
 "Dust from the building site has settled on our windowsills, particularly on dry afternoons.",
 "The contractor says it sprays the ground each morning, but perhaps that is not enough when the wind changes.",
 "Should we ask the council to stop the entire project immediately?",
 "First, record when the dust is worst and ask the site manager what further controls are possible.",
 "I will take dated photographs and invite the neighbours to note their observations separately.",
 "That should give the manager useful evidence, although the council may still need to investigate if the problem continues."
],[q("Why might the morning spray be insufficient?","Conditions can change later in the day","The contractor sprays only when residents complain","The spray is used indoors rather than on the ground","風向或日間情況改變，早上灑水未必足夠。","inference"),q("What will Asha collect?","Dated photographs and neighbours’ separate observations","A joint account that replaces all individual observations","Undated photographs of how the windows looked before work started","Asha 會拍下有日期的照片，並請鄰居各自記錄觀察。","single-choice"),q("Which statement best reflects Colin’s approach?","Try a documented local response, with council investigation if needed","Insist that the council stop the project before contacting the manager","Accept the morning spraying as sufficient despite further complaints","Colin 建議先記錄並找地盤經理處理；若問題持續，議會仍可能需要調查。","speaker-opinion")]),
lesson(5,"Sorting broken crockery",["Liam","Farah"],[
 "I have a ceramic bowl with a sharp broken edge and was about to put it in the glass recycling bank.",
 "The council guidance separates ceramics from glass because they melt differently during recycling.",
 "Could a charity shop use it for a mosaic, or would donating a sharp broken bowl create a problem?",
 "Ask a local craft group first and describe the damage; do not leave it at a shop without checking.",
 "If nobody can use it, I will wrap the sharp edges and follow the council’s disposal instructions.",
 "That avoids contaminating the glass collection while still giving the bowl a chance of being reused safely."
],[q("Why should the bowl stay out of glass recycling?","Ceramics behave differently from glass during processing","Ceramics are accepted only when they are unbroken","The council requires every damaged household object to be reused","陶瓷與玻璃在回收處理時的熔化方式不同。","single-choice"),q("What does Farah recommend before offering the bowl?","Ask a craft group and explain its condition","Leave it at the shop with a note instead of asking","Offer it to a group without mentioning the damage","Farah 建議先詢問手工藝團體，並說明碗的破損情況。","single-choice"),q("What is Liam’s fallback?","Wrap sharp edges and follow local disposal guidance","Use the glass bank once the sharp edges are wrapped","Leave it beside the recycling bank for someone else to use","若無人可用，他會包好銳利邊緣並按議會指引棄置。","single-choice")]),
lesson(5,"The school coach engine",["Mira","Paul"],[
 "Several coaches wait outside the school with their engines running before the afternoon trip.",
 "The drivers may be keeping the heating on, but the exhaust gathers near the entrance.",
 "Could we ask the school to move the waiting point away from the doors?",
 "That might help at the entrance but move the exhaust towards nearby houses. We should consider both.",
 "I will ask the coach company when engines need to run and whether drivers can switch them off while waiting.",
 "Then the school can choose an arrangement based on the actual constraints rather than simply shifting the problem."
],[q("What concern does Paul raise about moving the coaches?","The exhaust could affect nearby homes instead","The coaches would no longer be able to use heating","The new waiting point would necessarily make journeys longer","Paul 擔心搬遷等候地點只會把廢氣轉移到附近住宅。","single-choice"),q("What will Mira ask the coach company?","When engines are necessary and whether they can be switched off","Whether moving the coaches would make the trip cheaper","Whether the drivers could leave before pupils are ready","Mira 會詢問引擎何時必須運轉，以及等候時能否熄匙。","single-choice"),q("What principle guides their approach?","Investigate constraints and effects before choosing a solution","Choose a waiting point according to distance from the school alone","Ask the company to keep heating on without checking alternatives","他們希望先了解限制及對不同地點的影響，再選擇方案。","paraphrase")]),
lesson(6,"A public speaking competition",["Zara","Theo"],[
 "The library wants to run a public speaking competition with a prize for the best argument.",
 "How will the judges distinguish a strong argument from a confident performance?",
 "They could assess the evidence and reasoning separately from delivery, with the criteria available before entry.",
 "That would help. I would also give everyone the same preparation time rather than reward those who can improvise quickly.",
 "Should we let judges question each speaker afterwards to see whether they understand their evidence?",
 "Yes, provided the questions are comparable in difficulty. A challenging follow-up for one person and a simple factual check for another would undermine fairness."
],[q("What concern does Theo raise first?","Confidence could be mistaken for the quality of an argument","The prize may attract too many experienced judges","Speakers may all choose exactly the same evidence","Theo 擔心評審把自信的表現誤當成論證有力。","inference"),q("How would Zara make the judging clearer?","Publish separate criteria for reasoning and delivery","Let each judge decide privately what counts as a good argument","Award the prize to whoever answers most quickly","Zara 建議預先公布準則，把論證及表達分開評分。","single-choice"),q("What condition does Theo place on follow-up questions?","They should offer a comparable level of challenge","They should be identical even when the topics differ","They should be harder for less confident speakers","Theo 認為追問難度須相若，才不會令參賽者受到不公平對待。","speaker-opinion")]),
lesson(6,"The four-day working week",["Ellen","Musa"],[
 "Some firms have trialled a four-day working week, and I wonder whether every workplace should adopt one.",
 "It could improve work-life balance, but a hospital cannot simply close its wards for an extra day.",
 "Staff could work different days, although the employer might need more people to maintain coverage.",
 "Exactly. We need to know whether staff would work fewer hours or simply fit the same hours into longer days, and how services would be covered.",
 "I would compare staff wellbeing and service quality during a trial, rather than measuring only costs.",
 "And ask workers whether they are fitting the same workload into less time, since that could increase pressure."
],[q("Why does Musa mention a hospital?","Some services need coverage throughout the week","A shorter week necessarily means a service closes for an extra day","Hospital staff already have fewer working hours than other staff","醫院服務須持續運作，不能因縮短工作週便額外關閉一天。","inference"),q("What would Ellen assess during a trial?","Staff wellbeing and service quality as well as costs","The cost savings alone before considering staff experience","Whether staff can complete all their work without changing the rota","Ellen 會評估員工福祉、服務質素和成本。","single-choice"),q("What risk does Musa identify?","The same workload compressed into fewer hours may increase pressure","Maintaining coverage always means staff must work longer hours","Different working days prevent staff from coordinating their work","若工作量不變但集中在較少時間完成，壓力可能增加。","speaker-opinion")]),
lesson(6,"Inviting an expert to the panel",["Freya","Adeel"],[
 "Our residents’ panel is considering flood prevention, and I want to invite the engineer who designed the proposed scheme.",
 "Her expertise would be useful, though she also has an interest in the proposal being accepted.",
 "Would that mean she should not be allowed to speak at all?",
 "I would hear her explanation and declare her connection to the scheme, then invite someone independent to assess the assumptions.",
 "We should circulate the technical summary beforehand so residents can prepare questions instead of just hearing competing opinions.",
 "Agreed. Being open about someone’s role helps the audience evaluate a contribution; it does not make the contribution worthless."
],[q("Why does Adeel suggest an independent assessment?","The designer has expertise but also an interest in the outcome","The designer has no relevant knowledge of the scheme","The panel has already rejected every technical explanation","設計者雖有專業知識，但亦與方案能否獲接納有利益關係。","inference"),q("Why circulate the technical summary in advance?","Residents can prepare informed questions","Residents can avoid hearing the engineer’s explanation","The independent expert can make the final decision alone","預先發放技術摘要，能讓居民有資料作基礎準備問題。","single-choice"),q("Which statement best reflects Adeel’s position?","A declared connection should inform how evidence is assessed","A connection to a proposal makes every statement unreliable","Technical expertise removes the need to disclose an interest","Adeel 認為公開交代關係有助評估發言，並不代表內容全無價值。","paraphrase")]),
lesson(7,"Qualifying a comparison",["Examiner","Candidate"],[
 "You said village life is less stressful than city life. Does that apply to everyone?",
 "No, I should qualify that. It may be quieter for some people, but isolation or limited transport can create stress.",
 "Can you give an example of the transport problem?",
 "Someone working shifts might depend on a car if the last bus leaves before their workplace closes.",
 "So are you saying that cities always offer a better quality of life?",
 "Not always. My point is that the advantages depend on a person’s circumstances and the services available."
],[q("How does the candidate revise the original claim?","Village life may be quieter, but it can bring other pressures","Village life is less stressful whenever transport is available","City life is quieter for everyone who works shifts","候選人承認鄉村可能較寧靜，但也有交通和孤立等壓力。","paraphrase"),q("What example supports the revised view?","A shift worker may lack a suitable bus","A shift worker might need a car despite having a suitable late bus","A shift worker might find every city journey more stressful","輪班人士下班後可能沒有巴士可乘，因而需要依賴私家車。","single-choice"),q("What is the best summary of the final answer?","Quality of life depends on personal circumstances and services","Village residents benefit from quiet surroundings regardless of their needs","The quality of transport is the only factor in choosing where to live","生活質素取決於個人情況和可使用的服務，不能一概而論。","paraphrase")]),
lesson(7,"A condition on anonymous feedback",["Examiner","Candidate"],[
 "Your college proposes making all student feedback anonymous. Would you support that?",
 "It could help students raise concerns honestly, provided the feedback still gives teachers enough detail to act on.",
 "What if a comment simply says that a lesson was bad?",
 "I would ask the form to prompt for an example and a suggested improvement, without requiring the student’s name.",
 "Would teachers then be expected to accept every suggestion?",
 "No. They should explain what can change and why some requests cannot be met. Being heard is different from having every preference adopted."
],[q("What condition does the candidate attach to anonymity?","Comments should still contain useful detail","Every comment must identify the student’s classmate","Teachers must act on every suggestion they receive","考生認為匿名意見仍須有足夠細節，教師才可跟進。","single-choice"),q("How does the candidate address a vague negative comment?","Use prompts that ask for an example and an improvement","Remove anonymity so the teacher can challenge the student","Exclude all negative comments from the feedback form","考生建議表格提示學生提供例子及改善建議，同時保留匿名。","inference"),q("What distinction does the final answer make?","Listening to feedback does not mean implementing every request","Anonymous feedback is less honest than named feedback","A teacher’s explanation makes student feedback unnecessary","聆聽意見不等於接受每項要求，教師應交代能否改動及原因。","paraphrase")]),
lesson(7,"Defending a second-language requirement",["Examiner","Candidate"],[
 "You suggest that every college student should study another language. Would that suit everyone?",
 "I think it has value, but a compulsory advanced course could be unrealistic for students with different starting points.",
 "Suppose the college offers a short introductory course instead. Would that meet your aim?",
 "It could encourage students to try a language, although a few sessions would not make them fluent.",
 "How would you judge whether the course had succeeded?",
 "I would look at whether students could handle a simple exchange and wanted to continue, rather than compare them with advanced speakers."
],[q("How does the candidate qualify the original proposal?","The level and starting points need consideration","Every student should take the same advanced course","Language learning has no value outside specialist courses","考生認為學習語言有價值，但須考慮學生起點及課程程度。","paraphrase"),q("What limitation of an introductory course does the candidate recognise?","It cannot produce fluency in just a few sessions","It prevents students from studying the language further","It would require all students to be advanced already","短期入門課可鼓勵嘗試，但幾堂課不足以令人說得流利。","single-choice"),q("Which result would meet the candidate’s suggested measure of success?","Beginners manage a basic exchange and show interest in continuing","Beginners match the fluency of students with years of study","Beginners memorise advanced grammar without using the language","考生的準則是初學者能作簡單交流，並有意繼續學習。","inference")]),
lesson(8,"The changed theatre booking",["Visitor","Box office"],[
 "I booked two seats for Saturday, but your email says the performance has moved to Sunday afternoon.",
 "That is correct. Saturday’s performance was cancelled after a technical fault, and we offered Sunday as an alternative.",
 "I cannot attend then. Does the email mean I have already accepted the new date?",
 "No. You do not have to accept Sunday; you can request a refund or choose another available performance.",
 "Please refund both seats. I paid by card, so will it go back to the same account?",
 "Yes, the refund should reach the same account within ten working days. I will send confirmation now; please contact us if the money has not arrived after that."
],[q("What has the visitor misunderstood about Sunday’s performance?","They think an offered alternative may already count as acceptance","They think Saturday’s technical fault also cancelled Sunday","They think Sunday seats cost more than the original booking","訪客誤以為收到替代場次通知，就可能代表自己已接受改期。","inference"),q("What does the visitor choose?","A refund for both seats","Accept Sunday while requesting a partial refund","Keep the booking until another Saturday is available","訪客無法在星期日出席，因此要求退回兩張票的款項。","single-choice"),q("What should the visitor do if the refund has not arrived after ten working days?","Contact the box office","Treat the cancellation email as proof that the refund has arrived","Choose another performance before contacting the box office","退款一般十個工作天內退回原付款帳戶；若未收到，應聯絡售票處。","single-choice")]),
lesson(8,"A revised allotment rota",["Coordinator","Volunteer"],[
 "The allotment watering rota has changed because the tap near the gate is being repaired on Thursday.",
 "I am down for Thursday morning. Should I still come at nine?",
 "Yes, but use the tap beside the shed and water the seed beds first; the established plants can wait until Friday.",
 "I usually collect the key from the café. Will it be there as normal?",
 "Not this week. The café opens late, so collect the key from the library, which opens at eight. Please return it there before noon.",
 "I will collect it there before nine, water the seed beds using the shed tap, and return it to the library before noon."
],[q("Why has the rota changed?","The tap near the gate needs repair","The shed tap is being repaired on Friday","The seed beds no longer require watering","入口附近的水龍頭星期四要維修，因此澆水安排有變。","single-choice"),q("What does the revised watering instruction imply?","The seed beds are more urgent than the established plants","The established plants must be watered before Thursday","The gate tap should be used briefly before the repairs begin","協調員安排先澆育苗床，已長成的植物可等至星期五，表示育苗床較急需澆水。","inference"),q("Where will the volunteer collect and return the key?","At the library","Collect at the café and return to the library","Collect at the library and return to the shed","本星期須到八時開門的圖書館取鎖匙，並在中午前交回同一地點。","single-choice")]),
lesson(8,"The corrected course announcement",["Tutor","Student"],[
 "The course page says the field trip costs thirty pounds, but your announcement mentioned twenty-five.",
 "The page is out of date. The trip costs twenty-five pounds, including the coach but not lunch.",
 "Can I pay on the morning of the trip, or is there an earlier deadline?",
 "Please pay by next Wednesday so we can confirm the coach booking. A free packed lunch can be requested separately.",
 "I will submit the payment tomorrow and request the lunch today. Is the departure still at eight?",
 "It is now eight thirty from the college entrance. I will update the page and send the corrected details to everyone."
],[q("What does the corrected trip price include?","The coach journey","A packed lunch automatically supplied to everyone","The coach journey and a compulsory lunch charge","更正後的二十五鎊費用包括旅遊巴，但不包括午膳。","single-choice"),q("Why does the student need to take two separate actions?","The trip payment and the optional packed-lunch request are separate","The coach and lunch must both be paid for separately","The departure time will change only after payment and a lunch request","旅費包括旅遊巴，但午餐須另行申請；免費午餐不會自動提供。","inference"),q("What is the revised departure arrangement?","Eight thirty from the college entrance","Eight from the college entrance","Eight thirty from the coach station","出發時間改為八時三十分，地點是學院入口。","single-choice")])
]
