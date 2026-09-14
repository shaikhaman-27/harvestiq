const fs = require('fs');
const file = process.argv[2] || 'index.html';
const html = fs.readFileSync(file, 'utf8');

const requiredIds = [
  'heroCondition', 'conditionBadge', 'heroTitle', 'heroSubtitle', 'heroIcon',
  'valTemp', 'valTargetRange', 'badgeTemp', 'cardTemp',
  'valHum', 'valHumTargetRange', 'badgeHum', 'cardHum',
  'valBat', 'valBatBar', 'valBatFlow', 'badgeBat', 'cardBat',
  'valSolar', 'valSolarSource', 'badgeSolar',
  'valCooling', 'valCoolingSource', 'badgeCooling',
  'valPower', 'valPowerSub', 'badgePower',
  'valDoor', 'valDoorSub', 'badgeDoor',
  'headerCropIcon', 'headerCropName', 'headerAlertCount',
  'alertsList', 'alertHistoryTableBody',
  'sysTempReading', 'sysHumReading', 'sysDoorReading', 'sysEnergyReading',
  'sysPeltierReading', 'sysPeltierStatus', 'sysBatReading', 'sysBatStatus',
  'sysSolarReading', 'sysSolarStatus', 'chartCanvas', 'globalLangSelect',
  'page-dashboard', 'page-monitor', 'page-alerts', 'page-produce', 'page-system', 'page-demo',
  'dnav-dashboard', 'dnav-monitor', 'dnav-alerts', 'dnav-produce', 'dnav-system', 'dnav-demo',
  'nav-dashboard', 'nav-monitor', 'nav-alerts', 'nav-produce', 'nav-system', 'nav-demo',
  'cropCard-tomato', 'cropCard-cabbage', 'cropCard-beans', 'cropCard-leafy', 'cropCard-chilli', 'cropCard-other'
];

let missing = [];
requiredIds.forEach(id => {
  if (!html.includes(`id="${id}"`) && !html.includes(`id='${id}'`)) {
    missing.push(id);
  }
});

if (missing.length > 0) {
  console.error('Missing IDs in index.html:', missing);
  process.exit(1);
} else {
  console.log(`PERFECT: All ${requiredIds.length} required DOM element IDs verified in index.html!`);
}
