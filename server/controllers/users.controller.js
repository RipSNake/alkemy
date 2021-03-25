/* Class creation method for user controller */

class UserCtrl {
	constructor() {

	}
	/* GET users list */
	async getUsers(req, res) {
		const users = await SQLSearch;
		res.json(users);
	}
	/* POST create user */
	async createUser(req, res) {
		await SQLUserCreation;
		res.json({status: `User ${req.body.id} Created`});
	}
	/* GET User by id */
	async getUser(req, res) {
		const user = await SQLSearch;
		res.json(user);
	}
	/* PUT user by id */
	updateUser(req, res) {
		await SQLUpdate;
		res.json({status: 'User Updated'});
	}
	/* DELETE user by id */
	deleteUser(req, res) {
		await SQLDelete;
		res.json({status: 'User Deleted'});
	}
};

/*
const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async(req, res) => {

};

usersCtrl.createUser = async(req, res) => {

};

usersCtrl.getUser = async(req, res) => {

};

usersCtrl.updateUser = async(req, res) => {

};

usersCtrl.deleteUser = async(req, res) => {

};

module.exports = usersCtrl;
*/