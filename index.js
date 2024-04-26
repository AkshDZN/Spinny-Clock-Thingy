const root = document.querySelector(":root");

function themeLight() {
    root.style.setProperty('--bg', '#EEEEEE');
    root.style.setProperty('--pill', 'linear-gradient(180deg, white 0%, #CECECE 100%)');
    root.style.setProperty('--pillStroke', 'linear-gradient(180deg, #EFEFEF 0%, #A6A6A6 100%)');
    root.style.setProperty('--text', 'linear-gradient(180deg, #0A0A0A 0%, #707070 100%)');
    root.style.setProperty('--credits', 'black');
}

function themeDark() {
    root.style.setProperty('--bg', '#0a0a0a');
    root.style.setProperty('--pill', 'linear-gradient(180deg, #1A1A1A 0%, #0C0C0C 100%)');
    root.style.setProperty('--pillStroke', 'linear-gradient(180deg, #353535 0%, #0F0F0F 100%)');
    root.style.setProperty('--text', 'linear-gradient(180deg, rgb(255, 255, 255) 0%, #565656 100%)');
    root.style.setProperty('--credits', 'white');
}

let themeState = 0;

document.body.addEventListener('click', function() {
    if (themeState === 0) {
        themeLight();
        themeState = 1;
    } else if (themeState === 1) {
        themeDark();
        themeState = 0;
    }
});

// switcher 

const h1 = document.getElementById("hour1");
const h2 = document.getElementById("hour2");

// h1.style.translate = "0px 0px"; //0
// h1.style.translate = "0px -100px"; //1
// h1.style.translate = "0px -210px"; //2
// h1.style.translate = "0px -320px"; //3
// h1.style.translate = "0px -428px"; //4
// h1.style.translate = "0px -535px"; //5
// h1.style.translate = "0px -640px"; //6
// h1.style.translate = "0px -750px"; //7
// h1.style.translate = "0px -855px"; //8
// h1.style.translate = "0px -960px"; //9

function fliph1(no) {
    if (no === 0) {
        h1.style.translate = "0px 0px";
    } else if (no === 1) {
        h1.style.translate = "0px -100px";
    } else if (no === 2) {
        h1.style.translate = "0px -210px";
    } else if (no === 3) {
        h1.style.translate = "0px -320px";
    } else if (no === 4) {
        h1.style.translate = "0px -428px";
    } else if (no === 5) {
        h1.style.translate = "0px -535px";
    } else if (no === 6) {
        h1.style.translate = "0px -640px";
    } else if (no === 7) {
        h1.style.translate = "0px -750px";
    } else if (no === 8) {
        h1.style.translate = "0px -855px";
    } else if (no === 9) {
        h1.style.translate = "0px -960px";
    }
}

function fliph2(no) {
    if (no === 0) {
        h2.style.translate = "0px 0px";
    } else if (no === 1) {
        h2.style.translate = "0px -100px";
    } else if (no === 2) {
        h2.style.translate = "0px -210px";
    } else if (no === 3) {
        h2.style.translate = "0px -320px";
    } else if (no === 4) {
        h2.style.translate = "0px -428px";
    } else if (no === 5) {
        h2.style.translate = "0px -535px";
    } else if (no === 6) {
        h2.style.translate = "0px -640px";
    } else if (no === 7) {
        h2.style.translate = "0px -750px";
    } else if (no === 8) {
        h2.style.translate = "0px -855px";
    } else if (no === 9) {
        h2.style.translate = "0px -960px";
    }
}

const m1 = document.getElementById("min1");
const m2 = document.getElementById("min2");

function flipm1(no) {
    if (no === 0) {
        m1.style.translate = "0px 0px";
    } else if (no === 1) {
        m1.style.translate = "0px -100px";
    } else if (no === 2) {
        m1.style.translate = "0px -210px";
    } else if (no === 3) {
        m1.style.translate = "0px -320px";
    } else if (no === 4) {
        m1.style.translate = "0px -428px";
    } else if (no === 5) {
        m1.style.translate = "0px -535px";
    } else if (no === 6) {
        m1.style.translate = "0px -640px";
    } else if (no === 7) {
        m1.style.translate = "0px -750px";
    } else if (no === 8) {
        m1.style.translate = "0px -855px";
    } else if (no === 9) {
        m1.style.translate = "0px -960px";
    }
}

