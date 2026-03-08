export default {
    name: 'no-children-prop',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow passing of children as props',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-children-prop.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    allowFunctions: {
                        type: 'boolean',
                        default: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
