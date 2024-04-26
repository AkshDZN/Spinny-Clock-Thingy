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

// let themeState = 0;

// document.body.addEventListener('click', function() {
//     if (themeState === 0) {
//         themeLight();
//         themeState = 1;
//     } else if (themeState === 1) {
//         themeDark();
//         themeState = 0;
//     }
// });

// switcher 

const h1 = document.getElementById("hour1");

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
