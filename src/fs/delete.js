import * as fs from 'node:fs/promises';
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, `/files`);
const fileName = 'fileToRemove.txt';

const errorMessage = 'FS operation failed';

const remove = async () => {
    try {
        await fs.unlink(path.join(filePath, fileName));
        console.log("Done!");
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await remove();