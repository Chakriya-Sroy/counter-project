var des=document.getElementById('des');
var reset=document.getElementById('reset');
var ins=document.getElementById('ins');
var num=document.getElementById('number');
let i=0;
des.addEventListener('click',function(){
    i=i-1;
    num.textContent=i;
})
ins.addEventListener('click',function(){
    i=i+1;
    num.textContent=i;
})
reset.addEventListener('click',function(){
    i=0;
    num.textContent=i;
})
