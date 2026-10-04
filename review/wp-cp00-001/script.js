const roles = [
  'Quản trị hệ thống', 'Hiệu trưởng', 'Phó hiệu trưởng', 'Trưởng phòng',
  'Phó phòng', 'Trưởng khoa', 'Phó khoa', 'Chuyên viên',
  'Giáo viên', 'Người học', 'Phụ huynh', 'Doanh nghiệp'
];

const scopes = ['leadership', 'faculty', 'office', 'learning', 'family', 'partner'];
const accountsFixture = {
  admin: {
    name: 'Quản trị hệ thống', primaryRole: 'Quản trị hệ thống',
    roles: ['Quản trị hệ thống'], scopes: [...scopes], password: 'demo', functionGrants: []
  },
  nguyenvana: {
    name: 'Nguyễn Văn A', primaryRole: 'Hiệu trưởng',
    roles: ['Hiệu trưởng', 'Trưởng phòng'], scopes: ['leadership'], password: 'demo',
    functionGrants: [{ functionId:'manifesto', scopes:['DOC-MANIFESTO-V3'] }]
  },
  thukyB: {
    name: 'Trần Thị B', primaryRole: 'Chuyên viên',
    roles: ['Chuyên viên'], scopes: ['leadership'], password: 'demo',
    functionGrants: [],
    delegatedCalendar: { target: 'nguyenvana', scope: 'leadership' }
  },
  giaovienE: {
    name: 'Lê Minh E', primaryRole: 'Giáo viên',
    roles: ['Giáo viên'], scopes: ['faculty'], password: 'demo',
    functionGrants: [
      { functionId:'technical', scopes:['DOC-TECH-SAD-V1','DOC-TECH-DD-V0.3'] },
      { functionId:'lis', scopes:['LIS-CONTEXT-DEMO-01'] },
      { functionId:'ris', scopes:['RIS-PROJECT-DEMO-01'] }
    ]
  },
  ketoanG: {
    name: 'Nguyễn G', primaryRole: 'Chuyên viên',
    roles: ['Chuyên viên'], scopes: [], password: 'demo',
    functionGrants: [{ functionId:'fis', scopes:['FIS-RESOURCE-UNIT-DEMO-01'] }]
  },
  nguoihocC: {
    name: 'Phạm An C', primaryRole: 'Người học',
    roles: ['Người học'], scopes: ['learning'], password: 'demo', functionGrants: []
  },
  phuhuynhD: {
    name: 'Đỗ Thanh D', primaryRole: 'Phụ huynh',
    roles: ['Phụ huynh'], scopes: ['family'], password: 'demo', functionGrants: []
  },
  doanhnghiepF: {
    name: 'Công ty Minh Phát', primaryRole: 'Doanh nghiệp',
    roles: ['Doanh nghiệp'], scopes: ['partner'], password: 'demo', functionGrants: []
  }
};

