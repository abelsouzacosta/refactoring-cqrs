// @ts-nocheck

// todo: [refactor] - separate query from modifier
// we should do this refactor to deal with functions that colateral effects
// and to apply cqrs
export function alertForMiscreant(people) {
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

export function findMiscreant(people) {
  for (const p of people) {
    if ("Don" === p) {
      return "Don";
    }
    if ("John" === p) {
      return "John";
    }
  }

  return "";
}

function setOffAlarms() {
  return "Alarms off";
}

console.log(alertForMiscreant(["Don"]));
