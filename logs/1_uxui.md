# Design System y Arquitectura — Sonrident

---

## 1. PALETA DE COLORES

```css
--primary: #00B4D8       /* CTA, highlights, botones principales — turquesa vibrante */
--primary-dark: #0095B3  /* Hover de primary — 15% más oscuro */
--secondary: #0B2A4A     /* Headings, elementos de autoridad — azul profundo */
--bg: #F8FBFF            /* Fondo base — blanco con matiz azul muy sutil */
--text: #0B2A4A          /* Texto principal — el azul oscuro del brief, contraste 12.8:1 */
--text-muted: #5A7A94    /* Texto secundario, descripciones — azul grisáceo */
```

**Verificación WCAG:** `#0B2A4A` sobre `#F8FBFF` = ratio 12.8:1 ✓ (supera AA y AAA)

**Nota sobre dirección estética:** La combinación turquesa + azul profundo rompe con el azul claro genérico del sector dental, generando una sensación de modernidad tecnológica (escáner 3D, app de seguimiento) mientras el azul profundo mantiene la confianza médica. El fondo casi blanco con matiz azul evita la frialdad clínica.

---

## 2. TIPOGRAFÍA

```
Heading: DM Serif Display, peso 700
Body: DM Sans, peso 400/500

Escala desktop:
  H1 = 52px / line-height 1.1
  H2 = 36px / line-height 1.2
  H3 = 24px / line-height 1.3
  Body = 17px / line-height 1.6
  Small = 14px / line-height 1.5

Escala mobile:
  H1 = 36px
  H2 = 28px
  H3 = 20px
  Body = 16px
  Small = 13px
```

**Importación Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display:wght@400&display=swap" rel="stylesheet">
```

**Justificación:** DM Serif Display aporta elegancia médica sin parecer anticuado (alternativa fresca a Playfair). DM Sans es su pareja natural — limpia, con excelente legibilidad en cuerpos de texto largos. La combinación se percibe como "consultorio premium moderno" vs. "clínica genérica".

---

## 3. COMPONENTES VISUALES

### Botones

```
Primario:
  background: var(--primary)
  color: #FFFFFF
  border-radius: 50px (pill shape — moderno, amigable)
  padding: 16px 32px
  font-size: 16px
  font-weight: 600
  font-family: var(--font-body)
  letter-spacing: 0.3px
  transition: all 0.2s ease
  hover: background var(--primary-dark), transform translateY(-2px)

Secundario:
  background: transparent
  border: 2px solid var(--primary)
  color: var(--primary)
  mismo border-radius y padding
  hover: background var(--primary), color #FFFFFF

Tamaño compacto (para nav, inline):
  padding: 12px 24px
  font-size: 14px
```

### Cards

```
Border-radius: 16px
Background: #FFFFFF
Sombra reposo: 0 4px 24px rgba(11, 42, 74, 0.06)
Sombra hover: 0 8px 32px rgba(11, 42, 74, 0.12)
Padding interno: 32px
Transición: all 0.3s ease
```

### Espaciado de sección

```
Padding vertical desktop: 100px
Padding vertical mobile: 64px
Max-width contenedor: 1100px
Padding horizontal contenedor: 24px
Gap entre elementos de sección: 48px desktop / 32px mobile
```

### Estilo de íconos

```
Tipo: SVG inline (peso visual consistente con la tipografía)
Stroke-width: 1.5px
Color: var(--primary) o var(--secondary) según contexto
Tamaño base: 24x24px
En cards de servicios: 48x48px con fondo circular var(--primary)/10%
```

### Elementos especiales visuales

```
Badges/tags:
  background: rgba(0, 180, 216, 0.1)
  color: var(--primary-dark)
  padding: 6px 14px
  border-radius: 20px
  font-size: 13px
  font-weight: 600
  text-transform: uppercase
  letter-spacing: 0.5px

Línea decorativa (debajo de H2):
  width: 60px
  height: 3px
  background: var(--primary)
  margin-top: 16px
  border-radius: 2px

Highlight de texto:
  background: linear-gradient(transparent 60%, rgba(0, 180, 216, 0.2) 60%)
