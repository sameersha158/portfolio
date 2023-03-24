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
let zIndex = 1;


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

var img = prodraggable.querySelector("img");
img.addEventListener("click", function(e) {
    // draggable.parentNode.removeChild(draggable);
    console.log(prodraggable.style.display);
    prodraggable.style.display = "none";
});

const projfPic = document.getElementById('proj-idea');

projfPic.addEventListener("click",function(e){
    prodraggable.style.zIndex = ++zIndex;
    prodraggable.style.display = "block";
})

