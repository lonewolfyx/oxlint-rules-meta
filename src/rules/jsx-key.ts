export default {
    name: 'jsx-key',
    meta: {
        source: 'react',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Disallow missing `key` props in iterators/collection literals',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-key.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    checkFragmentShorthand: {
                        type: 'boolean',
                        default: false,
                    },
                    checkKeyMustBeforeSpread: {
                        type: 'boolean',
                        default: false,
                    },
                    warnOnDuplicates: {
                        type: 'boolean',
                        default: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
