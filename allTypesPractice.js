console.log('start script');
function testing1() {
  console.log('inside testing1');
  setTimeout(() => console.log('inside setTimeout'), 0);
  console.log('after setTimout statement');
}
async function testing2() {
  console.log('before calling testing1');
  await testing1();
  console.log('after calling testing1');
}
testing2();
console.log('end script');


