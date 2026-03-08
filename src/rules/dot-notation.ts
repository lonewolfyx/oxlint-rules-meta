export default {
    name: 'dot-notation',
    meta: {
        source: 'typescript',
        category: 'nursery',
        default: false,
        docs: {
            description: 'Enforce dot notation whenever possible',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/dot-notation.html',
            category: 'nursery',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    allowIndexSignaturePropertyAccess: {
                        type: 'boolean',
                        description: 'Whether to allow accessing properties matching an index signature with array notation.',
                    },
                    allowKeywords: {
                        type: 'boolean',
                        description: 'Whether to allow keywords such as ["class"]`.',
                    },
                    allowPattern: {
                        type: 'string',
                        description: 'Regular expression of names to allow.',
                    },
                    allowPrivateClassPropertyAccess: {
                        type: 'boolean',
                        description: 'Whether to allow accessing class members marked as `private` with array notation.',
                    },
                    allowProtectedClassPropertyAccess: {
                        type: 'boolean',
                        description: 'Whether to allow accessing class members marked as `protected` with array notation.',
                    },
                },
            },
        ],
    },
}
