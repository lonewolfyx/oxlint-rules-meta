export default {
    name: 'no-this-alias',
    meta: {
        source: 'typescript',
        category: 'correctness',
        default: true,
        docs: {
            description: 'Disallow aliasing `this`',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-this-alias.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowDestructuring: {
                        type: 'boolean',
                        description: 'Whether to ignore destructurings, such as `const { props, state } = this`.',
                    },
                    allowedNames: {
                        type: 'array',
                        description: 'Names to ignore, such as ["self"] for `const self = this;`.',
                        items: {
                            type: 'string',
                        },
                    },
                },
            },
        ],
    },
}
