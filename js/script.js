// script.js

document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#typed', {
        strings: ["Catlover."],
        typeSpeed: 250, // 打字速度
        backSpeed: 50, // 刪除速度
        backDelay: 1000, // 刪除前的等待時間
        loop: false, // 是否循環
        showCursor: false,
        cursorChar: '|',
    });
});


// script.js

window.addEventListener('load', function() {
    console.log('頁面已完全加載'); // 添加日誌以確認事件觸發
    var loader = document.getElementById('loader');
    if (loader) {
        loader.classList.add('hidden');
    } else {
        console.error('找不到 loader 元素');
    }

    var content = document.getElementById('content');
    if (content) {
        content.style.display = 'block';
    } else {
        console.error('找不到 content 元素');
    }
});
