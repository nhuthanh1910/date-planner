const yes=document.getElementById("yes");
const no=document.getElementById("no");
const result=document.getElementById("result");

yes.onclick=()=>{
result.classList.remove("hidden");
}

no.onmouseover=()=>{
no.style.position="absolute";
no.style.left=Math.random()*80+"%";
no.style.top=Math.random()*80+"%";
}

document.querySelectorAll(".food").forEach(item=>{

item.onclick=()=>{

document.querySelectorAll(".food").forEach(i=>i.classList.remove("selected"));

item.classList.add("selected");

document.getElementById("message").innerHTML="❤️ I love emmmm ❤️";

}

});

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*40)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

},250);

const cursor=document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});
