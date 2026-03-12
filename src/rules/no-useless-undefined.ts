export default {
    name: 'no-useless-undefined',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow useless `undefined`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-undefined.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            {
                checkArguments: true,
                checkArrowFunctionBody: true,
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    checkArguments: {
                        type: 'boolean',
                    },
                    checkArrowFunctionBody: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
