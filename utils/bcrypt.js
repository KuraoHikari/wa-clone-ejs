const {
 hash,
 compare,
} = require("bcrypt");

const salt = 10;

async function generateHash(password) {
 return await hash(password, salt);
}

async function compareHash(
 password,
 hash
) {
 return await compare(password, hash);
}

module.exports = {
 generateHash,
 compareHash,
};
