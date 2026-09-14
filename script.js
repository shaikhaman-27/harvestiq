/**
 * ColdCare • Smart Solar Cold Storage System (SIH 2026)
 * Unified Localhost Web Application Engine & Live Simulation
 * Fully offline, zero external dependencies.
 */

// ==========================================================================
// 1. MULTI-LANGUAGE TRANSLATION DICTIONARY (11 North Eastern Region Languages)
// ==========================================================================
const TRANSLATIONS = {
  en: {
    navDashboard: "Dashboard",
    navMonitor: "Storage Monitor",
    navAlerts: "Alerts",
    navProduce: "Produce",
    navSystem: "System",
    navDemo: "Demo Center",
    welcomeTitle: "Good morning, Farmer 👋",
    unitLabel: "Cold Storage Unit",
    lastUpdatedJustNow: "Live Telemetry Active",
    liveSimulationRunning: "Real-time Simulation Active",
    heroSafeTitle: "Your produce is currently stored under suitable conditions.",
    heroSafeSubtitle: "Temperature and humidity are within recommended parameters. Peltier thermoelectric cooling is maintaining thermal stability.",
    heroAttentionTitle: "Storage Attention Required",
    heroAttentionSubtitle: "Storage parameter deviation detected. Check battery level or door status.",
    heroCriticalTitle: "Critical Storage Warning!",
    heroCriticalSubtitle: "Storage temperature is rising above safe limits or power failure detected. Immediate attention recommended.",
    liveStorageMetrics: "Live Sensor Monitoring",
    simValuesNotice: "Values simulated for SIH demonstration",
    temperature: "Temperature",
    humidity: "Humidity",
    batteryLevel: "Battery Level",
    solarPower: "Solar Power",
    peltierCooling: "Peltier Cooling",
    powerSource: "Power Source",
    doorStatus: "Storage Door",
    targetRange: "Target Range",
    statusNormal: "Normal",
    statusWarning: "Warning",
    statusCritical: "Critical",
    statusLow: "Low Battery",
    backupReady: "LiFePO₄ Backup Ready",
    backupActive: "Battery Backup Active",
    pvActive: "Solar Generation Active",
    solarActive: "Solar Active",
    quickDemoBar: "Quick Judge Demonstration Actions",
    openFullDemoCenter: "Open Full Demo Center →",
    btnSimTempFluctuation: "Simulate Temp Fluctuation",
    btnSimLowBattery: "Simulate Low Battery (25%)",
    btnRestoreBattery: "Restore Battery",
    btnSimPowerFailure: "Simulate Power Failure",
    btnRestorePower: "Restore Power",
    btnSimMultipleIssues: "Simulate Multiple Issues",
    btnResetAll: "Reset All to Normal",
    monitorTitle: "Storage Environmental Monitor",
    monitorSubtitle: "Real-time environmental trend analysis for temperature and relative humidity inside unit CS-001.",
    storageTrends: "Storage Temperature & Humidity Trends",
    monitorMetricsTitle: "Environmental Statistics (Today)",
    alertCenterTitle: "Alert Center & Historical Log",
    alertCenterSubtitle: "Active alerts and historical event logs for environmental deviations, battery states, and power failures.",
    activeAlertsTitle: "Active System Alerts",
    alertHistoryTitle: "Complete Alert History Log",
    testAlertBtn: "Test Alert",
    clearAlertsBtn: "Clear All Alerts",
    myProduceTitle: "My Stored Produce",
    myProduceSubtitle: "Select stored vegetable to automatically set recommended cooling and humidity levels.",
    paramNoticeTitle: "Recommended / Demo Storage Parameters",
    paramNoticeText: "These setpoints represent standard agricultural storage targets for demonstration purposes. Clearly identified as simulation parameters.",
    cropTomato: "Tomato",
    cropCabbage: "Cabbage",
    cropBeans: "Beans",
    cropLeafy: "Leafy Vegetables",
    cropChilli: "Chilli",
    cropOther: "Other Horticultural Produce",
    targetTempLabel: "Recommended Temp",
    targetHumLabel: "Recommended Humidity",
    storedAmount: "Stored Volume",
    conditionSafe: "🟢 Storage Condition: Optimal",
    farmerStorageAdvice: "Farmer Storage Guidance",
    farmerStorageAdviceText: "The Peltier thermoelectric cooling unit automatically switches on when temperature rises 0.5°C above setpoint. Keep the door closed to conserve battery.",
    systemInfoTitle: "System Architecture & Hardware Telemetry",
    systemInfoSubtitle: "Hardware specifications and edge architecture designed for North Eastern rural farm clusters.",
    powerCoolingFlow: "Solar Power & Peltier Cooling Flow",
    powerCoolingFlowDesc: "Pure solid-state thermoelectric architecture utilizing Peltier cold plates (TEC1-12706) with heat sinks and brushless DC fans — zero compressors, zero chemical refrigerants.",
    sensorFlowTitle: "Sensor Telemetry & IoT Control Flow",
    judgeDemoTitle: "SIH 2026 Judge Demonstration Center",
    judgeDemoSubtitle: "Test real-world operational scenarios for the Solar-Powered Mini Cold Storage System.",
    demoBannerTitle: "Demonstration Objective for Evaluators",
    demoBannerText: "Demonstrate how our IoT edge unit (ESP32) detects environmental deviations, switches power sources, safeguards farmer produce, and communicates clear alerts without requiring complex technical knowledge.",
    interactiveScenarios: "Interactive Simulation Controls",
    btnNormalOperation: "NORMAL OPERATION",
    btnSimHighHumidity: "SIMULATE HIGH HUMIDITY",
    btnSimDoorOpen: "SIMULATE DOOR OPEN",
    flowWalkthroughTitle: "Recommended 2-Minute Presentation Sequence for Judges",
    step1Title: "Step 1: Baseline Health",
    step1Desc: "Click NORMAL OPERATION. Show OPTIMAL condition, 6.4°C temp, 84% humidity, and active solar generation.",
    step2Title: "Step 2: Temp Fluctuation",
    step2Desc: "Click SIMULATE TEMP FLUCTUATION. Temperature rises to 11.8°C, condition becomes CRITICAL, and alert appears.",
    step3Title: "Step 3: Low Battery & Backup",
    step3Desc: "Click SIMULATE LOW BATTERY (becomes 25%). Show red bar and alert. Click SIMULATE POWER FAILURE to show LiFePO₄ backup switch.",
    step4Title: "Step 4: Multiple Issues & Reset",
    step4Desc: "Click SIMULATE MULTIPLE ISSUES to stress-test. Then click RESET ALL to restore optimal baseline in seconds.",
    alertTempRiseTitle: "TEMPERATURE FLUCTUATION",
    alertTempRiseMsg: "Temperature is outside the recommended storage range.",
    alertTempRiseAction: "Peltier thermoelectric cooling is running at full capacity. Keep door sealed.",
    alertBatLowTitle: "LOW BATTERY",
    alertBatLowMsg: "Battery level has fallen below 30%.",
    alertBatLowAction: "Check the solar charging source or reduce unnecessary power usage.",
    alertPowerFailTitle: "POWER FAILURE",
    alertPowerFailMsg: "Main power is unavailable. Battery backup is active.",
    alertPowerFailAction: "Peltier cooling is running on battery backup. Monitor battery runtime.",
    alertHumHighTitle: "HIGH HUMIDITY",
    alertHumHighMsg: "Humidity is above the recommended storage condition.",
    alertHumHighAction: "Ensure proper ventilation and check internal cabinet condensation.",
    alertDoorOpenTitle: "DOOR OPEN",
    alertDoorOpenMsg: "Storage door is currently open.",
    alertDoorOpenAction: "Close the storage door to maintain stable conditions.",
    alertAllClearTitle: "ALL STORAGE CONDITIONS NORMAL",
    alertAllClearMsg: "Your produce is currently stored under suitable conditions.",
    alertAllClearAction: "System functioning normally with active solar charging.",
    optConditionOptimal: "🟢 OPTIMAL",
    optConditionAttention: "🟡 ATTENTION REQUIRED",
    optConditionCritical: "🔴 CRITICAL",
    navRemote: "Remote Control",
    remoteControlTitle: "ColdCare Remote Control",
    remoteControlSubtitle: "Agricultural IoT Telemetry & Thermoelectric Chamber Control Panel",
    systemStatusTitle: "Current System Status",
    sysStorageOnline: "ONLINE",
    sysStorageOffline: "OFFLINE",
    targetTemp: "Target Temperature",
    chamberFan: "Chamber Air Circulation Fan",
    chamberFanSpeed: "Chamber Fan Speed",
    hotSideTempTitle: "Hot-Side Temperature",
    heatDissipationFanTitle: "Heat Dissipation Fan",
    heatDissipationTitle: "Heat Dissipation",
    coolingIntensityTitle: "Cooling Intensity",
    controlModeTitle: "Control Mode",
    systemPowerTitle: "Master System Power",
    tempTimerTitle: "Temperature Timer",
    statusActive: "ACTIVE",
    statusInactive: "INACTIVE",
    statusStandby: "STANDBY",
    statusCharging: "Charging Active",
    coldSideTitle: "Cold Side — Chamber Cooling",
    coldSideDesc: "Thermoelectric cold side directly cools the insulated storage chamber to preserve vegetables.",
    hotSideTitle: "Hot Side — Heat Dissipation",
    hotSideDesc: "Thermoelectric hot side dissipates heat generated by the Peltier module through the heatsink and dissipation fan to the outside environment.",
    btnStartTimer: "Start Timer",
    btnPauseTimer: "Pause Timer",
    btnResumeTimer: "Resume Timer",
    btnStopTimer: "Stop Timer",
    btnSystemOn: "SYSTEM ON",
    btnSystemOff: "SYSTEM OFF",
    btnAutoMode: "AUTO MODE",
    btnManualMode: "MANUAL MODE",
    peltierExplainerTitle: "ℹ️ How Peltier Cooling Works",
    peltierExplainerText: "The Peltier module creates a cold side and a hot side. The cold side cools the storage chamber, while the hot side releases the generated heat through a heatsink and fan to the outside environment. We never blow hot air onto the vegetables.",
    alertHotSideRiseTitle: "HOT-SIDE TEMPERATURE ELEVATED",
    alertHotSideRiseMsg: "Hot-side heatsink temperature elevated. Heat dissipation fan boosted to HIGH.",
    alertHotSideRiseAction: "Dissipating excess Peltier heat to outside environment. Chamber cooling remains safe.",
    alertTimerDoneTitle: "TEMPERATURE TIMER COMPLETED",
    alertTimerDoneMsg: "Programmed temperature hold duration has concluded successfully.",
    alertTimerDoneAction: "System returning to automatic storage temperature regulation.",
    alertCoolingOffTitle: "PELTIER COOLING OFF",
    alertCoolingOffMsg: "Peltier thermoelectric cooling has been manually powered off.",
    alertCoolingOffAction: "Switch cooling ON if required to maintain target vegetable preservation temperature.",
    alertChamberFanOffTitle: "CHAMBER FAN OFF",
    alertChamberFanOffMsg: "Chamber air circulation fan is currently off.",
    alertChamberFanOffAction: "Enable fan to ensure uniform cold air distribution inside the storage chamber.",
    alertSystemOffTitle: "STORAGE SYSTEM POWERED OFF",
    alertSystemOffMsg: "Cold storage system powered OFF by farmer override. Produce cooling is currently paused in Standby mode.",
    alertSystemOffAction: "Switch MASTER SYSTEM POWER ON when ready to resume active storage cooling."
  },

  // 2. Assamese (অসমীয়া)
  as: {
    navDashboard: "ডেশব’ৰ্ড",
    navMonitor: "ভঁৰাল নিৰীক্ষণ",
    navAlerts: "সতৰ্কবাণী",
    navProduce: "শস্য নিৰ্বাচন",
    navSystem: "ব্যৱস্থা",
    navDemo: "ডেমি কেন্দ্ৰ",
    welcomeTitle: "নমস্কাৰ, কৃষক বান্ধৱ 👋",
    unitLabel: "শীতল ভঁৰাল একক",
    lastUpdatedJustNow: "লাইভ টেলিমিত্ৰি সক্ৰিয়",
    liveSimulationRunning: "বাস্তৱ-সময় অনুকৰণ চলি আছে",
    heroSafeTitle: "আপোনাৰ শাক-পাচলি বৰ্তমান সুৰক্ষিত অৱস্থাত সংৰক্ষিত হৈ আছে।",
    heroSafeSubtitle: "উষ্ণতা আৰু আৰ্দ্ৰতা নিৰ্ধাৰিত মানত আছে। পেল্টিয়েৰ থাৰ্মো-ইলেক্ট্ৰিক কুলিং সুস্থিৰ অৱস্থাত আছে।",
    heroAttentionTitle: "ভঁৰাললৈ মনোযোগ দিয়ক",
    heroAttentionSubtitle: "ভঁৰালৰ মানত কিছু তাৰতম্য দেখা গৈছে। বেটাৰী বা দুৱাৰ পৰীক্ষা কৰক।",
    heroCriticalTitle: "জৰুৰী সতৰ্কবাণী!",
    heroCriticalSubtitle: "উষ্ণতা বিপদজনকভাৱে বৃদ্ধি পাইছে বা বিদ্যুৎ বিচ্ছিন্ন হৈছে।",
    liveStorageMetrics: "প্ৰত্যক্ষ চেন্সৰ নিৰীক্ষণ",
    simValuesNotice: "SIH প্ৰদৰ্শনৰ বাবে অনুকৰিত মান",
    temperature: "উষ্ণতা",
    humidity: "আৰ্দ্ৰতা",
    batteryLevel: "বেটাৰী স্তৰ",
    solarPower: "সৌৰ শক্তি",
    peltierCooling: "পেল্টিয়েৰ কুলিং",
    powerSource: "বিদ্যুৎ উৎস",
    doorStatus: "ভঁৰালৰ দুৱাৰ",
    targetRange: "লক্ষ্য পৰিসীমা",
    statusNormal: "স্বাভাৱিক",
    statusWarning: "সতৰ্কতা",
    statusCritical: "বিপদজনক",
    statusLow: "কম বেটাৰী",
    backupReady: "LiFePO₄ বেকআপ সাজু",
    backupActive: "বেটাৰী বেকআপ সক্ৰিয়",
    pvActive: "সৌৰ শক্তি সক্ৰিয়",
    solarActive: "সৌৰ সক্ৰিয়",
    quickDemoBar: "দ্ৰুত বিচাৰক কাৰ্যপ্ৰণালী",
    openFullDemoCenter: "সম্পূৰ্ণ ডেমি কেন্দ্ৰ খোলক →",
    btnSimTempFluctuation: "উষ্ণতা বৃদ্ধি পৰীক্ষা",
    btnSimLowBattery: "কম বেটাৰী পৰীক্ষা (২৫%)",
    btnRestoreBattery: "বেটাৰী পুনৰুদ্ধাৰ (৭৮%)",
    btnSimPowerFailure: "বিদ্যুৎ বিফলতা পৰীক্ষা",
    btnRestorePower: "বিদ্যুৎ পুনৰুদ্ধাৰ",
    btnSimMultipleIssues: "একাধিক সমস্যা পৰীক্ষা",
    btnResetAll: "সকলো স্বাভাৱিক কৰক",
    monitorTitle: "ভঁৰাল পৰিৱেশ নিৰীক্ষণ",
    monitorSubtitle: "CS-001 এককৰ ভিতৰত উষ্ণতা আৰু আৰ্দ্ৰতাৰ বাস্তৱ-সময় লেখচিত্ৰ।",
    storageTrends: "উষ্ণতা আৰু আৰ্দ্ৰতাৰ গতিধাৰা",
    monitorMetricsTitle: "আজিৰ পৰিৱেশ পৰিসংখ্যা",
    alertCenterTitle: "সতৰ্কবাণী কেন্দ্ৰ আৰু ইতিহাস",
    alertCenterSubtitle: "উষ্ণতা, বেটাৰী আৰু বিদ্যুৎ বিফলতাৰ সক্ৰিয় আৰু পুৰণি তথ্য।",
    activeAlertsTitle: "সক্ৰিয় সতৰ্কবাণীসমূহ",
    alertHistoryTitle: "সম্পূৰ্ণ সতৰ্কবাণী ইতিহাস",
    testAlertBtn: "পৰীক্ষামূলক সতৰ্কবাণী",
    clearAlertsBtn: "সকলো মচক",
    myProduceTitle: "মোৰ সংৰক্ষিত শস্য",
    myProduceSubtitle: "সঠিক উষ্ণতা আৰু আৰ্দ্ৰতা নিৰ্ধাৰণ কৰিবলৈ শাক-পাচলি বাছক।",
    paramNoticeTitle: "পৰামৰ্শমূলক সংৰক্ষণ মানদণ্ড",
    paramNoticeText: "এই মানসমূহ প্ৰদৰ্শনৰ সুবিধাৰ্থে ব্যৱহৃত প্ৰামাণিক কৃষি সংৰক্ষণ লক্ষ্য।",
    cropTomato: "বিলাহী (Tomato)",
    cropCabbage: "বন্ধাকবি (Cabbage)",
    cropBeans: "উৰহী (Beans)",
    cropLeafy: "শাক-পাচলি (Leafy Veg)",
    cropChilli: "জলকীয়া (Chilli)",
    cropOther: "অন্যান্য শস্য (Other)",
    targetTempLabel: "পৰামৰ্শিত উষ্ণতা",
    targetHumLabel: "পৰামৰ্শিত আৰ্দ্ৰতা",
    storedAmount: "সংৰক্ষিত পৰিমাণ",
    conditionSafe: "🟢 সংৰক্ষণ অৱস্থা: উত্তম",
    farmerStorageAdvice: "কৃষকৰ বাবে দিহা",
    farmerStorageAdviceText: "উষ্ণতা বৃদ্ধি পালে পেল্টিয়েৰ কুলিং নিজে চালু হ'ব। বেটাৰী বচাবলৈ দুৱাৰ বন্ধ ৰাখক।",
    systemInfoTitle: "ব্যৱস্থা স্থাপত্য আৰু হাৰ্ডৱেৰ",
    systemInfoSubtitle: "উত্তৰ-পূৰ্বাঞ্চলৰ গ্ৰাম্য খেতিয়কৰ বাবে বিশেষভাৱে নিৰ্মিত।",
    powerCoolingFlow: "সৌৰ শক্তি আৰু পেল্টিয়েৰ কুলিং প্ৰক্ৰিয়া",
    powerCoolingFlowDesc: "কম্প্ৰেছাৰৰ সলনি পেল্টিয়েৰ থাৰ্মো-ইলেক্ট্ৰিক মডিউল ব্যৱহৃত।",
    sensorFlowTitle: "চেন্চৰ আৰু IoT নিয়ন্ত্ৰণ প্ৰৱাহ",
    judgeDemoTitle: "SIH 2026 বিচাৰক ডেমি কেন্দ্ৰ",
    judgeDemoSubtitle: "বাস্তৱ পৰিস্থিতিৰ অনুকৰণ পৰীক্ষা কৰক।",
    demoBannerTitle: "বিচাৰকৰ বাবে প্ৰদৰ্শন লক্ষ্য",
    demoBannerText: "আমাৰ IoT ব্যৱস্থাই কেনেদৰে বিদ্যুৎ বিফলতা ধৰা পেলায় আৰু শস্য সুৰক্ষিত ৰাখে সেয়া প্ৰদৰ্শন কৰক।",
    interactiveScenarios: "অনুকৰণ নিয়ন্ত্ৰণ",
    btnNormalOperation: "স্বাভাৱিক কাৰ্যক্ষমতা",
    btnSimHighHumidity: "উচ্চ আৰ্দ্ৰতা পৰীক্ষা",
    btnSimDoorOpen: "দুৱাৰ খোলা পৰীক্ষা",
    flowWalkthroughTitle: "বিচাৰকৰ বাবে ২ মিনিটৰ প্ৰদৰ্শন ক্ৰম",
    step1Title: "পদক্ষেপ ১: স্বাভাৱিক অৱস্থা",
    step1Desc: "উত্তম সংৰক্ষণ অৱস্থা, ৬.৪°C উষ্ণতা আৰু সৌৰ শক্তি দেখুৱাওক।",
    step2Title: "পদক্ষেপ ২: উষ্ণতা বৃদ্ধি",
    step2Desc: "উষ্ণতা বৃদ্ধি পৰীক্ষা টিপক আৰু ১১.৮°C লৈ উঠা চাওক।",
    step3Title: "পদক্ষেপ ৩: কম বেটাৰী",
    step3Desc: "বেটাৰী ২৫% লৈ নমাই সতৰ্কবাণী আৰু বেকআপ দেখুৱাওক।",
    step4Title: "পদক্ষেপ ৪: একাধিক সমস্যা",
    step4Desc: "সকলো সমস্যা পৰীক্ষা কৰি পুনৰ স্বাভাৱিক কৰক।",
    alertTempRiseTitle: "উষ্ণতা বৃদ্ধি পাইছে",
    alertTempRiseMsg: "ভঁৰালৰ উষ্ণতা নিৰ্ধাৰিত মাত্ৰাতকৈ বাহিৰত।",
    alertTempRiseAction: "পেল্টিয়েৰ কুলাৰ পূৰ্ণগতিত চলিছে। দুৱাৰ বন্ধ ৰাখক।",
    alertBatLowTitle: "কম বেটাৰী সতৰ্কবাণী",
    alertBatLowMsg: "বেটাৰীৰ মাত্ৰা ৩০% ৰ তললৈ নামিছে।",
    alertBatLowAction: "সৌৰ চাৰ্জিং পৰীক্ষা কৰক বা অতিৰিক্ত বিদ্যুৎ ব্যৱহাৰ কমাওক।",
    alertPowerFailTitle: "বিদ্যুৎ বিফলতা",
    alertPowerFailMsg: "মূল বিদ্যুৎ বিচ্ছিন্ন হৈছে। বেটাৰী বেকআপ সক্ৰিয়।",
    alertPowerFailAction: "বেটাৰী বেকআপত শীতলীকৰণ চলি আছে। সময় নিৰীক্ষণ কৰক।",
    alertHumHighTitle: "উচ্চ আৰ্দ্ৰতা",
    alertHumHighMsg: "ভঁৰালৰ আৰ্দ্ৰতা অনুমোদিত সীমাতকৈ বৃদ্ধি পাইছে।",
    alertHumHighAction: "ভেন্টিলেচন পৰীক্ষা কৰক।",
    alertDoorOpenTitle: "দুৱাৰ খোলা আছে",
    alertDoorOpenMsg: "ভঁৰালৰ দুৱাৰখন বৰ্তমান খোলা অৱস্থাত আছে।",
    alertDoorOpenAction: "শীতলীকৰণ বচাই ৰাখিবলৈ দুৱাৰখন বন্ধ কৰক।",
    alertAllClearTitle: "সকলো অৱস্থা স্বাভাৱিক",
    alertAllClearMsg: "শাক-পাচলি উপযুক্ত অৱস্থাত সংৰক্ষিত আছে।",
    alertAllClearAction: "সৌৰ শক্তিয়ে সুকলমে কাম কৰি আছে।",
    optConditionOptimal: "🟢 উত্তম (OPTIMAL)",
    optConditionAttention: "🟡 দৃষ্টি আকৰ্ষণ (ATTENTION)",
    optConditionCritical: "🔴 বিপদজনক (CRITICAL)"
  },

  // 3. Bengali (বাংলা)
  bn: {
    navDashboard: "ড্যাশবোর্ড",
    navMonitor: "স্টোরেজ মনিটর",
    navAlerts: "সতর্কবার্তা",
    navProduce: "ফসল নির্বাচন",
    navSystem: "সিস্টেম",
    navDemo: "ডেমো সেন্টার",
    welcomeTitle: "সুপ্রভাত, কৃষক বন্ধু 👋",
    unitLabel: "কোল্ড স্টোরেজ ইউনিট",
    lastUpdatedJustNow: "লাইভ টেলিমেট্রি সক্রিয়",
    liveSimulationRunning: "রিয়েল-টাইম সিমুলেশন সক্রিয়",
    heroSafeTitle: "আপনার ফসল উপযুক্ত পরিবেশে সংরক্ষিত রয়েছে।",
    heroSafeSubtitle: "তাপমাত্রা ও আর্দ্রতা নির্ধারিত মাত্রায় রয়েছে। পেল্টিয়ার থার্মোইলেকট্রিক কুলিং কার্যকর রয়েছে।",
    heroAttentionTitle: "স্টোরেজে সতর্কতা প্রয়োজন",
    heroAttentionSubtitle: "স্টোরেজের কিছু মানে পরিবর্তন দেখা দিয়েছে। ব্যাটারি বা দরজা পরীক্ষা করুন।",
    heroCriticalTitle: "জরুরি বিপদ সংকেত!",
    heroCriticalSubtitle: "তাপমাত্রা বিপদসীমা অতিক্রম করেছে বা বিদ্যুৎ সংযোগ বন্ধ হয়েছে।",
    liveStorageMetrics: "সরাসরি সেন্সর পর্যবেক্ষণ",
    simValuesNotice: "SIH প্রদর্শনের জন্য সিমুলেটেড ডেটা",
    temperature: "তাপমাত্রা",
    humidity: "আর্দ্রতা",
    batteryLevel: "ব্যাটারি স্তর",
    solarPower: "সৌর শক্তি",
    peltierCooling: "পেল্টিয়ার কুলিং",
    powerSource: "বিদ্যুৎ উৎস",
    doorStatus: "স্টোরেজের দরজা",
    targetRange: "লক্ষ্য মাত্রা",
    statusNormal: "স্বাভাবিক",
    statusWarning: "সতর্কতা",
    statusCritical: "সংকটজনক",
    statusLow: "কম ব্যাটারি",
    backupReady: "LiFePO₄ ব্যাকআপ প্রস্তুত",
    backupActive: "ব্যাটারি ব্যাকআপ সক্রিয়",
    pvActive: "সৌর বিদ্যুৎ উৎপাদন চালু",
    solarActive: "সৌর সক্রিয়",
    quickDemoBar: "দ্রুত বিচারক টেস্ট",
    openFullDemoCenter: "সম্পূর্ণ ডেমো সেন্টার দেখুন →",
    btnSimTempFluctuation: "তাপমাত্রা বৃদ্ধি টেস্ট",
    btnSimLowBattery: "কম ব্যাটারি টেস্ট (২৫%)",
    btnRestoreBattery: "ব্যাটারি রিস্টোর (৭৮%)",
    btnSimPowerFailure: "বিদ্যুৎ বিভ্রাট টেস্ট",
    btnRestorePower: "বিদ্যুৎ পুনরুদ্ধার",
    btnSimMultipleIssues: "একাধিক সমস্যা টেস্ট",
    btnResetAll: "সব স্বাভাবিক করুন",
    monitorTitle: "স্টোরেজ পরিবেশ মনিটর",
    monitorSubtitle: "CS-001 ইউনিটের ভেতরের তাপমাত্রা ও আর্দ্রতার রিয়েল-টাইম চার্ট।",
    storageTrends: "তাপমাত্রা ও আর্দ্রতার গতিধারা",
    monitorMetricsTitle: "আজকের পরিবেশ পরিসংখ্যান",
    alertCenterTitle: "সতর্কবার্তা কেন্দ্র ও ইতিহাস",
    alertCenterSubtitle: "তাপমাত্রা, কম ব্যাটারি ও বিদ্যুৎ বিভ্রাটের ইতিহাস।",
    activeAlertsTitle: "সক্রিয় সতর্কবার্তা",
    alertHistoryTitle: "সম্পূর্ণ সতর্কবার্তা লগ",
    testAlertBtn: "টেস্ট অ্যালার্ট",
    clearAlertsBtn: "সব মুছুন",
    myProduceTitle: "আমার সংরক্ষিত ফসল",
    myProduceSubtitle: "সঠিক তাপমাত্রা ও আর্দ্রতা সেট করতে সংরক্ষিত ফসল নির্বাচন করুন।",
    paramNoticeTitle: "সুপারিশকৃত সংস্থাপন মান",
    paramNoticeText: "এই মানগুলি প্রদর্শনের সুবিধার্থে আদর্শ কৃষি স্টোরেজ সেটপয়েন্ট।",
    cropTomato: "টমেটো (Tomato)",
    cropCabbage: "বাঁধাকপি (Cabbage)",
    cropBeans: "শিম (Beans)",
    cropLeafy: "শাকসবজি (Leafy Veg)",
    cropChilli: "কাঁচা লঙ্কা (Chilli)",
    cropOther: "অন্যান্য ফসল (Other)",
    targetTempLabel: "প্রস্তাবিত তাপমাত্রা",
    targetHumLabel: "প্রস্তাবিত আর্দ্রতা",
    storedAmount: "সংরক্ষিত পরিমাণ",
    conditionSafe: "🟢 স্টোরেজ অবস্থা: উৎকৃষ্ট",
    farmerStorageAdvice: "কৃষকের জন্য পরামর্শ",
    farmerStorageAdviceText: "তাপমাত্রা ০.৫°C বাড়লে পেল্টিয়ার কুলিং স্বয়ংক্রিয়ভাবে চালু হয়। দরজা বন্ধ রাখুন।",
    systemInfoTitle: "সিস্টেম আর্কিটেকচার ও হার্ডওয়্যার",
    systemInfoSubtitle: "উত্তর-পূর্ব ভারতের গ্রামীণ কৃষকদের জন্য বিশেষভাবে নকশা করা।",
    powerCoolingFlow: "সৌর বিদ্যুৎ ও পেল্টিয়ার কুলিং প্রবাহ",
    powerCoolingFlowDesc: "কম্প্রেসারের বদলে টেকসই থার্মোইলেকট্রিক পেল্টিয়ার মডিউল ব্যবহৃত হয়েছে।",
    sensorFlowTitle: "সেন্সর ও IoT নিয়ন্ত্রণ প্রবাহ",
    judgeDemoTitle: "SIH 2026 বিচারক ডেমো সেন্টার",
    judgeDemoSubtitle: "বাস্তব পরিস্থিতির সিমুলেশন টেস্ট করুন।",
    demoBannerTitle: "বিচারকদের জন্য প্রদর্শনের উদ্দেশ্য",
    demoBannerText: "আমাদের IoT সিস্টেম কীভাবে তাপমাত্রা ও বিদ্যুৎ বিভ্রাট শনাক্ত করে ফসল রক্ষা করে তা পর্যবেক্ষণ করুন।",
    interactiveScenarios: "ইন্টারেক্টিভ সিমুলেশন কন্ট্রোল",
    btnNormalOperation: "স্বাভাবিক কার্যপ্রণালী",
    btnSimHighHumidity: "উচ্চ আর্দ্রতা সিমুলেশন",
    btnSimDoorOpen: "দরজা খোলা সিমুলেশন",
    flowWalkthroughTitle: "বিচারকদের জন্য ২ মিনিটের ডেমো সিকোয়েন্স",
    step1Title: "ধাপ ১: স্বাভাবিক অবস্থা",
    step1Desc: "উত্তম স্টোরেজ অবস্থা, ৬.৪°C তাপমাত্রা এবং সৌর শক্তি প্রদর্শন করুন।",
    step2Title: "ধাপ ২: তাপমাত্রা বৃদ্ধি",
    step2Desc: "তাপমাত্রা বৃদ্ধি টেস্ট করে লাল অ্যালার্ট ও ১১.৮°C তাপমাত্রা দেখুন।",
    step3Title: "ধাপ ৩: কম ব্যাটারি ও ব্যাকআপ",
    step3Desc: "ব্যাটারি ২৫% (<৩০%) টেস্ট করুন এবং বিদ্যুৎ বিভ্রাটে ব্যাটারি ব্যাকআপ সক্রিয় হওয়া দেখান।",
    step4Title: "ধাপ ৪: সব সমস্যা ও রিসেট",
    step4Desc: "সব সমস্যা টেস্ট করুন এবং এক ক্লিকে সব স্বাভাবিক করুন।",
    alertTempRiseTitle: "তাপমাত্রা বৃদ্ধি",
    alertTempRiseMsg: "স্টোরেজের তাপমাত্রা নির্ধারিত সীমার বাইরে চলে গেছে।",
    alertTempRiseAction: "পেল্টিয়ার কুলার পূর্ণ শক্তিতে চলছে। দরজা বন্ধ রাখুন।",
    alertBatLowTitle: "কম ব্যাটারি",
    alertBatLowMsg: "ব্যাটারি লেভেল ৩০% এর নিচে নেমে গেছে।",
    alertBatLowAction: "সৌর চার্জিং পরীক্ষা করুন বা অপ্রয়োজনীয় লোড কমান।",
    alertPowerFailTitle: "বিদ্যুৎ বিভ্রাট",
    alertPowerFailMsg: "মূল বিদ্যুৎ অনুপলব্ধ। ব্যাটারি ব্যাকআপ সক্রিয় হয়েছে।",
    alertPowerFailAction: "ব্যাটারি ব্যাকআপে কুলিং চলছে। ব্যাটারি লাইফ পর্যবেক্ষণ করুন।",
    alertHumHighTitle: "উচ্চ আর্দ্রতা",
    alertHumHighMsg: "স্টোরেজের আর্দ্রতা নিরাপদ সীমার বাইরে চলে গেছে।",
    alertHumHighAction: "বায়ু চলাচল নিশ্চিত করুন।",
    alertDoorOpenTitle: "দরজা খোলা",
    alertDoorOpenMsg: "স্টোরেজের দরজা বর্তমানে খোলা রয়েছে।",
    alertDoorOpenAction: "কুলিং ধরে রাখতে দরজা অবিলম্বে বন্ধ করুন।",
    alertAllClearTitle: "সব অবস্থা স্বাভাবিক",
    alertAllClearMsg: "ফসল উপযুক্ত পরিবেশে নিরাপদে সংরক্ষিত আছে।",
    alertAllClearAction: "সৌর চার্জিং স্বাভাবিকভাবে চলছে।",
    optConditionOptimal: "🟢 উৎকৃষ্ট (OPTIMAL)",
    optConditionAttention: "🟡 সতর্কতা প্রয়োজন (ATTENTION)",
    optConditionCritical: "🔴 সংকটজনক (CRITICAL)"
  },

  // 4. Bodo (बड़ो)
  brx: {
    navDashboard: "डेशब'र्ड",
    navMonitor: "दोनथुमग्रा नायबिजिर",
    navAlerts: "हुसियार खौरां",
    navProduce: "मैगं-थाइगं",
    navSystem: "सिस्टेम",
    navDemo: "देम' केन्द्र",
    welcomeTitle: "गोजोन फुं, आबादारि 👋",
    unitLabel: "दोनथुमग्रा इउनिट",
    lastUpdatedJustNow: "लाइभ सोलिबाय दं",
    liveSimulationRunning: "थोंजों सिमुलेसन सोलिबाय दं",
    heroSafeTitle: "नोंथांनि मैगं-थाइगंआ मोजां थासाराव दोनथुमजाबाय दं।",
    heroSafeSubtitle: "दुंथाय आरो सिथायनाया थिक दं। पेल्टियार कुलिंगआ मोजां खामानि मावबाय दं।",
    heroAttentionTitle: "दोनथुमग्रायाव गोसो होनो नांगौ",
    heroAttentionSubtitle: "दोनथुमग्रायाव इसे सोलायनाय नुदों। बेटारि एबा दरजा नाय।",
    heroCriticalTitle: "गोगोम खौरां!",
    heroCriticalSubtitle: "दुंथाया खैफोदसिम गाखोबाय एबा मोब्लिब थाबाय।",
    liveStorageMetrics: "लाइभ सेन्सर खौरां",
    simValuesNotice: "SIH दिन्थिनायनि थाखाय सिमुलेट खालामनाय",
    temperature: "दुंथाय",
    humidity: "सिथायनाय",
    batteryLevel: "बेटारि थाखो",
    solarPower: "सान-गोहो",
    peltierCooling: "पेल्टियार कुलिंग",
    powerSource: "मोब्लिब फुंखा",
    doorStatus: "दोनथुमग्रा दरजा",
    targetRange: "थांखि सिमा",
    statusNormal: "सरासनस्रा",
    statusWarning: "हुसियार",
    statusCritical: "खैफोदगोनां",
    statusLow: "खम बेटारि",
    backupReady: "LiFePO₄ बेकआप थियारि",
    backupActive: "बेटारि बेकआप सोलिबाय",
    pvActive: "सान-गोहो सोलिबाय दं",
    solarActive: "सान-गोहो दं",
    quickDemoBar: "थाब आनजाद खालामनाय",
    openFullDemoCenter: "गासै देम' केन्द्र नाय →",
    btnSimTempFluctuation: "दुंथाय बांनाय आनजाद",
    btnSimLowBattery: "खम बेटारि आनजाद (25%)",
    btnRestoreBattery: "बेटारि लाबोफिन (78%)",
    btnSimPowerFailure: "मोब्लिब थांनाय आनजाद",
    btnRestorePower: "मोब्लिब लाबोफिन",
    btnSimMultipleIssues: "गोबां जेंना आनजाद",
    btnResetAll: "सरासनस्रा खालामफिन",
    monitorTitle: "दोनथुमग्रा आबहावा नायबिजिर",
    monitorSubtitle: "CS-001 नि दुंथाय आरो सिथायनायनि थोंजों सिन।",
    storageTrends: "दुंथाय आरो सिथायनायनि बोहैथि",
    monitorMetricsTitle: "दिनैनि आबहावा",
    alertCenterTitle: "हुसियार खौरां केन्द्र",
    alertCenterSubtitle: "दुंथाय, बेटारि आरो मोब्लिब थांनायनि खौरां।",
    activeAlertsTitle: "सोलिबाय थानाय हुसियार खौरां",
    alertHistoryTitle: "गासै खौरांनि फारिलाइ",
    testAlertBtn: "आनजाद खौरां",
    clearAlertsBtn: "खौरां खोमोर",
    myProduceTitle: "दोनथुमनाय मैगं-थाइगं",
    myProduceSubtitle: "मोजां दुंथाय दोननो मैगं-थाइगं सायख’।",
    paramNoticeTitle: "सुबुरुन होनाय दोनथुमग्रा सिमा",
    paramNoticeText: "बेखौ देम' दिन्थिनायनि थाखाय बाहायनाय जादों।",
    cropTomato: "फाम्लौ (Tomato)",
    cropCabbage: "बन्दाखबि (Cabbage)",
    cropBeans: "सिम (Beans)",
    cropLeafy: "लाइफां मैगं (Leafy Veg)",
    cropChilli: "फिसामिख्रि (Chilli)",
    cropOther: "गुबुन मैगं (Other)",
    targetTempLabel: "सुबुरुन दुंथाय",
    targetHumLabel: "सुबुरुन सिथायनाय",
    storedAmount: "दोनथुमनाय बिबां",
    conditionSafe: "🟢 दोनथुमग्रा थासारि: मोजां",
    farmerStorageAdvice: "आबादारिनि थाखाय सुबुरुन",
    farmerStorageAdviceText: "दुंथाया 0.5°C बांब्ला पेल्टियारा गाव गावनो सोलिगोन। दरजा बन्द दोन।",
    systemInfoTitle: "सिस्टेम बिथा आरो सा-सान्जा प्रसंग",
    systemInfoSubtitle: "सा-सान्जा भारतनि हाजोआरि आबादारिफोरनि थाखाय।",
    powerCoolingFlow: "सान-गोहो आरो पेल्टियार कुलिंग लामा",
    powerCoolingFlowDesc: "कंप्रेसरनि सोलाय पेल्टियार मड्यूल बाहायनाय जादों।",
    sensorFlowTitle: "सेन्सर आरो IoT सामलायनाय",
    judgeDemoTitle: "SIH 2026 बिजिरग्रा देम' केन्द्र",
    judgeDemoSubtitle: "थोंजों सिमुलेसन आनजाद खालाम।",
    demoBannerTitle: "बिजिरग्रानि थाखाय थांखि",
    demoBannerText: "जोंनि IoT सिस्टेमा माबोरै मैगं-थाइगंफोरखौ रैखा खालामो बेखौ नाय।",
    interactiveScenarios: "सिमुलेसन सामलायनाय",
    btnNormalOperation: "सरासनस्रा सोलिनाय",
    btnSimHighHumidity: "बांद्राय सिथायनाय आनजाद",
    btnSimDoorOpen: "दरजा खेवनाय आनजाद",
    flowWalkthroughTitle: "2 मिनिटनि दिन्थिनाय लामा",
    step1Title: "थाखो 1: मोजां थासारि",
    step1Desc: "सरासनस्रा सोलिनाय थु। 6.4°C दुंथाय दिन्थि।",
    step2Title: "थाखो 2: दुंथाय बांनाय",
    step2Desc: "दुंथाय बांनाय आनजाद थु आरो 11.8°C सिन्दो नाय।",
    step3Title: "थाखो 3: खम बेटारि",
    step3Desc: "बेटारि 25% दिन्थि आरो बेकआप सोलिनाय दिन्थि।",
    step4Title: "थाखो 4: गासै जेंना",
    step4Desc: "गोबां जेंना आनजाद थु आरो सरासनस्रा खालामफिन।",
    alertTempRiseTitle: "दुंथाय बांदों",
    alertTempRiseMsg: "दोनथुमग्रायाव दुंथाया मोजां सिमानि सायाव थांदों।",
    alertTempRiseAction: "पेल्टियार कुलारा सोलिबाय दं। दरजा बन्द खालाम।",
    alertBatLowTitle: "खम बेटारि",
    alertBatLowMsg: "बेटारि लेभेला 30% नि गाहायाव थांदों।",
    alertBatLowAction: "सान-गोहो सारजिं नाय एबा गोहो बाहायनाय खमाय।",
    alertPowerFailTitle: "मोब्लिब थाबाय",
    alertPowerFailMsg: "गुबै मोब्लिब गैया। बेटारि बेकआप सोलिबाय।",
    alertPowerFailAction: "बेटारि बेकआपजों कुलिंग सोलिबाय दं।",
    alertHumHighTitle: "बांद्राय सिथायनाय",
    alertHumHighMsg: "सिथायनाया मोजां सिमानि सायाव थांदों।",
    alertHumHighAction: "बार हाबनाय-ओंखारनाय नाय।",
    alertDoorOpenTitle: "दरजा खेवनाय",
    alertDoorOpenMsg: "दोनथुमग्रा दरजाया खेवनानै दं।",
    alertDoorOpenAction: "अननानै दोनथुमग्रा दरजाखौ बन्द खालाम।",
    alertAllClearTitle: "गासैबो मोजां",
    alertAllClearMsg: "मैगं-थाइगंआ मोजां थासाराव दोनथुमजाबाय दं।",
    alertAllClearAction: "सिस्टेमा सरासनस्रा सोलिबाय दं।",
    optConditionOptimal: "🟢 मोजां (OPTIMAL)",
    optConditionAttention: "🟡 गोसो हो (ATTENTION)",
    optConditionCritical: "🔴 खैफोद (CRITICAL)"
  },

  // 5. Meitei / Manipuri (মৈতৈলোন্)
  mni: {
    navDashboard: "ড্যাশবোর্ড",
    navMonitor: "ষ্টোরেজ য়েংশিনবা",
    navAlerts: "চেকশিনৱা",
    navProduce: "মহৈ-মরোং",
    navSystem: "সিষ্টেম",
    navDemo: "ডেমো সেন্তর",
    welcomeTitle: "য়াইফরে লৌমী ইবুংঙো 👋",
    unitLabel: "কোল্ড ষ্টোরেজ য়ুনিট",
    lastUpdatedJustNow: "লাইভ তেলিমিত্রি চত্থরি",
    liveSimulationRunning: "অশেংবা মতমগী সিমুলেসন চত্থরি",
    heroSafeTitle: "নহাক্কী মহৈ-মরোংশিং চপ চাবা ফিভমদা থম্লি।",
    heroSafeSubtitle: "অইং-অশা অমসুং অহোৎপা চপ চানা লৈরে। পেল্টিয়ার থার্মোইলেকট্রিক কুলিংনা তুং কোইনা থম্লি।",
    heroAttentionTitle: "ষ্টোরেজদা মিৎয়েং থম্বা তঙাইফদে",
    heroAttentionSubtitle: "ষ্টোরেজগী ফিভমদা খরা খেৎনবা থোক্লে। বেত্তরি নত্রগা থোং য়েংশিনবীয়ু।",
    heroCriticalTitle: "খুদোংথীবা সতৰ্কবাণী!",
    heroCriticalSubtitle: "অইং-অশাগী চাং ৱাংখৎলে নত্রগা মৈ কক্লে।",
    liveStorageMetrics: "লাইভ সেন্সর পাউদম",
    simValuesNotice: "SIH উৎনবগীদমক সিমুলেট তৌবা ভেল্যুশিং",
    temperature: "অইং-অশা",
    humidity: "অহোৎপা",
    batteryLevel: "বেত্তরি চাং",
    solarPower: "নুমিৎ শক্তি",
    peltierCooling: "পেল্টিয়ার কুলিং",
    powerSource: "মৈগী হৌরকফম",
    doorStatus: "ষ্টোরেজ থোং",
    targetRange: "পান্দম চাং",
    statusNormal: "স্বাভাবিক",
    statusWarning: "চেকশিনবা",
    statusCritical: "খুদোংথীবা",
    statusLow: "হন্থবা বেত্তরি",
    backupReady: "LiFePO₄ বেকঅপ শেমদুনা লৈরে",
    backupActive: "বেত্তরি বেকঅপ চত্থরি",
    pvActive: "নুমিৎ শক্তি সক্ৰিয়",
    solarActive: "সোলর সক্ৰিয়",
    quickDemoBar: "খুদক্তা জাজকী খোংথাংশিং",
    openFullDemoCenter: "অপুনবা ডেমো সেন্তর হাংদোকউ →",
    btnSimTempFluctuation: "অইং-অশা ৱাংখৎপা য়েংবা",
    btnSimLowBattery: "বেত্তরি হন্থবা য়েংবা (25%)",
    btnRestoreBattery: "বেত্তরি হল্লকপা (78%)",
    btnSimPowerFailure: "মৈ ককপা য়েংবা",
    btnRestorePower: "মৈ অমুক হল্লকপা",
    btnSimMultipleIssues: "খুদোংথীবা কয়ামরুম য়েংবা",
    btnResetAll: "নোর্মেলে ওন্থোকপা",
    monitorTitle: "ষ্টোরেজ অইং-অশা য়েংশিনবা",
    monitorSubtitle: "CS-001 য়ুনিট মনুংগী অইং-অশা অমসুং অহোৎপগী লাইভ চার্ট।",
    storageTrends: "অইং-অশা অমসুং অহোৎপগী চাং",
    monitorMetricsTitle: "ঙসিগী ফিভমগী মরিক চুম্বা",
    alertCenterTitle: "চেকশিনৱা সেন্তর অমসুং পুৱারী",
    alertCenterSubtitle: "অইং-অশা, বেত্তরি অমসুং মৈ ককপগী লাইভ চেকশিনৱা।",
    activeAlertsTitle: "হৌজিক লৈরিবা চেকশিনৱাশিং",
    alertHistoryTitle: "চেকশিনৱাগী পুৱারী",
    testAlertBtn: "তেষ্ট এলার্ট",
    clearAlertsBtn: "পুম্নমক মুত্থৎপু",
    myProduceTitle: "ঐহাক্কী মহৈ-মরোং",
    myProduceSubtitle: "চপ চাবা অইং-অশা থম্নবা মহৈ-মরোং খনবীয়ু।",
    paramNoticeTitle: "পাউতাক পীরবা ষ্টোরেজ সেটপোইন্ট",
    paramNoticeText: "মসি ডেমো উৎনবগীদমক শিজিন্নবা চার্টনি।",
    cropTomato: "খামেন (Tomato)",
    cropCabbage: "কোবি (Cabbage)",
    cropBeans: "হৱাই (Beans)",
    cropLeafy: "হৌদং-নাপী (Leafy Veg)",
    cropChilli: "মোরোক (Chilli)",
    cropOther: "অতোপ্পা মহৈ-মরোং (Other)",
    targetTempLabel: "পাউতাক পীরবা টেম্পরেচর",
    targetHumLabel: "পাউতাক পীরবা হ্যুমিতিটি",
    storedAmount: "থম্লবা চাং",
    conditionSafe: "🟢 ষ্টোরেজ ফিভম: নিংথিনা লৈ",
    farmerStorageAdvice: "লৌমীশিংগী পাউতাক",
    farmerStorageAdviceText: "অইং-অশা 0.5°C ৱাংখৎপা মতমদা পেল্টিয়ার কুলিংনা মশানা চত্থগনি। থোং থিংজিনবীয়ু।",
    systemInfoTitle: "সিষ্টেম আর্কিতেকচর অমসুং হাৰ্ডৱেৰ",
    systemInfoSubtitle: "নোর্থ ইষ্টকী লৌমীশিংগীদমক অখন্ননা শেম্বা।",
    powerCoolingFlow: "সোলর শক্তি অমসুং পেল্টিয়ার কুলিং লম্বী",
    powerCoolingFlowDesc: "কম্প্রেসরগী মহুত্তা পেল্টিয়ার থার্মোইলেকট্রিক মডিউল শিজিন্নৈ।",
    sensorFlowTitle: "সেন্সর অমসুং IoT কন্ত্রোল লম্বী",
    judgeDemoTitle: "SIH 2026 জাজ ডেমো সেন্তর",
    judgeDemoSubtitle: "অশেংবা ফিভমগী সিমুলেসন তেষ্ট তৌবীয়ু।",
    demoBannerTitle: "জাজশিংগীদমক পান্দম",
    demoBannerText: "ঐখোয়গী IoT সিষ্টেম অসিনা করম্না পোত্থোক কনবগে তাকউ।",
    interactiveScenarios: "সিমুলেসন কন্ত্রোলশিং",
    btnNormalOperation: "স্বাভাবিক চত্থবা",
    btnSimHighHumidity: "অহোৎপা ৱাংখৎপা",
    btnSimDoorOpen: "থোং হাংবা য়েংবা",
    flowWalkthroughTitle: "জাজশিংগীদমক মিনিট ২ গী ডেমো",
    step1Title: "খোংথাং ১: নোর্মেলে ফিভম",
    step1Desc: "স্বাভাবিক চত্থবা নম্বীয়ু। 6.4°C টেম্পরেচর অমসুং সোলর শক্তি উৎলু।",
    step2Title: "খোংথাং ২: টেম্পরেচর ৱাংখৎপা",
    step2Desc: "টেম্পরেচর ৱাংখৎপা নম্বীয়ু অমসুং 11.8°C য়ৌবা য়েংউ।",
    step3Title: "খোংথাং ৩: বেত্তরি হন্থবা",
    step3Desc: "বেত্তরি 25% হন্থরকপদা এলার্ট অমসুং বেকঅপ উৎলু।",
    step4Title: "খোংথাং ৪: পুম্নমক রিসেট",
    step4Desc: "খুদোংথীবা পুম্নমক তেষ্ট তৌদুনা অমুক নোর্মেলে ওন্থোকউ।",
    alertTempRiseTitle: "টেম্পরেচর ৱাংখৎলে",
    alertTempRiseMsg: "ষ্টোরেজগী অইং-অশা নিংথিবা চাংদগী ৱাংখৎলে।",
    alertTempRiseAction: "পেল্টিয়ার কুলাৰ মপুং ফানা চত্থরি। থোং থিংজিনবীয়ু।",
    alertBatLowTitle: "বেত্তরি হন্থরে",
    alertBatLowMsg: "বেত্তরি চাং 30% গী মখাদা তাখ্রে।",
    alertBatLowAction: "সোলর চার্জিং য়েংশিনবীয়ু নত্রগা মৈ শিজিন্নবা হন্থহনবীয়ু।",
    alertPowerFailTitle: "মৈ কক্লে",
    alertPowerFailMsg: "মরুওইবা মৈ ফংদে। বেত্তরি বেকঅপ চত্থরি।",
    alertPowerFailAction: "বেত্তরি বেকঅপতা কুলিং চত্থরি।",
    alertHumHighTitle: "অহোৎপা ৱাংখৎলে",
    alertHumHighMsg: "অহোৎপগী চাং দরকার লৈবদগী হেনখ্রে।",
    alertHumHighAction: "নুংশিৎ চংবা-থোকপা য়েংশিনবীয়ু।",
    alertDoorOpenTitle: "থোং হাংলে",
    alertDoorOpenMsg: "ষ্টোরেজগী থোং হৌজিক হাংদুনা লৈরি।",
    alertDoorOpenAction: "ষ্টোরেজগী থোং থিংজিনবীয়ু।",
    alertAllClearTitle: "পুম্নমক স্বাভাবিক ওইরে",
    alertAllClearMsg: "মহৈ-মরোংশিং চপ চাবা ফিভমদা থম্লি।",
    alertAllClearAction: "সিষ্টেম নিংথিনা চত্থরি।",
    optConditionOptimal: "🟢 নিংথিনা লৈ (OPTIMAL)",
    optConditionAttention: "🟡 মিৎয়েং থম্বীয়ু (ATTENTION)",
    optConditionCritical: "🔴 খুদোংথীবা (CRITICAL)"
  },

  // 6. Khasi (Khasi)
  kh: {
    navDashboard: "Dashboard",
    navMonitor: "Monitor Storage",
    navAlerts: "Ki Jingmaham",
    navProduce: "Ki Jhur",
    navSystem: "System",
    navDemo: "Demo Center",
    welcomeTitle: "Khublei mynstep, Nongrep 👋",
    unitLabel: "Cold Storage Unit",
    lastUpdatedJustNow: "Ka jingtip kaba mynta hi",
    liveSimulationRunning: "Ka simulation kaba mynta",
    heroSafeTitle: "Ki jhur jong phi ki don ha ka jaka kaba biang bha.",
    heroSafeSubtitle: "Ka jingshit bad ka jingthnam ki biang. Ka Peltier cooling ka pynpyngngad bha.",
    heroAttentionTitle: "Donkam ban khmih ia ka storage",
    heroAttentionSubtitle: "Don ka jingkylla ha ka storage. Khmih ia ka battery lane ka jingkhang.",
    heroCriticalTitle: "Ka jingma kaba jur!",
    heroCriticalSubtitle: "Ka jingshit ka kiew palat lane ka bording ka la lip.",
    liveStorageMetrics: "Jingtip na ki Sensor",
    simValuesNotice: "Ki jingkhein ba la buh na ka bynta ka demo",
    temperature: "Jingshit",
    humidity: "Jingthnam",
    batteryLevel: "Bor Battery",
    solarPower: "Bor Sngi",
    peltierCooling: "Peltier Cooling",
    powerSource: "Bor Ding",
    doorStatus: "Jingkhang Storage",
    targetRange: "Kyrdan ba biang",
    statusNormal: "Biang",
    statusWarning: "Maham",
    statusCritical: "Ma jur",
    statusLow: "Battery Duna",
    backupReady: "LiFePO₄ Backup la biang",
    backupActive: "Battery Backup la treikam",
    pvActive: "Bor Sngi Treikam",
    solarActive: "Bor Sngi Don",
    quickDemoBar: "Jingpyrshang wut-wut",
    openFullDemoCenter: "Plie ia ka Demo Center →",
    btnSimTempFluctuation: "Pyrshang jingshit kiew",
    btnSimLowBattery: "Pyrshang battery duna (25%)",
    btnRestoreBattery: "Pynbha biang battery (78%)",
    btnSimPowerFailure: "Pyrshang lip bording",
    btnRestorePower: "Pynbha biang bording",
    btnSimMultipleIssues: "Pyrshang bun ki jingeh",
    btnResetAll: "Pynphai sha kaba biang",
    monitorTitle: "Ka Monitor Storage",
    monitorSubtitle: "Ka jingkiew jinghiar ka jingshit bad jingthnam ha CS-001.",
    storageTrends: "Rukom kylla jingshit & jingthnam",
    monitorMetricsTitle: "Jingkhein Mynta ka Sngi",
    alertCenterTitle: "Jaka Maham & Jingtip Baroh",
    alertCenterSubtitle: "Ki jingmaham kiba iadei bad ka jingshit, battery bad bording.",
    activeAlertsTitle: "Ki Jingmaham ba mynta",
    alertHistoryTitle: "Jingthoh ia ki Jingmaham baroh",
    testAlertBtn: "Test Maham",
    clearAlertsBtn: "Pynkhuid lut",
    myProduceTitle: "Ki jhur ba la buh",
    myProduceSubtitle: "Jied ia ki jhur ban pynbiang ia ka jingshit bad ka jingthnam.",
    paramNoticeTitle: "Ki kyrdan buh jhur ba la ai jingmut",
    paramNoticeText: "Kine ki dei ki jingbuh kyrdan na ka bynta ka demo.",
    cropTomato: "Sohsaw (Tomato)",
    cropCabbage: "Kubisoh (Cabbage)",
    cropBeans: "Rymbai (Beans)",
    cropLeafy: "Jhur sla (Leafy Veg)",
    cropChilli: "Sohmynken (Chilli)",
    cropOther: "Kiwei ki jhur (Other)",
    targetTempLabel: "Jingshit ba biang",
    targetHumLabel: "Jingthnam ba biang",
    storedAmount: "Kiba la buh",
    conditionSafe: "🟢 Ka kyrdan: Biang bha",
    farmerStorageAdvice: "Jingsneng ia u nongrep",
    farmerStorageAdviceText: "Lada jingshit ka kiew 0.5°C, ka Peltier kan plie hi. Khang bha jingkhang.",
    systemInfoTitle: "Ka System bad ki tiar Hardware",
    systemInfoSubtitle: "La shna kyrpang na ka bynta ki thain lum jong ka North East.",
    powerCoolingFlow: "Bor Sngi bad ka rukom pynpyngngad Peltier",
    powerCoolingFlowDesc: "Ngim shym pyndonkam da ki compressor hynrei da ka Peltier module.",
    sensorFlowTitle: "Ki Sensor bad IoT",
    judgeDemoTitle: "SIH 2026 Judge Demo Center",
    judgeDemoSubtitle: "Pyrshang ia ki rukom treikam ha ka shisha.",
    demoBannerTitle: "Ka thong jong ka Demonstration",
    demoBannerText: "Pyni kumno ka IoT system ka batai bad iada ia ki jhur.",
    interactiveScenarios: "Rukom pyniaid ia ka Simulation",
    btnNormalOperation: "RUKOM TREI BA BIANG",
    btnSimHighHumidity: "PYRSHANG JINGTHNAM JUR",
    btnSimDoorOpen: "PYRSHANG PLIE JINGKHANG",
    flowWalkthroughTitle: "2 Minit Jingpyni ia ki Judge",
    step1Title: "Kynthei 1: Kaba biang",
    step1Desc: "Khniod Normal Operation. Pyni 6.4°C bad bor sngi.",
    step2Title: "Kynthei 2: Jingshit kiew",
    step2Desc: "Khniod Temp Fluctuation bad pyni ba ka kiew shaduh 11.8°C.",
    step3Title: "Kynthei 3: Duna battery",
    step3Desc: "Pyni ba ka battery ka hiar sha ka 25% bad treikam ka backup.",
    step4Title: "Kynthei 4: Reset lut",
    step4Desc: "Pyrshang bun ki jingeh bad pynphai sha kaba biang.",
    alertTempRiseTitle: "Jingshit ka kiew",
    alertTempRiseMsg: "Ka jingshit ha ka storage ka la kiew palat.",
    alertTempRiseAction: "Ka Peltier cooling ka treikam borbah. Khang bha ia ka jingkhang.",
    alertBatLowTitle: "Battery ka duna",
    alertBatLowMsg: "Ka bor battery ka la hiar hapoh 30%.",
    alertBatLowAction: "Khmih ia ka solar charging lane pynduna bor ding.",
    alertPowerFailTitle: "Bording ka la lip",
    alertPowerFailMsg: "Bording kam don. Ka battery backup ka la treikam.",
    alertPowerFailAction: "Ka cooling ka treikam da ka battery backup.",
    alertHumHighTitle: "Jingthnam kaba jur",
    alertHumHighMsg: "Ka jingthnam ka la kiew palat ia kaba biang.",
    alertHumHighAction: "Khmih ia ka lyer ba kan iaid bha.",
    alertDoorOpenTitle: "Jingkhang ka plie",
    alertDoorOpenMsg: "Ka jingkhang storage ka la plie.",
    alertDoorOpenAction: "Khang noh ia ka jingkhang storage.",
    alertAllClearTitle: "Baroh ki biang",
    alertAllClearMsg: "Ki jhur ki don ha ka jaka kaba biang.",
    alertAllClearAction: "Ka bor sngi ka treikam bha.",
    optConditionOptimal: "🟢 BIANG BHA (OPTIMAL)",
    optConditionAttention: "🟡 KHMIS BHA (ATTENTION)",
    optConditionCritical: "🔴 JINGMA (CRITICAL)"
  },

  // 7. Garo (A·chik)
  garo: {
    navDashboard: "Dashboard",
    navMonitor: "Storage Monitor",
    navAlerts: "Alert-rang",
    navProduce: "Me·surang",
    navSystem: "System",
    navDemo: "Demo Center",
    welcomeTitle: "Seng·ba namgipa, Game-cha·gipa 👋",
    unitLabel: "Cold Storage Unit",
    lastUpdatedJustNow: "Da·o ong·enggipa",
    liveSimulationRunning: "Live simulation chaliba",
    heroSafeTitle: "Na·simangni me·surang namgipa obostao donchakahani donga.",
    heroSafeSubtitle: "Ding·ani aro chidim·ani kakket ong·enga. Peltier cooling nambee kam ka·enga.",
    heroAttentionTitle: "Storage-o nisan nanga",
    heroAttentionSubtitle: "Storage-o dingtangani donga. Battery ba do·gako nibo.",
    heroCriticalTitle: "Kenani donga!",
    heroCriticalSubtitle: "Ding·ani batangaha ba bijoli nosto ong·aha.",
    liveStorageMetrics: "Sensor-rangko niani",
    simValuesNotice: "SIH mesokanina simulation ka·gipa",
    temperature: "Ding·ani",
    humidity: "Chidim·ani",
    batteryLevel: "Battery Bil",
    solarPower: "Salni Bil",
    peltierCooling: "Peltier Cooling",
    powerSource: "Bijoli",
    doorStatus: "Storage-ni Do·ga",
    targetRange: "Donbagipa sima",
    statusNormal: "Nama",
    statusWarning: "Kakketja",
    statusCritical: "Kenani",
    statusLow: "Battery Komia",
    backupReady: "LiFePO₄ Backup tariaha",
    backupActive: "Battery Backup chaliba",
    pvActive: "Salni bil sokbaenga",
    solarActive: "Salni bil donga",
    quickDemoBar: "Bakbak niani",
    openFullDemoCenter: "Gimik Demo Center-ko nina →",
    btnSimTempFluctuation: "Ding·ani bareako nina",
    btnSimLowBattery: "Battery komiako nina (25%)",
    btnRestoreBattery: "Battery namatpila (78%)",
    btnSimPowerFailure: "Bijoli sianiko nina",
    btnRestorePower: "Bijoli namatpila",
    btnSimMultipleIssues: "Gimik obosta niani",
    btnResetAll: "Namatpila",
    monitorTitle: "Storage Monitor",
    monitorSubtitle: "CS-001 ning·o ding·ani aro chidim·aniko niani.",
    storageTrends: "Ding·ani & Chidim·ani chin",
    monitorMetricsTitle: "Da·alni obosta",
    alertCenterTitle: "Alert Center aro History",
    alertCenterSubtitle: "Ding·ani, battery aro bijoli sianiko u·iatani.",
    activeAlertsTitle: "Da·o ong·enggipa Alert-rang",
    alertHistoryTitle: "Gimik Alert-rangni chin",
    testAlertBtn: "Test Alert",
    clearAlertsBtn: "Gimaatbo",
    myProduceTitle: "Donchakgipa me·surang",
    myProduceSubtitle: "Me·surangko sena ding·ani aro chidim·aniko sebo.",
    paramNoticeTitle: "Ku·pattigipa storage sima",
    paramNoticeText: "Ia setpoints-rangara demo-na tariaha.",
    cropTomato: "Tomat (Tomato)",
    cropCabbage: "Kobi (Cabbage)",
    cropBeans: "Karek (Beans)",
    cropLeafy: "Bijak Me·surang (Leafy Veg)",
    cropChilli: "Jal·ik (Chilli)",
    cropOther: "Gipin me·su (Other)",
    targetTempLabel: "Donbagipa Ding·ani",
    targetHumLabel: "Donbagipa Chidim·ani",
    storedAmount: "Donaha",
    conditionSafe: "🟢 Storage: Namgipa",
    farmerStorageAdvice: "Game cha·gipana ku·pattiani",
    farmerStorageAdviceText: "Ding·ani 0.5°C bareode Peltier cooling kam ka·gen. Do·gako chipbo.",
    systemInfoTitle: "System Architecture aro Hardware",
    systemInfoSubtitle: "North East-ni a·brirangna tariaha.",
    powerCoolingFlow: "Salni bil aro Peltier Cooling",
    powerCoolingFlowDesc: "Compressor-ko jakkaljae Peltier module-ko jakkalaha.",
    sensorFlowTitle: "Sensors aro IoT",
    judgeDemoTitle: "SIH 2026 Judge Demo Center",
    judgeDemoSubtitle: "Kakketgipa obostako test ka·bo.",
    demoBannerTitle: "Judge-rangna mesokani",
    demoBannerText: "Chingni IoT system mairongae me·surangko ripinga uko mesokbo.",
    interactiveScenarios: "Simulation Control-rang",
    btnNormalOperation: "NORMAL OPERATION",
    btnSimHighHumidity: "CHIDIM·ANI BAREANI",
    btnSimDoorOpen: "DO·GA OANI",
    flowWalkthroughTitle: "Judge-na 2 Minute Mesokani",
    step1Title: "Step 1: Namgipa obosta",
    step1Desc: "Normal Operation thubo. 6.4°C ding·ani mesokbo.",
    step2Title: "Step 2: Ding·ani barea",
    step2Desc: "Ding·ani bareako thubo aro 11.8°C sokaniko nibo.",
    step3Title: "Step 3: Battery komia",
    step3Desc: "Battery 25% ong·aniko mesokbo aro backup-ko nibo.",
    step4Title: "Step 4: Namatpila",
    step4Desc: "Reset All thubo aro OPTIMAL ong·atpila.",
    alertTempRiseTitle: "Ding·ani bareaha",
    alertTempRiseMsg: "Storage-ni ding·ani batangaha.",
    alertTempRiseAction: "Peltier cooling bilake kam ka·enga. Do·gako chipbo.",
    alertBatLowTitle: "Battery komiaha",
    alertBatLowMsg: "Battery bil 30% gita komiaha.",
    alertBatLowAction: "Solar charging-ko nibo ba bil jakkalaniko komiatbo.",
    alertPowerFailTitle: "Bijoli siaha",
    alertPowerFailMsg: "Mongsonggipa bijoli gri. Battery backup chaliba.",
    alertPowerFailAction: "Battery backup-chi cooling ka·enga.",
    alertHumHighTitle: "Chidim·ani batangaha",
    alertHumHighMsg: "Chidim·ani nangbatgipao gariaha.",
    alertHumHighAction: "Balwa re·aniko nibo.",
    alertDoorOpenTitle: "Do·ga oenga",
    alertDoorOpenMsg: "Do·ga oengani gimin cooling nosto ong·gen.",
    alertDoorOpenAction: "Do·gako chipbo.",
    alertAllClearTitle: "Gimik nama",
    alertAllClearMsg: "Me·surang safe donga.",
    alertAllClearAction: "Solar nambee kam ka·enga.",
    optConditionOptimal: "🟢 NAMA (OPTIMAL)",
    optConditionAttention: "🟡 NIBO (ATTENTION)",
    optConditionCritical: "🔴 KENANI (CRITICAL)"
  },

  // 8. Mizo (Mizo ṭawng)
  lus: {
    navDashboard: "Dashboard",
    navMonitor: "Storage Monitor",
    navAlerts: "Hriattirnate",
    navProduce: "Thlai Thlanna",
    navSystem: "System",
    navDemo: "Demo Center",
    welcomeTitle: "Chibai le, Loneitu 👋",
    unitLabel: "Cold Storage Unit",
    lastUpdatedJustNow: "Thil thleng mek",
    liveSimulationRunning: "Simulation a kal mek",
    heroSafeTitle: "I thlai tharte a him tawk e.",
    heroSafeSubtitle: "Khaw lum zawng leh hnawng zawng a tawk chiah. Peltier cooling a thawk tha e.",
    heroAttentionTitle: "Storage fimkhur a ngai",
    heroAttentionSubtitle: "Storage dinhmunah danglam a awm. Battery emaw kawngkhar en rawh.",
    heroCriticalTitle: "Hriattirna hlauhawm!",
    heroCriticalSubtitle: "Khaw lum a sang lutuk emaw electric a thi.",
    liveStorageMetrics: "Sensor atanga thlithlaina",
    simValuesNotice: "SIH demo atana siam chawp a ni",
    temperature: "Lum zawng",
    humidity: "Hnawng zawng",
    batteryLevel: "Battery Chak zawng",
    solarPower: "Ni zung chakna",
    peltierCooling: "Peltier Cooling",
    powerSource: "Current Hnar",
    doorStatus: "Storage Kawngkhar",
    targetRange: "A tawk chiah",
    statusNormal: "A tha",
    statusWarning: "Fimkhur",
    statusCritical: "Hlauhawm",
    statusLow: "Battery Tlem",
    backupReady: "LiFePO₄ Backup inpeih",
    backupActive: "Battery Backup hman mek",
    pvActive: "Ni zung chakna siam mek",
    solarActive: "Solar a kal",
    quickDemoBar: "Fiah thut theihna",
    openFullDemoCenter: "Demo Center hawng rawh →",
    btnSimTempFluctuation: "Lum sang fiahna",
    btnSimLowBattery: "Battery tlem fiahna (25%)",
    btnRestoreBattery: "Battery siam tha leh (78%)",
    btnSimPowerFailure: "Current thi fiahna",
    btnRestorePower: "Current siam tha leh",
    btnSimMultipleIssues: "Buaina tamtak fiahna",
    btnResetAll: "A pangngaiah dah leh",
    monitorTitle: "Storage Monitor Kimchang",
    monitorSubtitle: "CS-001 chhunga lum leh hnawng awmdan entirna.",
    storageTrends: "Lum leh Hnawng kalphung",
    monitorMetricsTitle: "Vawiin Chanchin",
    alertCenterTitle: "Hriattirna Hmunpui & Chanchin",
    alertCenterSubtitle: "Lum zawng, battery leh current thih hriattirna.",
    activeAlertsTitle: "Hriattirna awm mekte",
    alertHistoryTitle: "Hriattirna lo awm tawhte",
    testAlertBtn: "Fiahna Hriattirna",
    clearAlertsBtn: "Thianfai vek rawh",
    myProduceTitle: "Ka thlai dahthatte",
    myProduceSubtitle: "I thlai dah mila lum zawng leh hnawng zawng thlang rawh.",
    paramNoticeTitle: "Dahthatna tura thurawn",
    paramNoticeText: "Heng setpoints hi demo atana siam a ni.",
    cropTomato: "Tomato",
    cropCabbage: "Zikhlum (Cabbage)",
    cropBeans: "Bebawp (Beans)",
    cropLeafy: "Anhnah (Leafy Veg)",
    cropChilli: "Hmarcha (Chilli)",
    cropOther: "Thlai dang (Other)",
    targetTempLabel: "Lum zawng tum",
    targetHumLabel: "Hnawng zawng tum",
    storedAmount: "Dah zat",
    conditionSafe: "🟢 Dinhmun: A tha tawk",
    farmerStorageAdvice: "Loneitute tana thurawn",
    farmerStorageAdviceText: "Lum zawng a san chuan Peltier a in-on ang. Kawngkhar khar tlat rawh.",
    systemInfoTitle: "System Kalphung leh Hardware",
    systemInfoSubtitle: "North East loneitute tana bik liau liau a duan.",
    powerCoolingFlow: "Solar leh Peltier Cooling Kalphung",
    powerCoolingFlowDesc: "Compressor hmang lovin Peltier module zawk kan hmang a ni.",
    sensorFlowTitle: "Sensors leh IoT",
    judgeDemoTitle: "SIH 2026 Judge Demo Center",
    judgeDemoSubtitle: "Tak taka thil thleng thei enfiahna.",
    demoBannerTitle: "Judge-te tana thil tum",
    demoBannerText: "Kan IoT system hian thlai a venhim dan entir rawh.",
    interactiveScenarios: "Simulation Thununna",
    btnNormalOperation: "PANGNGAI TAKA KAL",
    btnSimHighHumidity: "HNAWNG SANG FIAHNA",
    btnSimDoorOpen: "KAWNGKHAR INHAWNG FIAHNA",
    flowWalkthroughTitle: "Judge-te tana Minit 2 Entir dan",
    step1Title: "Kailawn 1: A tha vek",
    step1Desc: "Normal Operation hmet la, 6.4°C leh solar entir rawh.",
    step2Title: "Kailawn 2: Lum a sang",
    step2Desc: "Lum sang fiahna hmet la, 11.8°C a thlen dan entir rawh.",
    step3Title: "Kailawn 3: Battery tlem",
    step3Desc: "Battery 25% hmet la, battery backup a kal nghal dan entir rawh.",
    step4Title: "Kailawn 4: Reset leh vek",
    step4Desc: "Buaina tamtak fiah la, Reset All hmangin a pangngaiah dah leh rawh.",
    alertTempRiseTitle: "Khaw lum a sang",
    alertTempRiseMsg: "Storage-a lum zawng a sang lutuk e.",
    alertTempRiseAction: "Peltier cooling chak takin a in-on. Kawngkhar khar rawh.",
    alertBatLowTitle: "Battery a tlem",
    alertBatLowMsg: "Battery 30% hnuai lamah a tla e.",
    alertBatLowAction: "Solar charging enfiah la current hman tlem tum rawh.",
    alertPowerFailTitle: "Current a thi",
    alertPowerFailMsg: "Current a awm lo. Battery backup a in-on e.",
    alertPowerFailAction: "Battery backup hmangin cooling a kal mek.",
    alertHumHighTitle: "Hnawng a sang",
    alertHumHighMsg: "Hnawng zawng a sang lutuk e.",
    alertHumHighAction: "Boruak luh chhuah dan enfiah rawh.",
    alertDoorOpenTitle: "Kawngkhar a inhawng",
    alertDoorOpenMsg: "Storage kawngkhar hawn a ni.",
    alertDoorOpenAction: "Storage kawngkhar khar vat rawh.",
    alertAllClearTitle: "A tha vek e",
    alertAllClearMsg: "Thlai dahthat a him e.",
    alertAllClearAction: "Solar-in hna a thawk tha e.",
    optConditionOptimal: "🟢 A THA (OPTIMAL)",
    optConditionAttention: "🟡 ENFIAH RAWH (ATTENTION)",
    optConditionCritical: "🔴 HLAUHAWM (CRITICAL)"
  },

  // 9. Kokborok (Kokborok)
  kok: {
    navDashboard: "Dashboard",
    navMonitor: "Storage Monitor",
    navAlerts: "Miksingnai",
    navProduce: "Mwkhwi",
    navSystem: "System",
    navDemo: "Demo Center",
    welcomeTitle: "Kahamtom, Hukhumu 👋",
    unitLabel: "Cold Storage Unit",
    lastUpdatedJustNow: "Tabuk-ni khwrang",
    liveSimulationRunning: "Live simulation chalinai",
    heroSafeTitle: "Nini mwkhwibwrok kaham tongo.",
    heroSafeSubtitle: "Kutung tei thumung kaham tongo. Peltier cooling kaham tangtongo.",
    heroAttentionTitle: "Storage-o nukjaknani nanggo",
    heroAttentionSubtitle: "Storage-o dingtang nukjakgo. Battery ba doro-no nai-di.",
    heroCriticalTitle: "Kutung belai sagba!",
    heroCriticalSubtitle: "Kutung nangmani bwsagba ba current thanba.",
    liveStorageMetrics: "Sensor-ni khwrang",
    simValuesNotice: "SIH bagwi simuleit khwlaina",
    temperature: "Kutung",
    humidity: "Thumung",
    batteryLevel: "Battery Bol",
    solarPower: "Sal Bol",
    peltierCooling: "Peltier Cooling",
    powerSource: "Current",
    doorStatus: "Storage Doro",
    targetRange: "Kwlang sima",
    statusNormal: "Kaham",
    statusWarning: "Kupul",
    statusCritical: "Kutung",
    statusLow: "Battery Khum",
    backupReady: "LiFePO₄ Backup tongo",
    backupActive: "Battery Backup tangtongo",
    pvActive: "Sal bol tangtongo",
    solarActive: "Sal bol tongo",
    quickDemoBar: "Khorok naimani",
    openFullDemoCenter: "Demo Center nai-di →",
    btnSimTempFluctuation: "Kutung sagba naidi",
    btnSimLowBattery: "Battery khum naidi (25%)",
    btnRestoreBattery: "Battery kiphildi (78%)",
    btnSimPowerFailure: "Current thanba naidi",
    btnRestorePower: "Current kiphildi",
    btnSimMultipleIssues: "Gubun obosta naidi",
    btnResetAll: "Kaham kiphildi",
    monitorTitle: "Storage Monitor",
    monitorSubtitle: "CS-001 kutung tei thumung naimani.",
    storageTrends: "Kutung & thumung rwgwi",
    monitorMetricsTitle: "Tinini Khwrang",
    alertCenterTitle: "Miksingnai Center",
    alertCenterSubtitle: "Kutung, battery tei current-ni miksingnai khwrang.",
    activeAlertsTitle: "Tabuk-ni Miksingnai",
    alertHistoryTitle: "Gimik Miksingnai Log",
    testAlertBtn: "Test Alert",
    clearAlertsBtn: "Komor-di",
    myProduceTitle: "Dondo mwkhwibwrok",
    myProduceSubtitle: "Kutung tei thumung tonna mwkhwi kusul-di.",
    paramNoticeTitle: "Sawal rwkha storage sima",
    paramNoticeText: "Abo demo bagwi se tonjakgo.",
    cropTomato: "Khumti (Tomato)",
    cropCabbage: "Kobi (Cabbage)",
    cropBeans: "Sim (Beans)",
    cropLeafy: "Buphang mwkhwi (Leafy Veg)",
    cropChilli: "Mwchwng (Chilli)",
    cropOther: "Gubun mwkhwi (Other)",
    targetTempLabel: "Kwlang Kutung",
    targetHumLabel: "Kwlang Thumung",
    storedAmount: "Dondok",
    conditionSafe: "🟢 Storage: Kaham",
    farmerStorageAdvice: "Hukhumu bagwi sawal",
    farmerStorageAdviceText: "Kutung sagkhe Peltier chali-anai. Doro-no khadok-di.",
    systemInfoTitle: "System Architecture tei Hardware",
    systemInfoSubtitle: "North East-ni bagwi tariaha.",
    powerCoolingFlow: "Sal bol tei Peltier Cooling",
    powerCoolingFlowDesc: "Compressor kwrwi, Peltier module tonjakgo.",
    sensorFlowTitle: "Sensors & IoT",
    judgeDemoTitle: "SIH 2026 Judge Demo Center",
    judgeDemoSubtitle: "Kukhe obosta test khwlaidi.",
    demoBannerTitle: "Judge-rok bagwi",
    demoBannerText: "Chini IoT system mwkhwibwrok-no bahaio khobwi ton uko phuhringdi.",
    interactiveScenarios: "Simulation Controls",
    btnNormalOperation: "KAHAM CHALINAI",
    btnSimHighHumidity: "THUMUNG SAGBA",
    btnSimDoorOpen: "DORO KHEDOK",
    flowWalkthroughTitle: "Judge bagwi 2 Minit",
    step1Title: "Step 1: Kaham obosta",
    step1Desc: "Normal Operation thudi. 6.4°C kutung phuhringdi.",
    step2Title: "Step 2: Kutung sagba",
    step2Desc: "Kutung sagba thudi tei 11.8°C thangkha naidi.",
    step3Title: "Step 3: Battery khum",
    step3Desc: "Battery 25% phuhringdi tei backup chalikha naidi.",
    step4Title: "Step 4: Kaham kiphildi",
    step4Desc: "Reset All thudi tei OPTIMAL khwlaiphildi.",
    alertTempRiseTitle: "Kutung sagba",
    alertTempRiseMsg: "Storage kutung nangmani bwsagba.",
    alertTempRiseAction: "Peltier cooling tangtongo. Doro khadok-di.",
    alertBatLowTitle: "Battery khum",
    alertBatLowMsg: "Battery 30% ni bwtwi thangkha.",
    alertBatLowAction: "Solar charging naidi.",
    alertPowerFailTitle: "Current thanba",
    alertPowerFailMsg: "Current kwrwi. Battery backup chalikha.",
    alertPowerFailAction: "Battery backup-o cooling chalitongo.",
    alertHumHighTitle: "Thumung sagba",
    alertHumHighMsg: "Thumung bwsagba.",
    alertHumHighAction: "Bar habnai naidi.",
    alertDoorOpenTitle: "Doro khedok",
    alertDoorOpenMsg: "Storage doro khedok tongo.",
    alertDoorOpenAction: "Doro-no khadok-di.",
    alertAllClearTitle: "Gimik kaham",
    alertAllClearMsg: "Mwkhwibwrok safe tongo.",
    alertAllClearAction: "Sal bol kaham tangtongo.",
    optConditionOptimal: "🟢 KAHAM (OPTIMAL)",
    optConditionAttention: "🟡 NAIDI (ATTENTION)",
    optConditionCritical: "🔴 KUTUNG (CRITICAL)"
  },

  // 10. Nepali (नेपाली)
  ne: {
    navDashboard: "ड्यासबोर्ड",
    navMonitor: "भण्डारण मनिटर",
    navAlerts: "सूचनाहरू",
    navProduce: "बाली चयन",
    navSystem: "प्रणाली",
    navDemo: "डेमो केन्द्र",
    welcomeTitle: "शुभ प्रभात, किसान साथी 👋",
    unitLabel: "कोल्ड स्टोरेज युनिट",
    lastUpdatedJustNow: "प्रत्यक्ष टेलिमेट्री सक्रिय",
    liveSimulationRunning: "प्रत्यक्ष सिमुलेसन सक्रिय",
    heroSafeTitle: "तपाईंको तरकारीहरू उपयुक्त परिस्थितिमा भण्डारण गरिएका छन्।",
    heroSafeSubtitle: "तापक्रम र आर्द्रता सिफारिस गरिएको दायरा भित्र छ। पेल्टियर थर्मोइलेक्ट्रिक कुलिङ स्थिर छ।",
    heroAttentionTitle: "भण्डारणमा ध्यान दिनुहोस्",
    heroAttentionSubtitle: "भण्डारण स्थितिमा केही परिवर्तन देखिएको छ। ब्याट्री वा ढोका जाँच गर्नुहोस्।",
    heroCriticalTitle: "गम्भीर चेतावनी!",
    heroCriticalSubtitle: "तापक्रम अत्यधिक बढेको छ वा बिजुली अवरुद्ध भएको छ।",
    liveStorageMetrics: "प्रत्यक्ष सेन्सर मनिटरिङ",
    simValuesNotice: "SIH प्रदर्शनका लागि सिमुलेट गरिएको डेटा",
    temperature: "तापक्रम",
    humidity: "आर्द्रता",
    batteryLevel: "ब्याट्री स्तर",
    solarPower: "सौर्य ऊर्जा",
    peltierCooling: "पेल्टियर कुलिङ",
    powerSource: "बिजुली स्रोत",
    doorStatus: "भण्डारण ढोका",
    targetRange: "लक्ष्य दायरा",
    statusNormal: "सामान्य",
    statusWarning: "चेतावनी",
    statusCritical: "गम्भीर",
    statusLow: "कम ब्याट्री",
    backupReady: "LiFePO₄ ब्याकअप तयार",
    backupActive: "ब्याट्री ब्याकअप सक्रिय",
    pvActive: "सौर्य ऊर्जा उत्पादन चालु",
    solarActive: "सौर्य सक्रिय",
    quickDemoBar: "द्रुत परीक्षण विकल्प",
    openFullDemoCenter: "पूर्ण डेमो केन्द्र खोल्नुहोस् →",
    btnSimTempFluctuation: "तापक्रम वृद्धि परीक्षण",
    btnSimLowBattery: "कम ब्याट्री परीक्षण (२५%)",
    btnRestoreBattery: "ब्याट्री पूर्ववत् (७८%)",
    btnSimPowerFailure: "बिजुली विफलता परीक्षण",
    btnRestorePower: "बिजुली पुनर्स्थापना",
    btnSimMultipleIssues: "धेरै समस्या परीक्षण",
    btnResetAll: "सामान्य स्थितिमा फर्काउनुहोस्",
    monitorTitle: "भण्डारण वातावरण मनिटर",
    monitorSubtitle: "CS-001 भित्रको तापक्रम र आर्द्रताको प्रत्यक्ष चार्ट।",
    storageTrends: "तापक्रम र आर्द्रता प्रवृत्ति",
    monitorMetricsTitle: "आजको वातावरण तथ्याङ्क",
    alertCenterTitle: "सूचना केन्द्र र इतिहास",
    alertCenterSubtitle: "तापक्रम, ब्याट्री र बिजुली विफलताको लग।",
    activeAlertsTitle: "सक्रिय सूचनाहरू",
    alertHistoryTitle: "पूर्ण सूचना इतिहास",
    testAlertBtn: "परीक्षण चेतावनी",
    clearAlertsBtn: "सबै मेटाउनुहोस्",
    myProduceTitle: "मेरो भण्डारित उत्पादन",
    myProduceSubtitle: "सिफारिस गरिएको तापक्रम र आर्द्रता मिलाउन तरकारी छान्नुहोस्।",
    paramNoticeTitle: "सिफारिस गरिएको भण्डारण सेटपोइन्ट",
    paramNoticeText: "यी मानहरू डेमो प्रदर्शनका लागि मानक कृषि लक्ष्यहरू हुन्।",
    cropTomato: "गोलभेडा (Tomato)",
    cropCabbage: "बन्दागोभी (Cabbage)",
    cropBeans: "सिमी (Beans)",
    cropLeafy: "सागपात (Leafy Veg)",
    cropChilli: "खुर्सानी (Chilli)",
    cropOther: "अन्य तरकारी (Other)",
    targetTempLabel: "सिफारिस गरिएको तापक्रम",
    targetHumLabel: "सिफारिस गरिएको आर्द्रता",
    storedAmount: "भण्डारित परिमाण",
    conditionSafe: "🟢 भण्डारण स्थिति: उत्तम",
    farmerStorageAdvice: "किसानका लागि सल्लाह",
    farmerStorageAdviceText: "तापक्रम ०.५°C बढ्दा पेल्टियर कुलिङ आफैं सुरु हुन्छ। ढोका बन्द राख्नुहोस्।",
    systemInfoTitle: "प्रणाली वास्तुकला र हार्डवेयर",
    systemInfoSubtitle: "उत्तर-पूर्वी क्षेत्रका पहाडी किसानहरूका लागि लक्षित।",
    powerCoolingFlow: "सौर्य ऊर्जा र पेल्टियर कुलिङ प्रवाह",
    powerCoolingFlowDesc: "कम्प्रेसरको सट्टा पेल्टियर थर्मोइलेक्ट्रिक मोड्युल प्रयोग गरिएको छ।",
    sensorFlowTitle: "सेन्सर र IoT नियन्त्रण प्रवाह",
    judgeDemoTitle: "SIH 2026 निर्णायक डेमो केन्द्र",
    judgeDemoSubtitle: "वास्तविक परिचालन परिदृश्यहरूको परीक्षण गर्नुहोस्।",
    demoBannerTitle: "मूल्याङ्कनकर्ताहरूका लागि प्रदर्शन उद्देश्य",
    demoBannerText: "हाम्रो IoT प्रणालीले कसरी तापक्रम र बिजुली विफलता पत्ता लगाएर बाली जोगाउँछ हेर्नुहोस्।",
    interactiveScenarios: "सिमुलेसन नियन्त्रण",
    btnNormalOperation: "सामान्य सञ्चालन",
    btnSimHighHumidity: "उच्च आर्द्रता परीक्षण",
    btnSimDoorOpen: "ढोका खुला परीक्षण",
    flowWalkthroughTitle: "निर्णायकहरूका लागि २ मिनेटको डेमो",
    step1Title: "चरण १: सामान्य स्थिति",
    step1Desc: "Normal Operation थिच्नुहोस्। ६.४°C तापक्रम र सौर्य ऊर्जा देखाउनुहोस्।",
    step2Title: "चरण २: तापक्रम वृद्धि",
    step2Desc: "तापक्रम वृद्धि थिच्नुहोस् र ११.८°C सम्म पुगेको हेर्नुहोस्।",
    step3Title: "चरण ३: कम ब्याट्री",
    step3Desc: "ब्याट्री २५% र बिजुली जाँदा ब्याकअप सक्रिय भएको देखाउनुहोस्।",
    step4Title: "चरण ४: रिसेट गर्नुहोस्",
    step4Desc: "सबै समस्या परीक्षण गरी Reset All थिच्नुहोस्।",
    alertTempRiseTitle: "तापक्रम वृद्धि",
    alertTempRiseMsg: "भण्डारणको तापक्रम सुरक्षित सीमाभन्दा माथि जाँदैछ।",
    alertTempRiseAction: "पेल्टियर कुलिङ पूर्ण क्षमतामा चलिरहेको छ। ढोका बन्द राख्नुहोस्।",
    alertBatLowTitle: "कम ब्याट्री",
    alertBatLowMsg: "ब्याट्री ३०% भन्दा कम भयो।",
    alertBatLowAction: "सौर्य चार्जिङ जाँच गर्नुहोस् वा बिजुली खपत घटाउनुहोस्।",
    alertPowerFailTitle: "बिजुली विफलता",
    alertPowerFailMsg: "मुख्य बिजुली उपलब्ध छैन। ब्याट्री ब्याकअप सक्रिय भयो।",
    alertPowerFailAction: "ब्याट्री ब्याकअपमा कुलिङ चलिरहेको छ।",
    alertHumHighTitle: "उच्च आर्द्रता",
    alertHumHighMsg: "आर्द्रता सुरक्षित सीमाभन्दा माथि पुगेको छ।",
    alertHumHighAction: "वायु सञ्चार जाँच गर्नुहोस्।",
    alertDoorOpenTitle: "ढोका खुला",
    alertDoorOpenMsg: "भण्डारणको ढोका हाल खुला छ।",
    alertDoorOpenAction: "कृपया भण्डारणको ढोका बन्द गर्नुहोस्।",
    alertAllClearTitle: "सबै सामान्य",
    alertAllClearMsg: "बाली उपयुक्त अवस्थामा सुरक्षित छ।",
    alertAllClearAction: "सौर्य चार्जिङ सामान्य रूपमा भइरहेको छ।",
    optConditionOptimal: "🟢 उत्तम (OPTIMAL)",
    optConditionAttention: "🟡 ध्यान दिनुहोस् (ATTENTION)",
    optConditionCritical: "🔴 गम्भीर (CRITICAL)"
  },

  // 11. Hindi (हिन्दी)
  hi: {
    navDashboard: "डैशबोर्ड",
    navMonitor: "स्टोरेज मॉनिटर",
    navAlerts: "अलर्ट्स",
    navProduce: "फसल चयन",
    navSystem: "सिस्टम",
    navDemo: "डेमो सेंटर",
    welcomeTitle: "शुभ प्रभात, किसान भाई 👋",
    unitLabel: "कोल्ड स्टोरेज यूनिट",
    lastUpdatedJustNow: "लाइव टेलीमेट्री सक्रिय",
    liveSimulationRunning: "रीयल-टाइम सिमुलेशन सक्रिय",
    heroSafeTitle: "आपकी फसल वर्तमान में उपयुक्त परिस्थितियों में भंडारित है।",
    heroSafeSubtitle: "तापमान और नमी सुरक्षित सीमा में हैं। पेल्टियर थर्मोइलेक्ट्रिक कूलिंग स्थिरता बनाए हुए है।",
    heroAttentionTitle: "स्टोरेज पर ध्यान देने की आवश्यकता",
    heroAttentionSubtitle: "स्टोरेज में कुछ बदलाव देखा गया है। कृपया बैटरी या दरवाज़ा जांचें।",
    heroCriticalTitle: "गंभीर चेतावनी!",
    heroCriticalSubtitle: "तापमान सुरक्षित सीमा से अधिक बढ़ रहा है या बिजली आपूर्ति बाधित हुई है।",
    liveStorageMetrics: "लाइव सेंसर निगरानी",
    simValuesNotice: "SIH प्रदर्शन के लिए सिमुलेटेड मान",
    temperature: "तापमान",
    humidity: "नमी",
    batteryLevel: "बैटरी स्तर",
    solarPower: "सौर ऊर्जा",
    peltierCooling: "पेल्टियर कूलिंग",
    powerSource: "बिजली स्रोत",
    doorStatus: "स्टोरेज दरवाज़ा",
    targetRange: "लक्ष्य सीमा",
    statusNormal: "सामान्य",
    statusWarning: "चेतावनी",
    statusCritical: "गंभीर",
    statusLow: "कम बैटरी",
    backupReady: "LiFePO₄ बैकअप तैयार",
    backupActive: "बैटरी बैकअप सक्रिय",
    pvActive: "सौर ऊर्जा उत्पादन चालू",
    solarActive: "सौर ऊर्जा सक्रिय",
    quickDemoBar: "त्वरित जज परीक्षण विकल्प",
    openFullDemoCenter: "पूर्ण डेमो केंद्र खोलें →",
    btnSimTempFluctuation: "तापमान वृद्धि परीक्षण",
    btnSimLowBattery: "कम बैटरी परीक्षण (25%)",
    btnRestoreBattery: "बैटरी पुनर्स्थापित करें (78%)",
    btnSimPowerFailure: "बिजली विफलता परीक्षण",
    btnRestorePower: "बिजली पुनर्स्थापित करें",
    btnSimMultipleIssues: "एकाधिक समस्याएं परीक्षण",
    btnResetAll: "सामान्य स्थिति बहाल करें",
    monitorTitle: "स्टोरेज पर्यावरण मॉनिटर",
    monitorSubtitle: "CS-001 के भीतर तापमान और सापेक्ष आर्द्रता का लाइव विश्लेषण।",
    storageTrends: "तापमान और नमी का रुझान",
    monitorMetricsTitle: "आज के पर्यावरण आंकड़े",
    alertCenterTitle: "अलर्ट केंद्र एवं ऐतिहासिक लॉग",
    alertCenterSubtitle: "तापमान, कम बैटरी और बिजली विफलता का पूर्ण इतिहास।",
    activeAlertsTitle: "सक्रिय अलर्ट",
    alertHistoryTitle: "पूर्ण अलर्ट इतिहास लॉग",
    testAlertBtn: "परीक्षण अलर्ट",
    clearAlertsBtn: "सभी हटाएं",
    myProduceTitle: "मेरी भंडारित उपज",
    myProduceSubtitle: "उपयुक्त तापमान व नमी सेट करने के लिए अपनी फसल चुनें।",
    paramNoticeTitle: "अनुशंसित / डेमो भंडारण सेटपॉइंट",
    paramNoticeText: "यह सेटपॉइंट केवल प्रोटोटाइप प्रदर्शन के उद्देश्य से मानक संदर्भ हैं।",
    cropTomato: "टमाटर (Tomato)",
    cropCabbage: "पत्तागोभी (Cabbage)",
    cropBeans: "बीन्स / सेम (Beans)",
    cropLeafy: "हरी पत्तेदार सब्जियां (Leafy Veg)",
    cropChilli: "हरी मिर्च (Chilli)",
    cropOther: "अन्य बागवानी फसलें (Other)",
    targetTempLabel: "अनुशंसित तापमान",
    targetHumLabel: "अनुशंसित नमी",
    storedAmount: "भंडारित मात्रा",
    conditionSafe: "🟢 भंडारण स्थिति: उत्तम",
    farmerStorageAdvice: "किसान भाइयों के लिए सलाह",
    farmerStorageAdviceText: "तापमान 0.5°C बढ़ते ही पेल्टियर कूलिंग स्वतः शुरू हो जाती है। दरवाज़ा बंद रखें।",
    systemInfoTitle: "सिस्टम आर्किटेक्चर एवं हार्डवेयर टेलीमेट्री",
    systemInfoSubtitle: "पूर्वोत्तर भारत के दूरदराज पहाड़ी क्षेत्रों के लिए डिज़ाइन किया गया।",
    powerCoolingFlow: "सौर ऊर्जा एवं पेल्टियर कूलिंग प्रवाह",
    powerCoolingFlowDesc: "कंप्रेसर व हानिकारक गैसों के बजाय हमने सॉलिड-स्टेट पेल्टियर मॉड्यूल का उपयोग किया है।",
    sensorFlowTitle: "सेंसर एवं IoT नियंत्रण प्रवाह",
    judgeDemoTitle: "SIH 2026 निर्णायक डेमो केंद्र",
    judgeDemoSubtitle: "वास्तविक परिचालन परिदृश्यों का तुरंत परीक्षण करें।",
    demoBannerTitle: "जजों के लिए प्रदर्शन का उद्देश्य",
    demoBannerText: "दिखाएं कि कैसे हमारा IoT सिस्टम तापमान परिवर्तन व बिजली कटौती को पहचान कर फसल की रक्षा करता है।",
    interactiveScenarios: "इंटरैक्टिव सिमुलेशन नियंत्रण",
    btnNormalOperation: "सामान्य संचालन",
    btnSimHighHumidity: "उच्च नमी परीक्षण",
    btnSimDoorOpen: "दरवाज़ा खुला परीक्षण",
    flowWalkthroughTitle: "जजों के लिए 2 मिनट का अनुशंसित डेमो क्रम",
    step1Title: "चरण 1: सामान्य स्थिति",
    step1Desc: "NORMAL OPERATION दबाएं। 6.4°C तापमान, 84% नमी और सौर ऊर्जा दिखाएं।",
    step2Title: "चरण 2: तापमान में उछाल",
    step2Desc: "SIMULATE TEMP FLUCTUATION दबाएं। तापमान 11.8°C तक बढ़ता देखें।",
    step3Title: "चरण 3: कम बैटरी और बैकअप",
    step3Desc: "SIMULATE LOW BATTERY (25%) करें। फिर SIMULATE POWER FAILURE दबाकर बैटरी बैकअप स्विच दिखाएं।",
    step4Title: "चरण 4: एकाधिक समस्याएं एवं रीसेट",
    step4Desc: "SIMULATE MULTIPLE ISSUES दबाएं। फिर RESET ALL दबाकर तुरंत सामान्य स्थिति लाएं।",
    alertTempRiseTitle: "तापमान में वृद्धि",
    alertTempRiseMsg: "स्टोरेज का तापमान अनुशंसित सीमा से बाहर जा रहा है।",
    alertTempRiseAction: "पेल्टियर कूलिंग पूरी क्षमता पर चल रही है। दरवाज़ा बंद रखें।",
    alertBatLowTitle: "कम बैटरी चेतावनी",
    alertBatLowMsg: "बैटरी स्तर 30% से नीचे गिर गया है।",
    alertBatLowAction: "सोलर चार्जिंग स्रोत जांचें या अनावश्यक बिजली उपयोग घटाएं।",
    alertPowerFailTitle: "बिजली विफलता",
    alertPowerFailMsg: "मुख्य बिजली अनुपलब्ध है। बैटरी बैकअप सक्रिय है।",
    alertPowerFailAction: "कूलिंग बैटरी बैकअप पर चल रही है। बैटरी रनटाइम पर नज़र रखें।",
    alertHumHighTitle: "अत्यधिक नमी",
    alertHumHighMsg: "नमी अनुशंसित भंडारण सीमा से अधिक हो गई है।",
    alertHumHighAction: "उचित वेंटिलेशन सुनिश्चित करें।",
    alertDoorOpenTitle: "दरवाज़ा खुला है",
    alertDoorOpenMsg: "स्टोरेज का दरवाज़ा खुला हुआ है।",
    alertDoorOpenAction: "कूलिंग दक्षता बनाए रखने के लिए कृपया दरवाज़ा बंद करें।",
    alertAllClearTitle: "सभी स्थितियां सामान्य",
    alertAllClearMsg: "आपकी उपज उपयुक्त परिस्थितियों में सुरक्षित है।",
    alertAllClearAction: "सिस्टम सामान्य रूप से सौर ऊर्जा से चार्ज हो रहा है।",
    optConditionOptimal: "🟢 उत्तम (OPTIMAL)",
    optConditionAttention: "🟡 ध्यान दें (ATTENTION REQUIRED)",
    optConditionCritical: "🔴 गंभीर (CRITICAL)",
    navRemote: "रिमोट कंट्रोल",
    remoteControlTitle: "कोल्डकेयर रिमोट कंट्रोल",
    remoteControlSubtitle: "कृषि IoT टेलीमेट्री एवं थर्मोइलेक्ट्रिक स्टोरेज नियंत्रण कक्ष",
    systemStatusTitle: "सिस्टम की वर्तमान स्थिति",
    targetTemp: "लक्षित तापमान",
    chamberFan: "कक्ष वायु परिसंचरण पंखा",
    chamberFanSpeed: "कक्ष पंखे की गति",
    hotSideTempTitle: "हॉट-साइड तापमान",
    heatDissipationFanTitle: "ऊष्मा निष्कासन पंखा",
    heatDissipationTitle: "ऊष्मा निष्कासन (Heat Dissipation)",
    coolingIntensityTitle: "कूलिंग तीव्रता",
    controlModeTitle: "नियंत्रण मोड",
    systemPowerTitle: "मास्टर सिस्टम पावर",
    tempTimerTitle: "तापमान टाइमर",
    btnStartTimer: "टाइमर शुरू करें",
    btnPauseTimer: "रोकें (Pause)",
    btnStopTimer: "टाइमर बंद करें",
    btnSystemOn: "सिस्टम चालू (ON)",
    btnSystemOff: "सिस्टम बंद (OFF)",
    btnAutoMode: "स्वचालित मोड (AUTO)",
    btnManualMode: "मैनुअल मोड (MANUAL)",
    peltierExplainerTitle: "ℹ️ पेल्टियर कूलिंग कैसे कार्य करती है",
    peltierExplainerText: "पेल्टियर मॉड्यूल एक ठंडा सिरा और एक गर्म सिरा बनाता है। ठंडा सिरा भंडारण कक्ष को ठंडा करता है, जबकि गर्म सिरा मॉड्यूल से उत्पन्न ऊष्मा को हीटसिंक और पंखे के माध्यम से बाहर निकालता है। सब्जियों पर गर्म हवा कभी नहीं भेजी जाती।",
    alertHotSideRiseTitle: "हॉट-साइड तापमान में वृद्धि",
    alertHotSideRiseMsg: "पेल्टियर हीटसिंक का तापमान 55°C तक बढ़ गया है। हीट डिसिपेशन पंखा HIGH कर दिया गया है।",
    alertHotSideRiseAction: "अतिरिक्त ऊष्मा बाहर निकाली जा रही है। भंडारण कक्ष सुरक्षित है।"
  }
};

