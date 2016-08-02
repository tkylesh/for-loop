/*JS file for loops*/

//1. increment by 10
  //for loop
  //initialize = 5
  //increment by 10
  //console.log(i)
  //stop if i > 120
  for (var i= 5; i < 120; i+= 10){
  	console.log(i);
  }


//2.  Decrement by Division
  //for loop 
  //intialize at 4096
  //each loop divide i/2
  //console.log(i)
  //stop when i === 1
for (var i=4096; i !== 1; i/=2){
	console.log(i);
}

//3. Array Iterations
  //create array
  //contains name of Am. Presidents
  //loop over w/ for loop
  //use string concatenation to console.log() to output order and name of each president
  //ex: President #1 was George Washington
        //President #2 was John Adams

var arr = ["George Washington","John Adams","Thomas Jefferson"];

for (var i=0; i < arr.length; i++){
	console.log((i+1)+": "+ arr[i]);
}




//4. Object iteration
  //Use key value for-loop to iterate over object
  //console.log() name of keys in the object

/*here's the object:*/

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var keys in antSpecies){
	console.log(keys);
}