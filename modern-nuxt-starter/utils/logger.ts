/**
 * A simple logger utility that only logs in development mode
 * 
 * Example usage:
 * ```
 * import logger from '~/utils/logger';
 * 
 * // Only logs in development or when DEBUG_MODE=true
 * logger.debug('Debug message', someObject);
 * logger.info('Info message');
 * logger.warn('Warning message');
 * 
 * // Always logs, even in production
 * logger.error('Error message', errorObject);
 * ```
 */

// Determine if we're in debug mode (development environment)
const isDebugMode = () => {
  try {
    // Check for client or server environment
    if (typeof window !== 'undefined') {
      // Client-side check using runtime config
      // @ts-ignore - Nuxt global object
      const config = useRuntimeConfig?.() || {};
      return config.public?.debugMode === 'true';
    } else {
      // Server-side check
      const config = useRuntimeConfig?.() || {};
      return config.debugMode === 'true';
    }
  } catch (e) {
    console.error('Error checking debug mode:', e)
    // Fallback to env check if runtime config is not available
    return process.env.NODE_ENV === 'development';
  }
};

/**
 * Debug logger that only logs in development environment
 * Acts as a drop-in replacement for console.log
 */
export const debug = (...args: any[]) => {
  if (isDebugMode()) {
    console.log('[DEBUG]', ...args);
  }
};

/**
 * Info logger that only logs in development environment
 */
export const info = (...args: any[]) => {
  if (isDebugMode()) {
    console.info('[INFO]', ...args);
  }
};

/**
 * Warning logger that only logs in development environment
 */
export const warn = (...args: any[]) => {
  if (isDebugMode()) {
    console.warn('[WARN]', ...args);
  }
};

/**
 * Error logger that always logs, even in production
 * For critical errors that should always be logged
 */
export const error = (...args: any[]) => {
  console.error('[ERROR]', ...args);
};

// Default export for convenient importing
export default {
  debug,
  info,
  warn,
  error,
  isDebugMode
}; 