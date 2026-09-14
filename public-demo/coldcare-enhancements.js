/**
 * ColdCare Enhancements Compatibility Bridge
 * Connects legacy action hooks to the unified ColdCare engine.
 * Prevents duplicate dashboard injection and competing simulation intervals.
 */

(() => {
  // Bridge coldCareAction to triggerScenario and other core handlers
  window.coldCareAction = function(name) {
    if (typeof triggerScenario !== "function") return;

    switch (name) {
      case "high":
      case "scenarioHeat":
        triggerScenario("tempRise");
        break;
      case "batteryLow":
        triggerScenario("batLow");
        break;
      case "power":
      case "scenarioPower":
        triggerScenario("powerFail");
        break;
      case "humidityHigh":
      case "scenarioHumidity":
        triggerScenario("highHum");
        break;
      case "door":
      case "scenarioDoor":
        triggerScenario("doorOpen");
        break;
      case "allAlerts":
      case "scenarioAll":
        triggerScenario("multipleIssues");
        break;
      case "reset":
      case "stopScenario":
        triggerScenario("reset");
        break;
      case "cool":
        if (typeof toggleCoolingManually === "function") toggleCoolingManually();
        break;
      default:
        console.log("ColdCare action triggered:", name);
    }
  };

  window.coldCareClearAlerts = function() {
    if (typeof clearAllAlerts === "function") {
      clearAllAlerts();
    }
  };

  window.coldCareSignOut = function() {
    if (typeof handleLogout === "function") {
      handleLogout();
    }
  };
})();
