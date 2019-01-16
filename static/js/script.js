var pieButtons = document.getElementsByClassName("chevron");
var pieImage = document.getElementsByClassName("piechart");
var market = document.getElementsByClassName("market");

//Fix scrolling with navbar
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 200);
});

if (pieButtons && pieImage) {
pieButtons[0].addEventListener("click", changePie);
pieButtons[1].addEventListener("click", changePie);

function changePie() {
  pieImage[0].style.transition = '0s'
  market[0].style.transition = '0s'
  pieImage[0].style.opacity = '0.25'
  market[0].style.opacity = '0.25'

  if (pieImage[0].src == "https://via.placeholder.com/350x350?text=Een+piechart") {
    pieImage[0].src = "https://via.placeholder.com/350x350?text=en+een+ander"
    market[0].textContent = "Europa"
  } else {
    pieImage[0].src = "https://via.placeholder.com/350x350?text=Een+piechart"
    market[0].textContent = "Algemene markt"
  }

  var lucaluna = setTimeout(fadein, 10)

  function fadein(){
    pieImage[0].style.transition = '1s'
    market[0].style.transition = '1s'
    pieImage[0].style.opacity = '1'
    market[0].style.opacity = '1'
    clearTimeout(lucaluna);
  }
}
}
