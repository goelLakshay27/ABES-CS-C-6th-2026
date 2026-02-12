// import fs from "fs/promises";
// // const removeDir = async(path)=>{
// //     try {
// //        await fs.rmdir(path);
// //        console.log("dir has been removed");       
// //     } catch (error) {
// //         console.log("unable to remove");       
// //     }
// // }
// // removeDir("../day_06");

// const readDir = async(path)=>{
//     try {
//        const data = await fs.readdir(path);
//        console.log(data);       
//     } catch (error) {
//         console.log("unable to read");       
//     }
// }
// readDir("../day_02");


// // const makeDir = async(path)=>{
// //    try {
// //     await fs.mkdir(path);
// //     console.log("Directory has been created successfully.");    
// //    } catch (error) {
// //     console.log("unable to make dir");   
// //    }
// // }
// // createDirectory("./m"yFolder);
const fs = require("fs");

const dirPath = "./myDirectory";


const createDir = () => {
    try {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
            console.log("Directory created successfully.");
        } else {
            console.log("Directory already exists.");
        }
    } catch (error) {
        console.log("Error creating directory:", error.message);
    }
};


const readDir = () => {
    try {
        if (fs.existsSync(dirPath)) {
            const files = fs.readdirSync(dirPath);
            console.log("Directory contents:", files);
        } else {
            console.log("Directory does not exist.");
        }
    } catch (error) {
        console.log("Error reading directory:", error.message);
    }
};


const removeDir = () => {
    try {
        if (fs.existsSync(dirPath)) {
            fs.rmdirSync(dirPath);
            console.log("Directory removed successfully.");
        } else {
            console.log("Directory does not exist.");
        }
    } catch (error) {
        console.log("Error removing directory:", error.message);
    }
};

// Call Functions
createDir();
readDir();
removeDir();