export default {
    name: 'consistent-generic-constructors',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Enforce specifying generic type arguments on type annotation or constructor name of a constructor call',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-generic-constructors.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [],
        schema: [
            {
                type: 'string',
                description: 'Which constructor call syntax to prefer.',
                enum: [
                    'type-annotation',
                    'constructor',
                ],
            },
        ],
    },
}
