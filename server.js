const express = require('express');
const app = express();

// app.get('/:number_of_bottles', (req, res) => {
//     //ensure number
//     if (req.params.number_of_bottles >= 1) {
//         res.send(

//             `<h1>${req.params.number_of_bottles} Bottles of beer on the wall.</h1>
//             <h2><a href='${req.params.number_of_bottles - 1}'>take one down, pass it around</a></h2>`
//         )
//     } else {
//         res.send(`<h1> 0 Bottles of beer on the wall</h1>
//         <h2><a href=99>start over</a></h2>`)
//     }

// })
const x = [-1, Math.floor(Math.random()*20)]
app.get('/:number_of_bottles', (req, res) => {
    //ensure number
    if (req.params.number_of_bottles >= 1) {
        res.send(

            `<h1>${req.params.number_of_bottles} little bugs in the code</h1>
            <h1>${req.params.number_of_bottles} little bugs</h1>
            <h2>take one down</h2>
            <h2><a href='${req.params.number_of_bottles - 1| + Math.floor(Math.random()*100)}'>patch it around</a></h2>`
        )
    } else {
        res.send(`<h1> 0 little bugs in the code</h1>
        <h2><a href=99>start over</a></h2>`)
    }

})


app.listen(3000, () => {
    console.log('working');
})