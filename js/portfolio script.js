var choice_button = document.getElementsByClassName("choice_button");
var image_wrapper1 = document.getElementsByClassName("image_wrapper1");
var video_image_wrapper = document.getElementsByClassName("video_image_wrapper");
var portfolio_image2 = document.getElementsByClassName("image_wrapper1_1");
var portfolio_image3 = document.getElementsByClassName("portfolio_image3");
var portfolio_image4 = document.getElementsByClassName("portfolio_image4");
var portfolio_images_wrapper2 = document.getElementsByClassName("portfolio_images_wrapper2");
var img1 = document.getElementsByClassName("img1");
var img2 = document.getElementsByClassName("img2");
var img5 = document.getElementsByClassName("img5");
var img6 = document.getElementsByClassName("img6");
var wheat = ` color: wheat; transform: scale(1);`;
choice_button[0].style.cssText=` color: rgb(255, 0, 128); transform: scale(1.1);`;
choice_button[1].style.cssText= wheat;
choice_button[2].style.cssText= wheat;
function changeImages1() {
    choice_button[0].style.cssText=` color: rgb(255, 0, 128); transform: scale(1.1);`;
    choice_button[1].style.cssText= wheat;
    choice_button[2].style.cssText= wheat;
    portfolio_image4[0].style.cssText=` display: block;`;
    portfolio_image2[0].style.cssText=` display: flex;`;
    image_wrapper1[0].style.cssText=` width: 61.2%;`;
    portfolio_image3[0].style.cssText=` width: 38.8%; display: block;`;
    video_image_wrapper[0].style.cssText=` display: flex;`;
    portfolio_images_wrapper2[0].style.cssText=` display: flex;`;
    img1[0].style.cssText=` width: 50%; display: block;`;
    img2[0].style.cssText=` width: 50%; display: block;`;
    img5[0].style.cssText=` width: 50%; display: block;`;
    img6[0].style.cssText=` width: 50%; display: block;`;
}
function changeImages2() {
    choice_button[0].style.cssText= wheat;
    choice_button[1].style.cssText=` color: rgb(255, 0, 128); transform: scale(1.1);`;
    choice_button[2].style.cssText= wheat;
    video_image_wrapper[0].style.cssText=` display: flex;`;
    portfolio_images_wrapper2[0].style.cssText=` display: flex;`;
    portfolio_image4[0].style.cssText=` display: none;`;
    portfolio_image2[0].style.cssText=` display: none;`;
    image_wrapper1[0].style.cssText=` width: 70.69%;`;
    portfolio_image3[0].style.cssText=` display: block; width: 29.31%;`;
    img5[0].style.cssText=` width: 50%; display: block;`;
    img6[0].style.cssText=` width: 50%; display: block;`;
}
function changeImages3() {
    choice_button[0].style.cssText= wheat;
    choice_button[1].style.cssText= wheat;
    choice_button[2].style.cssText=` color: rgb(255, 0, 128); transform: scale(1.1);`;
    portfolio_image4[0].style.cssText=` display: block;`;
    portfolio_image2[0].style.cssText=` display: flex;`;
    video_image_wrapper[0].style.cssText=` display: none;`;
    portfolio_image3[0].style.cssText=` display: none;`;
    portfolio_images_wrapper2[0].style.cssText=` display: none;`;
    image_wrapper1[0].style.cssText=` width: 100%;`;
    img1[0].style.cssText=` width: 50%; display: block;`;
    img2[0].style.cssText=` width: 50%; display: block;`;
}
function changeImage1() {
    img1[0].style.cssText=` width: 100%;`;
    img2[0].style.cssText=` display: none;`;
    portfolio_images_wrapper2[0].style.cssText=` display: none;`;
    portfolio_image3[0].style.cssText=` display: none;`;
    image_wrapper1[0].style.cssText=` width: 100%;`;
    video_image_wrapper[0].style.cssText=` display: none;`;
    portfolio_image4[0].style.cssText=` display: none;`;
}
function changeImage2() {
    img1[0].style.cssText=` display: none;`;
    img2[0].style.cssText=` width: 100%;`;
    portfolio_images_wrapper2[0].style.cssText=` display: none;`;
    portfolio_image3[0].style.cssText=` display: none;`;
    image_wrapper1[0].style.cssText=` width: 100%;`;
    video_image_wrapper[0].style.cssText=` display: none;`;
    portfolio_image4[0].style.cssText=` display: none;`;
}
function changeImage3() {
    portfolio_image2[0].style.cssText=` display: none;`;
    portfolio_images_wrapper2[0].style.cssText=` display: none;`;
    portfolio_image3[0].style.cssText=` width: 100%;`;
    image_wrapper1[0].style.cssText=` display: none;`;
    video_image_wrapper[0].style.cssText=` display: none;`;
    portfolio_image4[0].style.cssText=` display: none;`;
}
function changeImage4() {
    portfolio_image2[0].style.cssText=` display: none;`;
    portfolio_images_wrapper2[0].style.cssText=` display: none;`;
    portfolio_image3[0].style.cssText=` display: none;`;
    image_wrapper1[0].style.cssText=` display: none;`;
    video_image_wrapper[0].style.cssText=` display: none;`;
    portfolio_image4[0].style.cssText=` display: block;`;
}
function changeImage5() {
    img5[0].style.cssText=` width: 100%;`;
    img6[0].style.cssText=` display: none;`;
    portfolio_image2[0].style.cssText=` display: none;`;
    portfolio_images_wrapper2[0].style.cssText=` display: flex;`;
    portfolio_image3[0].style.cssText=` display: none;`;
    image_wrapper1[0].style.cssText=` display: none;`;
    video_image_wrapper[0].style.cssText=` display: none;`;
    portfolio_image4[0].style.cssText=` display: none;`
}
function changeImage6() {
    img5[0].style.cssText=` display: none;`;
    img6[0].style.cssText=` width: 100%;`;
    portfolio_image2[0].style.cssText=` display: none;`;
    portfolio_images_wrapper2[0].style.cssText=` display: flex;`;
    portfolio_image3[0].style.cssText=` display: none;`;
    image_wrapper1[0].style.cssText=` display: none;`;
    video_image_wrapper[0].style.cssText=` display: none;`;
    portfolio_image4[0].style.cssText=` display: none;`
}
function changeVideo() {
    img1[0].style.cssText=` display: none;`;
    img2[0].style.cssText=` display:none;`;
    portfolio_images_wrapper2[0].style.cssText=` display: none;`;
    portfolio_image3[0].style.cssText=` display: none;`;
    image_wrapper1[0].style.cssText=` width: 100%;`;
    video_image_wrapper[0].style.cssText=` width: 100%;`;
    portfolio_image4[0].style.cssText=` display: none;`;
}