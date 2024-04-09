


export async function getPosts() {
  try {
    const response = await fetch('http://46.101.131.147/services')
    const data = await response.json()
    console.log(response)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}


export async function getCertificates() {
  try {
    const response = await fetch('http://46.101.131.147/certificates')
    const data = await response.json()
    console.log(response)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    return null
  }
}
