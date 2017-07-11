const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

// CRUD
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/stores/:id/edit', catchErrors(storeController.editStore));
router.get('/store/:slug', catchErrors(storeController.getStoreBySlug));

router.get('/add', storeController.addStore);
router.post('/add',
	storeController.upload,
	catchErrors(storeController.resize),
	catchErrors(storeController.createStore)
);
router.post('/add/:id',
	storeController.upload,
	catchErrors(storeController.resize),
	catchErrors(storeController.updateStore)
);

// router.get('/reverse/:name', (req, res) => {
// 	const reverse = [...req.params.name].reverse().join('');
// 	res.send(reverse);
// });

module.exports = router;







// const person = {
// 	name: 'Leon',
// 	age: 38,
// 	cool: true
// };
// // res.send('Hey! It works!');
// // res.json(leon);
// // res.send(req.query.name);
// // res.json(req.query);
// res.render('hello', {
// 	person,
// 	dog: req.query.dog,
// 	title: 'I love food'
// });