console.log(1);
console.log(2); 
nums()
names()
console.log(4);



async function nums(){
  console.log('one');
  await console.log('two');
  console.log('three'); ///
} //sync


async function names(){
  await console.log('reneh');
  console.log('aws'); //
  console.log('balqeis'); //
} //sync

