//import errorHandler from "../middleware/errorHandler";

//working with json files
let users = [
    {
      "id": 1,
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
      "version": 6.1,
      "title": "Major"
    },
    {
        "id": 2,
        "name": "Afzal Ghaffar",
        "language": "Sindhi",
        "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
        "version": 1.88,
        "title": "Minor"
      }
]

//@route GET /api/users
// gets all users.
export const getUsers = (req,res,next) => {
    const limit = parseInt(req.query.limit); //quering strings
    if (!isNaN(limit) &&  limit > 0){
   return res.status(200).json(users.slice(0,limit));
    }
    res.status(200).json(users);
};

//@route GET /api/users/:id
// gets a single user.
export const getUser = (req,res,next) =>{
    const id = parseInt(req.params.id); //change into integer
    const user = users.find((user) => user.id === id) //check if its id
    if (!user) {
      const error = new Error(`User not Found!`);
      error.status(404);
      return next(error);
    }
    res.status(200).json(users);
};

//@route POST /api/users
// creates a new user.
export const createUser = (req,res,next) => {
    const newUser = {
    id: users.length + 1,
    title: req.body.title,
   }
   if (!newUser.title){
    const error = new Error(`User not Created!`);
    error.status(400);
    return next(error);
   }
   users.push(newUser);
   res.status(201).json(users);
};

//@route PUT /api/users/:id
// Updates a new user.
export const updateUser = (req,res,next) => {
    const id = parseInt(req.params.id); //change into integer
      const user = users.find((user) => user.id === id) //check if its id
      if (!user) {
        const error = new Error(`User not Found!`);
        error.status(404);
        return next(error);
      }
  user.title = req.body.title;
  res.status(200).json(users)
  };

  //@route DELETE /api/users/:id
// Deletes a new user.
export const deleteUser = (req,res,next) => {
    const id = parseInt(req.params.id); //change into integer
      const user = users.find((user) => user.id === id) //check if its id
      if (!user) {
        const error = new Error(`User not Found!`);
        error.status(404);
        return next(error);
      }
  users = users.filter((user) => user.id !== id);
  res.status(200).json(users)
  };