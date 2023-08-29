export const detailUrlService = async (url: string) => {
  return fetch(url).then((res) => res.json())
}
