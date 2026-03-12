export default {
    name: 'consistent-type-definitions',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce type definitions to consistently use either `interface` or `type`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-definitions.html',
            category: 'style',
        },
        fixable: 'conditional_dangerous_fix',
        defaultOptions: [],
        schema: [
            {
                type: 'string',
                description: 'Which type definition syntax to prefer.',
                enum: [
                    'interface',
                    'type',
                ],
            },
        ],
    },
}
