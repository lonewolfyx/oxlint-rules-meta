import { fileURLToPath } from 'node:url'

export const OXC_WEBSITE_PATH = fileURLToPath(new URL('.', import.meta.url))
