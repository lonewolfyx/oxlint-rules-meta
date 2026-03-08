export default {
    name: 'label-has-associated-control',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce that a `label` tag has a text label and an associated control.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/label-has-associated-control.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [
            {
                type: 'object',
                properties: {
                    labelComponents: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                    labelAttributes: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                    controlComponents: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                    assert: {
                        description: 'Assert that the label has htmlFor, a nested label, both or either',
                        type: 'string',
                        enum: [
                            'htmlFor',
                            'nesting',
                            'both',
                            'either',
                        ],
                    },
                    depth: {
                        description: 'JSX tree depth limit to check for accessible label',
                        type: 'integer',
                        minimum: 0,
                    },
                },
            },
        ],
    },
}
