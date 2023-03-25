

// digital clock


function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    // h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    // s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + " " + session;
    // document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("timer").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();




// 
var draggable = document.getElementById("draggable");
var offset = {x: 0, y: 0};
var isDragging = false;
let zIndex = 1;


draggable.addEventListener("mousedown", function(e) {
    draggable.style.zIndex = ++zIndex;
    offset.x = e.clientX - draggable.offsetLeft;
    offset.y = e.clientY - draggable.offsetTop;
    isDragging = true;
});

document.addEventListener("mousemove", function(e) {
    if (isDragging) {
        draggable.style.left = (e.clientX - offset.x) + "px";
        draggable.style.top = (e.clientY - offset.y) + "px";
    }
});

document.addEventListener("mouseup", function(e) {
    isDragging = false;
});

var img = draggable.querySelector("#abt-close");
img.addEventListener("click", function(e) {
    // draggable.parentNode.removeChild(draggable);
    console.log(draggable.style.display);
    draggable.style.display = "none";
});


const pfPic = document.getElementById('profile-icon');

pfPic.addEventListener("click",function(e){
    draggable.style.zIndex = ++zIndex;
    draggable.style.display = "block";
})



// resume -
var resdraggable = document.getElementById("resdraggable");

var moffset = {m: 0, n: 0};
var ismDragging = false;
zIndex = 1;

resdraggable.addEventListener("mousedown", function(e) {
    resdraggable.style.zIndex = ++zIndex;
    moffset.m = e.clientX - resdraggable.offsetLeft;
    moffset.n = e.clientY - resdraggable.offsetTop;
    ismDragging = true;
});

document.addEventListener("mousemove", function(e) {
    if (ismDragging) {
        resdraggable.style.left = (e.clientX - offset.x) + "px";
        resdraggable.style.top = (e.clientY - offset.y) + "px";
    }
});

document.addEventListener("mouseup", function(e) {
    ismDragging = false;
});

var img = resdraggable.querySelector("#res-close");
img.addEventListener("click", function(e) {
    // draggable.parentNode.removeChild(draggable);
    console.log(resdraggable.style.display);
    resdraggable.style.display = "none";
});


const blogg = document.getElementById('blog');

blogg.addEventListener("click",function(e){
    resdraggable.style.zIndex = ++zIndex;
    resdraggable.style.display = "block";
})


// 

// Get the project elements
const proj1 = document.getElementById("proj1");
const proj2 = document.getElementById("proj2");
const proj3 = document.getElementById("proj3");

// Get the project information elements
const projTitle = document.querySelector(".proj-title");
const projDemoPic = document.querySelector(".proj-demo-pic");
const projAboutText = document.querySelector(".proj-about-text");
const projFeatures = document.querySelector(".proj-features");
const projGit = document.querySelector(".proj-git");
const projLive = document.querySelector(".proj-live");

// Set the initial project information
projTitle.textContent = "Digital voting sytem using Blockchin Technology";
projDemoPic.src = "styles/assets/2187_list.jpg";
projAboutText.textContent = "To surpass the centralized control over election.to keep transparency in the whole electoral process .We developed a online voting system. we used Ethereum blockchain network , metamask and ganache for testing blockchain.";
projFeatures.innerHTML = "<ul style='width: 200px;'><li>Registrration</li><li>validation</li><li>vote verification</li><li>decentralized</li></ul>";
projGit.innerHTML = "<img class='gitimg' src='styles/assets/github-64.png' alt=''><div>GitHub</div>";
projLive.innerHTML = "<img class='webimg' src='styles/assets/web-48.png' alt=''><div>Live Website</div>";

// Add event listeners to the project elements
proj1.addEventListener("click", () => {
    projTitle.textContent = "Digital voting sytem using Blockchin Technology";
    projDemoPic.src = "styles/assets/2187_list.jpg";
    projAboutText.textContent = "To surpass the centralized control over election.to keep transparency in the whole electoral process .We developed a online voting system. we used Ethereum blockchain network , metamask and ganache for testing blockchain.";
    projFeatures.innerHTML = "<ul style='width: 200px;'><li>Registrration</li><li>validation</li><li>vote verification</li><li>decentralized</li></ul>";
    projGit.innerHTML = "<img class='gitimg' src='styles/assets/github-64.png' alt=''><div>GitHub</div>";
    projLive.innerHTML = "<img class='webimg' src='styles/assets/web-48.png' alt=''><div>Live Website</div>";
    
});

