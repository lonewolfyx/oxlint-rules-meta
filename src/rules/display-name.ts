export default {
    name: 'display-name',
    meta: {
        source: 'react',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow missing displayName in a React component definition',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/display-name.html',
            category: 'pedantic',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    ignoreTranspilerName: {
                        type: 'boolean',
                    },
                    checkContextObjects: {
                        type: 'boolean',
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
