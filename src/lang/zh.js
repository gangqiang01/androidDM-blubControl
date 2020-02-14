const home =  {
    deviceList: "设备列表",
    groupList: "设备组管理",
    deviceMonitor: "设备监控",
    remoteControl: "远程控制",
    appManager: "APP管理",
    systemUpdate: "系统更新",
    remoteDesktop: "远程桌面",
    wordorderList: "工单管理",
    configurations: "配置",
    aStore: "A-Store入口",
    license: "许可证",
    appSecurity: "APP安全",
    deployFile: "文件部署"
}

const login = {
    welcome: "欢迎来到",
    server: "工业边缘设备管理服务器",
    remember: "记住密码",
    login: "登录",
    verifycodeEmpty: '请输入验证码',
    verifycodeError: "验证码错误",
    // placeholder
    inputUsernameHolder: "请输入用户名",
    inputPasswordHolder: "请输入密码",
    inputVerifyCodeHolder: "请输入验证码",
    
}

//global prop
const global = {
    success: "成功",
    
    // error info
    verifyShortError: '必须要以数字或字母开头，包含中划线、下划线、点、数字、字母, 长度为3-12',
    verifyCommonError: '必须要以数字或字母开头，包含中划线、下划线、点、数字、字母, 长度为3-24',
    verifyLongError: '必须要以数字或字母开头，包含中划线、下划线、点、数字、字母, 长度为3-48',
    verifySimpleError: '包含字母和数字，长度为3-12',
    verifyDescriptionError: '必须要以数字或字母开头，包含中划线、下划线、点、数字、字母、空格, 长度为3-42',
    verifyServerAddressError: '服务器地址错误',
    verifyServerIpError: '服务器IP错误',
    verifyServerPortError: '服务器端口错误',
    verifyLicenseKeyError: "必须要以数字或字母开头，包含中划线、点、数字、字母, 长度为3-24",
    verifyAuthCodeError: "必须要以数字或字母开头，包含中划线、点、数字、字母, 长度为3-24",
    verifyPathError: "必须以左斜线开始,不包含特殊字符",
    // button
    action: "操作",
    move: "移动",
    delete: "删除",
    status: "状态",
    success: "成功",
    failed: "失败",
    deploying: "正在部署",
    running: "正在运行",
    cancel: "取消",
    confirm: "确定",
    single: "单个",
    batch: "批量",
    deviceList: "设备列表",
    groupList: "设备组列表",
    save: "保存",
    submit: "提交",
    clearAll: "清空数据",
    add: '添加',
    complete: '完成',
    setKiosk: '设置Kiosk',
    install: "安装",
    deploy: "部署",
    apply: "应用",
    redeploy: "重新部署",
    back: "返回",
    rename: "重新命名",
    summary: "汇总",
    modify: "修改",
    repeat: "重新执行",
    download: "下载",
    // swal info
    loginExpired: "登录过期", 
    functionNotSupport: "这个功能不支持",
    devicesOffline: "所有设备都不在线",
    selectDevice: "请选择您的设备",
    selectGroup: "请选择您的设备组",
    areYouSure: "您确定?",

    noData: "没有数据",
    loading: "加载中"

}
//form label
const label = {
    deviceName: "设备名称:",
    groupName: "设备组名称:",
    selectGroup: "选择设备组:",
    deviceGroup: "设备组:",
    oldPassword: "旧密码:",
    newPassword: "新密码:",
    confirmPassword: "确定新密码:",
    groupDescription: "设备组描述:",

    // app control
    taskName: "任务名称:",
    launchApp: "启动APP:",
    stopApp: "停止APP:",
    enableApp: "启用APP:",
    disableApp: "禁止APP:",
    // system control
    deployName: "部署名称:",
    deployPath: "部署路径:",
    deployComment: "部署注释:",
    
    systemVersion: "系统版本:",
    boardName: "平台名称:",
    platformName: "硬件名称:",
    buildVersion: "编译版本:",
    // configuration
    serverIp: "服务器IP:",
    serverPort: "服务器端口:",
    //device details
    deviceManufacture: "设备生产厂商:",
    systemVersion: "系统版本:",
    physicalAddress: "设备的物理地址:",
    agentVersion: "代理软件版本:",
    supportModes: "支持的通讯模式:",
    devicename: "设备名称:",
     //license
     selectLicenseFile: "许可证文件:",
     //workorder
    workorderDescription:"工单描述:",
    workorderName:"工单名称:",
    package: "包:",
    workorderName: "工单名称:"
}

