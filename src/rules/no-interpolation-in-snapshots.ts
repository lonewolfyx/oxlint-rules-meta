export default {
    name: 'no-interpolation-in-snapshots',
    meta: {
        source: 'jest',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow string interpolation inside snapshots',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jest/no-interpolation-in-snapshots.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [],
    },
}
