// Localized category names + blurbs. English lives in src/data/categories.ts;
// this file provides es/de/fr. Missing entries fall back to English.
import { getCategory, type Category } from '../data/categories';
import { DEFAULT_LOCALE, type Locale } from './ui';

type Loc = { name: string; blurb: string; description?: string };

const TRANSLATIONS: Record<Exclude<Locale, 'en'>, Record<string, Loc>> = {
  es: {
    ai: { name: 'IA y Herramientas', blurb: 'Domina ChatGPT, generadores de imágenes y herramientas de IA.' },
    tech: { name: 'Tecnología y Software', blurb: 'Arregla problemas, instala programas, acelera tu equipo.' },
    money: { name: 'Dinero y Finanzas', blurb: 'Presupuesta, ahorra, invierte y haz crecer tu dinero.' },
    recipes: { name: 'Recetas y Cocina', blurb: 'Recetas fáciles y ricas que cualquiera puede hacer.' },
    home: { name: 'Hogar y Bricolaje', blurb: 'Limpia, organiza, repara y mejora tu hogar.' },
    pets: { name: 'Mascotas y Animales', blurb: 'Educa, alimenta y cuida a tus mascotas.' },
    mobile: { name: 'Móviles y Apps', blurb: 'Trucos de Android, iPhone y las mejores apps.' },
    gaming: { name: 'Gaming y FPS', blurb: 'Mejores ajustes, más FPS y solución de errores.' },
    hardware: { name: 'Hardware y Drivers', blurb: 'Actualiza drivers, refrigera tu PC y mantén el hardware.' },
    'save-energy': { name: 'Ahorrar Energía', blurb: 'Baja tu factura eléctrica con trucos inteligentes.' },
    'software-config': { name: 'Ajustes de Software', blurb: 'Ajustes ocultos de Windows y optimizaciones.' },
    internet: { name: 'Internet y Wi-Fi', blurb: 'Wi-Fi más rápido, mejor DNS y arreglar conexiones.' },
    health: { name: 'Salud y Bienestar', blurb: 'Ejercicio, sueño, nutrición y bienestar.' },
    productivity: { name: 'Productividad', blurb: 'Estudia mejor, concéntrate más y haz más.' },
    travel: { name: 'Viajes', blurb: 'Planifica viajes, vuelos baratos y viaja listo.' },
    design: { name: 'Diseño y Creatividad', blurb: 'Edita fotos, diseña gráficos y crea vídeos.' },
  },
  de: {
    ai: { name: 'KI & Tools', blurb: 'Meistere ChatGPT, Bildgeneratoren und KI-Tools.' },
    tech: { name: 'Technik & Software', blurb: 'Probleme lösen, Software installieren, schneller machen.' },
    money: { name: 'Geld & Finanzen', blurb: 'Budgetieren, sparen, investieren und Geld vermehren.' },
    recipes: { name: 'Rezepte & Kochen', blurb: 'Einfache, leckere Rezepte für jeden.' },
    home: { name: 'Zuhause & DIY', blurb: 'Putzen, organisieren, reparieren und verschönern.' },
    pets: { name: 'Haustiere & Tiere', blurb: 'Trainiere, füttere und pflege deine Haustiere.' },
    mobile: { name: 'Handy & Apps', blurb: 'Android-, iPhone-Tipps und die besten Apps.' },
    gaming: { name: 'Gaming & FPS', blurb: 'Beste Einstellungen, mehr FPS und Fehlerbehebung.' },
    hardware: { name: 'Hardware & Treiber', blurb: 'Treiber aktualisieren, PC kühlen, Hardware pflegen.' },
    'save-energy': { name: 'Energie sparen', blurb: 'Senke deine Stromrechnung mit cleveren Tipps.' },
    'software-config': { name: 'Software-Tweaks', blurb: 'Versteckte Windows-Einstellungen und Optimierungen.' },
    internet: { name: 'Internet & WLAN', blurb: 'Schnelleres WLAN, besseres DNS, Verbindungen fixen.' },
    health: { name: 'Gesundheit & Wohl', blurb: 'Sport, Schlaf, Ernährung und Wohlbefinden.' },
    productivity: { name: 'Produktivität', blurb: 'Besser lernen, fokussierter sein, mehr schaffen.' },
    travel: { name: 'Reisen', blurb: 'Reisen planen, günstige Flüge, clever reisen.' },
    design: { name: 'Design & Kreativ', blurb: 'Fotos bearbeiten, Grafiken und Videos erstellen.' },
  },
  fr: {
    ai: { name: 'IA & Outils', blurb: 'Maîtrisez ChatGPT, les générateurs d’images et l’IA.' },
    tech: { name: 'Tech & Logiciels', blurb: 'Réparez, installez des logiciels, accélérez tout.' },
    money: { name: 'Argent & Finances', blurb: 'Budgétez, économisez, investissez et faites fructifier.' },
    recipes: { name: 'Recettes & Cuisine', blurb: 'Des recettes simples et savoureuses pour tous.' },
    home: { name: 'Maison & Bricolage', blurb: 'Nettoyez, rangez, réparez et embellissez.' },
    pets: { name: 'Animaux', blurb: 'Éduquez, nourrissez et prenez soin de vos animaux.' },
    mobile: { name: 'Mobiles & Apps', blurb: 'Astuces Android, iPhone et meilleures applis.' },
    gaming: { name: 'Gaming & FPS', blurb: 'Meilleurs réglages, plus de FPS et correctifs.' },
    hardware: { name: 'Matériel & Pilotes', blurb: 'Mettez à jour les pilotes, refroidissez votre PC.' },
    'save-energy': { name: 'Économiser l’Énergie', blurb: 'Réduisez votre facture avec des astuces malines.' },
    'software-config': { name: 'Réglages Logiciels', blurb: 'Réglages cachés de Windows et optimisations.' },
    internet: { name: 'Internet & Wi-Fi', blurb: 'Wi-Fi plus rapide, meilleur DNS, réparer la connexion.' },
    health: { name: 'Santé & Bien-être', blurb: 'Sport, sommeil, nutrition et bien-être.' },
    productivity: { name: 'Productivité', blurb: 'Mieux étudier, rester concentré, faire plus.' },
    travel: { name: 'Voyages', blurb: 'Planifiez vos voyages et trouvez des vols pas chers.' },
    design: { name: 'Design & Créa', blurb: 'Retouchez des photos, créez graphismes et vidéos.' },
  },
};

export interface LocalizedCategory extends Category {
  name: string;
  blurb: string;
}

/** Category with its name/blurb translated for the given locale (or English). */
export function localizedCategory(
  slug: string,
  locale: Locale,
): LocalizedCategory | undefined {
  const base = getCategory(slug);
  if (!base) return undefined;
  if (locale === DEFAULT_LOCALE) return base;
  const tr = TRANSLATIONS[locale]?.[slug];
  return {
    ...base,
    name: tr?.name ?? base.name,
    blurb: tr?.blurb ?? base.blurb,
    description: tr?.description ?? base.description,
  };
}
