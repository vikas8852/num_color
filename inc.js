const count=document.querySelector('p')
const btn=document.getElementById('button')

function increment(){
   let value=parseInt(count.innerText);
   value=value+1;
   count.innerText=value;
}
function decrement(){
    let value=parseInt(count.innerText);
    value=value-1;
    count.innerText=value;
 }
 function remove(){
   let value=parseInt(count.innerText);
   value=0;
   count.innerText=value;
 }

 //Another method 
//  const colorChanger=()=>{
//    // var cons='rgba';
//    var const1=Math.floor(Math.random()*(300-100
//       +1))+100;
//     var const2=Math.floor(Math.random()*(300-100
//          +1))+100;
//     var const3=Math.floor(Math.random()*(300-100
//             +1))+100;
//      return ((const1+","+const2+","+const3));
   
//       //document.getElementById("bo").style.backgroundColor="rgba( const1,const2,const3,.4)";
//  }
//  console.log(colorChanger())
//   function change(){
//  document.body.style.backgroundColor=rgba(colorChanger());
// }
//  btn.addEventListener("click",change);
const randomColor=()=>{
   let val="0123456789ABCDEF";
   let cons="#"
   for(let i=0;i<6;i++){
      cons=cons + val[Math.floor(Math.random()*16)];
   }
   return cons;
}
console.log(randomColor());

function changeRandomColor(){
   document.body.style.backgroundColor=randomColor();
}
btn.addEventListener("click",changeRandomColor);