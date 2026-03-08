export default {
    name: 'ban-tslint-comment',
    meta: {
        source: 'typescript',
        category: 'style',
        default: false,
        docs: {
            description: 'Disallow `// tslint:<rule-flag>` comments',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/typescript/ban-tslint-comment.html',
            category: 'style',
        },
        fixable: 'fixable_fix',
        schema: [],
    },
}
