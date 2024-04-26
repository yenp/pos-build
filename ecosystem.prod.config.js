const path = require('path');
const dotenv = require('dotenv');

const loadEnv = (envFileName) => {
    const envFilePath = path.resolve(__dirname, envFileName);
    const result = dotenv.config({ path: envFilePath });

    if (result.error) {
        throw result.error;
    }
    console.log('result.parsed', result.parsed)
    return result.parsed;
};

module.exports = {
    apps: [
        {
            name: 'backend-api',
            script: 'dist/main.js',
            watch: true,
            instances: 4,
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'production',
                ...loadEnv('.env.production'),
            },
        }
    ],
};
