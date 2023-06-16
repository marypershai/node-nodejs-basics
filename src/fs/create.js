import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const content = 'I am fresh and young';
const fileName = 'fresh.txt'
const errorMessage = 'FS operation failed';
let filePath = path.join(__dirname, `/files/${fileName}`);

const create = async () => {
    fs.writeFile(filePath, content, { flag: 'ax' }, err => {
        if (err) {
            throw Error(errorMessage);
        }
        console.log(`File ${fileName} was created with text -  ${content}`);
    });
};

await create();