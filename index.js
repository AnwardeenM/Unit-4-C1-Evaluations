

const express = require("express");

const books = require("books");
const libraries = require("libraries");
const Authors = require("authors");
const authors = require("./authors");


// const req = require("express/lib/request");

const app = get(logger);

app.get(books);
app.get(libraries);
app.get(Authors);

app.use(logger);

// middlewares requires 3 arguments req,res,next()


function logger(req,res,next){

    if(res.Authors == "author"){
        return true
    }
    else{
        return "permission denied"
    }

}


function CheckPermission(req,res,next){
    if(res.Authors == "author"){
        return true;
    }
    else if(res.libraries == 'librarian'){
        return true ;
    }
    else{
        return "Permission Denied";
    }
}



"logger"(req,res,next());

CheckPermission(req,res,next());



