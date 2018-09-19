const express = require('express');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
// const Sequelize = require('sequelize');
// var sequelize = new Sequelize('\', {
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: true
//     }
//   });
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then((db)=>{
        console.log('DB Connected');
        app.set('db', db);
    })
    .catch(err => {
        console.warn('Failed to connect:');
        console.error(err);
    });

app.use(session({
  name: 'gif-store',
  secret: process.env.SESSION_SECRET,
  cookie: {
      expires:  5 * 24 * 60 * 60 *1000,
  },
  saveUninitialized: false,
  rolling: true,
  resave: false,
}));

passport.serializeUser((user, done) => {
  if (!user) {
      done('No user');
  }
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const db = app.get('db');
  db.users.findOne({id: id})
  .then((user)=>{
      if(!user){
          return done(null, false)
      }
      done(null, user)
    })
});

app.use(checkDb());
app.use(passport.initialize())
app.use(passport.session())

app.post(`/api/register`, (req,res) =>{
  const {email, password, firstName, lastName} = req.body;

  req.db.users.insert({email, password, f_name:firstName, l_name:lastName})
  .then(user => {
    req.session.user = user.id;
    res.send({success: true, message: 'registered successfully'})
  }).catch(err=>{
    throw err;
  })
})

app.get('/api/items', (req, res) => {
  req.db.products.find()
      .then(products => {
          res.send(products);
      })
      .catch(err=>{throw err});
});

const port = process.env.PORT || 5050;
app.listen(port, ()=>{
  console.log(`Server connected at port ${port}`)
})

function checkDb() {
  return (req, res, next) => {
      const db = app.get('db');

      if (db) {
          req.db = db;
          next();
      }
      else {
          res.status(500).send({ message: 'DB died' });
      }
  };
}