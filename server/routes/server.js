const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


// const db = require('./Config/db')

const router = express();

const port = 3003; 

const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_new_password',
    database: 'BlogAppDB'

})

db.connect(function(err){
    if(err) throw err;
    console.log("Connected")
})

router.use(bodyParser.urlencoded({extended: true}))
router.use(express.json())
router.use(cors());

router.get('/Posts', (req,res) => {
    const sqlSelectAll = "SELECT * FROM blogPosts"
    db.query(sqlSelectAll, (err,result) => {
        res.json(result);
    });
})

// router.get('/Posts/:title', (req, res) => {
//     const title = req.params.title
//     const sqlSearch = `SELECT * FROM blogPosts WHERE title = ? `
//     db.query(sqlSearch, title, (err, result) =>{
//         if(err){
//             console.log(err)
//         }
//         res.json(result)
//     })
// })

router.get('/Posts/:id', (req,res) => {
    const id = req.params.id;
    const sqlSelectAll = "SELECT * FROM blogPosts WHERE id = ?"
    db.query(sqlSelectAll, [id], (err,result) => {
        res.json(result[0]);
    });
})

router.put('/Posts/:id', (req,res) => {
    const id = req.params.id;
    const title = req.body.title;
    const postText = req.body.postText;
    const userName = 'wreed3';
    console.log(id)
    const sqlUpdate = "UPDATE blogPosts SET title = ?, postText = ?, userName= ? where id = ?"
    db.query(sqlUpdate, [title, postText, userName, id], (err, result) => {
        if(err){
            console.log(err)
        }
        res.json(result)
    })
})

router.delete('/Posts/:id', (req, res) =>{
    const id = req.params.id;
    const sqlDelete = "DELETE FROM blogPosts WHERE id = ?";
    db.query(sqlDelete, [id], (err, result) => {
        if(err){
            console.log(err);
        }
        res.json(result);
    })
})




router.post('/Post', (req, res) => {
    const title = req.body.title;
    const postText = req.body.postText;
    const userName = 'wreed3';

    const sqlInsert = "INSERT INTO blogPosts (title, postText, userName) VALUES (?,?,?)"
    db.query(sqlInsert, [title, postText, userName], (err, result) =>{
        if(err){
            console.log(err);
        }
        res.send(result)
    });
});

if (process.env.NODE_ENV !== 'TEST') {
    router.listen(port, ()=>{
        console.log(`Listening on port ${port}`);
    });
}

module.exports = router;