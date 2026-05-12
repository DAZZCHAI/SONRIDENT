# OUTPUT SEO SPECIALIST — SONRIDENT

## 1. KEYWORDS OBJETIVO

```
Keyword principal: ortodoncia en León Guanajuato
Intención: transaccional (búsqueda de tratamiento con disposición a pagar)

Keywords secundarias:
  - Invisalign León
  - brackets cerámicos León
  - blanqueamiento dental León
  - ortodoncia sin intereses
  - dentista en León Guanajuato

Long-tail local:
  - "ortodoncia en Jardines del Moral León"
  - "brackets metálicos en León sin intereses"
  - "invisalign en León Guanajuato precio"
  - "blanqueamiento dental profesional León"
  - "consulta dental gratis León"

Variaciones de marca + servicio:
  - "Sonrident León"
  - "Dr. Ibáñez ortodoncista León"
```

---

## 2. META TAGS — Listos para `<head>`

### Página principal (index.html)

```html
<!-- SEO Base -->
<title>Ortodoncia en León Guanajuato — Sonrident | Desde $12,500</title>
<meta name="description" content="Ortodoncia desde $12,500 con 18 meses sin intereses en León. Escáner 3D, garantía escrita y consulta de diagnóstico gratis. Dr. Ibáñez · 4.9★ Google · 312 reseñas.">
<meta name="keywords" content="ortodoncia León, Invisalign León, brackets cerámicos, blanqueamiento dental, dentista León Guanajuato">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<meta name="language" content="es-MX">

<!-- Canonical -->
<link rel="canonical" href="https://sonrident-leon.com/">

<!-- Viewport & Charset -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Open Graph / Social -->
<meta property="og:type" content="business.business">
<meta property="og:title" content="Sonrident — Ortodoncia y Estética Dental en León">
<meta property="og:description" content="Sonríe con confianza. Ortodoncia desde $12,500, 18 meses sin intereses, consulta de diagnóstico gratis. Escáner 3D, garantía por escrito, Dr. Ibáñez atendiendo personalmente.">
<meta property="og:url" content="https://sonrident-leon.com/">
<meta property="og:image" content="https://sonrident-leon.com/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="es_MX">
<meta property="og:site_name" content="Sonrident Ortodoncia León">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ortodoncia en León — Sonrident">
<meta name="twitter:description" content="Sonríe con confianza. Desde $12,500, 18 meses sin intereses, consulta gratis. Escáner 3D y garantía escrita incluida.">
<meta name="twitter:image" content="https://sonrident-leon.com/og-image.jpg">

<!-- Additional Meta -->
<meta name="author" content="Sonrident — Ortodoncia y Estética Dental">
<meta name="theme-color" content="#0B2A4A">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">

<!-- Google Site Verification (placeholder — actualizar con token real) -->
<meta name="google-site-verification" content="[TOKEN_AQUI]">

<!-- Preconnect para fuentes y scripts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://wa.me">
```

---

## 3. SCHEMA JSON-LD — Listo para `<head>`

Insertar como `<script type="application/ld+json">` en la sección `<head>`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://sonrident-leon.com/#organization",
      "name": "Sonrident — Ortodoncia y Estética Dental",
      "url": "https://sonrident-leon.com/",
      "description": "Clínica de ortodoncia y estética dental en León, Guanajuato. 23 años de experiencia con tecnología de escáner 3D, garantía escrita y pago en 18 meses sin intereses.",
      "image": {
        "@type": "ImageObject",
        "url": "https://sonrident-leon.com/og-image.jpg",
        "width": 1200,
        "height": 630
      },
      "logo": {
        "@type": "ImageObject",
        "url": "https://sonrident-leon.com/logo.png",
        "width": 300,
        "height": 300
      },
      "telephone": "+524773128890",
      "email": "contacto@sonrident-leon.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jardines del Moral",
        "addressLocality": "León",
        "addressRegion": "Guanajuato",
        "postalCode": "37000",
        "addressCountry": "MX"
      },
      "areaServed": {
        "@type": "City",
        "name": "León"
      },
      "openingHours": [
        "Mo-Fr 09:00-20:00",
        "Sa 09:00-14:00"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "312",
        "bestRating": "5",
        "worstRating": "1",
        "ratingExplanation": "Calificación verificada en Google Reviews"
      },
      "priceRange": "$",
      "sameAs": [],
      "founder": {
        "@type": "Person",
        "name": "Dr. Ibáñez"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Odontológicos",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ortodoncia Metálica Tradicional",
              "description": "Alineación dental con brackets metálicos resistentes."
            },
            "priceCurrency": "MXN",
            "price": "12500",
            "eligibleQuantity": {
              "@type": "PriceSpecification",
              "priceCurrency": "MXN",
              "price": "12500",
              "eligibleTransactionVolume": {
                "@type": "PriceSpecification",
                "priceCurrency": "MXN",
                "price": "12500"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ortodoncia Estética — Brackets Cerámicos",
              "description": "Ortodoncia invisible con brackets del color de los dientes."
            },
            "priceCurrency": "MXN",
            "price": "16000"