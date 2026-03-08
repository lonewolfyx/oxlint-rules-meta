export default {
    name: 'no-abusive-eslint-disable',
    meta: {
        source: 'unicorn',
        category: 'restriction',
        default: false,
        docs: {
            description: 'Enforce specifying rules to disable in `eslint-disable` comments.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/unicorn/no-abusive-eslint-disable.html',
            category: 'restriction',
        },
        fixable: 'none',
        schema: [],
    },
}