// ==========================================================================
// 2. VEGETABLE STORAGE SETPOINTS (Section 14)
// ==========================================================================
const CROPS = {
  tomato: {
    name: "Tomato",
    icon: "🍅",
    targetTemp: 10.0,
    tempRange: "8.0 – 12.0 °C",
    humRange: "85 – 90 %",
    amount: "120 kg (3 days)"
  },
  cabbage: {
    name: "Cabbage",
    icon: "🥬",
    targetTemp: 2.0,
    tempRange: "1.0 – 4.0 °C",
    humRange: "90 – 95 %",
    amount: "80 kg (2 days)"
  },
  beans: {
    name: "Beans",
    icon: "🫘",
    targetTemp: 6.0,
    tempRange: "4.0 – 7.0 °C",
    humRange: "85 – 90 %",
    amount: "60 kg (2 days)"
  },
  leafy: {
    name: "Leafy Vegetables",
    icon: "🥦",
    targetTemp: 3.0,
    tempRange: "2.0 – 5.0 °C",
    humRange: "90 – 95 %",
    amount: "40 kg (1 day)"
  },
  chilli: {
    name: "Chilli",
    icon: "🌶️",
    targetTemp: 8.0,
    tempRange: "7.0 – 10.0 °C",
    humRange: "80 – 85 %",
    amount: "45 kg (1 day)"
  },
  other: {
    name: "Other Horticultural Produce",
    icon: "🥕",
    targetTemp: 5.0,
    tempRange: "4.0 – 8.0 °C",
    humRange: "85 – 90 %",
    amount: "50 kg (General)"
  }
};

