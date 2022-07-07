import axios from 'axios'

export const readData = async (url) => {
  let result
  await axios
    .get(url)
    .then((res) => { result = res })
    .catch(() => { result = false })
  return result
}