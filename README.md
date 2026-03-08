# oxlint-rules-meta

[![npm version](https://img.shields.io/npm/v/oxlint-rules-meta.svg)](https://www.npmjs.com/package/oxlint-rules-meta)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Metadata and JSON data for all [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) rules.

## Introduction

This library provides comprehensive metadata for all Oxlint rules, including descriptions, categories, schemas, and documentation URLs. It's useful for building linting tools, IDE plugins, or any application that needs to work with Oxlint rule configurations.

## Installation

```bash
pnpm add oxlint-rules-meta -D
```

## Usage

### Get All Rules

```typescript
import { oxlintRuleMeta, oxlintRules } from 'oxlint-rules-meta'

// Access the full rules object with metadata
console.log(oxlintRules.name) // 'oxlint-rules-meta'
console.log(oxlintRules.version) // current version
console.log(oxlintRules.meta) // { name, version, url, rules }

// Access all rule metadata
console.log(oxlintRuleMeta['no-unused-vars'])
console.log(oxlintRuleMeta['@typescript-eslint/no-explicit-any'])
```

### Get Single Rule Meta

```typescript
import { getRuleMeta } from 'oxlint-rules-meta'

const ruleMeta = getRuleMeta('no-unused-vars')
console.log(ruleMeta)
```

### Rule Metadata Structure

```typescript
interface IRulesMeta {
    name: string
    meta?: {
        source?: string // Rule source plugin (e.g., 'eslint', 'typescript')
        category?: string // Rule category
        default?: boolean // Whether enabled by default
        docs?: {
            description?: string
            url?: string // Documentation URL
            category?: string
        }
        fixable?: string // Fix capability
        schema?: JSONSchema4 | JSONSchema4[] | [] // Rule options schema
    }
}
```

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/lonewolfyx/oxlint-rules-meta.git

# Install dependencies
pnpm install

# Generate rules metadata
pnpm dev

# Build for production
pnpm build
```

### Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Run development mode (generate rules) |
| `pnpm build` | Build the library |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors |
| `pnpm release` | Publish to npm |

## API

### Exports

```typescript
// Main exports
export { getRuleMeta, oxlintRuleMeta, oxlintRules }

// Type exports
export type { IOxlintRules, IRulesMeta, IRulesMetaDocs, LintOptions, RulesMetaStrategy }
```

## Related

- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) - The Oxidation Compiler linter
- [OXC](https://oxc.rs/) - The Oxidation Compiler

## License

[MIT](./LICENSE) © 2025 lonewolfyx
