import express from 'express'
const app = express()
const firebase = require('firebase');


firebase.initializeApp({
    credential: firebase.credential.cert(''), //account key taka ate
    databaseURL: '', //data base shi url taka ate
  });

const db = firebase.firestore();
const usersRef = db.collection('users');
const bookingsRef = db.collection('bookings');
const eventsRef = db.collection('events');



app.use(express.json());

app.post('/users',async(req,res) =>{
    const {name , email, password} = req.body;
    try {
        const result = await users.add(`name...email..pass`, [name, email, password]);
        res.status(201).send({id: users.id, ...users.data});
      } catch (err) {
        res.status(400).send(err);
      }
});

app.get('/users', async (req, res) => {
    try {
      const users = await usersRef.get();
      res.send(users.docs.map(user => ({ id: user.id, ...user.data() })));
    } catch (err) {
      res.status(500).send(err);
    }
});
  

app.post('/bookings', async (req, res) => {
    const { userId, serviceId, date, time, status } = req.body;
    try {
      const booking = await bookingsRef.add({ userId, serviceId, date, time, status });
      res.status(201).send({ id: booking.id, ...booking.data() });
    } catch (err) {
      res.status(400).send(err);
    }
});

app.get('/bookings', async (req, res) => {
    try {
      const bookings = await bookingsRef.get();
      res.send(bookings.docs.map(booking => ({ id: booking.id, ...booking.data() })));
    } catch (err) {
      res.status(500).send(err);
    }
});

app.post('/events', async (req, res) => {
    const { name, description, price, duration } = req.body;
    try {
      const service = await eventsRef.add({ name, description, price, duration });
      res.status(201).send({ id: service.id, ...service.data() });
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  app.get('/events', async (req, res) => {
    try {
      const services = await eventsRef.get();
      res.send(services.docs.map(service => ({ id: service.id, ...service.data() })));
    } catch (err) {
      res.status(500).send(err);
    }
  });