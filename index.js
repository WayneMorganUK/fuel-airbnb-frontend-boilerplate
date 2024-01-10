
const pinataSDK = require('@pinata/sdk')


const PINATA_API_KEY = "c4b7327aeb300f710ec0"
const PINATA_SECRET_API_KEY = "71b919ad9095e5f995e9fad5c2ddbf4650acf66d0c357305363514f5e9917d40"
const pinata = new pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY)

pinata.testAuthentication().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})

