const iGetTheJoke = true;
const havingFun = true;
const learning = true
const killingIt = learning && havingFun;

function returnFalse() {
  return false;
}

function isOpposite(condition) {
  return !condition;
}

function both(condition1, condition2) {
  return condition1 && condition2;
}

function either(condition1, condition2) {
  return condition1 || condition2;
}

function neither(condition1, condition2) {
  return !condition1 && !condition2;
}

function itsComplicated(condition1, condition2, condition3) {
  return !condition1 || (condition2 && condition3);
}


module.exports = {
  iGetTheJoke,
  havingFun,
  learning,
  killingIt,
  returnFalse,
  isOpposite,
  both,
  either,
  neither,
  itsComplicated,
}