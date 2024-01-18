/**
 * A list of public routes
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * A list of routes used for authentication
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "auth/register"];

/**
 * The prefix for API authentication routes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default route to redirect after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";

/**
 * Login path
 * @type {string}
 */
export const LOGIN_PATH = "/auth/login";
