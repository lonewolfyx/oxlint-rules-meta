export default {
    name: 'prefer-dom-node-dataset',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Prefer using `.dataset` on DOM elements over calling attribute methods.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/prefer-dom-node-dataset.html',
            category: 'pedantic',
        },
        fixable: 'conditional_fix',
        schema: [],
    },
}