// ==========================================================================
// 3. UNIFIED APPLICATION STATE (Section 28)
// ==========================================================================
const STORAGE_KEY = "coldcare_sih2026_localhost_state";
const BATTERY_ALERT_THRESHOLD = 30; // Strictly 30% per project requirement

const defaultState = {
  currentLang: "en",
  selectedCrop: "tomato",
  selectedCrops: ["tomato"],
  temp: 6.4,
  targetTemp: 6.0,
  humidity: 84.0,
  battery: 78.0,
  solar: 0.82,
  powerAvailable: true,
  coolingActive: true,
  coolingIntensity: "MEDIUM", // 'LOW', 'MEDIUM', 'HIGH'
  chamberFan: true,
  chamberFanSpeed: "MEDIUM", // 'LOW', 'MEDIUM', 'HIGH'
  coldSideActive: true,
  hotSideActive: true,
  hotSideTemp: 42.0,
  heatDissipationFan: "HIGH", // 'OFF', 'LOW', 'MEDIUM', 'HIGH'
  heatDissipationLevel: "HIGH",
  controlMode: "AUTO", // 'AUTO', 'MANUAL'
  systemPower: true,
  doorOpen: false,
  scenario: "normal", // 'normal', 'tempRise', 'batLow', 'powerFail', 'highHum', 'doorOpen', 'multipleIssues', 'hotSideRise'
  timer: {
    active: false,
    paused: false,
    durationSec: 7200,
    remainingSec: 7200,
    targetTemp: 6.0
  },
  alerts: [],
  alertHistory: []
};

