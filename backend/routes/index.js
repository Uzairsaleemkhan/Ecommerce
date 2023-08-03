const express = require("express");


const router = express.Router()

router.get("/test",(req,res)=>{
    res.json("Just testing!")
})



// Add user to the store
router.post("/register")

//Login a user into the store
router.get("/login")

//Logout a user from the store
router.post("/logout")

//refresh the token
router.get("/refresh")

// Get All the products
router.get("/product/all");

// Get to the Product page particular
router.get("/product/:prodId")

//Add product to the store
router.post("/product")

//Delete product from the store
router.delete("/product");

//Update product on the store
router.put("/product/:prodId")

// Get the cart items
router.get("/cart")

//Add product to the cart
router.post("/cart")

//Remove product from the cart
router.delete("/cart/:id")

//Delete cart item by count
router.post("/cart/sub/:id")

//Add cart item by count
router.put("/cart/add/:id")

// order
router.post("/order")

module.exports= router


