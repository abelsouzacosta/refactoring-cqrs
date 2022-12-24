// @ts-nocheck
function alertForMiscreant(people) {
  for (const p of people) {
    if ("Don" === p) {
      setOffAlarms();
      return "Don";
    }
    if ("John" === p) {
      setOffAlarms();
      return "John";
    }
  }

  return "";
}

function setOffAlarms() {
  return "Alarms off";
}

console.log(alertForMiscreant(["Don"]));
