import "./Slider.css";

const wallpaper = key => {
    console.log(key);

    if (key >= 21 && key < 4) document.body.className = "night";
    else if (key >= 4 && key < 5) document.body.className = "godz420";
    else if (key >= 6 && key < 9) document.body.className = "sunrise";
    else if (key >= 9 && key < 16) document.body.className = "day";
    else if (key >= 16 && key < 21) document.body.className = "evening";
};

export default wallpaper;
