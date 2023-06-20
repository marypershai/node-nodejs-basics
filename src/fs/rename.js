import * as fs from 'node:fs/promises';
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, `/files`);
const fileName = 'wrongFilename.txt';
const newFileName = 'properFilename.md';

const errorMessage = 'FS operation failed';

const rename = async () => {
    try {
        await fs.rename(path.join(filePath, fileName), path.join(filePath, newFileName))
        console.log("Done!");
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await rename();