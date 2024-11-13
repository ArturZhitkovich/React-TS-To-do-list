export const getStorageObject = (key: string) => {
  const json = localStorage.getItem(key)

  if (!json || json === 'undefined') {
    return undefined
  }

  try {
    return JSON.parse(json)
  } catch {
    return undefined
  }
}

export const setStorageObject = (
  key: string,
  data: unknown,
): void => {
  const json = JSON.stringify(data)

  localStorage.setItem(key, json)
}

export const removeStorageObject = (
  key: string,
): void => {
  localStorage.removeItem(key)
}

export const clearStorage = () => {
  localStorage.clear()
}