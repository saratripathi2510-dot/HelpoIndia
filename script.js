const data = {

cpr:{
title:"❤️ CPR (Cardiopulmonary Resuscitation)",
body:`
<ul>
<li>Check if the person is responsive.</li>
<li>Call 112 immediately.</li>
<li>Place your hands at the center of the chest.</li>
<li>Push hard and fast (100–120 compressions per minute).</li>
<li>Continue until medical help arrives.</li>
</ul>
`
},

bleeding:{
title:"🩸 Bleeding",
body:`
<ul>
<li>Apply direct pressure with a clean cloth.</li>
<li>Raise the injured part if possible.</li>
<li>Do not remove objects stuck in the wound.</li>
<li>Call emergency services if bleeding doesn't stop.</li>
</ul>
`
},

burns:{
title:"🔥 Burns",
body:`
<ul>
<li>Cool the burn with running water for 20 minutes.</li>
<li>Do not apply toothpaste or butter.</li>
<li>Cover with a clean cloth.</li>
<li>Seek medical attention for severe burns.</li>
</ul>
`
},

fracture:{
title:"🦴 Fracture",
body:`
<ul>
<li>Do not move the injured limb unnecessarily.</li>
<li>Use a splint if available.</li>
<li>Apply ice wrapped in cloth.</li>
<li>Visit the nearest hospital immediately.</li>
</ul>
`
},

snake:{
title:"🐍 Snake Bite",
body:`
<ul>
<li>Keep the victim calm.</li>
<li>Immobilize the bitten limb.</li>
<li>Do NOT cut or suck the wound.</li>
<li>Reach a hospital immediately.</li>
</ul>
`
},

shock:{
title:"⚡ Electric Shock",
body:`
<ul>
<li>Switch off the power source first.</li>
<li>Do not touch the victim until the power is off.</li>
<li>Call emergency services.</li>
<li>Begin CPR if necessary.</li>
</ul>
`
}

};

function openModal(type){

document.getElementById("modalTitle").innerHTML=data[type].title;
document.getElementById("modalBody").innerHTML=data[type].body;

document.getElementById("firstAidModal").style.display="flex";

}

function closeModal(){

document.getElementById("firstAidModal").style.display="none";

}

window.onclick=function(event){

const modal=document.getElementById("firstAidModal");

if(event.target===modal){

modal.style.display="none";

}

}
//  HEALTH TIPS 

const tips = [

"💧 Drink at least 8 glasses of water every day.",

"🥗 Eat a balanced diet rich in fruits and vegetables.",

"🏃 Exercise for at least 30 minutes daily.",

"😴 Sleep for 7–8 hours every night.",

"🧼 Wash your hands regularly to prevent infections.",

"🚭 Avoid smoking and limit alcohol consumption.",

"🩺 Get regular health check-ups even if you feel healthy."

];

let currentTip = 0;

const tipText = document.getElementById("tipText");

function changeTip(){

    tipText.innerHTML = tips[currentTip];

    currentTip++;

    if(currentTip >= tips.length){

        currentTip = 0;

    }

}

changeTip();

setInterval(changeTip,4000);
// DISASTER MANAGEMENT

