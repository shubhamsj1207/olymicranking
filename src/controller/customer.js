
const coustmersdata = require("../models/mens");

 async function savecustomer(data)  {
    console.log('in controller', data);
    const addingcoustmer= new coustmersdata(data);
    const insertCoust=await addingcoustmer.save();
    return insertCoust;
};

module.exports=savecustomer;