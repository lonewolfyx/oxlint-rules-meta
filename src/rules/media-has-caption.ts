export default {
    name: 'media-has-caption',
    meta: {
        source: 'jsx_a11y',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsx_a11y/media-has-caption.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [
            {
                type: 'object',
                properties: {
                    audio: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                    video: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                    track: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        uniqueItems: true,
                        additionalItems: false,
                    },
                },
            },
        ],
    },
}
