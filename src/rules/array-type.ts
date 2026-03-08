export default {
    name: 'array-type',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Require consistently using either `T[]` or `Array<T>` for arrays',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/array-type.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [
            {
                type: 'object',
                $defs: {
                    arrayOption: {
                        type: 'string',
                        enum: [
                            'array',
                            'generic',
                            'array-simple',
                        ],
                    },
                },
                additionalProperties: false,
                properties: {
                    default: {
                        $ref: '#/items/0/$defs/arrayOption',
                        description: 'The array type expected for mutable cases.',
                    },
                    readonly: {
                        $ref: '#/items/0/$defs/arrayOption',
                        description: 'The array type expected for readonly cases. If omitted, the value for `default` will be used.',
                    },
                },
            },
        ],
    },
}
