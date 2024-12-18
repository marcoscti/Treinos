export async function getApiData() {
    try {
        const api = 'https://script.google.com/YOUR_KEY_HERE'
        const response = await fetch(api)
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

