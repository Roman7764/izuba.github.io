var click = 0;
function clickCounter() {
    ++click
    if(click % 2 == 0){
        var color_balck = document.getElementsByClassName("color_balck");
        var color_balck_length = 0;
        while(color_balck_length < color_balck.length){
            color_balck[color_balck_length].style.color = "#F5DEB3";
            color_balck_length++;
        }
        var brand_image = document.getElementsByClassName("brand_image");
        var brand_image_length = 0;
        while(brand_image_length < brand_image.length){
            brand_image[brand_image_length].style.cssText=`filter: invert(100%) !important;`;
            brand_image_length++;
        }
        var color_grey = document.getElementsByClassName("color_grey");
        var color_grey_length = 0;
        while(color_grey_length < color_grey.length){
            color_grey[color_grey_length].style.color = "#A89F8D";
            color_grey_length++;
        }
        var background_white = document.getElementsByClassName("background_white");
        var background_white_length = 0;
        while(background_white_length < background_white.length){
            background_white[background_white_length].style.backgroundColor = "#0D0D14";
            background_white_length++;
        }
        var background_grey = document.getElementsByClassName("background_grey");
        var background_grey_length = 0;
        while(background_grey_length < background_grey.length){
            background_grey[background_grey_length].style.backgroundColor = "#1D1D24";
            background_grey_length++;
        }
        var background_dark = document.getElementsByClassName("background_dark");
        var background_dark_length = 0;
        while(background_dark_length < background_dark.length){
            background_dark[background_dark_length].style.backgroundColor = "#0D0D14";
            background_dark_length++;
        }
        var background_wheat = document.getElementsByClassName("background_wheat");
        var background_wheat_length = 0;
        while(background_wheat_length < background_wheat.length){
            background_wheat[background_wheat_length].style.backgroundColor = "#101017";
            background_wheat_length++;
        }
        var fill_black = document.getElementsByClassName("fill_black");
        var fill_black_length = 0;
        while(fill_black_length < fill_black.length){
            fill_black[fill_black_length].style.cssText=` fill: wheat !important;`;
            fill_black_length++;
        }
        var border_dark = document.getElementsByClassName("border_dark");
        var border_dark_length = 0;
        while(border_dark_length < border_dark.length){
            border_dark[border_dark_length].style.cssText=` background-color: #0D0D14; border: .5vw solid #0D0D14 !important;`;
            border_dark_length++;
        }
        var color_turbid = document.getElementsByClassName("color_turbid");
        var color_turbid_length = 0;
        while(color_turbid_length < color_turbid.length){
            color_turbid[color_turbid_length].style.color = "#A39C8F";
            color_turbid_length++;
        }
    }else{
        var color_balck = document.getElementsByClassName("color_balck");
        var color_balck_length = 0;
        while(color_balck_length < color_balck.length){
            color_balck[color_balck_length].style.color = "#000000";
            color_balck_length++;
        }
        var brand_image = document.getElementsByClassName("brand_image");
        var brand_image_length = 0;
        while(brand_image_length < brand_image.length){
            brand_image[brand_image_length].style.cssText=`filter: invert(0%) !important;`;
            brand_image_length++;
        }
        var color_grey = document.getElementsByClassName("color_grey");
        var color_grey_length = 0;
        while(color_grey_length < color_grey.length){
            color_grey[color_grey_length].style.color = "#151515";
            color_grey_length++;
        }
        var background_white = document.getElementsByClassName("background_white");
        var background_white_length = 0;
        while(background_white_length < background_white.length){
            background_white[background_white_length].style.backgroundColor = "#ffffff";
            background_white_length++;
        }
        var background_grey = document.getElementsByClassName("background_grey");
        var background_grey_length = 0;
        while(background_grey_length < background_grey.length){
            background_grey[background_grey_length].style.backgroundColor = "#F6F6F6";
            background_grey_length++;
        }
        var background_dark = document.getElementsByClassName("background_dark");
        var background_dark_length = 0;
        while(background_dark_length < background_dark.length){
            background_dark[background_dark_length].style.backgroundColor = "#1D1D24";
            background_dark_length++;
        }
        var background_wheat = document.getElementsByClassName("background_wheat");
        var background_wheat_length = 0;
        while(background_wheat_length < background_wheat.length){
            background_wheat[background_wheat_length].style.backgroundColor = "#D9D9E0";
            background_wheat_length++;
        }
        var fill_black = document.getElementsByClassName("fill_black");
        var fill_black_length = 0;
        while(fill_black_length < fill_black.length){
            fill_black[fill_black_length].style.cssText=`fill: #1D1D24 !important;`;
            fill_black_length++;
        }
        var border_dark = document.getElementsByClassName("border_dark");
        var border_dark_length = 0;
        while(border_dark_length < border_dark.length){
            border_dark[border_dark_length].style.cssText=` background-color: #1D1D24; border: .5vw solid #1D1D24 !important;`;
            border_dark_length++;
        }
        var color_turbid = document.getElementsByClassName("color_turbid");
        var color_turbid_length = 0;
        while(color_turbid_length < color_turbid.length){
            color_turbid[color_turbid_length].style.color = "#3F3F3F";
            color_turbid_length++;
        }
    }
}
function toggleVideo(state) {
    var div = document.getElementById("popupVid");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    div.style.display = state == 'block' ? 'none' : '';
    func = state == 'block' ? 'pauseVideo' : 'playVideo';
    iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
}
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}