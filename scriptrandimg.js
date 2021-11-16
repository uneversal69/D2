/*function imgchange() {

    var myImages1 = new Array();
        myImages1[1] = "images/tir.gif";
        myImages1[2] = "images/el.gif";
        myImages1[3] = "images/nef.gif";
      var rnd = Math.floor(Math.random() * myImages1.length);
        if (rnd == 0) {
                rnd = 1;
        }
    
      document.getElementById("getimg").src = myImages1[rnd];
    
    }
imgchange();*/

const imgArray = ['11.jpg', '22.jpg', '33.jpg', '44.jpg', '555.jpg', '666.jpg', '777.jpg', '888.jpg', '999.jpg'];
const basePath="images/";

function renderRandomImages() {
    for (var i = 0; i < imgArray.length; i++) {
        const randImg = imgArray[Math.floor(Math.random() * imgArray.length)];
        const div = document.createElement("div");
        div.classList.add('item');
        const image = document.createElement("img");
        image.src = basePath+randImg;
        div.appendChild(image);
        document.getElementsByClassName('container')[0].appendChild(div);
    }
}
renderRandomImages();

/*const imageArr = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/200/350",
  "https://picsum.photos/250/300"
];
let trigger = document.getElementById("trigger");
let image = document.getElementById("image");
image.src = imageArr[0];
trigger.onclick = function () {
  const index = Math.floor(Math.random() * imageArr.length);
  const randImg = imageArr[index];
  // const imageEl = document.createElement("img");
  // imageEl.src = randImg;
  console.log(randImg);
  image.src = randImg;
};
*/