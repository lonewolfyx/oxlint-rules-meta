export default {
    name: 'no-danger-with-children',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow when a DOM element is using both children and dangerouslySetInnerHTML',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-danger-with-children.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
