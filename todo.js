let text=document.getElementById("text");
let ul=document.getElementById("ul");
let li=document.querySelectorAll("#ul li");
let clear1=document.getElementById("clear");
let date=new Date();
/* let list=document.querySelectorAll("ul li"); */
clear1.addEventListener("click",()=>{
     li.forEach((ele)=>{
        if(ele.classList.contains("checked"))
        {
            ele.classList.add("remove");
            ele.classList.remove("checked")
            setTimeout(()=>ele.remove(),600);
            addData();
        }
     });
     update();
});
function addtask(){
    let str=text.value;
    if(str.length>20)
    {

    }
    if(str==""){
        alert("please add a valid task");
    }
    else{
        text.value='';
        let li=document.createElement("li");
        li.textContent=str;
        ul.append(li);
        let span=document.createElement("span");
        span.textContent="x";
        li.append(span);
        let datetime=document.createElement("h4");
        datetime.id="date";
        datetime.textContent=`${date.toString().slice(0,21)}`;
        li.append(datetime);
        addData();
    }
    li=document.querySelectorAll("#ul li");
}
/* list.forEach(element=>{
    element.addEventListener("click",l=>{
        l.target.style.color="red";
    })
}) */
ul.addEventListener("click",event=>{
    if(event.target.nodeName=="LI")
    {
        event.target.classList.toggle("checked");
        update();
       /* addData(); */
    }
    else if(event.target.nodeName=="SPAN")
    {
        if(event.target.parentElement.classList.contains("checked")){
           event.target.parentElement.classList.toggle("remove");
          setTimeout(()=>{event.target.parentElement.remove()},600);
           setTimeout(()=>addData(),600);
           event.target.parentElement.classList.remove("checked");
           update();
        }
        else{
            event.target.parentElement.classList.add("popup");
        }
        li=document.querySelectorAll("#ul li");
        setTimeout(()=>event.target.parentElement.classList.remove("popup"),1000);
    }
    update();
});
function update(){
    let count=0;
   li.forEach((ele)=>{
   if(ele.classList.contains("checked"))
   {
    count++;
   };
   });
   if(count>=2)
   {
    clear1.style.display="block";
   }
   else{
    clear1.style.display="none";
   }
    
   };
function addData(){
    localStorage.setItem("data",ul.innerHTML);
}
function showData(){
    ul.innerHTML=localStorage.getItem("data");
}
function liitems(){
    console.log(li);
}
showData();
addData();
