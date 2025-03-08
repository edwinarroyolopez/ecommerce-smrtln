import * as Sentry from "@sentry/react";
import log from 'loglevel';
import { SENTRY_DNS } from "@/utils/constants";


Sentry.init({
    dsn: SENTRY_DNS
});

type LogMethod = (...args: unknown[]) => void;

interface Logger {
    log: LogMethod;
    warn: LogMethod;
    error: (error: unknown, ...args: unknown[]) => void;
}

const logger: Logger = {
    log: (...args) => log.info("[LOG]:", ...args),
    warn: (...args) => log.warn("[WARM]:", ...args),
    error: (error, ...args) => {
        log.error("[ERROR]:", error, ...args);
        Sentry.captureException(error); // Enviar errores a Sentry
    },
};

export default logger;
