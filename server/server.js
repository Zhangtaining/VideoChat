import express from 'express';
const app = express()
const server = require('http').Server(app)
import { graphqlHTTP } from 'express-graphql';
import { SCHEMA } from './graphql_schema/schema';
import mutation from './resolvers/mutation';
const io = require('socket.io')(
    server,
    {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    }
)
import { v4 as uuidV4 } from 'uuid';
import cors from 'cors';

app.set('view engine', 'ejs')

io.on('connection', socket => {
    console.log("new user joined!!!!")
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId)
        socket.to(roomId).emit('user-connected', userId)

        socket.on('disconnect', () => {
            socket.to(roomId).emit('user-disconnected', userId)
        })
    })

})

// Graphql resolver provides below
var root = {
    hello: () => {
        console.log("hello world !!!!!!!!!!!");
        return "Hello World";
    },
    signup: () => {
        console.log("trying to sign up...");
        return mutation.signup();
    },
    login: () => {
        console.log("trying to loggin ...");
        return mutation.login();
    },
}

// Graphql server starts here
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: SCHEMA,
    rootValue: root,
    graphiql: true,
  }));


server.listen(5000)