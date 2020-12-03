import nodeFs from "fs";
import bluebird from "bluebird";

const fs = bluebird.promisifyAll(nodeFs);

export const mkdirP = async (directory) => {
    try {
        return await fs.mkdirAsync(directory);
    } catch (error) {
        if (error.code != "EEXIST") {
            throw error;
        }
    }
};
