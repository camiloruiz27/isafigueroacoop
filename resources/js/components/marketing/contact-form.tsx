import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from '@/lib/i18n/i18n-context';
import { type SpeakingTopicItem } from '@/types/marketing';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { type FormEventHandler } from 'react';
import { toast } from 'sonner';

interface ContactFormProps {
    speakingTopics: SpeakingTopicItem[];
    defaultTopic?: string | null;
}

export function ContactForm({ speakingTopics, defaultTopic }: ContactFormProps) {
    const { t, r } = useTranslation();
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        organization: '',
        event_type: '',
        event_date: '',
        topic: defaultTopic ?? '',
        message: '',
    });

    const submit: FormEventHandler = (event) => {
        event.preventDefault();

        post(r('contact.store'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success(t('contact.form.success'));
                reset();
            },
            onError: () => toast.error(t('contact.form.error')),
        });
    };

    return (
        <form onSubmit={submit} className="grid gap-6 sm:grid-cols-2">
            <div className="grid gap-2">
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <Input id="name" required value={data.name} onChange={(e) => setData('name', e.target.value)} disabled={processing} />
                <InputError message={errors.name} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <Input id="email" type="email" required value={data.email} onChange={(e) => setData('email', e.target.value)} disabled={processing} />
                <InputError message={errors.email} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="phone">{t('contact.form.phone')}</Label>
                <Input id="phone" value={data.phone} onChange={(e) => setData('phone', e.target.value)} disabled={processing} />
                <InputError message={errors.phone} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="organization">{t('contact.form.organization')}</Label>
                <Input id="organization" value={data.organization} onChange={(e) => setData('organization', e.target.value)} disabled={processing} />
                <InputError message={errors.organization} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="event_type">{t('contact.form.eventType')}</Label>
                <Input id="event_type" value={data.event_type} onChange={(e) => setData('event_type', e.target.value)} disabled={processing} />
                <InputError message={errors.event_type} />
            </div>

            <div className="grid gap-2">
                <Label htmlFor="event_date">{t('contact.form.eventDate')}</Label>
                <Input
                    id="event_date"
                    type="date"
                    value={data.event_date}
                    onChange={(e) => setData('event_date', e.target.value)}
                    disabled={processing}
                />
                <InputError message={errors.event_date} />
            </div>

            {speakingTopics.length > 0 && (
                <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="topic">{t('contact.form.topic')}</Label>
                    <Select value={data.topic || undefined} onValueChange={(value) => setData('topic', value)} disabled={processing}>
                        <SelectTrigger id="topic">
                            <SelectValue placeholder={t('contact.form.topicPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent>
                            {speakingTopics.map((topic) => (
                                <SelectItem key={topic.slug} value={topic.title}>
                                    {topic.title}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.topic} />
                </div>
            )}

            <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="message">{t('contact.form.message')}</Label>
                <Textarea
                    id="message"
                    required
                    rows={5}
                    value={data.message}
                    onChange={(e) => setData('message', e.target.value)}
                    disabled={processing}
                />
                <InputError message={errors.message} />
            </div>

            <Button type="submit" size="xl" disabled={processing} className="sm:col-span-2">
                {processing && <LoaderCircle className="size-4 animate-spin" />}
                {processing ? t('contact.form.submitting') : t('contact.form.submit')}
            </Button>
        </form>
    );
}
