const pages=document.querySelectorAll(".page");

function show(index){

pages.forEach(p=>p.classList.remove("active"));

pages[index].classList.add("active");

}

document.getElementById("yes").onclick=()=>show(1);

document.querySelector("#page2 .next").onclick=()=>show(2);

let selectedFood="";

document.querySelectorAll(".food").forEach(food=>{

food.onclick=()=>{

selectedFood=food.innerText;

document.getElementById("foodResult").innerHTML="🍽️ "+selectedFood;

show(3);

}

})

document.querySelector("#page4 .next").onclick=()=>show(4);

document.getElementById("no").onmouseover=()=>{

const btn=document.getElementById("no");

btn.style.position="absolute";

btn.style.left=Math.random()*80+"%";

btn.style.top=Math.random()*80+"%";

}

// glowing cursor

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

// hearts

const hearts=document.getElementById("hearts");

setInterval(()=>{

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*25)+"px";

h.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(h);

setTimeout(()=>{

h.remove();

},10000);

},350);
