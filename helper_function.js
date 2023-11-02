const dns = require("dns");
const fs = require("fs")
const cowsay = require("cowsay")

function getIP(website_name) {
  dns.resolve(website_name, (err, address) => {
    if (err) {
      console.log("Websitename or Url is invalid.");
    } else {
      address.forEach((add, i) => {
        console.log(`IP address is ${i + 1}: ${add}`);
      });
    }
  });
}

function writeToFile(filename, content) {
    fs.writeFileSync(filename,content);
    console.log(content);
}

function readAFile(filename) {
    try{
        const fileContent = fs.readFileSync(filename, 'utf-8');
    console.log(`Conetnt of the ${filename}: ${fileContent}`)
    }catch(err){
        console.log(`No such file or directory found.`);
    }
}

function deleteAFile(filename) {
    try{
        fs.unlinkSync(filename);
        console.log(`File ${filename} is deleted.`)
    }catch(err){
        console.log(`No such file or directory found.`);
    }
}

function makeCowSay(content) {
    try{
        const cowSaid = cowsay.say({text:content});
        console.log(cowSaid)
    }catch(err){
        console.log(`Error in cowsay operation ${err.message}`)
    }
}

module.exports = { getIP, writeToFile, readAFile, deleteAFile, makeCowSay };
