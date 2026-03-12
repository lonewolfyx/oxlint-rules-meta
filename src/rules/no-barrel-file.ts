export default {
    name: 'no-barrel-file',
    meta: {
        source: 'oxc',
        category: 'restriction',
        default: false,
        description: 'Disallow the use of barrel files where the file contains export * statements,\nand the total number of modules exceed a threshold.',
        docs: {
            description: 'Disallow the use of barrel files where the file contains export * statements,\nand the total number of modules exceed a threshold.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-barrel-file.html',
            category: 'restriction',
        },
        fixable: 'none',
        defaultOptions: {
            threshold: 100,
        },
        schema: {
            type: 'object',
            properties: {
                threshold: {
                    type: 'integer',
                },
            },
            required: [
                'threshold',
            ],
        },
    },
}
