import * as fs from 'node:fs/promises';
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, `/files`);

const errorMessage = 'FS operation failed';

const list = async () => {
    try {
        const files = await fs.readdir(folderPath);
        files.map(async file => {
            let extension = path.extname(file);
            let fileName = path.basename(file,extension);
            console.log(fileName + extension);
        })
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await list();