// Load or initialize state
let state = { ...defaultState };
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    state = { ...defaultState, ...parsed };
    if (parsed.timer) state.timer = { ...defaultState.timer, ...parsed.timer };
  }
} catch (e) {
  console.warn("Storage load exception:", e);
}

if (!Array.isArray(state.selectedCrops)) {
  state.selectedCrops = state.selectedCrop ? [state.selectedCrop] : ["tomato"];
}
if (state.targetTemp === undefined) state.targetTemp = 6.0;
if (state.coolingIntensity === undefined) state.coolingIntensity = "MEDIUM";
if (state.chamberFan === undefined) state.chamberFan = true;
if (state.chamberFanSpeed === undefined) state.chamberFanSpeed = "MEDIUM";
if (state.coldSideActive === undefined) state.coldSideActive = true;
if (state.hotSideActive === undefined) state.hotSideActive = true;
if (state.hotSideTemp === undefined) state.hotSideTemp = 42.0;
if (state.heatDissipationFan === undefined) state.heatDissipationFan = "HIGH";
if (state.heatDissipationLevel === undefined) state.heatDissipationLevel = "HIGH";
if (state.controlMode === undefined) state.controlMode = "AUTO";
if (state.systemPower === undefined) state.systemPower = true;
if (!state.timer) {
  state.timer = {
    active: false,
    paused: false,
    durationSec: 7200,
    remainingSec: 7200,
    targetTemp: 6.0
  };
}

