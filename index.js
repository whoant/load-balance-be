const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;


app.get('/api/v1/auth', (req, res) => {
    res.json({
        status: 'success',
        msg: `Connect server on port ${PORT}`
    })
});

app.listen(PORT, () => {
    console.log(`Connect server on port ${PORT}`);
});