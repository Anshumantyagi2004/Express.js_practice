import express from 'express';
const app = express();
const port = 8000;
import cors from 'cors';
app.use(cors());
/* import path from "path";
// import { fileURLToPath } from 'url';
// const dir = fileURLToPath(import.meta.url);
// const dirname = path.dirname(dir);
// const file = path.join(dirname, "/index.html");

  app.get("/", (req, res) => {
    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.params)
    // console.log(req.headers)
    // console.log(req.body)
    // console.log(req.query)

    // res.send("Hello is this home page");
    res.sendFile(file);
    //  res.render();
    //  res.redirect();
    //  res.cookie();
    //  res.status();
    //  res.json();
})

app.get("/about/:id", (req, res) => {
    console.log(req.params)
    res.send("this is about");
})

app.get("/product", (req, res) => {
    // res.sendFile(`C:/Users/pc/OneDrive/Desktop/Back-end/Server/download.jpeg`);
    res.send(` <a href="http://localhost:8000">home</a>`)
})

app.get("/dashboard", (req, res) => {
    res.send(`hello world <br> <input type='text'/>`)
})  */

/*  import fs from "fs";
const file = fs.readFileSync("./index.html", "utf-8");

app.get("/", (req, res) => {
    const data = file.replace("**data**", "hello").replace("**data1**", "byee");
    res.send(data);
})  */

// console.log(process.argv);

/*  import fs from 'fs';
function fileOperation() {
    // import path from 'path';    
    // import {fileURLToPath} from 'url'; 

    // const dir =  fileURLToPath(import.meta.url); 
    // const file =  path.dirname(dir); 
    // const root =  path.join(file, "./"); 
    const input0 = process.argv[0];
    const input1 = process.argv[1];
    const input2 = process.argv[2];
    const input3 = process.argv[3];
    const input4 = process.argv[4];

    if (input2 === 'add') {
        fs.writeFileSync(input3, input4)
    }

    if (input2 === "remove") {
        fs.unlinkSync(input3)
    }

    console.log(process.argv)

}
fileOperation()  */

// types of routes (public r, private r)
// route level middleware
// global middleware

/* const authMiddleware = (req, res, next) => {
    const auth = req.query.name;
    if (auth === "admin") {
        next()
    }
    else {
        return res.send("you are not admin")
    }
} 
    // app.use(authMiddleware) //to secure all routes  */

/* import fs from 'fs';
const stream = fs.createWriteStream("./logs/logs.txt", {flags : 'a'});

const logger = (req, res, next)=>{
    if(req.method){
        const currentDate = new Date().toISOString();
        const method = req.method;
        const url = req.url;
        const date = `current date is ${currentDate}`
        console.log(method, url, date);
        stream.write(`${method} ${url} ${date}\n`);
        
        next() 
    }
} 
    app.use(logger) // to log all requests  */

/* import fs from 'fs';
import morgan from 'morgan';
const stream = fs.createWriteStream("./logs/logs.txt", { flags: 'a' });

app.use(morgan("dev", { stream: stream })); */ // to log all requests

/* app.set("view engine", "ejs");

app.use("/public",express.static("public"));

app.get("/", (req, res) => {
    res.send("home")
})

app.get("/about", (req, res) => {
    res.send("about")
})

app.get("/product", (req, res) => {
    res.send("product")
})

app.all("*", (req, res) => {
    //res.send("404 not found")
    res.render("index")
}) */

// middleware to send urlencoding and json

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// connection with db 
import db from './db.js';
db();

/* // model table
import { model, Schema } from 'mongoose';
const schema = new Schema({
    name: String,
    age: String,
    email: String
}, { timestamps: true });

const userModel = model("user", schema);

app.post("/user", async (req, res) => {
    const { name, age, email } = req.body;
    try {
        const user = new userModel({ name, age, email });
        await user.save();
        // console.log(name,age,email)
        return res.status(201).send("data sent")
    } catch (e) {
        console.log(e)
        return res.status(500).send("error")
    }

})

app.get("/getuser", async (req, res) => {
    try {
        const userdata = await userModel.find().select('-age')
        return res.status(200).json({ message: "sucess", data: userdata })
    }
    catch (e) {
        return res.send("error")
    }
})

app.delete("/deleteuser", async (req, res) => {
    try {
        const deleteAll = await userModel.deleteMany()
        if (deleteAll)
            return res.status(200).json({ message: "data deleted" })
    } catch (e) {
        return res.send(e)
    }
})

app.delete("/deleteone/:id", async (req, res) => {
    const { id } = req.params
    // console.log(id)
    try {
        const deleteOne = await userModel.deleteOne({ _id: id })
        if (deleteOne)
            return res.status(200).json({ message: "user deleted" })
    } catch (e) {
        return res.send(e)
    }
})

app.put("/update", async (req, res) => {
    // const {id} = req.params
    // console.log(id)
    const { name, age, email } = req.body
    try {
        await userModel.findByIdAndUpdate("67836d07686576c805fa9650", {
            name: name,
            age: age,        // to better way
            email: email
        })
        return res.send("updated")
    } catch (e) {
        return res.send(e)
    }
}) */


/*  // multer    
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        return cb(null, './public')
    },
    filename: (req, file, cb) => {
        return cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

import { model, Schema } from 'mongoose';
const schema = new Schema({
    name: String,
    age: String,
    email: String,
    profile: String
}, { timestamps: true });

const userModel = model("user", schema);

app.post("/user", upload.single("profile"), async (req, res) => {
    const { name, age, email } = req.body;
    const profile = req.file.filename;
    try {
        const user = new userModel({ name, age, email, profile });
        await user.save();
        // console.log(name,age,email)
        return res.status(201).send("data sent")
    } catch (e) {
        console.log(e)
        return res.status(500).send("error")
    }

})

// http://localhost:8000/img/pp.png
app.use("/img", express.static("./public"))  */

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})