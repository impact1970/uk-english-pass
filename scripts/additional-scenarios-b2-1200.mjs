// Original B2 conversations, awaiting editorial review.
const q = (prompt, correct, d1, d2, explanation, type = 'single-choice') => ({prompt, options:[correct,d1,d2], answer:0, explanation, type})
const lesson = (u,t,s,x,qs) => ({l:'B2',u,t,s,x,qs,pending:true})
export const additionalB2Scenarios1200Part1 = [
lesson(0,'An annotated bibliography',['Asha','Tom'],[
 'I have summarised each article for my bibliography, but the tutor also wants an evaluation of its usefulness.',
 'You might explain how each source helps your particular question, rather than judging whether it is generally interesting.',
 'One report has excellent background, although its figures are too old for my section on current provision.',
 'That distinction is useful. Mention both the contribution and the limitation, with a reason for each.',
 'I was tempted to leave it out because its data are dated, but it explains how the policy began.',
 'Then keep it for that purpose and find a newer source for the figures. The two can perform different jobs.'
],[q('Why might Asha keep the older report?','It explains the policy’s origins despite having dated figures','Its historical account makes newer figures unnecessary','Its age allows her to use it without evaluating it','舊報告雖然數據過時，仍能交代政策起源，因此可保留作歷史背景。','inference'),q('What does Tom regard as a useful evaluation?','An account of a source’s contribution and limits for the question','A general recommendation based on how interesting the source is','A summary of the findings without discussing their relevance','Tom 建議按研究問題說明資料能提供甚麼，以及有甚麼限制。','speaker-opinion'),q('Which follow-up best applies Tom’s advice?','I will use this report for the background and find recent figures for the current situation.','I will remove the background so that every source provides recent statistics.','I will use the old figures because the report explains the policy clearly.','Tom 建議讓不同資料各司其職：舊報告解釋背景，新資料提供現況數據。','best-response')]),
lesson(0,'A practical exam rehearsal',['Priya','Callum'],[
 'Our practical exam includes explaining the procedure aloud, and I keep losing my place when someone asks a question.',
 'Shall we rehearse with interruptions? I can ask you why you chose each step, not just what comes next.',
 'That would be harder than repeating the list, but it might show me which decisions I do not really understand.',
 'We could pause after each attempt and check your explanation against the guidance, especially the safety section.',
 'Please interrupt at different points each time, so I cannot simply memorise where your questions come.',
 'Agreed. We should leave enough time afterwards to practise the complete procedure without stopping as well.'
],[q('Why does Priya want interruptions at different points?','To test her reasoning without learning a predictable question pattern','To practise a shorter version of the procedure each time','To concentrate on the order of the questions rather than the steps','不同位置的提問可測試她是否理解各步驟的原因，避免只記住固定的提問次序。','inference'),q('How will their rehearsal go beyond reciting the steps?','Priya will justify decisions and compare explanations with the guidance','Callum will supply each explanation before Priya performs the step','They will check the order but leave reasons until after the exam','練習會要求 Priya 解釋決定，再對照指引，特別是安全部分。'),q('Why include a final attempt without stopping?','To combine practice in explaining decisions with fluent performance','To replace the interrupted practice once the questions are familiar','To check speed without having to follow the safety guidance','Callum 建議兩種練習都做，既訓練應對提問，也練習流暢完成整個程序。','inference')]),
lesson(0,'A source behind a headline',['Luca','Erin'],[
 'The headline says a new teaching method doubled test scores, so I was going to use it as my strongest evidence.',
 'Have you found the study itself? A headline may omit how achievement was measured or how many pupils took part.',
 'The article links to a summary, but the full report is behind a paywall. I could check our college library.',
 'Good. Even if the result is sound, ask whether the pupils and conditions resemble the setting you are discussing.',
 'If they do not, I can describe the finding cautiously instead of claiming it will work everywhere.',
 'Exactly. A striking result is worth examining, but its relevance is a separate question.'
],[q('What distinction is central to Erin’s advice?','A study can be sound yet not directly applicable to Luca’s setting','A study is relevant whenever its result attracts a strong headline','A study’s relevance can be judged without knowing who took part','Erin 指出，即使研究結果可靠，也要另行判斷參與者及研究條件是否適用於 Luca 的題目。','paraphrase'),q('Why might Luca use cautious wording?','The study conditions may differ from the setting he is discussing','The paywall establishes that the study’s methods are flawed','A short summary establishes that the effect was exaggerated','研究條件可能不同，故不能單憑結果就聲稱方法適用於所有環境。','inference'),q('Which response best follows Erin’s advice?','I will look for the full report and check the sample before deciding how strongly to use the result.','I will treat the headline as sufficient evidence because it gives a clear numerical result.','I will reject the result because the full report is not freely available.','查閱完整報告及樣本資料，有助判斷結果的可靠程度和適用範圍。','best-response')]),
lesson(0,'A fieldwork backup plan',['Megan','Idris'],[
 'We are meant to count visitors in the square on Saturday, but the forecast suggests heavy rain all afternoon.',
 'Rain may affect the numbers, although cancelling would also leave us with no observation at all.',
 'Could we record the weather and return on a dry day, then explain why the two counts might differ?',
 'Yes, if the tutor approves a second visit. We should use the same time period and counting point.',
 'And we must not claim that two afternoons represent the whole year, even if the counts are very different.',
 'Agreed. Let us prepare the recording sheets now and ask about the extra visit before changing the schedule.'
],[q('What would the proposed comparison allow them to explore?','Whether visitor counts differ between a wet and a dry afternoon','Whether the square’s annual visitor total has increased','Whether the same visitors return in different weather','比較雨天及晴天的觀察，可了解兩次人流數量的差異，但不能推算全年人數或追蹤個別訪客。'),q('Why keep the observation period and counting point the same?','To reduce other differences when comparing the two counts','To ensure the visitor numbers match on both afternoons','To make the weather record unnecessary on the second visit','保持時段及位置一致，可減少比較時的其他差異，並不保證人數相同。','inference'),q('Which report statement would best respect the limits they recognise?','These observations cover only two afternoons, so they cannot represent the whole year.','The drier afternoon shows how busy the square normally is throughout the year.','The second visit removes the need to mention limitations in the first count.','他們明言兩個下午不能代表全年；結論只宜涵蓋所觀察的時段。','best-response')]),
lesson(0,'Joining a study group late',['Nora','Felix'],[
 'I missed the first meeting of the study group because my shift changed. I do not want to slow everyone down now.',
 'You could read the shared notes first and ask which part still needs work, rather than expecting a full recap.',
 'I saw a list of terms, but I am unsure whether the group agreed on definitions or just collected suggestions.',
 'Ask that specific question in the group chat. Someone can clarify it without repeating the entire meeting.',
 'Then I could prepare examples for the terms that remain unclear before our next session.',
 'That sounds constructive. Tell them when you are available too, so they can plan around your shift if possible.'
],[q('How can Nora catch up without placing an unnecessary burden on the group?','Use the notes to identify a specific point needing clarification','Ask for a full recap before reading the shared notes','Prepare examples based on the assumption that every definition is final','Nora 可先看筆記，再針對定義是否已獲共識提問，毋須要求重開整場會議。'),q('What distinction in the notes does Nora need clarified?','Agreed definitions versus suggestions still under discussion','Terms prepared by Nora versus terms prepared by Felix','Decisions made in person versus decisions made in the group chat','她不清楚清單上的定義是已達成共識，還是只屬初步建議。','paraphrase'),q('How does Felix view Nora’s proposed preparation?','As a way to make a useful contribution while catching up','As a substitute for checking what the group has agreed','As a reason the group must change its meeting time','Felix 說準備例子是有建設性的做法，顯示她可一邊追上進度，一邊作出貢獻。','speaker-opinion')]),
lesson(0,'A poster with too much detail',['Yusuf','Bea'],[
 'My research poster contains every result, but people have to stand very close to read the smallest labels.',
 'What do you want someone passing by to understand in the first half minute?',
 'That the results varied considerably between locations, even though the overall average hardly changed.',
 'Then make that comparison prominent and put the full table in a handout or a link for anyone who wants detail.',
 'I was worried that selecting one finding would make the project look less thorough.',
 'You can explain why it matters and be ready for questions. A poster is an invitation to examine the work, not the whole report.'
],[q('Which contrast does Yusuf want viewers to notice?','Large differences between locations alongside little change in the overall average','A rising overall average despite identical results at each location','Differences in the number of labels alongside a reduction in the number of results','Yusuf 想突出各地結果差異很大，但整體平均數變化不大。','paraphrase'),q('What concern makes Yusuf reluctant to simplify the poster?','He fears that selecting a finding will make the work appear less thorough','He thinks a handout would prevent anyone from reading the poster','He believes the results are too uncertain to discuss in person','Yusuf 擔心只選一項結果來展示，會令研究顯得不夠全面。','speaker-opinion'),q('How does Bea respond to that concern?','Accessible presentation can lead viewers towards the supporting detail','Every result needs equal space to demonstrate the project’s quality','The supporting table is unnecessary once a clear headline has been chosen','Bea 建議海報先引起興趣，完整數據另放單張或連結，並準備回答問題。','inference')]),
lesson(0,'A missed laboratory reading',['Chloe','Samir'],[
 'I missed one reading while recording the temperature, and the other values suggest what it probably was.',
 'Please do not fill the gap with an estimate as if you had measured it. Mark it missing in the record.',
 'Could I still draw the graph, or would the gap make the whole experiment unusable?',
 'Draw the measured points and explain the gap. Ask the supervisor whether a repeat is practical before drawing firm conclusions.',
 'I was embarrassed to admit I had lost concentration, but an invented value would be more misleading.',
 'Exactly. A transparent limitation gives the reader a chance to judge the evidence for themselves.'
],[q('What distinction does Samir insist on?','An estimated value must not be presented as an observed measurement','An estimate is acceptable as a measurement if nearby values agree','A missing reading makes every other measured point unreliable','Samir 強調不能把估計值當成實際量度所得的數據。','paraphrase'),q('Which response would best follow Samir’s advice?','I will plot the recorded points, explain the gap and ask whether a repeat is feasible.','I will fill the gap with the likely value so the graph is complete before asking.','I will discard the remaining results because a graph must contain every planned reading.','Samir 建議畫出實測數據、交代缺漏，並查詢是否能重做實驗。','best-response'),q('Why does Samir value a transparent limitation?','It allows readers to assess the strength of the evidence themselves','It establishes that a repeat experiment would produce the same result','It makes the missing value as reliable as the recorded measurements','清楚交代限制可讓讀者自行評估證據，並不能補回缺失數據或保證結果。','speaker-opinion')]),
lesson(0,'The optional reading list',['Ada','Hugh'],[
 'The optional reading list is enormous, and I only have two evenings before the seminar.',
 'Start with the overview and the abstracts, then choose a couple of pieces that address the seminar question directly.',
 'Would it be better to skim every article so I can at least recognise all the authors?',
 'Possibly, but recognising names is less useful than understanding a few arguments well enough to discuss them.',
 'I will take notes on where the selected authors agree and where their evidence differs.',
 'Good. If time remains, look at another perspective, but do not mistake completing the list for understanding it.'
],[q('What trade-off does Hugh favour under the time limit?','Depth of understanding of relevant arguments over recognition of many names','Complete coverage of every article over any preparation for discussion','Reading only abstracts over examining evidence in selected pieces','時間有限，Hugh 認為理解幾個相關論點，比只認得大量作者名字更有用。','speaker-opinion'),q('What will Ada’s notes focus on?','Points of agreement and differences in the authors’ evidence','Which authors appear most often on the reading list','Which articles can be finished without considering their arguments','Ada 會比較作者的共識，以及所用證據有何不同。'),q('What does Hugh’s final warning imply?','Completing the list is not by itself evidence of understanding','Optional reading should be avoided unless the whole list can be finished','Looking at another perspective would weaken the selected arguments','Hugh 提醒她，完成清單不代表真正理解；仍有時間才再看其他角度。','inference')]),
lesson(1,'A guest who brings food',['Mina','George'],[
 'Our guest offered to bring a dish, but my grandmother thinks accepting means we have failed as hosts.',
 'She may see providing everything as a way of showing care. The guest might see contributing in the same way.',
 'Perhaps I can thank the guest and ask Grandmother whether a dessert would fit alongside what she has planned.',
 'That gives both of them a voice. You could also mention any dietary needs before a dish is prepared.',
 'I like that approach; I had assumed one of them must be behaving incorrectly.',
 'Different expectations can both come from generosity. Talking early makes a misunderstanding less likely.'
],[q('How does George interpret the apparent disagreement?','Both people may be expressing care through different expectations','The guest probably thinks the grandmother is unwilling to cook','The grandmother has probably misunderstood the guest’s dietary needs','George 認為祖母想包辦招待，客人想帶食物，兩者都可能出於心意。','inference'),q('What makes Mina’s dessert suggestion a compromise?','It gives the guest a contribution while checking how it fits the host’s plans','It allows the guest to replace a dish without consulting the grandmother','It avoids discussing the offer until the guest arrives with food','先詢問甜品是否配合祖母的安排，既讓客人參與，也尊重主人的計劃。'),q('What change occurs in Mina’s thinking?','She stops assuming that one set of expectations must be wrong','She decides that the guest should adopt the grandmother’s expectations','She concludes that dietary needs explain the whole disagreement','Mina 原以為其中一方一定做錯；George 令她看到不同做法也可出於善意。','inference')]),
lesson(1,'A farewell card at work',['Leila','Martin'],[
 'We are writing a farewell card for our colleague, but some people barely worked with her and feel awkward signing.',
 'Could they simply wish her well? A personal story is lovely, but it should not be compulsory.',
 'One colleague also asked whether the card could be shared digitally because she works from another office.',
 'That makes sense, provided the colleague who is leaving is happy to receive everyone’s messages in a digital card.',
 'I will offer both ways to contribute and keep the invitation brief.',
 'And make it clear that joining in is voluntary. A kind gesture loses something if people feel pressured.'
],[q('What would Martin say to colleagues with no personal story to share?','A brief good wish is enough if they choose to contribute','They should ask someone else for a memory to write as their own','They should sign only if they have worked closely with the recipient','Martin 認為簡單祝福已足夠，毋須勉強寫個人回憶，而且參與應屬自願。'),q('Why does Martin qualify his support for a digital card?','He wants the recipient’s preference about the format checked','He thinks messages from another office are less personal','He wants the recipient to approve every contribution in advance','Martin 願意用電子版本，但先要確認收卡的同事是否接受這種形式。','inference'),q('What principle does Martin emphasise?','The gesture should allow voluntary participation without demanding intimacy','Every contribution should be equally personal to show equal respect','Remote colleagues should contribute only after the office card is complete','Martin 強調自由參與，不應要求每個人都寫親密的個人內容。','speaker-opinion')]),
lesson(1,'The seating plan at a shared meal',['Rosa','Dev'],[
 'For the community meal, I put the longest-serving members at the top table, as we usually do.',
 'That recognises their contribution, but some newcomers may find it difficult to join a conversation if the established members are at a different table.',
 'One founder has asked to sit beside the family she invited, rather than with the other committee members.',
 'Could we ask for seating preferences and mix the tables, then thank the founders in the welcome speech?',
 'That would preserve the recognition without assuming a special table is what everyone wants.',
 'Yes. We should check what the custom is meant to achieve before deciding which parts need to stay.'
],[q('What tension does Dev identify?','Honouring longstanding members may make newcomers feel separate','Mixing tables could prevent the founders from being thanked','The welcome speech may be too long for the invited families','Dev 指出，特設主桌雖能表揚資深成員，卻可能令新參加者難以融入。','inference'),q('What does the founder’s request show?','A place of honour may not match an individual’s preference','The founders have agreed to sit away from the committee','Invited families do not want to join mixed tables','創辦人想坐在自己邀請的家庭旁邊，顯示主桌安排未必符合每個人的意願。','inference'),q('Which response best follows Dev’s final advice?','Let us keep the public thanks and ask people where they would feel comfortable sitting.','Let us keep the top table because recognition always requires separate seating.','Let us remove all mention of the founders so that every table is identical.','Dev 建議先了解習俗的目的；保留致謝並詢問座位意願，能兼顧表揚與共融。','best-response')]),
lesson(1,'Passing on the community key',['Owen','Hiba'],[
 'At the annual handover, the outgoing club chair normally presents a ceremonial key to the next chair.',
 'Will the new chair be able to attend? I heard she is caring for her father that evening.',
 'She cannot come, and one member thinks we should postpone the handover until she is free.',
 'Perhaps ask whether she would prefer a short video message and someone to accept the key on her behalf.',
 'I will offer that without asking her to explain her family situation to the whole club. The key is symbolic; the role starts on Monday either way.',
 'Then make the start date clear. The ceremony can adapt without delaying who is responsible for the club.'
],[q('Why does Owen distinguish the key from the role?','Changing the ceremony need not change when responsibility begins','The new chair needs the key to enter the club on Monday','The outgoing chair will keep the role until both can attend','鎖匙只具象徵意義；典禮可改動，但新主席仍會在星期一上任。','inference'),q('What does Hiba suggest checking with the new chair?','Whether she would like a video message and someone to accept the key for her','Whether she can promise to attend after her role begins','Whether she wants her caring responsibilities announced','Hiba 建議詢問新主席是否願意錄製短片，並由別人代領鎖匙。'),q('What principle guides Hiba’s final comment?','Preserve a clear transfer of responsibility while adapting the ritual','Postpone official responsibilities whenever a ceremony is postponed','Keep the ceremony unchanged even if the new chair cannot take part','Hiba 認為儀式可以靈活調整，但必須清楚交代職責何時交接。','speaker-opinion')]),
lesson(1,'A visitor and a formal title',['Anika','Paul'],[
 'Our visitor introduced herself by her first name, but the programme gives her a professional title.',
 'In the formal introduction, using the title may be appropriate. Afterwards, we can follow the name she uses herself.',
 'Should I assume everyone in her delegation prefers the same form of address?',
 'I would not. If you are uncertain, ask each person how they would like to be addressed.',
 'That seems better than treating a title as either mandatory or impolite in every setting.',
 'Yes. The relationship and occasion matter, and asking politely leaves room for individual preference.'
],[q('Why does Paul distinguish the formal introduction from later conversation?','The setting can affect which form of address is suitable','The visitor’s introduction makes her professional title invalid','The printed programme establishes a permanent rule for every conversation','Paul 認為正式介紹與之後交談的場合不同，可採用不同稱呼。','inference'),q('Which response best applies Paul’s advice to the other delegates?','I will ask anyone whose preference is unclear rather than copy the visitor’s choice.','I will use first names for everyone because the visitor introduced herself that way.','I will use each printed title even if a delegate requests a different name.','Paul 建議不確定時逐一詢問，不應假設整個代表團都偏好同一稱呼。','best-response'),q('What is Paul’s overall view of titles?','Their appropriateness depends on context and individual preference','A first-name introduction makes titles impolite in formal settings','A professional title should take priority over a person’s stated preference','Paul 認為應考慮場合、關係及個人意願，沒有適用於所有情況的硬性規則。','speaker-opinion')]),
lesson(1,'The shared office birthday',['Farah','Miles'],[
 'We usually decorate a desk on a colleague’s birthday, but our new teammate has said she dislikes surprises.',
 'Perhaps ask whether she would enjoy a quiet card or would rather not mark the day at work at all.',
 'I do not want the rest of the team to think she is rejecting their kindness.',
 'You can explain that people celebrate differently without sharing anything she wants kept private.',
 'If she prefers no celebration, we can still welcome her in ways she has actually chosen.',
 'Exactly. A custom works best when it makes the person concerned feel comfortable, rather than obliged.'
],[q('What assumption about the desk decoration is being questioned?','That the team’s usual gesture will make this colleague feel welcome','That the team has permission to move the colleague’s work','That the colleague would prefer a larger celebration outside work','新同事已說不喜歡驚喜，因此不能假設慣常的佈置會令她感到受歡迎。','inference'),q('Which two options does Miles suggest checking?','A quiet card or no workplace celebration','A surprise at her desk or a surprise outside work','A private party or organising the next team birthday','Miles 建議問她想要簡單送卡，還是不在工作場合慶祝。'),q('How does Miles suggest explaining the choice to the team?','Acknowledge different preferences while protecting private information','Explain her personal reasons so the team will accept the decision','Describe the usual custom as inappropriate for every future birthday','Miles 建議只說大家慶祝方式不同，毋須透露她希望保密的事情。','speaker-opinion')]),
lesson(1,'A community silence',['Gareth','Noor'],[
 'The programme includes a minute of silence, but a parent asked what her young child should do during it.',
 'We could explain its purpose in advance and say that families are welcome to step outside if needed.',
 'Would leaving the room be seen as disrespectful by other guests?',
 'Not if the announcement makes clear that people have different needs and that a quiet exit is welcome.',
 'I will also show the timing on the printed programme, so families can prepare without drawing attention.',
 'That preserves the moment while making it easier for more people to take part in a way that suits them.'
],[q('Why show the timing in the printed programme?','Families can plan discreetly rather than seek an exception during the silence','Families can decide the length of the silence once the event begins','Parents can explain their needs publicly before choosing where to sit','列明時間可讓家庭預先準備，毋須在儀式期間引起注意或解釋需要。','inference'),q('What is the purpose of the proposed announcement?','To establish that leaving quietly can be a respectful response to different needs','To advise all families with children to leave before the silence','To ask departing guests to explain why they cannot remain','公告會清楚說明不同人有不同需要，安靜離場亦可接受。'),q('What balance do they seek?','Retain the shared moment while allowing flexible participation','Keep everyone in the room by shortening the silence for all','Leave participation rules unstated so nobody feels singled out','他們希望保留默哀的意義，同時讓不同家庭按需要參與。','paraphrase')]),
lesson(1,'A borrowed phrase',['Tess','Hamid'],[
 'I heard a phrase at my friend’s family gathering and thought of using it in my speech because it sounded cheerful.',
 'Do you know what it means and when the family normally uses it? The sound alone may not tell you that.',
 'No, and I would not want to use it in a way that makes someone’s tradition into a joke.',
 'You could ask your friend to explain it and whether it would be appropriate in this particular speech.',
 'If she is unsure, I can choose my own words rather than put her in the position of speaking for everyone.',
 'That sounds respectful. Curiosity is welcome, and so is accepting that a phrase may not fit every occasion.'
],[q('What concern underlies Hamid’s first question?','A cheerful sound does not establish the phrase’s meaning or appropriate use','A phrase heard at a gathering is unlikely to be suitable for any speech','The family may expect Tess to translate her whole speech','Hamid 提醒她，聽起來歡快並不代表已了解詞語的意思和使用場合。','inference'),q('Why would Tess avoid pressing her friend for a definite answer?','She does not expect one person to speak for a whole tradition','She thinks her friend is unwilling to explain the phrase’s meaning','She has already decided to use the phrase regardless of context','Tess 不想令朋友承擔代表所有人作決定的壓力；不肯定時可用自己的說法。','inference'),q('What attitude does Hamid endorse?','Learn about the context and accept that the phrase may not fit','Use the phrase if it sounds positive, with an explanation afterwards','Avoid asking about unfamiliar language because curiosity is disrespectful','Hamid 鼓勵了解背景，同時接受某句話未必適用於這個場合。','speaker-opinion')]),
lesson(2,'The high street crossing',['Helen','Raj'],[
 'The proposed crossing is near the shops, but the dropped kerb is several metres away from the marked route.',
 'That could force wheelchair users into the road at an awkward angle. Has anyone tested the design on site?',
 'The drawing was displayed at the consultation, although I did not see a trial with people who use mobility aids.',
 'We should ask for one before the layout is finalised, and include people pushing prams as well.',
 'I support the crossing in principle; I just want the approach to be as usable as the crossing itself.',
 'Then say both in your response. Identifying a practical problem need not mean opposing the whole scheme.'
],[q('Why might the drawing alone be insufficient?','It has not shown how people with mobility needs would negotiate the approach','It omits the location of the shops beside the crossing','It establishes that the dropped kerb cannot be moved','圖則雖已公開展示，但未見有行動需要的人實地試用，通道是否方便仍需驗證。','inference'),q('What do they propose before the layout is finalised?','An on-site trial involving mobility-aid users and people with prams','A new consultation limited to people who already support the drawing','A decision based on whether the marked route looks straight on paper','他們建議由使用行動輔助工具及推嬰兒車的人實地測試。'),q('What is Helen’s position?','She supports a crossing but wants a practical flaw corrected','She will oppose the crossing unless all other street changes stop','She thinks the kerb matters less than getting any crossing approved','Helen 原則上支持設立過路處，但希望解決通往過路處的實際問題。','speaker-opinion')]),
lesson(2,'A late bus connection',['Tara','Elliot'],[
 'The last bus arrives at the station five minutes after the train leaves, so my journey home takes an extra hour.',
 'Is that every evening, or only when the bus is delayed?',
 'It is in the published timetable. I have checked for three weekdays, although weekend services are different.',
 'Then send the operator the specific connection and dates. Other passengers could add their experiences too.',
 'I will ask whether the bus can leave earlier, but I realise that might affect people boarding at previous stops.',
 'A useful response could consider the whole route. The operator may have another way to improve the connection.'
],[q('Why does Elliot ask whether the problem occurs only when the bus is delayed?','He wants to distinguish a timetable mismatch from unreliable running','He suspects Tara has confused weekday and weekend services','He wants to show that the train is usually responsible for delays','Elliot 先分清是班次本身銜接不良，還是巴士延誤造成錯過火車。','inference'),q('Why does Tara qualify her request for an earlier bus?','The change could disadvantage passengers using earlier stops','An earlier bus would require changing the weekend train timetable','She has not yet checked whether the published connection exists','Tara 明白提早開車可能影響較早各站的乘客，因此沒有假設只需直接改時間。','inference'),q('What would best support a useful request to the operator?','The affected weekday services, dates and experiences of other passengers','An assumption that the weekend connection has the same problem','A demand for the same departure time on every route','具體班次、日期及其他乘客經驗可幫助營辦商評估整條路線。')]),
lesson(2,'A community notice in two places',['Zara','Colin'],[
 'The council is moving notices online, but some residents still look for them in the window of the village shop.',
 'Could the shop display a short printed summary with a number to call for the full information?',
 'The owner is willing, although she cannot promise to replace notices every time a date changes.',
 'Then the council needs to assign someone to check the display and remove outdated copies.',
 'We should also make sure the phone number reaches a person who can answer questions, not just a recording.',
 'Agreed. Two channels are useful only if both remain accurate and accessible.'
],[q('What does Colin’s proposal aim to preserve?','Access for people who still use the shop display','The shop owner’s control over council announcements','A printed version containing every detail of the online notice','簡短紙本摘要及查詢電話可讓仍依靠村店告示的居民取得資訊。'),q('Why must responsibility for the display be assigned?','The owner cannot reliably replace copies whenever information changes','The owner has refused to display notices unless she writes them','The council has decided that print and online dates should differ','店主不能保證每次日期更改都更新，所以議會須安排專人檢查及移除舊告示。','inference'),q('What is the shared view of using two channels?','It helps only if both are maintained and lead to usable information','It guarantees access as soon as an online link is printed','It is worthwhile only if every resident uses both methods','他們認為兩種渠道都必須保持準確，並讓居民得到實際有用的資訊與協助。','speaker-opinion')]),
lesson(2,'The empty flat above the café',['Ruth','Kamal'],[
 'The owner wants to turn the empty flat above the café into a holiday let instead of renting it to a local tenant.',
 'Visitors may support the café, but one less long-term home matters in a village where rentals are scarce.',
 'The owner says seasonal income would help pay for repairs the building urgently needs.',
 'That is relevant too. Can the council tell us what rules apply and whether any repair grants are available?',
 'I will ask before assuming the owner has an easy alternative. We also need evidence about local housing demand.',
 'Yes. A useful discussion should consider the building’s condition as well as who needs somewhere to live.'
],[q('Which competing considerations shape their discussion?','Repair income for the building and scarce long-term rental housing','The café’s opening hours and the tenant’s preferred holiday dates','The number of café tables and the cost of the visitors’ transport','假日出租可能帶來維修收入，但也會減少本已短缺的長期出租單位。','paraphrase'),q('Why ask about repair grants?','Support might change the owner’s options for financing the work','A grant would establish that there is no local housing demand','The owner has agreed to accept any grant instead of holiday income','維修資助可能增加業主的選擇，因此應先查詢，再評估是否有可行替代方案。','inference'),q('What approach does Ruth adopt?','Check the options and evidence before assuming there is a simple solution','Accept the holiday let because repairs outweigh housing needs','Reject the holiday let without considering the building’s condition','Ruth 不先假設問題容易解決，而是查詢規則、資助及房屋需求。','speaker-opinion')]),
lesson(2,'A school street trial',['Nadia','Rob'],[
 'During the school street trial, cars cannot enter the road at drop-off time, but deliveries have been arriving then for years.',
 'The cleaner air may help children, while the shop still needs a practical way to receive stock.',
 'The owner says an earlier delivery might work on some days, though her supplier serves several villages.',
 'Could the trial record delivery problems as well as traffic levels and ask the supplier about its schedule?',
 'That would give the review something more useful than counting complaints on either side.',
 'Exactly. The trial should show what can be adjusted, not just whether people initially approve.'
],[q('What practical conflict does the trial expose?','The restricted period overlaps with established shop deliveries','The supplier’s route is being moved away from all the villages','Parents are being asked to deliver stock during the school run','試行禁車的時間與店舖多年來的送貨時間重疊。'),q('Why collect delivery problems alongside traffic levels?','The review should identify workable adjustments as well as benefits','Traffic levels matter only if the shop makes no complaints','A count of complaints would prove which side deserves priority','同時收集送貨問題與交通資料，才能了解試行的效果及可調整之處。','inference'),q('What does Rob think a trial should achieve?','Reveal what can be adapted rather than simply measure initial approval','Establish whether the supplier will accept the original scheme unchanged','Allow the shop’s existing schedule to determine every traffic restriction','Rob 認為試行應找出可改善之處，不能只統計最初有多少人贊成。','speaker-opinion')]),
lesson(2,'A seat at the market',['Ivy','Mo'],[
 'The market square has plenty of space, but my father cannot shop for long because there is nowhere to sit.',
 'A bench near the entrance might help, although it should not block the route for deliveries or wheelchairs.',
 'The traders suggested using the area beside the planter, but it is exposed to rain.',
 'Could we ask older shoppers and mobility groups where seating would be most useful before choosing a site?',
 'We could also check who would maintain a shelter if the council agrees to one.',
 'Good point. A seat is a simple idea, but its location and upkeep determine whether people can use it.'
],[q('Why might the traders’ suggested location be inadequate?','It offers space for a seat but little protection from rain','It blocks the entrance already used for wheelchair access','It is too far from the planter to allow a shelter','花槽旁雖可放座位，但位置沒有遮雨設施，仍要考慮遮蔽。','inference'),q('Why consult older shoppers and mobility groups?','Their experience can help identify where seating would actually be useful','Their agreement would remove the need to consider delivery access','They have already offered to fund and maintain the shelter','使用者的實際經驗可幫助選擇有用的位置，但不能代替通道及保養規劃。','inference'),q('What does Mo’s final comment stress?','Providing an object is only useful if its placement and upkeep work','The bench should be installed first and its location reviewed later','A council decision on a shelter would settle every maintenance question','Mo 指出，座位的選址及保養會決定它是否真正實用。','paraphrase')]),
lesson(2,'A library without a lift',['Pete','Sana'],[
 'The library plans a reading room upstairs, but the listed building has no lift and the stairs are steep.',
 'It would be disappointing to call the project inclusive if some residents cannot reach the room.',
 'The manager says structural changes need approval, so a lift might take longer than the refurbishment.',
 'Could an equivalent room downstairs be offered in the meantime, with the same books and activities?',
 'I will suggest that, while asking for a clear timetable for a longer-term accessible solution.',
 'That addresses the immediate barrier without treating a temporary arrangement as the end of the work.'
],[q('What is Sana’s concern about describing the project as inclusive?','Some residents could not reach the proposed reading room','The downstairs room would offer a wider selection of books','The refurbishment timetable has already ruled out all access changes','沒有升降機且樓梯陡峭，部分居民無法上樓，因此稱項目共融並不恰當。','speaker-opinion'),q('What would make the temporary downstairs room equivalent?','Access to the same books and activities','A similar name but fewer activities until the lift is approved','Use only by people who have already booked the upstairs room','Sana 建議樓下房間提供相同書籍及活動，並非較次等的替代安排。'),q('Why does Pete also want a timetable?','Immediate access should not remove pressure for a lasting solution','The temporary room needs to close before structural approval is requested','The manager has promised to finish the lift before the refurbishment','Pete 希望臨時措施與長遠改善並行，避免臨時安排成為工作的終點。','inference')]),
lesson(3,'The apple pressing day',['Eve','Kieran'],[
 'The orchard invites families to press surplus apples, but last year some fruit went unused after the event.',
 'Could a nearby kitchen take the remainder, provided the fruit is sound and someone can transport it promptly?',
 'The kitchen manager is interested, though she needs an estimate before arranging volunteers and storage.',
 'We could give her a rough range now, then weigh what remains at midday and phone her before anyone comes to collect it.',
 'I will check the handling requirements too. Fruit intended for food needs more care than fruit for compost.',
 'Then tell participants where each container goes, so enthusiasm does not create extra sorting afterwards.'
],[q('Why is an estimate important to the kitchen?','The amount affects how it organises volunteers and storage','The kitchen needs to set the orchard’s pressing schedule','The estimate determines whether any fruit can be composted','廚房需要知道大約數量，才能安排義工及儲存空間。'),q('What condition limits the offer to donate the remaining apples?','They must be suitable for food and transported promptly','They must all have been picked during the event itself','They must be weighed before any family presses apples','Kieran 提出水果要完好適合食用，而且能及時運送，才可交給廚房。'),q('What problem could clear container instructions prevent?','Extra sorting caused by mixing food donations with compost material','The kitchen having to confirm the quantity after the event','Volunteers needing any information about safe food handling','標清食用捐贈與堆肥容器，可避免參加者混放水果，事後要額外分類。','inference')]),
lesson(3,'A ceramic glaze sample',['Mara','Glyn'],[
 'The café wants fifty handmade mugs in exactly the same shade as the sample, but my glaze varies slightly in the kiln.',
 'Could you show them several finished pieces so they understand the range before placing an order?',
 'Yes, and I will explain that slight variation is part of the process, so I cannot guarantee an exact match.',
 'They may still need a fairly consistent appearance for their shelves. Ask what range they would accept.',
 'If they need an exact colour, I would rather say now that I cannot guarantee it than disappoint them after taking the order.',
 'That gives them a genuine choice and protects the relationship if the finished batch looks different.'
],[q('What does showing several finished pieces establish?','The range of colour variation the buyer should expect','Which single sample every mug will exactly reproduce','That the café has agreed to accept any shade produced','多件成品可展示正常色差範圍，但仍須詢問客人能否接受。','inference'),q('What should Mara establish before accepting the order?','How much variation the café can accept','Which glaze sample the café wants her to guarantee exactly','Whether the café regards any variation as proof of damage','她應先確認咖啡店可接受多少色差，才決定能否接單。'),q('Why would Mara decline an exact-colour requirement?','She values an honest agreement over a promise she cannot reliably meet','She thinks handmade work should be exempt from discussing expectations','She expects the café to change its display regardless of the mugs’ colour','Mara 寧願事先坦言做不到完全同色，也不想承諾無法穩定達到的要求。','speaker-opinion')]),
lesson(3,'A mill’s delivery round',['Ellis','Jude'],[
 'Our small mill could deliver flour to two more bakeries, but the van is already nearly full on Fridays.',
 'Could one bakery receive its order on Thursday, when the van returns from the northern route half empty?',
 'Possibly, although the baker would need dry storage for an extra day. I should ask rather than assume.',
 'Also compare the extra mileage with the benefit of combining journeys. A fuller van is not automatically the shortest route.',
 'I will map both options and include the driver’s working hours before quoting a delivery price.',
 'That should give the baker a practical choice and prevent the round from becoming unrealistic for the driver.'
],[q('What makes Thursday worth investigating?','There is unused capacity on a route already being operated','It would avoid the need for the baker to store flour','The new bakeries have already rejected Friday deliveries','周四現有路線回程有空間，因此值得研究，但仍需確認路線及儲存安排。'),q('Why must the baker be consulted?','An earlier delivery would require an extra day of dry storage','The van’s spare capacity means the baker must take a larger order','The baker would have to take over the northern delivery route','提早一天收貨需要多一天的乾燥儲存空間，不能假設麵包店一定有。','inference'),q('What does Jude caution against assuming?','That a fuller vehicle necessarily produces a more efficient route','That driver hours can be included when quoting the price','That two routes can be compared before the baker agrees','Jude 提醒，載貨較滿不代表路程較短；仍須比較里數及工作時間。','paraphrase')]),
lesson(3,'The basket maker’s repair',['Sian','Harvey'],[
 'A customer returned a basket with a broken handle and asked whether I could make it look completely new.',
 'Can you replace just the damaged weave without weakening the rest of the basket?',
 'Probably, but the fresh willow will be lighter until it ages. I cannot promise an invisible repair.',
 'Show the customer a repaired example and explain the colour change before agreeing a price.',
 'I will also check whether the basket carries heavy shopping, because that affects how I reinforce the handle.',
 'That is sensible. The appearance and the intended use both matter when deciding how to repair it.'
],[q('Why can Sian not promise an invisible repair?','Fresh willow will initially be lighter than the older material','The handle has to be reinforced with a different painted material','The customer’s use of the basket has already changed its shape','新柳條起初會比舊物料淺色，要待時間過去才逐漸變色。'),q('Why does intended use affect the repair?','The expected load influences how much reinforcement the handle needs','Heavy shopping would guarantee that the repaired colour matches sooner','A basket used for shopping cannot have its handle repaired','若籃子要承載重物，手柄便可能需要較強加固。','inference'),q('Which response would best continue Harvey’s advice?','I will show how the colour will differ and ask what the basket normally carries before quoting.','I will quote for an invisible repair first and discuss the fresh willow after the work is done.','I will reinforce it in the same way whatever the customer intends to carry.','先展示色差並了解用途，才能讓客人知情決定合適的修補方法及價錢。','best-response')]),
lesson(3,'A farm shop’s jam labels',['June','Arun'],[
 'The jam label says strawberries from our farm, but the last batch also used fruit from a neighbouring county when our crop failed.',
 'Then the wording should make the source clear instead of letting customers assume every berry came from this farm.',
 'We could name both farms on the label, although the proportions change with each batch.',
 'That sounds honest if both actually supplied that batch. Keep a record so the label can be checked.',
 'I will print smaller batches of labels, even though that takes more time than using the same roll all season.',
 'It may take longer, but customers can then understand what they are buying without guessing.'
],[q('What problem does Arun identify with the existing wording?','The label claims a farm origin that does not apply to all the fruit','The label identifies both farms but gives the wrong proportions','Customers may think the jam is made entirely outside the region','原有字眼可能令人以為全部水果來自這個農場；實際上部分來自另一供應農場。','inference'),q('When would naming both farms be accurate?','When both supplied fruit for the particular batch being labelled','Whenever either farm has supplied the shop at some point in the season','Only when the two farms supply exactly equal quantities','Arun 說只有兩個農場確實供應了該批水果，才可在那一批的標籤列出兩者。'),q('Why is printing smaller batches worth the extra work?','Labels can follow changing sources instead of outlasting their accuracy','The shop can avoid keeping records once a new label is printed','Smaller labels will show the proportion of fruit without checking it','少量印製可按每批來源更新，避免整季沿用已不準確的標籤。','inference')]),
lesson(3,'A seamstress at the fair',['Alma','Benji'],[
 'A visitor asked me to alter her coat while she waited at the craft fair, but I would need to inspect the lining first.',
 'Could you offer an assessment today and arrange the work later if the lining makes it more complicated?',
 'Yes. I can give a range of prices, but I should not give a final quote until I know what the job involves.',
 'Make clear whether the assessment costs anything, and when she can expect your findings and final quote.',
 'I will write that down for her and explain that the collection date will be confirmed once I have checked the coat and she accepts the quote.',
 'That should prevent either of you from mistaking an estimate for a confirmed agreement.'
],[q('Why does Alma prefer an assessment before a final quote?','The lining may reveal work not apparent from the outside','The visitor has already agreed to pay for any additional work','Assessing the coat would commit the visitor to having it altered','內襯可能令修改更複雜，因此要先檢查，才能確定工作範圍及報價。','inference'),q('What does Benji want made explicit before the visitor decides?','Any assessment fee and when the assessment will be completed','A final alteration price before the lining has been inspected','A collection date that applies even if the visitor declines the work','Benji 要求清楚說明評估是否收費，以及何時會有評估結果。'),q('What misunderstanding are they trying to prevent?','Treating a provisional estimate as a settled agreement','Treating a final quote as permission to inspect the lining','Assuming the visitor wants the coat returned after the fair','他們要避免把暫估價誤當成已確認的協議。','paraphrase')]),
lesson(3,'A grower’s herb trial',['Molly','Rafi'],[
 'The restaurant asked whether I could grow a lemon-scented basil for its summer menu, but it has not decided how much it would buy.',
 'Would a small trial plot let the chef test it before you give up land used for reliable crops?',
 'Yes, though the chef wants enough for several tasting sessions. I need to know when those would be.',
 'Agree the trial quantity and dates first, and distinguish that order from any possible regular supply.',
 'If the trial goes well, I can discuss next season, but planting a whole field now would leave me carrying all the risk.',
 'Exactly. Interest in a new product is useful, but it is not the same as a commitment to buy it.'
],[q('Why does Rafi suggest a small trial plot?','It allows testing while limiting the grower’s exposure to uncertain demand','It guarantees the restaurant will order the whole crop','It avoids having to agree dates for the tasting sessions','小規模試種可讓廚師試用，同時減低需求未明對種植者造成的風險。','inference'),q('What should be agreed before the trial begins?','A specific quantity and tasting schedule, separate from future supply','A full field of basil for an unspecified number of meals','A regular order that starts before the chef tastes the herb','試種前應確認數量及試食時間，並與日後可能的常規供貨分開處理。'),q('What distinction does Rafi make?','Expressing interest does not amount to agreeing a purchase','A successful trial always requires a full field of the crop','A tasting order prevents any discussion of future supply','Rafi 指出，表示有興趣不等於已承諾購買。','paraphrase')]),
lesson(4,'The lost train ticket',['Clare','Daniel'],[
 'When I was ten, I lost my return train ticket on a trip with my grandfather and was sure we would be stranded.',
 'Did he find it before the train arrived, or did you have to miss the train?',
 'Neither. He calmly explained the situation at the ticket office and bought another ticket in time, although I knew money was tight.',
 'I imagine you felt guilty as well as relieved. Did he mention the cost afterwards?',
 'Only once, to suggest keeping important things in a zipped pocket. Years later I understood how deliberately calm he had been.',
 'The memory seems to have changed as you grew older: first it was about the ticket, then about his kindness.'
],[q('How was the immediate problem resolved?','Her grandfather paid for a replacement ticket','The ticket office found the original ticket','They postponed the journey until the ticket was found','祖父到售票處說明情況，並買了另一張車票。'),q('What did Clare come to appreciate as she grew older?','His calm response had required effort because the expense mattered','He had known the ticket would be found before they travelled','The replacement had cost less than she had originally imagined','Clare 長大後才明白，祖父在手頭拮据下仍刻意保持冷靜，是一份體諒。','inference'),q('How does Daniel interpret the changing meaning of the memory?','Clare now notices her grandfather’s kindness behind the practical solution','Clare has replaced an accurate childhood memory with a different event','Clare now sees the pocket advice as more important than the calm response','Daniel 認為她兒時只在意車票，長大後才看懂祖父處理事情時的善意。','speaker-opinion')]),
lesson(5,'Starting a community tool library',['Grace','Hassan'],[
 'The community centre is considering a tool library, so residents can borrow a drill instead of each buying one.',
 'That might reduce purchases, but someone would need to inspect the tools and explain how to use them safely.',
 'A local repairer has offered to train volunteers, although we have not yet found money for replacement parts.',
 'Could you start with a small selection and keep a record of repairs, borrowing and costs?',
 'Yes. We can then decide whether demand justifies expanding, rather than collecting equipment we cannot maintain.',
 'And publish the borrowing conditions clearly, including what happens if a tool is damaged or returned late.'
],[q('What qualifies Hassan’s support for the idea?','Sharing tools still requires safety checks and clear borrowing conditions','Avoiding purchases matters more than whether the tools can be maintained','Volunteer training would remove the need for any future inspections','Hassan 認為共用工具有好處，但仍需檢查、使用指導及清楚的借用條款。','speaker-opinion'),q('What remains unresolved despite the repairer’s offer?','How replacement parts will be funded','Whether anyone can provide volunteer training','Whether the centre is considering shared tools','維修師傅願意培訓義工，但替換零件的資金仍未解決。'),q('Why keep records during a small initial scheme?','To judge whether demand and maintenance costs support expansion','To establish that trained volunteers will never need spare parts','To delay publishing conditions until enough people have borrowed tools','先記錄借用量、維修及成本，可按實際需求和維持能力決定是否擴展。','inference')]),
lesson(6,'Paying for a public workshop',['Jo','Malik'],[
 'The arts centre wants to charge for its workshop because the materials and tutor are expensive.',
 'A fee could keep the programme running, but it might exclude people who would benefit most.',
 'What if participants could pay what they can, with a suggested amount that reflects the actual cost?',
 'That could help, although the centre would need enough income to cover the difference. Perhaps a sponsor could fund some places.',
 'I would also ask privately about anything that might prevent people taking part, rather than making anyone explain their finances at the door.',
 'Agreed. Fair access and a sustainable budget both need attention, and neither happens automatically.'
],[q('What tension does Malik identify?','Covering the programme’s costs may make access harder for some people','A suggested contribution would necessarily cost more than a fixed fee','Materials are expensive only when the workshop is fully booked','Malik 指出，收費可維持活動，但也可能令最有需要的人無法參加。','inference'),q('Why might sponsorship still be needed under a pay-what-you-can arrangement?','Participants’ contributions may fall short of the cost','Every participant would be required to pay the suggested amount','The suggested amount would exclude materials from the budget','自定付款額未必足以支付全部成本，因此可能需要贊助補貼部分名額。','inference'),q('What concern guides Jo’s suggestion about asking privately?','People should be able to discuss access without public financial disclosure','People should explain their finances before asking about access needs','Private conversations would remove the need to plan a sustainable budget','Jo 希望私下了解參與需要，避免有人要在門口公開交代財務狀況。','speaker-opinion')]),
lesson(7,'Qualifying a prediction',['Examiner','Maya'],[
 'You have said that digital services will make every high street unnecessary. Do you think there are any exceptions?',
 'Yes. I stated that too strongly. Some people value seeing products in person, and others need services they can reach without using an app.',
 'How would you revise your prediction to take those needs into account?',
 'I would say online services may reduce demand for some shops, while high streets could adapt by offering a mixture of services and social spaces.',
 'Does that mean every town will adapt successfully?',
 'No. The result will depend on local resources and transport, so I would avoid promising the same outcome everywhere.'
],[q('What prompts Maya to revise her original claim?','She recognises needs that digital services alone may not meet','The examiner supplies evidence that all online services are declining','She realises that every high street already offers the same services','Maya 承認有些人需要親身看商品或不用程式便可使用的服務，所以原說法太絕對。','inference'),q('How does her revised prediction differ from the first?','It allows different roles for high streets rather than assuming they will all become unnecessary','It predicts that every town will replace shops with identical social spaces','It assumes online demand will disappear once shops offer more services','修改後的預測容許商業街透過不同服務轉型，不再斷言所有商業街都會失去作用。','paraphrase'),q('Which follow-up answer is most consistent with her final position?','I would compare local resources and transport before predicting how a particular town will adapt.','I would expect the same outcome wherever a town introduces digital services.','I would use the number of apps alone to decide whether a town can adapt.','Maya 說結果取決於本地資源及交通，因此要了解個別城鎮的條件才作預測。','best-response')]),
]
