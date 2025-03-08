import * as Sentry from "@sentry/react";
import { SENTRY_DNS } from "@/utils/constants";

Sentry.init({
    dsn: SENTRY_DNS
});

const COLORS = {
    log: "color: white; background: #007acc; padding: 2px 4px; border-radius: 3px;",
    warn: "color: black; background: #ffcc00; padding: 2px 4px; border-radius: 3px;",
    error: "color: white; background: #cc0000; padding: 2px 4px; border-radius: 3px;",
  };

type LogMethod = (...args: unknown[]) => void;

interface Logger {
    log: LogMethod;
    warn: LogMethod;
    error: (error: unknown, ...args: unknown[]) => void;
}

const logger: Logger = {
    log: (...args) => console.info("%c[LOG]:", COLORS.log, ...args),
    warn: (...args) => console.warn("%c[WARM]:", COLORS.warn, ...args),
    error: (error, ...args) => {
        console.error("%c[ERROR]:", COLORS.error, error, ...args);
        Sentry.captureException(error); // Enviar errores a Sentry
    },
};

export default logger;
