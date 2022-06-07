// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
  apps: [
    {
      name: 'api_server',
      script: path.resolve(__dirname, 'dist/index.mjs'),
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
      },
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
};