const common = {
    single: "单个",
    batch: "批量",
    deviceList: "设备列表",
    onlineDevices: "在线设备",
    groupList: "设备组列表",
    online: "在线",
    offline: "掉线",
}

const device = {
    deviceList: "设备列表",
    all: "全部",
    agentId: "设备ID",
    deviceName: "设备名称",
    boardName: "平台名称",
    registrationTime: "注册时间",
    ipAddress: "设备IP",
    online: "在线",
    offline: "掉线",
    deviceDetails: "设备详情",
    editDeviceName: "编辑设备名称",
    moveGroupTitle: "移动设备组",
    groupManagement: "设备组管理",
    qrCodeIntroduce: "请用EdgeOn Deploy APP扫描二维码去配置您的设备",
    // devicedetails
    deviceDetails: "设备详情",
    deviceMonitor: "设备监控",
        // swal
    deviceLikeName: "包含中划线、下划线、点、数字、字母、冒号，长度为1-18",
    // placeholder
    selectGroupHolder: "请选择设备组",
    keywordHolder: "设备名的关键字",
    inputDeviceNameHolder: "请输入设备名",

}
const header = {
    noNotification: "没有新消息",
    youHave: "您有",
    newNotification: "条新消息",
    deviceAgent: "设备ID:",
    agentVersion: "代理软件版本:",
    date: "时间:",
    deviceName: "设备名称:",
    viewAll:"查看所有消息",
    markAll: "标记为已读",
    lastAccessed: "最近上线时间:",
    deviceConnected: "连接设备数:",
    resetPassword: "重设密码",
    loginOut: "退出登录",
    samePassword: "新密码和老密码必须不一致",
    device: "设备",
    offline: "掉线",
    online: "上线",

    // swal
    passwordNotMatch: "两次输入的新密码不一致",
    // placeholder
    inputOldPasswordHolder: "请输入旧密码",
    inputNewPasswordHolder: "请输入新密码",
    inputConfirmPasswordHolder: "请再次输入新密码",

}

const group = {
    groupManager: "设备组管理",
    editGroupName: "编辑设备组",
    addGroup: "添加设备组",
    // placeholder
    inputGroupNameHolder: "请输入设备组名称",
    inputGroupDescriptionHolder: "请输入设备组描述",
}

const monitor = {
    deviceMonitor: "设备监控",
    lineChart: "线性图表",
    setIntervalTime: "设置间隔时间:",
}

const appControl = {
    appManager: "APP管理",
    appMarket: "APP市场",
    appName: "APP名字",
    packageName: "APP包名",
    versionName: "APP版本",
    install: "安装",
    uninstall: "卸载",
    upgrade: "升级",
    installApp: "安装APP",
    //batch install history
    appManagerHistory: "APP管理历史",
    deviceId: "设备ID",
    deviceName: "设备名称",
    taskName: "任务名称",
    apkName: "Apk名称",
    beginTime: "开始时间",
    finishTime: "结束时间",
    installStatus: "安装状态",
    errorStatus: "错误状态",
    action: "操作",
    reinstall: "重新执行",
    clearAll: "清空数据",
    batchInstallApk: "批量操作APP",
    function: "应用名称",
   

    //summary
    total: "总量:",
    deploying: "正在安装:",
    success: "成功:",
    failed: "失败:",

    // single
    appOperation: "APP操作",
    thirdApp: "第三方APP",
    systemApp: "系统APP",
    launch: "启动",
    stop: "停止",
    enable: "启用",
    disable: "禁止",
    // cid
    launchApp: "启动APP",
    stopApp: "停止APP",
    enableApp: "启用APP",
    disableApp: "禁止APP",
    installApp: "安装APP",
    uninstallApp: '卸载APP',
    upgradeApp: "升级APP",
    setKiosk: "设置Kiosk",
    cancelKiosk: "取消Kiosk",
    // placeholder
    selectApp: "请选择APP",
    installAppTaskName: "安装APP任务的名称",
    keywordHolder: "APP名称的关键字",
    //swal
    appNotInWhitelist: "这个APP没在白名单"

}

