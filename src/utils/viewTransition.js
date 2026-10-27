import { flushSync } from "react-dom";

// Runs a navigation inside the browser's View Transition API so shared elements
// (a project's cover image) morph between the work grid and the overview page.
// Falls back to a plain update when the API is missing or motion is reduced.
export const withViewTransition = (update) => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) {
        update();
        return;
    }
    document.startViewTransition(() => flushSync(update));
};

export const coverTransitionName = (project) => `project-cover-${project.id}`;

const WORK_SCROLL_KEY = "work-scroll";

export const rememberWorkScroll = () => {
    try {
        sessionStorage.setItem(WORK_SCROLL_KEY, String(window.scrollY));
    } catch {
        /* storage unavailable: returning will scroll to the work section instead */
    }
};

export const recallWorkScroll = () => {
    try {
        const value = sessionStorage.getItem(WORK_SCROLL_KEY);
        return value === null ? undefined : Number(value);
    } catch {
        return undefined;
    }
};
