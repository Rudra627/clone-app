let str="";
let buttons=document.querySelectorAll(".btn");
let box=document.querySelector("#display");
 Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(evt)=>
    {
        if(evt.target.innerText=="="){
            str=eval(str);
            box.value=str;
        }
        else if(evt.target.innerText=="AC"){
            str=eval(str);
            box.value=" ";
            str="";
        }
        else if(evt.target.innerText==""){
            str=eval(str);
            box.value=" ";
            str="";
        }
else{
    str=str+evt.target.innerText;
    box.value=str;
}
    })
});