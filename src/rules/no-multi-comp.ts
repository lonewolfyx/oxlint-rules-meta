export default {
    name: 'no-multi-comp',
    meta: {
        source: 'react',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow multiple component definition per file',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-multi-comp.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreStateless: {
                        default: false,
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
