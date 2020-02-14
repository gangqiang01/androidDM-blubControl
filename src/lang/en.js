const home =  {
    deviceList: "Device List",
    groupList: "Group Manager",
    deviceMonitor: "Device Monitor",
    remoteControl: "Remote Control",
    appManager: "App Manager",
    systemUpdate: "System Update",
    remoteDesktop: "Remote Desktop",
    configurations: "Configurations",
    wordorderList: "Workorder Manager",
    aStore: "A-Store Portal",
    license: "License",
    appSecurity: "App Security",
    deployFile: "File Deploy"

}

const login = {
    welcome: "Welcome To",
    server: "Industry Edge Device Manager Server",
    remember: "Remember me",
    login: "SIGN IN",

    verifycodeEmpty: 'please input verifycode',
    verifycodeError: "Verifycode is error",
    // placeholder
    inputUsernameHolder: "Please input username",
    inputPasswordHolder: "Please input password",
    inputVerifyCodeHolder: "Please input verify code",

}

//global prop
const global = {
    success: "Success",
     // error info
    verifyShortError: 'Must begin with letter/number,contain line/underline/dot/letter/number length 3~12',
    verifyCommonError: 'Must begin with letter/number,contain line/underline/dot/letter/number length 3~24',
    verifyLongError: 'Must begin with letter/number,contain line/underline/dot/letter/number length 3~48',
    verifySimpleError: 'contain letter and number length 3~12',
    verifyDescriptionError: 'Must begin with letter/number,contain line/underline/dot/space/letter/number length 3~42',
    verifyServerAddressError: 'Server address error',
    verifyServerIpError: 'Server IP error',
    verifyServerPortError: 'Server Prot error',
    verifyLicenseKeyError: "Must begin with letter/number,contain line/letter/number length 3~24",
    verifyAuthCodeError: "Must begin with letter/number,contain line/letter/number length 3~24",
    verifyPathError: "Must begin with Left slash, not contain special characters",
    // button
    action: "Action",
    move: "Move",
    delete: "Delete",
    status: "Status",
    success: "Success",
    failed: "Failed",
    deploying: "Deploying",
    running: "Running",
    cancel: "Cancel",
    confirm: "Confirm",
    single: "Single",
    batch: "Batch",
    deviceList: "Device List",
    groupList: "Group List",
    save: "Save",
    clearAll: "Clear All",
    submit: "Submit",
    add: 'Add',
    set: "Set",
    setKiosk: 'Set Kiosk',
    install: "Install",
    complete: 'Complete',
    deploy: "Deploy",
    redeploy: "Redeploy",
    apply: "Apply",
    back: "Back",
    rename: "Rename",
    summary: "Summary",
    modify: "Modify",
    repeat: "Repeat",
    download: "Download",

    // swal info
    loginExpired: "Login expired", 
    functionNotSupport: "This function is not supported",
    devicesOffline: "All devices are offline",
    selectDevice: "Please select your device",
    selectGroup: "Please select your device group",
    areYouSure: "Are You Sure?",
    noData: "No Data",
    loading: "Loading"
}
//form label
const label = {
    deviceName: "Device Name:",
    groupName: "Group Name:",
    selectGroup: "Select Group:",
    deviceGroup: "Device Group:",
    oldPassword: "Old Password:",
    newPassword: "New Password:",
    confirmPassword: "Confirm New Password:",
    groupDescription: "Group Description:",
    // app control
    taskName: "Task Name:",
    launchApp: "Launch App:",
    stopApp: "Stop App:",
    enableApp: "Enable App:",
    disableApp: "Disable App:",
    // system control
    deployName: "Deploy Name:",
    deployPath: "Deploy Path:",
    deployComment: "Deploy Comment:",
    
    systemVersion: "System Version:",
    boardName: "Board Name:",
    platformName: "Platform Name:",
    buildVersion: "Build Version:",
    // configuration
    serverIp: "Server IP:",
    serverPort: "Server Port:",
    //device details
    deviceManufacture: "Device Manufacture:",
    systemVersion: "System Version:",
    physicalAddress: "Physical Address:",
    agentVersion: "Agent Version:",
    supportModes: "Support Modes:",
    devicename: "Device Name:",
    //license
    selectLicenseFile: "License File:",
    //workorder
    workorderDescription:"Workorder Description:",
    workorderName:"Workorder Name:",
    package: "Package:", 
    workorderName: "Workorder Name:"
}

