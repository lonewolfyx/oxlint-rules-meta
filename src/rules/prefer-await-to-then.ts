export default {
    name: 'prefer-await-to-then',
    meta: {
        source: 'promise',
        category: 'style',
        default: false,
        docs: {
            description: 'Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/prefer-await-to-then.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    strict: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
