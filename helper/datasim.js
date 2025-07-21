const data = {
  users: [
    { user: "Benito", pass: "otineb", id: 1753035065982 },
    { user: "Ashley", pass: "yelhsa", id: 1753035214635 },
    { user: "Daniel", pass: "leinad", id: 1753035242900 },
    { user: "Martin", pass: "nitram", id: 1753035303703 },
    { user: "Ursula", pass: "alusru", id: 1753035305017 },
  ],
};

function getRow(id) {
  for (let item of data.users) {
    if (item.id == Number(id)) {
      return item;
    }
  }
  return false;
}

const findID = function (users, id) {
  return users.indexOf(getRow(id));
};

exports.data = data;
exports.getRow = getRow;
exports.findID = findID;