const dictionary = {
  vi: {
    appTitle:'NUTE · Không gian làm việc', logout:'Đăng xuất', login:'Đăng nhập', languageLabel:'Ngôn ngữ', closeLabel:'Đóng',
    menuLabel:'Menu chính', taskFilterLabel:'Lọc nhiệm vụ', welcomeEyebrow:'NUTE · Không gian chung',
    welcomeTitle:'Cùng kết nối, cùng phát triển', welcomeText:'Xem tin tức và thông báo được chia sẻ công khai.',
    publicLabel:'Dành cho mọi người', newsTitle:'Tin công khai', loginTitle:'Đăng nhập tài khoản',
    loginIntro:'Dùng tài khoản cá nhân để mở không gian làm việc của bạn.', accountLabel:'Tài khoản',
    passwordLabel:'Mật khẩu', demoAccounts:'Tài khoản dùng thử: nguyenvana, admin, thukyB, giaovienE, nguoihocC, phuhuynhD, doanhnghiepF · Mật khẩu: demo',
    demoNotice:'Đây là không gian trải nghiệm với thông tin minh họa.', loginError:'Thông tin đăng nhập chưa chính xác. Vui lòng thử lại.',
    navDashboard:'Tổng quan', navWorkspace:'Bàn làm việc', navCalendar:'Lịch', navAssistant:'HUMA+AI', navAdmin:'Gán vai trò',
    yourWorkspace:'Không gian của bạn', hello:'Xin chào', dashboardIntro:'Các nội dung hiển thị theo thông tin minh họa được gán cho tài khoản này.',
    openTasks:'Nhiệm vụ cần xử lý', upcomingEvents:'Lịch sắp tới', yourContext:'Thông tin vai trò',
    activeRole:'Vai trò đang dùng', switchContext:'Chuyển vai trò', primaryRole:'Vai trò chính',
    allAssignedRoles:'Các vai trò được gán', yourScope:'Phạm vi minh họa', focusToday:'Hôm nay',
    workPreview:'Việc cần quan tâm', seeAll:'Xem tất cả', workTitle:'Bàn làm việc',
    workIntro:'Danh sách việc phù hợp với vai trò và phạm vi đang dùng.', filterAll:'Tất cả',
    filterOpen:'Cần xử lý', taskCol:'Nhiệm vụ', ownerCol:'Phụ trách', dueCol:'Thời hạn',
    statusCol:'Trạng thái', actionCol:'Chi tiết', noTasks:'Chưa có nhiệm vụ minh họa cho vai trò này.',
    calendarTitle:'Lịch làm việc', mySchedule:'Lịch của tôi',
    calendarIntro:'Các lịch được chia sẻ trong phạm vi minh họa của bạn.', eventCol:'Sự kiện',
    dateCol:'Ngày, giờ', locationCol:'Địa điểm', personCol:'Cá nhân', noEvents:'Chưa có lịch trong phạm vi này.',
    editSchedule:'Tạo hoặc sửa lịch',
    calendarPermissionNote:'Bạn có thể tạo lịch cho mình. Lịch của cá nhân khác chỉ có thể được chỉnh sửa khi được giao trong ví dụ này.',
    eventLabel:'Nội dung', dateTimeLabel:'Ngày và giờ', locationLabel:'Địa điểm', calendarFor:'Lịch của',
    saveEvent:'Lưu lịch', cancel:'Hủy', eventSaved:'Đã lưu lịch minh họa.',
    eventSaveError:'Không thể lưu lịch cho cá nhân này trong phạm vi hiện tại.',
    eventRequired:'Vui lòng nhập nội dung, ngày giờ và địa điểm.',
    calendarModeOwn:'Bạn đang tạo lịch cho mình.', calendarModeDelegated:'Bạn đang tạo lịch minh họa cho Nguyễn Văn A.',
    calendarSelf:'Tôi', calendarDelegated:'Nguyễn Văn A', editEvent:'Sửa',
    assistantTitle:'Cùng suy nghĩ, cùng soạn thảo',
    assistantIntro:'Chọn một cách hỗ trợ để xem gợi ý hoặc bản nháp minh họa.',
    analyze:'Phân tích', draft:'Soạn thảo', review:'Phản biện',
    assistantNote:'Nội dung chỉ là gợi ý tham khảo hoặc bản nháp để bạn tự xem xét.',
    assignmentTitle:'Vai trò và phạm vi',
    accountSettings:'Tài khoản',
    assignmentIntro:'Chọn một tài khoản, rồi cập nhật vai trò chính, các vai trò được gán và phạm vi minh họa.',
    chooseAccount:'Cá nhân', assignedRolesLegend:'Các vai trò được gán',
    scopeLegend:'Phạm vi minh họa', delegationLabel:'Mô phỏng phân công tạo và sửa sự kiện lịch cho Hiệu trưởng trong phạm vi Ban giám hiệu',
    delegationNote:'Đây chỉ là phân công minh họa, không cấp quyền thực tế; không bao gồm duyệt lịch hoặc quyết định thay người khác.',
    saveAssignment:'Lưu thay đổi', assignmentSaved:'Đã cập nhật thông tin minh họa.',
    assignmentNeedsRole:'Hãy chọn ít nhất một vai trò.', assignmentPrimaryError:'Vai trò chính cần nằm trong danh sách vai trò được gán.',
    scopeNotice:'Nội dung và phạm vi ở đây chỉ dùng để minh họa trải nghiệm.',
    scopeLeadership:'Ban giám hiệu', scopeFaculty:'Khoa CNTT', scopeOffice:'Phòng hành chính',
    scopeLearning:'Học tập của tôi', scopeFamily:'Thông tin gia đình của tôi', scopePartner:'Hợp tác của tôi',
    taskDetail:'Thông tin nhiệm vụ', statusOpen:'Cần xử lý', statusTrack:'Đang theo dõi', statusDone:'Đã hoàn tất',
    news1Title:'Lịch hoạt động tuần này', news1Text:'Một số hoạt động chung sẽ diễn ra trong tuần. Mời mọi người theo dõi thông báo tiếp theo.',
    news2Title:'Chào mừng năm học mới', news2Text:'Chúc cộng đồng NUTE có một năm học nhiều trải nghiệm tích cực.',
    news3Title:'Thông tin kết nối', news3Text:'Các cập nhật chung được chia sẻ tại không gian tin công khai.',
    taskPrincipal1:'Xem kế hoạch hoạt động tuần', taskPrincipal2:'Chuẩn bị nội dung họp giao ban',
    taskHeadOffice1:'Tổng hợp tiến độ đơn vị', taskHeadOffice2:'Rà soát lịch công tác trong tuần',
    taskSpecialist1:'Chuẩn bị tài liệu cuộc họp', taskTeacher1:'Cập nhật kế hoạch bài giảng',
    taskLearner1:'Xem nội dung học tập tuần này', taskParent1:'Xem thông tin học tập được chia sẻ',
    taskBusiness1:'Xem nội dung kết nối đã gửi', taskAdmin1:'Rà soát danh sách tài khoản minh họa',
    ownerLeadership:'Ban giám hiệu', ownerOffice:'Phòng hành chính', ownerFaculty:'Khoa CNTT',
    ownerTeacher:'Giáo viên phụ trách', ownerFamily:'Thông tin gia đình', ownerPartner:'Đầu mối kết nối',
    eventMeeting:'Trao đổi công việc trong tuần', eventClass:'Sinh hoạt lớp', eventFamily:'Trao đổi lịch học',
    eventPartner:'Buổi kết nối hợp tác', eventEditSelf:'Lịch cá nhân', eventSecretary:'Chuẩn bị nội dung họp',
    eventSavedOwn:'Đã lưu sự kiện mẫu trong bản xem trước của phiên này.', eventSavedDelegated:'Đã lưu lịch minh họa cho Nguyễn Văn A.',
    assistantAnalyze:'Gợi ý phân tích: xem lại các nhiệm vụ trong phạm vi của bạn, xác định điểm cần làm rõ và sắp xếp chúng theo thời hạn. Đây chỉ là gợi ý để bạn tự cân nhắc.',
    assistantDraft:'Bản nháp: “Xin chào, tôi xin gửi nội dung để mọi người cùng tham khảo. Vui lòng góp ý hoặc bổ sung thông tin còn thiếu.” Hãy tự xem lại trước khi sử dụng.',
    assistantReview:'Gợi ý phản biện: cân nhắc kiểm tra mục tiêu, thời hạn, người liên quan và thông tin còn thiếu. Đây không phải kết luận hay xác nhận.',
    noRoleTasks:'Chưa có nhiệm vụ minh họa cho vai trò đang dùng.', noContext:'Chọn vai trò đã được gán',
    roleAdmin:'Quản trị hệ thống', rolePrincipal:'Hiệu trưởng', roleVicePrincipal:'Phó hiệu trưởng',
    roleHeadOffice:'Trưởng phòng', roleDeputyOffice:'Phó phòng', roleHeadFaculty:'Trưởng khoa',
    roleDeputyFaculty:'Phó khoa', roleSpecialist:'Chuyên viên', roleTeacher:'Giáo viên',
    roleLearner:'Người học', roleParent:'Phụ huynh', roleBusiness:'Doanh nghiệp'
  },
  en: {
    appTitle:'NUTE · Workspace', logout:'Log out', login:'Log in', languageLabel:'Language', closeLabel:'Close',
    menuLabel:'Main menu', taskFilterLabel:'Filter tasks', welcomeEyebrow:'NUTE · Shared space',
    welcomeTitle:'Connect and grow together', welcomeText:'Browse publicly shared news and announcements.',
    publicLabel:'For everyone', newsTitle:'Public news', loginTitle:'Sign in to your account',
    loginIntro:'Use your personal account to open your workspace.', accountLabel:'Account',
    passwordLabel:'Password', demoAccounts:'Sample accounts: nguyenvana, admin, thukyB, giaovienE, nguoihocC, phuhuynhD, doanhnghiepF · Password: demo',
    demoNotice:'This is a sample experience with illustrative information.', loginError:'Those sign-in details did not match. Please try again.',
    navDashboard:'Overview', navWorkspace:'My work', navCalendar:'Calendar', navAssistant:'HUMA+AI', navAdmin:'Role setup',
    yourWorkspace:'Your workspace', hello:'Hello', dashboardIntro:'Content is shown using illustrative information assigned to this account.',
    openTasks:'Items to follow up', upcomingEvents:'Upcoming events', yourContext:'Role information',
    activeRole:'Current role', switchContext:'Switch role', primaryRole:'Primary role',
    allAssignedRoles:'Assigned roles', yourScope:'Sample scope', focusToday:'Today',
    workPreview:'A few things to focus on', seeAll:'See all', workTitle:'My work',
    workIntro:'Items shown for the selected role and scope.', filterAll:'All',
    filterOpen:'To do', taskCol:'Item', ownerCol:'Owner', dueCol:'Due', statusCol:'Status',
    actionCol:'Details', noTasks:'There are no sample items for this role.',
    calendarTitle:'Calendar', mySchedule:'My calendar',
    calendarIntro:'Events shared within your illustrative scope.', eventCol:'Event',
    dateCol:'Date and time', locationCol:'Location', personCol:'Person', noEvents:'No events in this scope.',
    editSchedule:'Create or edit an event',
    calendarPermissionNote:'You can create events for yourself. In this example, another person’s calendar can only be edited when assigned to you.',
    eventLabel:'Title', dateTimeLabel:'Date and time', locationLabel:'Location', calendarFor:'Calendar for',
    saveEvent:'Save event', cancel:'Cancel', eventSaved:'Sample event saved.',
    eventSaveError:'This event cannot be saved for that person in the current scope.',
    eventRequired:'Enter a title, date and time, and location.',
    calendarModeOwn:'You are creating an event for yourself.', calendarModeDelegated:'You are creating a sample event for Nguyễn Văn A.',
    calendarSelf:'Me', calendarDelegated:'Nguyễn Văn A', editEvent:'Edit',
    assistantTitle:'Think and write together',
    assistantIntro:'Choose an option to see a sample suggestion or draft.',
    analyze:'Analyze', draft:'Draft', review:'Review',
    assistantNote:'Content is only a suggestion or draft for you to consider.',
    assignmentTitle:'Roles and scopes', accountSettings:'Accounts',
    assignmentIntro:'Choose an account, then update its primary role, assigned roles, and sample scopes.',
    chooseAccount:'Person', assignedRolesLegend:'Assigned roles',
    scopeLegend:'Sample scopes', delegationLabel:'Simulate assigning calendar event creation and editing to the Principal within the Leadership scope',
    delegationNote:'This is a sample assignment only; it grants no real permissions and does not include approval or decisions on another person’s behalf.',
    saveAssignment:'Save changes', assignmentSaved:'Sample account details updated.',
    assignmentNeedsRole:'Choose at least one role.', assignmentPrimaryError:'The primary role must be among the assigned roles.',
    scopeNotice:'Information and scopes here are for illustration only.',
    scopeLeadership:'Leadership', scopeFaculty:'IT Faculty', scopeOffice:'Administrative Office',
    scopeLearning:'My learning', scopeFamily:'My family information', scopePartner:'My partnership',
    taskDetail:'Item details', statusOpen:'To do', statusTrack:'In progress', statusDone:'Completed',
    news1Title:'This week’s activities', news1Text:'A few community activities are planned this week. Please look out for further updates.',
    news2Title:'Welcome to a new academic year', news2Text:'Wishing the NUTE community a positive and rewarding year.',
    news3Title:'Community updates', news3Text:'Shared updates are available in the public news area.',
    taskPrincipal1:'Review this week’s activity plan', taskPrincipal2:'Prepare topics for the weekly meeting',
    taskHeadOffice1:'Summarize unit progress', taskHeadOffice2:'Review this week’s calendar',
    taskSpecialist1:'Prepare meeting materials', taskTeacher1:'Update the lesson plan',
    taskLearner1:'Review this week’s learning materials', taskParent1:'View shared learning information',
    taskBusiness1:'View the partnership information shared with you', taskAdmin1:'Review sample account list',
    ownerLeadership:'Leadership team', ownerOffice:'Administrative Office', ownerFaculty:'IT Faculty',
    ownerTeacher:'Assigned teacher', ownerFamily:'Family information', ownerPartner:'Partnership contact',
    eventMeeting:'Weekly work discussion', eventClass:'Class session', eventFamily:'Learning schedule discussion',
    eventPartner:'Partnership meeting', eventEditSelf:'Personal event', eventSecretary:'Prepare meeting materials',
    eventSavedOwn:'Sample event saved in this session’s preview.', eventSavedDelegated:'Sample event saved for Nguyễn Văn A.',
    assistantAnalyze:'Analysis suggestion: review items within your scope, identify what needs clarification, and arrange them by due date. Consider this suggestion at your discretion.',
    assistantDraft:'Draft: “Hello, I am sharing this for everyone’s consideration. Please add comments or any missing information.” Review it yourself before use.',
    assistantReview:'Review suggestion: consider checking the goal, timing, people involved, and any missing information. This is not a conclusion or confirmation.',
    noRoleTasks:'There are no sample tasks for the selected role.', noContext:'Choose an assigned role',
    roleAdmin:'System administrator', rolePrincipal:'Principal', roleVicePrincipal:'Vice principal',
    roleHeadOffice:'Department head', roleDeputyOffice:'Deputy department head', roleHeadFaculty:'Faculty dean',
    roleDeputyFaculty:'Deputy faculty dean', roleSpecialist:'Specialist', roleTeacher:'Teacher',
    roleLearner:'Learner', roleParent:'Parent', roleBusiness:'Business partner'
  },
  zh: {
    appTitle:'NUTE · 工作空间', logout:'退出登录', login:'登录', languageLabel:'语言', closeLabel:'关闭',
    menuLabel:'主菜单', taskFilterLabel:'筛选事项', welcomeEyebrow:'NUTE · 共享空间',
    welcomeTitle:'携手连接，共同成长', welcomeText:'浏览公开分享的新闻和通知。',
    publicLabel:'面向所有人', newsTitle:'公开信息', loginTitle:'登录个人账户',
    loginIntro:'使用个人账户进入您的工作空间。', accountLabel:'账户',
    passwordLabel:'密码', demoAccounts:'体验账户：nguyenvana、admin、thukyB、giaovienE、nguoihocC、phuhuynhD、doanhnghiepF · 密码：demo',
    demoNotice:'这是包含示例信息的体验空间。', loginError:'账户信息不匹配，请重试。',
    navDashboard:'总览', navWorkspace:'工作台', navCalendar:'日程', navAssistant:'HUMA+AI', navAdmin:'角色设置',
    yourWorkspace:'您的空间', hello:'您好', dashboardIntro:'此处内容根据分配给该账户的示例信息显示。',
    openTasks:'待跟进事项', upcomingEvents:'近期日程', yourContext:'角色信息',
    activeRole:'当前角色', switchContext:'切换角色', primaryRole:'主要角色',
    allAssignedRoles:'已分配角色', yourScope:'示例范围', focusToday:'今天',
    workPreview:'关注事项', seeAll:'查看全部', workTitle:'工作台',
    workIntro:'显示当前角色和范围内的事项。', filterAll:'全部',
    filterOpen:'待处理', taskCol:'事项', ownerCol:'负责人', dueCol:'期限',
    statusCol:'状态', actionCol:'详情', noTasks:'该角色暂无示例事项。',
    calendarTitle:'工作日程', mySchedule:'我的日程',
    calendarIntro:'在您的示例范围内共享的日程。', eventCol:'活动',
    dateCol:'日期和时间', locationCol:'地点', personCol:'个人', noEvents:'此范围内暂无日程。',
    editSchedule:'创建或修改日程',
    calendarPermissionNote:'您可以为自己创建日程。在此示例中，只有获得安排后才能修改他人的日程。',
    eventLabel:'内容', dateTimeLabel:'日期和时间', locationLabel:'地点', calendarFor:'日程所属',
    saveEvent:'保存日程', cancel:'取消', eventSaved:'示例日程已保存。',
    eventSaveError:'当前范围内无法为此个人保存日程。',
    eventRequired:'请填写内容、日期时间和地点。',
    calendarModeOwn:'您正在为自己创建日程。', calendarModeDelegated:'您正在为 Nguyễn Văn A 创建示例日程。',
    calendarSelf:'我', calendarDelegated:'Nguyễn Văn A', editEvent:'修改',
    assistantTitle:'共同思考与撰写',
    assistantIntro:'选择一种方式，查看示例建议或草稿。',
    analyze:'分析', draft:'起草', review:'评议',
    assistantNote:'内容仅供参考或作为草稿，请您自行审阅。',
    assignmentTitle:'角色与范围', accountSettings:'账户',
    assignmentIntro:'选择账户，然后更新主要角色、已分配角色和示例范围。',
    chooseAccount:'个人', assignedRolesLegend:'已分配角色',
    scopeLegend:'示例范围', delegationLabel:'模拟在领导团队范围内为校长分配创建和修改日程的任务',
    delegationNote:'此分配仅为示例，不授予任何实际权限，也不包含代他人审批或作出决定。',
    saveAssignment:'保存更改', assignmentSaved:'示例账户信息已更新。',
    assignmentNeedsRole:'请至少选择一个角色。', assignmentPrimaryError:'主要角色必须属于已分配角色。',
    scopeNotice:'此处的信息和范围仅用于体验示例。',
    scopeLeadership:'领导团队', scopeFaculty:'信息技术学院', scopeOffice:'行政办公室',
    scopeLearning:'我的学习', scopeFamily:'我的家庭信息', scopePartner:'我的合作事项',
    taskDetail:'事项详情', statusOpen:'待处理', statusTrack:'进行中', statusDone:'已完成',
    news1Title:'本周活动安排', news1Text:'本周将举行一些社区活动，请留意后续通知。',
    news2Title:'欢迎新学年', news2Text:'祝愿NUTE社区开启充实而积极的新学年。',
    news3Title:'社区信息', news3Text:'公开信息区域分享各项最新动态。',
    taskPrincipal1:'查看本周活动计划', taskPrincipal2:'准备每周会议议题',
    taskHeadOffice1:'汇总部门进度', taskHeadOffice2:'检查本周工作日程',
    taskSpecialist1:'准备会议材料', taskTeacher1:'更新课程计划',
    taskLearner1:'查看本周学习材料', taskParent1:'查看已分享的学习信息',
    taskBusiness1:'查看分享给您的合作信息', taskAdmin1:'检查示例账户列表',
    ownerLeadership:'领导团队', ownerOffice:'行政办公室', ownerFaculty:'信息技术学院',
    ownerTeacher:'负责教师', ownerFamily:'家庭信息', ownerPartner:'合作联系人',
    eventMeeting:'每周工作交流', eventClass:'班级活动', eventFamily:'讨论学习安排',
    eventPartner:'合作交流会议', eventEditSelf:'个人日程', eventSecretary:'准备会议材料',
    eventSavedOwn:'示例日程已保存至本次会话的预览中。', eventSavedDelegated:'已为 Nguyễn Văn A 保存示例日程。',
    assistantAnalyze:'分析建议：查看您范围内的事项，找出需要澄清的内容，并按期限整理。请自行斟酌此建议。',
    assistantDraft:'草稿：“您好，现分享以下内容供大家参考。欢迎提出意见或补充缺失信息。”使用前请自行审阅。',
    assistantReview:'评议建议：可检查目标、时间安排、相关人员及缺失信息。这不是结论或确认。',
    noRoleTasks:'当前角色暂无示例任务。', noContext:'请选择已分配的角色',
    roleAdmin:'系统管理员', rolePrincipal:'校长', roleVicePrincipal:'副校长',
    roleHeadOffice:'部门负责人', roleDeputyOffice:'副部门负责人', roleHeadFaculty:'学院负责人',
    roleDeputyFaculty:'副学院负责人', roleSpecialist:'专员', roleTeacher:'教师',
    roleLearner:'学习者', roleParent:'家长', roleBusiness:'企业'
  }
};

