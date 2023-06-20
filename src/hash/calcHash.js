import * as fs from 'node:fs/promises';
import * as path from "path";
import { fileURLToPath } from 'url';
import { createHash } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, `/files/fileToCalculateHashFor.txt`);

const calculateHash = async () => {
    const content = await fs.readFile(filePath, 'utf8');
    const hash = createHash('sha256').update(content).digest('hex');
    console.log(hash);
};

await calculateHash();