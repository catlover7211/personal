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

document.addEventListener("DOMContentLoaded", function() {
    var typed_phpto = new Typed('#typed_photo', {
        strings: ["Photos."],
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

    var contents = document.getElementsByClassName('content');

    if (contents.length > 0) {
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'block';
        }
    } else {
        console.error('找不到具有 content 類別的元素');
    }
    
});
