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

document.addEventListener('click', function() {
    if (themeState === 0) {
        themeLight();
        themeState = 1;
    } else if (themeState === 1) {
        themeDark();
        themeState = 0;
    }
});
