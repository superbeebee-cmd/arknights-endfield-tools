// Gear piece to image file mapping (45 distinct images from media/gear/)
const gearImageMap = {
    "長息護手壹型": "item_equip_t4_suit_burst01_hand_01.webp",
    "長息護手": "item_equip_t4_suit_burst01_hand_01.webp",
    "長息輔助臂": "item_equip_t4_suit_burst01_edc_02.webp",
    "長息蓄電核": "item_equip_t4_suit_burst01_edc_01.webp",
    "長息蓄電核壹型": "item_equip_t4_suit_burst01_edc_01.webp",
    "長息裝甲": "item_equip_t4_suit_burst01_body_01.webp",
    "脈衝式手套": "item_equip_t1_suit_stragi01_hand_01.webp",
    "脈衝式校準器": "item_equip_t1_suit_stragi01_edc_01.webp",
    "脈衝式干擾服": "item_equip_t1_suit_stragi01_body_01.webp",
    "輕超域護手": "item_equip_t4_suit_usp02_hand_01.webp",
    "輕超域穩定盤": "item_equip_t4_suit_usp02_edc_01.webp",
    "輕超域分析環": "item_equip_t4_suit_usp02_edc_01.webp",
    "輕超域護板": "item_equip_t4_suit_usp02_edc_01.webp",
    "點劍戰術手甲": "item_equip_t4_suit_phy01_hand_01.webp",
    "點劍戰術手套": "item_equip_t4_suit_phy01_hand_01.webp",
    "點劍火石": "item_equip_t4_suit_phy01_edc_03.webp",
    "點劍重裝甲": "item_equip_t4_suit_phy01_body_02.webp",
    "生物輔助手甲": "item_equip_t4_suit_heal01_hand_01.webp",
    "生物輔助臂甲": "item_equip_t4_suit_heal01_edc_03.webp",
    "生物輔助接駁器": "item_equip_t4_suit_heal01_edc_01.webp",
    "生物輔助接駁器壹型": "item_equip_t4_suit_heal01_edc_01.webp",
    "生物輔助護盾": "item_equip_t4_suit_heal01_edc_04.webp",
    "生物輔助護板": "item_equip_t4_suit_heal01_edc_01.webp",
    "生物輔助胸甲": "item_equip_t4_suit_heal01_body_01.webp",
    "生物輔助重甲": "item_equip_t4_suit_heal01_body_01.webp",
    "動火用手甲": "item_equip_t4_suit_fire_natr01_hand_02.webp",
    "動火用手甲壹型": "item_equip_t4_suit_fire_natr01_hand_02.webp",
    "動火用電力匣": "item_equip_t4_suit_fire_natr01_edc_01.webp",
    "動火用測溫鏡": "item_equip_t4_suit_fire_natr01_edc_02.webp",
    "動火用儲能匣": "item_equip_t4_suit_fire_natr01_edc_01.webp",
    "動火用外骨骼": "item_equip_t4_suit_fire_natr01_body_01.webp",
    "M.I.警用手環": "item_equip_t4_suit_criti01_hand_01.webp",
    "M.I.警用手環壹型": "item_equip_t4_suit_criti01_hand_01.webp",
    "M.I.警用手套": "item_equip_t4_suit_criti01_hand_01.webp",
    "M.I.警用臂環": "item_equip_t4_suit_criti01_edc_03.webp",
    "M.I.警用刺刃": "item_equip_t4_suit_criti01_edc_04.webp",
    "M.I.警用刺刃壹型": "item_equip_t4_suit_criti01_edc_04.webp",
    "M.I.警用工具組": "item_equip_t4_suit_criti01_edc_03.webp",
    "M.I.警用瞄具": "item_equip_t4_suit_criti01_edc_02.webp",
    "M.I.警用罩衣": "item_equip_t4_suit_criti01_body_02.webp",
    "M.I.警用罩衣壹型": "item_equip_t4_suit_criti01_body_03.webp",
    "M.I.警用罩衣貳型": "item_equip_t4_suit_criti01_body_02.webp",
    "M.I.警用護甲": "item_equip_t4_suit_criti01_body_01.webp",
    "潮湧手甲": "item_equip_t4_suit_burst01_hand_01.webp",
    "濁流切割炬": "item_equip_t4_suit_burst01_edc_01.webp",
    "懸河供氧栓": "item_equip_t4_suit_burst01_edc_02.webp",
    "落潮輕甲": "item_equip_t4_suit_burst01_body_01.webp",
    "碾骨小雕像": "item_equip_t4_suit_attri01_edc_06.webp",
    "碾骨小雕像壹型": "item_equip_t4_suit_attri01_edc_06.webp",
    "碾骨面具": "item_equip_t4_suit_attri01_edc_04.webp",
    "碾骨面具壹型": "item_equip_t4_suit_attri01_edc_04.webp",
    "碾骨披巾": "item_equip_t4_suit_attri01_body_04.webp",
    "碾骨披巾壹型": "item_equip_t4_suit_attri01_body_04.webp",
    "碾骨重護甲": "item_equip_t4_suit_attri01_body_02.webp",
    "碾骨重護甲壹型": "item_equip_t4_suit_attri01_body_02.webp",
    "50式應龍護手": "item_equip_t4_suit_atk02_hand_01.webp",
    "50式應龍護手壹型": "item_equip_t4_suit_atk02_hand_01.webp",
    "50式應龍短刃": "item_equip_t4_suit_atk02_edc_01.webp",
    "50式應龍短刃壹型": "item_equip_t4_suit_atk02_edc_01.webp",
    "50式應龍雷達": "item_equip_t4_suit_atk02_edc_01.webp",
    "50式應龍輕甲": "item_equip_t4_suit_atk02_body_04.webp",
    "50式應龍重甲": "item_equip_t4_suit_atk02_body_01.webp",
    "拓荒耐蝕手套": "item_equip_t4_suit_atb01_hand_01.webp",
    "拓荒增量供氧栓": "item_equip_t4_suit_atb01_edc_04.webp",
    "拓荒通信器": "item_equip_t4_suit_atb01_edc_01.webp",
    "拓荒通信器壹型": "item_equip_t4_suit_atb01_edc_01.webp",
    "拓荒護甲": "item_equip_t4_suit_atb01_body_01.webp",
    "拓荒護甲壹型": "item_equip_t4_suit_atb01_body_01.webp",
    "拓荒護甲貳型": "item_equip_t4_suit_atb01_body_04.webp",
    "拓荒護甲叁型": "item_equip_t4_suit_atb01_body_02.webp",
    "紓難印章": "item_equip_t2_suit_str01_edc_01.webp",
    "紓難印章壹型": "item_equip_t2_suit_str01_edc_01.webp",
    "紓難識別牌": "item_equip_t2_suit_str01_edc_01.webp",
    "紓難識別牌壹型": "item_equip_t2_suit_str01_edc_01.webp",
    "蝕電絕緣手套": "item_equip_t2_suit_wisd01_hand_01.webp",
    "蝕電絕緣手套壹型": "item_equip_t2_suit_wisd01_hand_01.webp",
    "蝕電絕緣背心": "item_equip_t2_suit_wisd01_body_01.webp",
    "蝕電防護手套": "item_equip_t2_suit_will01_hand_01.webp",
    "天災防護手套": "item_equip_t2_suit_str01_hand_01.webp",
    "重裝信使手套": "item_equip_t2_suit_str01_hand_01.webp",
    "重裝信使手套壹型": "item_equip_t2_suit_str01_hand_01.webp",
    "重裝信使手電": "item_equip_t2_suit_str01_edc_02.webp",
    "重裝信使陀螺": "item_equip_t2_suit_str01_edc_01.webp",
    "重裝信使夾克": "item_equip_t2_suit_str01_body_01.webp",
    "阿伯莉手甲": "item_equip_t2_suit_str01_hand_01.webp",
    "阿伯莉輕甲": "item_equip_t2_suit_str01_body_01.webp",
    "阿伯莉重甲": "item_equip_t2_suit_str01_body_01.webp",
    "巡行信使手套": "item_equip_t2_suit_agi01_hand_01.webp",
    "巡行信使陀螺": "item_equip_t2_suit_agi01_edc_01.webp",
    "巡行信使手電": "item_equip_t2_suit_agi01_edc_02.webp",
    "巡行信使夾克": "item_equip_t2_suit_agi01_body_01.webp",
    "集成化輕甲": "item_equip_t1_suit_stragi01_body_01.webp",
    "集成化重甲": "item_equip_t1_suit_wisdwill01_body_01.webp",
    "集成化戰術手套": "item_equip_t1_suit_stragi01_hand_01.webp",
    "集成化陶瓷板": "item_equip_t1_suit_stragi01_edc_01.webp",
    "四號谷地": "item_equip_t1_suit_stragi01_body_01.webp",
    "礦場手套": "item_equip_t1_suit_stragi01_hand_01.webp",
    "礦場護甲": "item_equip_t1_suit_stragi01_body_01.webp",
    "礦場防護服": "item_equip_t1_suit_stragi01_body_01.webp",
    "礦場聯絡儀": "item_equip_t1_suit_stragi01_edc_01.webp"
};

