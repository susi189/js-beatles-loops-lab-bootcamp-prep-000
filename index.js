function theBeatlesPlay(musicians, instruments) {
  var newarray = [];
  for (var i = 0; i < musicians.length; i++) {
    newarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newarray;
}

function johnLennonFacts(facts) {
  while (facts <= 0) {
    facts += '!!!'
    console.log(facts)
    facts++
  }
}