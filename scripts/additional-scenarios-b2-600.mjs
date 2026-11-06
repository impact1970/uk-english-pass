// Original B2 practice conversations; Sol editorial review completed before audio generation.
const q = (prompt, correct, d1, d2, explanation, type = 'single-choice') => ({prompt, options:[correct,d1,d2], answer:0, explanation, type})
const lesson = (u,t,s,x,qs) => ({l:'B2',u,t,s,x,qs,pending:false})
export const additionalB2Scenarios600 = [
lesson(0,'The open-book assessment',['Hana','Joel'],[
 'Our tutor says we may bring notes into the assessment, so I thought revision would be unnecessary.',
 'You will still need to apply the ideas quickly. Searching through a large folder could waste most of your time.',
 'Perhaps I should make an index rather than try to memorise every page.',
 'That would help, especially if you practise finding evidence for a sample question.',
 'I could also mark where different authors disagree, because the task asks us to compare approaches.',
 'Exactly. The notes are a resource, not a substitute for deciding which material is relevant.'
],[q('What does Joel imply about an open-book assessment?','Preparation still matters because time and selection are limited','An index is sufficient even without practising how to use the ideas','Memorising every page is safer than selecting relevant evidence','Joel 指出仍須熟悉內容及迅速選擇相關資料，並非可完全不用溫習。','inference'),q('Why does Hana plan to mark disagreements?','To help her compare the authors’ approaches','To decide which author she should quote in every answer','To replace the examples with a list of author names','題目要求比較不同方法，標記分歧有助她作比較。'),q('Which statement best expresses Joel’s final point?','Notes support judgement but cannot replace it','An index is more useful than practising','Only memorised material may be used','Joel 說筆記是資源，不能代替判斷哪些材料相關。','paraphrase')]),
lesson(0,'Changing the class debate',['Lena','Omar'],[
 'In our last debate, the same three people spoke while everyone else took notes.',
 'We could invite written questions first, then let pairs choose one to discuss before anyone addresses the room.',
 'Would that make the session too slow for the whole class to cover the topic?',
 'Possibly, so we could limit the pair discussion to five minutes and combine similar questions.',
 'I like that it gives quieter students time to form a view, although nobody should be forced to speak.',
 'Agreed. We can ask the tutor to try it once and collect feedback before changing every seminar.'
],[q('What problem are they trying to address?','Participation is concentrated among a few students','The tutor has removed all discussion time','The class lacks enough written material','Lena 指上次只有少數同學發言，因此希望改善參與情況。','single-choice'),q('How does Omar respond to the concern about time?','He suggests a time limit and grouping similar questions','He proposes cancelling the whole-class discussion','He wants each pair to answer every question','Omar 建議限制兩人討論時間，並合併相似問題。'),q('What does their final plan show?','They favour trying the idea before adopting it widely','They have decided that speaking must be compulsory','They believe the previous debate needs no improvement','他們先試行一次及收集意見，才決定是否廣泛採用。','inference')]),
lesson(0,'Learning from a marking guide',['Nisha','Ben'],[
 'The marking guide mentions clear reasoning, but it does not tell us exactly how many examples to include.',
 'I suspect the relevance of an example matters more than reaching a fixed number.',
 'Then could one detailed example be enough for an argument?',
 'It might be, provided it genuinely supports the claim and the task does not ask for a range of cases.',
 'I will ask the tutor about the range requirement rather than assume that every question is alike.',
 'Good idea. The guide gives principles, but the wording of each assignment still matters.'
],[q('What does Ben consider more important than a fixed number?','Whether the example supports the argument','Whether each example comes from a different country','Whether the guide lists an exact word count','Ben 認為例子是否切題比固定數量更重要。','speaker-opinion'),q('Under what condition might one example be insufficient?','When the assignment asks for a range of cases','Whenever it is explained in detail','When it supports the central claim','若作業要求涵蓋多個個案，一個例子可能不足。'),q('Why will Nisha contact the tutor?','To clarify a requirement that may vary between tasks','To ask the tutor to choose her argument','To challenge the entire marking system','Nisha 不想假設所有題目的要求一樣，因此會向導師確認。','inference')]),
lesson(0,'A placement reflection',['Ella','Marcus'],[
 'My placement report reads like a diary: I describe each day, but I am not sure what I learned.',
 'Could you choose one difficult moment and explain how your response changed as you understood it?',
 'There was a customer complaint that I initially passed to someone else without listening properly.',
 'That sounds useful. Include what you would do differently and why, rather than pretending you solved it alone.',
 'I was worried that admitting a mistake might make the report look weak.',
 'A thoughtful account of improvement can be stronger than a perfect story, provided you protect the customer’s identity.'
],[q('What is missing from Ella’s first draft?','Reflection on what she learned','A list of all her working hours','The customer’s full name','Ella 說報告只記錄每天發生的事，欠缺學習反思。','single-choice'),q('What does Marcus advise her to do with the complaint?','Explain the lesson and a different future response','Claim she resolved it without assistance','Publish identifying details to make the story convincing','Marcus 建議說明學到甚麼及將來如何改進，同時保護客人身分。'),q('What is Marcus’s view of admitting a mistake?','It can strengthen a thoughtful account of progress','It always makes a placement report fail','It matters only if the customer agrees to be named','Marcus 認為坦誠反思錯誤及改進，可以令報告更有深度。','speaker-opinion')]),
lesson(0,'Choosing peer comments',['Faye','Ravi'],[
 'My classmates gave opposite advice on the opening of my essay, so I do not know whom to follow.',
 'Before choosing, look at the reasons they gave and the purpose of your introduction.',
 'One reader wanted a shorter story; the other said the topic was still unclear.',
 'Those comments may not actually conflict. You could shorten the story and state the question earlier.',
 'I will revise it that way, then ask someone unfamiliar with the subject what they understand.',
 'That should test the result, although you will still need to decide whether it meets the assignment.'
],[q('Why does Ravi think the two comments can be combined?','The introduction can be shorter and clearer at the same time','Both readers requested a longer personal story','The readers agree that the story should be kept at its present length','縮短故事及提早交代主題可以同時做到，因此兩個意見未必矛盾。','inference'),q('What is Faye’s reason for asking a new reader?','To see whether the revised introduction communicates clearly','To confirm that the shorter version needs no further revision','To find out whether specialist readers prefer more background','她想測試不熟悉主題的人是否理解修改後的引言。'),q('What does Ravi say remains Faye’s responsibility?','Judging the revision against the assignment','Accepting every suggestion without change','Choosing the reader with the highest mark','Ravi 提醒她仍須自行判斷文章是否符合題目要求。')]),
lesson(0,'A science club demonstration',['Mila','Jonah'],[
 'The club wants a dramatic demonstration, but the experiment takes forty minutes before anything visible happens.',
 'Could you show a prepared result first and then explain how you obtained it?',
 'That might look as if we have skipped the difficult part of the process.',
 'Only if you conceal it. Label the prepared sample and show the steps with photographs and a timer.',
 'We could invite questions about what might have gone wrong during the wait as well.',
 'Yes, and keep the safety explanation. A shorter presentation should not hide the limits or precautions.'
],[q('What concern does Mila raise about showing a prepared result?','The audience might think the process was oversimplified','The result would take longer than the experiment','The audience might mistake the timer for part of the experiment','Mila 擔心先展示結果會令人覺得省略了困難步驟。'),q('How does Jonah suggest addressing that concern?','Clearly identify the sample and show the missing stages','Present the sample as a live result','Avoid mentioning how long the experiment takes','Jonah 建議標明樣本是預先準備，並以照片和計時器展示過程。'),q('What principle guides their revised presentation?','Make the demonstration concise without hiding limitations or safety','Remove all uncertainty so the result seems certain','Use a prepared sample without discussing the unsuccessful stages','他們希望縮短展示，同時如實說明限制和安全措施。','paraphrase')]),
lesson(1,'A neighbour’s quiet celebration',['Jas','Peter'],[
 'The family next door has invited us to a celebration, but they said it will be a quiet gathering this year.',
 'Then perhaps we should not assume there will be music or a large meal just because there was one before.',
 'I had already thought of bringing a loud party game for the children.',
 'You could ask whether a small activity would be welcome, and let them decide what suits the occasion.',
 'That feels more considerate than arriving with a plan everyone has to follow.',
 'Exactly. Traditions can change for personal reasons, and an invitation does not explain all of them.'
],[q('Why does Peter question Jas’s assumption?','A familiar celebration may be organised differently this year','The neighbours are asking guests to arrange the entertainment','The previous event was quieter than Jas remembers','鄰居已說今年會低調慶祝，過往形式未必適用。'),q('What does Peter recommend about the game?','Ask the hosts whether an activity would suit them','Bring it and insist that everyone plays','Choose a game based on what was popular at last year’s gathering','Peter 建議先問主人家是否歡迎小活動，讓他們決定。'),q('What does the final exchange suggest?','Respecting a custom includes allowing for personal circumstances','Traditions must be identical in every household','A quiet event cannot be a celebration','對話指出傳統可因個人情況改變，尊重主人家的選擇也很重要。','inference')]),
lesson(1,'The borrowed umbrella',['Iris','Kareem'],[
 'Our visitor left her umbrella here, and my father says returning it in person is the polite thing to do.',
 'That could be kind, but she lives across town and may prefer us to bring it next time we meet.',
 'Would asking make the gesture seem less generous?',
 'I do not think so. Offering both options lets her choose without creating an unexpected visit.',
 'I will message her and say we are happy to drop it off if that is useful.',
 'Good. Courtesy is not only the intention; it is also considering what is convenient for the other person.'
],[q('What concern does Kareem have about returning the umbrella immediately?','An unplanned visit may be inconvenient','The umbrella may not belong to the visitor','Offering delivery might imply that the umbrella was a gift','他認為突然拜訪未必方便對方，並非反對歸還。'),q('How will Iris handle the situation?','Offer to deliver it while letting the visitor choose','Leave it outside the visitor’s home without warning','Wait without contacting the visitor','Iris 會傳訊息表示樂意送回，讓對方選擇。','single-choice'),q('What does Kareem think courtesy involves?','Considering the recipient’s convenience as well as good intentions','Following one rule regardless of the circumstances','Avoiding all direct communication with visitors','他認為禮貌除了出於好意，也要考慮對方是否方便。','speaker-opinion')]),
lesson(1,'An anniversary programme',['Clara','Imran'],[
 'The association usually begins its anniversary with a long formal speech, but several newer members suggested a shorter welcome.',
 'Some older members may value that speech because it records the group’s history.',
 'Could we keep a brief introduction and put the full history in a printed programme?',
 'That seems a useful compromise, provided we ask the people who prepare the speech first.',
 'We should also offer the programme online for anyone who cannot attend.',
 'Yes. Changing a custom can preserve its purpose if the people involved help decide how.'
],[q('Why might some members want to retain the speech?','It preserves the association’s history','It gives newer members an opportunity to lead the welcome','It is shorter than the introduction in the printed programme','Imran 指演講記錄團體歷史，故部分成員可能重視它。'),q('What compromise does Clara propose?','Give a shorter welcome and provide the full history separately','Remove the history from the event entirely','Replace the printed history with a longer formal speech','Clara 建議縮短開場，並在節目單保留完整歷史。','paraphrase'),q('What does Imran consider necessary before changing the custom?','Consulting the people involved in preparing it','Asking only those who joined recently','Assuming that everyone values the same format','他認為要先詢問負責準備演講的人。')]),
lesson(1,'Names on the invitation',['Tariq','Beth'],[
 'The invitation lists the whole household, but I am not certain whether that includes my cousin, who is staying for a month.',
 'Rather than deciding for the hosts, you could explain the situation and ask if there is room.',
 'I worry the question might make them feel obliged to invite her.',
 'You can make it easy to decline by saying you understand if the numbers are fixed.',
 'That sounds fair. I will check before telling my cousin she is included.',
 'And if there is no space, it does not necessarily mean she is unwelcome personally.'
],[q('Why is the invitation ambiguous to Tariq?','He is unsure whether a temporary guest counts as part of the household','His own name is missing from the invitation','The event date has not been announced','Tariq 不確定暫住一個月的表親是否包括在「全家」之內。','single-choice'),q('How can he avoid putting pressure on the hosts?','Acknowledge that fixed numbers may prevent an extra guest','Tell his cousin that a place is guaranteed','Ask the hosts to change the venue','Beth 建議表明理解名額可能固定，讓主人家可以婉拒。'),q('What does Beth imply if the answer is no?','A refusal may reflect limited capacity rather than personal dislike','The invitation to Tariq must also be cancelled','The hosts have broken an established rule','Beth 指沒有空位不一定代表主人家對表親有意見。','inference')]),
lesson(1,'The welcome table',['Mei','Alec'],[
 'At the welcome table we usually offer tea straight away, but a visitor seemed unsure whether she could refuse.',
 'Perhaps we should say that water is available too and that it is perfectly fine to take nothing.',
 'Would listing choices make our greeting feel less warm?',
 'Not if we say it naturally. It gives people room to respond according to their needs.',
 'We could also label the drinks, since not everyone will recognise the ingredients.',
 'That would make the custom easier to join without assuming that every guest has the same preferences.'
],[q('What did Mei notice about a visitor?','She appeared uncertain about declining tea','She asked the organisers to remove every drink','She had brought a recipe for the table','Mei 留意到訪客似乎不確定能否拒絕茶。','single-choice'),q('Why does Alec suggest offering alternatives?','To let guests choose without feeling pressured','To prevent anyone from accepting tea','To make the greeting more formal','提供選擇及容許不喝，能減少客人被迫接受的壓力。'),q('What is the purpose of labelling drinks?','To help guests make informed choices about ingredients','To require every guest to taste each drink','To replace the verbal welcome entirely','標示飲品可讓不認識材料的客人自行作出選擇。')]),
lesson(1,'Explaining the harvest custom',['Sofia','Neil'],[
 'For the village exhibition, I have written that every family used to leave a sheaf of corn outside the church.',
 'Our archive shows several households doing that, but it does not establish that everyone joined in.',
 'My uncle remembers it as something the whole village did together.',
 'He may mean it felt like a shared occasion. Could you present his memory alongside what the records show?',
 'Then I could write that it was a familiar local custom, with a separate quotation from him.',
 'Yes. That preserves his experience without turning one recollection into a claim about every household.'
],[q('What weakness does Neil identify in Sofia’s first account?','It treats evidence about some households as evidence about all of them','It places the custom at a different church from the archive','It ignores a record showing that the custom never happened','檔案只證明部分家庭參與，未足以支持「每家每戶」都參加。','inference'),q('How does Neil suggest using the uncle’s memory?','Present it as his experience alongside the archive evidence','Use it to correct every household entry in the archive','Remove it unless it agrees with every written record','Neil 建議把叔叔的個人回憶與檔案證據一同呈現。'),q('What does the revised wording achieve?','It recognises the custom without overstating how widely it was practised','It proves the custom had the same meaning for every resident','It replaces the archive with an account from one participant','改稱熟悉的本地習俗，既保留傳統的重要性，也避免誇大參與人數。','inference')]),
lesson(2,'A mobile dental clinic',['Leah','Gareth'],[
 'The council is considering a mobile dental clinic for villages where appointments are difficult to reach.',
 'That would save some journeys, although one vehicle cannot provide every specialist service.',
 'The proposal says it will visit twice a month and refer complicated cases to the town clinic.',
 'Then the timetable matters. People who work shifts may still struggle if every visit is on a Tuesday.',
 'I will suggest alternating weekdays when the council asks for feedback.',
 'That would help them test whether the service is accessible in practice, not just close on a map.'
],[q('What limitation does Gareth identify?','The mobile clinic cannot offer every specialist service','The clinic will provide specialist treatment only at its first visit','Its visits will remove the need for referrals to the town','Gareth 指一輛流動診所無法提供所有專科服務。','single-choice'),q('Why does Leah suggest alternating weekdays?','To make visits usable for people with different work patterns','To reduce the number of villages served','To ensure all referrals happen on Tuesdays','輪流使用不同星期的日子可幫助輪班人士使用服務。'),q('What does Gareth mean by accessible in practice?','A nearby service must also be available at suitable times','Distance is the only factor that matters','Everyone should travel to the town clinic instead','他指出地點接近仍不足夠，時間亦須適合使用者。','paraphrase')]),
lesson(2,'The converted upper floor',['Nadia','Ross'],[
 'The old shop in our village may become flats above a smaller grocery on the ground floor.',
 'That could bring residents into the centre, but I wonder whether deliveries will block the narrow pavement.',
 'The drawings show a rear entrance, though the planning notice does not say when deliveries would happen.',
 'We should ask for a delivery plan before deciding whether to support the application.',
 'I like the idea of keeping a shop, so I do not want our concern to sound like automatic opposition.',
 'Then say that clearly: we support the aim but need practical details about access.'
],[q('What benefit does Nadia see in the proposal?','A grocery could remain in the village centre','All deliveries would be prohibited','The rear entrance would remove the need for any delivery restrictions','她支持保留一間商店，並認為住宅可為中心帶來居民。'),q('Why do they want a delivery plan?','The drawings do not establish how access will work at delivery times','They want to prevent any grocery from opening','The rear entrance has already been rejected','圖則有後門，但尚未說明送貨時間及實際通道安排。','inference'),q('How would Ross phrase their response?','Support the aim while requesting practical information','Oppose the proposal without examining it','Promise that deliveries will never cause problems','Ross 建議表明支持目標，同時要求了解通行細節。','paraphrase')]),
lesson(2,'The evening footpath',['Erin','Mo'],[
 'The path from the new housing estate to the station is shorter than the main road, but it is unlit after dusk.',
 'Adding lights might help, though residents nearby are concerned about light shining into their bedrooms.',
 'Could the lights point downwards and switch on only when someone approaches?',
 'Perhaps, but we would need to check whether the sensors work for cyclists and wheelchair users too.',
 'I will ask for a trial on one section rather than assume the design solves everything.',
 'Include residents and path users in that trial; they may notice different problems.'
],[q('What trade-off are they discussing?','Improving visibility while limiting disturbance to nearby homes','Keeping the path completely dark in order to preserve residents’ privacy','Replacing the shorter path with a wider route beside the main road','加設照明可改善安全，但附近居民擔心燈光影響睡房。','paraphrase'),q('Why does Mo mention different path users?','The proposed sensors need to work for a range of people','Only cyclists are allowed on the path','Wheelchair users have requested a road closure','Mo 希望確認感應器對單車使用者和輪椅使用者都有效。'),q('What would the trial allow them to do?','Gather different users’ observations before deciding on the design','Guarantee that no lighting will ever disturb residents','Avoid asking residents for their views','試行讓居民及使用者指出不同問題，再評估設計。')]),
lesson(2,'A shared laundry room',['Grace','Hamid'],[
 'Our block has a shared laundry, but people often leave their clothes in the machines after the cycle ends.',
 'A message when the cycle finishes might help, although not everyone uses a smartphone.',
 'The caretaker suggested a paper booking sheet, but that would not tell us when a machine actually stops.',
 'Could we use both a simple timer display in the room and optional messages?',
 'That seems fair, as long as the display is readable and the messages are not required.',
 'We could monitor whether delays improve for a month before paying for a permanent system.'
],[q('Why does Hamid hesitate over app messages alone?','Some residents do not use smartphones','Messages would make machines stop early','The caretaker has forbidden electronic displays','Hamid 指出並非每位住客都有使用智能手機。'),q('What does the combined approach provide?','An in-room display as well as optional notifications','A compulsory app and no booking information','A booking sheet combined with compulsory phone reminders','方案同時提供房內計時顯示和自願接收訊息。','paraphrase'),q('Why do they propose monitoring the trial?','To see whether the change reduces delays before spending further','To remove access to the laundry during the month','To prove that all residents own phones','先觀察延誤有否改善，才決定是否支付永久系統的費用。')]),
lesson(2,'The rural cinema screen',['Asha','Tom'],[
 'A village hall wants to show films once a month, but the nearest cinema worries it will lose customers.',
 'The hall is twenty miles away, and the proposal targets people who cannot easily travel in the evening.',
 'Even so, it might be worth asking the cinema whether it would help choose or supply films.',
 'A partnership could work, provided the screening fees and responsibilities are agreed in advance.',
 'The village should also check whether enough volunteers can operate the equipment safely.',
 'Yes. Good intentions alone will not keep the screenings running if nobody can manage them.'
],[q('Why might village screenings serve a different audience?','Some residents cannot easily travel to the cinema in the evening','The cinema has announced its permanent closure','The village hall will show films every day','村民晚上不易前往二十英里外的戲院，因此可能服務不同觀眾。'),q('What condition does Tom attach to a partnership?','Agree fees and responsibilities beforehand','Let either organisation change the terms without discussion','Make all screenings free regardless of costs','Tom 認為合作前應先商定放映費和各方責任。'),q('What additional issue could affect long-term operation?','Whether enough volunteers can safely run the equipment','Whether the partnership can supply films without trained local operators','Whether villagers would prefer weekly screenings at the town cinema','活動能否持續亦取決於是否有足夠義工安全操作設備。')]),
lesson(2,'A city rooftop garden',['Victor','Mina'],[
 'The rooftop garden looks attractive, but I wonder who will maintain it once the opening photographs are taken.',
 'The building manager has offered some staff time, and a residents’ group wants to help with planting.',
 'Volunteers are valuable, though they may not be able to inspect drains or repair safety barriers.',
 'The draft budget includes a professional inspection twice a year, but it does not cover extra repairs.',
 'Then residents should see the likely costs before they vote on the project.',
 'Agreed. We can support the idea while asking for a realistic plan for the years after opening.'
],[q('What distinction does Victor make about maintenance?','Volunteers may plant, but some safety tasks need specialist work','Residents should be responsible for all structural repairs','The residents’ group has offered to fund every future repair','Victor 指義工可協助種植，但排水及安全圍欄可能需要專業處理。','paraphrase'),q('What gap does Mina identify in the budget?','Extra repair costs are not covered','No professional inspections are planned','There is no money for an opening photograph','預算包含每年兩次專業檢查，卻未包括額外維修。','single-choice'),q('What is their shared position?','They support the idea subject to a credible maintenance plan','They oppose any resident involvement','They want a vote before residents see the costs','他們支持構思，但要求有切實可行的長期保養計劃。','speaker-opinion')]),
lesson(3,'The honey subscription',['Holly','Dinesh'],[
 'The beekeeper is offering a subscription with one jar each month, but this year the early harvest was unusually small.',
 'Can she promise twelve local jars before she knows how the later harvest will turn out?',
 'She suggests smaller jars if necessary, or a credit towards next season when there is not enough honey.',
 'Those are different offers. Customers should choose whether they want less honey now or to wait for their full amount.',
 'I will ask her to put both options in the order form before taking payments.',
 'That should help. A subscription can support production without leaving customers uncertain about what happens after a poor harvest.'
],[q('What uncertainty affects the subscription?','The final harvest may not supply the promised amount','The beekeeper has not decided which county to sell in','Customers have already rejected monthly deliveries','早期收成偏少，全年能否提供承諾的蜜糖份量仍不確定。','inference'),q('Why does Dinesh distinguish smaller jars from a future credit?','They meet different preferences about quantity and waiting','The two options must always cost exactly the same','Either option guarantees a larger harvest next season','少量即時供應和等候下季有不同取捨，應讓顧客選擇。','inference'),q('What should be done before collecting payment?','Explain the alternatives on the order form','Promise the usual jar size regardless of the harvest','Choose the credit option for every customer','Holly 會要求先在訂購表寫清楚兩個選項，才收款。')]),
lesson(3,'An order of linen aprons',['Paula','Reece'],[
 'The local workshop can make our café aprons for September, but the plain fabric is available a month earlier than the striped one.',
 'Do we need matching aprons for the opening, or could the kitchen use plain ones first?',
 'The manager likes a consistent appearance, although customers rarely see the kitchen team.',
 'Then ask whether consistency matters across the whole staff or mainly at the counter.',
 'We could place a smaller first order, provided the workshop can repeat the colour later.',
 'Check that before splitting it. A later batch may differ slightly, even when it uses the same fabric description.'
],[q('What is the main reason to consider plain fabric?','It can be supplied earlier','It is confirmed to cost less','It is made by a different local workshop','素色布料較早有貨，但對話未確認價格較低。'),q('What does Reece want the manager to clarify?','Which staff need to have the same appearance','Whether customers can enter the kitchen','Why the café employs both kitchen and counter staff','Reece 希望先釐清統一外觀是否適用於所有員工，還是主要指櫃枱員工。'),q('What risk would splitting the order create?','Aprons from a later batch might not match exactly','The workshop would necessarily miss the September deadline','Striped aprons would no longer be available','即使布料描述相同，不同批次的顏色仍可能有些微差異。','inference')]),
lesson(3,'Selling surplus herbs',['Anya','Colin'],[
 'The community greenhouse has more herbs than its volunteers can use, so we are considering selling small bundles.',
 'That could cover seed costs, but fresh herbs spoil quickly if the market is quiet.',
 'We could take advance orders and harvest only what has been requested.',
 'Good, although leave a small amount for people who cannot order online.',
 'A paper order list at the library might help too, and we could donate any safe surplus afterwards.',
 'Let us check the market’s food-handling rules before promising how the bundles will be packed.'
],[q('What problem are advance orders intended to reduce?','Harvesting more herbs than can be sold fresh','The need to grow herbs in a greenhouse','The cost of a permanent supermarket building','預訂可讓義工按需要採收，減少新鮮香草賣不出的浪費。','inference'),q('Why does Colin suggest keeping some herbs for the market?','Some customers cannot place orders online','Online orders are not permitted at all','The greenhouse has no way to harvest in advance','Colin 考慮到部分人不能網上訂購。'),q('What must they establish before finalising packaging?','The market’s food-handling requirements','Whether advance orders must close before the market opens','Whether the library can store every bundle until collection','包裝前應先確認市集的食物處理規定。')]),
lesson(3,'A repaired fishing net',['Rory','Elif'],[
 'A local maker wants to turn worn fishing nets into bags and says the material would otherwise be discarded.',
 'That sounds promising, but are the nets beyond repair or simply inconvenient for the original owner to store?',
 'The maker says usable nets will be offered to fishing groups first, and damaged ones will be cleaned for the bags.',
 'That order makes sense. Keeping a net in use could save more material than converting it immediately.',
 'We should ask how cleaning is handled too, because the process may use water and energy.',
 'Yes. Reuse has benefits, but a clear description helps people judge the whole process.'
],[q('Why does Elif ask whether the nets can be repaired?','Keeping a usable net in service may be preferable to converting it','Fishing groups might prefer new nets even when the old ones remain usable','Converting a usable net might require less cleaning than repairing it','Elif 認為可用漁網繼續使用，可能比立即改造成袋更節省材料。'),q('What happens to usable nets under the maker’s plan?','They are offered to fishing groups before conversion','They are automatically cut up for bags','They are stored without anyone being offered them','製作者會先把仍可用的漁網提供給漁業團體。','single-choice'),q('Why do they want information about cleaning?','To consider resources used as well as potential reuse benefits','To show that all reused materials have no environmental impact','To confirm that all damaged nets use the same amount of energy to clean','清洗也可能消耗水和能源，因此需要整體評估。','inference')]),
lesson(3,'Craft labels at the market',['Sian','Arun'],[
 'Several stalls use the phrase handmade locally, but some assemble imported parts while others make every part here.',
 'Both may involve local work, although customers might expect the same process from that phrase.',
 'Would it help to describe the main steps on a small card at each stall?',
 'Yes, if sellers can explain honestly which parts they make and which they buy in.',
 'We could provide a shared template without insisting that everyone follows the same production method.',
 'That would make comparison easier while leaving room for different kinds of craftsmanship.'
],[q('Why might the same label confuse customers?','Different sellers use different degrees of local production','Every stall sells identical imported products','Customers may already know which imported parts each maker uses','「本地手製」可能涵蓋不同程度的本地製作，客人未必知道差異。','inference'),q('What is the purpose of the proposed cards?','Explain how each product is made and where bought-in parts are used','Force every stall to manufacture identical products','Replace conversations with customers altogether','卡片可說明製作步驟及哪些零件是外購。'),q('What does Arun value in the shared template?','Clear comparison without demanding one production method','A guarantee that every component is local','A way to prevent sellers discussing their work','統一格式有助比較，同時容許不同工藝方式。','speaker-opinion')]),
lesson(3,'The mushroom delivery',['Rina','Paul'],[
 'The restaurant wants mushrooms from a small nearby grower, but the grower can deliver only on Wednesdays.',
 'Could the chef design a special for Thursday, when the mushrooms are freshest?',
 'Possibly, although demand varies and unsold mushrooms may not keep until the following week.',
 'Then the restaurant could agree a modest regular order and adjust it after seeing how much is used.',
 'The grower also asked for two days’ notice of changes, so they can plan the harvest.',
 'That sounds workable if both sides review the quantities rather than promising a large order immediately.'
],[q('What concern does Rina raise?','A large order may not sell before the mushrooms spoil','The grower cannot deliver on any weekday','The chef refuses to use fresh ingredients','需求不穩定，大量蘑菇可能在售出前變壞。'),q('Why does the grower want notice of changes?','To plan the harvest','To avoid communicating with the restaurant','To make every delivery a week late','種植者需要時間計劃採收。','single-choice'),q('Which arrangement do they favour?','Start with a modest order and review quantities together','Commit immediately to the largest possible order','Wait until the mushrooms spoil before ordering','他們建議先少量定期訂購，再根據實際用量調整。','speaker-opinion')]),
lesson(4,'The school time capsule',['Poppy','Evan'],[
 'At the reunion they opened our school time capsule. My letter said I wanted to be a gardener, which surprised me.',
 'You often say you had always planned to become a nurse. How old were you when you wrote it?',
 'Only eight. I remember enjoying the school garden, but I thought nursing had been my ambition even then.',
 'Perhaps your later decision has become the beginning of the story you tell about yourself.',
 'The letter does not make that decision less important; it just shows there were other interests before it.',
 'Exactly. You can keep the career story while giving your younger self more than one possible future.'
],[q('Why does the letter surprise Poppy?','It reveals an early ambition different from the one she usually recalls','It describes a career she has already retired from','It was written much later than she remembered','信中寫她想做園丁，與她一直說自己從小想做護士的記憶不同。'),q('What explanation does Evan suggest?','A later decision may have shaped her account of earlier years','The school probably placed another pupil’s letter in the capsule','The letter proves she never enjoyed nursing','Evan 推測她後來的職業選擇可能影響了她對童年的敘述。','inference'),q('How does Poppy interpret the new evidence?','It adds an earlier interest without diminishing her later choice','It means her later choice was based on a false qualification','It establishes that gardening was her only serious ambition','Poppy 認為信件補充了早期興趣，並沒有削弱後來選擇護士的重要性。','speaker-opinion')]),
lesson(4,'The first solo errand',['Marta','Chris'],[
 'I remember being sent to buy bread alone and feeling that the shop was very far from home.',
 'When we walked past it last year, it seemed only a few minutes away.',
 'Perhaps the journey felt longer because I had never crossed that road without an adult.',
 'That sounds possible, though the route may have changed since then.',
 'Either way, I still remember the pride of bringing the right loaf back.',
 'The feeling can be real even when the exact distance or route is difficult to reconstruct.'
],[q('Why might the journey have seemed long to Marta?','It was unfamiliar and she was travelling alone','The shop was certainly in another town','She had to carry several heavy bags','Marta 推測第一次獨自過馬路令路程感覺較長。'),q('What alternative does Chris mention?','The route might have changed','The shop may never have existed','The bread was probably delivered','Chris 提出路線其後可能改變。','single-choice'),q('What distinction does Chris make?','An emotion can be remembered even if practical details are uncertain','The journey must have been short in every year','Feelings are always more precise than maps','即使距離或路線未能確定，她記得的自豪感仍然可以是真實的。','paraphrase')]),
lesson(4,'The sewing tin',['Dawn','Yusuf'],[
 'I found my grandmother’s sewing tin, and the smell reminded me of sitting beside her after school.',
 'Do you remember learning to sew, or mainly watching her work?',
 'Mostly watching. I used to think I made the blue cushion, but my aunt says I only chose the buttons.',
 'You could have helped in that smaller way and later remembered the whole project as yours.',
 'I like that explanation, though I cannot be certain without asking my grandmother.',
 'The buttons still mattered to the finished cushion, even if someone else did the stitching.'
],[q('What triggered Dawn’s memory?','Finding the sewing tin and noticing its smell','Seeing a new cushion in a shop','Receiving a letter from her grandmother','縫紉盒的氣味令 Dawn 想起童年放學後陪伴祖母。','single-choice'),q('What difference exists between Dawn’s memory and her aunt’s account?','Dawn recalls making the cushion; her aunt remembers her choosing buttons','Dawn remembers buttons; her aunt denies there was a cushion','Both agree Dawn completed every stitch alone','Dawn 以為自己做了整個靠墊，姨媽則記得她只選了鈕扣。'),q('What does Yusuf suggest about the smaller contribution?','It still played a part in the finished item','It proves the aunt’s memory is definitely correct','It has no connection to the cushion','Yusuf 指出即使只選鈕扣，也對完成品有貢獻。','paraphrase')]),
lesson(4,'A playground rule',['Kofi','Lily'],[
 'At my old school we played a game where the person who was caught chose the next activity.',
 'That differs from the version I knew, where the winner chose.',
 'I wonder whether our class changed the rule so that younger children could take part more easily.',
 'Possibly, but it could simply have been the version your teacher learned.',
 'I will ask a former classmate before writing that explanation in our reunion booklet.',
 'Even then, call it a recollection unless someone finds a written rule from the time.'
],[q('How did Kofi’s version differ from Lily’s?','The caught player, rather than the winner, chose the next activity','Nobody was allowed to choose the next activity','Only teachers could take part in the game','Kofi 的版本由被捉到的人選下一項活動，Lily 的版本則由勝出者選擇。'),q('Why does Lily suggest describing the explanation as a recollection?','The reason for the rule is not yet established','Written rules never provide any evidence','The game was played at a different school last week','他們尚未知道規則的真正來源，應把推測或回憶說清楚。','inference'),q('What does Kofi intend to do before writing?','Ask a former classmate about the game','State his theory as a proven fact','Remove every mention of the reunion','Kofi 打算先問舊同學，才寫入紀念冊。','single-choice')]),
lesson(4,'The ferry crossing',['Bea','Malik'],[
 'My earliest holiday memory is a rough ferry crossing, though my parents remember a calm sea.',
 'Were you frightened of boats at the time? That might have made small movements feel dramatic.',
 'I was, but my brother says the crossing was delayed by wind on another trip.',
 'Perhaps details from two journeys have become connected. Do your parents still have their travel dates?',
 'They kept the tickets, so we might compare the dates with my brother’s photographs.',
 'It would be interesting to check, without assuming that any one person remembers the whole story perfectly.'
],[q('What might explain Bea’s vivid recollection of a rough crossing?','Fear may have made ordinary movement feel more dramatic','Her parents definitely travelled on a different ship','The ferry was cancelled before she boarded','Malik 推測她當時怕船，小幅搖晃也可能令她感覺強烈。'),q('What evidence might help distinguish the trips?','Tickets and dated photographs','A new ferry timetable alone','A description of an unrelated holiday','船票日期與照片可能有助區分兩次旅程。','single-choice'),q('What approach does Malik recommend?','Compare evidence while accepting that memories may be incomplete','Treat Bea’s memory as certainly false','Assume the delay proves both trips had rough seas','Malik 建議比較證據，同時承認每個人的記憶都可能不完整。','speaker-opinion')]),
lesson(4,'The school assembly song',['Maya','Theo'],[
 'I can still sing the chorus from our school assembly, but I cannot remember the rest of the words.',
 'I remember a different chorus, even though we attended the same school.',
 'We were there three years apart, so perhaps the music changed between us.',
 'Or one of us is combining it with a song from another occasion.',
 'The school archive has old programmes, though they may name the song without printing its lyrics.',
 'They could still give us a clue. We should avoid filling in missing words simply because they sound familiar.'
],[q('Why could Maya and Theo remember different songs accurately?','The school’s music may have changed between their years there','The programmes show that both attended the same assembly','The archive contains separate versions of every lyric','兩人相差三年入學，學校歌曲可能已改變。','inference'),q('What limitation might the programmes have?','They may identify the song without giving the words','They may give the words without naming the song','They may describe the songs that pupils wrote themselves','舊節目單可能只列歌名，沒有歌詞。'),q('What does Theo warn against?','Inventing missing words on the basis of familiarity','Assuming every programme contains the complete lyrics','Relying on the archive to establish when the school opened','Theo 提醒不要因某些字聽起來熟悉，就自行補作缺失的歌詞。')]),
lesson(5,'Refilling printer cartridges',['Eve','Samir'],[
 'Our office wants to refill printer cartridges instead of buying new ones every time.',
 'That could reduce waste, but we should check whether the supplier accepts cartridges that can no longer be refilled.',
 'The quotation includes collection, though it does not explain what happens after a cartridge fails inspection.',
 'Ask for a written account of reuse and recycling, rather than relying on the word sustainable.',
 'We should also run a small print-quality trial before replacing the current contract.',
 'Agreed. A greener option still needs to work well enough that staff do not reprint everything.'
],[q('What information is missing from the quotation?','What happens to cartridges that cannot be refilled','The day the office opened','The names of all printer users','報價沒有說明不合格墨盒在收集後如何處理。','single-choice'),q('Why do they want a print-quality trial?','Poor results could lead to wasteful reprinting','They intend to stop using paper immediately','They already know the new supplier is unreliable','若列印效果差而要重印，可能抵銷減廢好處。','inference'),q('What does Samir want from the supplier?','Specific evidence about reuse and recycling','A general environmental slogan only','A promise that every cartridge lasts forever','Samir 希望取得具體的重用和回收安排，而非只看籠統宣傳。','paraphrase')]),
lesson(5,'A shaded school courtyard',['Chloe','Dev'],[
 'The school plans to plant trees in the courtyard to provide shade during hotter weather.',
 'That sounds useful, although the young trees will need water and protection while they become established.',
 'The first proposal sets money aside for planting but nothing for care after the first summer.',
 'Could the parent group help, with a caretaker checking that the work is done safely?',
 'Perhaps, but the school should budget for periods when volunteers are unavailable.',
 'Yes. The environmental benefit depends on the trees surviving, so maintenance belongs in the plan.'
],[q('What gap does Chloe identify in the proposal?','It lacks a plan for care beyond the first summer','It provides no space for any trees','It requires the school to remove the courtyard','方案為種樹預留資金，卻沒有安排第一個夏天後的照顧。'),q('Why might volunteers alone be insufficient?','They may not always be available','They are forbidden to help with plants','They can guarantee the trees need no water','義工未必任何時間都能幫忙，因此學校仍需預算。'),q('What does Dev mean by including maintenance?','Long-term care is needed for the trees to provide the intended benefit','Planting photographs are enough to measure success','The school should wait until all trees are fully grown before planning','樹木要存活才能提供預期的遮蔭和環境效益。','paraphrase')]),
lesson(5,'The water bottle deposit',['Amal','Iain'],[
 'The sports centre is considering a deposit on reusable water bottles sold at events.',
 'A deposit might encourage returns, but only if people know where and when to bring the bottles back.',
 'The desk closes before some evening classes finish, so that could be a problem.',
 'A secure return box might help, provided staff can identify returned bottles and refund deposits fairly.',
 'We should test the process at one event and record how many bottles come back.',
 'And ask customers why they did not return them; the number alone may not explain the barrier.'
],[q('What practical obstacle does Amal identify?','The return desk closes before some classes end','All bottles must be returned before purchase','The centre has no evening classes','部分晚間課堂結束時，退瓶櫃枱已關閉。','single-choice'),q('What must a return box allow staff to do?','Identify returns and issue refunds fairly','Guarantee that bottles never need cleaning','Close the centre earlier','退瓶箱須令職員能確認退還並公平退回按金。'),q('Why ask customers about non-returns?','The return count alone may not reveal the reasons','A survey can replace counting the bottles','All customers are already known to dislike deposits','單看回收數字未必知道障礙，詢問原因可補足資料。','inference')]),
lesson(5,'Noise from a new fan',['Hugo','Lina'],[
 'The restaurant installed an energy-efficient extraction fan, but the neighbours say it is noisy at night.',
 'Saving energy is worthwhile, yet it does not remove the need to deal with the noise.',
 'The engineer suggests a quieter setting, although it may extract less air during the busiest hour.',
 'Could they measure both ventilation and noise at different settings before deciding?',
 'Yes, and the restaurant should tell neighbours when the tests will take place.',
 'That way the decision can consider working conditions and nearby residents, rather than guessing about either.'
],[q('What trade-off does the quieter setting introduce?','It may reduce extraction during the busiest period','It would automatically close the restaurant','It increases daylight in neighbouring homes','較安靜設定可能在繁忙時段減少抽風量。','paraphrase'),q('Why does Lina suggest measuring both factors?','To judge ventilation and noise using evidence','To avoid speaking to the neighbours','To prove that energy use is irrelevant','同時量度通風和噪音可根據證據作決定。'),q('How should the restaurant involve neighbours?','Tell them when the tests will happen','Ask them to operate the fan without training','Keep test dates secret until after the decision','餐廳應預先告知鄰居測試時間。','single-choice')]),
lesson(5,'Borrowing event banners',['Fatima','Lee'],[
 'The festival committee wants new banners each year because the old ones show the date.',
 'Could the main design be reused with a separate panel for the changing date?',
 'That might cost more initially, and we would need somewhere dry to store it.',
 'We should compare the likely cost over several years and include storage and cleaning.',
 'If other community groups can borrow the frame, it might be used more often as well.',
 'Let us ask them first; sharing only saves materials if the design and booking arrangements suit them.'
],[q('Why are the present banners difficult to reuse?','The event date is printed on them','They are owned by another festival','They have never been used outdoors','舊橫額印有年份或日期，因此每年都需要更換。','single-choice'),q('What costs should the comparison include?','Storage and cleaning as well as the initial purchase','Only the cost of replacing the date panel each year','The initial price without any estimate of later costs','Lee 建議比較多年成本，包括儲存和清潔。'),q('Why does Lee want to consult other groups?','A shared frame must meet their practical needs to be used','Borrowing automatically eliminates every expense','The committee has already transferred ownership','共享架構只有適合其他團體及方便預約，才可能真正節省材料。','inference')]),
lesson(6,'A public notice board',['Holly','Zane'],[
 'The library wants a notice board for local groups, but the space is too small for every poster.',
 'A fixed display period might give more groups a chance, although urgent notices may need exceptions.',
 'Who should decide which notices are urgent? A vague rule could lead to complaints.',
 'The library could publish simple criteria and explain a way to ask for a review.',
 'I would also reserve a little space for handwritten notices from people without printers.',
 'That makes sense. Fair access depends on both the selection rules and how easy it is to submit.'
],[q('What problem is the library trying to manage?','Limited space for competing notices','The time staff spend choosing a different printer for each group','The number of groups asking the library to print their posters','告示板空間有限，無法展示所有海報。','single-choice'),q('Why does Holly question an urgency exception?','An unclear rule could seem unfair','Urgent notices are always unnecessary','Libraries cannot publish selection criteria','模糊的緊急例外可能引起公平性爭議。','inference'),q('What does Zane include in fair access?','Clear selection rules and accessible ways to submit','Choosing notices solely by the quality of printing','Allowing one group to keep its poster indefinitely','Zane 認為公平不只涉及選擇規則，也包括提交方式是否方便。','speaker-opinion')]),
lesson(6,'Should meetings be recorded?',['Nora','Jude'],[
 'Recording the committee meeting would help members who cannot attend, but some people may speak less freely.',
 'A written summary could provide the decisions without recording every comment.',
 'That would miss useful explanations when a decision is complicated.',
 'Then the summary could include the main reasons and a contact for questions, without naming every speaker.',
 'We should still ask members whether they prefer that option and explain how the notes will be shared.',
 'Agreed. The aim is useful access, while giving people a fair chance to understand what is recorded.'
],[q('What concern does Nora raise about recording?','Members may be less willing to speak openly','People absent from the meeting would gain no access','The committee would be unable to make decisions','Nora 擔心錄影可能令部分人不敢暢所欲言。'),q('How might the summary retain useful context?','Include main reasons and a contact for follow-up','List decisions without any explanation','Name every speaker and quote every comment','Jude 建議記錄主要理由並提供查詢聯絡人。'),q('What should happen before adopting the approach?','Ask members and explain how notes will be shared','Publish everyone’s comments without notice','Assume all members prefer video recordings','他們應先徵詢成員意見，並說明筆記的分享方式。')]),
lesson(6,'Choosing a volunteer shift',['Vera','Dylan'],[
 'The shelter asks volunteers to commit to the same evening every week, but my shifts at work change.',
 'Regular cover helps the shelter plan, although a rigid rule might exclude reliable people with changing hours.',
 'Could I offer two possible evenings each month instead of promising a weekly slot?',
 'You could ask. They would need enough notice to fill gaps and might still prefer weekly commitments.',
 'I do not want to promise more than I can deliver just to be accepted.',
 'Being clear about your availability is useful to them, even if this particular role does not fit.'
],[q('What competing needs do they identify?','The shelter needs predictable cover while Vera’s hours vary','Vera wants more shifts than the shelter can advertise','The shelter requires every volunteer to work from home','機構需要穩定人手，而 Vera 的工作時間卻會變動。','paraphrase'),q('Why does Dylan suggest asking rather than assuming?','The shelter may accept alternatives but has its own staffing needs','Two evenings must legally replace a weekly shift','All roles are guaranteed to fit variable schedules','替代安排可能可行，但仍要視乎機構的人手需要。'),q('What principle guides Vera’s decision?','Make a realistic commitment she can honour','Promise any schedule and cancel later','Avoid telling the shelter about her work','Vera 不想為獲接納而承諾超出自己能力的時間。','speaker-opinion')]),
lesson(6,'A bench with a plaque',['Megan','Owen'],[
 'A family has offered to pay for a bench in the park with a plaque remembering their relative.',
 'That sounds generous, but we should check the location does not obstruct the path.',
 'The suggested spot has a good view, although a wheelchair user mentioned that the ground is uneven.',
 'Perhaps the family would consider another position if it has a level approach and the same view.',
 'We should also explain who will maintain the bench after it is installed.',
 'Yes. A thoughtful memorial needs to work for visitors and the park team over time.'
],[q('Why might the proposed location need changing?','Uneven ground may make access difficult','The family no longer wants a memorial','The park has no views at all','有人指出建議地點地面不平，可能影響輪椅使用者接近。'),q('What alternative does Owen propose?','A level position that keeps the view','Removing every bench from the park','Placing the bench across the path','他建議尋找同樣有景觀、但通道平坦的位置。'),q('What additional responsibility needs clarification?','Who will maintain the bench','Who will attend every visit to the park','Who owns the view from the bench','安裝後由誰保養長椅亦需要事先說明。','single-choice')]),
lesson(6,'Sharing a recipe online',['Ali','Catherine'],[
 'I want to post my neighbour’s soup recipe, but she showed it to me during a private visit.',
 'Even if the ingredients are ordinary, asking her first would respect the way she shared it.',
 'She might be pleased, though she may not want her name or family story included.',
 'You could offer those choices separately, rather than treating permission to share as permission to name her.',
 'I will show her the draft and ask whether she wants any changes before it goes online.',
 'That gives her a chance to decide what she is comfortable sharing.'
],[q('Why does Catherine recommend asking the neighbour?','The recipe was shared in a private setting','The neighbour has already agreed to publish the recipe under Ali’s name','The neighbour has already demanded publication','食譜是在私人探訪時分享，先徵求同意較尊重對方。'),q('What distinction does Catherine draw?','Permission to share a recipe does not necessarily include permission to name its source','Acknowledging the neighbour would make asking her unnecessary','Removing the family story would automatically permit publication','同意分享食譜不一定等於同意公開姓名或家族故事。','paraphrase'),q('What will Ali do before posting?','Show the draft to the neighbour and invite changes','Publish the family story without showing her','Ask readers to identify the neighbour','Ali 會先讓鄰居看草稿並詢問是否需要修改。','single-choice')]),
lesson(7,'Clarifying an unfamiliar term',['Host','Candidate'],[
 'Some people think a repair scheme should be universal. How would you respond?',
 'Before I answer, do you mean available to every household or free for every repair?',
 'I mean that every household could apply, although there might be a charge according to income.',
 'In that case I support broad access, but I would want a simple application process.',
 'What concern lies behind that condition?',
 'If the form is difficult, people who most need help may be excluded even when they are formally eligible.'
],[q('Why does the candidate ask for clarification?','The word universal could describe access or cost','The host has refused to discuss repair schemes','The candidate has already decided all repairs must be free','universal 可指人人有申請資格，也可指所有維修免費，候選人需要確認。'),q('What does the host mean by universal?','Every household can apply, with possible income-related charges','Every repair is free for every household','Only households above a fixed income may apply','主持人指所有住戶均可申請，但費用可能按收入而定。','single-choice'),q('Why does the candidate favour a simple form?','Formal eligibility may be ineffective if applying is too difficult','A simple form guarantees every application will succeed','Income should never be considered in any scheme','申請表過於困難可能阻礙真正有需要的人，即使他們符合資格。','inference')]),
lesson(7,'Responding to a counterexample',['Nadia','Elliot'],[
 'You said online appointments always save time. What about someone whose connection fails during the call?',
 'That is a fair counterexample. I should have said they can save travel time when the technology works.',
 'Would you therefore remove the online option entirely?',
 'No. I would keep it alongside face-to-face appointments and make it easy to switch after a technical problem.',
 'Some services have limited staff. How would you decide what balance to offer?',
 'I would look at demand and access needs, then review waiting times for both options.'
],[q('How does Elliot revise the original claim?','He limits it to potential travel savings when technology works','He insists online appointments always save time','He says no appointments should be offered','Elliot 接受反例，將原先絕對的說法修正為科技正常時可能節省交通時間。','paraphrase'),q('What response does he propose after a connection failure?','Make switching to another appointment format straightforward','Remove all in-person appointments','Ask patients to repeat the same failed call indefinitely','他建議保留兩種方式，並在技術故障後方便轉換。'),q('What information would guide the balance of appointments?','Demand, access needs and waiting times','The number of bookings alone, regardless of who can use each format','Only the preference of staff already working on online appointments','他會考慮需求、使用需要及兩種方式的輪候時間。')]),
lesson(7,'Making a suggestion more precise',['Examiner','Candidate'],[
 'You suggested improving the town centre. What is one change you would make first?',
 'I would improve access to the square, especially for people travelling on foot.',
 'That is quite broad. Can you give a specific example?',
 'I would widen the crossing’s waiting area, where people currently gather beside the road.',
 'How would you judge whether it had worked?',
 'I would observe crowding at different busy times and ask local users, including people with pushchairs or wheelchairs, about their experience.'
],[q('Why does the examiner request an example?','The initial suggestion is too general to assess easily','The candidate has already provided a detailed cost','The square has been closed permanently','候選人最初只說改善通行，考官希望聽到具體做法。','inference'),q('Which change does the candidate identify?','Widening the waiting area at a crossing','Removing all crossings from the square','Closing the town centre to pedestrians','候選人建議擴闊過路處的等候空間。','single-choice'),q('What would the proposed evaluation combine?','Observations of crowding and feedback from varied users','Only a prediction made before the work','Feedback only from people who designed the new crossing','候選人建議在繁忙時間觀察擠迫情況，並徵詢不同使用者意見。','paraphrase')]),
lesson(7,'An offer with a condition',['Organiser','Volunteer'],[
 'Would you be able to lead the Saturday walk if the usual guide is away?',
 'I could, provided someone familiar with the route joins me for the first section.',
 'We can ask Priya, but she may need to leave after half an hour.',
 'That would be enough for the part I have not walked before. I know the rest of the route.',
 'Shall I confirm you as leader now?',
 'Please check with Priya first. If she cannot come, we should find another guide rather than assume I can lead safely.'
],[q('What condition does the volunteer set?','A route-familiar person joins for the unfamiliar first section','Priya remains for the entire walk','The walk changes to a different day','義工願意帶隊的條件是熟悉路線的人陪同走過不熟悉的首段。'),q('Why might Priya’s half hour be sufficient?','It covers the section the volunteer does not know','It is the full duration of the walk','The volunteer has never walked any of the route','義工熟悉其餘路段，半小時可覆蓋不熟悉的部分。','inference'),q('What is the best next response by the organiser?','Check whether Priya can join before confirming the volunteer','Announce the volunteer as leader without checking','Cancel Priya’s involvement and leave the route unchanged','義工明確要求先確認 Priya 能否同行，才決定是否帶隊。','best-response')]),
lesson(7,'Comparing two proposals',['Panel member','Applicant'],[
 'Your proposal costs more than the alternative. Why should the panel consider it?',
 'It includes training for local volunteers, while the cheaper proposal pays for equipment only.',
 'Are you saying the cheaper option has no benefits?',
 'Not at all. It might be suitable for a short project, but our training could help people maintain equipment afterwards.',
 'Can you guarantee volunteers will remain available?',
 'No. We have expressions of interest, not commitments, so the budget includes a review before the second year.'
],[q('What additional feature does the applicant’s proposal include?','Training for local volunteers','A guarantee of permanent volunteer availability','Free equipment for every household','較昂貴的方案包括培訓本地義工。','single-choice'),q('How does the applicant characterise the cheaper option?','It may suit a shorter project despite having a different scope','It has no possible benefits','It includes the same training at a lower price','申請者承認較便宜方案可能適合短期項目，但內容不同。','speaker-opinion'),q('Why is there a review before the second year?','Volunteer interest does not guarantee future commitment','The training is certain to remove the need for later maintenance','The cheaper proposal has already secured all the same volunteers','目前只有義工表達興趣，未有承諾，因此需要檢討。','inference')]),
lesson(8,'The revised ferry timetable',['Mira','Cal'],[
 'The visitor centre sent us a timetable showing the last ferry at six, but the operator’s website now says five thirty.',
 'The centre’s leaflet was printed in spring. The website may reflect the autumn schedule.',
 'The crossing takes twenty minutes, and the coach leaves the mainland harbour at six fifteen. The six o’clock ferry arrives too late.',
 'Let us telephone the operator to confirm the date and ask where passengers should wait.',
 'If five thirty is correct, we can leave the museum earlier and buy food at the harbour.',
 'Good. I will tell the rest of the group after we have confirmation, so nobody relies on an outdated leaflet.'
],[q('Why might the two ferry times differ?','One source may show a newer seasonal timetable','The coach company operates the ferry','Both sources refer to the same printed leaflet','旅客中心的單張較早印製，網站可能已更新秋季時間表。','inference'),q('What would they change if the earlier ferry is confirmed?','Leave the museum earlier and buy food at the harbour','Take a coach before visiting the museum','Assume the ferry will wait until six','如果確認五時半開船，他們會提早離開博物館並在港口買食物。'),q('Why will Cal wait before informing the group?','He wants the operator to confirm the current arrangements','He plans to hide the earlier sailing','The group has decided not to travel','Cal 想先向營辦商確認，避免大家依賴過時單張。')]),
lesson(8,'A library display delivery',['Jenna','Noor'],[
 'The exhibition panels arrived today, but the stands listed on the delivery note are missing.',
 'The supplier emailed yesterday to say the stands would travel separately and should arrive tomorrow morning.',
 'That helps. Our volunteers start arranging the display at noon, so there may still be enough time.',
 'The email asks us to call by ten if the second delivery has not arrived, rather than waiting until noon.',
 'I will put a reminder in the diary and tell the volunteers that the start time is not yet guaranteed.',
 'Please also keep the panels dry while we wait; the note says the printed surfaces can mark easily.'
],[q('Why are the stands absent from today’s delivery?','They were sent separately and are expected tomorrow','They were removed permanently from the order','The volunteers have already collected them','供應商電郵說明支架分開運送，預計明早送到。','single-choice'),q('When should they contact the supplier if the stands do not arrive?','By ten tomorrow morning','After the volunteers have finished at noon','Tomorrow at noon, when volunteers begin setting up','電郵要求若未收到，應在明早十時前致電。'),q('Why will Jenna avoid promising the volunteers a definite start?','The stands have not yet arrived','The panels are already damaged beyond use','The exhibition has been cancelled','支架尚未送達，所以中午能否開始仍未確定。','inference')]),
lesson(8,'The corrected workshop fee',['Anil','Beth'],[
 'I registered for the bicycle maintenance workshop because the poster said ten pounds, but my confirmation asks for fifteen.',
 'The organiser’s latest message says the poster omitted the materials charge, and apologises for the mistake.',
 'Does everyone have to pay the extra five, even if they booked before the correction?',
 'The message offers early bookers a choice: pay the revised total or cancel for a full refund by Friday.',
 'I would still like to go, but I will check whether the total includes a basic repair kit to take home.',
 'That is sensible. Reply before Friday if you decide to cancel, and keep the confirmation until the fee is clear.'
],[q('Why is the confirmation amount higher than the poster?','The original poster omitted a materials charge','The organiser added a late-booking penalty','Anil booked two places by mistake','原海報漏列材料費，因此確認信的總額較高。'),q('What choice is offered to early bookers?','Accept the revised price or cancel for a full refund by Friday','Pay immediately with no possibility of cancellation','Attend free without contacting the organiser','早期報名者可接受新總額，或在星期五前取消並取回全額退款。','paraphrase'),q('What does Anil still need to clarify?','Whether a basic repair kit is included','Whether the materials charge replaces the original booking fee','Whether the refund can still be requested after Friday','Anil 想確認總費用是否包括可帶回家的基本維修工具包。','single-choice')]),
lesson(8,'The timetable attachment',['Lara','Toby'],[
 'The adult learning centre emailed our spring timetable, but the attachment still has the autumn dates at the top.',
 'The message says rooms are unchanged. Does it actually confirm that the class dates are the same too?',
 'No, it only mentions rooms. The booking page shows a later starting week, though the tutor has not replied yet.',
 'Then let us ask the centre which document has the confirmed dates before we send a reminder.',
 'I can draft it now, but I will leave the first date blank until we hear back.',
 'Good. We can explain the discrepancy if anyone asks, without presenting a plausible date as a confirmed one.'
],[q('Why does the email fail to resolve the date discrepancy?','It confirms the rooms but does not confirm the class dates','It explicitly cancels the spring course','It says the attachment contains the final corrected timetable','電郵只確認課室不變，未確認上課日期，故未能解決日期不一致。','inference'),q('What will Lara do while awaiting a reply?','Draft a reminder without filling in the first date','Send the autumn date to the whole class','Delete the booking page from the centre’s website','Lara 會先起草提示訊息，待確認後才填入首課日期。'),q('Which response best follows Toby’s advice if a student asks now?','The documents differ, and we are checking the first date with the centre','The later date must be correct because it is on a website','The class will use the autumn dates because the rooms are unchanged','Toby 建議如實說明資料有出入，待中心確認，而不要把合理猜測當作定案。','best-response')]),
lesson(8,'A changed rehearsal room',['Rosa','Ken'],[
 'The choir’s message says the rehearsal has moved from Room Two to the upstairs hall because of a leak.',
 'The hall is larger, but one member uses a wheelchair. Is the lift available this evening?',
 'The caretaker says it is working today, though the building closes at nine instead of the usual ten.',
 'Then we should finish early enough to put the chairs away before closing.',
 'I will update the group now, including the lift information and the earlier finishing time.',
 'Please ask people to reply if they need help getting in, so we can arrange it before they arrive.'
],[q('Why has the rehearsal moved?','There is a leak in the original room','The choir has permanently left the building','The upstairs hall is the only room with chairs','原來的二號房有漏水，因此排練改到樓上大廳。','single-choice'),q('How does the earlier building closure affect the plan?','The choir must allow time to put away chairs before nine','The rehearsal can continue until ten as usual','The lift will necessarily stop working immediately','建築九時關門，因此要提早結束並留時間收拾椅子。','inference'),q('Why does Ken ask members to reply about access?','Support can be arranged before they arrive','The caretaker can decide whether the rehearsal needs to move again','A larger hall automatically provides suitable access for everyone','先確認成員的進出需要，便可在他們到達前安排協助。')]),
]