const disasterInfo = {

earthquake:{
title:"🌍 Earthquake",
body:`
<ul>
<li>Drop, Cover and Hold On.</li>
<li>Stay away from windows.</li>
<li>Do not use elevators.</li>
<li>Move to an open area after the shaking stops.</li>
</ul>`
},

flood:{
title:"🌊 Flood",
body:`
<ul>
<li>Move to higher ground.</li>
<li>Avoid walking or driving through floodwater.</li>
<li>Keep emergency supplies ready.</li>
<li>Follow official evacuation orders.</li>
</ul>`
},

fire:{
title:"🔥 Fire",
body:`
<ul>
<li>Call the fire department immediately.</li>
<li>Use stairs instead of elevators.</li>
<li>Stay low to avoid smoke.</li>
<li>If clothes catch fire, Stop, Drop and Roll.</li>
</ul>`
},

cyclone:{
title:"🌪 Cyclone",
body:`
<ul>
<li>Stay indoors.</li>
<li>Keep emergency supplies ready.</li>
<li>Avoid coastal areas.</li>
<li>Listen to official weather updates.</li>
</ul>`
},

lightning:{
title:"⚡ Lightning",
body:`
<ul>
<li>Stay indoors during thunderstorms.</li>
<li>Avoid open fields and tall trees.</li>
<li>Do not use wired electrical appliances.</li>
<li>Wait 30 minutes after the last thunder.</li>
</ul>`
},

landslide:{
title:"⛰ Landslide",
body:`
<ul>
<li>Move away from steep slopes.</li>
<li>Watch for unusual sounds.</li>
<li>Follow evacuation instructions.</li>
<li>Stay alert during heavy rainfall.</li>
</ul>`
}

};

function showDisaster(type){

document.getElementById("disasterTitle").innerHTML=disasterInfo[type].title;

document.getElementById("disasterBody").innerHTML=disasterInfo[type].body;

document.getElementById("disasterModal").style.display="flex";

}

function closeDisaster(){

document.getElementById("disasterModal").style.display="none";

}

window.addEventListener("click",function(e){

const modal=document.getElementById("disasterModal");

if(e.target===modal){

modal.style.display="none";

}

});
//WOMEN'S SAFETY

const womenInfo = {

helpline:{
title:"📞 Women Helpline",
body:`
<ul>
<li><strong>National Women Helpline:</strong> 181</li>
<li><strong>Women Police Helpline:</strong> 1091</li>
<li>Call immediately if you feel unsafe.</li>
<li>Share your live location with trusted contacts.</li>
</ul>`
},

selfdefense:{
title:"🛡️ Self Defense",
body:`
<ul>
<li>Stay aware of your surroundings.</li>
<li>Carry a safety alarm or whistle.</li>
<li>Learn basic self-defense techniques.</li>
<li>Trust your instincts and leave unsafe situations.</li>
</ul>`
},

cyber:{
title:"💻 Cyber Safety",
body:`
<ul>
<li>Never share OTPs or passwords.</li>
<li>Keep social media accounts private.</li>
<li>Block and report online harassment.</li>
<li>Use strong, unique passwords.</li>
</ul>`
},

travel:{
title:"🚕 Safe Travel",
body:`
<ul>
<li>Use verified cab services.</li>
<li>Share trip details with family or friends.</li>
<li>Avoid isolated routes at night.</li>
<li>Keep your phone charged.</li>
</ul>`
},

sos:{
title:"🚨 SOS Actions",
body:`
<ul>
<li>Call 112 for emergency assistance.</li>
<li>Activate your phone's SOS feature if available.</li>
<li>Move to a crowded or well-lit area.</li>
<li>Seek help from nearby authorities or trusted people.</li>
</ul>`
},

support:{
title:"💜 Emergency Support",
body:`
<ul>
<li>Reach out to family or trusted friends.</li>
<li>Visit the nearest police station if needed.</li>
<li>Seek medical help immediately after any injury.</li>
<li>Report incidents without delay.</li>
</ul>`
}

};

function showWomen(type){

document.getElementById("womenTitle").innerHTML = womenInfo[type].title;

document.getElementById("womenBody").innerHTML = womenInfo[type].body;

document.getElementById("womenModal").style.display = "flex";

}

function closeWomen(){

document.getElementById("womenModal").style.display = "none";

}

window.addEventListener("click", function(e){

const modal = document.getElementById("womenModal");

if(e.target === modal){

modal.style.display = "none";

}

});
// CHILD SAFETY

