export type Awaitable<T> = T | Promise<T>

export async function interopDefault<T>(m: Awaitable<T>): Promise<T extends { default: infer U } ? U : T> {
    const resolved = await m
    return (resolved as any).default || resolved
}

export function capitalizeFirstLetter(str: string) {
    if (!str)
        return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}
