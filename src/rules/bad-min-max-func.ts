export default {
    name: 'bad-min-max-func',
    meta: {
        source: 'oxc',
        category: 'correctness',
        default: true,
        description: 'Checks whether the clamp function Math.min(Math.max(x, y), z) always evaluate to a\nconstant result because the arguments are in the wrong order.',
        docs: {
            description: 'Checks whether the clamp function Math.min(Math.max(x, y), z) always evaluate to a\nconstant result because the arguments are in the wrong order.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/oxc/bad-min-max-func.html',
            category: 'correctness',
        },
        fixable: 'none',
        schema: [],
    },
}
