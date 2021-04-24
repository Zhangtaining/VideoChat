const { Socket } = require('dgram')
const express = require('express')
const app = express()
const server = require('http').Server(app)
var { graphqlHTTP } = require('express-graphql');
var {SCHEMA} = require('./graphql_schema/schema')
const io = require('socket.io')(
    server,
    {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"]
        }
    }
)
const { v4: uuidV4} = require('uuid')
// var cors = require('cors')

app.set('view engine', 'ejs')
// app.use(cors())
// app.use(express.static('public'))
// app.get('/', (req, res) => {
//     res.redirect(`/${uuidV4()}`)
// })

// app.get('/:room', (req, res) => {
//     res.render('room', {roomId: req.params.room})
// })


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
        return "Hello World";
    }
}

// Graphql server starts here
app.use('/graphql', graphqlHTTP({
    schema: SCHEMA,
    rootValue: root,
    graphiql: true,
  }));


server.listen(5000)