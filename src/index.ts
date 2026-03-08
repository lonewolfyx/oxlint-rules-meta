import { oxlintRuleMeta } from '@/rules'
import { name, version } from '../package.json' with { type: 'json' }

export * from './types'

const oxlintRules = {
    name,
    version,
    meta: {
        name,
        version,
        url: 'https://oxc.rs/',
        rules: 'https://oxc.rs/docs/guide/usage/linter/rules.html',
    },
    rules: oxlintRuleMeta,
}

function getRuleMeta(rule: keyof typeof oxlintRuleMeta) {
    return oxlintRuleMeta[rule]
}

export {
    getRuleMeta,
    oxlintRuleMeta,
    oxlintRules,
}
