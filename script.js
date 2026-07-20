const pages=document.querySelectorAll(".page");

function show(i){

pages.forEach(p=>p.classList.remove("active"));

pages[i].classList.add("active");

}

document.getElementById("yes").onclick=()=>{

show(1);

}

document.getElementById("next1").onclick=()=>{

show(2);

}

document.getElementById("next2").onclick=()=>{

show(3);

}

document.querySelectorAll(".food").forEach(item=>{

item.onclick=()=>{

show(4);

}

});

const no=document.getElementById("no");

no.addEventListener("mouseover",()=>{

no.style.position="absolute";

no.style.left=Math.random()*80+"%";

no.style.top=Math.random()*80+"%";

});

const cursor=document.getElementById("cursor");

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

const hearts=document.getElementById("hearts");

setInterval(()=>{

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*40)+"px";

hearts.appendChild(h);

setTimeout(()=>{

h.remove();

},6000);

},300);