// Ensure default history has realistic baseline if empty
if (!state.alertHistory || state.alertHistory.length === 0) {
  state.alertHistory = [
    {
      time: "10:15",
      typeKey: "alertAllClearTitle",
      val: "6.4°C · 84%",
      severity: "Normal",
      descKey: "alertAllClearMsg",
      actionKey: "alertAllClearAction",
      status: "Resolved"
    },
    {
      time: "09:30",
      typeKey: "peltierCooling",
      val: "Active",
      severity: "Normal",
      descKey: "pvActive",
      actionKey: "alertAllClearAction",
      status: "Resolved"
    }
  ];
}

// Chart buffer
const chartHistory = {
  times: [],
  temps: [],
  hums: []
};

for (let i = 9; i >= 0; i--) {
  const m = i * 2;
  chartHistory.times.push(`${m}m ago`);
  chartHistory.temps.push(Number((state.temp + Math.sin(i) * 0.25).toFixed(1)));
  chartHistory.hums.push(Math.round(state.humidity + Math.cos(i) * 1.2));
}

// ==========================================================================
// 4. STORAGE & TRANSLATION HELPERS
// ==========================================================================
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      currentLang: state.currentLang,
      selectedCrop: state.selectedCrop,
      selectedCrops: state.selectedCrops,
      temp: state.temp,
      targetTemp: state.targetTemp,
      humidity: state.humidity,
      battery: state.battery,
      solar: state.solar,
      powerAvailable: state.powerAvailable,
      coolingActive: state.coolingActive,
      coolingIntensity: state.coolingIntensity,
      chamberFan: state.chamberFan,
      chamberFanSpeed: state.chamberFanSpeed,
      coldSideActive: state.coldSideActive,
      hotSideActive: state.hotSideActive,
      hotSideTemp: state.hotSideTemp,
      heatDissipationFan: state.heatDissipationFan,
      heatDissipationLevel: state.heatDissipationLevel,
      controlMode: state.controlMode,
      systemPower: state.systemPower,
      doorOpen: state.doorOpen,
      scenario: state.scenario,
      timer: state.timer,
      alerts: state.alerts.slice(0, 10),
      alertHistory: state.alertHistory.slice(0, 20)
    }));
  } catch (e) {
    console.warn("Storage save failed:", e);
  }
}

