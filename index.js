import express from 'express';

import longestWord from './bootcamp/longestWord.js';
import sumWords from './bootcamp/sumWords.js';
import shortWord from './bootcamp/shortestWord.js';

const app = express();

app.use(express.static('public'));

app.get('/api/word_game', function (req, res) {
    const sentence = req.query.sentence;

    if (!sentence) {
        res.json({
            error: 'please enter the sentence to analyze'
        });
    }

    res.json({
        "longestWord": longestWord(sentence),
        "short": shortWord(sentence),
        "sum": sumWords(sentence)
    });
});

const PORT = 6007;
app.listen(PORT, function () {
    console.log('api started on port', PORT)
})