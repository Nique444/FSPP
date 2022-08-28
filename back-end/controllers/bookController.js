const express = require("express");
const books = express.Router();

//INDEX
books.get("/", (req, res) => {

})

//SHOW
books.get("/:id", (req, res) => {
    
})

//CREATE
books.post("/", (req, res) => {
    
})

//DELETE
books.delete("/:id", (req, res) => {
    
})

//UPDATE
books.put("/:id", (req, res) => {
    
})

module.exports = books;