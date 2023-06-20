import * as fs from 'node:fs/promises';
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, `/files`);
const fileName = 'fileToRead.txt';

const errorMessage = 'FS operation failed';

const read = async () => {
    try {
        const content = await fs.readFile(path.join(filePath, fileName), { encoding: 'utf8' });
        console.log(content);
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await read();