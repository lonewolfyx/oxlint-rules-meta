export default {
    name: 'unicode-bom',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Require or disallow Unicode byte order mark (BOM)',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/unicode-bom.html',
            category: 'restriction',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            'never',
        ],
        schema: [
            {
                enum: [
                    'always',
                    'never',
                ],
            },
        ],
    },
}
