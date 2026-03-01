/**
 * 簡單單元測試框架
 */

const TestRunner = {
    results: {
        passed: 0,
        failed: 0,
        tests: []
    },

    assert(condition, message) {
        if (!condition) {
            throw new Error(message || 'Assertion failed');
        }
    },

    assertEqual(actual, expected, message) {
        if (actual !== expected) {
            throw new Error(message || `Expected ${expected}, got ${actual}`);
        }
    },

    assertArrayEqual(actual, expected, message) {
        if (!Array.isArray(actual) || !Array.isArray(expected)) {
            throw new Error('Both arguments must be arrays');
        }
        if (actual.length !== expected.length) {
            throw new Error(message || `Array length mismatch: expected ${expected.length}, got ${actual.length}`);
        }
        for (let i = 0; i < actual.length; i++) {
            if (actual[i] !== expected[i]) {
                throw new Error(message || `Array mismatch at index ${i}: expected ${expected[i]}, got ${actual[i]}`);
            }
        }
    },

    test(name, fn) {
        try {
            fn();
            this.results.passed++;
            this.results.tests.push({ name, status: 'passed' });
            console.log(`✓ ${name}`);
        } catch (error) {
            this.results.failed++;
            this.results.tests.push({ name, status: 'failed', error: error.message });
            console.error(`✗ ${name}`);
            console.error(`  ${error.message}`);
        }
    },

    describe(name, fn) {
        console.log(`\n📦 ${name}`);
        fn();
    },

    summary() {
        console.log('\n========================================');
        console.log(`測試結果: ${this.results.passed} 通過, ${this.results.failed} 失敗`);
        console.log('========================================');
        return this.results;
    },

    reset() {
        this.results = { passed: 0, failed: 0, tests: [] };
    }
};

function runTests() {
    console.log('開始運行測試...\n');
    TestRunner.reset();

    TestRunner.describe('搜尋索引 - 角色搜尋', () => {
        TestRunner.test('應回傳所有角色當查詢為空', () => {
            const results = searchIndex.searchOperators('');
            TestRunner.assertEqual(results.length, operatorsData.length);
        });

        TestRunner.test('應正確搜尋角色名稱', () => {
            const results = searchIndex.searchOperators('艾爾');
            TestRunner.assert(results.length > 0);
            TestRunner.assert(results.some(op => op.name.includes('艾爾')));
        });

        TestRunner.test('應正確搜尋元素屬性', () => {
            const results = searchIndex.searchOperators('灼熱');
            TestRunner.assert(results.length > 0);
            TestRunner.assert(results.every(op => op.element === 'Heat'));
        });

        TestRunner.test('應正確搜尋職業類別', () => {
            const results = searchIndex.searchOperators('Caster');
            TestRunner.assert(results.length > 0, '找不到任何角色');
            TestRunner.assert(results.every(op => op.class === 'Caster'), '不是所有結果都是術師');
        });

        TestRunner.test('應正確搜尋專武名稱', () => {
            const results = searchIndex.searchOperators('宏願');
            TestRunner.assert(results.length > 0);
        });

        TestRunner.test('搜尋應區分大小寫', () => {
            const results1 = searchIndex.searchOperators('萊萬汀');
            const results2 = searchIndex.searchOperators('萊萬汀'.toLowerCase());
            TestRunner.assertEqual(results1.length, results2.length);
        });
    });

    TestRunner.describe('搜尋索引 - 武器搜尋', () => {
        TestRunner.test('應回傳所有武器當查詢為空', () => {
            const results = searchIndex.searchWeapons('');
            TestRunner.assertEqual(results.length, weaponsData.length);
        });

        TestRunner.test('應正確搜尋武器名稱', () => {
            const results = searchIndex.searchWeapons('塔爾');
            TestRunner.assert(results.length > 0, '找不到任何武器');
            TestRunner.assert(results.some(w => w.name.includes('塔爾')), '結果不包含塔爾');
        });

        TestRunner.test('應正確搜尋武器類型', () => {
            const results = searchIndex.searchWeapons('Arts Unit');
            TestRunner.assert(results.length > 0, '找不到任何武器');
            TestRunner.assert(results.every(w => w.type === 'Arts Unit'), '不是所有結果都是Arts Unit類型');
        });

        TestRunner.test('應正確搜尋武器技能', () => {
            const results = searchIndex.searchWeapons('強攻');
            TestRunner.assert(results.length > 0);
        });

        TestRunner.test('應正確搜尋主屬性', () => {
            const results = searchIndex.searchWeapons('敏捷提升');
            TestRunner.assert(results.length > 0);
        });
    });

    TestRunner.describe('搜尋索引 - 模糊建議', () => {
        TestRunner.test('應返回建議列表', () => {
            const suggestions = searchIndex.getSuggestions('operator', '艾');
            TestRunner.assert(Array.isArray(suggestions));
        });

        TestRunner.test('應限制建議數量', () => {
            const suggestions = searchIndex.getSuggestions('operator', 'a', 5);
            TestRunner.assert(suggestions.length <= 5);
        });

        TestRunner.test('空查詢應返回空陣列', () => {
            const suggestions = searchIndex.getSuggestions('operator', '');
            TestRunner.assertEqual(suggestions.length, 0);
        });
    });

    TestRunner.describe('Levenshtein 距離', () => {
        TestRunner.test('相同字符串距離應為0', () => {
            const distance = searchIndex.levenshteinDistance('hello', 'hello');
            TestRunner.assertEqual(distance, 0);
        });

        TestRunner.test('一個字符差異距離應為1', () => {
            const distance = searchIndex.levenshteinDistance('hello', 'hallo');
            TestRunner.assertEqual(distance, 1);
        });

        TestRunner.test('完全不同的字符串', () => {
            const distance = searchIndex.levenshteinDistance('abc', 'xyz');
            TestRunner.assertEqual(distance, 3);
        });

        TestRunner.test('空字符串距離', () => {
            const distance = searchIndex.levenshteinDistance('', 'abc');
            TestRunner.assertEqual(distance, 3);
        });
    });

    TestRunner.describe('數據完整性', () => {
        TestRunner.test('角色數據不應為空', () => {
            TestRunner.assert(operatorsData.length > 0, '角色數據為空');
        });

        TestRunner.test('武器數據不應為空', () => {
            TestRunner.assert(weaponsData.length > 0, '武器數據為空');
        });

        TestRunner.test('基質數據不應為空', () => {
            TestRunner.assert(gearsData.length > 0, '基質數據為空');
        });

        TestRunner.test('每個角色應有唯一ID', () => {
            const ids = operatorsData.map(op => op.id);
            const uniqueIds = new Set(ids);
            TestRunner.assertEqual(ids.length, uniqueIds.size, '角色ID不唯一');
        });
    });

    TestRunner.summary();
    return TestRunner.results;
}

window.runTests = runTests;
window.TestRunner = TestRunner;

console.log('測試框架已載入，輸入 runTests() 執行測試');
