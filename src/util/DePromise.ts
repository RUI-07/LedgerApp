export type DePromise<T> = T extends Promise<infer U> ? U : never
