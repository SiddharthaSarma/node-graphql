import { format, createLogger, transports } from 'winston';
const { timestamp, combine, prettyPrint } = format;

class Logger {
  constructor() {
    this.logger = createLogger({
      format: combine(timestamp(), prettyPrint()),
      transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
      ]
    });
  }

  log(level, msg, ...meta) {
    this.logger.log(level, msg, ...meta);
  }
}

export default new Logger();
