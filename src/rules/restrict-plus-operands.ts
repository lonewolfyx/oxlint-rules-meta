export default {
    name: 'restrict-plus-operands',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Require both operands of addition to be the same type and be `bigint`, `number`, or `string`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/restrict-plus-operands.html',
            category: 'pedantic',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowAny: {
                        type: 'boolean',
                        description: 'Whether to allow `any` typed values.',
                    },
                    allowBoolean: {
                        type: 'boolean',
                        description: 'Whether to allow `boolean` typed values.',
                    },
                    allowNullish: {
                        type: 'boolean',
                        description: 'Whether to allow potentially `null` or `undefined` typed values.',
                    },
                    allowNumberAndString: {
                        type: 'boolean',
                        description: 'Whether to allow `bigint`/`number` typed values and `string` typed values to be added together.',
                    },
                    allowRegExp: {
                        type: 'boolean',
                        description: 'Whether to allow `regexp` typed values.',
                    },
                    skipCompoundAssignments: {
                        type: 'boolean',
                        description: 'Whether to skip compound assignments such as `+=`.',
                    },
                },
            },
        ],
    },
}
