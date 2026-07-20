const yes=document.getElementById("yes");
const no=document.getElementById("no");
const result=document.getElementById("result");
const music=document.getElementById("music");

yes.onclick=()=>{

result.style.display="block";

music.play();

};

no.onmouseover=()=>{

no.style.position="absolute";

no.style.left=Math.random()*80+"vw";

no.style.top=Math.random()*80+"vh";

};

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=3+Math.random()*5+"s";

heart.style.fontSize=20+Math.random()*30+"px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),7000);

},250);

const cursor=document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});
