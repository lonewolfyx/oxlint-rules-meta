import type { Linter } from 'eslint'
import antfu from '@antfu/eslint-config'

const config = antfu({
    stylistic: {
        indent: 4,
        quotes: 'single',
    },
    rules: {
        'no-console': 'off',
        'node/prefer-global/process': 'off',
        'ts/explicit-function-return-type': 'off',
        'regexp/no-unused-capturing-group': 'off',
        'e18e/prefer-static-regex': 'off',
    },
    yaml: {
        overrides: {
            'yaml/indent': ['error', 2],
        },
    },
}) as Linter.Config

export default config
