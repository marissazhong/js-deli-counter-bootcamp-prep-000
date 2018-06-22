
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

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } else {
    var result = "The line is currently: ";
    for (let i = 0; i < katzDeliLine.length; i++) {
      result += (i+1) ". " + katzDeliLine[i] + ', ';
    }
  }
}