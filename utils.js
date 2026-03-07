/**
 * 統一渲染工具函數
 */

const typeNames = {
    'Sword': '單手劍',
    'Greatsword': '雙手劍',
    'Polearm': '長柄武器',
    'Handcannon': '手銃',
    'Arts Unit': '施術單元'
};

const elementNames = {
    'Nature': '自然',
    'Heat': '灼熱',
    'Physical': '物理',
    'Cryo': '寒冷',
    'Electric': '電擊'
};

const classNames = {
    'Striker': '突擊',
    'Guard': '近衛',
    'Caster': '術師',
    'Vanguard': '先鋒',
    'Defender': '重裝',
    'Support': '輔助'
};

const rarityNames = { 6: '六星', 5: '五星', 4: '四星', 3: '三星' };
const elementImageMap = {
    'Nature': 'nature.jpg',
    'Heat': 'fire.jpg',
    'Physical': 'physic.jpg',
    'Cryo': 'ice.jpg',
    'Electric': 'electric.jpg'
};

function getOperatorCardHtml(op) {
    const starImage = op.rarity >= 6 ? 'media/level/6star.webp' : (op.rarity >= 5 ? 'media/level/5star.webp' : 'media/level/4star.webp');
    const iconUrl = op.icon ? `media/operators/${op.icon}` : '';
    const jobIcon = op.class ? `media/job/${op.class}.webp` : '';
    const elmFile = elementImageMap[op.element] || '';
    const elmIcon = elmFile ? `media/elements/${elmFile}` : '';
    
    return `
        <div class="operator-icon">
            ${iconUrl ? `<img src="${iconUrl}" alt="${op.name}" loading="lazy" onerror="this.parentElement.innerHTML='<span class=\\'fallback\\'>${op.name.charAt(0)}</span>'">` : `<span class="fallback">${op.name.charAt(0)}</span>`}
        </div>
        <div class="name">${op.name}</div>
        <div class="rarity">
            <img src="${starImage}" alt="${op.rarity}星" style="height: 16px;" loading="lazy">
        </div>
        <div class="info-slot">
            ${jobIcon ? `<img src="${jobIcon}" alt="${op.class}" title="${op.class}" loading="lazy">` : ''}
            ${elmIcon ? `<img src="${elmIcon}" alt="${op.element}" title="${op.element}" loading="lazy">` : ''}
        </div>
    `;
}

function getWeaponCardHtml(w) {
    const imgUrl = getWeaponImageUrl(w);
    const typeIconUrl = `media/weapon/${w.type}.png`;
    const rarityName = rarityNames[w.rarityNum] || `${w.rarityNum}星`;
    const typeName = typeNames[w.type] || w.type;
    
    return `
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
}

function handleImageError(img, fallbackText) {
    img.style.display = 'none';
    if (img.nextElementSibling && img.nextElementSibling.classList.contains('fallback-icon')) {
        img.nextElementSibling.style.display = 'flex';
    }
}

function handleImageLoad(img) {
    img.classList.add('loaded');
}

window.typeNames = typeNames;
window.elementNames = elementNames;
window.classNames = classNames;
window.rarityNames = rarityNames;
window.getOperatorCardHtml = getOperatorCardHtml;
window.getWeaponCardHtml = getWeaponCardHtml;
window.handleImageError = handleImageError;
window.handleImageLoad = handleImageLoad;
