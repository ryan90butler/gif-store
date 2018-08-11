const express = require('express');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const {tenorGif, tenorSearch} = require('../server/service/tenorApi');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(((db) => {
    console.log('db connected');
    app.set('db', db);
  }))
  .catch(err => {
    console.log('db failed to connect')
    console.error(err)
  })

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

app.get(`/api/get-trending`, (req,res)=> {
  tenorGif(process.env.TENOR_API)
    .then(r => {
      res.send(r)
    })
  .catch(err => {
    throw err
  })
})

app.get('/api/search/:id', (req,res)=> {
  tenorSearch(process.env.TENOR_API, req.params.id)
    .then(r=>{
      res.send(r.results).status(200)
    })
})

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
  console.log(`server connected at port ${port}`)
})