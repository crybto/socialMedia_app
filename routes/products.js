const express = require("express")
const router = express.Router()

const { getAllProduct, getAllProductStatic } = require("../controllers/products")

router.route("/").get(getAllProduct)