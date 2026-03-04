// ## Write to a file

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs");

function afterWriteFile(err){
    if (err) throw err;
    console.log("File written successfully");
}

fs.writeFile(
    "C:/Users/shaur/Desktop/Learnings/web_devops/artifacts/c.txt", 
    "My name is Shaurya and let the world look at me build the future of Agentic AI!", 
    afterWriteFile
);
