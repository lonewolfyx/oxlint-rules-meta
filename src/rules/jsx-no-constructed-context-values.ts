export default {
    name: 'jsx-no-constructed-context-values',
    meta: {
        source: 'react',
        category: 'perf',
        default: false,
        docs: {
            description: 'Disallows JSX context provider values from taking values that will cause needless rerenders',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/jsx-no-constructed-context-values.html',
            category: 'perf',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
