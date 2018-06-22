
var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return katzDeliLine.length;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return katzDeliLine.shift();
  } else if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
}