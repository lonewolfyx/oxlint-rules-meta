export default {
    name: 'html-has-lang',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce `<html>` element has `lang` prop.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {},
            },
        ],
    },
}
