const pool = require('../database');


class OperationsCtrl {
	constructor() {

	};
	/* GET operations list */
 	async getOperations(req, res) {
	 	const operations = await pool.query('SELECT * FROM operation',(error, results, fields) => { 
	 		console.log(results);
	 	});
	 	console.log('This is the operation',operations);
		res.json(operations);
	};
	/* POST operation  */
	async createOperation(req, res) {
		console.log('CREATE Operations');
		const newOperation = await pool.query('INSERT INTO operation set ?',[req.body]);
		res.json({message: 'Operation created'});
	};
	/* GET one Operation */
	async getOperation(req, res) {
		console.log('GET ONE Operation');
		const { id } = req.params;
		const operation = await pool.query('SELECT * FROM operation WHERE id = ?',[id]);
		console.log(games.length);
		if(games.length > 0) {
			res.json(operation);
		} else {
			res.status(404).json({ text: 'Operation does not exists' });
		}
	};
	/* UPDATE one Operation */
	async updateOperation(req, res) {
		console.log('UPDATE Operation');
		const { id } = req.params;
		const oldOperation = req.body;
		await pool.query('UPDATE operation set ? WHERE	id = ?',[oldOperation, id]);
		res.json({ message:'Operation Updated' });
	};
	/* GET operations list */
	async deleteOperation(req, res) {
		console.log('DELETE Operation');
		const { id } = req.params;
		await pool.query('DELETE FROM operation WHERE id = ?',[id]);
		res.json({ message:'Operation Deleted' });
	};
}

const operationsCtrl = new OperationsCtrl();
module.exports = operationsCtrl;

