const new_arrivals = require('../model/womenClothings/new_arrivals');
const { mutile_mongooseObject } = require('../../util/mongoose');
const { mongooseObject } = require('../../util/mongoose');
class womenClothingController {
    index(req, res, next) {
        res.render('women-clothing');
    }
    show(req, res, next) {
            new_arrivals.find({ slug: req.params.slug }, function(err, new_arrivals) {
                if (!err) {
                    res.render('products', {
                        new_arrivals: mutile_mongooseObject(new_arrivals)
                    });
                    // res.json(new_arrivals);
                } else {
                    next();
                    res.status(404).json({ error: 'ERROR!!!' });
                }
            })
        }
        // show_a_product(req, res, next) {
        //     new_arrivals.findOne({ slug: req.params.slug }, function(err, new_arrivals) {
        //         if (!err) {
        //             res.render('women/show', {
        //                 new_arrivals: function(new_arrivals) {
        //                     return new_arrivals.map(new_arrivals => new_arrivals.toObject());
        //                 }
        //             })
        //         } else {
        //             next();
        //         }
        //     })
        // }
}

module.exports = new womenClothingController;