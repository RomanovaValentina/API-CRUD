import db from "./db.js";


 class SweetController {
        async post(req, res) {
            try {
                console.log(req.body);
                const name = req.body.name;
                const newName = await db.query(`INSERT INTO sweets (name) values($1) RETURNING *`, [name])
                res.send(res.body);
                } 
            catch (e) {
                console.log('error');
                res.status(500).json(e);
            }
        }
    
        async get(req, res) {
           try {
                console.log(req.body);
                const sweets = await db.query(`SELECT * FROM sweets`);
                console.log(sweets);
                res.json(sweets.rows);
            } catch (e) {
                res.status(500).json(e);
            }
        }
        async put(req, res) {
            try {
                console.log(req.body)
                const {id, name} = req.body
                const sweets = await db.query(`UPDATE sweets set name =$1 where id = $2 RETURNING * `,[name, id])
                res.json(sweets.rows[0])
                
            } catch (e) {
                res.status(500).json(e) 
            }
        }
        async delete(req, res) {
            try {
                console.log(req.body)
                const {id} = req.body
                const sweets = await db.query(`DELETE FROM sweets where id =$1 RETURNING *`,[id])
                res.json("Удалено")
            } catch (e) {
                res.status(500).json(e)
            
        }
    }
    
 }

export default new SweetController();