const fs = require('fs')

const request = require('request')
const streamToPromise = require('stream-to-promise')

const importSchema = () =>
  streamToPromise(
    fs.createReadStream('./scripts/schema.gql').pipe(
      request.post({
        headers: {
          Authorization: `Bearer ${process.env.FAUNA_ADMIN_KEY}`,
        },
        model: 'merge',
        uri: 'https://graphql.us.fauna.com/import',
      })
    )
  ).then(String)

const main = async () => {
  await importSchema()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
