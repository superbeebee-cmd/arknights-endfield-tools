/**
 * 虛擬滾動 - 大列表效能優化
 */

class VirtualScroller {
    /**
     * @param {HTMLElement} container - 容器元素
     * @param {Function} renderFn - 渲染函數
     * @param {number} itemHeight - 項目高度
     * @param {number} buffer - 緩衝區數量
     */
    constructor(container, renderFn, itemHeight = 300, buffer = 5) {
        this.container = container;
        this.renderFn = renderFn;
        this.itemHeight = itemHeight;
        this.buffer = buffer;
        this.items = [];
        this.scrollTop = 0;
        this.containerHeight = 0;
        
        this.init();
    }
    
    init() {
        this.container.addEventListener('scroll', this.onScroll.bind(this));
        this.updateContainerHeight();
        window.addEventListener('resize', this.updateContainerHeight.bind(this));
    }
    
    updateContainerHeight() {
        this.containerHeight = this.container.clientHeight;
    }
    
    setItems(items) {
        this.items = items;
        this.render();
    }
    
    onScroll() {
        this.scrollTop = this.container.scrollTop;
        this.render();
    }
    
    render() {
        const totalHeight = this.items.length * this.itemHeight;
        const startIndex = Math.max(0, Math.floor(this.scrollTop / this.itemHeight) - this.buffer);
        const endIndex = Math.min(
            this.items.length,
            Math.ceil((this.scrollTop + this.containerHeight) / this.itemHeight) + this.buffer
        );
        
        const visibleItems = this.items.slice(startIndex, endIndex);
        
        this.container.innerHTML = '';
        
        const spacerTop = document.createElement('div');
        spacerTop.style.height = `${startIndex * this.itemHeight}px`;
        this.container.appendChild(spacerTop);
        
        visibleItems.forEach((item, index) => {
            const wrapper = document.createElement('div');
            wrapper.style.height = `${this.itemHeight}px`;
            wrapper.appendChild(this.renderFn(item, startIndex + index));
            this.container.appendChild(wrapper);
        });
        
        const spacerBottom = document.createElement('div');
        spacerBottom.style.height = `${(this.items.length - endIndex) * this.itemHeight}px`;
        this.container.appendChild(spacerBottom);
    }
    
    destroy() {
        this.container.removeEventListener('scroll', this.onScroll);
        window.removeEventListener('resize', this.updateContainerHeight);
    }
}

/**
 * 簡單的防抖函數
 * @param {Function} func - 要防抖的函數
 * @param {number} delay - 延遲毫秒數
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * 節流函數
 * @param {Function} func - 要節流的函數
 * @param {number} limit - 限制毫秒數
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * 圖片懶加載管理器
 */
class LazyLoadManager {
    constructor(options = {}) {
        this.options = {
            root: null,
            rootMargin: options.rootMargin || '200px',
            threshold: options.threshold || 0
        };
        this.observer = null;
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                this.handleIntersection.bind(this),
                this.options
            );
        }
    }
    
    observe(element, callback) {
        if (this.observer) {
            element.dataset.lazyLoad = 'true';
            this.observer.observe(element);
            element._lazyCallback = callback;
        } else {
            callback();
        }
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                if (element._lazyCallback) {
                    element._lazyCallback();
                }
                this.observer.unobserve(element);
            }
        });
    }
    
    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}

/**
 * 圖片預加載
 * @param {string[]} urls - 圖片URL數組
 */
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

/**
 * 緩存管理
 */
const CacheManager = {
    cache: new Map(),
    
    set(key, value, ttl = 300000) {
        this.cache.set(key, {
            value,
            expiry: Date.now() + ttl
        });
    },
    
    get(key) {
        const item = this.cache.get(key);
        if (!item) return null;
        
        if (Date.now() > item.expiry) {
            this.cache.delete(key);
            return null;
        }
        
        return item.value;
    },
    
    clear() {
        this.cache.clear();
    }
};

window.VirtualScroller = VirtualScroller;
window.debounce = debounce;
window.throttle = throttle;
window.LazyLoadManager = LazyLoadManager;
window.preloadImages = preloadImages;
window.CacheManager = CacheManager;