/**
 * 初始化應用程序
 * @description 頁面載入後首先執行的初始化函數
 */
document.addEventListener('DOMContentLoaded', () => {
    initSearchIndex();
    initApp();
    initTheme();
});

/**
 * 初始化主要應用功能
 * @description 載入數據、設置事件監聽器和篩選器
 */
function initApp() {
    loadOperators();
    loadWeapons();
    setupEventListeners();
    setupSearch();
    setupWeaponFilters();
    setupGearFilters();
    setupOperatorFilters();
}

function setupSearch() {
    const operatorSearch = document.getElementById('operator-search');
    const weaponSearch = document.getElementById('weapon-search');
    const operatorSort = document.getElementById('operator-sort');
    
    const debouncedOperatorSearch = debounce((query) => {
        operatorSearchQuery = query;
        loadOperators();
    }, 180);
    
    const debouncedWeaponSearch = debounce((query) => {
        weaponSearchQuery = query;
        loadWeapons();
    }, 180);
    
    if (operatorSearch) {
        operatorSearch.addEventListener('input', (e) => {
            debouncedOperatorSearch(e.target.value.trim());
        });
    }
    
    if (weaponSearch) {
        weaponSearch.addEventListener('input', (e) => {
            debouncedWeaponSearch(e.target.value.trim());
        });
    }

    if (operatorSort) {
        operatorSort.addEventListener('change', loadOperators);
    }
}

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    // 根據系統設定或已保存的設定設置主題
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggle) {
            themeToggle.querySelector('.theme-icon').textContent = '🌙';
        }
    } else if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        if (themeToggle) {
            themeToggle.querySelector('.theme-icon').textContent = '☀️';
        }
    } else {
        // 檢測系統偏好
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.body.classList.add('light-mode');
            if (themeToggle) {
                themeToggle.querySelector('.theme-icon').textContent = '🌙';
            }
        }
    }

    // 監聽系統主題變化
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    document.body.classList.add('light-mode');
                    if (themeToggle) {
                        themeToggle.querySelector('.theme-icon').textContent = '🌙';
                    }
                } else {
                    document.body.classList.remove('light-mode');
                    if (themeToggle) {
                        themeToggle.querySelector('.theme-icon').textContent = '☀️';
                    }
                }
            }
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeToggle.querySelector('.theme-icon').textContent = isLight ? '🌙' : '☀️';
        });
    }
}