const roleKeys = {
  'Quản trị hệ thống':'roleAdmin', 'Hiệu trưởng':'rolePrincipal',
  'Phó hiệu trưởng':'roleVicePrincipal', 'Trưởng phòng':'roleHeadOffice',
  'Phó phòng':'roleDeputyOffice', 'Trưởng khoa':'roleHeadFaculty',
  'Phó khoa':'roleDeputyFaculty', 'Chuyên viên':'roleSpecialist',
  'Giáo viên':'roleTeacher', 'Người học':'roleLearner',
  'Phụ huynh':'roleParent', 'Doanh nghiệp':'roleBusiness'
};
const scopeKeys = {
  leadership:'scopeLeadership', faculty:'scopeFaculty', office:'scopeOffice',
  learning:'scopeLearning', family:'scopeFamily', partner:'scopePartner'
};

const functionSpecs = [
  { id:'manifesto', titleKey:'functionManifesto', scopeIds:['DOC-MANIFESTO-V3'] },
  { id:'technical', titleKey:'functionTechnical', scopeIds:['DOC-TECH-SAD-V1','DOC-TECH-DD-V0.3'] },
  { id:'ris', titleKey:'functionRIS', scopeIds:['RIS-PROJECT-DEMO-01'] },
  { id:'lis', titleKey:'functionLIS', scopeIds:['LIS-CONTEXT-DEMO-01'] },
  { id:'fis', titleKey:'functionFIS', scopeIds:['FIS-RESOURCE-UNIT-DEMO-01'] }
];
const documentFixtures = [
  {
    functionId:'manifesto', scope:'DOC-MANIFESTO-V3', id:'DOC-MANIFESTO-V3',
    titleKey:'documentManifesto', file:'1. Tuyen_ngon_ACI-OS_V3.pdf', version:'V3',
    contractNoteKey:'manifestoContractName'
  },
  {
    functionId:'technical', scope:'DOC-TECH-SAD-V1', id:'DOC-TECH-SAD-V1',
    titleKey:'documentSAD', file:'ACI-OS_System_Architecture_Dossier_v1.0.pdf', version:'v1.0'
  },
  {
    functionId:'technical', scope:'DOC-TECH-DD-V0.3', id:'DOC-TECH-DD-V0.3',
    titleKey:'documentDetailedDesign', file:'ACI_OS_Detailed_System_Design_V0.3.pdf', version:'V0.3',
    internalHeader:'V0.2-R2', contractNoteKey:'detailedDesignHeader'
  }
];
const objectTypes = {
  lis: [
    ['objectLearnerContext','typeLearnerContext'], ['objectLearningIntent','typeLearningIntent'],
    ['objectKnowledgeState','typeKnowledgeState'], ['objectCompetencyState','typeCompetencyState'],
    ['objectLearningCapability','typeLearningCapability'], ['objectLearningProduct','typeLearningProduct'],
    ['objectAssessmentContract','typeAssessmentContract'], ['objectCompetencyEvidence','typeCompetencyEvidence'],
    ['objectReflection','typeReflection'], ['objectFeedback','typeFeedback'],
    ['objectCapabilityPortfolio','typeCapabilityPortfolio'], ['objectKnowledgeFlow','typeKnowledgeFlow']
  ],
  ris: [
    ['objectProblem','typeProblem'], ['objectQuestion','typeQuestion'],
    ['objectResearchContext','typeResearchContext'], ['objectKnowledgeState','typeKnowledgeState'],
    ['objectGap','typeGap'], ['objectHypothesis','typeHypothesis'], ['objectClaim','typeClaim'],
    ['objectMethod','typeMethod'], ['objectExperiment','typeExperiment'], ['objectEvidence','typeEvidence'],
    ['objectCounterevidence','typeCounterevidence'], ['objectVerification','typeVerification'],
    ['objectNoveltyState','typeNoveltyState'], ['objectResearchProduct','typeResearchProduct'],
    ['objectResearchCapital','typeResearchCapital'], ['objectResearchMemory','typeResearchMemory']
  ],
  fis: [
    ['objectResource','typeResource'], ['objectBudget','typeBudget'], ['objectCost','typeCost'],
    ['objectCommitment','typeCommitment'], ['objectTransaction','typeTransaction'],
    ['objectAllocation','typeAllocation'], ['objectUse','typeUse'], ['objectOutcome','typeOutcome'],
    ['objectEfficiency','typeEfficiency'], ['objectRisk','typeRisk'], ['objectEvidence','typeEvidence'],
    ['objectDecision','typeDecision']
  ]
};
const domainFixtures = {
  lis: {
    scope:'LIS-CONTEXT-DEMO-01', section:'§24.5', pages:'49–50'
  },
  ris: {
    scope:'RIS-PROJECT-DEMO-01', section:'§24.6', pages:'50–51'
  },
  fis: { scope:'FIS-RESOURCE-UNIT-DEMO-01', section:'§24.10', pages:'52' }
};
const functionRecords = [
  ...documentFixtures.map((document) => ({
    ...document, kind:'document', typeKey:'typeRecordDocument', summaryKey:'syntheticDocument',
    statusKey:'approvalUnverified'
  })),
  ...Object.entries(domainFixtures).flatMap(([functionId, domain]) =>
    objectTypes[functionId].map(([objectKey, typeKey], index) => ({
      functionId, scope:domain.scope, kind:'domain',
      id:`${domain.scope}-${String(index + 1).padStart(2, '0')}`,
      objectKey, typeKey:'typeSyntheticRecord', sourceSection:domain.section,
      sourcePages:domain.pages, sourceFile:'ACI_OS_Detailed_System_Design_V0.3.pdf',
      sourceVersion:'V0.3', sourceHeader:'V0.2-R2', statusKey:'approvalUnverified',
      summaryKey:'syntheticDomain'
    }))
  )
];

const tasks = [
  { id:'principal-week', key:'taskPrincipal1', owner:'ownerLeadership', due:'dueToday', status:'open', scope:'leadership', roles:['Hiệu trưởng'] },
  { id:'principal-meeting', key:'taskPrincipal2', owner:'ownerLeadership', due:'dueTomorrow', status:'track', scope:'leadership', roles:['Hiệu trưởng'] },
  { id:'office-progress', key:'taskHeadOffice1', owner:'ownerOffice', due:'dueToday', status:'open', scope:'office', roles:['Trưởng phòng','Phó phòng'] },
  { id:'office-calendar', key:'taskHeadOffice2', owner:'ownerOffice', due:'dueWeek', status:'track', scope:'office', roles:['Trưởng phòng','Phó phòng'] },
  { id:'specialist-meeting', key:'taskSpecialist1', owner:'ownerLeadership', due:'dueTomorrow', status:'open', scope:'leadership', roles:['Chuyên viên'] },
  { id:'teacher-plan', key:'taskTeacher1', owner:'ownerFaculty', due:'dueWeek', status:'open', scope:'faculty', roles:['Giáo viên','Trưởng khoa','Phó khoa'] },
  { id:'learner-materials', key:'taskLearner1', owner:'ownerTeacher', due:'dueTomorrow', status:'open', scope:'learning', roles:['Người học'], accountOnly:'nguoihocC' },
  { id:'parent-info', key:'taskParent1', owner:'ownerFamily', due:'dueWeek', status:'open', scope:'family', roles:['Phụ huynh'], accountOnly:'phuhuynhD' },
  { id:'business-info', key:'taskBusiness1', owner:'ownerPartner', due:'dueWeek', status:'track', scope:'partner', roles:['Doanh nghiệp'], accountOnly:'doanhnghiepF' },
  { id:'admin-accounts', key:'taskAdmin1', owner:'ownerOffice', due:'dueWeek', status:'open', scope:'office', roles:['Quản trị hệ thống'] }
];

const initialEvents = [
  { id:'ev-leadership', key:'eventMeeting', date:'2026-10-05T09:30', location:'locationMeetingRoom', accountId:'nguyenvana', scope:'leadership' },
  { id:'ev-secretary', key:'eventSecretary', date:'2026-10-06T14:00', location:'locationMeetingRoom', accountId:'nguyenvana', scope:'leadership' },
  { id:'ev-class', key:'eventClass', date:'2026-10-05T10:00', location:'locationFaculty', accountId:'giaovienE', scope:'faculty' },
  { id:'ev-learner', key:'eventClass', date:'2026-10-06T08:00', location:'locationLearning', accountId:'nguoihocC', scope:'learning' },
  { id:'ev-family', key:'eventFamily', date:'2026-10-07T16:00', location:'locationOnline', accountId:'phuhuynhD', scope:'family' },
  { id:'ev-partner', key:'eventPartner', date:'2026-10-08T13:30', location:'locationOnline', accountId:'doanhnghiepF', scope:'partner' }
];

Object.assign(dictionary.vi, {
  dueToday:'Hôm nay', dueTomorrow:'Ngày mai', dueWeek:'Trong tuần',
  locationMeetingRoom:'Phòng họp A', locationFaculty:'Khoa CNTT',
  locationLearning:'Không gian học tập', locationOnline:'Trực tuyến'
});
Object.assign(dictionary.en, {
  dueToday:'Today', dueTomorrow:'Tomorrow', dueWeek:'This week',
  locationMeetingRoom:'Meeting room A', locationFaculty:'IT Faculty',
  locationLearning:'Learning space', locationOnline:'Online'
});
Object.assign(dictionary.zh, {
  dueToday:'今天', dueTomorrow:'明天', dueWeek:'本周',
  locationMeetingRoom:'A会议室', locationFaculty:'信息技术学院',
  locationLearning:'学习空间', locationOnline:'线上'
});

