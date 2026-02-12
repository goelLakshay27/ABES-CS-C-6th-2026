import fs from "fs/promises"
const writeFile = async(path,data) => {
    try {
        fs.writeFile(path,data);
        console.log("Data has been written successfully");
    } catch(error){
        console.log("unable to write");
    }
}
writeFile("./example.txt","This data has been written through async fun of us")