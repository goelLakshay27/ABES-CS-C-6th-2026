import { stat } from "fs";
import fs from "fs/promises";

const status = async (path) => {
    try{
        const stats = await fs.stat(path);
        console.log(stats);
        console.log(stats.isFile());
        console.log(stats.isDirectory);        
    } catch(error){
        console.log("Unable to check status");
    }
}
//status("../day_02")
//status("../dir.js")