let selectedRarities = ['all'];
let selectedTypes = ['all'];
let selectedGearZone = null;
let selectedGearMainStats = [];
let selectedGearSubStat = null;
let selectedGearSkill = null;
let selectedOperatorRarities = ['all'];
let selectedOperatorElements = ['all'];
let selectedOperatorClasses = ['all'];
let operatorSearchQuery = '';
let weaponSearchQuery = '';

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function setupOperatorFilters() {
    document.querySelectorAll('#operator-filters .filter-btn[data-orarity]').forEach(btn => {
        btn.addEventListener('click', () => {
            const rarity = btn.dataset.orarity;
            if (rarity === 'all') {
                selectedOperatorRarities = ['all'];
                document.querySelectorAll('#operator-filters .filter-btn[data-orarity]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                document.querySelector('#operator-filters .filter-btn[data-orarity="all"]').classList.remove('active');
                btn.classList.toggle('active');
                selectedOperatorRarities = selectedOperatorRarities.filter(r => r !== 'all');
                if (btn.classList.contains('active')) {
                    if (!selectedOperatorRarities.includes(rarity)) {
                        selectedOperatorRarities.push(rarity);
                    }
                } else {
                    selectedOperatorRarities = selectedOperatorRarities.filter(r => r !== rarity);
                }
                if (selectedOperatorRarities.length === 0) {
                    selectedOperatorRarities = ['all'];
                    document.querySelector('#operator-filters .filter-btn[data-orarity="all"]').classList.add('active');
                }
            }
            loadOperators();
        });
    });

    document.querySelectorAll('#operator-filters .filter-btn[data-element]').forEach(btn => {
        btn.addEventListener('click', () => {
            const element = btn.dataset.element;
            if (element === 'all') {
                selectedOperatorElements = ['all'];
                document.querySelectorAll('#operator-filters .filter-btn[data-element]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                document.querySelector('#operator-filters .filter-btn[data-element="all"]').classList.remove('active');
                btn.classList.toggle('active');
                selectedOperatorElements = selectedOperatorElements.filter(e => e !== 'all');
                if (btn.classList.contains('active')) {
                    if (!selectedOperatorElements.includes(element)) {
                        selectedOperatorElements.push(element);
                    }
                } else {
                    selectedOperatorElements = selectedOperatorElements.filter(e => e !== element);
                }
                if (selectedOperatorElements.length === 0) {
                    selectedOperatorElements = ['all'];
                    document.querySelector('#operator-filters .filter-btn[data-element="all"]').classList.add('active');
                }
            }
            loadOperators();
        });
    });

    document.querySelectorAll('#operator-filters .filter-btn[data-class]').forEach(btn => {
        btn.addEventListener('click', () => {
            const cls = btn.dataset.class;
            if (cls === 'all') {
                selectedOperatorClasses = ['all'];
                document.querySelectorAll('#operator-filters .filter-btn[data-class]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                document.querySelector('#operator-filters .filter-btn[data-class="all"]').classList.remove('active');
                btn.classList.toggle('active');
                selectedOperatorClasses = selectedOperatorClasses.filter(c => c !== 'all');
                if (btn.classList.contains('active')) {
                    if (!selectedOperatorClasses.includes(cls)) {
                        selectedOperatorClasses.push(cls);
                    }
                } else {
                    selectedOperatorClasses = selectedOperatorClasses.filter(c => c !== cls);
                }
                if (selectedOperatorClasses.length === 0) {
                    selectedOperatorClasses = ['all'];
                    document.querySelector('#operator-filters .filter-btn[data-class="all"]').classList.add('active');
                }
            }
            loadOperators();
        });
    });
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
    document.body.classList.remove('modal-open');
}

function setupEventListeners() {
    document.querySelectorAll('nav button').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
        });
    });

    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal').addEventListener('click', (e) => {
        if (e.target.id === 'modal') closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function loadWeapons() {
    const grid = document.getElementById('weapons-grid');
    if (!grid) return;

    const sortSelect = document.getElementById('sort-select');
    const sortValue = sortSelect ? sortSelect.value : 'rarity-desc';

    let filteredWeapons = [...weaponsData];

    if (!selectedRarities.includes('all')) {
        filteredWeapons = filteredWeapons.filter(w => selectedRarities.includes(String(w.rarityNum)));
    }

    if (!selectedTypes.includes('all')) {
        filteredWeapons = filteredWeapons.filter(w => selectedTypes.includes(w.type));
    }

    if (weaponSearchQuery) {
        filteredWeapons = searchIndex.searchWeapons(weaponSearchQuery).filter(w => 
            filteredWeapons.some(f => f.name === w.name)
        );
    }

    switch (sortValue) {
        case 'rarity-desc':
            filteredWeapons.sort((a, b) => b.rarityNum - a.rarityNum);
            break;
        case 'rarity-asc':
            filteredWeapons.sort((a, b) => a.rarityNum - b.rarityNum);
            break;
        case 'name-asc':
            filteredWeapons.sort((a, b) => a.name.localeCompare(b.name, 'zh-TW'));
            break;
    }

    grid.innerHTML = '';

    filteredWeapons.forEach(w => {
        const card = document.createElement('div');
        card.className = `card card-weapon rarity-${w.rarityNum}`;
        
        const imgUrl = getWeaponImageUrl(w);
        const typeIconUrl = `media/weapon/${w.type}.png`;
        const rarityNames = { 6: '六星', 5: '五星', 4: '四星', 3: '三星' };
        const rarityName = rarityNames[w.rarityNum] || `${w.rarityNum}星`;
        const typeName = typeNames[w.type] || w.type;
        
        card.innerHTML = `
            <div class="weapon-header">
                <div class="weapon-icon">
                    <img src="${imgUrl}" alt="${w.name}" onerror="this.classList.add('error')" onload="this.classList.add('loaded')">
                    <span class="fallback-icon">${w.name.charAt(0)}</span>
                </div>
            </div>
            <div class="weapon-info">
                <div class="weapon-name">${w.name}</div>
                <div class="weapon-meta">
                    <span class="weapon-rarity rarity-${w.rarityNum}">${rarityName}</span>
                    <span class="weapon-type-badge">
                        <img src="${typeIconUrl}" alt="${typeName}" onerror="this.style.display='none'">
                        ${typeName}
                    </span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => showWeaponDetail(w));
        grid.appendChild(card);
    });
}

/**
 * 載入並渲染角色列表
 * @description 根據當前篩選條件過濾並渲染角色卡片
 * @returns {void}
 */
function loadOperators() {
    const grid = document.getElementById('operators-grid');
    if (!grid) return;

    grid.innerHTML = '';

    let filteredOperators = [...operatorsData];

    if (!selectedOperatorRarities.includes('all')) {
        filteredOperators = filteredOperators.filter(op => selectedOperatorRarities.includes(String(op.rarity)));
    }

    if (!selectedOperatorElements.includes('all')) {
        filteredOperators = filteredOperators.filter(op => selectedOperatorElements.includes(op.element));
    }

    if (!selectedOperatorClasses.includes('all')) {
        filteredOperators = filteredOperators.filter(op => selectedOperatorClasses.includes(op.class));
    }

    if (operatorSearchQuery) {
        filteredOperators = searchIndex.searchOperators(operatorSearchQuery).filter(op => 
            filteredOperators.some(f => f.id === op.id)
        );
    }

    const sortSelect = document.getElementById('operator-sort');
    const sortValue = sortSelect ? sortSelect.value : 'rarity-desc';
    
    switch (sortValue) {
        case 'rarity-desc':
            filteredOperators.sort((a, b) => b.rarity - a.rarity);
            break;
        case 'rarity-asc':
            filteredOperators.sort((a, b) => a.rarity - b.rarity);
            break;
        case 'name-asc':
            filteredOperators.sort((a, b) => a.name.localeCompare(b.name, 'zh-TW'));
            break;
    }

    grid.innerHTML = '';

    filteredOperators.forEach(op => {
        const card = document.createElement('div');
        card.className = `card card-operator rarity-${op.rarity}`;
        
        const opIconUrl = op.icon ? `media/operators/${op.icon}` : '';
        const jobIcon = classNames[op.class] ? `media/job/${op.class}.webp` : '';
        const elmFile = elementImageMap[op.element] || '';
        const elmIcon = elmFile ? `media/elements/${elmFile}` : '';
        const starImage = op.rarity >= 6 ? '6star.webp' : (op.rarity >= 5 ? '5star.webp' : (op.rarity >= 4 ? '4star.webp' : '3star.webp'));
        
        card.innerHTML = `
            <div class="operator-icon">
                ${opIconUrl ? `<img src="${opIconUrl}" alt="${op.name}" loading="lazy" onerror="this.classList.add('error')" onload="this.classList.add('loaded')">` : `<span class="fallback">${op.name.charAt(0)}</span>`}
            </div>
            <div class="info-slot">
                ${jobIcon ? `<img src="${jobIcon}" alt="${op.class}" title="${op.class}" loading="lazy">` : ''}
                ${elmIcon ? `<img src="${elmIcon}" alt="${op.element}" title="${op.element}" loading="lazy">` : ''}
            </div>
            <div class="name">${op.name}</div>
            <div class="rarity"><img src="media/level/${starImage}" alt="${op.rarity}星" style="height: 20px;"></div>
        `;
        
        card.addEventListener('click', () => showOperatorDetail(op.id));
        grid.appendChild(card);
    });
}

function setupWeaponFilters() {
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', loadWeapons);
    }

    document.querySelectorAll('.filter-btn[data-rarity]').forEach(btn => {
        btn.addEventListener('click', () => {
            const rarity = btn.dataset.rarity;
            if (rarity === 'all') {
                selectedRarities = ['all'];
                document.querySelectorAll('.filter-btn[data-rarity]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                document.querySelector('.filter-btn[data-rarity="all"]').classList.remove('active');
                btn.classList.toggle('active');
                selectedRarities = selectedRarities.filter(r => r !== 'all');
                if (btn.classList.contains('active')) {
                    if (!selectedRarities.includes(rarity)) {
                        selectedRarities.push(rarity);
                    }
                } else {
                    selectedRarities = selectedRarities.filter(r => r !== rarity);
                }
                if (selectedRarities.length === 0) {
                    selectedRarities = ['all'];
                    document.querySelector('.filter-btn[data-rarity="all"]').classList.add('active');
                }
            }
            loadWeapons();
        });
    });

    document.querySelectorAll('.filter-btn[data-type]').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.type;
            if (type === 'all') {
                selectedTypes = ['all'];
                document.querySelectorAll('.filter-btn[data-type]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            } else {
                document.querySelector('.filter-btn[data-type="all"]').classList.remove('active');
                btn.classList.toggle('active');
                selectedTypes = selectedTypes.filter(t => t !== 'all');
                if (btn.classList.contains('active')) {
                    if (!selectedTypes.includes(type)) {
                        selectedTypes.push(type);
                    }
                } else {
                    selectedTypes = selectedTypes.filter(t => t !== type);
                }
                if (selectedTypes.length === 0) {
                    selectedTypes = ['all'];
                    document.querySelector('.filter-btn[data-type="all"]').classList.add('active');
                }
            }
            loadWeapons();
        });
    });
}

const jobNames = {
    'Support': '輔助',
    'Defender': '重裝',
    'Guard': '近衛',
    'Striker': '突擊',
    'Vanguard': '先鋒',
    'Caster': '術師'
};

function getRecommendedTeammates(operator) {
    const recommended = [];
    const opElement = operator.element;
    const opClass = operator.class;
    
    operatorsData.forEach(op => {
        if (op.id === operator.id) return;
        
        let score = 0;
        
        if (op.element === opElement) score += 2;
        
        if (op.class !== opClass) {
            if ((opClass === 'Defender' || opClass === 'Guard') && (op.class === 'Support')) score += 1;
            if ((opClass === 'Striker' || opClass === 'Vanguard') && (op.class === 'Support')) score += 1;
            if (opClass === 'Support' && (op.class === 'Defender' || op.class === 'Guard' || op.class === 'Striker')) score += 1;
        }
        
        if (op.weapon === operator.weapon) score += 0.5;
        
        recommended.push({ ...op, score });
    });
    
    recommended.sort((a, b) => b.score - a.score);
    
    return recommended.slice(0, 3);
}

function showOperatorDetail(operatorId) {
    const operator = operatorsData.find(op => op.id === operatorId);
    if (!operator) return;

    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = operator.name;

    const mainStatHtml = operator.mainStat ? `<span class="stat-badge main">${operator.mainStat}</span>` : '';
    const subStatHtml = operator.subStat ? `<span class="stat-badge sub">${operator.subStat}</span>` : '';
    const statsHtml = mainStatHtml || subStatHtml ? `
        <div class="operator-stats">
            ${mainStatHtml}
            ${subStatHtml}
        </div>
    ` : '';

    const teammates = getRecommendedTeammates(operator);
    let teammatesHtml = '';
    teammates.forEach(tm => {
        const tmIconUrl = tm.icon ? `media/operators/${tm.icon}` : '';
        teammatesHtml += `
            <div class="teammate-card" onclick="showOperatorDetail(${tm.id})">
                <div class="icon">
                    ${tmIconUrl ? `<img src="${tmIconUrl}" alt="${tm.name}" style="width:100%;height:100%;object-fit:cover;">` : tm.name.charAt(0)}
                </div>
                <div class="name">${tm.name}</div>
            </div>
        `;
    });

    let suitableWeapons = weaponsData.filter(w => {
        return w.rarityNum >= operator.rarity - 1 && w.type === operator.weapon;
    });
    
    suitableWeapons.sort((a, b) => {
        const aIsExclusive = operator.exclusiveWeapon && a.name === operator.exclusiveWeapon;
        const bIsExclusive = operator.exclusiveWeapon && b.name === operator.exclusiveWeapon;
        if (aIsExclusive && !bIsExclusive) return -1;
        if (!aIsExclusive && bIsExclusive) return 1;
        
        const aTags = a.tags || [];
        const bTags = b.tags || [];
        const operatorCombatTags = operator.tags || [];
        const aMatch = aTags.filter(t => operatorCombatTags.includes(t)).length;
        const bMatch = bTags.filter(t => operatorCombatTags.includes(t)).length;
        if (aMatch !== bMatch) return bMatch - aMatch;
        
        return b.rarityNum - a.rarityNum;
    });
    
    let weaponsHtml = '';
    
    suitableWeapons.slice(0, 3).forEach(w => {
        const typeIconUrl = `media/weapon/${w.type}.png`;
        const typeName = typeNames[w.type] || w.type;
        const imgUrl = getWeaponImageUrl(w);
        const isExclusive = operator.exclusiveWeapon && w.name === operator.exclusiveWeapon;
        
         weaponsHtml += `
            <div class="weapon-item ${isExclusive ? 'exclusive-weapon' : ''} rarity-${w.rarityNum}">
                ${isExclusive ? '<div class="exclusive-badge">專武</div>' : ''}
                <div class="weapon-image">
                    <img src="${imgUrl}" alt="${w.name}" onerror="this.style.display='none'">
                </div>
                <div class="weapon-info">
                    <h5>${w.name}</h5>
                    <div class="weapon-rarity" style="color: var(--rarity-${w.rarityNum}); font-size: 14px;">${'★'.repeat(w.rarityNum)}</div>
                    <div class="weapon-type">
                        <img src="${typeIconUrl}" alt="${typeName}" title="${typeName}" style="width: 20px; height: 20px;">
                    </div>
                </div>
                <div class="stats">
                    <span class="stat-tag stat-main">${w.mainStat}</span>
                    ${w.subStat !== '/' ? `<span class="stat-tag stat-sub">${w.subStat}</span>` : ''}
                    <span class="stat-tag stat-skill">${w.skill}</span>
                </div>
            </div>
        `;
    });
    
    const starImage = operator.rarity >= 6 ? 'media/level/6star.webp' : (operator.rarity >= 5 ? 'media/level/5star.webp' : 'media/level/4star.webp');
    const iconUrl = operator.icon ? `media/operators/${operator.icon}` : '';
    const fullImageUrl = operator.fullImage ? `media/operators/full/${operator.fullImage}` : '';
    
    const elementImageMap = {
        'Nature': 'Nature.jpg',
        'Heat': 'fire.jpg',
        'Physical': 'physic.jpg',
        'Cryo': 'ice.jpg',
        'Electric': 'electric.jpg'
    };
    
    const jobIcon = operator.class ? `media/job/${operator.class}.webp` : '';
    const elmFile = elementImageMap[operator.element] || '';
    const elmIcon = elmFile ? `media/elements/${elmFile}` : '';
    const weaponTypeIcon = operator.weapon ? `media/weapon/${operator.weapon}.png` : '';
    const weaponTypeName = typeNames[operator.weapon] || operator.weapon || '';
    const jobName = classNames[operator.class] || operator.class;
    const elementName = elementNames[operator.element] || operator.element;
    
    // Replace with the legacy layout (as in the old record)
    modalBody.innerHTML = `
        ${fullImageUrl ? `<div class="detail-full-image"><img src="${fullImageUrl}" alt="${operator.name}" onerror="this.parentElement.style.display='none'"></div>` : ''}
        <div class="detail-header">
            <div class="detail-icon">
                ${iconUrl ? `<img src="${iconUrl}" alt="${operator.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : operator.name.charAt(0)}
            </div>
            <div class="detail-info">
                <h2>${operator.name}</h2>
                <div class="detail-tags">
                    <span class="detail-tag star-tag"><img src="${starImage}" alt="${operator.rarity}星" class="star-image"></span>
                    <span class="detail-tag-stack">
                        <span class="tag-text">${jobName}</span>
                        ${jobIcon ? `<img src="${jobIcon}" alt="${jobName}" title="${jobName}" class="tag-icon">` : ''}
                    </span>
                    <span class="detail-tag-stack">
                        <span class="tag-text">${elementName}</span>
                        ${elmIcon ? `<img src="${elmIcon}" alt="${elementName}" title="${elementName}" class="tag-icon">` : ''}
                    </span>
                    <span class="detail-tag-stack">
                        <span class="tag-text">${weaponTypeName}</span>
                        ${weaponTypeIcon ? `<img src="${weaponTypeIcon}" alt="${weaponTypeName}" title="${weaponTypeName}" class="tag-icon">` : ''}
                    </span>
                </div>
            </div>
        </div>
        
        ${statsHtml ? `
        <div class="detail-section">
            <h4>角色屬性</h4>
            ${statsHtml}
        </div>
        ` : ''}
        
        ${operator.description ? `
        <div class="detail-section">
            <h4>角色背景</h4>
            <p class="operator-background" style="color:var(--text-secondary); line-height:1.8; font-size:14px;">
                ${operator.description}
            </p>
        </div>
        ` : ''}
        
        <div class="detail-section">
            <h4>推薦武器</h4>
            <div class="weapon-list">
                ${weaponsHtml || '<p style="color:var(--text-secondary)">暫無推薦武器</p>'}
            </div>
        </div>
        
        <div class="detail-section">
            <h4>推薦隊友</h4>
            <div class="teammate-list" style="display:flex;gap:12px;align-items:center;justify-content:flex-start;">
                ${teammatesHtml}
            </div>
        </div>
        
        <div class="detail-section">
            <h4>推薦裝備</h4>
            ${operator.gearRecommendation ? `
                <div class="weapon-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">
                    ${operator.gearRecommendation.pieces.map(piece => {
                        const imgFile = gearImageMap[piece] || 'item_equip_t4_suit_atk02_body_04.webp';
                        const setName = operator.gearRecommendation.setName || '';
                        const tierMap = {
                            '集成化': 0,
                            '礦場': 1, '四號谷地': 1,
                            '巡行信使': 2, '重裝信使': 2, '天災防護': 2, '蝕電防護': 2, '蝕電絕緣': 2, '阿伯莉遺聲': 2,
                            '長息': 3, '脈衝式': 3, '輕超域': 3, '點劍': 3, '生物輔助': 3, '動火用': 3, 'M.I.警用': 3, '潮湧': 3, '碾骨': 3, '50式應龍': 3, '拓荒': 3
                        };
                        const tierClass = `gear-tier-${tierMap[setName] || 0}`;
                        return `
                        <div class="gear-item ${tierClass}">
                            <img src="media/gear/${imgFile}" alt="${piece}" style="width: 60px; height: 60px; object-fit: contain; margin-bottom: 8px; border-radius: 4px;">
                            <div>${piece}</div>
                        </div>`;
                    }).join('')}
                </div>
            ` : '<p style="color:var(--text-secondary);">暫無推薦裝備</p>'}
        </div>
        `;

    document.getElementById('modal').classList.add('active');
    document.body.classList.add('modal-open');
}

function showWeaponDetail(weapon) {
    if (!weapon) return;
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalTitle || !modalBody) return;

    const typeName = typeNames[weapon.type] || weapon.type;

    modalTitle.textContent = weapon.name;

    const recommendedGears = getRecommendedGears(weapon);
    const recommendedOps = window.operatorsData ? getRecommendedOperators(weapon) : [];

    // 星數文字（★★★★★）
    const starText = '★'.repeat(weapon.rarityNum);

    let gearsHtml = recommendedGears.length > 0 ? recommendedGears.map(gear => {
        const tierMatch = gear.dropZone.match(/T(\d+)/);
        return `<div class="gear-item ${gear.isFullMatch ? 'gear-item-full' : ''} ${tierMatch ? 'gear-tier-' + tierMatch[1] : 'gear-tier-0'}"><div class="gear-name">${gear.dropZone}${gear.isFullMatch ? ' <span class="full-match-badge">完全吻合</span>' : ''}</div></div>`;
    }).join('') : '<p style="color: var(--text-secondary); font-size: 12px;">無完全匹配區域</p>';

    let opsHtml = recommendedOps.length > 0 ? recommendedOps.map(op => {
        const starImage = op.rarity >= 6 ? '6star.webp' : (op.rarity >= 5 ? '5star.webp' : (op.rarity >= 4 ? '4star.webp' : '3star.webp'));
        const iconUrl = op.icon ? `media/operators/${op.icon}` : '';
        return `<div class="operator-chip" onclick="showOperatorDetail(${op.id})"><div class="op-icon">${iconUrl ? `<img src="${iconUrl}" alt="${op.name}">` : op.name.charAt(0)}</div><span class="op-rarity"><img src="media/level/${starImage}" alt="${op.rarity}星" style="height: 16px;"></span><span class="op-name">${op.name}</span><span class="op-weapon">${typeNames[op.weapon] || op.weapon}</span></div>`;
    }).join('') : '<p style="color: var(--text-secondary); font-size: 12px;">暫無推薦角色</p>';

    modalBody.innerHTML = `
        <div class="detail-header"><div class="weapon-detail-icon rarity-${weapon.rarityNum}"><img src="${getWeaponImageUrl(weapon)}" alt="${weapon.name}"></div><div class="detail-info"><h2>${weapon.name}</h2><div class="detail-tags"><span class="detail-tag star-tag" style="color: var(--rarity-${weapon.rarityNum}); font-size: 16px; font-weight: bold;">${starText}</span><span class="detail-tag weapon-type-tag"><img src="media/weapon/${weapon.type}.png" alt="${typeName}"></span><span class="detail-tag">${typeName}</span></div></div></div>
        <div class="detail-section"><h4>屬性</h4><div class="weapon-attributes"><div class="attr-item"><span class="attr-label">主能力</span><span class="attr-value">${weapon.mainStat}</span></div>${weapon.subStat !== '/' ? `<div class="attr-item"><span class="attr-label">副能力</span><span class="attr-value">${weapon.subStat}</span></div>` : ''}<div class="attr-item"><span class="attr-label">技能</span><span class="attr-value">${weapon.skill}</span></div></div></div>
        <div class="detail-section"><h4>推薦基質掉落區域</h4><div class="recommended-gears">${gearsHtml}</div></div>
        <div class="detail-section"><h4>推薦角色</h4><div class="recommended-operators">${opsHtml}</div></div>
    `;

    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function getRecommendedGears(weapon) {
    const gears = window.gearsData;
    const hasSubStat = weapon.subStat !== '/';
    
    let fullMatchZones = [];
    let partialMatchZones = [];
    
    gears.forEach(zone => {
        let mainStatMatch = zone.mainStats.includes(weapon.mainStat);
        let subStatMatch = hasSubStat && zone.subStats.includes(weapon.subStat);
        let skillMatch = zone.skills.includes(weapon.skill);
        
        if (mainStatMatch && subStatMatch && skillMatch) {
            fullMatchZones.push({
                ...zone,
                isFullMatch: true
            });
        } else if (mainStatMatch || subStatMatch || skillMatch) {
            partialMatchZones.push({
                ...zone,
                isFullMatch: false
            });
        }
    });
    
    let result = [...fullMatchZones];
    
    if (result.length === 0 && partialMatchZones.length > 0) {
        result = partialMatchZones.slice(0, 2);
    }
    
    return result;
}

function getRecommendedOperators(weapon) {
    const operators = window.operatorsData || [];
    if (operators.length === 0) return [];
    
    let scoredOperators = operators.map(op => {
        let score = 0;
        
        if (op.weapon === weapon.type) {
            score += 100;
        }
        
        if (op.exclusiveWeapon && weapon.name === op.exclusiveWeapon) {
            score += 200;
        }
        
        if (weapon.rarityNum >= 6) {
            if (op.rarity >= 5) score += 10;
        } else if (weapon.rarityNum >= 5) {
            if (op.rarity >= 4) score += 10;
        } else {
            score += 5;
        }
        
        score += op.rarity * 2;
        
        return { ...op, score };
    });
    
    scoredOperators.sort((a, b) => b.score - a.score);
    
    return scoredOperators.slice(0, 6);
}

function setupGearFilters() {
    document.querySelectorAll('.zone-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const zone = btn.dataset.zone;
            
            document.querySelectorAll('.zone-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            selectedGearZone = zone;
            selectedGearMainStats = [];
            selectedGearSubStat = null;
            selectedGearSkill = null;
            
            const filtersDiv = document.getElementById('gear-filters');
            const resultsDiv = document.getElementById('gear-results');
            
            if (zone === 'all') {
                document.getElementById('gear-zone-name').textContent = '全部區域';
                filtersDiv.style.display = 'block';
                resultsDiv.style.display = 'block';
                
                const mainstatsRow = document.querySelector('.gear-mainstat-row');
                const substatsRow = document.querySelector('.gear-substat-row');
                const skillsRow = document.querySelector('.gear-skill-row');
                
                const allMainStats = ["敏捷提升", "力量提升", "意志提升", "智識提升", "主能力提升"];
                const allSubStats = ["攻擊提升", "物理傷害提升", "灼熱傷害提升", "寒冷傷害提升", "自然傷害提升", "暴擊率提升", "源石技藝強度提升", "終結技充能效率提升", "法術提升", "治療效率提升", "生命力"];
                const allSkills = ["強攻", "壓制", "追襲", "粉碎", "巧技", "迸發", "流轉", "效益", "昂揚", "附術", "醫療", "切骨", "夜幕", "殘暴"];
                
                mainstatsRow.innerHTML = '<span class="filter-label">基礎屬性：</span>';
                allMainStats.forEach(stat => {
                    mainstatsRow.innerHTML += `<button class="filter-btn gear-mainstat-btn" data-mainstat="${stat}">${stat}</button>`;
                });
                
                substatsRow.innerHTML = '<span class="filter-label">附加屬性：</span>';
                allSubStats.forEach(stat => {
                    substatsRow.innerHTML += `<button class="filter-btn gear-substat-btn" data-substat="${stat}">${stat}</button>`;
                });
                
                skillsRow.innerHTML = '<span class="filter-label">技能屬性：</span>';
                allSkills.forEach(skill => {
                    skillsRow.innerHTML += `<button class="filter-btn gear-skill-btn" data-skill="${skill}">${skill}</button>`;
                });
                
                bindGearFilterEvents();
                filterGearWeapons();
                return;
            }
            
            const zoneData = gearsData.find(g => g.dropZone === zone);
            if (!zoneData) return;
            
            document.getElementById('gear-zone-name').textContent = zone;
            
            const mainstatsRow = document.querySelector('.gear-mainstat-row');
            const substatsRow = document.querySelector('.gear-substat-row');
            const skillsRow = document.querySelector('.gear-skill-row');
            
            mainstatsRow.innerHTML = '<span class="filter-label">基礎屬性：</span>';
            zoneData.mainStats.forEach(stat => {
                mainstatsRow.innerHTML += `<button class="filter-btn gear-mainstat-btn" data-mainstat="${stat}">${stat}</button>`;
            });
            
            substatsRow.innerHTML = '<span class="filter-label">附加屬性：</span>';
            zoneData.subStats.forEach(stat => {
                substatsRow.innerHTML += `<button class="filter-btn gear-substat-btn" data-substat="${stat}">${stat}</button>`;
            });
            
            skillsRow.innerHTML = '<span class="filter-label">技能屬性：</span>';
            zoneData.skills.forEach(skill => {
                skillsRow.innerHTML += `<button class="filter-btn gear-skill-btn" data-skill="${skill}">${skill}</button>`;
            });
            
            filtersDiv.style.display = 'block';
            resultsDiv.style.display = 'block';
            
            bindGearFilterEvents();
            filterGearWeapons();
        });
    });
}

function bindGearFilterEvents() {
    document.querySelectorAll('.gear-mainstat-btn').forEach(btn => {
        btn.onclick = function() {
            const mainstat = this.dataset.mainstat;
            
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                selectedGearMainStats = selectedGearMainStats.filter(m => m !== mainstat);
            } else {
                if (selectedGearMainStats.length < 3) {
                    this.classList.add('active');
                    selectedGearMainStats.push(mainstat);
                }
            }
            
            filterGearWeapons();
        };
    });

    document.querySelectorAll('.gear-substat-btn').forEach(btn => {
        btn.onclick = function() {
            const substat = this.dataset.substat;
            
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                selectedGearSubStat = null;
            } else {
                document.querySelectorAll('.gear-substat-btn, .gear-skill-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                selectedGearSubStat = substat;
                selectedGearSkill = null;
            }
            
            filterGearWeapons();
        };
    });

    document.querySelectorAll('.gear-skill-btn').forEach(btn => {
        btn.onclick = function() {
            const skill = this.dataset.skill;
            
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                selectedGearSkill = null;
            } else {
                document.querySelectorAll('.gear-substat-btn, .gear-skill-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                selectedGearSkill = skill;
                selectedGearSubStat = null;
            }
            
            filterGearWeapons();
        };
    });
}

