const letters = {
  bad: `Agar aaj ka din acha nahi ja raha, bas itna yaad rakhna: har din ko perfect hona zaroori nahi. Thora rest rest kro allah sy achi umeed rkho or ye yad rkho har shar mein kher chupi hai. Tum akelay nahi ho. 🤍`,
  doubt: `Kucho pucho, apni capability par itna shak mat kiya karo. Tumhare andar woh cheez hai jo tumhein tumhare khwabon tak le ja sakti hai. Army ka dream ho ya koi aur manzil — mehnat karte rehna.`,
  angry: `Pehle gussa kar lo. phr jb khtm  khatam ho jaye toh baat kar lena mein intzar krongi. 😂 Meri bhi mazrat future k liye pehle se.`,
  miss: `Agar kabhi ye sab memories yaad aayen, toh smile kar lena. Ye choti choti cheezein hi toh hain jo baad mein sabse zyada yaad rehti hain.`
};

function openLetter(key){
  const box=document.getElementById("letterBox");
  box.textContent=letters[key];
  box.classList.remove("hidden");
  box.scrollIntoView({behavior:"smooth",block:"center"});
}
function showFinal(){
  document.getElementById("surprise").classList.add("hidden");
  document.getElementById("finalMessage").classList.remove("hidden");
}
function scrollToId(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});}
