import { ref } from 'vue'

const squirels = ref([])
async function getData() {
  const url = 'https://data.cityofnewyork.us/resource/vfnx-vebw.json'
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    let json = await response.json()
    console.log(json)
    squirels.value = json
  } catch (error) {
    console.error(error.message)
  }
}

export { getData, squirels }