function getI18nText(key) {
  const lang = state.currentLang || "en";
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  return dict[key] || TRANSLATIONS.en[key] || key;
}

function getTimeString() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// ==========================================================================
// 5. ALERT MANAGER (Debounced, No Duplicates, Full Action Guidance)
// ==========================================================================
function addSystemAlert(typeKey, descKey, actionKey, valString, severity = "Warning") {
  // Check if active alert of this type already exists to prevent duplicate spamming
  const existing = state.alerts.find(a => a.typeKey === typeKey);
  if (existing) {
    existing.val = valString;
    existing.time = getTimeString();
    saveState();
    renderAlerts();
    return;
  }

  const alertItem = {
    id: "alert-" + Date.now(),
    typeKey: typeKey,
    descKey: descKey,
    actionKey: actionKey,
    val: valString,
    severity: severity, // 'Normal', 'Warning', 'Critical'
    time: getTimeString(),
    status: "Active"
  };

  state.alerts.unshift(alertItem);
  state.alertHistory.unshift({ ...alertItem });
  if (state.alertHistory.length > 25) state.alertHistory = state.alertHistory.slice(0, 25);

  saveState();
  renderAlerts();
}

function resolveSystemAlert(typeKey) {
  state.alerts = state.alerts.filter(a => a.typeKey !== typeKey);
  state.alertHistory.forEach(h => {
    if (h.typeKey === typeKey && h.status === "Active") {
      h.status = "Resolved";
    }
  });
  saveState();
  renderAlerts();
}

function clearAllAlerts() {
  state.alerts = [];
  state.alertHistory.forEach(h => h.status = "Resolved");
  saveState();
  renderAlerts();
  updateStorageCondition();
}

