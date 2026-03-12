export default {
    name: 'avoid-new',
    meta: {
        source: 'promise',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow creating `new` promises outside of utility libs (use [util.promisify][] instead).',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/promise/avoid-new.html',
            category: 'style',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
