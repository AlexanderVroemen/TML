# TML website

Nieuwe, responsive website voor Tennis Management Limburg, gebouwd met Next.js en TypeScript.

## Starten

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`.

## Content

Diensten, verenigingen en nieuws staan centraal in `data/content.ts`. Originele TML- en clubassets staan in `public/images`.

## Productie-aandachtspunten

- Koppel `app/api/contact/route.ts` aan een mailprovider of CRM. De huidige endpoint valideert en bevestigt de demo-inzending maar verstuurt nog geen e-mail.
- Koppel de nieuwsbrief aan het gewenste mailingplatform.
- Laat TML de privacyverklaring juridisch controleren en aanvullen met hosting-, analytics- en formulierproviders.
- Vraag definitieve toestemming voor hergebruik van alle clublogo's en bronfoto's.