// ==========================================================================
// 6. SIMULATION TICK & HARDWARE BEHAVIOR (Section 14 & 28)
// ==========================================================================
function simulateTick() {
  const activeCrops = (state.selectedCrops && state.selectedCrops.length > 0)
    ? state.selectedCrops.map(k => CROPS[k]).filter(Boolean)
    : [CROPS[state.selectedCrop] || CROPS.tomato];
  const target = Math.min(...activeCrops.map(c => c.targetTemp));

  // Handle Master System Power
  if (!state.systemPower) {
    state.coolingActive = false;
    state.coldSideActive = false;
    state.hotSideActive = false;
    state.chamberFan = false;
    state.heatDissipationFan = "OFF";
    state.heatDissipationLevel = "OFF";
    state.hotSideTemp = Math.max(28.0, Number((state.hotSideTemp - 0.5).toFixed(1)));
    state.temp = Number(Math.min(18.0, state.temp + 0.1).toFixed(1));
    renderAll();
    saveState();
    return;
  }

  // Timer countdown
  if (state.timer && state.timer.active && !state.timer.paused) {
    state.timer.remainingSec = Math.max(0, state.timer.remainingSec - 3);
    if (state.timer.remainingSec <= 0) {
      state.timer.active = false;
      addSystemAlert("alertTimerDoneTitle", "alertTimerDoneMsg", "alertTimerDoneAction", "00:00:00", "Normal");
    }
  }

  if (state.scenario === "hotSideRise") {
    // Hot-Side Elevated Simulation: Hot-side rises to 55°C, Heat Dissipation fan boosts to HIGH, chamber NOT heated
    if (state.hotSideTemp < 55.0) {
      state.hotSideTemp = Number(Math.min(55.0, state.hotSideTemp + 2.5).toFixed(1));
    }
    state.heatDissipationFan = "HIGH";
    state.heatDissipationLevel = "HIGH";
    state.hotSideActive = true;
    addSystemAlert("alertHotSideRiseTitle", "alertHotSideRiseMsg", "alertHotSideRiseAction", `${state.hotSideTemp.toFixed(1)} °C`, "Warning");
  } else if (state.scenario === "tempRise") {
    // Staged fluctuation toward 11.8°C
    if (state.temp < 11.8) {
      state.temp = Number((state.temp + 0.4).toFixed(1));
    }
    state.coolingActive = true;
    state.coldSideActive = true;
    state.hotSideActive = true;
    state.coolingIntensity = "HIGH";
    state.heatDissipationFan = "HIGH";
    state.heatDissipationLevel = "HIGH";
    state.hotSideTemp = Number(Math.min(48.0, state.hotSideTemp + 0.4).toFixed(1));
    addSystemAlert("alertTempRiseTitle", "alertTempRiseMsg", "alertTempRiseAction", `${state.temp.toFixed(1)} °C`, "Critical");
  } else if (state.scenario === "batLow") {
    // Battery MUST be 25%
    state.battery = 25.0;
    addSystemAlert("alertBatLowTitle", "alertBatLowMsg", "alertBatLowAction", "25%", "Critical");
  } else if (state.scenario === "powerFail") {
    // Solar = 0, Power = FAILED, Battery = Backup Active, Peltier = ON
    state.powerAvailable = false;
    state.solar = 0.0;
    state.coolingActive = true;
    state.coldSideActive = true;
    state.hotSideActive = true;
    state.battery = Math.max(10.0, Number((state.battery - 0.2).toFixed(1)));
    addSystemAlert("alertPowerFailTitle", "alertPowerFailMsg", "alertPowerFailAction", "Grid Down · 0 kW", "Critical");
  } else if (state.scenario === "highHum") {
    if (state.humidity < 96) state.humidity = Math.min(96, state.humidity + 1.5);
    addSystemAlert("alertHumHighTitle", "alertHumHighMsg", "alertHumHighAction", `${Math.round(state.humidity)}%`, "Warning");
  } else if (state.scenario === "doorOpen") {
    state.doorOpen = true;
    state.temp = Math.min(10.5, Number((state.temp + 0.15).toFixed(1)));
    addSystemAlert("alertDoorOpenTitle", "alertDoorOpenMsg", "alertDoorOpenAction", "Open", "Warning");
  } else if (state.scenario === "multipleIssues") {
    state.temp = 11.8;
    state.humidity = 96.0;
    state.battery = 25.0;
    state.doorOpen = true;
    state.powerAvailable = false;
    state.solar = 0.0;
    state.coolingActive = true;
    state.coldSideActive = true;
    state.hotSideActive = true;
    state.coolingIntensity = "HIGH";
    state.heatDissipationFan = "HIGH";
    state.heatDissipationLevel = "HIGH";
    state.hotSideTemp = 49.5;
    addSystemAlert("alertTempRiseTitle", "alertTempRiseMsg", "alertTempRiseAction", "11.8 °C", "Critical");
    addSystemAlert("alertBatLowTitle", "alertBatLowMsg", "alertBatLowAction", "25%", "Critical");
    addSystemAlert("alertPowerFailTitle", "alertPowerFailMsg", "alertPowerFailAction", "0 kW Solar", "Critical");
    addSystemAlert("alertHumHighTitle", "alertHumHighMsg", "alertHumHighAction", "96%", "Warning");
    addSystemAlert("alertDoorOpenTitle", "alertDoorOpenMsg", "alertDoorOpenAction", "Open", "Warning");
  } else {
    // Normal Operation Float
    if (state.powerAvailable) {
      state.solar = Number((0.82 + Math.sin(Date.now() / 12000) * 0.08).toFixed(2));
      if (state.battery < 82) {
        state.battery = Number(Math.min(82, state.battery + 0.05).toFixed(1));
      }
    } else {
      state.solar = 0.0;
      state.battery = Math.max(5.0, Number((state.battery - 0.15).toFixed(1)));
    }

    // Target consideration: user targetTemp vs crop target
    const effectiveTarget = (state.controlMode === "MANUAL" && typeof state.targetTemp === "number")
      ? state.targetTemp
      : (state.targetTemp || target);

    // AUTO Mode: Closed-loop regulation of cooling, fans & hot-side heat dissipation
    if (state.controlMode === "AUTO") {
      const diff = state.temp - effectiveTarget;
      if (diff > 1.5) {
        state.coolingActive = true;
        state.coolingIntensity = "HIGH";
        state.chamberFan = true;
        state.chamberFanSpeed = "HIGH";
        state.heatDissipationFan = "HIGH";
        state.heatDissipationLevel = "HIGH";
        state.coldSideActive = true;
        state.hotSideActive = true;
        state.temp = Number((state.temp - 0.25).toFixed(1));
        state.hotSideTemp = Number(Math.min(46.0, state.hotSideTemp + 0.3).toFixed(1));
      } else if (diff > 0.3) {
        state.coolingActive = true;
        state.coolingIntensity = "MEDIUM";
        state.chamberFan = true;
        state.chamberFanSpeed = "MEDIUM";
        state.heatDissipationFan = "MEDIUM";
        state.heatDissipationLevel = "MEDIUM";
        state.coldSideActive = true;
        state.hotSideActive = true;
        state.temp = Number((state.temp - 0.12).toFixed(1));
        state.hotSideTemp = Number(Math.min(42.5, state.hotSideTemp + 0.1).toFixed(1));
      } else if (diff < -0.3) {
        state.coolingActive = false;
        state.coldSideActive = false;
        state.hotSideActive = false;
        state.coolingIntensity = "LOW";
        state.chamberFanSpeed = "LOW";
        state.heatDissipationFan = "LOW";
        state.heatDissipationLevel = "LOW";
        state.temp = Number((state.temp + 0.06).toFixed(1));
        state.hotSideTemp = Number(Math.max(34.0, state.hotSideTemp - 0.2).toFixed(1));
      } else {
        // Near target
        state.coolingActive = true;
        state.coolingIntensity = "LOW";
        state.coldSideActive = true;
        state.hotSideActive = true;
        state.chamberFanSpeed = "MEDIUM";
        state.heatDissipationFan = "MEDIUM";
        state.heatDissipationLevel = "MEDIUM";
        state.hotSideTemp = 41.5;
      }
    } else {
      // MANUAL Mode: obey user parameters
      state.coldSideActive = state.coolingActive;
      state.hotSideActive = state.coolingActive;
      if (state.coolingActive) {
        const coolingDelta = state.coolingIntensity === "HIGH" ? 0.22 : (state.coolingIntensity === "MEDIUM" ? 0.12 : 0.05);
        if (state.temp > effectiveTarget) {
          state.temp = Number((state.temp - coolingDelta).toFixed(1));
        } else {
          state.temp = Number((state.temp + (state.doorOpen ? 0.2 : 0.04)).toFixed(1));
        }
        const targetHot = state.coolingIntensity === "HIGH" ? 46.0 : (state.coolingIntensity === "MEDIUM" ? 42.0 : 37.0);
        state.hotSideTemp = Number((state.hotSideTemp + (targetHot - state.hotSideTemp) * 0.1).toFixed(1));
      } else {
        state.temp = Number((state.temp + (state.doorOpen ? 0.25 : 0.08)).toFixed(1));
        state.hotSideTemp = Number(Math.max(30.0, state.hotSideTemp - 0.4).toFixed(1));
      }
    }

    // Dissipation fan responds if hot-side temperature gets elevated
    if (state.hotSideTemp >= 55.0) {
      state.heatDissipationFan = "HIGH";
      state.heatDissipationLevel = "HIGH";
      addSystemAlert("alertHotSideRiseTitle", "alertHotSideRiseMsg", "alertHotSideRiseAction", `${state.hotSideTemp.toFixed(1)} °C`, "Warning");
    }

    state.humidity = Math.round(state.humidity + (85 - state.humidity) * 0.05 + (Math.random() * 0.6 - 0.3));

    // Check battery < 30% automatic alert during natural discharge
    if (state.battery < BATTERY_ALERT_THRESHOLD) {
      addSystemAlert("alertBatLowTitle", "alertBatLowMsg", "alertBatLowAction", `${Math.round(state.battery)}%`, "Critical");
    }
  }

  // Push to chart buffer
  chartHistory.times.push(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  chartHistory.temps.push(state.temp);
  chartHistory.hums.push(Math.round(state.humidity));
  if (chartHistory.times.length > 12) {
    chartHistory.times.shift();
    chartHistory.temps.shift();
    chartHistory.hums.shift();
  }

  renderAll();
  saveState();
}

// ==========================================================================
// 7. STORAGE CONDITION CALCULATION (Hero Card)
// ==========================================================================
function updateStorageCondition() {
  const activeCrops = (state.selectedCrops && state.selectedCrops.length > 0)
    ? state.selectedCrops.map(k => CROPS[k]).filter(Boolean)
    : [CROPS[state.selectedCrop] || CROPS.tomato];
  const maxSafeTemp = Math.min(...activeCrops.map(c => c.targetTemp)) + 1.5;
  const isTempCritical = state.temp >= 10.0;
  const isTempWarning = state.temp > maxSafeTemp;
  const isBatCritical = state.battery < BATTERY_ALERT_THRESHOLD;
  const isPowerDown = !state.powerAvailable;
  const isDoorOpen = state.doorOpen;
  const isHumCritical = state.humidity >= 95;

  const heroCard = document.getElementById("heroCondition");
  const badge = document.getElementById("conditionBadge");
  const title = document.getElementById("heroTitle");
  const subtitle = document.getElementById("heroSubtitle");
  const icon = document.getElementById("heroIcon");

  if (!heroCard || !badge || !title || !subtitle || !icon) return;

  heroCard.classList.remove("state-warning", "state-critical");

  if (isTempCritical || (isPowerDown && isBatCritical) || state.scenario === "multipleIssues") {
    heroCard.classList.add("state-critical");
    badge.textContent = getI18nText("optConditionCritical");
    title.textContent = getI18nText("heroCriticalTitle");
    subtitle.textContent = getI18nText("heroCriticalSubtitle");
    icon.textContent = "🚨";
  } else if (isBatCritical || isPowerDown || isDoorOpen || isTempWarning || isHumCritical) {
    heroCard.classList.add("state-warning");
    badge.textContent = getI18nText("optConditionAttention");
    title.textContent = getI18nText("heroAttentionTitle");
    subtitle.textContent = getI18nText("heroAttentionSubtitle");
    icon.textContent = "⚠️";
  } else {
    badge.textContent = getI18nText("optConditionOptimal");
    title.textContent = getI18nText("heroSafeTitle");
    subtitle.textContent = getI18nText("heroSafeSubtitle");
    icon.textContent = "❄️";
  }
}

function renderAll() {
  renderSensorCards();
  renderAlerts();
  updateStorageCondition();
  renderSystemHardware();
  renderRemoteControl();
  drawCanvasChart();
}

function renderRemoteControl() {
  // 1. Remote System Status Display
  const rcTemp = document.getElementById("rcValTemp");
  const rcTarget = document.getElementById("rcValTarget");
  const rcHum = document.getElementById("rcValHum");
  const rcBat = document.getElementById("rcValBat");
  const rcSolar = document.getElementById("rcValSolar");
  const rcStorageStatus = document.getElementById("rcStorageStatus");
  const rcStorageBadge = document.getElementById("rcStorageBadge");
  const rcPeltierStatus = document.getElementById("rcPeltierStatus");
  const rcColdSideStatus = document.getElementById("rcColdSideStatus");
  const rcChamberFanStatus = document.getElementById("rcChamberFanStatus");
  const rcChamberFanSpeed = document.getElementById("rcChamberFanSpeed");
  const rcHotSideStatus = document.getElementById("rcHotSideStatus");
  const rcHotSideTemp = document.getElementById("rcHotSideTemp");
  const rcHeatDissipationFan = document.getElementById("rcHeatDissipationFan");
  const rcMode = document.getElementById("rcMode");
  const rcTimer = document.getElementById("rcTimer");
  const rcCondition = document.getElementById("rcCondition");

  if (rcTemp) rcTemp.textContent = `${state.temp.toFixed(1)}°C`;
  if (rcTarget) rcTarget.textContent = `${(state.targetTemp || 6.0).toFixed(1)}°C`;
  if (rcHum) rcHum.textContent = `${Math.round(state.humidity)}%`;
  if (rcBat) rcBat.textContent = `${Math.round(state.battery)}%`;
  if (rcSolar) {
    rcSolar.textContent = (!state.powerAvailable || state.solar === 0) ? "Battery Backup" : "Charging Active";
  }

  if (rcStorageStatus) {
    rcStorageStatus.textContent = state.systemPower ? "ONLINE 🟢" : "OFFLINE 🔴 (STANDBY)";
  }
  if (rcStorageBadge) {
    rcStorageBadge.className = state.systemPower ? "status-pill good" : "status-pill bad";
    rcStorageBadge.textContent = state.systemPower ? "ONLINE" : "STANDBY (OFF)";
  }

  if (rcPeltierStatus) {
    rcPeltierStatus.textContent = state.coolingActive ? "ON" : "OFF";
    rcPeltierStatus.className = state.coolingActive ? "status-pill good" : "status-pill warn";
  }
  if (rcColdSideStatus) {
    rcColdSideStatus.textContent = state.coldSideActive ? "ACTIVE" : "INACTIVE";
    rcColdSideStatus.className = state.coldSideActive ? "status-pill good" : "status-pill warn";
  }
  if (rcChamberFanStatus) {
    rcChamberFanStatus.textContent = state.chamberFan ? "ON" : "OFF";
    rcChamberFanStatus.className = state.chamberFan ? "status-pill good" : "status-pill warn";
  }
  if (rcChamberFanSpeed) {
    rcChamberFanSpeed.textContent = state.chamberFan ? state.chamberFanSpeed : "DISABLED (OFF)";
  }

  if (rcHotSideStatus) {
    rcHotSideStatus.textContent = state.hotSideActive ? "ACTIVE" : "INACTIVE";
    rcHotSideStatus.className = state.hotSideActive ? "status-pill good" : "status-pill warn";
  }
  if (rcHotSideTemp) {
    rcHotSideTemp.textContent = `${state.hotSideTemp.toFixed(1)}°C`;
    if (state.hotSideTemp >= 55.0) {
      rcHotSideTemp.style.color = "var(--red)";
    } else if (state.hotSideTemp >= 48.0) {
      rcHotSideTemp.style.color = "var(--orange)";
    } else {
      rcHotSideTemp.style.color = "var(--g-dark)";
    }
  }
  if (rcHeatDissipationFan) {
    rcHeatDissipationFan.textContent = state.heatDissipationFan;
  }

  if (rcMode) {
    rcMode.textContent = state.controlMode === "AUTO" ? "🟢 AUTO" : "🟡 MANUAL";
  }

  if (rcTimer) {
    if (state.timer && state.timer.active) {
      const h = Math.floor(state.timer.remainingSec / 3600);
      const m = Math.floor((state.timer.remainingSec % 3600) / 60);
      const s = state.timer.remainingSec % 60;
      const fmt = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      rcTimer.textContent = state.timer.paused ? `${fmt} (Paused)` : fmt;
    } else {
      rcTimer.textContent = "Not Set";
    }
  }

  if (rcCondition) {
    const isTempCritical = state.temp >= 10.0;
    const isBatCritical = state.battery < BATTERY_ALERT_THRESHOLD;
    const isPowerDown = !state.powerAvailable;
    if (isTempCritical || (isPowerDown && isBatCritical) || state.scenario === "multipleIssues") {
      rcCondition.textContent = "CRITICAL 🔴";
    } else if (isBatCritical || isPowerDown || state.doorOpen || state.temp > 8.0) {
      rcCondition.textContent = "ATTENTION REQUIRED 🟡";
    } else {
      rcCondition.textContent = "OPTIMAL 🟢";
    }
  }

  // 2. Synchronize Interactive Input Controls
  const rcTargetDisplay = document.getElementById("rcTargetDisplay");
  const rcTargetSlider = document.getElementById("rcTargetSlider");
  if (rcTargetDisplay) rcTargetDisplay.textContent = `${(state.targetTemp || 6.0).toFixed(1)}°C`;
  if (rcTargetSlider) rcTargetSlider.value = state.targetTemp || 6.0;

  // Peltier Power Buttons
  const btnPeltierOn = document.getElementById("btnPeltierOn");
  const btnPeltierOff = document.getElementById("btnPeltierOff");
  if (btnPeltierOn) {
    if (state.coolingActive) btnPeltierOn.classList.add("active");
    else btnPeltierOn.classList.remove("active");
  }
  if (btnPeltierOff) {
    if (!state.coolingActive) btnPeltierOff.classList.add("active");
    else btnPeltierOff.classList.remove("active");
  }

  // Cooling Intensity Buttons
  ["LOW", "MEDIUM", "HIGH"].forEach(lvl => {
    const btn = document.getElementById(`btnIntensity${lvl}`);
    if (btn) {
      if (state.coolingIntensity === lvl) btn.classList.add("active");
      else btn.classList.remove("active");
    }
  });

  // Chamber Fan Power & Speeds
  const btnFanOn = document.getElementById("btnChamberFanOn");
  const btnFanOff = document.getElementById("btnChamberFanOff");
  if (btnFanOn) {
    if (state.chamberFan) btnFanOn.classList.add("active");
    else btnFanOn.classList.remove("active");
  }
  if (btnFanOff) {
    if (!state.chamberFan) btnFanOff.classList.add("active");
    else btnFanOff.classList.remove("active");
  }

  ["LOW", "MEDIUM", "HIGH"].forEach(spd => {
    const btn = document.getElementById(`btnFanSpeed${spd}`);
    if (btn) {
      if (state.chamberFan && state.chamberFanSpeed === spd) btn.classList.add("active");
      else btn.classList.remove("active");
      btn.disabled = !state.chamberFan;
      btn.style.opacity = state.chamberFan ? "1" : "0.45";
      btn.style.cursor = state.chamberFan ? "pointer" : "not-allowed";
    }
  });

  // Heat Dissipation Fan Buttons
  ["OFF", "LOW", "MEDIUM", "HIGH"].forEach(lvl => {
    const btn = document.getElementById(`btnDissipation${lvl}`);
    if (btn) {
      if (state.heatDissipationFan === lvl) btn.classList.add("active");
      else btn.classList.remove("active");
    }
  });

  // Hot Side Temperature Elevated Warning Card
  const hotSideElevatedNotice = document.getElementById("hotSideElevatedNotice");
  if (hotSideElevatedNotice) {
    hotSideElevatedNotice.style.display = state.hotSideTemp >= 55.0 ? "block" : "none";
  }

  // Timer Control Panel Elements
  const timerTargetDisplay = document.getElementById("timerTargetDisplay");
  if (timerTargetDisplay) timerTargetDisplay.textContent = `${(state.timer ? state.timer.targetTemp : 6.0).toFixed(1)}°C`;

  const timerDurationDisplay = document.getElementById("timerDurationDisplay");
  if (timerDurationDisplay && state.timer) {
    const hrs = Math.round((state.timer.durationSec / 3600) * 10) / 10;
    timerDurationDisplay.textContent = `${hrs} Hours`;
  }

  const timerCountdownBox = document.getElementById("timerCountdownBox");
  const timerLiveClock = document.getElementById("timerLiveClock");
  const timerActiveTarget = document.getElementById("timerActiveTarget");
  const timerActiveStatus = document.getElementById("timerActiveStatus");
  const btnStartTimer = document.getElementById("btnStartTimer");
  const btnPauseTimer = document.getElementById("btnPauseTimer");
  const btnStopTimer = document.getElementById("btnStopTimer");

  if (timerCountdownBox) {
    timerCountdownBox.style.display = (state.timer && state.timer.active) ? "block" : "none";
  }
  if (btnStartTimer) {
    btnStartTimer.style.display = (state.timer && state.timer.active) ? "none" : "inline-block";
  }
  if (btnPauseTimer) {
    btnPauseTimer.style.display = (state.timer && state.timer.active) ? "inline-block" : "none";
    btnPauseTimer.textContent = (state.timer && state.timer.paused) ? "RESUME" : "PAUSE";
  }
  if (btnStopTimer) {
    btnStopTimer.style.display = (state.timer && state.timer.active) ? "inline-block" : "none";
  }

  if (state.timer && state.timer.active) {
    const h = Math.floor(state.timer.remainingSec / 3600);
    const m = Math.floor((state.timer.remainingSec % 3600) / 60);
    const s = state.timer.remainingSec % 60;
    const fmt = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    if (timerLiveClock) timerLiveClock.textContent = fmt;
    if (timerActiveTarget) timerActiveTarget.textContent = `${state.timer.targetTemp.toFixed(1)}°C`;
    if (timerActiveStatus) timerActiveStatus.textContent = state.timer.paused ? "Maintaining Paused" : "Maintaining Target Temperature";
  }

  // Control Mode Buttons
  const btnModeAuto = document.getElementById("btnModeAuto");
  const btnModeManual = document.getElementById("btnModeManual");
  if (btnModeAuto) {
    if (state.controlMode === "AUTO") btnModeAuto.classList.add("active");
    else btnModeAuto.classList.remove("active");
  }
  if (btnModeManual) {
    if (state.controlMode === "MANUAL") btnModeManual.classList.add("active");
    else btnModeManual.classList.remove("active");
  }

  // Master System Power Card & Buttons (ALWAYS INTERACTIVE)
  const rcMasterPowerCard = document.getElementById("rcMasterPowerCard");
  const masterPowerStatusBadge = document.getElementById("masterPowerStatusBadge");
  const rcStandbyNotice = document.getElementById("rcStandbyNotice");
  const btnSystemOn = document.getElementById("btnSystemOn");
  const btnSystemOff = document.getElementById("btnSystemOff");

  if (rcMasterPowerCard) {
    if (state.systemPower) rcMasterPowerCard.classList.remove("is-off");
    else rcMasterPowerCard.classList.add("is-off");
  }

  if (masterPowerStatusBadge) {
    if (state.systemPower) {
      masterPowerStatusBadge.className = "status-pill good";
      masterPowerStatusBadge.textContent = "SYSTEM ACTIVE 🟢";
    } else {
      masterPowerStatusBadge.className = "status-pill warn";
      masterPowerStatusBadge.textContent = "STANDBY / POWER OFF 🔴";
    }
  }

  if (rcStandbyNotice) {
    rcStandbyNotice.style.display = state.systemPower ? "none" : "flex";
  }

  if (btnSystemOn) {
    btnSystemOn.disabled = false;
    btnSystemOn.style.pointerEvents = "auto";
    btnSystemOn.style.cursor = "pointer";
    if (state.systemPower) {
      btnSystemOn.classList.add("active");
      btnSystemOn.classList.remove("standby-prompt");
    } else {
      btnSystemOn.classList.remove("active");
      btnSystemOn.classList.add("standby-prompt");
    }
  }

  if (btnSystemOff) {
    btnSystemOff.disabled = false;
    btnSystemOff.style.pointerEvents = "auto";
    btnSystemOff.style.cursor = "pointer";
    if (!state.systemPower) {
      btnSystemOff.classList.add("active");
    } else {
      btnSystemOff.classList.remove("active");
    }
  }

  // Actuator Container Inactivation (ONLY dims & inactivates sub-assemblies inside #rcInteractiveControls)
  const rcControlsContainer = document.getElementById("rcInteractiveControls");
  if (rcControlsContainer) {
    if (!state.systemPower) {
      rcControlsContainer.style.opacity = "0.45";
      rcControlsContainer.style.pointerEvents = "none";
    } else {
      rcControlsContainer.style.opacity = "1";
      rcControlsContainer.style.pointerEvents = "auto";
    }
  }
}

function renderSensorCards() {
  const activeCrops = (state.selectedCrops && state.selectedCrops.length > 0)
    ? state.selectedCrops.map(k => CROPS[k]).filter(Boolean)
    : [CROPS[state.selectedCrop] || CROPS.tomato];
  const primaryCrop = activeCrops[0] || CROPS.tomato;
  const minSafeTemp = Math.min(...activeCrops.map(c => c.targetTemp));
  const maxSafeTemp = minSafeTemp + 1.5;

  // 1. Temperature Card
  const valTemp = document.getElementById("valTemp");
  const valTargetRange = document.getElementById("valTargetRange");
  const badgeTemp = document.getElementById("badgeTemp");
  const cardTemp = document.getElementById("cardTemp");

  if (valTemp) valTemp.textContent = `${state.temp.toFixed(1)} °C`;
  if (valTargetRange) {
    if (activeCrops.length > 1) {
      valTargetRange.textContent = `${minSafeTemp.toFixed(1)} – 8.0 °C (Multi-Crop)`;
    } else {
      valTargetRange.textContent = primaryCrop.tempRange;
    }
  }

  if (cardTemp && badgeTemp) {
    cardTemp.classList.remove("card-warning", "card-critical");
    badgeTemp.classList.remove("good", "warn", "bad");

    if (state.temp >= 10.0) {
      cardTemp.classList.add("card-critical");
      badgeTemp.classList.add("bad");
      badgeTemp.textContent = getI18nText("statusCritical");
    } else if (state.temp > maxSafeTemp) {
      cardTemp.classList.add("card-warning");
      badgeTemp.classList.add("warn");
      badgeTemp.textContent = getI18nText("statusWarning");
    } else {
      badgeTemp.classList.add("good");
      badgeTemp.textContent = getI18nText("statusNormal");
    }
  }

  // 2. Humidity Card
  const valHum = document.getElementById("valHum");
  const valHumTargetRange = document.getElementById("valHumTargetRange");
  const badgeHum = document.getElementById("badgeHum");
  const cardHum = document.getElementById("cardHum");

  if (valHum) valHum.textContent = `${Math.round(state.humidity)} %`;
  if (valHumTargetRange) {
    if (activeCrops.length > 1) {
      valHumTargetRange.textContent = "85 – 95 % (Multi-Crop)";
    } else {
      valHumTargetRange.textContent = primaryCrop.humRange;
    }
  }

  if (cardHum && badgeHum) {
    cardHum.classList.remove("card-warning", "card-critical");
    badgeHum.classList.remove("good", "warn", "bad");

    if (state.humidity >= 95) {
      cardHum.classList.add("card-critical");
      badgeHum.classList.add("bad");
      badgeHum.textContent = getI18nText("statusCritical");
    } else if (state.humidity > 90) {
      cardHum.classList.add("card-warning");
      badgeHum.classList.add("warn");
      badgeHum.textContent = getI18nText("statusWarning");
    } else {
      badgeHum.classList.add("good");
      badgeHum.textContent = getI18nText("statusNormal");
    }
  }

  // 3. Battery Card (CRITICAL REQUIREMENT: Battery states derived cleanly)
  const valBat = document.getElementById("valBat");
  const valBatBar = document.getElementById("valBatBar");
  const valBatFlow = document.getElementById("valBatFlow");
  const badgeBat = document.getElementById("badgeBat");
  const cardBat = document.getElementById("cardBat");

  const rBat = Math.round(state.battery);
  if (valBat) valBat.textContent = `${rBat} %`;

  if (valBatBar) {
    valBatBar.style.width = `${Math.max(5, Math.min(100, rBat))}%`;
    valBatBar.classList.remove("state-warn", "state-crit");
    if (rBat < BATTERY_ALERT_THRESHOLD) {
      valBatBar.classList.add("state-crit");
    } else if (rBat <= 50) {
      valBatBar.classList.add("state-warn");
    }
  }

  if (cardBat && badgeBat) {
    cardBat.classList.remove("card-warning", "card-critical");
    badgeBat.classList.remove("good", "warn", "bad");

    if (rBat < BATTERY_ALERT_THRESHOLD) {
      cardBat.classList.add("card-critical");
      badgeBat.classList.add("bad");
      badgeBat.textContent = getI18nText("statusLow");
      if (valBatFlow) valBatFlow.textContent = "Low Battery · Please Check";
    } else if (rBat <= 50) {
      cardBat.classList.add("card-warning");
      badgeBat.classList.add("warn");
      badgeBat.textContent = getI18nText("statusWarning");
      if (valBatFlow) valBatFlow.textContent = state.powerAvailable ? "Solar Float Charging" : "Discharging on Backup";
    } else {
      badgeBat.classList.add("good");
      badgeBat.textContent = getI18nText("statusNormal");
      if (valBatFlow) valBatFlow.textContent = state.powerAvailable ? "Solar Charging Active" : "Discharging on Backup";
    }
  }

  // 4. Solar Power Card
  const valSolar = document.getElementById("valSolar");
  const valSolarSource = document.getElementById("valSolarSource");
  const badgeSolar = document.getElementById("badgeSolar");

  if (valSolar) valSolar.textContent = `${state.solar.toFixed(2)} kW`;
  if (badgeSolar) {
    badgeSolar.classList.remove("good", "warn", "bad");
    if (state.solar === 0.0 || !state.powerAvailable) {
      badgeSolar.classList.add("bad");
      badgeSolar.textContent = "Offline (0 kW)";
      if (valSolarSource) valSolarSource.textContent = "Solar Unavailable";
    } else {
      badgeSolar.classList.add("good");
      badgeSolar.textContent = getI18nText("solarActive");
      if (valSolarSource) valSolarSource.textContent = "Source: Solar PV Array";
    }
  }

  // 5. Peltier Cooling Card
  const valCooling = document.getElementById("valCooling");
  const valCoolingSource = document.getElementById("valCoolingSource");
  const badgeCooling = document.getElementById("badgeCooling");

  if (valCooling) {
    valCooling.textContent = state.coolingActive ? "PELTIER: ON" : "PELTIER: OFF";
  }
  if (badgeCooling) {
    badgeCooling.className = state.coolingActive ? "status-pill good" : "status-pill warn";
    badgeCooling.textContent = state.coolingActive ? "Active" : "Target Reached";
  }
  if (valCoolingSource) {
    valCoolingSource.textContent = state.powerAvailable ? "Source: Solar Powered" : "Source: BATTERY BACKUP";
  }

  // 6. Power System Card
  const valPower = document.getElementById("valPower");
  const valPowerSub = document.getElementById("valPowerSub");
  const badgePower = document.getElementById("badgePower");

  if (valPower) {
    valPower.textContent = state.powerAvailable ? "MAIN POWER: AVAILABLE" : "POWER FAILURE: BATTERY BACKUP ACTIVE";
    valPower.style.fontSize = state.powerAvailable ? "20px" : "16px";
    valPower.style.color = state.powerAvailable ? "var(--g-dark)" : "var(--red)";
  }
  if (badgePower) {
    badgePower.className = state.powerAvailable ? "status-pill good" : "status-pill bad";
    badgePower.textContent = state.powerAvailable ? "Available" : "Failed";
  }
  if (valPowerSub) {
    valPowerSub.textContent = state.powerAvailable ? "Grid + Solar PV Online" : "LiFePO₄ Backup System Active";
  }

  // 7. Door Sensor Card
  const valDoor = document.getElementById("valDoor");
  const valDoorSub = document.getElementById("valDoorSub");
  const badgeDoor = document.getElementById("badgeDoor");

  if (valDoor) valDoor.textContent = state.doorOpen ? "DOOR OPEN" : "DOOR CLOSED";
  if (badgeDoor) {
    badgeDoor.className = state.doorOpen ? "status-pill bad" : "status-pill good";
    badgeDoor.textContent = state.doorOpen ? "Open" : "Closed";
  }
  if (valDoorSub) {
    valDoorSub.textContent = state.doorOpen ? "Warning: Door Seal Broken" : "Magnetic Sensor: Sealed";
  }

  // Header Crop Badge
  const headerCropIcon = document.getElementById("headerCropIcon");
  const headerCropName = document.getElementById("headerCropName");
  if (headerCropIcon) {
    if (activeCrops.length > 1) {
      headerCropIcon.textContent = "🧺";
    } else {
      headerCropIcon.textContent = primaryCrop.icon;
    }
  }
  if (headerCropName) {
    if (activeCrops.length > 1) {
      const names = (state.selectedCrops || []).map(k => {
        const cropKey = "crop" + k.charAt(0).toUpperCase() + k.slice(1);
        return getI18nText(cropKey);
      }).join(", ");
      headerCropName.textContent = `${activeCrops.length} Crops: ${names}`;
    } else if (activeCrops.length === 1) {
      const singleKey = state.selectedCrops[0] || state.selectedCrop || "tomato";
      const cropKey = "crop" + singleKey.charAt(0).toUpperCase() + singleKey.slice(1);
      headerCropName.textContent = getI18nText(cropKey);
    } else {
      headerCropName.textContent = "No Produce Selected";
    }
  }

  // Header Alert Pill
  const headerAlertCount = document.getElementById("headerAlertCount");
  if (headerAlertCount) headerAlertCount.textContent = state.alerts.length;
}

function renderAlerts() {
  const container = document.getElementById("alertsList");
  const historyBody = document.getElementById("alertHistoryTableBody");

  // Active Alerts
  if (container) {
    if (state.alerts.length === 0) {
      container.innerHTML = `
        <div class="alert-item alert-normal">
          <div class="alert-main">
            <div class="alert-icon-wrap">🟢</div>
            <div class="alert-text">
              <b>${getI18nText("alertAllClearTitle")}</b>
              <span class="alert-desc">${getI18nText("alertAllClearMsg")}</span>
              <span class="alert-action">✓ ${getI18nText("alertAllClearAction")}</span>
            </div>
          </div>
          <div class="alert-meta">
            <span class="status-pill good">${getI18nText("statusNormal")}</span>
            <span class="alert-time">${getTimeString()}</span>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = state.alerts.map(a => {
        let alertClass = a.severity === "Critical" ? "alert-critical" : "alert-warning";
        let pillClass = a.severity === "Critical" ? "bad" : "warn";
        let icon = a.severity === "Critical" ? "🚨" : "⚠️";

        return `
          <div class="alert-item ${alertClass}">
            <div class="alert-main">
              <div class="alert-icon-wrap">${icon}</div>
              <div class="alert-text">
                <b>${getI18nText(a.typeKey)} · ${a.val}</b>
                <span class="alert-desc">${getI18nText(a.descKey)}</span>
                <span class="alert-action">👉 <b>Action:</b> ${getI18nText(a.actionKey)}</span>
              </div>
            </div>
            <div class="alert-meta">
              <span class="status-pill ${pillClass}">${a.severity}</span>
              <span class="alert-time">${a.time}</span>
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // Full Alert History Table (Section 22)
  if (historyBody) {
    historyBody.innerHTML = state.alertHistory.map(h => {
      const pillClass = h.severity === "Critical" ? "bad" : (h.severity === "Warning" ? "warn" : "good");
      return `
        <tr>
          <td><b>${h.time}</b></td>
          <td><b>${getI18nText(h.typeKey)}</b></td>
          <td>${h.val}</td>
          <td><span class="status-pill ${pillClass}">${h.severity}</span></td>
          <td>${getI18nText(h.descKey)}</td>
          <td>${getI18nText(h.actionKey)}</td>
          <td><span class="status-pill ${h.status === 'Active' ? 'bad' : 'good'}">${h.status}</span></td>
        </tr>
      `;
    }).join("");
  }
}

function renderSystemHardware() {
  const sysTemp = document.getElementById("sysTempReading");
  const sysHum = document.getElementById("sysHumReading");
  const sysDoor = document.getElementById("sysDoorReading");
  const sysEnergy = document.getElementById("sysEnergyReading");
  const sysPeltier = document.getElementById("sysPeltierReading");
  const sysPeltierStatus = document.getElementById("sysPeltierStatus");
  const sysBat = document.getElementById("sysBatReading");
  const sysBatStatus = document.getElementById("sysBatStatus");
  const sysSolar = document.getElementById("sysSolarReading");
  const sysSolarStatus = document.getElementById("sysSolarStatus");

  if (sysTemp) sysTemp.textContent = `${state.temp.toFixed(1)} °C (Probe DS18B20)`;
  if (sysHum) sysHum.textContent = `${Math.round(state.humidity)} % RH (Sensor DHT22)`;
  if (sysDoor) sysDoor.textContent = state.doorOpen ? "WARNING: Door Open" : "Sealed: Door Closed";
  if (sysEnergy) {
    const powerW = state.powerAvailable ? (52.4 + (Math.sin(Date.now()/5000)*2)).toFixed(1) : "38.2 (Battery)";
    sysEnergy.textContent = `12.6V · 4.2A · ${powerW} W`;
  }
  if (sysPeltier) {
    sysPeltier.textContent = state.coolingActive ? "Peltier Active · PWM 85%" : "Peltier Idle · Target Reached";
  }
  if (sysPeltierStatus) {
    sysPeltierStatus.className = state.coolingActive ? "status-pill good" : "status-pill warn";
    sysPeltierStatus.textContent = state.coolingActive ? "Active" : "Standby";
  }
  if (sysBat) {
    sysBat.textContent = `${Math.round(state.battery)} % State of Charge (SOC)`;
  }
  if (sysBatStatus) {
    sysBatStatus.className = state.battery < 30 ? "status-pill bad" : "status-pill good";
    sysBatStatus.textContent = state.battery < 30 ? "Low Battery" : "Connected";
  }
  if (sysSolar) {
    sysSolar.textContent = `${state.solar.toFixed(2)} kW Generation`;
  }
  if (sysSolarStatus) {
    sysSolarStatus.className = state.solar > 0 ? "status-pill good" : "status-pill bad";
    sysSolarStatus.textContent = state.solar > 0 ? "Generating" : "Offline";
  }
}

// ==========================================================================
// 9. REAL-TIME CANVAS TREND CHART (Section 7 & 8)
// ==========================================================================
function drawCanvasChart() {
  const canvas = document.getElementById("chartCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const w = rect.width;
  const h = rect.height;

  if (w === 0 || h === 0) return;

  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const padLeft = 45;
  const padRight = 20;
  const padTop = 20;
  const padBottom = 30;
  const plotW = w - padLeft - padRight;
  const plotH = h - padTop - padBottom;

  // Grid Lines
  ctx.strokeStyle = "#e8efe9";
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i <= 4; i++) {
    const y = padTop + (plotH * (i / 4));
    ctx.moveTo(padLeft, y);
    ctx.lineTo(w - padRight, y);
  }
  ctx.stroke();

  const dataLen = chartHistory.temps.length;
  if (dataLen < 2) return;

  // Draw Humidity Line (Blue)
  ctx.strokeStyle = "#2563eb";
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  chartHistory.hums.forEach((val, idx) => {
    const x = padLeft + (idx / (dataLen - 1)) * plotW;
    const y = padTop + plotH - ((val - 40) / 60) * plotH;
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // Draw Temperature Line (Green)
  ctx.strokeStyle = "#087443";
  ctx.lineWidth = 2.6;
  ctx.beginPath();
  chartHistory.temps.forEach((val, idx) => {
    const x = padLeft + (idx / (dataLen - 1)) * plotW;
    const y = padTop + plotH - ((val - 0) / 16) * plotH;
    if (idx === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // End Point Dots
  const lastIdx = dataLen - 1;
  const lastX = padLeft + plotW;
  const lastTempY = padTop + plotH - ((chartHistory.temps[lastIdx] - 0) / 16) * plotH;
  const lastHumY = padTop + plotH - ((chartHistory.hums[lastIdx] - 40) / 60) * plotH;

  ctx.fillStyle = "#087443";
  ctx.beginPath();
  ctx.arc(lastX, lastTempY, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#2563eb";
  ctx.beginPath();
  ctx.arc(lastX, lastHumY, 5, 0, Math.PI * 2);
  ctx.fill();

  // Y-Axis Labels
  ctx.fillStyle = "#718078";
  ctx.font = "11px Inter, sans-serif";
  ctx.fillText("16°C", 10, padTop + 8);
  ctx.fillText("8°C", 14, padTop + plotH / 2 + 4);
  ctx.fillText("0°C", 14, padTop + plotH);
}

// ==========================================================================
// 10. SIH DEMO SCENARIO TRIGGERS (Section 9, 10, 11, 12, 13, 17, 18, 30)
// ==========================================================================
function triggerScenario(name) {
  state.scenario = name;

  if (name === "reset") {
    // RESET ALL: Returns everything to baseline OPTIMAL
    state.temp = 6.4;
    state.targetTemp = 6.0;
    state.humidity = 84.0;
    state.battery = 78.0;
    state.solar = 0.82;
    state.powerAvailable = true;
    state.coolingActive = true;
    state.coolingIntensity = "MEDIUM";
    state.chamberFan = true;
    state.chamberFanSpeed = "MEDIUM";
    state.coldSideActive = true;
    state.hotSideActive = true;
    state.hotSideTemp = 42.0;
    state.heatDissipationFan = "HIGH";
    state.heatDissipationLevel = "HIGH";
    state.controlMode = "AUTO";
    state.systemPower = true;
    state.doorOpen = false;
    state.scenario = "normal";
    if (state.timer) {
      state.timer.active = false;
      state.timer.paused = false;
      state.timer.remainingSec = 7200;
    }
    clearAllAlerts();
  } else if (name === "hotSideRise") {
    // SIMULATE HOT-SIDE TEMPERATURE RISE: 42°C -> 55°C, Dissipation Fan -> HIGH
    state.hotSideTemp = 55.0;
    state.hotSideActive = true;
    state.heatDissipationFan = "HIGH";
    state.heatDissipationLevel = "HIGH";
    addSystemAlert("alertHotSideRiseTitle", "alertHotSideRiseMsg", "alertHotSideRiseAction", "55.0 °C", "Warning");
  } else if (name === "tempRise") {
    // SIMULATE TEMPERATURE FLUCTUATION: 6.4°C -> 8.0°C -> 10.0°C -> 11.8°C
    state.temp = 11.8;
    state.coolingActive = true;
    state.coldSideActive = true;
    state.hotSideActive = true;
    state.coolingIntensity = "HIGH";
    state.heatDissipationFan = "HIGH";
    state.heatDissipationLevel = "HIGH";
    state.hotSideTemp = 48.0;
    addSystemAlert("alertTempRiseTitle", "alertTempRiseMsg", "alertTempRiseAction", "11.8 °C", "Critical");
  } else if (name === "batLow") {
    // CRITICAL REQUIREMENT: Battery MUST become exactly 25%
    state.battery = 25.0;
    addSystemAlert("alertBatLowTitle", "alertBatLowMsg", "alertBatLowAction", "25%", "Critical");
  } else if (name === "batRestore") {
    // RESTORE BATTERY: Returns to ~78%
    state.battery = 78.0;
    if (state.scenario === "batLow") state.scenario = "normal";
    resolveSystemAlert("alertBatLowTitle");
  } else if (name === "powerFail") {
    // SIMULATE POWER FAILURE: Power FAILED, Solar 0 kW, Battery Backup ACTIVE, Peltier ON
    state.powerAvailable = false;
    state.solar = 0.0;
    state.coolingActive = true;
    addSystemAlert("alertPowerFailTitle", "alertPowerFailMsg", "alertPowerFailAction", "Grid Down · 0 kW", "Critical");
  } else if (name === "powerRestore") {
    // RESTORE POWER: Returns to normal
    state.powerAvailable = true;
    state.solar = 0.82;
    if (state.scenario === "powerFail") state.scenario = "normal";
    resolveSystemAlert("alertPowerFailTitle");
  } else if (name === "highHum") {
    // SIMULATE HIGH HUMIDITY: 88% -> 96%
    state.humidity = 96.0;
    addSystemAlert("alertHumHighTitle", "alertHumHighMsg", "alertHumHighAction", "96%", "Warning");
  } else if (name === "doorOpen") {
    // SIMULATE DOOR OPEN
    state.doorOpen = true;
    addSystemAlert("alertDoorOpenTitle", "alertDoorOpenMsg", "alertDoorOpenAction", "Open", "Warning");
  } else if (name === "multipleIssues") {
    // SIMULATE MULTIPLE ISSUES: Compound failure stress test
    state.temp = 11.8;
    state.humidity = 96.0;
    state.battery = 25.0;
    state.doorOpen = true;
    state.powerAvailable = false;
    state.solar = 0.0;
    state.coolingActive = true;
    addSystemAlert("alertTempRiseTitle", "alertTempRiseMsg", "alertTempRiseAction", "11.8 °C", "Critical");
    addSystemAlert("alertBatLowTitle", "alertBatLowMsg", "alertBatLowAction", "25%", "Critical");
    addSystemAlert("alertPowerFailTitle", "alertPowerFailMsg", "alertPowerFailAction", "0 kW Solar", "Critical");
    addSystemAlert("alertHumHighTitle", "alertHumHighMsg", "alertHumHighAction", "96%", "Warning");
    addSystemAlert("alertDoorOpenTitle", "alertDoorOpenMsg", "alertDoorOpenAction", "Open", "Warning");
  }

  renderAll();
  saveState();
}

// ==========================================================================
// 11. CROP SELECTION (Section 14) - MULTIPLE SELECTION SUPPORT
// ==========================================================================
function selectCrop(cropKey) {
  if (!CROPS[cropKey]) return;

  if (!Array.isArray(state.selectedCrops)) {
    state.selectedCrops = state.selectedCrop ? [state.selectedCrop] : [];
  }

  const idx = state.selectedCrops.indexOf(cropKey);
  if (idx > -1) {
    state.selectedCrops.splice(idx, 1);
    state.selectedCrop = state.selectedCrops[state.selectedCrops.length - 1] || "tomato";
  } else {
    state.selectedCrops.push(cropKey);
    state.selectedCrop = cropKey;
  }

  // Synchronize CSS selected state across all cards
  document.querySelectorAll(".produce-card").forEach(c => c.classList.remove("selected"));
  state.selectedCrops.forEach(k => {
    const card = document.getElementById(`cropCard-${k}`);
    if (card) card.classList.add("selected");
  });

  // Render stored crops status banner if element exists
  const summaryEl = document.getElementById("storedCropsSummary");
  if (summaryEl) {
    if (state.selectedCrops.length === 0) {
      summaryEl.textContent = "No crops selected for active storage.";
    } else {
      const names = state.selectedCrops.map(k => {
        const cropKeyName = "crop" + k.charAt(0).toUpperCase() + k.slice(1);
        return getI18nText(cropKeyName);
      }).join(" • ");
      summaryEl.textContent = `Stored Crops (${state.selectedCrops.length}): ${names}`;
    }
  }

  renderAll();
  saveState();
}

// ==========================================================================
// 12. MULTI-LANGUAGE TRANSLATOR (Section 15)
// ==========================================================================
function changeLanguage(langCode) {
  if (!TRANSLATIONS[langCode]) {
    langCode = "en";
  }
  state.currentLang = langCode;

  const sel = document.getElementById("globalLangSelect");
  if (sel) sel.value = langCode;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key) {
      el.textContent = getI18nText(key);
    }
  });

  renderAll();
  saveState();
}

// ==========================================================================
// 13. PAGE NAVIGATION & TABS (Section 20)
// ==========================================================================
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const target = document.getElementById(`page-${pageId}`);
  if (target) target.classList.add("active");

  // Desktop Nav Highlight
  document.querySelectorAll(".desktop-nav button").forEach(b => b.classList.remove("active"));
  const dBtn = document.getElementById(`dnav-${pageId}`);
  if (dBtn) dBtn.classList.add("active");

  // Mobile Nav Highlight
  document.querySelectorAll("nav.app-nav button").forEach(b => b.classList.remove("active"));
  const mBtn = document.getElementById(`nav-${pageId}`);
  if (mBtn) mBtn.classList.add("active");

  if (pageId === "dashboard" || pageId === "monitor") {
    setTimeout(drawCanvasChart, 60);
  }
}

// ==========================================================================
// 13. REMOTE CONTROL USER ACTIONS & HANDLERS
// ==========================================================================
function adjustTargetTemp(delta) {
  const cur = typeof state.targetTemp === "number" ? state.targetTemp : 6.0;
  const next = Math.max(2.0, Math.min(15.0, Number((cur + delta).toFixed(1))));
  state.targetTemp = next;
  renderAll();
  saveState();
}

function setTargetTempFromSlider(val) {
  const num = parseFloat(val);
  if (!isNaN(num)) {
    state.targetTemp = Math.max(2.0, Math.min(15.0, Number(num.toFixed(1))));
    renderAll();
    saveState();
  }
}

function setPeltierPower(powerOn) {
  state.coolingActive = !!powerOn;
  state.coldSideActive = !!powerOn;
  state.hotSideActive = !!powerOn;
  if (!powerOn) {
    addSystemAlert("alertCoolingOffTitle", "alertCoolingOffMsg", "alertCoolingOffAction", "OFF", "Warning");
  } else {
    resolveSystemAlert("alertCoolingOffTitle");
  }
  renderAll();
  saveState();
}

function setCoolingIntensity(level) {
  if (["LOW", "MEDIUM", "HIGH"].includes(level)) {
    state.coolingIntensity = level;
    if (level === "HIGH") {
      state.heatDissipationFan = "HIGH";
      state.heatDissipationLevel = "HIGH";
    }
    renderAll();
    saveState();
  }
}

function setChamberFan(fanOn) {
  state.chamberFan = !!fanOn;
  if (!fanOn) {
    addSystemAlert("alertChamberFanOffTitle", "alertChamberFanOffMsg", "alertChamberFanOffAction", "OFF", "Warning");
  } else {
    resolveSystemAlert("alertChamberFanOffTitle");
  }
  renderAll();
  saveState();
}

function setChamberFanSpeed(speed) {
  if (["LOW", "MEDIUM", "HIGH"].includes(speed)) {
    state.chamberFanSpeed = speed;
    renderAll();
    saveState();
  }
}

function setHeatDissipationFan(level) {
  if (["OFF", "LOW", "MEDIUM", "HIGH"].includes(level)) {
    state.heatDissipationFan = level;
    state.heatDissipationLevel = level;
    renderAll();
    saveState();
  }
}

function setControlMode(mode) {
  if (mode === "AUTO" || mode === "MANUAL") {
    state.controlMode = mode;
    renderAll();
    saveState();
  }
}

function setSystemPower(powerOn) {
  state.systemPower = !!powerOn;
  if (!powerOn) {
    state.coolingActive = false;
    state.coldSideActive = false;
    state.hotSideActive = false;
    state.chamberFan = false;
    state.heatDissipationFan = "OFF";
    state.heatDissipationLevel = "OFF";
    if (state.timer && state.timer.active) {
      state.timer.paused = true;
    }
    addSystemAlert("alertSystemOffTitle", "alertSystemOffMsg", "alertSystemOffAction", "OFF", "Warning");
  } else {
    state.coolingActive = true;
    state.coldSideActive = true;
    state.hotSideActive = true;
    state.chamberFan = true;
    state.chamberFanSpeed = state.chamberFanSpeed || "MEDIUM";
    state.heatDissipationFan = (state.heatDissipationFan && state.heatDissipationFan !== "OFF") ? state.heatDissipationFan : "HIGH";
    state.heatDissipationLevel = state.heatDissipationFan;
    resolveSystemAlert("alertSystemOffTitle");
  }
  renderAll();
  saveState();
}

function adjustTimerTarget(delta) {
  if (!state.timer) {
    state.timer = { active: false, paused: false, durationSec: 7200, remainingSec: 7200, targetTemp: 6.0 };
  }
  const cur = state.timer.targetTemp || 6.0;
  state.timer.targetTemp = Math.max(2.0, Math.min(15.0, Number((cur + delta).toFixed(1))));
  renderAll();
  saveState();
}

function adjustTimerDuration(deltaHours) {
  if (!state.timer) {
    state.timer = { active: false, paused: false, durationSec: 7200, remainingSec: 7200, targetTemp: 6.0 };
  }
  const curHours = state.timer.durationSec / 3600;
  const nextHours = Math.max(0.25, Math.min(24.0, Number((curHours + deltaHours).toFixed(2))));
  state.timer.durationSec = Math.round(nextHours * 3600);
  if (!state.timer.active) {
    state.timer.remainingSec = state.timer.durationSec;
  }
  renderAll();
  saveState();
}

function setTimerPreset(minutes) {
  if (!state.timer) {
    state.timer = { active: false, paused: false, durationSec: 7200, remainingSec: 7200, targetTemp: 6.0 };
  }
  state.timer.durationSec = minutes * 60;
  state.timer.remainingSec = minutes * 60;
  renderAll();
  saveState();
}

function startTimer() {
  if (!state.timer) {
    state.timer = { active: false, paused: false, durationSec: 7200, remainingSec: 7200, targetTemp: 6.0 };
  }
  state.timer.active = true;
  state.timer.paused = false;
  state.timer.remainingSec = state.timer.durationSec;
  state.targetTemp = state.timer.targetTemp;
  renderAll();
  saveState();
}

function pauseTimer() {
  if (state.timer && state.timer.active) {
    state.timer.paused = !state.timer.paused;
    renderAll();
    saveState();
  }
}

function stopTimer() {
  if (state.timer) {
    state.timer.active = false;
    state.timer.paused = false;
    state.timer.remainingSec = state.timer.durationSec;
    renderAll();
    saveState();
  }
}

// ==========================================================================
// 14. GLOBAL ATTACHMENTS & INITIALIZATION
// ==========================================================================
window.showPage = showPage;
window.triggerScenario = triggerScenario;
window.selectCrop = selectCrop;
window.changeLanguage = changeLanguage;
window.clearAllAlerts = clearAllAlerts;
window.coldCareState = state;

window.adjustTargetTemp = adjustTargetTemp;
window.setTargetTempFromSlider = setTargetTempFromSlider;
window.setPeltierPower = setPeltierPower;
window.setCoolingIntensity = setCoolingIntensity;
window.setChamberFan = setChamberFan;
window.setChamberFanSpeed = setChamberFanSpeed;
window.setHeatDissipationFan = setHeatDissipationFan;
window.setControlMode = setControlMode;
window.setSystemPower = setSystemPower;
window.adjustTimerTarget = adjustTimerTarget;
window.adjustTimerDuration = adjustTimerDuration;
window.setTimerPreset = setTimerPreset;
window.startTimer = startTimer;
window.pauseTimer = pauseTimer;
window.stopTimer = stopTimer;

window.addEventListener("DOMContentLoaded", () => {
  changeLanguage(state.currentLang || "en");
  
  // Ensure selected crops cards reflect state accurately on load
  if (!Array.isArray(state.selectedCrops) || state.selectedCrops.length === 0) {
    state.selectedCrops = state.selectedCrop ? [state.selectedCrop] : ["tomato"];
  }
  document.querySelectorAll(".produce-card").forEach(c => c.classList.remove("selected"));
  state.selectedCrops.forEach(k => {
    const card = document.getElementById(`cropCard-${k}`);
    if (card) card.classList.add("selected");
  });

  const summaryEl = document.getElementById("storedCropsSummary");
  if (summaryEl) {
    const names = state.selectedCrops.map(k => {
      const cropKeyName = "crop" + k.charAt(0).toUpperCase() + k.slice(1);
      return getI18nText(cropKeyName);
    }).join(" • ");
    summaryEl.textContent = `Stored Crops (${state.selectedCrops.length}): ${names}`;
  }

  renderAll();
  setTimeout(drawCanvasChart, 150);

  // 3-second simulation loop
  setInterval(simulateTick, 3000);

  // 1-second timer precision countdown loop
  setInterval(() => {
    if (state.timer && state.timer.active && !state.timer.paused) {
      state.timer.remainingSec = Math.max(0, state.timer.remainingSec - 1);
      if (state.timer.remainingSec <= 0) {
        state.timer.active = false;
        addSystemAlert("alertTimerDoneTitle", "alertTimerDoneMsg", "alertTimerDoneAction", "00:00:00", "Normal");
      }
      renderRemoteControl();
    }
  }, 1000);

  window.addEventListener("resize", drawCanvasChart);
});