Object.assign(dictionary.vi, {
  appTitle:'ACI-OS · Không gian làm việc', guest:'Khách', showMore:'Xem thêm', showLess:'Thu gọn',
  newsDetails:'Đọc chi tiết', news4Title:'Thông báo lịch nghỉ lễ', news4Text:'Lịch nghỉ và thời gian hoạt động trở lại được chia sẻ để cộng đồng tiện theo dõi.',
  news5Title:'Cập nhật hoạt động cộng đồng', news5Text:'Một số hoạt động kết nối đang được chuẩn bị cho các thành viên quan tâm.',
  news6Title:'Hướng dẫn sử dụng không gian chung', news6Text:'Các thông tin công khai được đăng tại đây để mọi người cùng tham khảo.',
  logoAlt:'Logo NUTE',
  accountAdmin:'Quản trị hệ thống', accountNguyen:'Nguyễn Văn A', accountTran:'Trần Thị B', accountLe:'Lê Minh E',
  accountPham:'Phạm An C', accountDo:'Đỗ Thanh D', accountCompany:'Công ty Minh Phát',
  calendarModeDelegated:'Bạn đang tạo lịch minh họa cho {name}.', eventSavedDelegated:'Đã lưu lịch minh họa cho {name}.'
});
Object.assign(dictionary.en, {
  appTitle:'ACI-OS · Workspace', guest:'Guest', showMore:'Show more', showLess:'Show less',
  newsDetails:'Read details', news4Title:'Holiday schedule notice', news4Text:'The holiday schedule and reopening hours are shared for the community to refer to.',
  news5Title:'Community activity update', news5Text:'A few community activities are being prepared for interested members.',
  news6Title:'Shared space guide', news6Text:'Public information is posted here for everyone to review.',
  logoAlt:'NUTE logo',
  accountAdmin:'System administrator', accountNguyen:'Nguyen Van A', accountTran:'Tran Thi B', accountLe:'Le Minh E',
  accountPham:'Pham An C', accountDo:'Do Thanh D', accountCompany:'Minh Phat Company',
  calendarModeDelegated:'You are creating a sample event for {name}.', eventSavedDelegated:'Sample event saved for {name}.'
});
Object.assign(dictionary.zh, {
  appTitle:'ACI-OS · 工作空间', guest:'访客', showMore:'查看更多', showLess:'收起',
  newsDetails:'查看详情', news4Title:'节假日日程通知', news4Text:'分享节假日安排和恢复开放时间，方便社区成员查看。',
  news5Title:'社区活动更新', news5Text:'正在为感兴趣的成员筹备一些交流活动。',
  news6Title:'共享空间指南', news6Text:'此处发布公开信息，供所有人参考。',
  logoAlt:'NUTE 标志',
  accountAdmin:'系统管理员', accountNguyen:'阮文 A', accountTran:'陈氏 B', accountLe:'黎明 E',
  accountPham:'范安 C', accountDo:'杜青 D', accountCompany:'明发公司',
  calendarModeDelegated:'您正在为 {name} 创建示例日程。', eventSavedDelegated:'已为 {name} 保存示例日程。'
});

