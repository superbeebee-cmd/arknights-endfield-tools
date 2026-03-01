/**
 * 終末地 攻略數據
 */

const operatorsData = [
    { id: 1, name: "艾爾黛拉", rarity: 6, class: "Support", element: "Nature", weapon: "Arts Unit", exclusiveWeapon: "滄溟星夢", mainStat: "智識提升", subStat: "治療效率提升", tags: ["治療", "輔助", "護盾"], icon: "Ardelia_icon.png", fullImage: "Ardelia_Splash_Art.png", description: "在末日社區長大的支援專家，專注於群體治療與護盾管理，能在團隊血量最低時提供關鍵救援，讓隊友在長時間戰鬥中持續存活與穩定輸出。" },
    { id: 2, name: "餘燼", rarity: 6, class: "Defender", element: "Heat", weapon: "Greatsword", exclusiveWeapon: "大雷斑", mainStat: "力量提升", subStat: "生命提升", tags: ["防禦", "灼熱", "回復"], icon: "Ember_icon.png", fullImage: "Ember_Splash_Art.png", description: "在灼熱戰場長大的防禦者，能以堅實護甲與強力反擊守護隊友。致力於讓團隊在長時間戰鬥中維持高生存與穩定輸出。" },
    { id: 3, name: "管理員", rarity: 6, class: "Guard", element: "Physical", weapon: "Sword", exclusiveWeapon: "宏願", mainStat: "敏捷提升", subStat: "物理傷害提升", tags: ["輸出", "物理", "爆擊"], icon: "Endministrator_icon.png", fullImage: "Endadministrator_%28Female%29_Splash_Art.png", description: "謎一般的存在，過去曾與『天火』並肩作戰。擅長物理輸出與暴擊，能在戰場上給予敵人致命一擊，經驗豐富，善於判斷戰機與瞬間爆發。" },
    { id: 4, name: "潔爾佩塔", rarity: 6, class: "Support", element: "Nature", weapon: "Arts Unit", exclusiveWeapon: "使命必達", mainStat: "意志提升", subStat: "終結技充能效率提升", tags: ["輔助", "治療", "增傷"], icon: "Gilberta_icon.png", fullImage: "Gilberta_Splash_Art.png", description: "在後勤崗位以坦薄蛋般的耐心支援整個團隊。專長於改善隊友續航與輸出節奏，讓每一次治療與增傷都落在需要的時刻。" },
    { id: 5, name: "萊萬汀", rarity: 6, class: "Striker", element: "Heat", weapon: "Sword", exclusiveWeapon: "熔鑄火焰", mainStat: "智識提升", subStat: "灼熱傷害提升", tags: ["輸出", "灼熱", "爆擊"], icon: "Laevatain_icon.png", fullImage: "Laevatain_Splash_Art.png", description: "炎之地的火焰契約者。脾氣火爆卻忠誠，灼熱傷害與暴擊率的結合讓他成為團隊的核心輸出，喜歡在近距離爆發。" },
    { id: 6, name: "別禮", rarity: 6, class: "Striker", element: "Cryo", weapon: "Greatsword", exclusiveWeapon: "赫拉芬格", mainStat: "力量提升", subStat: "寒冷傷害提升", tags: ["輸出", "寒冷", "控制"], icon: "Last_Rite_icon.png", fullImage: "Last_Rite_Splash_Art.png", description: "冰雪劍師，過去與深淵有過交集，擁有強力寒冷輸出與控場能力，能讓敵人動作變慢並為隊友創造反擊窗口。" },
    { id: 7, name: "黎風", rarity: 6, class: "Guard", element: "Physical", weapon: "Polearm", exclusiveWeapon: "負山", mainStat: "敏捷提升", subStat: "物理傷害提升", tags: ["防禦", "輸出", "保護"], icon: "Lifeng_icon.png", fullImage: "Lifeng_Splash_Art.png", description: "北方森林的守護者，靈活而堅韌。以長柄武器在前線壓制敵人，同時守護隊友的安危，讓戰場更穩定。" },
    { id: 8, name: "駿衛", rarity: 6, class: "Vanguard", element: "Physical", weapon: "Sword", exclusiveWeapon: "不知歸", mainStat: "意志提升", subStat: "攻擊提升", tags: ["先手", "輸出", "物理"], icon: "Pogranichnik_icon.png", fullImage: "Pogranichnik_Splash_Art.png", description: "炎國邊境的警衛，常在前線奮戰。具備先手攻擊與迅速削減敵人的能力，能成為團隊的前排核心，穩定突破防線。" },
    { id: 9, name: "秋栗", rarity: 4, class: "Vanguard", element: "Heat", weapon: "Sword", exclusiveWeapon: "", mainStat: "敏捷提升", subStat: "灼熱傷害提升", tags: ["先手", "灼熱", "輸出"], icon: "Akekuri_icon.png", fullImage: "Akekuri_Splash_Art.png", description: "活潑開朗的炎國少女，熱衷於冒險與戰鬥。灼熱傷害搭配先手能力，能在戰鬥初期取得優勢，並以快速的機動性持續施壓。" },
    { id: 10, name: "阿列什", rarity: 5, class: "Guard", element: "Cryo", weapon: "Sword", exclusiveWeapon: "", mainStat: "力量提升", subStat: "寒冷傷害提升", tags: ["輸出", "寒冷", "防禦"], icon: "Alesh_icon.png", fullImage: "Alesh_Splash_Art.png", description: "謝拉格出身的寒冰劍士，性格冷靜沉著。結合防禦與輸出能力，寒冷傷害能有效克制敵人，並在隊伍中提供穩定的控場。" },
    { id: 11, name: "安塔爾", rarity: 4, class: "Caster", element: "Electric", weapon: "Arts Unit", exclusiveWeapon: "", mainStat: "智識提升", subStat: "電磁傷害提升", tags: ["輸出", "雷電", "法術"], icon: "Antal_icon.png", fullImage: "Antal_Splash_Art.png", description: "熱情的卡西米亞術師，專精於雷電法術。輸出型法師，电磁伤害能夠貫穿敵人防禦。" },
    { id: 12, name: "弧光", rarity: 5, class: "Striker", element: "Electric", weapon: "Sword", exclusiveWeapon: "", mainStat: "敏捷提升", subStat: "雷電傷害提升", tags: ["輸出", "雷電", "穿透"], icon: "Arclight_icon.png", fullImage: "Arclight_Splash_Art.png", description: "電閃雷鳴般的雷電劍士，速度與輸出兼具。雷電傷害具穿透特性，能在戰場中快速擊倒多名敵人。" },
    { id: 13, name: "艾維文娜", rarity: 5, class: "Caster", element: "Electric", weapon: "Polearm", exclusiveWeapon: "", mainStat: "智識提升", subStat: "雷電傷害提升", tags: ["輸出", "雷電", "法術"], icon: "Avywenna_icon.png", fullImage: "Avywenna_Splash_Art.png", description: "雷姆必拓的長柄法術使用者，擅長遠距離雷電輸出，控場與群體傷害並存，是隊伍法術輸出的核心。" },
    { id: 14, name: "卡契爾", rarity: 4, class: "Defender", element: "Physical", weapon: "Greatsword", exclusiveWeapon: "", mainStat: "力量提升", subStat: "生命提升", tags: ["防禦", "保護", "物理"], icon: "Catcher_icon.png", fullImage: "Catcher_Splash_Art.png", description: "沉默寡言的防禦型戰士，擅於保護隊友。具備高生命力與堅固防禦，是團隊的前線防護核心。" },
    { id: 15, name: "陳千語", rarity: 5, class: "Striker", element: "Physical", weapon: "Sword", exclusiveWeapon: "仰止", mainStat: "敏捷提升", subStat: "物理傷害提升", tags: ["輸出", "物理", "先手"], icon: "Chen_Qianyu_icon.png", fullImage: "Chen_Qianyu_Splash_Art.png", description: "炎國陳家後裔，劍術出眾的年輕天才。以物理輸出與先手能力著稱，是隊伍中極具潛力的新星，值得長期培養。" },
    { id: 16, name: "大潘", rarity: 5, class: "Defender", element: "Physical", weapon: "Greatsword", exclusiveWeapon: "", mainStat: "力量提升", subStat: "生命提升", tags: ["防禦", "保護", "生命力"], icon: "Da_Pan_icon.png", fullImage: "Da_Pan_Splash_Art.png", description: "性格溫和、內斂的防禦者，擁有卓越的生命力與穩健防禦，是隊伍的堅實後盾，能在壓力時承受傷害並保護隊友。" },
    { id: 17, name: "埃特拉", rarity: 4, class: "Guard", element: "Cryo", weapon: "Polearm", exclusiveWeapon: "", mainStat: "敏捷提升", subStat: "寒冷傷害提升", tags: ["輸出", "寒冷", "反擊"], icon: "Estella_icon.png", fullImage: "Estella_Splash_Art.png", description: "謝拉格貴族出身的冰雪守衛，具備穩定的輸出與反擊能力，能以寒冷傷害慢下敵人速度，為隊友創造進攻窗口。" },
    { id: 18, name: "螢石", rarity: 4, class: "Caster", element: "Nature", weapon: "Handcannon", exclusiveWeapon: "", mainStat: "智識提升", subStat: "自然傷害提升", tags: ["輸出", "自然", "控制"], icon: "Fluorite_icon.png", fullImage: "Fluorite_Splash_Art.png", description: "活潑開朗的自然系術師，擅長自然法術。手砲型法師，自然傷害具控場能力，能穩定控場並提供穩定輸出。" },
    { id: 19, name: "佩麗卡", rarity: 5, class: "Support", element: "Electric", weapon: "Arts Unit", exclusiveWeapon: "", mainStat: "意志提升", subStat: "治療效率提升", tags: ["輔助", "治療", "雷電"], icon: "Perlica_icon.png", fullImage: "Perlica_Splash_Art.png", description: "雷姆必拓的雷電治療專家，專長於穩定的隊伍回復。能在長時間戰鬥中持續恢復隊友生命值，並提供穩定的增益效果。" },
    { id: 20, name: "晝雪", rarity: 5, class: "Support", element: "Cryo", weapon: "Greatsword", exclusiveWeapon: "", mainStat: "意志提升", subStat: "寒冷傷害提升", tags: ["輔助", "治療", "寒冷"], icon: "Snowshine_icon.png", fullImage: "Snowshine_Splash_Art.png", description: "謝拉格雪域的溫柔醫療兵，專長於治療與寒冷輸出並存，能在團隊中提供穩定的支援與保護。" },
    { id: 21, name: "狼衛", rarity: 5, class: "Striker", element: "Heat", weapon: "Handcannon", exclusiveWeapon: "同類相食", mainStat: "力量提升", subStat: "灼熱傷害提升", tags: ["輸出", "灼熱", "範圍"], icon: "Wulfgard_icon.png", fullImage: "Wulfgard_Splash_Art.png", description: "炎國北方部落的戰士，專長近距離灼熱輸出與範圍攻擊。以高傷害與穩定輸出著稱，能在團隊前線造成壓力。" },
    { id: 22, name: "賽希", rarity: 5, class: "Caster", element: "Cryo", weapon: "Arts Unit", exclusiveWeapon: "", mainStat: "智識提升", subStat: "寒冷傷害提升", tags: ["輸出", "寒冷", "控制"], icon: "Xaihi_icon.png", fullImage: "Xaihi_Splash_Art.png", description: "穩健的卡西米亞冰霜術師，沉穩且實力強大。以輸出與控場兼具著稱，能在寒冷的戰場中穩定壓制敵人，為隊伍提供穩定火力。" },
    { id: 23, name: "伊馮", rarity: 6, class: "Striker", element: "Cryo", weapon: "Handcannon", exclusiveWeapon: "藝術暴君", mainStat: "智識提升", subStat: "暴擊率提升", tags: ["輸出", "寒冷", "爆擊"], icon: "Yvonne_icon.png", fullImage: "Yvonne_Splash_Art.png", description: "萊特寧公司旗下的頂級戰鬥術師，被稱為「藝術暴君」。具極高暴擊率，結合寒冷傷害形成壓制性輸出，常在戰場上掀起風暴。" }
];

