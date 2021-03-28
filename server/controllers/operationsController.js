const pool = require('../database');

class OperationsCtrl {
	constructor() {
		
	};
	/* GET operations list */
 	async getOperations(req, res, next) {
 		const operations = await pool.then(poolCon => {
 			return poolCon.query('SELECT * FROM operation');
 		});
 		if(operations.length > 0) {
			res.json(operations);
 		} else {
 			res.json({message: 'Could not fetch operations'});
 		}
	};
	/* POST operation  */
	async createOperation(req, res, next) {
		const newOperation = await pool.then( poolCon => {
			return poolCon.query('INSERT INTO operation set ?',[req.body]);
		});
		if( newOperation.affectedRows != 0) {
			console.log('Created: ',newOperation);
		}
		res.json({message: 'Operation created'});
	};
	/* GET one Operation */
	async getOperation(req, res, next) {
		const id = req.params.id;
		const operation = await pool.then( poolCon => {
			return poolCon.query('SELECT * FROM operation WHERE id = ?',[id]);
		});
		if(operation.length > 0) {
			res.json(operation);
		} else {
			res.status(404).json({ text: 'Operation does not exists' });
		}
	};
	/* UPDATE one Operation */
	async updateOperation(req, res, next) {
		const oldOperation = req.body;
		console.log(req.body);
		const result = await pool.then( poolCon => {
			return poolCon.query('UPDATE operation set ? WHERE	id = ?',[oldOperation, req.params.id]);
		});
		if(result) {
			console.log('Query finished',result);
		}
		res.json({ message:'Operation Updated' });
	};
	/* GET operations list */
	async deleteOperation(req, res, next) {
		const { id } = req.params;
		const result = await pool.then( poolCon => {
			return poolCon.query('DELETE FROM operation WHERE id = ?',[id]);
		});
		if(result) {
			console.log('Query finished', result);
		}
		res.json({ message:'Operation Deleted' });
	};
}

const operationsCtrl = new OperationsCtrl();
module.exports = operationsCtrl;

