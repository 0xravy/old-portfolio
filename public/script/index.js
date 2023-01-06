//============================================================>

VanillaTilt.init(document.querySelector("#aravanCard"), {
    max: 25,
    speed: 400
});

//============================================================>

const text = document.querySelector(".sec-text");
    
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "aravan";
    }, 0);
    setTimeout(() => {
        text.textContent = "from Saqr Team";
    }, 4450);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);

//============================================================>

const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('#navToggle');
const navExit = document.querySelector('#nav-exit');
const controleTheme = document.querySelector('#controleTheme');
const themeExite = document.querySelector('#themeExite')
const themeBtn = document.querySelector('#themeBtn');
const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);

setInterval(run, 500);

function run() {
    if(innerWidth < 800) {
        navToggle.style.display = 'block';
        // navMenu.style.display= 'none';

    } else  {
        navToggle.style.display = 'none';
        // navMenu.style.display= 'block';
    }
}


window.addEventListener('scroll', () => {
    if(innerWidth < 800) navToggle.style.display = 'block';
    else navToggle.style.display = 'none';

    switch(true) {
        case scrollY < 700:
            navLinks.forEach(navLink => { navLink.classList.remove("active-link") });
            navLinks[0].classList.add("active-link")
            navLinks[0].style.width = '100%';
            // console.log('home');
            break;
        case scrollY >= 700 && scrollY <= 1300:
            navLinks.forEach(navLink => { navLink.classList.remove("active-link") });
            navLinks[1].classList.add("active-link")
            // console.log('about');
            break;
        case scrollY >= 1300 && scrollY <= 1800:
            navLinks.forEach(navLink => { navLink.classList.remove("active-link") });
            navLinks[2].classList.add("active-link");
            // console.log('skills');
            break;
        case scrollY >= 1800 && scrollY <= 2600:
            navLinks.forEach(navLink => { navLink.classList.remove("active-link") });
            navLinks[3].classList.add("active-link");
            // console.log('portfolio');
            break;
        case scrollY >= 2500:
            navLinks.forEach(navLink => { navLink.classList.remove("active-link") });
            navLinks[4].classList.add("active-link");
            // console.log('contact');
            break;
    }
});


navToggle.onclick = () => {
    navMenu.style.display= 'block';
    navExit.style.display= 'block';
}
navExit.onclick = () => {
    navMenu.style.display= 'none';
    navExit.style.display= 'none';
}

themeBtn.onclick = () => {
    controleTheme.style.display = 'flex';
}
themeExite.onclick = () => {
    controleTheme.style.display = 'none';
}


function backgroundColor(color)
{
    document.documentElement.style.setProperty('--bgColor', color);
}

function textColor(color)
{
    document.documentElement.style.setProperty('--textColor', color);
}

function textSize(size)
{
    document.querySelector('html').style.fontSize = size+'px';
}


// ==============================================



const webHookURL = "https://discordapp.com/api/webhooks/1060894518624399370/pg2VsJZXNt3kq2MvHrBc1v11olW816kmsmBgUR5x0E5hB6ckOXvsvZ9EDprvF_1CkPdM";
const submit = document.getElementById("submit");
const form = document.getElementById("form");


// const email = document.getElementById("email");
const name = document.getElementById("name");
const message = document.getElementById("message")


const exampleEmbed = {
    color: 0x0099ff,
    url: 'https://discord.js.org',
    description: `
~> Name: ${name.value}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~> Message:
${message.value}
  `,
    thumbnail: {
        url: 'https://pngimg.com/uploads/email/email_PNG11.png',
    },
    timestamp: new Date().toISOString(),
    // footer: {
    // 	text: 'Some footer text here',
    // 	icon_url: 'https://i.imgur.com/AfFp7pu.png',
    // },
};

function discord_message(webHookURL, message) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", webHookURL, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
      'content': message,
      'username': "Emails",
      'embeds': [exampleEmbed]
  }));
}


submit.addEventListener("click", async () => {
    // if (name.value !== "" || message.value !== "") {
        
    // }
    discord_message(webHookURL, "")
    alert("message is send")
    document.location.reload()
    name.value = ""
    message.value = ""
    // console.log(email.value);
    // console.log(name.value);
    // console.log(message.value);
});
