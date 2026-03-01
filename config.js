/**
 * 全域配置
 */

const Config = {
    DEBOUNCE_DELAY: 180,
    LAZY_LOAD_THRESHOLD: 200,
    VIRTUAL_SCROLL_ITEM_HEIGHT: 300,
    VIRTUAL_SCROLL_BUFFER: 5,
    TOAST_DURATION: 3000,
    SKELETON_COUNT: 8,
    
    FILTERS: {
        OPERATOR_RARITIES: ['all', '6', '5', '4'],
        OPERATOR_ELEMENTS: ['all', 'Nature', 'fire', 'Physical', 'ice', 'Electric'],
        OPERATOR_CLASSES: ['all', 'Striker', 'Vanguard', 'Guard', 'Defender', 'Caster', 'Support'],
        WEAPON_RARITIES: ['all', '6', '5', '4', '3'],
        WEAPON_TYPES: ['all', 'Sword', 'Greatsword', 'Polearm', 'Arts Unit', 'Handcannon']
    },
    
    SORT_OPTIONS: {
        OPERATOR: [
            { value: 'rarity-desc', label: '星數 高→低' },
            { value: 'rarity-asc', label: '星數 低→高' },
            { value: 'name-asc', label: '名稱 A→Z' },
            { value: 'name-desc', label: '名稱 Z→A' },
            { value: 'class', label: '職業' },
            { value: 'element', label: '屬性' }
        ],
        WEAPON: [
            { value: 'rarity-desc', label: '星數 高→低' },
            { value: 'rarity-asc', label: '星數 低→高' },
            { value: 'name-asc', label: '名稱 A→Z' }
        ]
    },
    
    CLASS_ORDER: { 'Striker': 1, 'Vanguard': 2, 'Guard': 3, 'Defender': 4, 'Caster': 5, 'Support': 6 },
    ELEMENT_ORDER: { 'Physical': 1, 'Nature': 2, 'Heat': 3, 'Electric': 4, 'Cryo': 5 },
    
    STORAGE_KEYS: {
        THEME: 'theme',
        OPERATOR_FILTERS: 'operator_filters',
        WEAPON_FILTERS: 'weapon_filters'
    }
};

window.Config = Config;