function filterGearWeapons() {
    const grid = document.getElementById('gear-weapons-grid');
    const countSpan = document.getElementById('gear-weapon-count');
    
    if (!grid || !selectedGearZone) return;
    
    if (selectedGearZone === 'all') {
        let filtered = weaponsData;
        
        if (selectedGearMainStats.length > 0) {
            filtered = filtered.filter(w => selectedGearMainStats.includes(w.mainStat));
        }
        
        if (selectedGearSubStat) {
            filtered = filtered.filter(w => w.subStat === selectedGearSubStat);
        }
        
        if (selectedGearSkill) {
            filtered = filtered.filter(w => w.skill === selectedGearSkill);
        }
        
        // 按稀有度降序，同名按名稱排序
        filtered.sort((a, b) => b.rarityNum - a.rarityNum || a.name.localeCompare(b.name, 'zh-TW'));
        
        countSpan.textContent = filtered.length;
        grid.innerHTML = '';
        
        if (filtered.length === 0) {
            grid.innerHTML = '<p style="color: var(--text-secondary); padding: 20px; text-align: center;">沒有符合條件的武器</p>';
            return;
        }
        
        filtered.forEach(w => {
            const card = document.createElement('div');
            card.className = `card card-weapon rarity-${w.rarityNum}`;
            
            const imgUrl = getWeaponImageUrl(w);
            const typeIconUrl = `media/weapon/${w.type}.png`;
            const rarityNames = { 6: '六星', 5: '五星', 4: '四星', 3: '三星' };
            const rarityName = rarityNames[w.rarityNum] || `${w.rarityNum}星`;
            const typeName = typeNames[w.type] || w.type;
            
        card.innerHTML = `
            <div class="weapon-header">
                <div class="weapon-icon">
                    <img src="${imgUrl}" alt="${w.name}" loading="lazy" onerror="this.classList.add('error')" onload="this.classList.add('loaded')">
                    <span class="fallback-icon">${w.name.charAt(0)}</span>
                </div>
            </div>
            <div class="weapon-info">
                <div class="weapon-name">${w.name}</div>
                <div class="weapon-meta">
                    <span class="weapon-rarity rarity-${w.rarityNum}">${rarityName}</span>
                    <span class="weapon-type-badge">
                        <img src="${typeIconUrl}" alt="${typeName}" loading="lazy" onerror="this.style.display='none'">
                        ${typeName}
                    </span>
                </div>
            </div>
        `;
            
            card.addEventListener('click', () => showWeaponDetail(w));
            grid.appendChild(card);
        });
        return;
    }
    
    const zoneData = gearsData.find(g => g.dropZone === selectedGearZone);
    
    let filtered = weaponsData.filter(w => {
        let mainStatMatch = zoneData.mainStats.includes(w.mainStat);
        // 如果武器有副屬性，才檢查副屬性匹配；若無副屬性，則視為符合
        let subStatMatch = w.subStat === '/' || zoneData.subStats.includes(w.subStat);
        let skillMatch = zoneData.skills.includes(w.skill);
        
        // 需要主屬性 和 技能 至少一個匹配，副屬性則視情況
        // 考慮到無副屬性武器，我們使用：主屬性或技能匹配即可，副屬性有則必須匹配
        const hasRequiredMainOrSkill = mainStatMatch || skillMatch;
        const subStatOk = w.subStat === '/' || subStatMatch;
        
        if (!hasRequiredMainOrSkill || !subStatOk) return false;
        
        if (selectedGearMainStats.length > 0 && !selectedGearMainStats.includes(w.mainStat)) {
            return false;
        }
        
        if (selectedGearSubStat && w.subStat !== selectedGearSubStat) {
            return false;
        }
        
        if (selectedGearSkill && w.skill !== selectedGearSkill) {
            return false;
        }
        
        return true;
    });
    
    // 按稀有度降序，同名按名稱排序
    filtered.sort((a, b) => b.rarityNum - a.rarityNum || a.name.localeCompare(b.name, 'zh-TW'));
    
    countSpan.textContent = filtered.length;
    grid.innerHTML = '';
    
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="color: var(--text-secondary); padding: 20px; text-align: center;">沒有符合條件的武器</p>';
        return;
    }
    
    filtered.forEach(w => {
        const card = document.createElement('div');
        card.className = `card card-weapon rarity-${w.rarityNum}`;
        
        const imgUrl = getWeaponImageUrl(w);
        const typeIconUrl = `media/weapon/${w.type}.png`;
        const rarityNames = { 6: '六星', 5: '五星', 4: '四星', 3: '三星' };
        const rarityName = rarityNames[w.rarityNum] || `${w.rarityNum}星`;
        const typeName = typeNames[w.type] || w.type;
        
        card.innerHTML = `
            <div class="weapon-header">
                <div class="weapon-icon">
                    <img src="${imgUrl}" alt="${w.name}" onerror="this.classList.add('error')" onload="this.classList.add('loaded')">
                    <span class="fallback-icon">${w.name.charAt(0)}</span>
                </div>
            </div>
            <div class="weapon-info">
                <div class="weapon-name">${w.name}</div>
                <div class="weapon-meta">
                    <span class="weapon-rarity rarity-${w.rarityNum}">${rarityName}</span>
                    <span class="weapon-type-badge">
                        <img src="${typeIconUrl}" alt="${typeName}" onerror="this.style.display='none'">
                        ${typeName}
                    </span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => showWeaponDetail(w));
        grid.appendChild(card);
    });
}

function getWeaponImageUrl(weapon) {
    if (imageNameMap[weapon.name]) {
        return `images/${imageNameMap[weapon.name]}.png`;
    }
    if (weapon.wikiName) {
        return `images/${weapon.wikiName}.png`;
    }
    return `images/${weapon.name}.png`;
}
