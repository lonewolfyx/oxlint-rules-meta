export default {
    name: 'check-property-names',
    meta: {
        source: 'jsdoc',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-property-names.html',
            category: 'correctness',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [
            {
                additionalProperties: false,
                properties: {
                    enableFixer: {
                        description: 'Set to `true` to auto-remove `@property` duplicates (based on\nidentical names).\n\nNote that this option will remove duplicates of the same name even if\nthe definitions do not match in other ways (e.g., the second property will\nbe removed even if it has a different type or description).',
                        type: 'boolean',
                    },
                },
                type: 'object',
            },
        ],
    },
}
