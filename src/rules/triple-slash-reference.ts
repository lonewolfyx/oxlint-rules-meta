export default {
    name: 'triple-slash-reference',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow certain triple slash directives in favor of ES6-style import declarations',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/triple-slash-reference.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    lib: {
                        type: 'string',
                        description: 'What to enforce for `/// <reference lib="..." />` references.',
                        enum: [
                            'always',
                            'never',
                        ],
                    },
                    path: {
                        type: 'string',
                        description: 'What to enforce for `/// <reference path="..." />` references.',
                        enum: [
                            'always',
                            'never',
                        ],
                    },
                    types: {
                        type: 'string',
                        description: 'What to enforce for `/// <reference types="..." />` references.',
                        enum: [
                            'always',
                            'never',
                            'prefer-import',
                        ],
                    },
                },
            },
        ],
    },
}
