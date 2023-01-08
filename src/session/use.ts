import { setCookie, hasCookie, getCookie, deleteCookie } from 'cookies-next';
import { APIrequest } from 'src/api/recommendations/types';

export interface cookieSession {
    user_name: string;
    next_request: APIrequest;
}

export function setSession(session: cookieSession) {
    const options = {
        sameSite: true,
        // httpOnly: true,
        expires: new Date(Date.now() + 2629743000)
        // secure: true,
    }
    setCookie('x-rekoapi-session', session, options);
}

export function readSession(): cookieSession | number {
    if (hasCookie('x-rekoapi-session')) {
        return JSON.parse(getCookie('x-rekoapi-session') as string) as unknown as cookieSession;
    } else {
        return -1;
    }
}

export function deleteSession() {
    deleteCookie('x-rekoapi-session');
}