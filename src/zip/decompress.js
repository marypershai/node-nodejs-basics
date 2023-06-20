import * as fs from 'node:fs';
import {fileURLToPath} from "url";
import path from "path";
import zlib from "zlib";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, `/files/fileToCompress.txt`);
const fileToDecompressPath = path.join(__dirname, `/files/archive.gz`);

const decompress = async () => {
    const readStream = fs.createReadStream(fileToDecompressPath);
    const writeStream = fs.createWriteStream(filePath);
    const decompressStream = zlib.createGunzip();

    readStream
        .pipe(decompressStream)
        .pipe(writeStream);
};

await decompress();