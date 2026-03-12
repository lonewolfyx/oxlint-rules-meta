export default {
    name: 'no-static-element-interactions',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/no-static-element-interactions.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    handlers: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                },
            },
        ],
    },
}
