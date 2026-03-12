export default {
    name: 'checked-requires-onchange-or-readonly',
    meta: {
        source: 'react',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Enforce using `onChange` or `readonly` attribute when `checked` is used',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/checked-requires-onchange-or-readonly.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                additionalProperties: false,
                properties: {
                    ignoreMissingProperties: {
                        type: 'boolean',
                    },
                    ignoreExclusiveCheckedAttribute: {
                        type: 'boolean',
                    },
                },
            },
        ],
    },
}
