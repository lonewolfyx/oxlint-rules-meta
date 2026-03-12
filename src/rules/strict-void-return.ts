export default {
    name: 'strict-void-return',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Disallow passing a value-returning function in a position accepting a void function',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/strict-void-return.html',
            category: 'nursery',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowReturnAny: {
                        type: 'boolean',
                        description: 'Whether to allow functions returning `any` to be used in place expecting a `void` function.',
                    },
                },
            },
        ],
    },
}
