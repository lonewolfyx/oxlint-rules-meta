export default {
    name: 'no-redundant-should-component-update',
    meta: {
        source: 'react',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow usage of shouldComponentUpdate when extending React.PureComponent',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/react/no-redundant-should-component-update.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
