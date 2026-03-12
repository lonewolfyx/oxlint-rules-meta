export default {
    name: 'complexity',
    meta: {
        source: 'eslint',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Enforce a maximum cyclomatic complexity allowed in a program',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/complexity.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [
            20,
        ],
        schema: [
            {
                oneOf: [
                    {
                        type: 'integer',
                        minimum: 0,
                    },
                    {
                        type: 'object',
                        properties: {
                            maximum: {
                                type: 'integer',
                                minimum: 0,
                            },
                            max: {
                                type: 'integer',
                                minimum: 0,
                            },
                            variant: {
                                enum: [
                                    'classic',
                                    'modified',
                                ],
                            },
                        },
                        additionalProperties: false,
                    },
                ],
            },
        ],
    },
}
