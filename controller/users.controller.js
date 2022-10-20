const users = require('../users.json')

const getAllUsers = (req, res) => {
    const { limit, page } = req.query;
    res.send(users.slice(0, limit));
};

const getRandomUser = (req, res) => {
    const string = JSON.stringify(users);
    const parsedUser = JSON.parse(string);

    res.send(parsedUser[Math.floor(Math.random() * parsedUser.length)]);
}

const saveAUser = (req, res) => {
    console.log(req.body);
    if (req.body.id == undefined || req.body.gender == undefined || req.body.name == undefined || req.body.contact == undefined || req.body.address == undefined || req.body.photoUrl == undefined) {
        res.send("A value is missing");
    } else {
        users.push(req.body);
        res.send("Data has been saved");
    }
}

const deleteAUser = (req, res) => {
    const string = JSON.stringify(users);
    const parsedUser = JSON.parse(string);

    const index = parsedUser.findIndex(object => {
        return object.id === req.body.id;
    });

    if (index ===-1) {
        res.send("Id not found");
    } else {
        users.splice(index, 1);
        res.send("Successfully Deleted");
    }
}

const updateAUser = (req, res) => {

    const string = JSON.stringify(users);
    const parsedUser = JSON.parse(string);

    const i = parsedUser.findIndex(object => {
        return object.id === req.query.id;
    });


    if (i ===-1) {
        console.log(i);
        res.send("Id not found");
    } else {
        if (req.body.name != undefined) {
            users[i].name = req.body.name;
        }
        if (req.body.gender != undefined) {
            users[i].gender = req.body.gender;
        }
        if (req.body.address != undefined) {
            users[i].address = req.body.address;
        }
        if (req.body.contact != undefined) {
            users[i].contact = req.body.contact;
        }
        if (req.body.photoUrl != undefined) {
            users[i].photoUrl = req.body.photoUrl;
        }



        res.send("Successfully Updated User");
    }

}

module.exports = { getAllUsers, getRandomUser, saveAUser, deleteAUser, updateAUser };