import os from "os";
const getOSDetails = () => {
    try{
        const arch = os.arch();
        console.log(arch);
        const totalMem = os.totalmem();
        console.log(totalMem);
        const freeMem = os.freemem();
        console.log(freeMem/1024^1024);
    } catch(error){
        console.log("Unable to get architecture of os");
    }
}
getOSDetails();