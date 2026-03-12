export default {
    name: 'empty-tags',
    meta: {
        source: 'jsdoc',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Checks tags that are expected to be empty (e.g., `@abstract` or `@async`), reporting if they have content',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/empty-tags.html',
            category: 'restriction',
        },
        fixable: 'pending',
        defaultOptions: [],
        schema: [
            {
                additionalProperties: false,
                properties: {
                    tags: {
                        description: 'If you want additional tags to be checked for their descriptions, you may\nadd them within this option.\n\n```js\n{\n  \'jsdoc/empty-tags\': [\'error\', {tags: [\'event\']}]\n}\n```',
                        items: {
                            type: 'string',
                        },
                        type: 'array',
                    },
                },
                type: 'object',
            },
        ],
    },
}
