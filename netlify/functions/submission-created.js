const { MongoClient } = require('mongodb');

exports.handler = async function (event) {

    const connectionString = process.env.MONGODB_ATLAS_CONN_STRING;
    const form = JSON.parse(event.body).payload.data

    const client = new MongoClient(connectionString);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        const result = await client.db("awards").collection("memories").insertOne(form);
        console.log(`New listing created with the following id: ${result.insertedId}`);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

    return {
      statusCode: 200
    }
  }