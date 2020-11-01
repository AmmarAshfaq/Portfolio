import '../styles/globals.css'
import {useApollo } from 'src/apolloClient'
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  const client = useApollo()
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
}

export default MyApp
