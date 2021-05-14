module.exports = {
    //Trường hợp có nhiều documents (Array) sử dụng cho list
    mutile_mongooseObject: function(mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    //Trường hợp chỉ có 1 documents (sử dụng cho trang chi tiết)
    mongooseObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;

    }
}