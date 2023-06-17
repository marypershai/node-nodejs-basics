import * as fs from 'node:fs';
import {fileURLToPath} from "url";
import path from "path";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, `/files/fileToCompress.txt`);

const compress = async () => {
    const readStream = fs.createReadStream(filePath, 'utf-8');
    const writeStream = fs.createWriteStream(filePath);
    const compressStream = zlib.createGzip();

    readStream
        .pipe(compressStream)
        .pipe(writeStream);
};

await compress();