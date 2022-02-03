const express = require('express');
const router = express.Router();

const AddressI = require('./models/address');
const PersonI = require('./models/person');
const req = require('express/lib/request');

// Person

router.get('/person', async (request, response) => {  // fetch
    const data = await PersonI.find();
    response.send(data);
});

router.post('/person', async (request, response) => {    // insert
    const person = new PersonI(request.body)
    await person.save();
    response.send(person);
})

router.patch('/person/:id', async (request, response) => {    // update
    const _id = request.params.id;
    const person = await PersonI.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(person);
})

router.delete('/person/:id', async (request, response) => {   // delete
    try{
        const _id = request.params.id;
        const person = await PersonI.findByIdAndDelete(_id);
        response.send(person);
    }catch (e){
        response.send(e);
    }
})
// --------

// Address
router.get('/address', async (request, response) => {  // fetch
    const data = await AddressI.find();
    response.send(data);
});

router.post('/address', async (request, response) => {    // insert
    const address = new AddressI(request.body)
    address.save();
    response.send(address);
})

router.patch('/address/:id', async (request, response) => {    // update
    const _id = request.params.id;
    const address = await AddressI.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(address);
})

router.delete('/address/:id', async (request, response) => {
    const _id = request.params.id;
    const address = await AddressI.findByIdAndDelete(_id);
    response.send(address);
})
module.exports = router;