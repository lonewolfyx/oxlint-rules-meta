export default {
    name: 'void-dom-elements-no-children',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/void-dom-elements-no-children.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
