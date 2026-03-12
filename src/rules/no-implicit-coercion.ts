export default {
    name: 'no-implicit-coercion',
    meta: {
        source: 'eslint',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow shorthand type conversions',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-implicit-coercion.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        defaultOptions: [
            {
                allow: [],
                boolean: true,
                disallowTemplateShorthand: false,
                number: true,
                string: true,
            },
        ],
        schema: [
            {
                type: 'object',
                properties: {
                    boolean: {
                        type: 'boolean',
                    },
                    number: {
                        type: 'boolean',
                    },
                    string: {
                        type: 'boolean',
                    },
                    disallowTemplateShorthand: {
                        type: 'boolean',
                    },
                    allow: {
                        type: 'array',
                        items: {
                            enum: [
                                '~',
                                '!!',
                                '+',
                                '- -',
                                '-',
                                '*',
                            ],
                        },
                        uniqueItems: true,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
