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

// 定義桌面斷點（以像素為單位）
const DESKTOP_BREAKPOINT = 768;

// 獲取模態框元素
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// 獲取所有縮略圖
const thumbnails = document.querySelectorAll('.thumbnail');

// 定義事件處理器
const openModal = (event) => {
    modal.style.display = 'block';
    modalImg.src = event.target.src;
    captionText.innerHTML = event.target.alt;
};

const closeModal = () => {
    modal.style.display = 'none';
};

// 函數：根據螢幕大小啟用或禁用模態框功能
const updateEventListeners = () => {
    if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        // 啟用模態框功能：添加點擊事件監聽器
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', openModal);
            thumbnail.style.cursor = 'pointer'; // 確保游標是手型
        });
    } else {
        // 禁用模態框功能：移除點擊事件監聽器
        thumbnails.forEach(thumbnail => {
            thumbnail.removeEventListener('click', openModal);
            thumbnail.style.cursor = 'default'; // 改變游標樣式
        });
        // 確保模態框被關閉
        closeModal();
    }
};

// 初始載入時設定事件監聽器
updateEventListeners();

// 當視窗大小改變時更新事件監聽器
window.addEventListener('resize', () => {
    updateEventListeners();
});

// 點擊關閉按鈕關閉模態框
closeBtn.addEventListener('click', closeModal);

// 點擊模態框背景區域也可以關閉
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
