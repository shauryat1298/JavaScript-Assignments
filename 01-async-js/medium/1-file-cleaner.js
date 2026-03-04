// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

const filePath = "C:/Users/shaur/Desktop/Learnings/web_devops/artifacts/c.txt";

async function cleanFile() {
    const content = await fs.promises.readFile(filePath, "utf8");
    const cleaned = content.replace(/  +/g, " ");
    await fs.promises.writeFile(filePath, cleaned, "utf8");
    console.log("File cleaned successfully");
}

cleanFile();