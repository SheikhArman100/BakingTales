


const {createProduct,
updateProduct,deleteProduct,getProduct,getAllProduct,getPopularProduct,getCakeProduct,getCupcakeProduct,getBrowniesProduct}=require('../Controllers/productController')

const router = require("express").Router();

//CREATE
router.post("/newproduct",createProduct);
//GET ALL PRODUCTS
 router.get("/", getAllProduct);
 //get popular product
 router.get("/popular", getPopularProduct);
 
 //get cake product
 router.get('/cake',getCakeProduct)
 //get cupcake product
 router.get('/cupcake',getCupcakeProduct)
 //get brownies product
 router.get('/brownies',getBrowniesProduct)
 
 //get Single product
 router.get("/:id",getProduct );
 //UPDATE
// router.put("/:id", verifyTokenAndAdmin,updateProduct );

// //DELETE
// router.delete("/:id", verifyTokenAndAdmin,deleteProduct );

// //GET PRODUCT

module.exports = router;