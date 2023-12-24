const db = require('./db.js');

class Controller {
    async create(req, res){
        const {name, title, price, img} = req.body;
        const newItem = await db.query(`INSERT INTO cooldatabase (name, title, price, img) values ($1, $2, $3, $4) RETURNING *`, [name, title, price, img]);
        res.json(newItem.rows[0]);
    }
}

module.exports = new Controller();