proj2.addEventListener("click", () => {
  projTitle.textContent = "Encrypted Email Sending Application ";
  projDemoPic.src = "styles/assets/2187_list.jpg";
  projAboutText.textContent = " Everyone Wants want Confidentiality during communication. Email have become an integral part of profession life.so using python programming language and AES algorithm we have developed our Encrypted Email sending application for privacy protection.";
  projFeatures.innerHTML = "<ul style='width: 200px;'><li>Key based encryption</li><li>Decrypt mail</li><li>send mail using Gmail, Yahoo</li></ul>";
  projGit.innerHTML = "<img class='gitimg' src='styles/assets/github-64.png' alt=''><div>GitHub</div>";
  projLive.innerHTML = "<img class='webimg' src='styles/assets/web-48.png' alt=''><div>Live Website</div>";
    
});

proj3.addEventListener("click", () => {
  projTitle.textContent = "Digital Forensic Tool";
  projDemoPic.src = "path/to/project3/image.jpg";
  projAboutText.textContent = "Digital Forensic Tools are software applications that help to preserve, identify, extract, and document computer evidence for law procedures.";
  projFeatures.innerHTML = "<ul style='width: 200px;'><li>Keyword Search</li><li>Decrypter</li><li>Metadata extractor</li><li>Filetype detector</li><li>File extension Search</li></ul>";
  projGit.innerHTML = "<img class='gitimg' src='styles/assets/github-64.png' alt=''><div>GitHub</div>";
  projLive.innerHTML = "<img class='webimg' src='styles/assets/web-48.png' alt=''><div>Live Website</div>";
    
});



var prodraggable = document.getElementById("prodraggable");
var xoffset = {x: 0, y: 0};
var xisDragging = false;
 zIndex = 1;


prodraggable.addEventListener("mousedown", function(e) {
    prodraggable.style.zIndex = ++zIndex;
    xoffset.x = e.clientX - prodraggable.offsetLeft;
    xoffset.y = e.clientY - prodraggable.offsetTop;
    xisDragging = true;
});

document.addEventListener("mousemove", function(e) {
    if (xisDragging) {
        prodraggable.style.left = (e.clientX - xoffset.x) + "px";
        prodraggable.style.top = (e.clientY - xoffset.y) + "px";
    }
});

document.addEventListener("mouseup", function(e) {
    xisDragging = false;
});

var img = prodraggable.querySelector("#proj-close");
img.addEventListener("click", function(e) {
    // draggable.parentNode.removeChild(draggable);
    console.log(prodraggable.style.display);
    prodraggable.style.display = "none";
});

const projfPic = document.getElementById('proj-idea');

projfPic.addEventListener("click",function(e){
    prodraggable.style.zIndex = ++zIndex;
    prodraggable.style.display = "block";
    // document.documentElement.requestFullscreen();
})



// ************************************

var termdraggable = document.getElementById("termdraggable");
var termoffset = {x: 0, y: 0};
var termisDragging = false;
 zIndex = 1;


termdraggable.addEventListener("mousedown", function(e) {
    termdraggable.style.zIndex = ++zIndex;
    termoffset.x = e.clientX - termdraggable.offsetLeft;
    termoffset.y = e.clientY - termdraggable.offsetTop;
    termisDragging = true;
});

document.addEventListener("mousemove", function(e) {
    if (termisDragging) {
        termdraggable.style.left = (e.clientX - termoffset.x) + "px";
        termdraggable.style.top = (e.clientY - termoffset.y) + "px";
    }
});

document.addEventListener("mouseup", function(e) {
    termisDragging = false;
});

var img = termdraggable.querySelector("#trm-close");
img.addEventListener("click", function(e) {
    // draggable.parentNode.removeChild(draggable);
    console.log(termdraggable.style.display);
    termdraggable.style.display = "none";
});

const trmfPic = document.getElementById('trml');

trmfPic.addEventListener("click",function(e){
    termdraggable.style.zIndex = ++zIndex;
    termdraggable.style.display = "block";
    // document.documentElement.requestFullscreen();
})