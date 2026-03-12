export default {
    name: 'unbound-method',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Enforce unbound methods are called with their expected scope',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/unbound-method.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreStatic: {
                        type: 'boolean',
                        description: 'Whether to skip checking whether `static` methods are correctly bound.',
                    },
                },
            },
        ],
    },
}