function flipm2(no) {
    if (no === 0) {
        m2.style.translate = "0px 0px";
    } else if (no === 1) {
        m2.style.translate = "0px -100px";
    } else if (no === 2) {
        m2.style.translate = "0px -210px";
    } else if (no === 3) {
        m2.style.translate = "0px -320px";
    } else if (no === 4) {
        m2.style.translate = "0px -428px";
    } else if (no === 5) {
        m2.style.translate = "0px -535px";
    } else if (no === 6) {
        m2.style.translate = "0px -640px";
    } else if (no === 7) {
        m2.style.translate = "0px -750px";
    } else if (no === 8) {
        m2.style.translate = "0px -855px";
    } else if (no === 9) {
        m2.style.translate = "0px -960px";
    }
}

const s1 = document.getElementById("sec1");
const s2 = document.getElementById("sec2");

function flips1(no) {
    if (no === 0) {
        s1.style.translate = "0px 0px";
    } else if (no === 1) {
        s1.style.translate = "0px -100px";
    } else if (no === 2) {
        s1.style.translate = "0px -210px";
    } else if (no === 3) {
        s1.style.translate = "0px -320px";
    } else if (no === 4) {
        s1.style.translate = "0px -428px";
    } else if (no === 5) {
        s1.style.translate = "0px -535px";
    } else if (no === 6) {
        s1.style.translate = "0px -640px";
    } else if (no === 7) {
        s1.style.translate = "0px -750px";
    } else if (no === 8) {
        s1.style.translate = "0px -855px";
    } else if (no === 9) {
        s1.style.translate = "0px -960px";
    }
}

function flips2(no) {
    if (no === 0) {
        s2.style.translate = "0px 0px";
    } else if (no === 1) {
        s2.style.translate = "0px -100px";
    } else if (no === 2) {
        s2.style.translate = "0px -210px";
    } else if (no === 3) {
        s2.style.translate = "0px -320px";
    } else if (no === 4) {
        s2.style.translate = "0px -428px";
    } else if (no === 5) {
        s2.style.translate = "0px -535px";
    } else if (no === 6) {
        s2.style.translate = "0px -640px";
    } else if (no === 7) {
        s2.style.translate = "0px -750px";
    } else if (no === 8) {
        s2.style.translate = "0px -855px";
    } else if (no === 9) {
        s2.style.translate = "0px -960px";
    }
}

const ampm = document.getElementById("ampm");

function flipampm(no) {
    if (no === 0) {
        ampm.style.translate = "0px 0px";
    } else if (no === 1) {
        ampm.style.translate = "0px -125px";
    }
}

// time and parser 

setInterval(() => {
    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    
    let hours12 = hours % 12;
    
    let hoursString = hours12 < 10 ? '0' + hours12 : hours12.toString();
    
    let minutesString = minutes < 10 ? '0' + minutes : minutes.toString();
    
    let secondsString = seconds < 10 ? '0' + seconds : seconds.toString();
    
    let amPm = hours < 12 ? '0' : '1';
    
    let timeString = hoursString + ':' + minutesString + ':' + secondsString + (amPm ? ' ' + amPm : '');
    

    let finalh1 = parseInt(timeString.charAt(0));
    let finalh2 = parseInt(timeString.charAt(1));

    fliph1(finalh1);
    fliph2(finalh2);

    let finalm1 = parseInt(timeString.charAt(3));
    let finalm2 = parseInt(timeString.charAt(4));

    flipm1(finalm1);
    flipm2(finalm2);

    let finals1 = parseInt(timeString.charAt(6));
    let finals2 = parseInt(timeString.charAt(7));

    flips1(finals1);
    flips2(finals2);

    let finalampm = parseInt(timeString.charAt(9));

    flipampm(finalampm);
}, 1000);



