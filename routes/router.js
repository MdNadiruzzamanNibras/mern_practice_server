const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
const curduser = require("../modals/userSchema")

router.get("/", (req,res)=>{
    res.send("get connect");
})
// pass=vsXbb9ySjXb3iQoP
router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,country,mobile,lan,state,gender,img} = req.body;

    // if(!name || !email || !age || !mobile || !country || !lan|| !state|| !gender){
    //   return  res.status(404).json("plz fill the data");
    // }
    if(!name)
        {
            return  res.status(404).json("plz fill the name");
        }
        else if(!email){
            return  res.status(404).json("plz fill the e");
        }
        else if(!age){
            return  res.status(404).json("plz fill the a");
        }
        else if(!mobile){
            return  res.status(404).json("plz fill the m");
        }
        else if(!country){
            return  res.status(404).json("plz fill the c");
        }
        else if(!lan){
            return  res.status(404).json("plz fill the l");
        }
        else if(!state){
            return  res.status(404).json("plz fill the s");
        }
        else if(!gender){
            return  res.status(404).json("plz fill the ge")
        }
        else if(!img){
            return  res.status(404).json("plz fill the img")
        }
    try {
        
        const preuser = await curduser.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new curduser({
                name,email,age,country,mobile,lan,state,gender,img
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})

router.get("/getdata", async(req,res)=>{
    try {
        const userdata = await curduser.find()
        res.status(201).json(userdata)
        console.log(userdata);
    } catch (error) {
        res.status(422).json(error);
        
    }
})
router.get("/getuser/:id", async(req,res)=>{
    try {
        const {id} =req.params
        const userIndiviual = await curduser.findById({_id:id});
        res.status(201).json(userIndiviual)
    } catch (error) {
        res.status(404).json(error)
    }
})

router.patch("/updatedata/:id",async(req,res)=>{
    try {
        const {id} =req.params
        const userUpdate = await curduser.findByIdAndUpdate(id,req.body,{
            new:true
        });
        res.status(201).json(userUpdate)
    } catch (error) {
        res.status(422).json(error);
    }
})
// delete user
router.delete("/deleteuser/:id", async(req,res)=>{
    try {
        const {id} =req.params
        const userDelete = await curduser.findByIdAndDelete({_id:id});
        res.status(201).json(userDelete)
    } catch (error) {
        res.status(422).json(error);
    }
})
module.exports = router