Object.assign(dictionary.vi, {
  demoAccounts:'Tài khoản demo: admin, nguyenvana, thukyB, giaovienE, ketoanG, nguoihocC, phuhuynhD, doanhnghiepF · Mật khẩu: demo',
  reviewMockLabel:'Bản mô phỏng để góp ý', threeDNotImplemented:'3D chưa triển khai',
  navFunctions:'Chức năng', functionEyebrow:'Không gian minh họa', functionsTitle:'Chức năng',
  assignmentIntro:'Chọn tài khoản để quản lý riêng vai trò/phạm vi hiện có và gán chức năng theo từng scope.',
  documentFilename:'Tên file nguồn', documentVersion:'Version trong tên file', documentInternalHeader:'Header nội bộ',
  functionsIntro:'Chỉ các chức năng được gán trực tiếp cho tài khoản này mới xuất hiện.',
  functionManifesto:'Tuyên ngôn', functionTechnical:'Tài liệu kỹ thuật', functionRIS:'RIS',
  functionLIS:'LIS', functionFIS:'FIS', functionOpen:'Mở không gian', functionNoGrants:'Tài khoản chưa được gán chức năng nào.',
  documentManifesto:'Tuyên ngôn ACI-OS', documentSAD:'System Architecture Dossier', documentDetailedDesign:'Detailed System Design',
  functionListCount:'{count} mục mẫu', functionWorkspaceIntro:'Danh sách và chi tiết dưới đây chỉ chứa dữ liệu tổng hợp hư cấu; mọi nội dung đều chỉ đọc.',
  backToFunctions:'Về danh sách chức năng', functionTypeFilter:'Loại nội dung', functionAllTypes:'Tất cả loại',
  functionSearchLabel:'Tìm trong dữ liệu mẫu', functionSearchPlaceholder:'Tìm theo tên hoặc mã',
  functionNoResults:'Không có mục mẫu phù hợp với bộ lọc này.', functionSelectRecord:'Chọn một mục để xem chi tiết.',
  functionScopeLabel:'Scope mẫu', functionRecordId:'Mã mục', functionRecordType:'Loại', functionObjects:'Thuật ngữ được liệt kê trong tài liệu tham chiếu chưa xác minh',
  functionSynthetic:'Mô tả tổng hợp', functionApproval:'Trạng thái phê duyệt nguồn',
  approvalUnverified:'Chưa xác minh', functionReadOnly:'Chỉ xem · dữ liệu hư cấu',
  typeSyntheticRecord:'Bản ghi synthetic', syntheticRecordLabel:'Bản ghi tổng hợp · chỉ dùng minh họa',
  sourceProvenance:'Nguồn tham chiếu (chưa xác minh)', sourceSectionLabel:'Mục tham chiếu',
  sourcePagesLabel:'Trang PDF nguồn', workflowNotModeled:'Không mô hình hóa hoặc phê duyệt workflow; các thuật ngữ dưới đây không mô tả quy trình được triển khai.',
  referenceTermsNote:'Các thuật ngữ được liệt kê trong tài liệu tham chiếu chưa xác minh; chúng không phải workflow, trạng thái hoạt động hay chức năng đã triển khai.',
  manifestoContractName:'Tên trong contract: Tuyên ngôn ACI-OS v1.0. Không tự đối chiếu hoặc giải quyết khác biệt với tên file V3.',
  detailedDesignHeader:'Header nội bộ: V0.2-R2. Tên file V0.3; khác biệt phiên bản chưa được giải quyết.',
  syntheticDocument:'Bản mô tả tổng hợp mới cho giao diện mẫu; không trích dẫn nội dung tài liệu nguồn.',
  syntheticDomain:'Bản ghi hư cấu chỉ để minh họa cấu trúc danh mục; không đại diện dữ liệu hay hoạt động nghiệp vụ.',
  assignmentTitle:'Vai trò, phạm vi và chức năng', functionGrantLegend:'Chức năng và scope được gán riêng',
  functionGrantNote:'Gán hoặc thu hồi theo từng tài khoản, chức năng và scope. Thay đổi vai trò không làm thay đổi các gán này. Không gán FIS cho thukyB.',
  saveFunctionGrants:'Lưu gán chức năng', functionGrantsSaved:'Đã cập nhật gán chức năng minh họa.',
  functionGrantSavedOnly:'Các gán chức năng được cập nhật độc lập; không thay đổi vai trò hoặc phạm vi khác.',
  grantScopeLabel:'Scope', functionRoleNote:'Vai trò chỉ là nhãn tài khoản, không tự cấp chức năng.',
  accountNguyenG:'Nguyễn G',
  objectLearnerContext:'Learner Context', objectLearningIntent:'Learning Intent', objectKnowledgeState:'Knowledge State',
  objectCompetencyState:'Competency State', objectLearningCapability:'Learning Capability', objectLearningProduct:'Learning Product',
  objectAssessmentContract:'Assessment Contract', objectCompetencyEvidence:'Competency Evidence', objectReflection:'Reflection',
  objectFeedback:'Feedback', objectCapabilityPortfolio:'Capability Portfolio', objectKnowledgeFlow:'Knowledge Flow',
  objectProblem:'Problem', objectQuestion:'Question', objectResearchContext:'Research Context', objectGap:'Gap',
  objectHypothesis:'Hypothesis', objectClaim:'Claim', objectMethod:'Method', objectExperiment:'Experiment',
  objectEvidence:'Evidence', objectCounterevidence:'Counterevidence', objectVerification:'Verification',
  objectNoveltyState:'Novelty State', objectResearchProduct:'Research Product', objectResearchCapital:'Research Capital',
  objectResearchMemory:'Research Memory', objectResource:'Resource', objectBudget:'Budget', objectCost:'Cost',
  objectCommitment:'Commitment', objectTransaction:'Transaction', objectAllocation:'Allocation', objectUse:'Use',
  objectOutcome:'Outcome', objectEfficiency:'Efficiency', objectRisk:'Risk', objectDecision:'Decision',
  typeDocument:'Tài liệu', typeLearnerContext:'Ngữ cảnh người học', typeLearningIntent:'Ý định học tập',
  typeKnowledgeState:'Trạng thái tri thức', typeCompetencyState:'Trạng thái năng lực', typeLearningCapability:'Khả năng học tập',
  typeLearningProduct:'Sản phẩm học tập', typeAssessmentContract:'Thỏa thuận đánh giá', typeCompetencyEvidence:'Minh chứng năng lực',
  typeReflection:'Tự phản tư', typeFeedback:'Phản hồi', typeCapabilityPortfolio:'Hồ sơ năng lực', typeKnowledgeFlow:'Luồng tri thức',
  typeProblem:'Vấn đề', typeQuestion:'Câu hỏi', typeResearchContext:'Ngữ cảnh nghiên cứu', typeGap:'Khoảng trống',
  typeHypothesis:'Giả thuyết', typeClaim:'Luận điểm', typeMethod:'Phương pháp', typeExperiment:'Thí nghiệm',
  typeEvidence:'Minh chứng', typeCounterevidence:'Minh chứng phản biện', typeVerification:'Xác minh',
  typeNoveltyState:'Trạng thái tính mới', typeResearchProduct:'Sản phẩm nghiên cứu', typeResearchCapital:'Vốn nghiên cứu',
  typeResearchMemory:'Bộ nhớ nghiên cứu', typeResource:'Nguồn lực', typeBudget:'Ngân sách', typeCost:'Chi phí',
  typeCommitment:'Cam kết', typeTransaction:'Giao dịch', typeAllocation:'Phân bổ', typeUse:'Sử dụng',
  typeOutcome:'Kết quả', typeEfficiency:'Hiệu quả', typeRisk:'Rủi ro', typeDecision:'Quyết định',
  typeRecordDocument:'Hồ sơ tài liệu', sampleRecordTitle:'Mục mẫu · {type}'
});
Object.assign(dictionary.en, {
  demoAccounts:'Demo accounts: admin, nguyenvana, thukyB, giaovienE, ketoanG, nguoihocC, phuhuynhD, doanhnghiepF · Password: demo',
  reviewMockLabel:'Mock for feedback', threeDNotImplemented:'3D is not implemented',
  navFunctions:'Functions', functionEyebrow:'Illustrative workspace', functionsTitle:'Functions',
  assignmentIntro:'Select an account to manage its existing roles/scopes separately from function grants by scope.',
  documentFilename:'Source filename', documentVersion:'Version in filename', documentInternalHeader:'Internal header',
  functionsIntro:'Only functions directly assigned to this account are shown.',
  functionManifesto:'Manifesto', functionTechnical:'Technical documents', functionRIS:'RIS',
  functionLIS:'LIS', functionFIS:'FIS', functionOpen:'Open workspace', functionNoGrants:'No functions are assigned to this account.',
  documentManifesto:'ACI-OS Manifesto', documentSAD:'System Architecture Dossier', documentDetailedDesign:'Detailed System Design',
  typeDocument:'Document',
  functionListCount:'{count} sample items', functionWorkspaceIntro:'The list and details below use fictional, synthesized data and are read-only.',
  backToFunctions:'Back to functions', functionTypeFilter:'Content type', functionAllTypes:'All types',
  functionSearchLabel:'Search sample data', functionSearchPlaceholder:'Search by name or ID',
  functionNoResults:'No sample items match these filters.', functionSelectRecord:'Select an item to see its details.',
  functionScopeLabel:'Sample scope', functionRecordId:'Record ID', functionRecordType:'Type', functionObjects:'Terms listed in the unverified reference',
  functionSynthetic:'Synthetic description', functionApproval:'Source approval status',
  approvalUnverified:'Unverified', functionReadOnly:'Read-only · fictional data',
  typeSyntheticRecord:'Synthetic record', syntheticRecordLabel:'Synthetic sample record · illustrative only',
  sourceProvenance:'Reference source (unverified)', sourceSectionLabel:'Reference section',
  sourcePagesLabel:'Source PDF pages', workflowNotModeled:'No workflow is modeled or approved; the terms below do not describe an implemented process.',
  referenceTermsNote:'Terms listed in the unverified reference; they are not a workflow, operational states, or implemented functions.',
  manifestoContractName:'Contract name: Tuyên ngôn ACI-OS v1.0. The difference from the V3 filename is not reconciled.',
  detailedDesignHeader:'Internal header: V0.2-R2. Filename is V0.3; the version difference is unresolved.',
  syntheticDocument:'Newly written synthetic interface description; no source text is quoted.',
  syntheticDomain:'Fictional record for illustrating a catalogue structure; it does not represent data or business activity.',
  assignmentTitle:'Roles, scopes and functions', functionGrantLegend:'Independent function and scope grants',
  functionGrantNote:'Grant or revoke by account, function and scope. Role changes do not change these grants. Do not assign FIS to thukyB.',
  saveFunctionGrants:'Save function grants', functionGrantsSaved:'Illustrative function grants updated.',
  functionGrantSavedOnly:'Function grants were updated independently; other roles and scopes were not changed.',
  grantScopeLabel:'Scope', functionRoleNote:'A role is an account label and does not grant functions.',
  accountNguyenG:'Nguyen G',
  typeLearnerContext:'Learner context', typeLearningIntent:'Learning intent', typeKnowledgeState:'Knowledge state',
  typeCompetencyState:'Competency state', typeLearningCapability:'Learning capability', typeLearningProduct:'Learning product',
  typeAssessmentContract:'Assessment contract', typeCompetencyEvidence:'Competency evidence', typeReflection:'Reflection',
  typeFeedback:'Feedback', typeCapabilityPortfolio:'Capability portfolio', typeKnowledgeFlow:'Knowledge flow',
  typeProblem:'Problem', typeQuestion:'Question', typeResearchContext:'Research context', typeGap:'Gap',
  typeHypothesis:'Hypothesis', typeClaim:'Claim', typeMethod:'Method', typeExperiment:'Experiment',
  typeEvidence:'Evidence', typeCounterevidence:'Counterevidence', typeVerification:'Verification',
  typeNoveltyState:'Novelty state', typeResearchProduct:'Research product', typeResearchCapital:'Research capital',
  typeResearchMemory:'Research memory', typeResource:'Resource', typeBudget:'Budget', typeCost:'Cost',
  typeCommitment:'Commitment', typeTransaction:'Transaction', typeAllocation:'Allocation', typeUse:'Use',
  typeOutcome:'Outcome', typeEfficiency:'Efficiency', typeRisk:'Risk', typeDecision:'Decision',
  objectLearnerContext:'Learner Context', objectLearningIntent:'Learning Intent', objectKnowledgeState:'Knowledge State',
  objectCompetencyState:'Competency State', objectLearningCapability:'Learning Capability', objectLearningProduct:'Learning Product',
  objectAssessmentContract:'Assessment Contract', objectCompetencyEvidence:'Competency Evidence', objectReflection:'Reflection',
  objectFeedback:'Feedback', objectCapabilityPortfolio:'Capability Portfolio', objectKnowledgeFlow:'Knowledge Flow',
  objectProblem:'Problem', objectQuestion:'Question', objectResearchContext:'Research Context', objectGap:'Gap',
  objectHypothesis:'Hypothesis', objectClaim:'Claim', objectMethod:'Method', objectExperiment:'Experiment',
  objectEvidence:'Evidence', objectCounterevidence:'Counterevidence', objectVerification:'Verification',
  objectNoveltyState:'Novelty State', objectResearchProduct:'Research Product', objectResearchCapital:'Research Capital',
  objectResearchMemory:'Research Memory', objectResource:'Resource', objectBudget:'Budget', objectCost:'Cost',
  objectCommitment:'Commitment', objectTransaction:'Transaction', objectAllocation:'Allocation', objectUse:'Use',
  objectOutcome:'Outcome', objectEfficiency:'Efficiency', objectRisk:'Risk', objectDecision:'Decision',
  typeRecordDocument:'Document record', sampleRecordTitle:'Sample item · {type}'
});
Object.assign(dictionary.zh, {
  demoAccounts:'体验账户：admin、nguyenvana、thukyB、giaovienE、ketoanG、nguoihocC、phuhuynhD、doanhnghiepF · 密码：demo',
  reviewMockLabel:'供反馈的模拟版本', threeDNotImplemented:'尚未实现 3D',
  navFunctions:'功能', functionEyebrow:'示例工作空间', functionsTitle:'功能',
  assignmentIntro:'选择账户，分别管理现有角色/范围以及按范围分配的功能。',
  documentFilename:'来源文件名', documentVersion:'文件名中的版本', documentInternalHeader:'内部标题',
  functionsIntro:'这里只显示直接分配给此账户的功能。',
  functionManifesto:'宣言', functionTechnical:'技术文档', functionRIS:'RIS',
  functionLIS:'LIS', functionFIS:'FIS', functionOpen:'打开工作空间', functionNoGrants:'此账户尚未分配功能。',
  documentManifesto:'ACI-OS 宣言', documentSAD:'系统架构文档', documentDetailedDesign:'详细系统设计',
  typeDocument:'文档',
  functionListCount:'{count} 个示例条目', functionWorkspaceIntro:'以下列表和详情均为虚构合成数据，仅供只读查看。',
  backToFunctions:'返回功能列表', functionTypeFilter:'内容类型', functionAllTypes:'所有类型',
  functionSearchLabel:'搜索示例数据', functionSearchPlaceholder:'按名称或编号搜索',
  functionNoResults:'没有符合筛选条件的示例条目。', functionSelectRecord:'选择一个条目查看详情。',
  functionScopeLabel:'示例范围', functionRecordId:'条目编号', functionRecordType:'类型', functionObjects:'未核实参考文件中列出的术语',
  functionSynthetic:'合成说明', functionApproval:'来源审批状态',
  approvalUnverified:'未核实', functionReadOnly:'只读 · 虚构数据',
  typeSyntheticRecord:'合成记录', syntheticRecordLabel:'合成示例记录 · 仅供说明',
  sourceProvenance:'参考来源（未核实）', sourceSectionLabel:'参考章节',
  sourcePagesLabel:'来源 PDF 页码', workflowNotModeled:'未建模或批准任何工作流程；下方术语不表示已实现的流程。',
  referenceTermsNote:'这些术语列于未核实的参考文件中；它们不是工作流程、运行状态或已实现功能。',
  manifestoContractName:'Contract 名称：Tuyên ngôn ACI-OS v1.0。与 V3 文件名的差异未作调和。',
  detailedDesignHeader:'内部标题版本：V0.2-R2。文件名为 V0.3；版本差异尚未解决。',
  syntheticDocument:'为示例界面新写的合成说明；未引用来源文本。',
  syntheticDomain:'用于展示目录结构的虚构记录，不代表真实数据或业务活动。',
  assignmentTitle:'角色、范围与功能', functionGrantLegend:'独立分配功能与范围',
  functionGrantNote:'按账户、功能和范围分别分配或撤销。角色变更不会改变这些分配。不要向 thukyB 分配 FIS。',
  saveFunctionGrants:'保存功能分配', functionGrantsSaved:'示例功能分配已更新。',
  functionGrantSavedOnly:'功能分配已独立更新；其他角色和范围未更改。',
  grantScopeLabel:'范围', functionRoleNote:'角色只是账户标签，不会自动授予功能。',
  accountNguyenG:'阮 G',
  typeLearnerContext:'学习者情境', typeLearningIntent:'学习意图', typeKnowledgeState:'知识状态',
  typeCompetencyState:'能力状态', typeLearningCapability:'学习能力', typeLearningProduct:'学习产品',
  typeAssessmentContract:'评估约定', typeCompetencyEvidence:'能力证据', typeReflection:'反思',
  typeFeedback:'反馈', typeCapabilityPortfolio:'能力档案', typeKnowledgeFlow:'知识流',
  typeProblem:'问题', typeQuestion:'研究问题', typeResearchContext:'研究情境', typeGap:'研究空白',
  typeHypothesis:'假设', typeClaim:'主张', typeMethod:'方法', typeExperiment:'实验',
  typeEvidence:'证据', typeCounterevidence:'反证', typeVerification:'验证',
  typeNoveltyState:'新颖性状态', typeResearchProduct:'研究成果', typeResearchCapital:'研究资本',
  typeResearchMemory:'研究记忆', typeResource:'资源', typeBudget:'预算', typeCost:'成本',
  typeCommitment:'承诺', typeTransaction:'交易', typeAllocation:'分配', typeUse:'使用',
  typeOutcome:'结果', typeEfficiency:'效率', typeRisk:'风险', typeDecision:'决策',
  objectLearnerContext:'学习者情境', objectLearningIntent:'学习意图', objectKnowledgeState:'知识状态',
  objectCompetencyState:'能力状态', objectLearningCapability:'学习能力', objectLearningProduct:'学习产品',
  objectAssessmentContract:'评估约定', objectCompetencyEvidence:'能力证据', objectReflection:'反思',
  objectFeedback:'反馈', objectCapabilityPortfolio:'能力档案', objectKnowledgeFlow:'知识流',
  objectProblem:'问题', objectQuestion:'研究问题', objectResearchContext:'研究情境', objectGap:'研究空白',
  objectHypothesis:'假设', objectClaim:'主张', objectMethod:'方法', objectExperiment:'实验',
  objectEvidence:'证据', objectCounterevidence:'反证', objectVerification:'验证',
  objectNoveltyState:'新颖性状态', objectResearchProduct:'研究成果', objectResearchCapital:'研究资本',
  objectResearchMemory:'研究记忆', objectResource:'资源', objectBudget:'预算', objectCost:'成本',
  objectCommitment:'承诺', objectTransaction:'交易', objectAllocation:'分配', objectUse:'使用',
  objectOutcome:'结果', objectEfficiency:'效率', objectRisk:'风险', objectDecision:'决策',
  typeRecordDocument:'文档记录', sampleRecordTitle:'示例条目 · {type}'
});

const accountNameKeys = {
  admin:'accountAdmin', nguyenvana:'accountNguyen', thukyB:'accountTran',
  giaovienE:'accountLe', ketoanG:'accountNguyenG', nguoihocC:'accountPham', phuhuynhD:'accountDo', doanhnghiepF:'accountCompany'
};
const accountName = (accountId) => t(accountNameKeys[accountId] || '') || state.users[accountId]?.name || '';
const newsItems = [
  ['news1Title','news1Text','2026-10-04'], ['news2Title','news2Text','2026-10-02'],
  ['news3Title','news3Text','2026-09-28'], ['news4Title','news4Text','2026-09-24'],
  ['news5Title','news5Text','2026-09-20'], ['news6Title','news6Text','2026-09-16']
];

const state = {
  users: structuredClone(accountsFixture),
  currentUser: null,
  currentRole: null,
  language: 'vi',
  newsExpanded: false,
  newsDetailKey: null,
  taskFilter: 'all',
  events: structuredClone(initialEvents),
  editingEvent: null,
  loginErrorKey: null,
  assignmentFeedbackKey: null,
  functionGrantFeedbackKey: null,
  calendarFeedbackKey: null,
  assistantResponseKey: null,
  calendarFeedbackAccount: null,
  activeFunction: null,
  selectedFunctionRecord: null,
  functionTypeFilter: 'all',
  functionSearch: ''
};
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const t = (key) => dictionary[state.language][key] || dictionary.vi[key] || key;
const roleName = (role) => t(roleKeys[role] || '');
const scopeName = (scope) => t(scopeKeys[scope] || '');
const current = () => state.currentUser ? state.users[state.currentUser] : null;
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
}[character]));

