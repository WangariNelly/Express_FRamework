import express from 'express';
import { 
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from '../Controllers/usersController.js'

const router = express.Router();

//getting all users
router.get('/',getUsers);

//getting a single user
router.get('/:id',getUser);

//posting a new user
router.post('/',createUser);

//updating a user
router.put('/:id', updateUser);

//deleting a user
router.delete('/:id', deleteUser);



 export default router;