import { name, version } from '../package.json' with { type: 'json' }

const oxlintRules = {
    name,
    version,
    meta: {
        name,
        version,
        url: 'https://oxc.rs/',
        rules: 'https://oxc.rs/docs/guide/usage/linter/rules.html',
    },
    rules: {},
}

export {
    oxlintRules,
}
