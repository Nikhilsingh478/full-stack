var img = document.querySelector('.image');
var love = document.querySelector('i');

img.addEventListener('dblclick', function () {
    love.style.transform = 'translate(-50%,-50%) scale(1.4)';
    love.style.opacity = 0.8;

    setTimeout(function () {
        love.style.transform = 'translate(-50%,-50%) scale(0)';
        love.style.opacity = 0;
    }, 1000)
})

