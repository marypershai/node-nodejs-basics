import * as fs from 'node:fs/promises';
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, `/files`);
const folderCopyPath = path.join(__dirname, `/files_copy`);

const errorMessage = 'FS operation failed';

const copy = async () => {
    try {
        await fs.mkdir(folderCopyPath);
        const files = await fs.readdir(folderPath);
        files.map(async file => {
            await fs.copyFile(path.join(folderPath, file), path.join(folderCopyPath, file));
        })
        console.log("Done!");
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await copy();
