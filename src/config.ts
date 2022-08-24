const generateConfig = () => {
  if (import.meta.env.MODE == 'production') {
    return {
      backend_url: 'http://api.shirincollection.com'
    }
  } else {
    return {
      backend_url: 'http://localhost:1337'
    }
  }
}

const config = generateConfig()

export default config