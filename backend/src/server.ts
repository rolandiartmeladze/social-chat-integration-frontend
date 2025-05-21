import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';


import cors from 'cors';


dotenv.config();

const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN || "your_page_access_token";

const messages: { sender: string; text: string }[] = [];



app.use(bodyParser.json());



app.get('/webhook', (req: Request, res: Response) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "your_verify_token";
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});

app.post('/webhook', (req: Request, res: Response) => {
  const body = req.body;

  if (body.object === 'page') {
    body.entry.forEach((entry: any) => {
      const webhookEvent = entry.messaging[0];
      const senderId: string = webhookEvent.sender.id;
      const message: string = webhookEvent.message.text;

      if (message) {
        messages.push({ sender: senderId, text: message });

        sendMessage(senderId, `თქვენ თქვით: ${message}`);
      }else {
                messages.push({ sender: senderId, text: "No message" });
      }

      console.log(JSON.stringify(req.body, null, 2));
    });
    res.status(200).send('EVENT_RECEIVED');
  } else {
    res.sendStatus(404);
  }
});

const sendMessage = async (senderId: string, text: string) => {
  const messageData = {
    recipient: { id: senderId },
    message: { text: text }
  };

  try {
    await axios.post(
      `https://graph.facebook.com/v12.0/me/messages`,
      messageData,
      {
        params: { access_token: PAGE_ACCESS_TOKEN }
      }
    );
  } catch (error) {
    console.error("Unable to send message:", error);
  }
};

app.get("/test", (_req: Request, res: Response) => {
  console.log(PAGE_ACCESS_TOKEN)
  res.send("Hello World From Server!");
});

app.get('/messages', (_req: Request, res: Response) => {
  res.json(messages);
  console.log(messages);
});


app.listen(process.env.PORT || 3001, () => {
  console.log('Webhook is listening');
});
