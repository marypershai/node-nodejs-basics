import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, `/files/script.js`);

const spawnChildProcess = async (args) => {

    spawn('node', [filePath, ...args], {
        stdio: [process.stdin, process.stdout, 'ipc'],
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 12]);