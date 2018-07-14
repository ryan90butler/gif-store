const express = require('express');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');

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


const port = process.env.PORT || 8080;
app.listen(port, ()=>{
  console.log(`server connected at port ${port}`)
})