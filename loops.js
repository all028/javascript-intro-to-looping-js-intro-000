function forLoop(arr){

  for (let i=0; i <25; i++){
    if (i == 1){
      arr.concat("I am 1 strange loop");
      return arr;
    }else{
      arr.concat(`"I am ${i} strange loops."`);
    }
  }

  return arr;
}

function whileLoop(num){
  while (num > 0) {
    console.log(--num);
  }
   return 'done';
}

function doWhileLoop(num){
  var x =1
  do {
    console.log('I run once regardless');
    x++;
  } while (x<=num);

}
