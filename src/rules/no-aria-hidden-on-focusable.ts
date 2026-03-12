export default {
    name: 'no-aria-hidden-on-focusable',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow `aria-hidden="true"` from being set on focusable elements.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-aria-hidden-on-focusable.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {},
            },
        ],
    },
}
