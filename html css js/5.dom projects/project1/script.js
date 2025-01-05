var btn = document.querySelector('.btnDiv');
var currentStatus = document.querySelector('.status');

var flag = 0;

btn.addEventListener('click', function () {
    if (flag == 0) {
        currentStatus.style.color = 'green';
        currentStatus.textContent = 'Request sent';
        btn.textContent = 'Remove friend';
        flag = 1;
    }
    else if (flag == 1) {
        currentStatus.style.color = 'red';
        currentStatus.textContent = 'Stranger';
        btn.textContent = 'Add friend';
        flag = 0;
    }
})