const common = {
    single: "Single",
    batch: "Batch",
    deviceList: "Device List",
    onlineDevices: "Online Devices",
    groupList: "Group List",
    online: "Online",
    offline: "Offline",
}

const device = {
    deviceList: "Device List",
    all: "All",
    agentId: "Agent ID",
    deviceName: "Device Name",
    boardName: "Board Name",
    registrationTime: "Registration Time",
    ipAddress: "Client IP",
    online: "Online",
    offline: "Offline",
    deviceDetails: "Device Details",
    editDeviceName: "Edit Device Name",
    moveGroupTitle: "Move Device Group",
    groupManagement: "Group Management",
    qrCodeIntroduce: "Please scan this QR code using the EdgeOn Deploy app to configure your agent",
    // devicedetails
    deviceDetails: "Device Details",
    deviceMonitor: "Device Monitor",
    // swal
    deviceLikeName: "Contain line/dot/colon/letter/number/underline length 1~18",
    // placeholder
    selectGroupHolder: "Please select group",
    keywordHolder: "Keyword of device name",
    inputDeviceNameHolder: "Please input device name",
}
const header = {
    noNotification: "No new notificationst",
    youHave: "you have",
    newNotification: "new notifications",
    deviceAgent: "Device Agent:",
    agentVersion: "Agent Version:",
    date: "Date:",
    deviceName: "Device Name:",
    viewAll:"View all event",
    markAll: "Mark All as read",
    lastAccessed: "Last Accessed:",
    deviceConnected: "Device Connected:",
    resetPassword: "Reset Password",
    loginOut: "Login Out",
    samePassword: "The new password and old password must be inconsistent",
    device: "Device",
    offline: "Offline",
    online: "Online",
    // swal
    passwordNotMatch: "The new password and confirmed password do not match",
    // placeholder
    inputOldPasswordHolder: "Please input old password",
    inputNewPasswordHolder: "Please input new password",
    inputConfirmPasswordHolder: "Please input new password again",

}

const group = {
    groupManager: "Group Manager",
    editGroupName: "Edit Group Name",
    addGroup: "Add Group",
    // placeholder
    inputGroupNameHolder: "Please input group name",
    inputGroupDescriptionHolder: "Please input group description",
}

const monitor = {
    deviceMonitor: "Device Monitor",
    lineChart: "Line Chart",
    setIntervalTime: "Set Interval Time:",
}

const appControl = {
    appManager: "App Manager",
    appMarket: "App Market",
    appName: "App Name",
    packageName: "Package Name",
    versionName: "Version Name",
    install: "Install",
    uninstall: "Uninstall",
    upgrade: "Upgrade",
    installApp: "Install APP",
    //batch install history
    appManagerHistory: "App Manager History",
    deviceId: "Device ID",
    deviceName: "Device Name",
    taskName: "Task Name",
    apkName: "Apk Name",
    beginTime: "Begin Time",
    finishTime: "Finish Time",
    installStatus: "Install Status",
    errorStatus: "Error Status",
    action: "Action",
    reinstall: "Repeat",
    clearAll: "Clear All",
    batchInstallApk: "Batch Operation Apk",
    function: "Application",
    

    //summary
    total: "Total:",
    deploying: "Deploying:",
    success: "Success:",
    failed: "Failed:",

    // single
    appOperation: "App Operation",
    thirdApp: "Third-party App ",
    systemApp: "System App",
    launch: "Launch",
    stop: "Stop",
    enable: "Enable",
    disable: "Disable",
    setKiosk: "Set Kiosk",
    cancelKiosk: "Cancel Kiosk",
    // cid
    launchApp: "Launch App:",
    stopApp: "Stop App:",
    enableApp: "Enable App:",
    disableApp: "Disable App:",
    installApp: "Install App",
    uninstallApp: 'Uninstall App',
    upgradeApp: "Upgrade App",
    // placeholder
    selectApp: "Please select app",
    installAppTaskName: "The task name of this batch install app",
    keywordHolder: "Keyword of app name",
    //swal
    appNotInWhitelist: "This app is not in the whitelist"

}

