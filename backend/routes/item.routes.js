let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = './public/';

/// CODE NEEDED SPECIFICALLY FOR UPLOADING IMAGES
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

// Image model ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let Item = require('../models/Item');

router.post('/item-profile', upload.single('profileImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const item = new Item({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        profileImg: url + '/public/' + req.file.filename
    });
    item.save().then(result => {
        res.status(201).json({
            message: "Item registered successfully!",
            itemCreated: {
                _id: result._id,
                profileImg: result.profileImg
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

router.get("/", (req, res, next) => {
    Item.find().then(data => {
        res.status(200).json({
            message: "Item list retrieved successfully!",
            items: data
        });
    });
});

//GARMENT MODEL================================================================
let Garment = require("../models/Garment");

router.post('/save-garment', (req, res, next) => {
    const garment = new Garment({
        _id: new mongoose.Types.ObjectId(),
        brand: req.body.brand,
        color: req.body.color,
        picture: req.body.picture,
        type: req.body.type,
        dateWorn: req.body.dateWorn,
        peopleSeen: req.body.peopleSeen,
        topOrBottom: req.body.topOrBottom,
        email: req.body.email    
    });
    garment.save().then(result => {
        res.status(201).json({
            message: "Garment added to database"
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            })
    })
})




module.exports = router;