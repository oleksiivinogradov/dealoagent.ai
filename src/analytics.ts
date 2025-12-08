
declare global {
    interface Window {
        gtag: (command: string, ...args: any[]) => void;
        dataLayer: any[];
    }
}

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    }
};

export const navigateToApp = (action: 'sign_in' | 'register') => {
    trackEvent('click_cta', {
        event_category: 'navigation',
        event_label: action,
        destination: 'https://app.dealoagent.ai'
    });
    window.open('https://app.dealoagent.ai', '_blank');
};