function translateStaticText() {
  $$('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  $$('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });
  $$('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', t(element.dataset.i18nAlt));
  });
  $$('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
  });
  document.documentElement.lang = state.language === 'zh' ? 'zh-Hans' : state.language;
  $('#languageSelect').value = state.language;
  renderHeaderIdentity();
  renderPublicNews();
  renderAdminOptions(true);
  if (state.currentUser) {
    renderAll();
    renderFunctionWorkspace();
  }
  renderDynamicMessages();
}

function renderDynamicMessages() {
  if (state.loginErrorKey) $('#loginError').textContent = t(state.loginErrorKey);
  if (state.assignmentFeedbackKey) $('#assignmentFeedback').textContent = t(state.assignmentFeedbackKey);
  if (state.functionGrantFeedbackKey) $('#functionGrantFeedback').textContent = t(state.functionGrantFeedbackKey);
    if (state.calendarFeedbackKey) {
      const feedback = t(state.calendarFeedbackKey);
      $('#calendarFeedback').textContent = state.calendarFeedbackKey === 'eventSavedDelegated'
        ? feedback.replace('{name}', accountName(state.calendarFeedbackAccount)) : feedback;
    }
  if (state.assistantResponseKey) {
    $('#assistantResponse').textContent = t(state.assistantResponseKey);
    $('#assistantResponse').classList.remove('hidden');
  }
}

function renderPublicNews() {
  const visibleNews = state.newsExpanded ? newsItems : newsItems.slice(0, 3);
  $('#publicNews').innerHTML = visibleNews.map(([title, text, date], index) =>
    `<article class="news-item"><time>${formatPublicDate(date)}</time><div><h3>${t(title)}</h3><p>${t(text)}</p></div><button class="table-action" type="button" data-news-detail="${index}" title="${t('newsDetails')}">${t('newsDetails')}</button></article>`
  ).join('');
  $('#newsToggle').textContent = t(state.newsExpanded ? 'showLess' : 'showMore');
  $('#newsToggle').classList.toggle('hidden', newsItems.length <= 3);
  if (state.newsDetailKey !== null) renderNewsDetail(state.newsDetailKey);
}

function renderNewsDetail(index) {
  const item = newsItems[index];
  if (!item) return;
  $('#newsDetailDate').textContent = formatPublicDate(item[2]);
  $('#newsDetailTitle').textContent = t(item[0]);
  $('#newsDetailText').textContent = t(item[1]);
}

function formatPublicDate(value) {
  const locale = state.language === 'zh' ? 'zh-CN' : state.language === 'en' ? 'en-GB' : 'vi-VN';
  return new Intl.DateTimeFormat(locale, { timeZone:'UTC', day:'2-digit', month:'short' }).format(new Date(`${value}T12:00:00Z`));
}

function updateClock() {
  const locale = state.language === 'zh' ? 'zh-CN' : state.language === 'en' ? 'en-GB' : 'vi-VN';
  $('#clock').textContent = new Intl.DateTimeFormat(locale, {
    timeZone:'Asia/Ho_Chi_Minh', hour:'2-digit', minute:'2-digit', second:'2-digit', hourCycle:'h23'
  }).format(new Date());
}

function setLanguage(language) {
  if (!dictionary[language]) return;
  state.language = language;
  translateStaticText();
  updateClock();
}

function renderHeaderIdentity() {
  const user = current();
  $('#headerAccount').textContent = user ? accountName(state.currentUser) : t('guest');
  $('#headerRole').textContent = user ? roleName(user.primaryRole) : '';
  $('#headerRoleControl').classList.toggle('hidden', !user);
  if (!user) return;
  $('#headerRoleSelect').innerHTML = user.roles.map((role) =>
    `<option value="${role}">${roleName(role)}</option>`
  ).join('');
  if (!user.roles.includes(state.currentRole)) state.currentRole = user.primaryRole;
  $('#headerRoleSelect').value = state.currentRole;
}

function renderAdminOptions(preserveDraft = false) {
  const accountSelect = $('#accountSelect');
  const roleCheckboxes = $('#roleCheckboxes');
  const scopeCheckboxes = $('#scopeCheckboxes');
  if (!accountSelect || !roleCheckboxes || !scopeCheckboxes) return;
  const previousAccount = accountSelect.value;
  const draft = preserveDraft ? {
    roles: $$('#roleCheckboxes input:checked').map((box) => box.value),
    scopes: $$('#scopeCheckboxes input:checked').map((box) => box.value),
    primaryRole: $('#primaryRoleSelect').value,
    delegated: $('#delegationToggle').checked
  } : null;
  const grantDraft = preserveDraft ? $$('#functionGrantEditor input:checked').map((box) =>
    `${box.dataset.functionId}|${box.value}`
  ) : null;
  accountSelect.innerHTML = Object.entries(state.users).map(([id, user]) =>
    `<option value="${id}">${accountName(id)} · ${roleName(user.primaryRole)}</option>`
  ).join('');
  if (state.users[previousAccount]) accountSelect.value = previousAccount;
  roleCheckboxes.innerHTML = roles.map((role) =>
    `<label><input type="checkbox" value="${role}"><span>${roleName(role)}</span></label>`
  ).join('');
  scopeCheckboxes.innerHTML = scopes.map((scope) =>
    `<label><input type="checkbox" value="${scope}"><span>${scopeName(scope)}</span></label>`
  ).join('');
  syncAssignmentForm(draft);
  renderFunctionGrantEditor(grantDraft);
}

function renderFunctionGrantEditor(grantDraft = null) {
  const editor = $('#functionGrantEditor');
  if (!editor) return;
  const accountId = $('#accountSelect').value;
  const account = state.users[accountId];
  if (!account) {
    editor.innerHTML = '';
    return;
  }
  const granted = new Set((account.functionGrants || []).flatMap((grant) =>
    grant.scopes.map((scope) => `${grant.functionId}|${scope}`)
  ));
  const selected = grantDraft === null ? granted : new Set(grantDraft);
  editor.innerHTML = functionSpecs.map((spec) => `
    <section class="function-grant-group">
      <h3>${escapeHtml(t(spec.titleKey))}</h3>
      <div class="checkbox-grid function-scope-grid">
        ${spec.scopeIds.map((scope) => `
          <label><input type="checkbox" data-function-id="${escapeHtml(spec.id)}" value="${escapeHtml(scope)}"${selected.has(`${spec.id}|${scope}`) ? ' checked' : ''}${accountId === 'thukyB' && spec.id === 'fis' ? ' disabled' : ''}>
            <span>${escapeHtml(scope)}</span></label>`).join('')}
      </div>
    </section>`).join('');
}

function syncAssignmentForm(draft = null) {
  const user = state.users[$('#accountSelect').value];
  if (!user) return;
  const selectedRoles = draft ? draft.roles.filter((role) => roles.includes(role)) : user.roles;
  const selectedScopes = draft ? draft.scopes.filter((scope) => scopes.includes(scope)) : user.scopes;
  $$('#roleCheckboxes input').forEach((box) => { box.checked = selectedRoles.includes(box.value); });
  $$('#scopeCheckboxes input').forEach((box) => { box.checked = selectedScopes.includes(box.value); });
  $('#primaryRoleSelect').innerHTML = selectedRoles.map((role) =>
    `<option value="${role}">${roleName(role)}</option>`
  ).join('');
  const preferredPrimary = draft?.primaryRole || user.primaryRole;
  if (selectedRoles.includes(preferredPrimary)) $('#primaryRoleSelect').value = preferredPrimary;
  else if (selectedRoles.length) $('#primaryRoleSelect').value = selectedRoles[0];
  $('#delegationToggle').checked = draft ? draft.delegated : Boolean(user.delegatedCalendar);
  $('#delegationToggle').disabled = $('#accountSelect').value !== 'thukyB';
}

function grantedFunctionScopes(user, functionId) {
  const spec = functionSpecs.find((item) => item.id === functionId);
  if (!user || !spec) return [];
  const validScopes = new Set(spec.scopeIds);
  return [...new Set((user.functionGrants || [])
    .filter((grant) => grant.functionId === functionId)
    .flatMap((grant) => grant.scopes)
    .filter((scope) => validScopes.has(scope)))];
}

function hasFunctionAccess(user, functionId) {
  return grantedFunctionScopes(user, functionId).length > 0;
}

function recordsForAccount(functionId) {
  const allowedScopes = new Set(grantedFunctionScopes(current(), functionId));
  return functionRecords.filter((record) => record.functionId === functionId && allowedScopes.has(record.scope));
}

function functionRecordTitle(record) {
  return record.kind === 'document'
    ? t(record.titleKey)
    : t('syntheticRecordLabel');
}

function renderFunctionNavigation() {
  const user = current();
  const hasAnyFunction = functionSpecs.some((spec) => hasFunctionAccess(user, spec.id));
  $('#functionsNav').classList.toggle('hidden', !hasAnyFunction);
  renderFunctionCards();
}

function renderFunctionCards() {
  const container = $('#functionCards');
  if (!container) return;
  const user = current();
  const available = functionSpecs.filter((spec) => hasFunctionAccess(user, spec.id));
  if (!available.length) {
    container.innerHTML = `<p class="empty-state">${escapeHtml(t('functionNoGrants'))}</p>`;
    return;
  }
  container.innerHTML = available.map((spec) => {
    const records = recordsForAccount(spec.id);
    return `<article class="panel function-card">
      <p class="eyebrow">${escapeHtml(t('functionEyebrow'))}</p>
      <h2>${escapeHtml(t(spec.titleKey))}</h2>
      <p class="muted">${escapeHtml(t('functionListCount').replace('{count}', String(records.length)))}</p>
      <button class="button button-primary" type="button" data-open-function="${escapeHtml(spec.id)}">${escapeHtml(t('functionOpen'))}</button>
    </article>`;
  }).join('');
}

function openFunction(functionId) {
  if (!current() || !hasFunctionAccess(current(), functionId)) {
    navigate('dashboard');
    return false;
  }
  state.activeFunction = functionId;
  state.selectedFunctionRecord = null;
  state.functionTypeFilter = 'all';
  state.functionSearch = '';
  $('#functionSearch').value = '';
  renderFunctionWorkspace();
  return navigate('function-workspace');
}

function renderFunctionWorkspace() {
  const title = $('#functionWorkspaceTitle');
  if (!title) return;
  const spec = functionSpecs.find((item) => item.id === state.activeFunction);
  if (!spec || !hasFunctionAccess(current(), spec.id)) {
    $('#functionWorkspaceIntro').textContent = t('functionWorkspaceIntro');
    $('#functionTypeFilter').innerHTML = `<option value="all">${escapeHtml(t('functionAllTypes'))}</option>`;
    $('#functionRecordList').innerHTML = `<p class="empty-state">${escapeHtml(t('functionNoGrants'))}</p>`;
    $('#functionRecordDetail').innerHTML = `<p class="empty-state">${escapeHtml(t('functionSelectRecord'))}</p>`;
    return;
  }
  title.textContent = t(spec.titleKey);
  $('#functionWorkspaceIntro').textContent = t('functionWorkspaceIntro');
  const accessibleRecords = recordsForAccount(spec.id);
  const typeKeys = [...new Set(accessibleRecords.map((record) => record.typeKey))];
  const previousType = state.functionTypeFilter;
  $('#functionTypeFilter').innerHTML = `<option value="all">${escapeHtml(t('functionAllTypes'))}</option>` +
    typeKeys.map((key) => `<option value="${escapeHtml(key)}">${escapeHtml(t(key))}</option>`).join('');
  state.functionTypeFilter = previousType === 'all' || typeKeys.includes(previousType) ? previousType : 'all';
  $('#functionTypeFilter').value = state.functionTypeFilter;
  $('#functionSearch').value = state.functionSearch;
  const query = state.functionSearch.trim().toLocaleLowerCase();
  const filtered = accessibleRecords.filter((record) => {
    if (state.functionTypeFilter !== 'all' && record.typeKey !== state.functionTypeFilter) return false;
    const searchable = [
      functionRecordTitle(record), record.id, record.scope, record.file || '',
      t(record.typeKey), record.version || ''
    ].join(' ').toLocaleLowerCase();
    return !query || searchable.includes(query);
  });
  $('#functionRecordList').innerHTML = filtered.length ? filtered.map((record) => `
    <button class="function-record${record.id === state.selectedFunctionRecord ? ' selected' : ''}" type="button" data-function-record="${escapeHtml(record.id)}">
      <strong>${escapeHtml(functionRecordTitle(record))}</strong>
      <span>${escapeHtml(record.id)}</span>
      <small>${escapeHtml(t(record.typeKey))} · ${escapeHtml(record.scope)}</small>
    </button>`).join('') : `<p class="empty-state">${escapeHtml(t('functionNoResults'))}</p>`;
  const selected = filtered.find((record) => record.id === state.selectedFunctionRecord) || filtered[0];
  state.selectedFunctionRecord = selected?.id || null;
  renderFunctionRecordDetail(selected, spec);
}

