export default {
    name: 'self-closing-comp',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow extra closing tags for components without children',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/self-closing-comp.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [
            {
                type: 'object',
                properties: {
                    component: {
                        default: true,
                        type: 'boolean',
                    },
                    html: {
                        default: true,
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
