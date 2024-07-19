import express from 'express';

const app = express();

app.get('/', async (req, res) => {
    res.send('Hello, World!')
})

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`HelloWorld: listening on port ${port}`);
});