function renderFunctionRecordDetail(record, spec) {
  const detail = $('#functionRecordDetail');
  if (!record) {
    detail.innerHTML = `<p class="empty-state">${escapeHtml(t('functionSelectRecord'))}</p>`;
    return;
  }
  const rows = [
    `<div><dt>${escapeHtml(t('functionRecordId'))}</dt><dd>${escapeHtml(record.id)}</dd></div>`,
    `<div><dt>${escapeHtml(t('functionScopeLabel'))}</dt><dd>${escapeHtml(record.scope)}</dd></div>`,
    `<div><dt>${escapeHtml(t('functionRecordType'))}</dt><dd>${escapeHtml(t(record.typeKey))}</dd></div>`,
    `<div><dt>${escapeHtml(t('functionApproval'))}</dt><dd><span class="status-pill">${escapeHtml(t(record.statusKey))}</span></dd></div>`
  ];
  let extra = '';
  if (record.kind === 'document') {
    rows.push(
      `<div><dt>${escapeHtml(t('documentFilename'))}</dt><dd class="filename-value">${escapeHtml(record.file)}</dd></div>`,
      `<div><dt>${escapeHtml(t('documentVersion'))}</dt><dd>${escapeHtml(record.version)}</dd></div>`
    );
    if (record.internalHeader) rows.push(`<div><dt>${escapeHtml(t('documentInternalHeader'))}</dt><dd>${escapeHtml(record.internalHeader)}</dd></div>`);
    if (record.contractNoteKey) extra += `<p class="function-note">${escapeHtml(t(record.contractNoteKey))}</p>`;
  } else {
    const catalogue = objectTypes[spec.id] || [];
    rows.push(
      `<div><dt>${escapeHtml(t('documentFilename'))}</dt><dd class="filename-value">${escapeHtml(record.sourceFile)}</dd></div>`,
      `<div><dt>${escapeHtml(t('documentVersion'))}</dt><dd>${escapeHtml(record.sourceVersion)}</dd></div>`,
      `<div><dt>${escapeHtml(t('documentInternalHeader'))}</dt><dd>${escapeHtml(record.sourceHeader)}</dd></div>`,
      `<div><dt>${escapeHtml(t('sourceSectionLabel'))}</dt><dd>${escapeHtml(record.sourceSection)}</dd></div>`,
      `<div><dt>${escapeHtml(t('sourcePagesLabel'))}</dt><dd>${escapeHtml(record.sourcePages)}</dd></div>`
    );
    extra += `<section class="function-source-provenance"><h3>${escapeHtml(t('sourceProvenance'))}</h3><p>${escapeHtml(t('workflowNotModeled'))}</p></section>`;
    extra += `<section class="function-object-catalogue"><h3>${escapeHtml(t('functionObjects'))}</h3><p class="reference-terms-note">${escapeHtml(t('referenceTermsNote'))}</p><ul>${catalogue.map(([key]) => `<li>${escapeHtml(t(key))}</li>`).join('')}</ul></section>`;
  }
  extra += `<section class="function-note"><h3>${escapeHtml(t('functionSynthetic'))}</h3><p>${escapeHtml(t(record.summaryKey))}</p></section>`;
  detail.innerHTML = `<div class="function-detail-heading"><p class="eyebrow">${escapeHtml(t('functionReadOnly'))}</p><h2>${escapeHtml(functionRecordTitle(record))}</h2></div>
    <dl class="function-metadata">${rows.join('')}</dl>${extra}`;
}

function openLogin() {
  $('#loginModal').classList.remove('hidden');
  $('#loginError').classList.add('hidden');
  $('#usernameInput').focus();
}

function closeLogin() {
  $('#loginModal').classList.add('hidden');
  $('#loginError').classList.add('hidden');
}

function showApp() {
  $('#publicView').classList.add('hidden');
  $('#loginModal').classList.add('hidden');
  $('#appView').classList.remove('hidden');
  $('#logoutButton').classList.remove('hidden');
  $('#loginToggle').classList.add('hidden');
  renderHeaderIdentity();
  $('#adminNav').classList.toggle('hidden', state.currentUser !== 'admin');
  renderAdminOptions();
  renderAll();
  navigate('dashboard');
}

function logout() {
  state.currentUser = null;
  state.currentRole = null;
  state.activeFunction = null;
  state.selectedFunctionRecord = null;
  state.editingEvent = null;
  state.assistantResponseKey = null;
  state.loginErrorKey = null;
  state.calendarFeedbackKey = null;
  state.assignmentFeedbackKey = null;
  state.functionGrantFeedbackKey = null;
  $('#assistantResponse').textContent = '';
  $('#assistantResponse').classList.add('hidden');
  $('#calendarForm').reset();
  $('#calendarFeedback').textContent = '';
  $('#assignmentFeedback').textContent = '';
  $('#functionGrantFeedback').textContent = '';
  $('#usernameInput').value = '';
  $('#passwordInput').value = '';
  $('#appView').classList.add('hidden');
  $('#logoutButton').classList.add('hidden');
  $('#loginToggle').classList.remove('hidden');
  $('#publicView').classList.remove('hidden');
  renderHeaderIdentity();
  closeLogin();
}

function navigate(viewName) {
  if (!state.currentUser) return false;
  if (viewName.startsWith('function:')) return openFunction(viewName.slice('function:'.length));
  if (viewName === 'admin' && state.currentUser !== 'admin') {
    navigate('dashboard');
    return false;
  }
  if (viewName === 'functions' && !functionSpecs.some((spec) => hasFunctionAccess(current(), spec.id))) {
    navigate('dashboard');
    return false;
  }
  if (viewName === 'function-workspace' &&
      (!state.activeFunction || !hasFunctionAccess(current(), state.activeFunction))) {
    state.activeFunction = null;
    navigate('dashboard');
    return false;
  }
  if (!$(`[data-view-panel="${viewName}"]`)) return false;
  $$('[data-view-panel]').forEach((panel) => panel.classList.toggle('hidden', panel.dataset.viewPanel !== viewName));
  $$('.nav-item').forEach((button) => button.classList.toggle('active',
    button.dataset.view === viewName ||
    (viewName === 'function-workspace' && button.dataset.view === 'functions')
  ));
  return true;
}

function visibleTasks() {
  const user = current();
  if (!user || !state.currentRole || !roles.includes(state.currentRole)) return [];
  return tasks.filter((item) => {
    if (!item.roles.includes(state.currentRole)) return false;
    if (item.accountOnly && item.accountOnly !== state.currentUser) return false;
    return user.scopes.includes(item.scope);
  });
}

function statusLabel(status) {
  return status === 'open' ? t('statusOpen') : status === 'track' ? t('statusTrack') : t('statusDone');
}

function renderTasks() {
  const all = visibleTasks();
  const filtered = state.taskFilter === 'open' ? all.filter((item) => item.status === 'open') : all;
  $('#taskTableBody').innerHTML = filtered.map((item) => `
    <tr>
      <td>${t(item.key)}</td><td>${t(item.owner)}</td><td>${t(item.due)}</td>
      <td><span class="status-pill">${statusLabel(item.status)}</span></td>
      <td><button class="table-action" type="button" data-task-detail="${item.id}">${t('actionCol')}</button></td>
    </tr>`).join('');
  $('#emptyTasks').classList.toggle('hidden', filtered.length > 0);
  $('#taskCount').textContent = String(all.filter((item) => item.status === 'open').length);
  $('#dashboardTasks').innerHTML = all.slice(0, 3).map((item) =>
    `<article class="task-card"><strong>${t(item.key)}</strong><p>${t(item.owner)} · ${t(item.due)}</p><span class="status-pill">${statusLabel(item.status)}</span></article>`
  ).join('') || `<p class="empty-state">${t('noRoleTasks')}</p>`;
}

function mayEditEvent(event) {
  const user = current();
  if (!user) return false;
  if (event.accountId === state.currentUser) return user.scopes.includes(event.scope);
  const delegation = user.delegatedCalendar;
  return Boolean(delegation && delegation.target === event.accountId &&
    delegation.scope === event.scope && user.scopes.includes(event.scope) &&
    state.users[delegation.target]?.scopes.includes(event.scope));
}

function visibleEvents() {
  const user = current();
  if (!user) return [];
  return state.events.filter((event) => {
    if (state.currentUser === 'admin') return user.scopes.includes(event.scope);
    if (event.accountId === state.currentUser) return user.scopes.includes(event.scope);
    if (['phuhuynhD','doanhnghiepF'].includes(state.currentUser)) return false;
    if (user.delegatedCalendar && event.accountId === user.delegatedCalendar.target &&
        event.scope === user.delegatedCalendar.scope && user.scopes.includes(event.scope) &&
        state.users[user.delegatedCalendar.target]?.scopes.includes(event.scope)) return true;
    return user.scopes.includes(event.scope) && !event.accountId;
  });
}

function formatEventDate(value) {
  const locale = state.language === 'zh' ? 'zh-CN' : state.language === 'en' ? 'en-GB' : 'vi-VN';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(locale, {
    day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit', hourCycle:'h23'
  }).format(date);
}

function renderCalendar() {
  const events = visibleEvents();
  $('#calendarTableBody').innerHTML = events.map((event) => {
    const personName = accountName(event.accountId);
    const editable = mayEditEvent(event);
    return `<tr><td>${escapeHtml(event.customTitle || t(event.key))}</td><td>${formatEventDate(event.date)}</td><td>${escapeHtml(event.customLocation || t(event.location))}</td>
      <td>${personName}</td><td>${editable ? `<button class="table-action" type="button" data-edit-event="${event.id}">${t('editEvent')}</button>` : ''}</td></tr>`;
  }).join('');
  $('#emptyCalendar').classList.toggle('hidden', events.length > 0);
  $('#eventCount').textContent = String(events.length);
  renderEventTargets();
}

function renderEventTargets() {
  const select = $('#eventTarget');
  const user = current();
  if (!user) return;
  const options = [[state.currentUser, t('calendarSelf')]];
  const delegation = user.delegatedCalendar;
  if (delegation && user.scopes.includes(delegation.scope) &&
      state.users[delegation.target]?.scopes.includes(delegation.scope)) {
    options.push([delegation.target, accountName(delegation.target)]);
  }
  select.innerHTML = options.map(([id, name]) => `<option value="${id}">${name}</option>`).join('');
  if (state.editingEvent) select.value = state.editingEvent.accountId;
  const delegated = select.value !== state.currentUser;
  $('#calendarHint').textContent = delegated ? t('calendarModeDelegated').replace('{name}', accountName(user.delegatedCalendar.target)) : t('calendarModeOwn');
}

function clearEventForm() {
  state.editingEvent = null;
  $('#calendarForm').reset();
  $('#eventId').value = '';
  $('#cancelEventEdit').classList.add('hidden');
  state.calendarFeedbackKey = null;
  $('#calendarFeedback').textContent = '';
  renderEventTargets();
}

