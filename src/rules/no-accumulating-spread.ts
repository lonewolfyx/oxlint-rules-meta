export default {
    name: 'no-accumulating-spread',
    meta: {
        source: 'oxc',
        category: 'perf',
        default: false,
        description: 'Prevents using object or array spreads on accumulators in Array.prototype.reduce() and in loops.',
        docs: {
            description: 'Prevents using object or array spreads on accumulators in Array.prototype.reduce() and in loops.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-accumulating-spread.html',
            category: 'perf',
        },
        fixable: 'none',
        defaultOptions: [],
        schema: [],
    },
}
