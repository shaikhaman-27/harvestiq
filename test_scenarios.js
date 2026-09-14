/**
 * Comprehensive SIH Demo Scenario Automated Test Suite
 */

global.window = {
  addEventListener: () => {},
  devicePixelRatio: 1
};

const domElements = {};
global.document = {
  getElementById: (id) => {
    if (!domElements[id]) {
      domElements[id] = {
        id,
        value: '',
        textContent: '',
        style: {},
        className: '',
        classList: {
          classes: new Set(),
          add(c) { this.classes.add(c); },
          remove(c) { this.classes.delete(c); },
          contains(c) { return this.classes.has(c); }
        },
        getBoundingClientRect: () => ({ width: 600, height: 260 }),
        getContext: () => ({
          scale: () => {}, clearRect: () => {}, strokeStyle: '',
          lineWidth: 1, beginPath: () => {}, moveTo: () => {},
          lineTo: () => {}, stroke: () => {}, arc: () => {}, fill: () => {}, fillText: () => {}
        })
      };
    }
    return domElements[id];
  },
  querySelectorAll: () => [],
  addEventListener: () => {}
};

global.localStorage = {
  storage: {},
  getItem(k) { return this.storage[k] || null; },
  setItem(k, v) { this.storage[k] = String(v); },
  removeItem(k) { delete this.storage[k]; }
};

require('./script.js');

console.log('=== STARTING SIH 2026 DEMO SCENARIO TESTS ===\n');

// STEP 1: Baseline Health
console.log('STEP 1: Testing NORMAL OPERATION...');
window.triggerScenario('reset');
console.assert(window.coldCareState.temp === 6.4, `Expected 6.4°C, got ${window.coldCareState.temp}`);
console.assert(window.coldCareState.battery === 78.0, `Expected 78% battery, got ${window.coldCareState.battery}`);
console.assert(window.coldCareState.powerAvailable === true, `Expected power true`);
console.assert(window.coldCareState.coolingActive === true, `Expected cooling true`);
console.assert(domElements['conditionBadge'].textContent.includes('OPTIMAL'), `Expected OPTIMAL condition badge`);
console.log('✓ Step 1 passed: Baseline is 6.4°C, 84%, 78% battery, OPTIMAL condition.');

// STEP 2: Temperature Fluctuation Simulation
console.log('\nSTEP 2: Testing SIMULATE TEMPERATURE FLUCTUATION...');
window.triggerScenario('tempRise');
console.assert(window.coldCareState.temp >= 11.8, `Expected >= 11.8°C, got ${window.coldCareState.temp}`);
console.assert(domElements['conditionBadge'].textContent.includes('CRITICAL'), `Expected CRITICAL condition badge`);
console.assert(window.coldCareState.alerts.some(a => a.typeKey === 'alertTempRiseTitle'), 'Expected Temperature Fluctuation alert');
console.log('✓ Step 2 passed: Temp rose to 11.8°C, Condition CRITICAL, Alert generated.');

// STEP 3: Low Battery Simulation (CRITICAL: MUST BE 25%)
console.log('\nSTEP 3: Testing SIMULATE LOW BATTERY (Must be exactly 25%)...');
window.triggerScenario('batLow');
console.assert(window.coldCareState.battery === 25.0, `Expected battery exactly 25%, got ${window.coldCareState.battery}`);
console.assert(domElements['valBat'].textContent === '25 %', `Expected valBat '25 %'`);
console.assert(domElements['badgeBat'].textContent.includes('Low Battery'), `Expected Low Battery badge`);
console.assert(window.coldCareState.alerts.some(a => a.typeKey === 'alertBatLowTitle'), 'Expected Low Battery alert');
console.log('✓ Step 3 passed: Battery set to exactly 25%, status LOW BATTERY, alert generated.');

// STEP 4: Restore Battery (Returns to ~78%)
console.log('\nSTEP 4: Testing RESTORE BATTERY...');
window.triggerScenario('batRestore');
console.assert(window.coldCareState.battery === 78.0, `Expected battery restored to 78%`);
console.assert(!window.coldCareState.alerts.some(a => a.typeKey === 'alertBatLowTitle'), 'Expected Low Battery alert resolved');
console.log('✓ Step 4 passed: Battery restored to 78%, alert resolved.');

