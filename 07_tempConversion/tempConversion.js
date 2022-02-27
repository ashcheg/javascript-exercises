// from farenheight to celcius
const ftoc = function(tempFar) {
  let tempCel = (tempFar - 32) * (5 / 9);
  if (tempCel == 0) {
    return 0
  }
  return Number(tempCel.toFixed(1));
};

//from celcius to farenheight
const ctof = function(tempCel) {
  let tempFar = tempCel * (9 / 5) + 32;
  return Number(tempFar.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
