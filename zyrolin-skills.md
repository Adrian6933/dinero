# 🛠️ ZYROLIN.COM — Skills (Herramientas Automatizadas)

> **Las skills son comandos `/skill-name` que automatizan tareas repetitivas del proyecto.**
> Aquí están las que vamos a usar y las que vamos a crear específicamente para ti.

---

## 📑 ÍNDICE

1. [Skills existentes útiles (busca de ecosistema)](#skills-existentes)
2. [Skills que vamos a crear (personalizadas para zyrolin)](#skills-crear)
3. [Cómo usar cada skill en el workflow](#workflow)
4. [Integración en el plan de contenido](#integracion)

---

<a name="skills-existentes"></a>
## 1. Skills existentes útiles

Aquí están las skills disponibles en el ecosistema que te ayudarán:

### ✅ Skills del ecosistema recomendadas

| Skill | Para qué | Cuándo usarlo |
|-------|----------|--------------|
| **code-review** | Revisar código WordPress/PHP | Después de crear plugins o modificaciones |
| **verify** | Verificar que algo funciona | Probar que un artículo renderiza bien, que el SEO está OK |
| **run** | Ejecutar el proyecto (local server) | Para testear zyrolin.com en desarrollo |
| **simplify** | Limpiar y optimizar código | Después de programar herramientas/calculadoras |
| **docx** | Crear/editar documentos Word | Para exportar checklists, guías de edición |
| **pdf** | Crear PDFs | Para generar guías descargables (lead magnets) |
| **xlsx** | Trabajar con hojas de cálculo | Análisis de keywords, tracking de artículos, métricas |

### 🔍 Búsqueda pendiente

Necesitamos verificar si hay skills para:
- SEO/keyword research automation
- WordPress automation
- Content scheduling
- Analytics tracking

**Acción:** Cuando iniciemos, haremos una búsqueda profunda en el ecosistema.

---

<a name="skills-crear"></a>
## 2. Skills que vamos a crear (personalizadas para zyrolin)

Estas skills van a automatizar tareas específicas de tu blog. Las creamos con el skill-creator:

### 🚀 SKILL 1: `zyrolin-article-generator` (PRIORIDAD 1)

**Qué hace:** Genera un artículo completo a partir de:
- Keyword principal
- Categoría (AI, Tech, Money, Recetas, etc.)
- Tipo de artículo (tutorial, lista, comparativa, solución a problema)

**Output:** Artículo completo en formato WordPress-ready:
- Título SEO optimizado
- Introducción con gancho
- Tabla de contenidos
- Cuerpo estructurado (H2s, H3s)
- FAQs
- Conclusión con CTA
- Meta descripción

**Cuándo usarlo:** Cuando tengas un keyword validado y necesites el borrador.

**Ejemplo de uso:**
```
/zyrolin-article-generator
Keyword: how to use chatgpt
Category: /ai/
Type: Tutorial
Level: Beginner
```

**Resultado:** Artículo de 1.200-1.500 palabras, estructurado, listo para revisar.

---

### 🚀 SKILL 2: `zyrolin-keyword-research` (PRIORIDAD 2)

**Qué hace:** Encuentra y valida keywords para zyrolin:
- Input: categoría + tema general
- Output: 20-30 keywords ordenadas por:
  - Volumen de búsqueda
  - Dificultad (KD)
  - Intención (informativa/comercial)
  - Competencia estimada

**Cuándo usarlo:** Al empezar una categoría o necesitar 10 artículos más.

**Ejemplo de uso:**
```
/zyrolin-keyword-research
Category: /recipes/
Theme: easy pasta recipes
Target: long-tail keywords with high volume, low KD
```

**Resultado:**
```
1. "how to make pasta from scratch" — 2.100/mes, KD 15
2. "easy pasta recipes for beginners" — 1.800/mes, KD 12
3. "homemade pasta dough" — 950/mes, KD 8
...
```

---

### 🚀 SKILL 3: `zyrolin-seo-optimizer` (PRIORIDAD 3)

**Qué hace:** Optimiza un artículo ya escrito para SEO:
- Verifica densidad de keyword
- Mejora H1, H2, H3
- Sugiere internal linking (enlaza a otros artículos)
- Genera meta descripción
- Propone ALT text para imágenes
- Verifica longitud mínima (800+ palabras)

**Cuándo usarlo:** Después de escribir un artículo, antes de publicar.

**Ejemplo de uso:**
```
/zyrolin-seo-optimizer
Article: [pega el artículo aquí]
Keyword: how to use chatgpt
Category: /ai/
```

**Resultado:**
```
✅ Title: "How to Use ChatGPT Free (2026 Step-by-Step Guide)" 
✅ Meta description: "Learn how to use ChatGPT free with this complete guide. Includes account setup, tips, and FAQs."
⚠️ H2s could be stronger — suggestion: "How to Get Started with ChatGPT (In 3 Minutes)"
⚠️ Internal linking: Link to /ai/how-to-write-effective-ai-prompts (related)
✅ Keyword density: 1.2% (optimal)
```

---

### 🚀 SKILL 4: `zyrolin-internal-linking` (PRIORIDAD 4)

**Qué hace:** Genera un plan de enlaces internos para conectar artículos (clusters):
- Input: URL del artículo nuevo
- Output: Lista de 5-8 artículos existentes para enlazar (con anchor text sugerido)

**Cuándo usarlo:** Después de publicar, para conectar con el resto del cluster.

**Ejemplo de uso:**
```
/zyrolin-internal-linking
Article URL: /ai/how-to-use-chatgpt
Category: /ai/
```

**Resultado:**
```
1. → Link to: /ai/how-to-write-effective-ai-prompts
   Anchor text: "effective prompts"
   Position: In conclusion paragraph

2. → Link to: /ai/best-free-ai-tools
   Anchor text: "best free AI tools"
   Position: In intro as related
   
3. → Link to: /ai/ai-for-beginners-guide (PILAR)
   Anchor text: "AI fundamentals"
   Position: In first H2
```

---

### 🚀 SKILL 5: `zyrolin-content-calendar` (PRIORIDAD 5)

**Qué hace:** Genera un calendario de contenido de 4 semanas:
- Distribuye artículos por categoría
- Ordena por prioridad (pilares primero, después satélites)
- Sugiere fecha de publicación
- Distribuye equitativamente entre categorías

**Cuándo usarlo:** Al principio de cada mes.

**Ejemplo de uso:**
```
/zyrolin-content-calendar
Month: July 2026
Focus categories: AI, Tech
Target: 12 articles this month
```

**Resultado:**
```
WEEK 1:
  Mon: /ai/ai-for-beginners-guide (PILAR) 
  Wed: /tech/how-to-speed-up-computer (PILAR)
  Fri: /ai/how-to-use-chatgpt (satélite)

WEEK 2:
  Mon: /tech/how-to-install-windows-11 (satélite)
  Wed: /money/how-to-make-budget (PILAR)
  Fri: /ai/best-free-ai-tools (satélite)
...
```

---

### 🚀 SKILL 6: `zyrolin-seo-audit` (PRIORIDAD 6)

**Qué hace:** Auditoría SEO completa de una categoría:
- Número de artículos
- Cobertura de keywords
- Autoridad estimada (basada en cantidad + calidad)
- Huecos de contenido (keywords sin cubrir)
- Internal linking score

**Cuándo usarlo:** Mensualmente, para revisar progreso de cada cluster.

**Ejemplo de uso:**
```
/zyrolin-seo-audit
Category: /ai/
```

**Resultado:**
```
📊 AUDITORÍA — Categoría /ai/

Articles: 12/25 target ⚠️ (48%)
Content Score: 7/10
Topical Authority: Medium (needs more depth)

Missing Keywords (high opportunity):
  ❌ "ai for writing"
  ❌ "best ai tools for productivity"
  ❌ "how to use ai for email"

Internal Linking Score: 8/10 ✅
Last Updated: 15 days ago ⚠️ (add fresh content)

Next Steps:
  1. Write 3 articles on missing keywords
  2. Update pilar article
```

---

<a name="workflow"></a>
## 3. Cómo usar cada skill en el workflow

### El día a día con skills

**LUNES — Generar keywords (empieza aquí):**
```bash
/zyrolin-keyword-research
Category: /ai/
Target: 20 new keywords
```
→ Obtienes lista de 20 keywords con métricas

**MARTES-JUEVES — Generar artículos:**
```bash
/zyrolin-article-generator
Keyword: [del lunes]
Category: /ai/
Type: Tutorial
```
→ Obtienes artículo completo

**Luego de generar:**
```bash
/zyrolin-seo-optimizer
Article: [el que generaste]
Keyword: [el del briefing]
Category: /ai/
```
→ Artículo listo para publicar con SEO OK

**Después de publicar:**
```bash
/zyrolin-internal-linking
Article URL: [URL publicada]
Category: /ai/
```
→ Lista de artículos para enlazar

**VIERNES — Auditoría semanal:**
```bash
/zyrolin-seo-audit
Category: /ai/
```
→ Ves dónde estás en la categoría

---

### Timeline de creación de skills

| Fase | Skill | Tiempo estimado |
|------|-------|-----------------|
| Mes 1 | `zyrolin-article-generator` + `zyrolin-keyword-research` | Semana 1-2 |
| Mes 2 | `zyrolin-seo-optimizer` + `zyrolin-internal-linking` | Semana 3-4 |
| Mes 3 | `zyrolin-content-calendar` + `zyrolin-seo-audit` | Semana 5-6 |

En paralelo, vamos usando Claude manual + estas herramientas que aparezcan en el ecosistema.

---

<a name="integracion"></a>
## 4. Integración en el plan de contenido

### Cómo se encaja todo

```
SEMANA 1 (SETUP):
  ✅ Hosting + WordPress + zyrolin.com
  ✅ Páginas legales
  ⏳ Crear skill: zyrolin-keyword-research
  ⏳ Crear skill: zyrolin-article-generator

SEMANA 2-3 (PILAR ARTICLES):
  Lunes: /zyrolin-keyword-research (categoria AI)
  Martes: /zyrolin-article-generator (pilar AI)
  + revisar manual en 30 min
  Miércoles: /zyrolin-article-generator (pilar Tech)
  Jueves: /zyrolin-article-generator (pilar Money)
  Viernes: Publicar los 3 pilares

SEMANA 4-6 (SATÉLITES):
  Cada día: /zyrolin-article-generator (1 satélite)
  + /zyrolin-seo-optimizer
  + /zyrolin-internal-linking
  Viernes: /zyrolin-seo-audit

MES 2+:
  Lunes: /zyrolin-keyword-research (nueva categoría)
  + /zyrolin-content-calendar (planificación)
  Martes-Viernes: Publicar según plan
```

---

## 📋 CHECKLIST: Skills a crear

- [ ] `zyrolin-article-generator` — Genera artículos completos
- [ ] `zyrolin-keyword-research` — Encuentra keywords validadas
- [ ] `zyrolin-seo-optimizer` — Optimiza SEO on-page
- [ ] `zyrolin-internal-linking` — Plan de enlaces internos
- [ ] `zyrolin-content-calendar` — Calendario mensual
- [ ] `zyrolin-seo-audit` — Auditoría de categoría

---

**📅 Skills plan creado: Junio 2026**

> **Siguiente paso:** Decidir si creamos las skills AHORA (Semana 1 del proyecto) o
> hacemos el Mes 1 manual (más lento) y luego las automatizamos.
> Recomendación: crear `zyrolin-article-generator` + `zyrolin-keyword-research` PRIMERO,
> el resto después cuando ya hayas publicado algunos artículos y veas el flujo.