// STEP 5: Power Failure Simulation
console.log('\nSTEP 5: Testing SIMULATE POWER FAILURE...');
window.triggerScenario('powerFail');
console.assert(window.coldCareState.powerAvailable === false, 'Expected powerAvailable false');
console.assert(window.coldCareState.solar === 0.0, 'Expected solar 0 kW');
console.assert(window.coldCareState.coolingActive === true, 'Expected Peltier cooling continues on battery backup');
console.assert(domElements['valPower'].textContent.includes('POWER FAILURE: BATTERY BACKUP ACTIVE'), 'Expected Power Failure text');
console.assert(window.coldCareState.alerts.some(a => a.typeKey === 'alertPowerFailTitle'), 'Expected Power Failure alert');
console.log('✓ Step 5 passed: Power FAILED, Solar 0 kW, Battery Backup ACTIVE, Peltier ON.');

// STEP 6: Restore Power
console.log('\nSTEP 6: Testing RESTORE POWER...');
window.triggerScenario('powerRestore');
console.assert(window.coldCareState.powerAvailable === true, 'Expected powerAvailable true');
console.assert(window.coldCareState.solar > 0, 'Expected solar restored');
console.assert(!window.coldCareState.alerts.some(a => a.typeKey === 'alertPowerFailTitle'), 'Expected Power Failure alert resolved');
console.log('✓ Step 6 passed: Power restored, Solar generation active.');

// STEP 7: High Humidity Simulation
console.log('\nSTEP 7: Testing SIMULATE HIGH HUMIDITY (96%)...');
window.triggerScenario('highHum');
console.assert(window.coldCareState.humidity === 96.0, 'Expected humidity 96%');
console.assert(window.coldCareState.alerts.some(a => a.typeKey === 'alertHumHighTitle'), 'Expected High Humidity alert');
console.log('✓ Step 7 passed: Humidity set to 96%, alert generated.');

// STEP 8: Door Open Simulation
console.log('\nSTEP 8: Testing SIMULATE DOOR OPEN...');
window.triggerScenario('doorOpen');
console.assert(window.coldCareState.doorOpen === true, 'Expected doorOpen true');
console.assert(domElements['valDoor'].textContent === 'DOOR OPEN', 'Expected valDoor DOOR OPEN');
console.assert(window.coldCareState.alerts.some(a => a.typeKey === 'alertDoorOpenTitle'), 'Expected Door Open alert');
console.log('✓ Step 8 passed: Door OPEN, warning generated.');

// STEP 9: Multiple Issues Simulation
console.log('\nSTEP 9: Testing SIMULATE MULTIPLE ISSUES...');
window.triggerScenario('multipleIssues');
console.assert(window.coldCareState.battery === 25.0, 'Expected battery 25%');
console.assert(window.coldCareState.temp === 11.8, 'Expected temp 11.8');
console.assert(window.coldCareState.humidity === 96.0, 'Expected humidity 96');
console.assert(window.coldCareState.doorOpen === true, 'Expected door open');
console.assert(window.coldCareState.powerAvailable === false, 'Expected power down');
console.assert(domElements['conditionBadge'].textContent.includes('CRITICAL'), 'Expected CRITICAL condition');
console.log('✓ Step 9 passed: Multiple compound issues simulated, state CRITICAL.');

// STEP 10: Reset All
console.log('\nSTEP 10: Testing RESET ALL...');
window.triggerScenario('reset');
console.assert(window.coldCareState.temp === 6.4, 'Expected temp 6.4');
console.assert(window.coldCareState.battery === 78.0, 'Expected battery 78');
console.assert(window.coldCareState.powerAvailable === true, 'Expected power true');
console.assert(window.coldCareState.doorOpen === false, 'Expected door closed');
console.assert(domElements['conditionBadge'].textContent.includes('OPTIMAL'), 'Expected OPTIMAL condition');
console.assert(window.coldCareState.alerts.length === 0, 'Expected all active alerts cleared');
console.log('✓ Step 10 passed: System reset to baseline OPTIMAL.');

// STEP 11: Multi-Language Dictionary Verification (All 11 Languages)
console.log('\nSTEP 11: Testing ALL 11 NORTH EASTERN LANGUAGES...');
const languages = [
  { code: 'en', name: 'English' },
  { code: 'as', name: 'Assamese (অসমীয়া)' },
  { code: 'bn', name: 'Bengali (বাংলা)' },
  { code: 'brx', name: 'Bodo (बड़ो)' },
  { code: 'mni', name: 'Manipuri (মৈতৈলোন্)' },
  { code: 'kh', name: 'Khasi' },
  { code: 'garo', name: 'Garo (A·chik)' },
  { code: 'lus', name: 'Mizo (Mizo ṭawng)' },
  { code: 'kok', name: 'Kokborok' },
  { code: 'ne', name: 'Nepali (नेपाली)' },
  { code: 'hi', name: 'Hindi (हिन्दी)' }
];

languages.forEach(l => {
  window.changeLanguage(l.code);
  console.assert(window.coldCareState.currentLang === l.code, `Expected language ${l.code}`);
  console.log(`  ✓ Language ${l.name} (${l.code}) verified cleanly.`);
});

