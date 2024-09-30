document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode 切換功能
    const toggleButtons = document.querySelectorAll('.theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // 初始化主題
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (currentTheme === 'light') {
        document.body.classList.remove('dark-mode');
    } else {
        // 如果沒有設定，根據系統偏好自動設置
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }
    }

    // 更新所有切換按鈕的文本
    const updateToggleButtonText = () => {
        toggleButtons.forEach(button => {
            if (document.body.classList.contains('dark-mode')) {
                button.textContent = '切換回淺色模式';
            } else {
                button.textContent = '切換深色模式';
            }
        });
    };

    // 初始化按鈕文本
    updateToggleButtonText();

    // 切換主題
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark';
            }
            localStorage.setItem('theme', theme);
            updateToggleButtonText();
        });
    });

    // Typed.js 初始化
    const typedElement = document.getElementById('typed');
    if (typedElement) {
        const typed = new Typed('#typed', {
            strings: ["Catlover."],
            typeSpeed: 250, // 打字速度
            backSpeed: 50, // 刪除速度
            backDelay: 1000, // 刪除前的等待時間
            loop: false, // 是否循環
            showCursor: false,
            cursorChar: '|',
        });
    }

    const typedPhotoElement = document.getElementById('typed_photo');
    if (typedPhotoElement) {
        const typed_phpto = new Typed('#typed_photo', {
            strings: ["Photos."],
            typeSpeed: 250, // 打字速度
            backSpeed: 50, // 刪除速度
            backDelay: 1000, // 刪除前的等待時間
            loop: false, // 是否循環
            showCursor: false,
            cursorChar: '|',
        });
    }

    // 模態框功能
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    if (modal && modalImg && captionText && closeBtn) {
        // 獲取所有縮略圖
        const thumbnails = document.querySelectorAll('.thumbnail');

        // 定義桌面斷點（以像素為單位）
        const DESKTOP_BREAKPOINT = 768;

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
    } else {
        // 如果 modal 相關元素不存在，則不初始化模態框功能
        console.warn('模態框相關元素不存在，模態框功能未初始化。');
    }

    // Loader 功能
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
});
