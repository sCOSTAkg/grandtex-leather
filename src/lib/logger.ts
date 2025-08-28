import { createLogger, format, transports } from "winston";
import { existsSync, mkdirSync } from "fs";
import path from "path";

const logDir = path.join(process.cwd(), "logs");
if (!existsSync(logDir)) {
  mkdirSync(logDir, { recursive: true });
}

const logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console({ level: process.env.CONSOLE_LOG_LEVEL || "debug" }),
    new transports.File({
      filename: path.join(logDir, "app.log"),
      level: process.env.FILE_LOG_LEVEL || "info",
    }),
  ],
  exitOnError: false,
});

if (process.env.LOG_REMOTE_URL) {
  const url = new URL(process.env.LOG_REMOTE_URL);
  logger.add(
    new transports.Http({
      level: process.env.REMOTE_LOG_LEVEL || "warn",
      host: url.hostname,
      path: url.pathname,
      port: parseInt(
        url.port || (url.protocol === "https:" ? "443" : "80"),
        10,
      ),
      ssl: url.protocol === "https:",
    }),
  );
}

process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception", { err });
});

process.on("unhandledRejection", (reason) => {
  logger.error("Unhandled Rejection", { reason });
});

export default logger;