```

---

## 4. ARQUITECTURA DE SECCIONES

---

### SECCIÓN 1 — HERO

**Propósito:** Capturar atención inmediata con la oferta especial + establecer credibilidad médica profesional.

**Layout:** Dos columnas asimétricas (contenido 55% | imagen 45%) en desktop, stack en mobile.

**Elementos:**

- **Badge superior:** "📍 León, Guanajuato • 23 años transformando sonrisas"
- **H1:** Mensaje principal sobre ortodoncia accesible y resultados garantizados
- **Subtítulo:** 1-2 líneas reforzando la propuesta de valor (tecnología + facilidades de pago)
- **Oferta destacada:** Caja con borde turquesa conteniendo la consulta gratis
- **CTA primario:** Botón WhatsApp grande "Agendar consulta gratis"
- **CTA secundario:** "Ver planes de ortodoncia" (scroll a servicios)
- **Trust badges inline:** "4.9★ Google (312 reseñas) • 18 meses sin intereses"
- **Imagen:** Placeholder 600x700, descripción: sonrisa natural de persona adulta, no close-up de dientes

**Notas visuales:**
- El badge de oferta debe tener animación sutil de pulso para captar atención
- La imagen debe tener border-radius generoso (24px) y sombra suave
- Background: gradiente muy sutil de #F8FBFF a blanco puro

---

### SECCIÓN 2 — NÚMEROS / SOCIAL PROOF

**Propósito:** Establecer credibilidad cuantitativa antes de hablar de servicios.

**Layout:** Grid de 4 columnas iguales en desktop, 2x2 en mobile.

**Elementos:**

| Valor | Label |
|-------|-------|
| 4,200+ | pacientes atendidos |
| 23 | años de experiencia |
| 98% | tasa de finalización |
| 4.9★ | en Google (312 reseñas) |

**Estilo:**
- Fondo: var(--secondary) (#0B2A4A) — sección oscura de contraste
- Números: color blanco, DM Serif Display, 56px desktop / 40px mobile
- Labels: var(--text-muted) sobre oscuro → usar #A0B4C7, font-size 15px
- Separadores verticales sutiles entre columnas en desktop

**Animación:** Contadores que animan de 0 al valor final cuando entran en viewport (1.5s, ease-out).

---

### SECCIÓN 3 — SERVICIOS

**Propósito:** Mostrar el rango de servicios con precios transparentes — diferenciador vs. competidores que ocultan costos.

**Layout:** H2 centrado + Grid de 2 columnas de cards en desktop, 1 columna en mobile.

**H2:** Sobre tratamientos disponibles y precios claros

**Cards de servicio (8 servicios):**

Cada card contiene:
- Ícono SVG en círculo turquesa/10%
- H3 con nombre del servicio
- Descripción breve (1-2 líneas)
- Precio destacado en badge
- Para ortodoncia: tag adicional "18 meses sin intereses"

**Organización sugerida:**
1. Ortodoncia metálica — ícono brackets
2. Ortodoncia estética — ícono sparkles
3. Invisalign — ícono transparente/alineador
4. Blanqueamiento consultorio — ícono brillo
5. Kit blanqueamiento casa — ícono casa+brillo
6. Limpieza profunda — ícono ultrasonido
7. Consulta diagnóstico — ícono escaneo
8. Retenedores — ícono protección

**Nota:** Los precios deben mostrarse con confianza, no escondidos. Esto construye confianza y filtra leads calificados.

---

### SECCIÓN 4 — POR QUÉ ELEGIRNOS (DIFERENCIADORES)

**Propósito:** Convertir características técnicas en beneficios emocionales para el paciente.

**Layout:** Alternating layout (zigzag) — imagen izq/texto der, luego inverso. 3 bloques principales.

**H2:** Centrado, sobre la diferencia de la clínica

**Bloques (agrupando los 6 diferenciadores en 3):**

**Bloque 1 — Tecnología de punta**
- Escáner intraoral 3D (sin impresiones incómodas)
- App de seguimiento de progreso
- Imagen placeholder: tecnología en uso, pantalla mostrando modelo 3D

**Bloque 2 — Confianza y garantía**
- Dr. Ibáñez atiende personalmente cada consulta
- Garantía escrita de 2 años en ortodoncia
- Imagen placeholder: ambiente de consultorio cálido

**Bloque 3 — Conveniencia**
- 18 meses sin intereses con cualquier tarjeta
- Estacionamiento propio (8 cajones en Jardines del Moral)
- Imagen placeholder: exterior o estacionamiento accesible

**Estilo de cada bloque:**
- Imagen con border-radius 20px
- Texto en columna: badge de categoría + H3 + lista de 2 puntos con checkmarks turquesa
- Fondo alternado: blanco / #F0F7FA (turquesa muy pálido)

---

### SECCIÓN 5 — OFERTA ESPECIAL (CTA INTERMEDIO)

**Propósito:** Recordar la oferta y capturar al visitante que ya scrolleó y está interesado.

**Layout:** Banner horizontal full-width con fondo turquesa (var(--primary))

**Elementos:**
- Ícono de regalo o calendario animado sutilmente
- H3 blanco: "Consulta de diagnóstico completa GRATIS"
- Texto de soporte: incluye exploración, radiografía y plan de tratamiento (valor $350)
- Badge de urgencia: "Solo para quienes agenden este mes"
- CTA: Botón blanco con texto turquesa "Agendar por WhatsApp"

**Notas:**
- Esta sección debe romper visualmente el flujo para captar atención
- Padding vertical reducido (60px) para sentirse como interrupción intencional
- El badge de urgencia usa fondo rgba(0,0,0,0.2) sobre el turquesa

---

### SECCIÓN 6 — PROCESO DE TRATAMIENTO

**Propósito:** Reducir incertidumbre explicando qué esperar — responde "¿cómo funciona esto?"

**Layout:** H2 centrado + línea de tiempo horizontal en desktop, vertical en mobile.

**H2:** Sobre los pasos simples del proceso

**Pasos (4):**
1. **Consulta inicial** — Agendas por WhatsApp, radiografía panorámica, diagnóstico completo
2. **Plan personalizado** — Presentación de opciones con precios y tiempos claros
3. **Inicio de tratamiento** — Colocación de aparatología, explicación de cuidados
4. **Seguimiento mensual** — Citas de ajuste, app para ver tu progreso

**Estilo:**
- Números grandes (1-4) en círculos con fondo var(--secondary)
- Línea conectora en desktop: línea turquesa punteada
- Cards minimalistas: solo número + título + 1 línea de descripción
- Fondo de sección: #F0F7FA (turquesa pálido)

---

### SECCIÓN 7 — INFORMACIÓN PRÁCTICA

**Propósito:** Responder preguntas logísticas — horario, ubicación, contacto.

**Layout:** Dos columnas en desktop (mapa/imagen | info), stack en mobile.

**Elementos columna izquierda:**
- Placeholder de mapa o imagen del exterior del consultorio
- Alt: "Consultorio Sonrident en Jardines del Moral, León"
- Dimensiones: 500x400px

**Elementos columna derecha:**
- H3: Ubicación y horarios
- Dirección con ícono de pin
- Horario formateado:
  - Lunes a viernes: 9:00 – 20:00
  - Sábado: 9:00 – 14:00
- Teléfono con ícono (clickeable: tel:4773128890)
- Badge: "Estacionamiento propio disponible"

**Fondo:** Blanco

---

### SECCIÓN 8 — CTA FINAL

**Propósito:** Último empujón de conversión para quien llegó al fondo.

**Layout:** Centrado, fondo var(--secondary) (azul oscuro)

**Elementos:**
- Badge: "¿Listo para tu nueva sonrisa?"
- H2 blanco: Mensaje de cierre sobre dar el primer paso
- Subtítulo: Recordatorio de la oferta gratis
- CTA primario grande: Botón turquesa "Agendar mi consulta gratis"
- Texto pequeño debajo: "Te respondemos en menos de 2 horas"

**Notas:**
- Este es el segundo CTA después del hero — debe sentirse como cierre natural
- Padding vertical generoso (120px) para sensación de conclusión

---

### SECCIÓN 9 — FOOTER

**Propósito:** Información de cierre, credibilidad final, navegación secundaria.

**Layout:** 3 columnas en desktop, stack en mobile.

**Columna 1 — Marca:**
- Nombre: Sonrident
- Tagline breve sobre ortodoncia y estética dental
- © 2024 todos los derechos reservados

**Columna 2 — Contacto:**
- Teléfono (clickeable)
- WhatsApp (clickeable)
- Horario resumido

**Columna 3 — Ubicación:**
- Dirección completa
- "Jardines del Moral, León, Guanajuato"

**Fondo:** #0A2340 (ligeramente más oscuro que --secondary)
**Texto:** #A0B4C7 (muted sobre oscuro)
**Links hover:** var(--primary)

---

## 5. ELEMENTOS ESPECIALES

### Botón flotante WhatsApp

```
Posición: fixed
Bottom: 24px
Right: 24px
Tamaño: 60x60px