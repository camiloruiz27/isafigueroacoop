import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { createContext, useContext, type ReactNode } from 'react';
import en from './dictionaries/en.json';
import es from './dictionaries/es.json';
import { type Dictionary, type Locale } from './types';

const dictionaries: Record<Locale, Dictionary> = { es, en };

interface I18nContextValue {
    locale: Locale;
    dict: Dictionary;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
    const { locale } = usePage<SharedData>().props;
    const dict = dictionaries[locale] ?? dictionaries.es;

    return <I18nContext.Provider value={{ locale, dict }}>{children}</I18nContext.Provider>;
}

function resolvePath(dict: Dictionary, path: string): string {
    const value = path.split('.').reduce<unknown>((acc, key) => {
        if (acc && typeof acc === 'object' && key in acc) {
            return (acc as Record<string, unknown>)[key];
        }

        return undefined;
    }, dict);

    return typeof value === 'string' ? value : path;
}

export function useTranslation() {
    const context = useContext(I18nContext);

    if (!context) {
        throw new Error('useTranslation must be used within a LocaleProvider');
    }

    const { locale, dict } = context;

    return {
        locale,
        dict,
        t: (path: string) => resolvePath(dict, path),
        /** Builds a named route URL, automatically carrying the active locale. */
        r: (name: string, params: Record<string, unknown> = {}) => route(locale === 'en' ? `en.${name}` : name, params),
    };
}
