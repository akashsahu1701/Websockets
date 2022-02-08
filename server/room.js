const users = [];

const addUser = ({ id, mobile }) => {
  const existingUser = users.find((user) => user.mobile === mobile);

  if (!mobile) return { error: "mobile number are required." };
  if (existingUser) return { error: "Username is taken." };

  const user = { id, mobile, room: "admin" };

  users.push(user);

  return { user };
};

const getUser = (id) => users.find((user) => user.id === id);

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) return users.splice(index, 1)[0];
};

module.exports = { addUser, getUser, removeUser };
