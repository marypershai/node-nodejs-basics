import { Transform } from "stream";

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const reverseData = chunk.toString().split('').reverse().join('');
            process.stdout.write(reverseData);
            callback();
        },
    });
    process.stdin.pipe(transformStream);
};

await transform();