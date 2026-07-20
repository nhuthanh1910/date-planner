const no=document.getElementById('no'),yes=document.getElementById('yes'),msg=document.getElementById('msg');
const t=['Are you sure?','Really?','Think again 🥺','Please? ❤️','Pretty please 💕',"Don't break my heart 💔",'Last chance 😭'];let i=0,s=1;
function move(){no.style.left=Math.random()*(innerWidth-120)+'px';no.style.top=Math.random()*(innerHeight-60)+'px';no.textContent=t[i%t.length];i++;s+=0.1;yes.style.transform='scale('+s+')'}
no.addEventListener('mouseover',move);no.addEventListener('click',move);
yes.onclick=()=>{document.body.innerHTML='<div style="display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;font-family:Arial"><h1>💖 Yay!! I knew you\'d say YES! 💖</h1><h2>See you on our date! 🥰</h2></div>'}