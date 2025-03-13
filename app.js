let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let currentIndex = 0;
let totalItems = items.length;

function updateSlider() {
    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

// الانتقال للصورة التالية
next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlider();
});

// الانتقال للصورة السابقة
prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlider();
});

// تشغيل السلايدر تلقائيًا كل 5 ثوانٍ
setInterval(() => {
    next.click();
}, 5000);

updateSlider();
