import express, { json } from 'express';
import router from "./router.js";

const PORT = process.env.PORT || 8080
const app = express();

app.use(json())
app.use('/api', router);

/*app.post('/sweets_create', async function(req, res) {
    try {
        console.log(req.body)
        const name = req.body.name
        const newName = await db.query(`INSERT INTO sweets (name) values($1) RETURNING *`, [name])
        //res.json(newName.name[0])
        res.send(res.body)
        } 
    catch(e) 
    
    { console.log(e)}
});
app.get('/sweets', async function(req, res) {
    try {
        console.log(req.body)
        const sweets = await db.query(`SELECT * FROM sweets`)
        res.json(sweets.rows)
        } 
    catch(e) 
    
    { console.log(e)}
});

app.put('/sweets', async function(req, res) {
    try {
        console.log(req.body)
        const {id, name} = req.body
        const sweets = await db.query

            (
            `UPDATE sweets set name =$1 where id = $2 RETURNING * `,
            [name, id]
            )

        res.json(sweets.rows[0])
        } 
    catch(e) 
    
    { console.log(e)}
}); 
app.delete('/sweets_delete:id', async function(req, res) {
    try {
        console.log(req.body)
        const {id} = req.body
        const sweets = await db.query(`DELETE FROM sweets where id =$1 RETURNING *`,
        [id])
        res.json("Удалено")
        } 
    catch(e) 
     
    { console.log(e)}
});*/

app.listen(PORT, () => console.log(`server started on port ${PORT}`));