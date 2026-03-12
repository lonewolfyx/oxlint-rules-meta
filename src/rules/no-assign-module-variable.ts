export default {
    name: 'no-assign-module-variable',
    meta: {
        source: 'nextjs',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Prevent assignment to the `module` variable.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/nextjs/no-assign-module-variable.html',
            category: 'correctness',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
