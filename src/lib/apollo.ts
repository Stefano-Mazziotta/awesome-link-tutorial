import { ApolloClient, InMemoryCache } from "@apollo/client";
/*
 *  Creating a new ApolloClient instance
 *  Passing a configuration object with uri and cache fields.
 *
 *  The uri field specifies the GraphQL endpoint you will interact with. 
 *  This will be changed to the production URL when the app is deployed.
 * 
 *  The cache field is an instance of InMemoryCache,
 *  which Apollo Client uses to cache query results after fetching them. 
*/

const apolloClient = new ApolloClient({ 
    uri: '/api/graphql',
    cache: new InMemoryCache(),
})

export default apolloClient