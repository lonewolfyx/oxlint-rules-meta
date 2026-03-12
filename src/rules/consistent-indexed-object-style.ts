export default {
    name: 'consistent-indexed-object-style',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Require or disallow the `Record` type',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-indexed-object-style.html',
            category: 'style',
        },
        fixable: 'conditional_fix',
        defaultOptions: [],
        schema: [
            {
                type: 'string',
                description: 'Which indexed object syntax to prefer.',
                enum: [
                    'record',
                    'index-signature',
                ],
            },
        ],
    },
}