const childInfo = {

helpline:{
title:"📞 Child Helpline",
body:`
<ul>
<li><strong>CHILDLINE:</strong> 1098</li>
<li>Available 24×7 for children in need.</li>
<li>Call immediately if a child is in danger.</li>
</ul>`
},

choking:{
title:"🫁 Choking First Aid",
body:`
<ul>
<li>Encourage the child to cough if possible.</li>
<li>Give back blows for infants and young children as recommended.</li>
<li>Call emergency services if the airway remains blocked.</li>
<li>Seek immediate medical attention after a serious choking incident.</li>
</ul>`
},

road:{
title:"🚸 Road Safety",
body:`
<ul>
<li>Use zebra crossings whenever available.</li>
<li>Hold an adult's hand while crossing roads.</li>
<li>Always wear a helmet while cycling.</li>
<li>Wear a seat belt in vehicles.</li>
</ul>`
},

internet:{
title:"🌐 Internet Safety",
body:`
<ul>
<li>Do not share personal information online.</li>
<li>Talk to a trusted adult about suspicious messages.</li>
<li>Use parental controls when appropriate.</li>
<li>Report cyberbullying immediately.</li>
</ul>`
},

school:{
title:"🏫 School Safety",
body:`
<ul>
<li>Know your school's emergency exits.</li>
<li>Participate in safety drills.</li>
<li>Report bullying or unsafe behavior to teachers.</li>
<li>Keep emergency contact information updated.</li>
</ul>`
},

missing:{
title:"👨‍👩‍👧 Missing Child",
body:`
<ul>
<li>Call 1098 or the local police immediately.</li>
<li>Provide a recent photograph and description.</li>
<li>Inform nearby family members and schools.</li>
<li>Do not delay reporting a missing child.</li>
</ul>`
}

};

function showChild(type){

document.getElementById("childTitle").innerHTML = childInfo[type].title;

document.getElementById("childBody").innerHTML = childInfo[type].body;

document.getElementById("childModal").style.display = "flex";

}

function closeChild(){

document.getElementById("childModal").style.display = "none";

}

window.addEventListener("click", function(e){

const modal = document.getElementById("childModal");

if(e.target === document.getElementById("childModal")){

document.getElementById("childModal").style.display = "none";

}

});
//  CONTACT FORM 

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let subject = document.getElementById("subject").value.trim();

    let message = document.getElementById("message").value.trim();

    if(name=="" || email=="" || phone=="" || subject=="" || message==""){

        alert("Please fill all the fields.");

        return;

    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Please enter a valid email address.");

        return;

    }

    const phonePattern=/^[6-9]\d{9}$/;

    if(!phonePattern.test(phone)){

        alert("Please enter a valid 10-digit Indian mobile number.");

        return;

    }

    alert("Thank you! Your message has been sent successfully.");

    contactForm.reset();

});
//SEARCH BAR 

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchSection() {

    const keyword = searchInput.value.trim().toLowerCase();

    const sections = {

        "home":"home",

        "emergency":"emergency",
        "ambulance":"emergency",
        "108":"emergency",
        "police":"emergency",
        "100":"emergency",
        "fire":"emergency",
        "101":"emergency",
        "112":"emergency",

        "hospital":"hospital",
        "hospitals":"hospital",

        "blood":"blood",
        "blood bank":"blood",

        "first aid":"firstaid",
        "cpr":"firstaid",

        "health":"health",

        "disaster":"disaster",
        "earthquake":"disaster",
        "flood":"disaster",
        "cyclone":"disaster",

        "women":"women",
        "women safety":"women",

        "child":"child",
        "child safety":"child",

        "pharmacy":"pharmacy",
        "medicine":"pharmacy",

        "contact":"contact"

    };

    if(sections[keyword]){

        document.getElementById(sections[keyword]).scrollIntoView({

            behavior:"smooth"

        });

    }

    else{

        alert("No matching section found.");

    }

}

searchBtn.addEventListener("click", searchSection);

searchInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        searchSection();

    }

});

