const express=require("express")
const router=express.Router();

router.get("/foodData",(req,res)=>{
    try{
        // console.log(global.food_items)
        // console.log([global.foodCategory,global.food_items]);
        res.send([global.foodCategory,global.food_items])
    }
    catch (error){
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports=router