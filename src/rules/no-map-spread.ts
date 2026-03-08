export default {
    name: 'no-map-spread',
    meta: {
        source: 'oxc',
        category: 'perf',
        default: false,
        description: 'Disallow the use of object or array spreads in\nArray.prototype.map\nand\nArray.prototype.flatMap\nto add properties/elements to array items.',
        docs: {
            description: 'Disallow the use of object or array spreads in\nArray.prototype.map\nand\nArray.prototype.flatMap\nto add properties/elements to array items.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/no-map-spread.html',
            category: 'perf',
        },
        fixable: 'conditional_safe_fix_or_suggestion',
        schema: [],
    },
}
