/**
 * 基質數據
 */

const gearsData = [
    { 
        id: 1, 
        name: "樞紐區", 
        type: "Zone", 
        dropZone: "樞紐區", 
        mainStats: ["敏捷提升", "力量提升", "意志提升", "智識提升", "主能力提升"], 
        subStats: ["攻擊提升", "灼熱傷害提升", "電磁傷害提升", "寒冷傷害提升", "自然傷害提升", "源石技藝強度提升", "終結技充能效率提升", "法術提升"], 
        skills: ["強攻", "壓制", "追襲", "粉碎", "巧技", "迸發", "流轉", "效益"] 
    },
    { 
        id: 2, 
        name: "源石研究園", 
        type: "Zone", 
        dropZone: "源石研究園", 
        mainStats: ["敏捷提升", "力量提升", "意志提升", "智識提升", "主能力提升"], 
        subStats: ["攻擊提升", "物理傷害提升", "電磁傷害提升", "寒冷傷害提升", "自然傷害提升", "暴擊率提升", "終結技充能效率提升", "法術提升"], 
        skills: ["壓制", "追襲", "昂揚", "巧技", "附術", "醫療", "切骨", "效益"] 
    },
    { 
        id: 3, 
        name: "礦脈源區", 
        type: "Zone", 
        dropZone: "礦脈源區", 
        mainStats: ["敏捷提升", "力量提升", "意志提升", "智識提升", "主能力提升"], 
        subStats: ["生命提升", "物理傷害提升", "灼熱傷害提升", "寒冷傷害提升", "自然傷害提升", "暴擊率提升", "源石技藝強度提升", "治療效率提升"], 
        skills: ["強攻", "壓制", "巧技", "殘暴", "附術", "迸發", "夜幕", "效益"] 
    },
    { 
        id: 4, 
        name: "供能高地", 
        type: "Zone", 
        dropZone: "供能高地", 
        mainStats: ["敏捷提升", "力量提升", "意志提升", "智識提升", "主能力提升"], 
        subStats: ["攻擊提升", "生命提升", "物理傷害提升", "灼熱傷害提升", "自然傷害提升", "暴擊率提升", "源石技藝強度提升", "治療效率提升"], 
        skills: ["追襲", "粉碎", "昂揚", "殘暴", "附術", "醫療", "切骨", "流轉"] 
    },
    { 
        id: 5, 
        name: "武陵城", 
        type: "Zone", 
        dropZone: "武陵城", 
        mainStats: ["敏捷提升", "力量提升", "意志提升", "智識提升", "主能力提升"], 
        subStats: ["攻擊提升", "生命提升", "電磁傷害提升", "寒冷傷害提升", "暴擊率提升", "終結技充能效率提升", "法術提升", "治療效率提升"], 
        skills: ["強攻", "粉碎", "殘暴", "醫療", "切骨", "迸發", "夜幕", "流轉"] 
    }
];

const teamsData = [
    { id: 1, name: "物理輸出隊", members: ["Ember", "Arclight", "Wulfgard"], description: "高物理輸出陣容" },
    { id: 2, name: "元素輸出隊", members: ["Laevatain", "Antal", "Fluorite"], description: "高元素傷害陣容" },
    { id: 3, name: "防禦坦克隊", members: ["Catcher", "Da Pan", "Xaihi"], description: "高防禦陣容" },
    { id: 4, name: "輔助支援隊", members: ["Gilberta", "Ardelia", "Perlica"], description: "治療輔助陣容" },
    { id: 5, name: "均衡發展隊", members: ["Endministrator", "Lifeng", "Snowshine"], description: "攻守兼備陣容" },
    { id: 6, name: "速攻隊", members: ["Laevatain", "Akekuri", "Chen Qianyu"], description: "快速擊殺陣容" }
];

const stagesData = [
    { id: "S1_A", name: "S1-A", zone: "樞紐區", mainStats: ["敏捷提升"], subStats: ["攻擊提升"], skills: ["強攻"] },
    { id: "S1_B", name: "S1-B", zone: "樞紐區", mainStats: ["力量提升"], subStats: ["灼熱傷害提升"], skills: ["壓制"] },
    { id: "S1_C", name: "S1-C", zone: "樞紐區", mainStats: ["智識提升"], subStats: ["終結技充能效率提升"], skills: ["追襲"] },
    { id: "S2_A", name: "S2-A", zone: "源石研究園", mainStats: ["意志提升"], subStats: ["法術提升"], skills: ["昂揚"] },
    { id: "S2_B", name: "S2-B", zone: "源石研究園", mainStats: ["敏捷提升"], subStats: ["暴擊率提升"], skills: ["附術"] },
    { id: "S3_A", name: "S3-A", zone: "礦脈源區", mainStats: ["主能力提升"], subStats: ["生命提升"], skills: ["粉碎"] },
    { id: "S3_B", name: "S3-B", zone: "礦脈源區", mainStats: ["力量提升"], subStats: ["物理傷害提升"], skills: ["效益"] },
    { id: "S4_A", name: "S4-A", zone: "供能高地", mainStats: ["敏捷提升"], subStats: ["終結技充能效率提升"], skills: ["迸發"] },
    { id: "S4_B", name: "S4-B", zone: "供能高地", mainStats: ["智識提升"], subStats: ["源石技藝強度提升"], skills: ["切骨"] },
    { id: "S5_A", name: "S5-A", zone: "武陵城", mainStats: ["意志提升"], subStats: ["寒冷傷害提升"], skills: ["夜幕"] },
    { id: "S5_B", name: "S5-B", zone: "武陵城", mainStats: ["主能力提升"], subStats: ["暴擊率提升"], skills: ["流轉"] }
];

window.gearsData = gearsData;
window.teamsData = teamsData;
window.stagesData = stagesData;
