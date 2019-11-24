function forLoop(arr){
  var x = "";
  for (let i=0; i <25; i++){
    

    if (i === 1){
      x = "I am 1 strange loop";
    }else{
      x.concat(`"I am ${i} strange loops."`);
    }
  }


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
