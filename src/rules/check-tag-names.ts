export default {
    name: 'check-tag-names',
    meta: {
        source: 'jsdoc',
        category: 'correctness',
        default: false,
        docs: {
            description: 'Reports invalid block tag names.',
            url: 'https://oxc.rs/docs/guide/usage/linter/rules/jsdoc/check-tag-names.html',
            category: 'correctness',
        },
        fixable: 'pending',
        schema: [
            {
                additionalProperties: false,
                properties: {
                    definedTags: {
                        description: 'Use an array of `definedTags` strings to configure additional, allowed tags.\nThe format is as follows:\n\n```json\n{\n  "definedTags": ["note", "record"]\n}\n```',
                        items: {
                            type: 'string',
                        },
                        type: 'array',
                    },
                    enableFixer: {
                        description: 'Set to `false` to disable auto-removal of types that are redundant with the [`typed` option](#typed).',
                        type: 'boolean',
                    },
                    inlineTags: {
                        description: 'List of tags to allow inline.\n\nDefaults to array of `\'link\', \'linkcode\', \'linkplain\', \'tutorial\', \'inheritDoc\', \'label\', \'include\', and \'includeCode\'`',
                        items: {
                            type: 'string',
                        },
                        type: 'array',
                    },
                    jsxTags: {
                        description: 'If this is set to `true`, all of the following tags used to control JSX output are allowed:\n\n```\njsx\njsxFrag\njsxImportSource\njsxRuntime\n```\n\nFor more information, see the [babel documentation](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx).',
                        type: 'boolean',
                    },
                    typed: {
                        description: 'If this is set to `true`, additionally checks for tag names that are redundant when using a type checker such as TypeScript.\n\nThese tags are always unnecessary when using TypeScript or similar:\n\n```\naugments\ncallback\nclass\nenum\nimplements\nprivate\nproperty\nprotected\npublic\nreadonly\nthis\ntype\ntypedef\n```\n\nThese tags are unnecessary except when inside a TypeScript `declare` context:\n\n```\nabstract\naccess\nclass\nconstant\nconstructs\ndefault\nenum\nexport\nexports\nfunction\nglobal\ninherits\ninstance\ninterface\nmember\nmemberof\nmemberOf\nmethod\nmixes\nmixin\nmodule\nname\nnamespace\noverride\nproperty\nrequires\nstatic\nthis\n```',
                        type: 'boolean',
                    },
                },
                type: 'object',
            },
        ],
    },
}
