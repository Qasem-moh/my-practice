'use strict'

const express = require('express')
const bcrypt = require('bcrypt')
const base64 = require('base-64')
const { Sequelize, DataTypes, where } = require('sequelize')
const { text } = require('express')

const app = express();
const POSTGRES_URI = 'postgres://localhost:5432/qasem'

const sequelize = new Sequelize(POSTGRES_URI, {})


app.use(express.json())

const Users = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


app.post('/signin', (req, res) => {
    if (req.headers['authorization']) {
        let basicHeaderParts = req.headers.authorization.split(" ")
        let encoded = basicHeaderParts.pop();
        let decoded = base64.decode(encoded)
        let [username, password] = decoded.split(":")
        try {
            const user = await Users.findOne({where: { username: username }})
            const valid=await bcrypt.compare(password, user.password)
            if (valid) {
                res.status(200).send('login successfuly')
            }else{
                throw new Error('invalid pass') 
            }
        } catch(e){
            throw new Error('User not found')

        }
        // let valid=
      



    }
})


sequelize.sync().then(() => {
    app.listen(() => console.log(running))
}).catch(e, console.error)













