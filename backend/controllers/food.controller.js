import foodModel from "../models/food.model.js"
import fs from "fs"


//@desc Add Food Item
//@route POST /api/food/add
//@access Public
const addFood = async(req, res) => {
    let image_filename = `${req.file.filename}`

    try {
        const food= new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    })

        await food.save()
        res.status(201).json({success:true, message:"Food Added Successfully"})

    } catch (error) {
        console.error("Error adding food:", error)
        res.json({success:false, message:"Error adding food"})
    }
}


//@desc List All Foods
//@route GET /api/food/list
//@access Public
const listFood = async(req, res) => {
    try {
        const foods = await foodModel.find({})
        res.status(200).json({success:true, data:foods})
    } catch (error) {
        console.error("Error listing foods:", error)
        res.status(500).json({success:false, message:"Error listing foods"})
    }
}


//@desc Remove Food Item
//@route DELETE /api/food/remove/:id
//@access Public
const removeFood = async(req, res) =>{
    try {
        const {id} = req.params
        const deletedFood = await foodModel.findById(id)

        if( !deletedFood ) return res.status(404).json({success:false, message:"Food Item Not Found"})

        //remove image from uploads folder
        fs.unlink(`uploads/${deletedFood.image}`, () => {})
        //remove food item from database
        await foodModel.findByIdAndDelete(id)

        res.status(200).json({success:true, message:"Food Item Removed Successfully"})

    } catch (error) {
        console.error("Error removing food item:", error)
        res.status(500).json({success:false, message:"Error removing food item"})
    }
}



export { addFood, listFood, removeFood }