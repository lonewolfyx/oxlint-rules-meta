export default {
    name: 'click-events-have-key-events',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce a clickable non-interactive element has at least one keyboard event listener.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/click-events-have-key-events.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {},
            },
        ],
    },
}