const remoteControl = {
    remoteControl: "远程控制",
    reboot: "重启"
}

const systemUpdate = {
    systemUpdate: "系统更新",
    note: "注意:",
    noteContent: "批量更新系统只能用于拥有相同平台名称的设备组中",
    // batch
    systemMarket: "系统市场",
    boardName: "平台名称",
    buildVersion: "编译版本",
    description: "描述",
    systemUpdateHistory: "系统更新历史",
    deviceId: "设备ID",
    deviceName: "设备名称",
    deployName: "部署名称",
    deployComment: "部署注释",
    beginTime: "开始时间",
    finishTime: "结束时间",
    updateStatus: "更新状态",
    errorStatus: "错误状态",
    action: "操作",
    delete: "删除",
    redeploy: "重新执行",
    systemDeploy: "系统部署",

    //summary
    total: "总量:",
    deploying: "正在部署:",
    success: "成功:",
    failed: "失败:",
    // single
    systemInfo: "系统信息",
    deploy: "部署",
    // placeholder
    updateSystemComment: "更新系统的注释",
    updateSystemDeployName: "更新系统的部署名称",
}

const fileDeploy = {
    fileDeploy: "文件部署",
    // batch
    fileMarket: "文件市场",
    filename: "文件名称",
    description: "描述",
    application: "应用",
    fileDeployHistory: "文件部署历史",
    deviceId: "设备ID",
    deviceName: "设备名称",
    deployName: "部署名称",

    action: "操作",
    delete: "删除",
    deploy: "部署",
    action: "操作",
    batchDeployFile: "批量部署文件",
    deployFile: "部署文件",
    savePath: "部署路径",
    
    //history list
    repeat: "重复执行",
    deployStatus: "部署状态",
    beginTime: "开始时间",
    finishTime: "结束时间",
    errorStatus: "错误状态",

    //summary
    total: "总量:",
    deploying: "正在部署:",
    success: "成功:",
    failed: "失败:",

    // fileformat
    img: "图片",
    video: "视频",
    audio: "音频",
    package: "压缩包",
    fileFormat: "文件格式",
    
    // placeholder
    DeployNameHolder: "请输入部署名称",
    keywordHolder: "文件名称关键字",
    savePathHolder: "请输入设备的绝对路径"
    
}

const configuration = {
    configuration: "配置",
    configurations: "配置项",
    aStoreIntroduce: "A-Store用来上传和管理您需要远程部署到设备的apk文件和系统更新包，用户名和密码一致于 ",
    aStorePortal: "A-Store入口",
    vncConfiguration: "VNC配置",
    degeOnDeployAppDownload: "EdgeOn Deploy APP下载",
    scanQRCode: "请用您的安卓手机扫描二维码来下载EdgeOn Deploy App",
    scanQRCode1: "如果通过扫码不能下载,请点击下面的链接进行下载",
    // placeholder
    serverIpHolder: "例如: 172.21.73.144",
    serverPortHolder: "例如: 9191",
    agentConfiguration: "部署信息",
    agentConfigurationIntroduce: "使用EdgeOnDeploy App扫描这个二维码来配置您的设备代理软件"
}

const vnc = {
    remoteDesktop: "远程桌面",
    remoteToYourDevice: "远程到您设备的桌面",
    connect: "连接"
}

const license = {
    licenseActivation:"许可证激活",
    licenseIntro: "默认10台设备连接是免费的,不需要激活。如果需要连接更多的设备，请到WISE-PaaS商店购买licenseKey并激活它",
    licenseAlert: "联系jianfeng.dai@advantech.com.cn购买许可证.",
    licenseDevInfo:  "设备信息:",
    licenseDevContent: "IXHDIFOOSNXOXH12ONO",
    //swal
    licenseIsNull: "许可证文件为空",
    licenseFileInfo: "许可证文件名的后缀必须为lic",
    uploadLicense: "上传许可证",
    maxAgent: "当前设备连接的最大数量：",
    qrCodeIntroduce: "通过扫描二维码获得授权码",
    activation: "激活",
    localLicense:"文件许可证",
    wpLicense: "授权码",
    licenseKey: "许可证钥匙:",
    authCode: "授权码:",
    verify: "验证",
    //placeholder
    licenseKeyHolder: "请输入许可证钥匙",
    authCodeHolder: "请输入授权码"
}