const remoteControl = {
    remoteControl: "Remote Control",
    reboot: "Reboot"
}

const systemUpdate = {
    systemUpdate: "System Update",
    note: "Note:",
    noteContent: "Batch update system can only be used to a group of the same boardname device",
    // batch
    systemMarket: "System Market",
    boardName: "Board Name",
    buildVersion: "Build Version",
    description: "Description",
    systemUpdateHistory: "System Update History",
    deviceId: "Device ID",
    deviceName: "Device Name",
    deployName: "Deploy Name",
    deployComment: "Deploy Comment",
    beginTime: "Begin Time",
    finishTime: "Finish Time",
    updateStatus: "Update Status",
    errorStatus: "Error Status",
    action: "Action",
    delete: "Delete",
    redeploy: "Repeat",
    systemDeploy: "System Deploy",

    //summary
    total: "Total:",
    deploying: "Deploying:",
    success: "Success:",
    failed: "Failed:",
    // single
    systemInfo: "System Info",
    deploy: "Deploy",
    // placeholder
    updateSystemComment: "The comment of this update system",
    updateSystemDeployName: "The deploy name of this update system",
    
}


const fileDeploy = {
    fileDeploy: "File Deploy",
    // batch
    fileMarket: "File Market",
    filename: "File Name",
    description: "Description",
    application: "Application",
    fileDeployHistory: "File Deploy History",
    deviceId: "Device ID",
    deviceName: "Device Name",
    deployName: "Deploy Name",

    action: "Action",
    delete: "Delete",
    deploy: "Deploy",
    action: "Action",
    batchDeployFile: "Batch Deploy File",
    deployFile: "Deploy File",
    savePath: "Deploy Path",
    
    //history list
    repeat: "Repeat",
    deployStatus: "Deploy Status",
    beginTime: "Begin Time",
    finishTime: "Finish Time",
    errorStatus: "Error Status",

    //summary
    total: "Total:",
    deploying: "Deploying:",
    success: "Success:",
    failed: "Failed:",

    // fileformat
    img: "Image",
    video: "Video",
    audio: "Audio",
    package: "Package",
    other: "Other",
    fileFormat: "File Format",
    
    // placeholder
    DeployNameHolder: "Please input deploy name",
    keywordHolder: "Keyword of file name",
    savePathHolder: "Please input the absolute path of the device"
    
}

const configuration = {
    configuration: "Configuration",
    configurations: "Configurations",
    aStoreIntroduce: "A-Store is used to upload and manage the apk files and BSP packages that you need to deploy to the device.The username and password are the same as ",
    aStorePortal: "A-Store Portal",
    vncConfiguration: "VNC Configuration",
    degeOnDeployAppDownload: "EdgeOn Deploy App Download",
    scanQRCode: "You can scan the QR code to download an EdgeOn Deploy app using your android phone.",
    scanQRCode1: "If you can't download by scan the QR code, please click the below link to download.",
    // placeholder
    serverIpHolder: "Exp: 172.21.73.144",
    serverPortHolder: "Exp: 9191",
    agentConfiguration: "Deploy Information",
    agentConfigurationIntroduce: "You can scan the QR code to configure your Agent using EdgeOn Deploy app.",
 
}

const vnc = {
    remoteDesktop: "Remote Desktop",
    remoteToYourDevice: "Remote To Your Device",
    connect: "Connect"
}

const license = {
    licenseActivation:"License Activation",
    licenseIntro: "Ten devices are free to connect in default and no need to activate. If more devices need to be connected, Go to WISE-PaaS marketplace to get the Licensekey and activate it",
    licenseAlert: " Contact jianfeng.dai@advantech.com.cn to purchase the license.",
    licenseDevInfo:  "Device Info: ",
    licenseDevContent: "IXHDIFOOSNXOXH12ONO",

    //swal
    licenseIsNull: "License File is null",
    licenseFileInfo: "The suffix of the license file must be lic",
    uploadLicense: "Upload License",
    maxAgent: "Current maximum number of device connections:",
    qrCodeIntroduce: "Obtain Auth Code by scanning this QR code",
    activation: "Activation",
    localLicense:"License File",
    wpLicense: "Auth Code",
    licenseKey: "License Key:",
    authCode: "Auth Code:",
    verify: "Verify",
    //placeholder
    licenseKeyHolder: "Please input license key",
    authCodeHolder: "Please input Auth Code"
}

