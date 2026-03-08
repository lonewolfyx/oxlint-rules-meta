export default {
    name: 'ban-ts-comment',
    meta: {
        source: 'typescript',
        category: 'pedantic',
        default: false,
        docs: {
            description: 'Disallow `@ts-<directive>` comments or require descriptions after directives',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-ts-comment.html',
            category: 'pedantic',
        },
        fixable: 'conditional_fix',
        schema: [
            {
                type: 'object',
                $defs: {
                    directiveConfigSchema: {
                        oneOf: [
                            {
                                type: 'boolean',
                                default: true,
                            },
                            {
                                type: 'string',
                                enum: [
                                    'allow-with-description',
                                ],
                            },
                            {
                                type: 'object',
                                additionalProperties: false,
                                properties: {
                                    descriptionFormat: {
                                        type: 'string',
                                    },
                                },
                            },
                        ],
                    },
                },
                additionalProperties: false,
                properties: {
                    'minimumDescriptionLength': {
                        type: 'number',
                        description: 'A minimum character length for descriptions when `allow-with-description` is enabled.',
                    },
                    'ts-check': {
                        $ref: '#/items/0/$defs/directiveConfigSchema',
                        description: 'Whether allow ts-check directives, and with which restrictions.',
                    },
                    'ts-expect-error': {
                        $ref: '#/items/0/$defs/directiveConfigSchema',
                        description: 'Whether and when expect-error directives, and with which restrictions.',
                    },
                    'ts-ignore': {
                        $ref: '#/items/0/$defs/directiveConfigSchema',
                        description: 'Whether allow ts-ignore directives, and with which restrictions.',
                    },
                    'ts-nocheck': {
                        $ref: '#/items/0/$defs/directiveConfigSchema',
                        description: 'Whether allow ts-nocheck directives, and with which restrictions.',
                    },
                },
            },
        ],
    },
}
