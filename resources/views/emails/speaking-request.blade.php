<x-mail::message>
# Nueva solicitud de charla

**Nombre:** {{ $submission->name }}
**Email:** {{ $submission->email }}
@if($submission->phone)
**Teléfono:** {{ $submission->phone }}
@endif
@if($submission->organization)
**Organización:** {{ $submission->organization }}
@endif
@if($submission->event_type)
**Tipo de evento:** {{ $submission->event_type }}
@endif
@if($submission->event_date)
**Fecha del evento:** {{ $submission->event_date->format('d/m/Y') }}
@endif
@if($submission->topic)
**Tema de interés:** {{ $submission->topic }}
@endif

**Mensaje:**

{{ $submission->message }}

<x-mail::button :url="url('/admin/contact-submissions/'.$submission->id.'/edit')">
Ver en el panel
</x-mail::button>

Gracias,<br>
{{ config('app.name') }}
</x-mail::message>
