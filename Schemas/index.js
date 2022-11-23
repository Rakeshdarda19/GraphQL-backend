
const { GraphQLList,GraphQLString, GraphQLID, GraphQLInt,GraphQLSchema,GraphQLObjectType } = require("graphql");

const UserType = require("./TypeDefs/UserType");
const graphql = require('graphql')
// const {
//     GraphQLObjectType,
//     GraphQLInt,
//     GraphQLString

// } = graphql
const userData = require('../MockData.json')
// const UserType = require('./TypeDefs/UserType')

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        getAllUsers :{
            type: new GraphQLList(UserType),
            args:{id:{type:GraphQLInt}},
            resolve(parent,args){
                return userData
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields: {
        createUser : {
            type: UserType,
            args:{
                name:{type:GraphQLString},
                email:{type: GraphQLString},
                password:{type:GraphQLString}
            },
            resolve(parent,args) {
                userData.push({
                    id: userData.length + 1,
                    name:args.name,
                    email:args.email,
                    password:args.password
                });
                return args
            }
        }
    }
})

module.exports= new GraphQLSchema({query:RootQuery, mutation:Mutation})