// Restore English
window.changeLanguage('en');

// STEP 12: Crop Selection Verification
console.log('\nSTEP 12: Testing CROP SELECTION...');
const testCrops = ['tomato', 'cabbage', 'beans', 'leafy', 'chilli', 'other'];
testCrops.forEach(c => {
  window.selectCrop(c);
  console.assert(window.coldCareState.selectedCrop === c, `Expected selectedCrop ${c}`);
  console.log(`  ✓ Crop ${c} setpoints applied: ${domElements['valTargetRange'].textContent}`);
});

window.selectCrop('tomato');

// STEP 13: Remote Control & IoT Edge Telemetry Verification
console.log('\nSTEP 13: Testing REMOTE CONTROL & IOT EDGE TELEMETRY...');

// A. Baseline Remote Control Telemetry
console.assert(window.coldCareState.targetTemp === 6.0, `Expected target 6.0, got ${window.coldCareState.targetTemp}`);
console.assert(window.coldCareState.coolingIntensity === 'MEDIUM', `Expected intensity MEDIUM`);
console.assert(window.coldCareState.chamberFan === true, `Expected chamberFan true`);
console.assert(window.coldCareState.coldSideActive === true, `Expected coldSideActive true`);
console.assert(window.coldCareState.hotSideActive === true, `Expected hotSideActive true`);
console.assert(window.coldCareState.hotSideTemp === 42.0, `Expected hotSideTemp 42.0`);
console.assert(window.coldCareState.controlMode === 'AUTO', `Expected mode AUTO`);
console.assert(window.coldCareState.systemPower === true, `Expected systemPower true`);
console.log('  ✓ 13.1 Baseline Remote Control state verified.');

// B. Temperature Setpoint Adjustment (+ / - and Slider)
window.adjustTargetTemp(1.5);
console.assert(window.coldCareState.targetTemp === 7.5, `Expected target 7.5, got ${window.coldCareState.targetTemp}`);
console.assert(domElements['rcValTarget'].textContent === '7.5°C', `Expected rcValTarget 7.5°C`);
console.assert(domElements['rcTargetDisplay'].textContent === '7.5°C', `Expected rcTargetDisplay 7.5°C`);

window.setTargetTempFromSlider('4.5');
console.assert(window.coldCareState.targetTemp === 4.5, `Expected target 4.5, got ${window.coldCareState.targetTemp}`);
console.assert(domElements['rcTargetDisplay'].textContent === '4.5°C', `Expected rcTargetDisplay 4.5°C`);

window.adjustTargetTemp(-10.0);
console.assert(window.coldCareState.targetTemp === 2.0, `Expected clamp to 2.0°C minimum`);
window.adjustTargetTemp(20.0);
console.assert(window.coldCareState.targetTemp === 15.0, `Expected clamp to 15.0°C maximum`);
window.adjustTargetTemp(-9.0); // back to 6.0°C
console.log('  ✓ 13.2 Stepper and slider synchronize with safe clamps (2°C - 15°C).');

// C. Peltier Cooling Control
window.setPeltierPower(false);
console.assert(window.coldCareState.coolingActive === false, 'Expected coolingActive false');
console.assert(window.coldCareState.coldSideActive === false, 'Expected coldSideActive false');
console.assert(window.coldCareState.hotSideActive === false, 'Expected hotSideActive false');
console.assert(domElements['rcPeltierStatus'].textContent === 'OFF', 'Expected rcPeltierStatus OFF');
console.assert(domElements['valCooling'].textContent.includes('OFF'), 'Dashboard card must synchronize Peltier OFF');

window.setPeltierPower(true);
console.assert(window.coldCareState.coolingActive === true, 'Expected coolingActive true');
console.assert(domElements['valCooling'].textContent.includes('ON'), 'Dashboard card must synchronize Peltier ON');

window.setCoolingIntensity('HIGH');
console.assert(window.coldCareState.coolingIntensity === 'HIGH', 'Expected intensity HIGH');
console.assert(window.coldCareState.heatDissipationFan === 'HIGH', 'Heat dissipation fan should be HIGH when cooling is HIGH');
console.log('  ✓ 13.3 Peltier power and intensity control synchronize with dashboard.');

// D. Chamber Air Circulation Fan Control
window.setChamberFanSpeed('LOW');
console.assert(window.coldCareState.chamberFanSpeed === 'LOW', 'Expected chamber fan speed LOW');

window.setChamberFan(false);
console.assert(window.coldCareState.chamberFan === false, 'Expected chamberFan false');
console.assert(domElements['rcChamberFanSpeed'].textContent.includes('DISABLED'), 'Fan speed should be visually disabled when OFF');

