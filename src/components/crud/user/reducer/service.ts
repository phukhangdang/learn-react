export const key = "user";

export const getListUser = (): any => {
  var listUser = localStorage.getItem(key);

  if (!listUser) {
    return [];
  } else {
    listUser = JSON.parse(listUser);
  }

  return listUser;
};

export const mergeUser = (user: any) => {
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

export const getUserById = (id: any) => {
  const listUser = getListUser();
  const user = listUser.find((x: any) => x.id === id);

  return user;
};

export const deleteUserById = (id: any) => {
  const listUser = getListUser();
  const userIndex = listUser.findIndex((x: any) => x.id === id);
  listUser.splice(userIndex, 1);
  const listUserJSON = JSON.stringify(listUser);
  localStorage.setItem(key, listUserJSON);

  return true;
};

export function newGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
