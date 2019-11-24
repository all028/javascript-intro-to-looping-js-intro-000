function forLoop(arr){
  var x = "";
  for (let i=0; i <=24; i++){
    x.concat(`"I am ${i} strange loops."`);

    if (i === 24){
      return x;
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
