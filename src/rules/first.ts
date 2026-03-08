export default {
    name: 'first',
    meta: {
        source: 'import',
        category: 'style',
        default: false,
        docs: {
            description: 'Ensure all imports appear before other statements.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/first.html',
            category: 'style',
        },
        fixable: 'pending',
        schema: [
            {
                type: 'string',
                enum: [
                    'absolute-first',
                    'disable-absolute-first',
                ],
            },
        ],
    },
}
