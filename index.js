const helpers = require("./helper_function")

const args = process.argv.slice(2);

if(args.length < 2){
    console.log("Usage: node index.js <operation> <domian>");
    process.exit(1);
}

const operation = args[0];
const domain = args[1];

if(operation === 'gip'){
    helpers.getIP(domain)
}else if(operation === "wf"){
    if(args.length < 3){
        console.log("Usage: node index.js write <filename> <content>")
        process.exit(1)
    }
    const fileName = args[1];
    const content = args.slice(2).join(' ');
    helpers.writeToFile(fileName,content)
}