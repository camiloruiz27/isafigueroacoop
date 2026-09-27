import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { useForm } from '@inertiajs/react';
import { type FormEventHandler } from 'react';
import { toast } from 'sonner';

export function NewsletterForm({ source = 'footer' }: { source?: string }) {
    const { t, r } = useTranslation();
    const { data, setData, post, processing, reset, errors } = useForm({
        email: '',
        name: '',
        source,
    });

    const submit: FormEventHandler = (event) => {
        event.preventDefault();

        post(r('newsletter.store'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success(t('footer.newsletter.success'));
                reset();
            },
            onError: () => toast.error(t('footer.newsletter.error')),
        });
    };

    return (
        <form onSubmit={submit} className="flex w-full max-w-sm flex-col gap-2 sm:flex-row">
            <Input
                type="email"
                required
                value={data.email}
                onChange={(event) => setData('email', event.target.value)}
                placeholder={t('footer.newsletter.placeholder')}
                aria-invalid={Boolean(errors.email)}
                className="bg-background"
            />
            <Button type="submit" disabled={processing} variant="brand-secondary">
                {t('footer.newsletter.cta')}
            </Button>
        </form>
    );
}
