import express from 'express';

const router = express.Router();

import {createUser, getUsers, getUser, deleteUser, updateUser} from '../controllers/users.js';

//all routes in heres are starting with /users

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;