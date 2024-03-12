const UserObject = require("../models/user");

const getAll = (query = {}) => {
    return UserObject.find(query).sort("-last_login_at");
}

const get = (id) => {
    return UserObject.findOne({ _id: id});
}

const create = (data) => {
    return UserObject.create(data);
}

const update = (id, query) => {
    return UserObject.findByIdAndUpdate(id, query, { new: true });
}

const deleteOne = (id) => {
    return UserObject.findOneAndRemove({ _id: id });
}
module.exports = {getAll, get, create, update, deleteOne}