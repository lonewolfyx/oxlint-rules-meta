export default {
    name: 'no-rest-spread-properties',
    meta: {
        source: 'oxc',
        category: 'restriction',
        default: false,
        description: 'Disallow Object Rest/Spread Properties.',
        docs: {
            description: 'Disallow Object Rest/Spread Properties.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-rest-spread-properties.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: {
            objectRestMessage: '',
            objectSpreadMessage: '',
        },
        schema: {
            type: 'object',
            properties: {
                objectRestMessage: {
                    type: 'string',
                },
                objectSpreadMessage: {
                    type: 'string',
                },
            },
            required: [
                'objectRestMessage',
                'objectSpreadMessage',
            ],
        },
    },
}
