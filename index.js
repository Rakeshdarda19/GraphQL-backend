const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
const PORT = 6969
const { graphqlHTTP } = require("express-graphql")
const schema = require('./Schemas/index')



app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql:true
    })
)
app.listen(PORT,() => {
    console.log('server running')
})