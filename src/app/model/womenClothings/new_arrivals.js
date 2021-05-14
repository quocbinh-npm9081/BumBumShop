const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Định nghĩa dạng của dữ liệu
const new_arrivals = new Schema({
    status: { type: String, maxLength: 255, match: /[a-z]/ }, //<- tên không được quá 255 kí tự
    description: { type: String, maxLenght: 600 },
    img: { type: String, maxLenght: 255 },
    cost_new: { type: String },
    cost_last: { type: String },
    slug: { type: String },
    createAt: { type: Date, default: Date.now }, //<- lưu trữ thời gian mà dữ liệu dc tạo
    updateAt: { type: Date, default: Date.now } //<- lưu trữ thời gian mà dữ liệu được cập nhập
});


//export dưới dáng này thì mongoDB sẽ convert sang dạng key: value, 
//Nếu như bạn chưa tạo ra colection thì mongo sẽ tự động tạo colection theo những quy ước ở trên 
module.exports = mongoose.model('new_arrivals', new_arrivals);