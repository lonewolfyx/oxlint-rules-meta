export default {
    name: 'no-img-element',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent usage of `<img>` element due to slower LCP and higher bandwidth.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-img-element.html',
            category: 'correctness',
        },
        fixable: 'pending',
        schema: [],
    },
}