const teammatesData = {
    1: [2, 4, 6], 2: [1, 3, 5], 3: [2, 8, 15], 4: [1, 19, 20], 5: [2, 6, 18],
    6: [1, 5, 12], 7: [8, 10, 17], 8: [3, 7, 23], 9: [11, 18, 22], 10: [7, 12, 21],
    11: [9, 13, 19], 12: [6, 10, 21], 13: [4, 11, 18], 14: [7, 16, 20], 15: [3, 8, 23],
    16: [14, 20, 22], 17: [7, 8, 15], 18: [5, 11, 13], 19: [1, 4, 11], 20: [1, 4, 14],
    21: [10, 12, 22], 22: [9, 16, 21], 23: [3, 8, 15]
};

const imageNameMap = {
    "塔爾11": "Tarr_11",
    "吉米尼12": "Jiminy_12",
    "佩科5": "Peco_5",
    "達爾霍夫7": "Darhoff_7",
    "奧佩羅77": "Opero_77",
    "應急手段": "Contingent_Measure",
    "浪潮": "Wave_Tide",
    "全自動駭新星": "Hypernova_Auto",
    "熒光雷羽": "Fluorescent_Roc",
    "呼嘯守衛": "Howling_Guard",
    "長路": "Long_Road",
    "工業零點一": "Industry_0.1",
    "淬火者": "Quencher",
    "鋼鐵餘音": "Sundering_Steel",
    "堅城鑄造者": "Fortmaker",
    "逐鱗3.0": "Finchaser_3.0",
    "十二問": "Twelve_Questions",
    "O.B.J.輕芒": "OBJ_Edge_of_Lightness",
    "仰止": "Aspirant",
    "悼亡詩": "Stanza_of_Memorials",
    "莫奈何": "Monaihe",
    "迷失荒野": "Wild_Wanderer",
    "布道自由": "Freedom_to_Proselytize",
    "O.B.J.術識": "OBJ_Arts_Identifier",
    "作品：眾生": "Opus_The_Living",
    "O.B.J.迅極": "OBJ_Velocitous",
    "理性告別": "Rational_Farewell",
    "作品：蝕跡": "Opus_Etch_Figure",
    "探驪": "Seeker_of_Dark_Lung",
    "古渠": "Ancient_Canal",
    "終點之聲": "Finishing_Call",
    "O.B.J.重荷": "OBJ_Heavy_Burden",
    "嵌合正義": "Chimeric_Justice",
    "O.B.J.尖峰": "OBJ_Razorhorn",
    "向心之引": "Cohesive_Traction",
    "宏願": "Grand_Vision",
    "不知歸": "Never_Rest",
    "熔鑄火焰": "Forgeborn_Scathe",
    "黯色火炬": "Umbral_Torch",
    "扶搖": "Rapid_Ascent",
    "熱熔切割器": "Thermite_Cutter",
    "顯赫聲明": "Eminent_Repute",
    "白夜新星": "White_Night_Nova",
    "使命必達": "Delivery_Guaranteed",
    "滄溟星夢": "Dreams_of_the_Starry_Beach",
    "爆破單元": "Detonation_Unit",
    "遺忘": "Oblivion",
    "騎士精神": "Chivalric_Virtues",
    "藝術暴君": "Artzy_Tyrannical",
    "領航者": "Navigator",
    "楔子": "Wedge",
    "同類相食": "Clannibal",
    "大雷斑": "Thunderberge",
    "赫拉芬格": "Khravengger",
    "典範": "Exemplar",
    "昔日精品": "Former_Finery",
    "破碎君王": "Sundered_Prince",
    "負山": "Mountain_Bearer",
    "驍勇": "Valiant",
    "J.E.T.": "JET",
    "導師者道標": "Pathfinder's_Beacon",
    "天使殺手": "Aggeloslayer"
};

