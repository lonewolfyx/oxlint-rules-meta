export default {
    name: 'class-literal-property-style',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce that literals on classes are exposed in a consistent style',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/class-literal-property-style.html',
            category: 'style',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [
            {
                type: 'string',
                description: 'Which literal class member syntax to prefer.',
                enum: [
                    'fields',
                    'getters',
                ],
            },
        ],
    },
}
