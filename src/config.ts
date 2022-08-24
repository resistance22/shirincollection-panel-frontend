const generateConfig = () => {
  if (import.meta.env.MODE == 'production') {
    return {
      backend_url: 'https://api.shirincollection.com'
    }
  } else {
    return {
      backend_url: 'http://localhost:1337'
    }
  }
}

const config = generateConfig()

export default config