export default {
    name: 'jsx-no-new-object-as-prop',
    meta: {
        source: 'react_perf',
        category: 'perf',
        default: false,
        docs: {
            description: 'Prevent {...} as JSX prop value',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react_perf/jsx-no-new-object-as-prop.html',
            category: 'perf',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                additionalProperties: false,
                properties: {
                    nativeAllowList: {
                        oneOf: [
                            {
                                enum: [
                                    'all',
                                ],
                            },
                            {
                                type: 'array',
                                items: {
                                    type: 'string',
                                },
                            },
                        ],
                    },
                },
                type: 'object',
            },
        ],
    },
}
