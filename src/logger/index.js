import { format, createLogger, transports } from 'winston';
import fs from 'fs';
import path from 'path';

const { timestamp, combine, prettyPrint } = format;
const logsDir = 'logs';

// create logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

class Logger {
  constructor() {
    this.logger = createLogger({
      format: combine(timestamp(), prettyPrint()),
      transports: [
        new transports.File({ filename: path.join(logsDir, 'error.log'), level: 'error' }),
        new transports.File({ filename: path.join(logsDir, 'combined.log') })
      ]
    });
  }

  log(level, msg, ...meta) {
    this.logger.log(level, msg, ...meta);
  }
}

export default new Logger();