const server = {
    serverError: "Server Error"
}

const aStore = {
    aStore: "A-Store Portal",
    supIntro: "A-Store Introduce",
    subIntro: "A-Store is a solution to store APP and android OS Image.",
    subInfo: "can batch deploy APP from A-Store to edge device and update Android OS from A-Store for edge device."
}

const workorder = {
    //list
    workorderManager: "Workorder Manager",
    editWordorderName: "Edit Workorder Name",
    addWorkorder: "Add Workorder",
    workorderList: 'Workorder List',
    editWorkorderName: "Edit Workorder Name",
    workorderItem: "Workorder Item",
    
    //workorderitem
    appName: "App Name",
    packageName: "Package Name",
    versionName: "Version Name",
    install: "Install",
    noData: "No Data",
    noBtData: "Please upload zip package you need in A-Store",
    noKioskData: "Please pre-install the app that needs to set kiosk",
    addWorkorderItem: "Add workorder item",
    workorderDeploy: "Workorder Deploy",
    introduce: "Introduce for workorder deploy",
    createWdIntroduce: "Introduce for workorder creation",
    introContent1: "Do as follows according to your needs:",
    introContent2: "1. Upload the app and zip package you need in A-Store.",
    introContent3: "2. Add pre-installed APP.",
    introContent4: "3. Select Kiosk APP from the pre-installed.",
    introContent5: "4. Set system boot animation with zip package.",
    introContent: "First add the pre-installed apk, then select the apk to set Kiosk in these apks, finally select the zip package to set system bootanimation, so as to complete the creation of work order.",
    summaryContent: "In this summary, you can see the list of application of the workorder, If you have no modification, just deploy it.",
    preInstallApp: "Pre-Install App",
    setKiosk: "Set Kiosk",
    setBootanimation: "Set Bootanimation",
    preInstallApp: "Pre-Install App",
    summary: "Summary",
    preInstall: "Pre-Install",
    remove: "Remove",
    //wdHistory
    dpwdHistory: "Workorder Deploy History",
    dpStatus: "Deploy Status",
    errorStatus: "Error Status",
    redeploy: "Repeat",

    deviceId: "Device ID",
    deviceName: "Device Name",
    deployName: "Deploy Name",
    fileName: "File Name",
    beginTime: "Begin Time",
    finishTime: "Finish Time",
    batchDpwd: "Batch Deploy Workorder",
    funName: "Application",
    // placeholder
    inputWorkorderNameHolder: "Please input workorder name",
    inputWorkorderDescriptionHolder: "Please input workorder description",
    wdDeployNameHolder: "Please input deploy name"

}


const appSecurity = {
    appSecurity: "App Security",
    //batch history
    operatAppHistory: "App Setting History",
    deviceId: "Device ID",
    deviceName: "Device Name",
    taskName: "Task Name",
    apkName: "App Name",
    value: "Whitelist Status",
    packageName: "Package Name",
    versionName: "Version Name",
    time: "Begin Time",
    beginTime: "Begin Time",
    finishTime: "Finish Time",
    installStatus: "Status",
    errorStatus: "Error Status",
    action: "Action",
    reexec: "Repeat",
    clearAll: "Clear All",
    batchExec: "Batch Set",


    execHistory: "Whitelist Switch History",

    enable: "Enable Whitelist",
    disable: "Disable Whitelist",

    funName: "Application",

    //summary
    total: "Total:",
    deploying: "Running:",
    success: "Success:",
    failed: "Failed:",

    whitelistManagement: "App Whitelist Management",
    add: "Add",
    remove: "Remove",
    startServer: "Start Server",
    stopServer: "Stop Server",

    noData: "No Third-party App Installed",
    // placeholder
    execTaskName: "Please input batch set task name"
}

const en = {
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
    server,
    aStore,
    appSecurity,
    fileDeploy
}

export default en;