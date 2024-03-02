const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const School = require('./models/school');
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

console.log('Connected to MongoDB');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
// list all schools
app.get('/api/schools', async (req, res) => {
    try{
        const schools = await School.find();
        res.status(200).send(schools);
    } catch (err) {
        res.status(500).send(err);
    }
}
);

// find a school by id
app.get('/api/school', async (req, res) => {
    try{
        console.log(req.query.id);
        const school = await School.findOne({ id: req.query.id });
        res.status(200).send(school);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}
);

// create a school
app.post('/api/create', (req, res) => {
    req.body.id = new mongoose.Types.ObjectId();
    const school = new School(req.body);
    school.save().then(() => {
        res.status(200).send(school);
    }).catch((err) => {
        console.log(err);
        res.status(500).send();
    });
});

// update a school
app.put('/api/edit', (req, res) => {
    School.findOneAndUpdate
    ({ id: req.body.id }, req.body).then((school) => {
        res.status(200).send(school);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// delete a school
app.delete('/api/delete', (req, res) => {
    School.findOneAndDelete
    ({ id: req.body.id }).then ((school) => {
        res.status(200).send(school);
    }).catch((err) => {
        res.status(500).send(err);
    });
});
if (process.env.NODE_ENV == "docker_prod") {
    const reactPath = path.join(__dirname, '../build');

    app.use(express.static(reactPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(reactPath, 'index.html'));
    });
} else {
    const reactPath = path.join(__dirname, '../project-lzxky/build');

    app.use(express.static(reactPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(reactPath, 'index.html'));
    }); 
}
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

