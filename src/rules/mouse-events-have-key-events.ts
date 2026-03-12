export default {
    name: 'mouse-events-have-key-events',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/mouse-events-have-key-events.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    hoverInHandlers: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                        description: 'An array of events that need to be accompanied by `onFocus`',
                    },
                    hoverOutHandlers: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                        description: 'An array of events that need to be accompanied by `onBlur`',
                    },
                },
            },
        ],
    },
}
