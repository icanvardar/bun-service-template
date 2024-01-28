import winston from "winston";

/* -------------------------------------------------------------------------- */
/*                            LOGGER CUSTOMIZATIONS                           */
/* -------------------------------------------------------------------------- */
const format = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    winston.format.colorize({ all: true }),
    winston.format.printf((info) => `${info.timestamp}: ${info.message}`),
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: "logs/error.log",
        level: "error",
    }),
    new winston.transports.File({ filename: "logs/all.log" }),
];

export default winston.createLogger({
    format,
    transports,
});
