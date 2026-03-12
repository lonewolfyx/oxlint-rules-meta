export default {
    name: 'no-useless-error-capture-stack-trace',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Disallow unnecessary `Error.captureStackTrace(…)`.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-useless-error-capture-stack-trace.html',
            category: 'restriction',
        },
        fixable: 'fixable_suggestion',
        defaultOptions: [],
        schema: [],
    },
}
