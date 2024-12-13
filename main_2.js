// JavaScript
const myElement_0 = document.getElementById('info_menu');
const myElement_2 = document.getElementById('no_2');


  myElement_2.addEventListener('mouseover', () => {
    // マウスが重なったときの処理
    myElement_0.style.display = "block";

    
  });
  


  myElement_0.addEventListener('mouseover', () => {
    // マウスが重なったときの処理
    myElement_0.style.display = "block";

    
  });



    myElement_0.addEventListener('mouseout', () => {
    // マウスが重なったときの処理
    myElement_0.style.display = "none";

    
  });

setTimeout(() => {
  myElement_2.addEventListener('mouseout', () => {
    // マウスが重なったときの処理
    myElement_0.style.display = "none";

  });
}, 800)

