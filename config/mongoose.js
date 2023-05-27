const mongoose = require('mongoose');
async function main(){
    await mongoose.connect('mongodb+srv://mrrranjan8:bhUXXG2VernuG71D@cluster1.z8wdta4.mongodb.net/?retryWrites=true&w=majority');
    console.log("connection Successfull !! ");
}
main().catch(error =>console.log("connection not successfull !!"));