function openDir() {
    var path = require('path');
    let testFolder = path.resolve(__dirname, "test_folder");
    // let fs = require('fs');
    // fs.readdir(testFolder, (err, files) => {
    //     fs.readFileSync(files)
    // });
    const readdirDir = testFolder.path;


}


// function getData(files) {
//     console.log(files);
// }

openDir()
