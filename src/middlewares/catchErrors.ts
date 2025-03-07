export default async function catchErrors<E extends Error, T>(promise: Promise<T>): Promise<[E | null, T | null]> {
  try {
    const result = await promise
    return [null, result]
  } catch (e) {
    return [e as E, null]
  }
}
