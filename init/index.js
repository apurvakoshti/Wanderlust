const mongoose= require("mongoose");
const initData = require("./data.js");
const Listing= require("../models/listing.js");

//connecting database 
const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";
//to call the async function
main().then(() => {
    console.log("connected to DB");

}).catch((err) =>{
    console.log(err);

});
async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB= async () =>{
    //to clean all data present in the datatype
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj) => ({...obj, owner:"65e37c3cd9a6e6613cac012d"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();