const express = require('express');
const axios = require('axios').default;

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      '*'
    );
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
});

app.get('/modalities', async (req, res) => {
    const response = await axios.get('https://wine-club.herokuapp.com/modalities');
    return res.json(response.data);
});

app.get('/modalities/:id', async (req, res) => {
    const response = await axios.get(`https://wine-club.herokuapp.com/modalities/${req.params.id}`);
    return res.json(response.data);
});

app.listen(80, () => {
    console.log("App is listenning on PORT 80");
});
