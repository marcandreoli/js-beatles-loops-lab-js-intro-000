function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  };
  return array;
};

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i = i + 1;
  }
  return facts;
};

function iLoveTheBeatles(n) {
  var array = [];
  var i = n;
<<<<<<< HEAD
  //if(n<15) {
  do {
  array.push("I love the Beatles!");
  i+=1;
  } while (i<15);
    //while(i < 15) {
      //array.push("I love the Beatles!");
      //i = i + 1;
    //}
  //}
  return array;
}
=======
  if(n<15) {
    while(i < 15) {
    array.push("I love the Beatles!");
    i = i + 1;
    };
  return array;
} else {  return array;
};
>>>>>>> e4865e8692d106fca2867434a6b36bad45873092
