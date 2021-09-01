const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;
// console.log(process.env.TWILIO_ACCOUNT_SID);
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello");
});

app.post("/", async (request, response) => {
  console.log(request.body.number);
  client.messages
    .create({
      body: "data recived!!!",
      from: "+16067555554",
      to: `+91${request.body.number}`,
    })
    .then((message) => console.log(message.sid));
  response.status(200).send("Done");
});
app.listen(port, () => console.log(`server start --> http://localhost::${port}`));
