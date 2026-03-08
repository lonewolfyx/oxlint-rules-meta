export default {
    name: 'consistent-type-exports',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Enforce consistent usage of type exports',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/consistent-type-exports.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    fixMixedExportsWithInlineTypeSpecifier: {
                        type: 'boolean',
                        description: 'Whether the rule will autofix "mixed" export cases using TS inline type specifiers.',
                    },
                },
            },
        ],
    },
}
