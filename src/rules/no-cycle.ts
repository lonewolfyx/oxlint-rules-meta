export default {
    name: 'no-cycle',
    meta: {
        source: 'import',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Forbid a module from importing a module with a dependency path back to itself.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/import/no-cycle.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    commonjs: {
                        type: 'boolean',
                    },
                    amd: {
                        type: 'boolean',
                    },
                    esmodule: {
                        type: 'boolean',
                    },
                    ignore: {
                        type: 'array',
                        minItems: 1,
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                    },
                    maxDepth: {
                        anyOf: [
                            {
                                description: 'maximum dependency depth to traverse',
                                type: 'integer',
                                minimum: 1,
                            },
                            {
                                enum: [
                                    '∞',
                                ],
                                type: 'string',
                            },
                        ],
                    },
                    ignoreExternal: {
                        description: 'ignore external modules',
                        type: 'boolean',
                        default: false,
                    },
                    allowUnsafeDynamicCyclicDependency: {
                        description: 'Allow cyclic dependency if there is at least one dynamic import in the chain',
                        type: 'boolean',
                        default: false,
                    },
                    disableScc: {
                        description: 'When true, don\'t calculate a strongly-connected-components graph. SCC is used to reduce the time-complexity of cycle detection, but adds overhead.',
                        type: 'boolean',
                        default: false,
                    },
                },
                additionalProperties: false,
            },
        ],
    },
}
