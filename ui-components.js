/**
 * UI 組件 - Toast 通知、骨架屏、加載動畫
 */

const UI = {
    /**
     * 顯示 Toast 通知
     * @param {string} message - 通知內容
     * @param {string} type - 通知類型 (success/error/warning/info)
     */
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${this.getToastIcon(type)}</span>
            <span class="toast-message">${message}</span>
        `;
        
        document.body.appendChild(toast);
        
        requestAnimationFrame(() => {
            toast.classList.add('toast-show');
        });
        
        setTimeout(() => {
            toast.classList.remove('toast-show');
            setTimeout(() => toast.remove(), 300);
        }, Config.TOAST_DURATION);
    },
    
    getToastIcon(type) {
        const icons = {
            success: '✓',
            error: '✗',
            warning: '⚠',
            info: 'ℹ'
        };
        return icons[type] || icons.info;
    },
    
    /**
     * 顯示骨架屏
     * @param {string} gridId - 網格元素ID
     * @param {number} count - 骨架數量
     */
    showSkeleton(gridId, count = Config.SKELETON_COUNT) {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        
        grid.innerHTML = '';
        
        for (let i = 0; i < count; i++) {
            const skeleton = document.createElement('div');
            skeleton.className = 'skeleton-card';
            
            if (gridId === 'operators-grid') {
                skeleton.innerHTML = `
                    <div class="skeleton-icon"></div>
                    <div class="skeleton-text skeleton-title"></div>
                    <div class="skeleton-text skeleton-subtitle"></div>
                    <div class="skeleton-tags"></div>
                `;
            } else {
                skeleton.innerHTML = `
                    <div class="skeleton-icon"></div>
                    <div class="skeleton-text skeleton-title"></div>
                    <div class="skeleton-text skeleton-subtitle"></div>
                `;
            }
            
            grid.appendChild(skeleton);
        }
    },
    
    /**
     * 隱藏骨架屏
     */
    hideSkeleton() {
        document.querySelectorAll('.skeleton-card').forEach(el => el.remove());
    },
    
    /**
     * 顯示加載動畫
     * @param {string} message - 加載提示
     */
    showLoading(message = '載入中...') {
        const loader = document.createElement('div');
        loader.id = 'global-loader';
        loader.className = 'global-loader';
        loader.innerHTML = `
            <div class="loader-spinner"></div>
            <div class="loader-message">${message}</div>
        `;
        document.body.appendChild(loader);
    },
    
    /**
     * 隱藏加載動畫
     */
    hideLoading() {
        const loader = document.getElementById('global-loader');
        if (loader) loader.remove();
    },
    
    /**
     * 顯示空狀態
     * @param {string} gridId - 網格元素ID
     * @param {string} message - 提示訊息
     */
    showEmptyState(gridId, message = '沒有找到匹配的結果') {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">🔍</div>
                <div class="empty-message">${message}</div>
                <button class="empty-reset-btn" onclick="resetFilters()">重置篩選</button>
            </div>
        `;
    },
    
    /**
     * 初始化鍵盤導航
     * @param {string} gridId - 網格元素ID
     * @param {Function} onSelect - 選擇回調
     */
    initKeyboardNavigation(gridId, onSelect) {
        const grid = document.getElementById(gridId);
        if (!grid) return;
        
        let selectedIndex = -1;
        const items = () => grid.querySelectorAll('.card');
        
        document.addEventListener('keydown', (e) => {
            const cardItems = items();
            if (cardItems.length === 0) return;
            
            switch(e.key) {
                case 'ArrowDown':
                    e.preventDefault();
                    selectedIndex = Math.min(selectedIndex + 1, cardItems.length - 1);
                    this.highlightItem(cardItems, selectedIndex);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    selectedIndex = Math.max(selectedIndex - 1, 0);
                    this.highlightItem(cardItems, selectedIndex);
                    break;
                case 'Enter':
                    if (selectedIndex >= 0 && onSelect) {
                        e.preventDefault();
                        cardItems[selectedIndex].click();
                    }
                    break;
            }
        });
        
        grid.addEventListener('mouseover', () => {
            selectedIndex = -1;
            this.clearHighlight(items());
        });
    },
    
    highlightItem(items, index) {
        this.clearHighlight(items);
        if (items[index]) {
            items[index].classList.add('keyboard-selected');
            items[index].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    },
    
    clearHighlight(items) {
        items.forEach(item => item.classList.remove('keyboard-selected'));
    }
};

window.UI = UI;
