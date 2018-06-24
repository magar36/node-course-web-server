// var test = () => {
// for (var i=0; i<=3; i++) {
// function somefunc()
// {
// var hi = function func2() {
//   console.log(i);
// }
// hi();
// };
// somefunc();
//
// };
// };
// test();
var test = () => {
for(var i = 1; i <= 5; i++) {
       setTimeout(function(){
         console.log(i);
      },1);
   };
};
test();

console.log('hi');
console.log('hi1');
