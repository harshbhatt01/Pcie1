const express = require('express');
const router = express.Router();

const AddressI = require('./models/address');
const PersonI = require('./models/person');
const req = require('express/lib/request');

// Person routes

//getting all the person's data
router.get('/person', async (request, response) => {  
    const data = await PersonI.find();
    response.send(data);
});

//getting data by is
router.get('/person/:id', async (request, response) => {  
    const _id = request.params.id;
    const data = await PersonI.findById(_id);
    response.send(data);
});

// inserting the data
router.post('/person', async (request, response) => {    
    const person = new PersonI(request.body)
    await person.save();
    response.send(person);
})


//updating the data
router.patch('/person/:id', async (request, response) => {   
    const _id = request.params.id;
    const person = await PersonI.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(person);
})


//deleting the data
router.delete('/person/:id', async (request, response) => {   
    try{
        const _id = request.params.id;
        const person = await PersonI.findByIdAndDelete(_id);
        response.send(person);
    }catch (e){
        response.send(e);
    }
})
// --------

// Address routes

//fetching all address data
router.get('/address', async (request, response) => {  
    const data = await AddressI.find();
    response.send(data);
});


// fetching the data by id
router.get('/address/:id', async (request, response) => {  
    const _id = request.params.id;
    const data = await AddressI.findById(_id);
    response.send(data);
});


//inserting the data
router.post('/address', async (request, response) => {   
    const address = new AddressI(request.body)
    address.save();
    response.send(address);
})

// updating the data
router.patch('/address/:id', async (request, response) => {    
    const _id = request.params.id;
    const address = await AddressI.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(address);
})

//deleting the data
router.delete('/address/:id', async (request, response) => {
    const _id = request.params.id;
    const address = await AddressI.findByIdAndDelete(_id);
    response.send(address);
})
module.exports = router;