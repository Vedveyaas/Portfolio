// for blinking text
var typed = new Typed("#typing-text", {
    strings: ["Web Developer", "Competitive programmer", "Learner"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// horizontal progress bars variables
let htmlbar = document.querySelector(".html-bar");
let htmlprogresstext = document.querySelector(".htmlprogess-text");
let htmlwidth = 0;
let cssbar = document.querySelector(".css-bar");
let cssprogresstext = document.querySelector(".cssprogess-text");
let csswidth = 0;
let jsbar = document.querySelector(".js-bar");
let jsprogresstext = document.querySelector(".jsprogess-text");
let jswidth = 0;
let reactbar = document.querySelector(".react-bar");
let reactprogresstext = document.querySelector(".reactprogess-text");
let reactwidth = 0;
let nodejsbar = document.querySelector(".nodejs-bar");
let nodejsprogresstext = document.querySelector(".nodejsprogess-text");
let nodejswidth = 0;
let expressbar = document.querySelector(".express-bar");
let expressprogresstext = document.querySelector(".expressprogess-text");
let expresswidth = 0;
let mongodbbar = document.querySelector(".mongodb-bar");
let mongodbprogresstext = document.querySelector(".mongodbprogess-text");
let mongodbwidth = 0;
let sqlbar = document.querySelector(".sql-bar");
let sqlprogresstext = document.querySelector(".sqlprogess-text");
let sqlwidth = 0;

//horizontal progress bar functions
let htmlprogressbar = setInterval(() => {
    htmlwidth++;
    htmlbar.style.width = htmlwidth + "%";
    htmlprogresstext.innerHTML = htmlwidth + "%"
    if (htmlwidth == 90) {
        clearInterval(htmlprogressbar)
    }
}, 10)
let cssprogressbar = setInterval(() => {
    csswidth++;
    cssbar.style.width = csswidth + "%";
    cssprogresstext.innerHTML = csswidth + "%"
    if (csswidth == 80) {
        clearInterval(cssprogressbar)
    }
}, 10)
let jsprogressbar = setInterval(() => {
    jswidth++;
    jsbar.style.width = jswidth + "%";
    jsprogresstext.innerHTML = jswidth + "%"
    if (jswidth == 70) {
        clearInterval(jsprogressbar)
    }
}, 10)
let reactprogressbar = setInterval(() => {
    reactwidth++;
    reactbar.style.width = reactwidth + "%";
    reactprogresstext.innerHTML = reactwidth + "%"
    if (reactwidth == 50) {
        clearInterval(reactprogressbar)
    }
}, 10)
let nodejsprogressbar = setInterval(() => {
    nodejswidth++;
    nodejsbar.style.width = nodejswidth + "%";
    nodejsprogresstext.innerHTML = nodejswidth + "%"
    if (nodejswidth == 75) {
        clearInterval(nodejsprogressbar)
    }
}, 10)
let expressprogressbar = setInterval(() => {
    expresswidth++;
    expressbar.style.width = expresswidth + "%";
    expressprogresstext.innerHTML = expresswidth + "%"
    if (expresswidth == 55) {
        clearInterval(expressprogressbar)
    }
}, 10)
let mongodbprogressbar = setInterval(() => {
    mongodbwidth++;
    mongodbbar.style.width = mongodbwidth + "%";
    mongodbprogresstext.innerHTML = mongodbwidth + "%"
    if (mongodbwidth == 85) {
        clearInterval(mongodbprogressbar)
    }
}, 10)
let sqlprogressbar = setInterval(() => {
    sqlwidth++;
    sqlbar.style.width = sqlwidth + "%";
    sqlprogresstext.innerHTML = sqlwidth + "%"
    if (sqlwidth == 80) {
        clearInterval(sqlprogressbar)
    }
}, 10)

// ring-bars variables
let teamwork = document.querySelector(".team-work");
let teamtext = document.querySelector(".team-work-text");
let teamwidth = 0;
let creativity = document.querySelector(".creativity");
let creativitytext = document.querySelector(".creativity-text");
let creativitywidth = 0;
let projectmanagement = document.querySelector(".project-management");
let projectmanagementtext = document.querySelector(".project-management-text");
let projectmanagementwidth = 0;
let communication = document.querySelector(".communication");
let communicationtext = document.querySelector(".communication-text");
let communicationwidth = 0;

// ring-bars functions
let teamringbar = setInterval(() => {
    teamwidth++;
    teamtext.innerHTML = `${teamwidth + "%"}`;
    // teamtext.innerHTML = teamwidth + "%";
    teamwork.style.background = `conic-gradient(yellow ${teamwidth * 3.6}deg,white 0deg)`;
    if (teamwidth == 70) {
        clearInterval(teamringbar);
    }
}, 10)
let creativityringbar = setInterval(() => {
    creativitywidth++;
    creativitytext.innerHTML = `${creativitywidth + "%"}`;
    creativity.style.background = `conic-gradient(#30d71d ${creativitywidth * 3.6}deg,white 0deg)`;
    if (creativitywidth == 80) {
        clearInterval(creativityringbar);
    }
}, 10)
let projectmanagementringbar = setInterval(() => {
    projectmanagementwidth++;
    projectmanagementtext.innerHTML = `${projectmanagementwidth + "%"}`;
    projectmanagement.style.background = `conic-gradient(#D71313 ${projectmanagementwidth * 3.6}deg,white 0deg)`;
    if (projectmanagementwidth == 70) {
        clearInterval(projectmanagementringbar);
    }
}, 10)
let communicationringbar = setInterval(() => {
    communicationwidth++;
    communicationtext.innerHTML = `${communicationwidth + "%"}`;
    communication.style.background = `conic-gradient(#3AA6B9 ${communicationwidth * 3.6}deg,white 0deg)`;
    if (communicationwidth == 90) {
        clearInterval(communicationringbar);
    }
}, 10)

//extra-projects controlling variables
let extra_projects = document.querySelector(".extra-projects");
let extra_projects_1 = document.querySelector(".extra-projects-1");
let project_showmore_btn = document.querySelector(".project-btn");

project_showmore_btn.addEventListener("click", () => {
    if (project_showmore_btn.innerHTML == "Show more") {
        if (window.getComputedStyle(extra_projects).display == "none" && window.getComputedStyle(extra_projects_1).display == "flex") {
            project_showmore_btn.innerHTML = "Show less";
            extra_projects.style.display = "flex";
        }
        else if (window.getComputedStyle(extra_projects_1).display == "none" && window.getComputedStyle(extra_projects_1).display == "none") {
            extra_projects_1.style.display = "flex";
            extra_projects.style.display = "none";
            project_showmore_btn.innerHTML = "Show more";
        }
        else {
            project_showmore_btn.innerHTML = "Show less";
        }
    }
    else if (project_showmore_btn.innerHTML == "Show less") {
        if (window.getComputedStyle(extra_projects_1).display == "flex" && window.getComputedStyle(extra_projects).display == "flex" && window.innerWidth <= 600) {
            extra_projects.style.display = "none";
            project_showmore_btn.innerHTML = "Show less";
        }
        else if (window.getComputedStyle(extra_projects_1).display == "flex" && window.getComputedStyle(extra_projects).display == "flex" && window.innerWidth > 600) {
            extra_projects.style.display = "none";
            project_showmore_btn.innerHTML = "Show more";
        }
        else if (window.getComputedStyle(extra_projects_1).display == "flex" && window.getComputedStyle(extra_projects).display == "none") {
            extra_projects.style.display = "none";
            extra_projects_1.style.display = "none";
            project_showmore_btn.innerHTML = "Show more";
        }
    }
})

// page scroll different section animation code
let uparrow = document.querySelector(".up-arrow")
let header = document.getElementById("header");
let about = document.getElementById("about");
let sections = document.querySelectorAll("section")
window.addEventListener("scroll", () => {
    let pageTop = this.window.scrollY;
    let headerheight = header.offsetHeight;
    let aboutheight = about.offsetHeight;

    // up-arrow display control on scroll
    if (pageTop < headerheight + aboutheight || pageTop <= 0) {
        uparrow.style.display = "none";
    }
    else {
        uparrow.style.display = "block";
    }
    sections.forEach(sec => {
        let sec_offsetTop = sec.offsetTop;
        let sec_offsetHeight = sec.offsetHeight;

        if ((pageTop >= sec_offsetTop - 100) && (pageTop < sec_offsetTop + sec_offsetHeight)) {
            sec.classList.add("sec-animation");
        }
        else {
            sec.classList.remove("sec-animation");
        }
    })


})


// for nav bar using menu-bar in mobile view
let menubar = document.querySelector(".menu-bar");
let menu = document.getElementById("menu");
let cross = document.getElementById("crossmark");
let nav = document.querySelector("nav");

menubar.addEventListener('click', () => {
    nav.classList.toggle("navtoggle");
    if (window.getComputedStyle(nav).display == "block") {
        menu.style.display = "none"
        cross.style.display = "block"
    }
    else if (window.getComputedStyle(nav).display == "none") {
        menu.style.display = "block"
        cross.style.display = "none"
    }
})
