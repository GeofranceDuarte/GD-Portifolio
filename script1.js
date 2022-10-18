const imgs = document.getElementById("img3");
const img3 = document.querySelectorAll("#img3 img");

var idx = 0;

function carrossel(){
    idx++;

    if(idx > img3.length -1) {
        idx = 0;
    }

    imgs.style.transform =`translateX(${-idx * 300}px)`;

}

setInterval(carrossel, 1800);