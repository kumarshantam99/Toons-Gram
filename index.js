const {ApolloServer}=require('apollo-server')

const mongoose=require('mongoose')
const resolvers=require('./graphql/resolvers')
const typeDefs=require('./graphql/tepeDefs')
const {MONGOURI}=require('./config/config')


const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>({req})
})
mongoose.connect(MONGOURI, {useNewUrlParser:true}).then(()=>{
    console.log('MongoDB connected')
    return server.listen({port:5000})
}).then(res=>{

    console.log(`Server running at ${res.url}`)
})