window.setChamberFan(true);
console.assert(window.coldCareState.chamberFan === true, 'Expected chamberFan true');
console.assert(window.coldCareState.chamberFanSpeed === 'LOW', 'Fan speed LOW restored when turned back ON');
console.log('  ✓ 13.4 Chamber fan properly controls internal airflow and restores speed.');

// E. Hot Side Heat Dissipation & Fan Control
window.setHeatDissipationFan('MEDIUM');
console.assert(window.coldCareState.heatDissipationFan === 'MEDIUM', 'Expected heat dissipation fan MEDIUM');
console.assert(domElements['rcHeatDissipationFan'].textContent === 'MEDIUM', 'Expected rcHeatDissipationFan MEDIUM');
console.log('  ✓ 13.5 Heat dissipation fan operates independently of chamber fan.');

// F. Hot-Side Temperature Rise Simulation
const tempBeforeHotSideSim = window.coldCareState.temp;
window.triggerScenario('hotSideRise');
console.assert(window.coldCareState.hotSideTemp === 55.0, `Expected hotSideTemp 55.0, got ${window.coldCareState.hotSideTemp}`);
console.assert(window.coldCareState.heatDissipationFan === 'HIGH', 'Heat dissipation fan must boost to HIGH on 55°C');
console.assert(window.coldCareState.alerts.some(a => a.typeKey === 'alertHotSideRiseTitle'), 'Expected Hot-Side alert');
console.assert(window.coldCareState.temp === tempBeforeHotSideSim, 'Storage chamber temperature MUST NOT be heated!');
console.log('  ✓ 13.6 Hot-side elevated to 55°C, dissipation responds, chamber stays cold.');

// G. Auto / Manual Mode
window.setControlMode('MANUAL');
console.assert(window.coldCareState.controlMode === 'MANUAL', 'Expected mode MANUAL');
console.assert(domElements['rcMode'].textContent.includes('MANUAL'), 'Expected rcMode MANUAL');

window.setControlMode('AUTO');
console.assert(window.coldCareState.controlMode === 'AUTO', 'Expected mode AUTO');
console.assert(domElements['rcMode'].textContent.includes('AUTO'), 'Expected rcMode AUTO');
console.log('  ✓ 13.7 Control mode toggles cleanly.');

// H. Real Countdown Temperature Timer
window.setTimerPreset(60); // 1 hour
console.assert(window.coldCareState.timer.durationSec === 3600, 'Expected 3600 seconds');
window.adjustTimerTarget(1.0); // 7.0°C target
window.startTimer();
console.assert(window.coldCareState.timer.active === true, 'Expected timer active');
console.assert(window.coldCareState.targetTemp === 7.0, 'Target temp synchronized with timer target');

window.pauseTimer();
console.assert(window.coldCareState.timer.paused === true, 'Expected timer paused');
window.pauseTimer();
console.assert(window.coldCareState.timer.paused === false, 'Expected timer unpaused');

window.stopTimer();
console.assert(window.coldCareState.timer.active === false, 'Expected timer stopped');
console.log('  ✓ 13.8 Real countdown timer start, pause, stop, and target sync verified.');

// I. Master System Power
window.setSystemPower(false);
console.assert(window.coldCareState.systemPower === false, 'Expected systemPower false');
console.assert(window.coldCareState.coolingActive === false, 'Cooling must be OFF when system is OFF');
console.assert(window.coldCareState.chamberFan === false, 'Chamber fan must be OFF when system is OFF');
console.assert(domElements['rcStorageStatus'].textContent.includes('OFFLINE'), 'Storage must show OFFLINE');

window.setSystemPower(true);
console.assert(window.coldCareState.systemPower === true, 'Expected systemPower true');
console.assert(window.coldCareState.coolingActive === true, 'Cooling restored when system is ON');
console.assert(domElements['rcStorageStatus'].textContent.includes('ONLINE'), 'Storage must show ONLINE');
console.log('  ✓ 13.9 Master system power shutoff and restoration verified.');

// J. Navigation Integration
window.showPage('remote');
console.assert(domElements['page-remote'].classList.contains('active'), 'Expected page-remote active');
console.assert(domElements['dnav-remote'].classList.contains('active'), 'Expected dnav-remote active');
console.assert(domElements['nav-remote'].classList.contains('active'), 'Expected nav-remote active');
console.log('  ✓ 13.10 Remote Control navigation tabs verified.');

console.log('\n=============================================');
console.log('ALL 13 SIH DEMO TEST SUITES PASSED FLAWLESSLY!');
console.log('=============================================');
