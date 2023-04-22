//const { parse } = require("date-fns");


const loginUser = async (req, res, user) => {
    console.log("login", req.body.username, req.body.password);
}

const registerUser = async (req, res, user) => {
    console.log("register" + req.body.username, req.body.password, req.body.specialPhrase);
}

module.exports = {
    loginUser,
    registerUser,
};
//THIS WORKS


/*
const { parse } = require("date-fns");

const data = {
    user:require("../model/users.json"),
    setUsers: function (data) {this.users = data}
}


//get this working like in the other thingymagig

const getAllUsers = (req, res) => {
    res.json(data.users)
};





















/*
//const { parse } = require("date-fns");

const data = {
    user:require("../model/users.json"),
    setUsers: function (data) {this.users = data}
}


const getAllUsers = (req, res) => {
    res.json(data.users)
};


const createNewUser = (req, res) => {
    const newUser = {
        id: data.users.length ? data.users[data.users.length -1].id + 1 : + 1,
        //^this is gabbing the last employee in the .json array, and adding 1
        firstname: req.body.firstname,
        lastname: req.body.lastname //change to password
    }
    if (!newUser.firstname || !newUser.lastname) {
        return res.status(400).json({"message": "first and last names are required."});
    } //change to password

    data.setUsers([...data.employees, newUser])
    res.status(201).json(data.Users);
};

const updateUser = (req, res) => {
    const user = data.users.find(emp => emp.id === parseInt(req.body.id));
    if (!user) {
        return res.status(400).json({"message": `Users ID ${req.body.id} not found`});
    }
    if (req.body.firstname) user.firstname = req.body.firstname;
    if (req.body.lastname) user.lastname = req.body.lastname; //these set the employee name values to the paramater values
    const filteredArray = data.users.filter(user => user.id !== parseInt(req.body.id)); //filter the array - remove the existing employee record from it
    const unsortedArray = [...filteredArray, employee];
    data.setUsers(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.users);// the above chain turnary statement retutns 1 if a(one element of the array) is greater than b(other element)
};                           // and then it returns a -1 if it odd, and 0 if its is even - sorting the array into a numbered order 1,2,3,4 etec.

const deleteUser = (req, res) => {
    const user = data.users.find(user => user.id === parseInt(req.body.id));
    if (!user) {
        return res.status(400).json({"message": `user ID ${req.body.id} not found`});
    } 
    const filteredArray = data.users.filter(user => user.id !== parseInt(req.body.id)); //filter the array - remove the existing employee record from it
    data.setUsers([...filteredArray]);
    res.json(data.users);

};

const getUser = (req, res) => {
    const user = data.users.find(emp => emp.id === parseInt(req.body.id));
    if (!employee) {
        return res.status(400).json({"message": `user ID ${req.params.id} not found`})
    }
    res.json(user);

};

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
    getUser
};

*/
