import * as fs from 'node:fs';
import * as path from "path";
import { fileURLToPath } from 'url';
import {stdin, stdout} from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, `/files/fileToWrite.txt`);


const write = async () => {
    const output = fs.createWriteStream(filePath, { encoding: 'utf-8' });
    stdout.write('Please, write something in console\n');
    stdin.on('data', data => {
        output.write(data);
        process.exit();
    });
};

await write();