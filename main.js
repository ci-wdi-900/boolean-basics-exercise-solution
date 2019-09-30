function both(condition1, condition2) {
  return condition1 && condition2;
}

function either(condition1, condition2) {
  return condition1 || condition2
}

function neither(condition1, condition2) {
  return !condition1 && !condition2;
}

function itsComplicated(condition1, condition2, condition3) {
  return !condition1 || (condition2 && condition3)
}


module.exports = {
  both,
  either,
  neither,
  itsComplicated,
}