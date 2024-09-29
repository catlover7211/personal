// script.js

document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#typed', {
        strings: ["Catlover."],
        typeSpeed: 100, // 打字速度
        backSpeed: 50, // 刪除速度
        backDelay: 1000, // 刪除前的等待時間
        loop: false, // 是否循環
        showCursor: false,
        cursorChar: '|',
    });
});


// 當整個頁面加載完成後執行
window.addEventListener('load', function() {
    // 隱藏載入動畫
    var loader = document.getElementById('loader');
    loader.style.display = 'none';

    // 顯示主內容
    var content = document.getElementById('content');
    content.style.display = 'block';
});