function startEventEdit(eventId) {
  const event = visibleEvents().find((item) => item.id === eventId);
  if (!event || !mayEditEvent(event)) return;
  state.editingEvent = event;
  $('#eventId').value = event.id;
  $('#eventTitle').value = event.customTitle || t(event.key);
  $('#eventDate').value = event.date.slice(0, 16);
  $('#eventLocation').value = event.customLocation || t(event.location);
  renderEventTargets();
  $('#eventTarget').value = event.accountId;
  $('#cancelEventEdit').classList.remove('hidden');
  state.calendarFeedbackKey = null;
  $('#calendarFeedback').textContent = '';
  $('#eventTitle').focus();
}

function saveCalendarEvent(event) {
  event.preventDefault();
  const user = current();
  const target = $('#eventTarget').value;
  const title = $('#eventTitle').value.trim();
  const date = $('#eventDate').value;
  const location = $('#eventLocation').value.trim();
  const original = state.editingEvent;
  const allowedTargets = new Set([state.currentUser]);
  if (user.delegatedCalendar && user.scopes.includes(user.delegatedCalendar.scope) &&
      state.users[user.delegatedCalendar.target]?.scopes.includes(user.delegatedCalendar.scope)) {
    allowedTargets.add(user.delegatedCalendar.target);
  }
  if (!title || !date || !location) {
    state.calendarFeedbackKey = 'eventRequired';
    $('#calendarFeedback').textContent = t(state.calendarFeedbackKey);
    return;
  }
  if (!allowedTargets.has(target)) {
    state.calendarFeedbackKey = 'eventSaveError';
    $('#calendarFeedback').textContent = t(state.calendarFeedbackKey);
    return;
  }
  const account = state.users[target];
  const targetScope = target === state.currentUser ? account.scopes.find((scope) => user.scopes.includes(scope)) : user.delegatedCalendar.scope;
  if (!targetScope) {
    state.calendarFeedbackKey = 'eventSaveError';
    $('#calendarFeedback').textContent = t(state.calendarFeedbackKey);
    return;
  }
  if (original && (!mayEditEvent(original) || original.accountId !== target)) {
    state.calendarFeedbackKey = 'eventSaveError';
    $('#calendarFeedback').textContent = t(state.calendarFeedbackKey);
    return;
  }
  const entry = {
    id: original?.id || `mock-${Date.now()}`,
    key: 'eventEditSelf', date, location: 'locationOnline', customTitle: title,
    customLocation: location, accountId: target, scope: targetScope
  };
  if (original) state.events = state.events.map((item) => item.id === original.id ? entry : item);
  else state.events.push(entry);
  state.calendarFeedbackKey = target === state.currentUser ? 'eventSavedOwn' : 'eventSavedDelegated';
  state.calendarFeedbackAccount = target;
  clearEventForm();
  renderCalendar();
  state.calendarFeedbackKey = target === state.currentUser ? 'eventSavedOwn' : 'eventSavedDelegated';
  state.calendarFeedbackAccount = target;
  renderDynamicMessages();
}

function renderAll() {
  const user = current();
  if (!user) return;
  $('#profileName').textContent = accountName(state.currentUser);
  $('#primaryRole').textContent = roleName(user.primaryRole);
  renderHeaderIdentity();
  $('#scopeText').textContent = user.scopes.map(scopeName).join(', ') || '—';
  $('#assignedRoleList').innerHTML = user.roles.map((role) =>
    `<span class="role-chip${role === user.primaryRole ? ' primary' : ''}">${roleName(role)}${role === user.primaryRole ? ` · ${t('primaryRole')}` : ''}</span>`
  ).join('');
  renderTasks();
  renderCalendar();
  renderFunctionNavigation();
}

function handleLogin(event) {
  event.preventDefault();
  const username = $('#usernameInput').value.trim();
  const password = $('#passwordInput').value;
  const user = state.users[username];
  if (!user || user.password !== password) {
    state.loginErrorKey = 'loginError';
    $('#loginError').textContent = t(state.loginErrorKey);
    $('#loginError').classList.remove('hidden');
    return;
  }
  state.currentUser = username;
  state.currentRole = user.primaryRole;
  state.loginErrorKey = null;
  state.taskFilter = 'all';
  $('#loginError').classList.add('hidden');
  showApp();
}

function saveAssignment() {
  if (state.currentUser !== 'admin') return;
  const accountId = $('#accountSelect').value;
  const user = state.users[accountId];
  const selectedRoles = $$('#roleCheckboxes input:checked').map((box) => box.value);
  const selectedScopes = $$('#scopeCheckboxes input:checked').map((box) => box.value);
  const primaryRole = $('#primaryRoleSelect').value;
  if (!selectedRoles.length) {
    state.assignmentFeedbackKey = 'assignmentNeedsRole';
    $('#assignmentFeedback').textContent = t(state.assignmentFeedbackKey);
    return;
  }
  if (!selectedRoles.includes(primaryRole)) {
    state.assignmentFeedbackKey = 'assignmentPrimaryError';
    $('#assignmentFeedback').textContent = t(state.assignmentFeedbackKey);
    return;
  }
  user.roles = selectedRoles;
  user.primaryRole = primaryRole;
  user.scopes = selectedScopes;
  if (accountId === 'thukyB' && $('#delegationToggle').checked && selectedScopes.includes('leadership')) {
    user.delegatedCalendar = { target:'nguyenvana', scope:'leadership' };
  } else {
    delete user.delegatedCalendar;
    $('#delegationToggle').checked = false;
  }
  state.assignmentFeedbackKey = 'assignmentSaved';
  $('#assignmentFeedback').textContent = t(state.assignmentFeedbackKey);
  renderAdminOptions();
  if (state.currentUser === accountId) {
    if (!user.roles.includes(state.currentRole)) state.currentRole = user.primaryRole;
    $('#adminNav').classList.toggle('hidden', state.currentUser !== 'admin');
    renderAll();
  }
}

function saveFunctionGrants() {
  if (state.currentUser !== 'admin') return;
  const accountId = $('#accountSelect').value;
  const user = state.users[accountId];
  if (!user) return;
  const selected = new Map();
  $$('#functionGrantEditor input:checked').forEach((box) => {
    const functionId = box.dataset.functionId;
    const scope = box.value;
    if (accountId === 'thukyB' && functionId === 'fis') return;
    if (!functionSpecs.some((spec) => spec.id === functionId && spec.scopeIds.includes(scope))) return;
    if (!selected.has(functionId)) selected.set(functionId, []);
    selected.get(functionId).push(scope);
  });
  user.functionGrants = [...selected.entries()].map(([functionId, grantedScopes]) => ({
    functionId, scopes: grantedScopes
  }));
  state.functionGrantFeedbackKey = 'functionGrantSavedOnly';
  $('#functionGrantFeedback').textContent = t(state.functionGrantFeedbackKey);
  if (accountId === state.currentUser) {
    renderFunctionNavigation();
    if (state.activeFunction && !hasFunctionAccess(current(), state.activeFunction)) {
      state.activeFunction = null;
      navigate('dashboard');
    } else {
      renderFunctionWorkspace();
    }
  }
}

$('#languageSelect').addEventListener('change', (event) => setLanguage(event.target.value));
$('#loginToggle').addEventListener('click', openLogin);
$('#closeLogin').addEventListener('click', closeLogin);
$('#loginForm').addEventListener('submit', handleLogin);
$('#logoutButton').addEventListener('click', logout);
$$('.nav-item').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.view)));
$$('[data-go-view]').forEach((button) => button.addEventListener('click', () => navigate(button.dataset.goView)));

$('#headerRoleSelect').addEventListener('change', (event) => {
  const user = current();
  if (!user || !user.roles.includes(event.target.value)) return;
  state.currentRole = event.target.value;
  renderAll();
});
$('#newsToggle').addEventListener('click', () => {
  state.newsExpanded = !state.newsExpanded;
  renderPublicNews();
});
$('#publicNews').addEventListener('click', (event) => {
  const button = event.target.closest('[data-news-detail]');
  if (!button) return;
  state.newsDetailKey = Number(button.dataset.newsDetail);
  renderNewsDetail(state.newsDetailKey);
  $('#newsDetailDialog').showModal();
});
$('#closeNewsDetail').addEventListener('click', () => $('#newsDetailDialog').close());
$('#newsDetailDialog').addEventListener('close', () => { state.newsDetailKey = null; });
$$('.filter-button').forEach((button) => button.addEventListener('click', () => {
  state.taskFilter = button.dataset.filter;
  $$('.filter-button').forEach((filter) => filter.classList.toggle('active', filter === button));
  renderTasks();
}));
$('#taskTableBody').addEventListener('click', (event) => {
  const button = event.target.closest('[data-task-detail]');
  if (!button) return;
  const task = visibleTasks().find((item) => item.id === button.dataset.taskDetail);
  if (task) window.alert(`${t('taskDetail')}: ${t(task.key)}`);
});
$('#calendarTableBody').addEventListener('click', (event) => {
  const button = event.target.closest('[data-edit-event]');
  if (button) startEventEdit(button.dataset.editEvent);
});
$('#eventTarget').addEventListener('change', () => {
  const target = $('#eventTarget').value;
  const user = current();
  $('#calendarHint').textContent = target === state.currentUser ? t('calendarModeOwn') :
    t('calendarModeDelegated').replace('{name}', accountName(user.delegatedCalendar.target));
});
$('#calendarForm').addEventListener('submit', saveCalendarEvent);
$('#cancelEventEdit').addEventListener('click', clearEventForm);
$('#accountSelect').addEventListener('change', () => {
  syncAssignmentForm();
  renderFunctionGrantEditor();
  state.assignmentFeedbackKey = null;
  $('#assignmentFeedback').textContent = '';
  state.functionGrantFeedbackKey = null;
  $('#functionGrantFeedback').textContent = '';
});
$('#roleCheckboxes').addEventListener('change', (event) => {
  if (event.target.matches('input[type="checkbox"]')) {
    const selected = $$('#roleCheckboxes input:checked').map((box) => box.value);
    const primary = $('#primaryRoleSelect').value;
    if (!selected.includes(primary)) {
      $('#primaryRoleSelect').innerHTML = selected.map((role) =>
        `<option value="${role}">${roleName(role)}</option>`
      ).join('');
    }
  }
});
$('#saveAssignment').addEventListener('click', saveAssignment);
$('#saveFunctionGrants').addEventListener('click', saveFunctionGrants);
$('#functionCards').addEventListener('click', (event) => {
  const button = event.target.closest('[data-open-function]');
  if (button) openFunction(button.dataset.openFunction);
});
$('#backToFunctions').addEventListener('click', () => navigate('functions'));
$('#functionTypeFilter').addEventListener('change', (event) => {
  state.functionTypeFilter = event.target.value;
  renderFunctionWorkspace();
});
$('#functionSearch').addEventListener('input', (event) => {
  state.functionSearch = event.target.value;
  renderFunctionWorkspace();
});
$('#functionRecordList').addEventListener('click', (event) => {
  const button = event.target.closest('[data-function-record]');
  if (!button || !hasFunctionAccess(current(), state.activeFunction)) return;
  const allowed = recordsForAccount(state.activeFunction).some((record) => record.id === button.dataset.functionRecord);
  if (!allowed) return;
  state.selectedFunctionRecord = button.dataset.functionRecord;
  renderFunctionWorkspace();
});
$$('[data-assistant]').forEach((button) => button.addEventListener('click', () => {
  if (!state.currentUser) return;
  const responses = { analyze:'assistantAnalyze', draft:'assistantDraft', review:'assistantReview' };
  const response = $('#assistantResponse');
  state.assistantResponseKey = responses[button.dataset.assistant];
  response.textContent = t(state.assistantResponseKey);
  response.classList.remove('hidden');
}));

translateStaticText();
updateClock();
setInterval(updateClock, 1000);
renderAdminOptions();
$('#publicView').classList.remove('hidden');
