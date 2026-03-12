export default {
    name: 'escape-case',
    meta: {
        source: 'unicorn',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Require escape sequences to use uppercase or lowercase values.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/escape-case.html',
            category: 'pedantic',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            'uppercase',
        ],
        schema: [
            {
                enum: [
                    'uppercase',
                    'lowercase',
                ],
            },
        ],
    },
}
