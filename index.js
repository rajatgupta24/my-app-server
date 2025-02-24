// mongodb://rajatg2411:fDrpm9D9kTQ7ViyE@Cluster0/?ssl=true&replicaSet=atlas-erhwwa-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0

const express = require('express');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://rajatg2411:fDrpm9D9kTQ7ViyE@cluster0.czv1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());


const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
}

run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/login', (req, res) => {
    console.log(req)
    res.send('Hello, World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));