const aStore = {
    aStore: "A-Store入口",
    supIntro: "A-Store介绍",
    subIntro: "A-Store是一个存储APP和安卓OS的解决方案.",
    subInfo: "可以批量的把APP从A-Store部署到边缘设备和为边缘设备更新来自A-Store的安卓OS."
}
const workorder = {
    //workorder list
    workorderManager: "工单管理",
    editWordorderName: "编写工单名称",
    addWorkorder: "添加工单",
    workorderList: '工单列表',
    workorderItem: "工单条目",

//workorder item
    appName: "App名称",
    packageName: "包名",
    versionName: "版本",
    install: "安装",
    noData: "没有数据",
    noBtData: "请在A-Store中上传您需要的zip包",
    noKioskData: "请先预安装需要设置kiosk的APP",
    addWorkorderItem: "添加工单功能项",
    workorderDeploy: "工单部署",
    introduce: "工单部署的介绍",
    createWdIntroduce: "工单创建的介绍",

    introContent1: "执行一下步骤可以满足您的需求:",
    introContent2: "1.在A-Store中上传您需要的APK和zip包.",
    introContent3: "2. 添加预安装的APP.",
    introContent4: "3. 从预安装APP中选择要设为Kiosk的APP.",
    introContent5: "4. 选择一个zip包设置为开机动画.",
    introContent: "首先添加预安装的apk, 然后在这些apk中选择一个并设置为kiosk,最后选择一个zip包设置为开机动画,这样就完成了工单的建立.",
    summaryContent: "在汇总中您可以看到该工单的应用列表,如果你没有修改,就可以直接将工单部署到设备中.",
    preInstallApp: "预安装App",
    setKiosk: "设置Kiosk",
    setBootanimation: "设置开机动画",
    preInstallApp: "预安装App",
    summary: "汇总",
    redeploy: "重新执行",
    preInstall: "预安装",
    remove: "移除",
//workorder history
    dpwdHistory: "工单部署历史",
    dpStatus: "部署状态",
    errorStatus: "错误状态",

    deviceId: "设备ID",
    deviceName: "设备名称",
    deployName: "部署名称",
    fileName: "文件名称",
    beginTime: "开始时间",
    finishTime: "结束时间",
    batchDpwd: "批量部署工单",
    funName: "应用名称",
    // placeholder
    inputWorkorderNameHolder: "请输入工单名称",
    inputWorkorderDescriptionHolder: "请输入工单描述",
    wdDeployNameHolder: "请输入部署名称"
}

const appSecurity = {
    //batch install history
    appSecurity: "APP安全",
    operatAppHistory: "APP设置历史",
    deviceId: "设备ID",
    deviceName: "设备名称",
    taskName: "任务名称",
    apkName: "Apk名称",
    versionName: "版本",
    value: "白名单状态",
    time: "开始时间",
    beginTime: "安装开始时间",
    finishTime: "安装结束时间",
    installStatus: "状态",
    errorStatus: "错误状态",
    action: "操作",
    reexec: "重新执行",
    clearAll: "清空数据",
    batchExec: "批量设置",

    execHistory: "白名单开关历史",
    enable: "启用白名单",
    disable: "禁止白名单",

    funName: "应用名称",
 
    //summary
    total: "总量:",
    deploying: "正在安装:",
    success: "成功:",
    failed: "失败:",

    // single
    whitelistManagement: "APP白名单管理",
    add: "添加",
    remove: "移除",
    startServer: "启动服务",
    stopServer: "关闭服务",
    noData: "没有第三方APP",
    // placeholder
    execTaskName: "请输入任务名称"
}

const zh = {
    global,
    login,
    home,
    device,
    group,
    monitor,
    appControl,
    remoteControl,
    systemUpdate,
    configuration,
    vnc,
    label,
    header,
    common,
    license,
    workorder,
    aStore,
    appSecurity,
    fileDeploy
}

export default zh;