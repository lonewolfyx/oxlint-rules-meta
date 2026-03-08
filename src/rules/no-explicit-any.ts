export default {
    name: 'no-explicit-any',
    meta: {
        source: 'typescript',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow the `any` type',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-explicit-any.html',
            category: 'restriction',
        },
        fixable: 'conditional_fix',
        schema: [
            {
                type: 'object',
                additionalProperties: false,
                properties: {
                    fixToUnknown: {
                        type: 'boolean',
                        description: 'Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.',
                    },
                    ignoreRestArgs: {
                        type: 'boolean',
                        description: 'Whether to ignore rest parameter arrays.',
                    },
                },
            },
        ],
    },
}
