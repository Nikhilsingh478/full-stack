var mainDiv = document.querySelector('#main');
var cursor = document.querySelector('.cursor');
const h1 = document.querySelector('h1');

mainDiv.addEventListener('mousemove',function(dets){
    console.log(dets);
    cursor.style.left = dets.clientX + 'px';
    cursor.style.top = dets.clientY + 'px';
})