const weaponsData = [
    { name: "塔爾11", wikiName: "Tarr_11", mainStat: "主能力提升", subStat: "/", skill: "強攻", rarity: "三星", type: "Sword", rarityNum: 3, tags: ["輸出", "物理"], exclusive: false },
    { name: "吉米尼12", wikiName: "Jiminy_12", mainStat: "主能力提升", subStat: "/", skill: "強攻", rarity: "三星", type: "Arts Unit", rarityNum: 3, tags: ["輸出", "法術"], exclusive: false },
    { name: "佩科5", wikiName: "Peco_5", mainStat: "主能力提升", subStat: "/", skill: "強攻", rarity: "三星", type: "Handcannon", rarityNum: 3, tags: ["輸出", "物理"], exclusive: false },
    { name: "達爾霍夫7", wikiName: "Darhoff_7", mainStat: "主能力提升", subStat: "/", skill: "強攻", rarity: "三星", type: "Greatsword", rarityNum: 3, tags: ["輸出", "範圍"], exclusive: false },
    { name: "奧佩羅77", wikiName: "Opero_77", mainStat: "主能力提升", subStat: "/", skill: "強攻", rarity: "三星", type: "Polearm", rarityNum: 3, tags: ["輸出", "穿刺"], exclusive: false },
    { name: "應急手段", wikiName: "Contingent_Measure", mainStat: "敏捷提升", subStat: "物理傷害提升", skill: "壓制", rarity: "四星", type: "Sword", rarityNum: 4, tags: ["輸出", "物理", "先手"], exclusive: false },
    { name: "浪潮", wikiName: "Wave_Tide", mainStat: "智識提升", subStat: "攻擊提升", skill: "追襲", rarity: "四星", type: "Sword", rarityNum: 4, tags: ["輸出", "法術", "追擊"], exclusive: false },
    { name: "全自動駭新星", wikiName: "Hypernova_Auto", mainStat: "智識提升", subStat: "法術提升", skill: "昂揚", rarity: "四星", type: "Arts Unit", rarityNum: 4, tags: ["輸出", "法術", "增傷"], exclusive: false },
    { name: "熒光雷羽", wikiName: "Fluorescent_Roc", mainStat: "意志提升", subStat: "攻擊提升", skill: "壓制", rarity: "四星", type: "Arts Unit", rarityNum: 4, tags: ["輸出", "法術", "雷電"], exclusive: false },
    { name: "呼嘯守衛", wikiName: "Howling_Guard", mainStat: "智識提升", subStat: "攻擊提升", skill: "壓制", rarity: "四星", type: "Handcannon", rarityNum: 4, tags: ["輸出", "物理", "壓制"], exclusive: false },
    { name: "長路", wikiName: "Long_Road", mainStat: "力量提升", subStat: "法術提升", skill: "追襲", rarity: "四星", type: "Handcannon", rarityNum: 4, tags: ["輸出", "法術", "追擊"], exclusive: false },
    { name: "工業零點一", wikiName: "Industry_0.1", mainStat: "力量提升", subStat: "攻擊提升", skill: "壓制", rarity: "四星", type: "Greatsword", rarityNum: 4, tags: ["輸出", "物理", "範圍"], exclusive: false },
    { name: "淬火者", wikiName: "Quencher", mainStat: "意志提升", subStat: "生命提升", skill: "粉碎", rarity: "四星", type: "Greatsword", rarityNum: 4, tags: ["防禦", "生命力", "反擊"], exclusive: false },
    { name: "導師者道標", wikiName: "Pathfinder's_Beacon", mainStat: "主能力提升", subStat: "攻擊提升", skill: "昂揚", rarity: "四星", type: "Polearm", rarityNum: 4, tags: ["輸出", "穿刺", "加速"], exclusive: false },
    { name: "天使殺手", wikiName: "Aggeloslayer", mainStat: "意志提升", subStat: "法術提升", skill: "壓制", rarity: "四星", type: "Polearm", rarityNum: 4, tags: ["輸出", "法術", "對天使"], exclusive: false },
    { name: "鋼鐵餘音", wikiName: "Sundering_Steel", mainStat: "敏捷提升", subStat: "物理傷害提升", skill: "巧技", rarity: "五星", type: "Sword", rarityNum: 5, tags: ["輸出", "物理", "爆擊"], exclusive: false },
    { name: "堅城鑄造者", wikiName: "Fortmaker", mainStat: "智識提升", subStat: "終結技充能效率提升", skill: "昂揚", rarity: "五星", type: "Sword", rarityNum: 5, tags: ["輔助", "法術", "終結技"], exclusive: false },
    { name: "逐鱗3.0", wikiName: "Finchaser_3.0", mainStat: "力量提升", subStat: "寒冷傷害提升", skill: "壓制", rarity: "五星", type: "Sword", rarityNum: 5, tags: ["輸出", "寒冷", "控制"], exclusive: false },
    { name: "十二問", wikiName: "Twelve_Questions", mainStat: "敏捷提升", subStat: "攻擊提升", skill: "附術", rarity: "五星", type: "Sword", rarityNum: 5, tags: ["輸出", "物理", "附加"], exclusive: false },
    { name: "O.B.J.輕芒", wikiName: "OBJ_Edge_of_Lightness", mainStat: "敏捷提升", subStat: "攻擊提升", skill: "流轉", rarity: "五星", type: "Sword", rarityNum: 5, tags: ["輸出", "物理", "流轉"], exclusive: false },
    { name: "仰止", wikiName: "Aspirant", mainStat: "敏捷提升", subStat: "物理傷害提升", skill: "夜幕", rarity: "五星", type: "Sword", rarityNum: 5, tags: ["輸出", "物理", "夜戰"], exclusive: false },
    { name: "悼亡詩", wikiName: "Stanza_of_Memorials", mainStat: "智識提升", subStat: "攻擊提升", skill: "夜幕", rarity: "五星", type: "Arts Unit", rarityNum: 5, tags: ["輸出", "法術", "夜戰"], exclusive: false },
    { name: "莫奈何", wikiName: "Monaihe", mainStat: "意志提升", subStat: "終結技充能效率提升", skill: "昂揚", rarity: "五星", type: "Arts Unit", rarityNum: 5, tags: ["輔助", "法術", "終結技"], exclusive: false },
    { name: "迷失荒野", wikiName: "Wild_Wanderer", mainStat: "智識提升", subStat: "電磁傷害提升", skill: "附術", rarity: "五星", type: "Arts Unit", rarityNum: 5, tags: ["輸出", "雷電", "附加"], exclusive: false },
    { name: "布道自由", wikiName: "Freedom_to_Proselytize", mainStat: "意志提升", subStat: "治療效率提升", skill: "醫療", rarity: "五星", type: "Arts Unit", rarityNum: 5, tags: ["輔助", "治療", "生命力"], exclusive: false },
    { name: "O.B.J.術識", wikiName: "OBJ_Arts_Identifier", mainStat: "智識提升", subStat: "源石技藝強度提升", skill: "追襲", rarity: "五星", type: "Arts Unit", rarityNum: 5, tags: ["輸出", "法術", "追擊"], exclusive: false },
    { name: "作品：眾生", wikiName: "Opus_The_Living", mainStat: "敏捷提升", subStat: "法術提升", skill: "附術", rarity: "五星", type: "Handcannon", rarityNum: 5, tags: ["輸出", "法術", "附加"], exclusive: false },
    { name: "O.B.J.迅極", wikiName: "OBJ_Velocitous", mainStat: "敏捷提升", subStat: "終結技充能效率提升", skill: "迸發", rarity: "五星", type: "Handcannon", rarityNum: 5, tags: ["輸出", "物理", "終結技"], exclusive: false },
    { name: "理性告別", wikiName: "Rational_Farewell", mainStat: "力量提升", subStat: "灼熱傷害提升", skill: "追襲", rarity: "五星", type: "Handcannon", rarityNum: 5, tags: ["輸出", "灼熱", "追擊"], exclusive: false },
    { name: "探驪", wikiName: "Seeker_of_Dark_Lung", mainStat: "力量提升", subStat: "終結技充能效率提升", skill: "迸發", rarity: "五星", type: "Greatsword", rarityNum: 5, tags: ["輸出", "範圍", "終結技"], exclusive: false },
    { name: "古渠", wikiName: "Ancient_Canal", mainStat: "力量提升", subStat: "源石技藝強度提升", skill: "殘暴", rarity: "五星", type: "Greatsword", rarityNum: 5, tags: ["輸出", "法術", "殘暴"], exclusive: false },
    { name: "終點之聲", wikiName: "Finishing_Call", mainStat: "力量提升", subStat: "生命提升", skill: "醫療", rarity: "五星", type: "Greatsword", rarityNum: 5, tags: ["防禦", "生命力", "治療"], exclusive: false },
    { name: "O.B.J.重荷", wikiName: "OBJ_Heavy_Burden", mainStat: "力量提升", subStat: "生命提升", skill: "效益", rarity: "五星", type: "Greatsword", rarityNum: 5, tags: ["防禦", "生命力", "效益"], exclusive: false },
    { name: "嵌合正義", wikiName: "Chimeric_Justice", mainStat: "力量提升", subStat: "終結技充能效率提升", skill: "殘暴", rarity: "五星", type: "Polearm", rarityNum: 5, tags: ["輸出", "穿刺", "終結技"], exclusive: false },
    { name: "O.B.J.尖峰", wikiName: "OBJ_Razorhorn", mainStat: "意志提升", subStat: "物理傷害提升", skill: "附術", rarity: "五星", type: "Polearm", rarityNum: 5, tags: ["輸出", "物理", "附加"], exclusive: false },
    { name: "向心之引", wikiName: "Cohesive_Traction", mainStat: "意志提升", subStat: "電磁傷害提升", skill: "壓制", rarity: "五星", type: "Polearm", rarityNum: 5, tags: ["輸出", "雷電", "控制"], exclusive: false },
    { name: "宏願", wikiName: "Grand_Vision", mainStat: "敏捷提升", subStat: "攻擊提升", skill: "附術", rarity: "六星", type: "Sword", rarityNum: 6, tags: ["輸出", "物理", "附加", "專武"], exclusive: true },
    { name: "不知歸", wikiName: "Never_Rest", mainStat: "意志提升", subStat: "攻擊提升", skill: "流轉", rarity: "六星", type: "Sword", rarityNum: 6, tags: ["輸出", "物理", "流轉", "專武"], exclusive: true },
    { name: "熔鑄火焰", wikiName: "Forgeborn_Scathe", mainStat: "智識提升", subStat: "攻擊提升", skill: "夜幕", rarity: "六星", type: "Sword", rarityNum: 6, tags: ["輸出", "灼熱", "夜戰", "專武"], exclusive: true },
    { name: "黯色火炬", wikiName: "Umbral_Torch", mainStat: "智識提升", subStat: "灼熱傷害提升", skill: "附術", rarity: "六星", type: "Sword", rarityNum: 6, tags: ["輸出", "灼熱", "附加"], exclusive: false },
    { name: "扶搖", wikiName: "Khravengger", mainStat: "主能力提升", subStat: "暴擊率提升", skill: "夜幕", rarity: "六星", type: "Sword", rarityNum: 6, tags: ["輸出", "物理", "爆擊", "夜戰"], exclusive: false },
    { name: "熱熔切割器", wikiName: "Thermite_Cutter", mainStat: "意志提升", subStat: "攻擊提升", skill: "流轉", rarity: "六星", type: "Sword", rarityNum: 6, tags: ["輸出", "物理", "流轉"], exclusive: false },
    { name: "顯赫聲明", wikiName: "Eminent_Repute", mainStat: "主能力提升", subStat: "物理傷害提升", skill: "殘暴", rarity: "六星", type: "Sword", rarityNum: 6, tags: ["輸出", "物理", "殘暴"], exclusive: false },
    { name: "白夜新星", wikiName: "White_Night_Nova", mainStat: "主能力提升", subStat: "源石技藝強度提升", skill: "附術", rarity: "六星", type: "Sword", rarityNum: 6, tags: ["輸出", "法術", "附加"], exclusive: false },
    { name: "使命必達", wikiName: "Delivery_Guaranteed", mainStat: "意志提升", subStat: "終結技充能效率提升", skill: "追襲", rarity: "六星", type: "Arts Unit", rarityNum: 6, tags: ["輔助", "治療", "追擊", "專武"], exclusive: true },
    { name: "滄溟星夢", wikiName: "Dreams_of_the_Starry_Beach", mainStat: "智識提升", subStat: "治療效率提升", skill: "附術", rarity: "六星", type: "Arts Unit", rarityNum: 6, tags: ["輔助", "治療", "護盾", "專武"], exclusive: true },
    { name: "作品：蝕跡", wikiName: "Opus_Etch_Figure", mainStat: "意志提升", subStat: "自然傷害提升", skill: "壓制", rarity: "六星", type: "Arts Unit", rarityNum: 6, tags: ["輸出", "自然", "控制"], exclusive: false },
    { name: "爆破單元", wikiName: "Detonation_Unit", mainStat: "主能力提升", subStat: "源石技藝強度提升", skill: "迸發", rarity: "六星", type: "Arts Unit", rarityNum: 6, tags: ["輸出", "法術", "爆發"], exclusive: false },
    { name: "遺忘", wikiName: "Oblivion", mainStat: "智識提升", subStat: "法術提升", skill: "夜幕", rarity: "六星", type: "Arts Unit", rarityNum: 6, tags: ["輸出", "法術", "夜戰"], exclusive: false },
    { name: "騎士精神", wikiName: "Chivalric_Virtues", mainStat: "意志提升", subStat: "生命提升", skill: "醫療", rarity: "六星", type: "Arts Unit", rarityNum: 6, tags: ["輔助", "治療", "生命力"], exclusive: false },
    { name: "藝術暴君", wikiName: "Artzy_Tyrannical", mainStat: "智識提升", subStat: "暴擊率提升", skill: "切骨", rarity: "六星", type: "Handcannon", rarityNum: 6, tags: ["輸出", "物理", "爆擊", "專武"], exclusive: true },
    { name: "領航者", wikiName: "Navigator", mainStat: "智識提升", subStat: "寒冷傷害提升", skill: "附術", rarity: "六星", type: "Handcannon", rarityNum: 6, tags: ["輸出", "寒冷", "附加"], exclusive: false },
    { name: "楔子", wikiName: "Wedge", mainStat: "主能力提升", subStat: "暴擊率提升", skill: "附術", rarity: "六星", type: "Handcannon", rarityNum: 6, tags: ["輸出", "物理", "爆擊"], exclusive: false },
    { name: "同類相食", wikiName: "Clannibal", mainStat: "主能力提升", subStat: "法術提升", skill: "附術", rarity: "六星", type: "Handcannon", rarityNum: 6, tags: ["輸出", "法術", "附加"], exclusive: false },
    { name: "大雷斑", wikiName: "Thunderberge", mainStat: "力量提升", subStat: "生命提升", skill: "醫療", rarity: "六星", type: "Greatsword", rarityNum: 6, tags: ["防禦", "生命力", "治療", "專武"], exclusive: true },
    { name: "赫拉芬格", wikiName: "Khravengger", mainStat: "力量提升", subStat: "攻擊提升", skill: "迸發", rarity: "六星", type: "Greatsword", rarityNum: 6, tags: ["輸出", "範圍", "爆發", "專武"], exclusive: true },
    { name: "典範", wikiName: "Exemplar", mainStat: "主能力提升", subStat: "攻擊提升", skill: "壓制", rarity: "六星", type: "Greatsword", rarityNum: 6, tags: ["輸出", "物理", "壓制"], exclusive: false },
    { name: "昔日精品", wikiName: "Former_Finery", mainStat: "意志提升", subStat: "生命提升", skill: "效益", rarity: "六星", type: "Greatsword", rarityNum: 6, tags: ["防禦", "生命力", "效益"], exclusive: false },
    { name: "破碎君王", wikiName: "Sundered_Prince", mainStat: "力量提升", subStat: "暴擊率提升", skill: "粉碎", rarity: "六星", type: "Greatsword", rarityNum: 6, tags: ["輸出", "物理", "爆擊"], exclusive: false },
    { name: "負山", wikiName: "Mountain_Bearer", mainStat: "敏捷提升", subStat: "物理傷害提升", skill: "效益", rarity: "六星", type: "Polearm", rarityNum: 6, tags: ["防禦", "保護", "效益", "專武"], exclusive: true },
    { name: "驍勇", wikiName: "Valiant", mainStat: "敏捷提升", subStat: "物理傷害提升", skill: "巧技", rarity: "六星", type: "Polearm", rarityNum: 6, tags: ["輸出", "物理", "技巧"], exclusive: false },
    { name: "J.E.T.", wikiName: "JET", mainStat: "主能力提升", subStat: "攻擊提升", skill: "壓制", rarity: "六星", type: "Polearm", rarityNum: 6, tags: ["輸出", "物理", "壓制"], exclusive: false }
];

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

function getWeaponImageUrl(weapon) {
    const wikiName = weapon.wikiName || weapon.name;
    return `images/${wikiName}.png`;
}

window.operatorsData = operatorsData;
window.teammatesData = teammatesData;
window.weaponsData = weaponsData;
window.gearsData = gearsData;
window.teamsData = teamsData;
window.stagesData = stagesData;
window.getWeaponImageUrl = getWeaponImageUrl;
