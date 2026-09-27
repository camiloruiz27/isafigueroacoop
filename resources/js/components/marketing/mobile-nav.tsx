import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';

const NAV_ITEMS = [
    { key: 'home', route: 'home' },
    { key: 'about', route: 'about' },
    { key: 'speaking', route: 'speaking.index' },
    { key: 'press', route: 'press' },
    { key: 'gallery', route: 'gallery' },
    { key: 'blog', route: 'blog.index' },
    { key: 'contact', route: 'contact.create' },
] as const;

export function MobileNav() {
    const { t, r } = useTranslation();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label={t('nav.menu')}>
                    <Menu className="size-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full flex-col gap-1 sm:max-w-xs">
                <SheetTitle className="sr-only">{t('nav.menu')}</SheetTitle>
                {NAV_ITEMS.map((item) => (
                    <SheetClose asChild key={item.key}>
                        <Link href={r(item.route)} className="hover:bg-muted rounded-md px-3 py-3 text-base font-medium">
                            {t(`nav.${item.key}`)}
                        </Link>
                    </SheetClose>
                ))}
            </SheetContent>
        </Sheet>
    );
}
