export default {
    name: 'explicit-length-check',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce explicitly comparing the `length` or `size` property of a value.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/explicit-length-check.html',
            category: 'pedantic',
        },
        fixable: 'conditional_fix',
        defaultOptions: [
            {
                'non-zero': 'greater-than',
            },
        ],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    'non-zero': {
                        enum: [
                            'greater-than',
                            'not-equal',
                        ],
                        default: 'greater-than',
                    },
                },
            },
        ],
    },
}
