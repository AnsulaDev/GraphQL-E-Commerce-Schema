const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function startApolloServer() {
    const app = express();
    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray,
        
    });

    const server = new ApolloServer({
        schema
    });

    await server.start(); //This will tell Apollo to prepare to handle incoming graphical operations with Apollo Server already
    server.applyMiddleware({app, path: '/graphql'});//which connects Apollo's graphical middleware with our

    express server.

    app.listen(3000, () => {
        console.log('Running GraphQL server...!');
    });

}
startApolloServer();


