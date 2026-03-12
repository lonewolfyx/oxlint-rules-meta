export default {
    name: 'no-const-enum',
    meta: {
        source: 'oxc',
        category: 'restriction',
        default: false,
        description: 'Disallow TypeScript const enum',
        docs: {
            description: 'Disallow TypeScript const enum',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-const-enum.html',
            category: 'restriction',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [],
    },
}
