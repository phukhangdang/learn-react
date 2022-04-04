export const key = "user";

export const getListUser = () => {
  var listUser = localStorage.getItem(key);

  if (!listUser) {
    listUser = [];
  } else {
    listUser = JSON.parse(listUser);
  }

  return listUser;
};

export const mergeUser = (user) => {
  if (user.id) {
    deleteUserById(user.id);
    const listUser = getListUser();
    listUser.push(user);
    const listUserJSON = JSON.stringify(listUser);
    localStorage.setItem(key, listUserJSON);
  } else {
    user.id = newGuid();
    const listUser = getListUser();
    listUser.push(user);
    const listUserJSON = JSON.stringify(listUser);
    localStorage.setItem(key, listUserJSON);
  }

  return user;
};

export const getUserById = (id) => {
  const listUser = getListUser();
  const user = listUser.find((x) => x.id == id);

  return user;
};

export const deleteUserById = (id) => {
  const listUser = getListUser();
  const userIndex = listUser.findIndex((x) => x.id == id);
  listUser.splice(userIndex, 1);
  const listUserJSON = JSON.stringify(listUser);
  localStorage.setItem(key, listUserJSON);

  return true;
};

export function newGuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
