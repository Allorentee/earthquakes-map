export const detailUrlService = async (url: string) => {
  const result = await fetch(url)
  const data = result.json()
  return data
}
