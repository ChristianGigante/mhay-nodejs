import { v4 as uuidv4 } from "uuid";
let users = [
  //   {
  //     fName: "Mhay",
  //     lName: "Lab",
  //     age: 21,
  //   },
];

//retrieve all users
export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};
//add new user
export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`${user.fName} was added`);
};
//search specific user by id
export const getUserById = (req, res) => {
  const id = req.params.id;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};
//delete user by id
export const deleteUserById = (req, res) => {
  const id = req.params.id;
  users = users.find((user) => user.id != id);
  res.send(`User with the id ${id} deleted from the database.`);
};
//update user attribute
export const updateUserById = (req, res) => {
  const { id } = req.params;
  const { fName, lName, age } = req.body;

  const user = users.find((user) => user.id == id);

  if (fName) user.fName = fName;
  if (lName) user.lName = lName;
  if (age) user.age = age;

  res.send(`User with Id ${id} has been updated`);
};
