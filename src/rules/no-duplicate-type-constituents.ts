export default {
    name: 'no-duplicate-type-constituents',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow duplicate constituents of union or intersection types',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-duplicate-type-constituents.html',
            category: 'correctness',
        },
        fixable: 'fixable_fix',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    ignoreIntersections: {
                        type: 'boolean',
                        description: 'Whether to ignore `&` intersections.',
                    },
                    ignoreUnions: {
                        type: 'boolean',
                        description: 'Whether to ignore `|` unions.',
                    },
                },
            },
        ],
    },
}
