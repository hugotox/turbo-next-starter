import { CreateIndex } from 'faunadb'

export default CreateIndex({
  name: 'clientsIdx',
  source: 'Client',
  terms: 'data.name',
  values: 'data.name',
  serialized: true,
})
