export default {
    name: 'parameter-properties',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Require or disallow parameter properties in class constructors',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/parameter-properties.html',
            category: 'style',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                $defs: {
                    modifier: {
                        type: 'string',
                        enum: [
                            'readonly',
                            'private',
                            'protected',
                            'public',
                            'private readonly',
                            'protected readonly',
                            'public readonly',
                        ],
                    },
                },
                additionalProperties: false,
                properties: {
                    allow: {
                        type: 'array',
                        description: 'Whether to allow certain kinds of properties to be ignored.',
                        items: {
                            $ref: '#/items/0/$defs/modifier',
                        },
                    },
                    prefer: {
                        type: 'string',
                        description: 'Whether to prefer class properties or parameter properties.',
                        enum: [
                            'class-property',
                            'parameter-property',
                        ],
                    },
                },
            },
        ],
    },
}
