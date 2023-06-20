import * as fs from 'node:fs';
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, `/files/fileToRead.txt`);

const read = async () => {
    let stream = new fs.createReadStream(filePath, {encoding: 'utf-8'});
    stream.on('readable', function(){
        let data = stream.read();
        process.stdout.write(data);
        stream.close();
    });
};

await read();