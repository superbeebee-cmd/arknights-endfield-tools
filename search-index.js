/**
 * 搜尋索引 - 優化查詢效能
 */

class SearchIndex {
    constructor() {
        this.operatorIndex = new Map();
        this.weaponIndex = new Map();
        this.operatorSuggestions = [];
        this.weaponSuggestions = [];
    }

    build() {
        this.buildOperatorIndex();
        this.buildWeaponIndex();
        console.log('搜尋索引建立完成');
    }

    buildOperatorIndex() {
        this.operatorIndex.clear();
        this.operatorSuggestions = [];

        operatorsData.forEach(op => {
            const nameLower = op.name.toLowerCase();
            
            this.operatorIndex.set(op.id, {
                id: op.id,
                name: op.name,
                nameLower: nameLower,
                element: op.element,
                class: op.class,
                rarity: op.rarity,
                tags: op.tags || []
            });

            this.operatorSuggestions.push({
                id: op.id,
                name: op.name,
                type: 'operator'
            });

            if (op.exclusiveWeapon) {
                this.operatorSuggestions.push({
                    id: op.id,
                    name: op.exclusiveWeapon,
                    type: 'exclusive_weapon'
                });
            }
        });

        this.operatorSuggestions.sort((a, b) => a.name.localeCompare(b.name, 'zh-TW'));
    }

    buildWeaponIndex() {
        this.weaponIndex.clear();
        this.weaponSuggestions = [];

        weaponsData.forEach(w => {
            const nameLower = w.name.toLowerCase();
            
            this.weaponIndex.set(w.name, {
                name: w.name,
                nameLower: nameLower,
                type: w.type,
                rarityNum: w.rarityNum,
                tags: w.tags || []
            });

            this.weaponSuggestions.push({
                name: w.name,
                type: w.exclusive ? 'exclusive' : 'weapon',
                rarity: w.rarityNum
            });
        });

        this.weaponSuggestions.sort((a, b) => a.name.localeCompare(b.name, 'zh-TW'));
    }

    searchOperators(query) {
        if (!query) return operatorsData;
        
        const q = query.toLowerCase().trim();
        if (!q) return operatorsData;

        return operatorsData.filter(op => {
            const nameMatch = op.name.toLowerCase().includes(q);
            const tagMatch = op.tags && op.tags.some(t => t.toLowerCase().includes(q));
            const elementMatch = op.element.toLowerCase().includes(q);
            const classMatch = op.class.toLowerCase().includes(q);
            const exclusiveWeaponMatch = op.exclusiveWeapon && op.exclusiveWeapon.toLowerCase().includes(q);
            
            return nameMatch || tagMatch || elementMatch || classMatch || exclusiveWeaponMatch;
        });
    }

    searchWeapons(query) {
        if (!query) return weaponsData;
        
        const q = query.toLowerCase().trim();
        if (!q) return weaponsData;

        return weaponsData.filter(w => {
            const nameMatch = w.name.toLowerCase().includes(q);
            const typeMatch = w.type.toLowerCase().includes(q);
            const skillMatch = w.skill && w.skill.toLowerCase().includes(q);
            const tagMatch = w.tags && w.tags.some(t => t.toLowerCase().includes(q));
            const mainStatMatch = w.mainStat && w.mainStat.toLowerCase().includes(q);
            const subStatMatch = w.subStat && w.subStat.toLowerCase().includes(q);
            
            return nameMatch || typeMatch || skillMatch || tagMatch || mainStatMatch || subStatMatch;
        });
    }

    getSuggestions(type, query, limit = 10) {
        if (!query) return [];
        
        const q = query.toLowerCase().trim();
        if (!q) return [];

        let suggestions;
        if (type === 'operator') {
            suggestions = this.operatorSuggestions;
        } else if (type === 'weapon') {
            suggestions = this.weaponSuggestions;
        } else {
            return [];
        }

        return suggestions
            .filter(s => s.name.toLowerCase().includes(q))
            .slice(0, limit);
    }

    getFuzzySuggestions(type, query, limit = 10) {
        if (!query) return [];
        
        const q = query.toLowerCase().trim();
        if (!q) return [];

        let suggestions;
        if (type === 'operator') {
            suggestions = this.operatorSuggestions;
        } else if (type === 'weapon') {
            suggestions = this.weaponSuggestions;
        } else {
            return [];
        }

        const results = [];
        
        suggestions.forEach(s => {
            const name = s.name.toLowerCase();
            let score = 0;

            if (name.startsWith(q)) {
                score = 100;
            } else if (name.includes(q)) {
                score = 50;
            } else {
                const distance = this.levenshteinDistance(name, q);
                if (distance <= 2) {
                    score = 30 - distance * 10;
                }
            }

            if (score > 0) {
                results.push({ ...s, score });
            }
        });

        return results
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    }

    levenshteinDistance(str1, str2) {
        const m = str1.length;
        const n = str2.length;
        const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) dp[i][0] = i;
        for (let j = 0; j <= n; j++) dp[0][j] = j;

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j] + 1,
                        dp[i][j - 1] + 1,
                        dp[i - 1][j - 1] + 1
                    );
                }
            }
        }

        return dp[m][n];
    }
}

const searchIndex = new SearchIndex();

function initSearchIndex() {
    searchIndex.build();
}

window.searchIndex = searchIndex;
window.initSearchIndex = initSearchIndex;
