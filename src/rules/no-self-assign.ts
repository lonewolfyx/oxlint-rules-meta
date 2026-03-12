export default {
    name: 'no-self-assign',
    meta: {
        source: 'eslint',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow assignments where both sides are exactly the same',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-self-assign.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [
            {
                props: true,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    props: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
