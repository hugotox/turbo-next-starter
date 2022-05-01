if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env.local' })
}

export * from './src'
