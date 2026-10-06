/* Guia BCN1 - idiomas disponibles. Para anadir uno: copia js/idiomas/es.js, traducelo, y anade el codigo aqui (LANGS, LANG_LABEL, LANG_FLAG) y su <script> en index.html. */
const LANGS = ['es', 'en', 'fr', 'ro', 'de', 'it', 'pl', 'tr', 'bg', 'ru', 'uk', 'ar'];
const LANG_LABEL = { es: 'Español', en: 'English', fr: 'Français', ro: 'Română', de: 'Deutsch', it: 'Italiano', pl: 'Polski', tr: 'Türkçe', bg: 'Български', ru: 'Русский', uk: 'Українська', ar: 'العربية' };
const LANG_RTL = ['ar'];
let currentLang = localStorage.getItem('bcn1_lang') || 'es';
if (!LANGS.includes(currentLang)) currentLang = 'es';
const LANG_FLAG = { es:'\u{1F1EA}\u{1F1F8}', en:'\u{1F1EC}\u{1F1E7}', fr:'\u{1F1EB}\u{1F1F7}', ro:'\u{1F1F7}\u{1F1F4}', de:'\u{1F1E9}\u{1F1EA}', it:'\u{1F1EE}\u{1F1F9}', tr:'\u{1F1F9}\u{1F1F7}', ar:'\u{1F1F8}\u{1F1E6}', bg:'\u{1F1E7}\u{1F1EC}', pl:'\u{1F1F5}\u{1F1F1}', ru:'\u{1F1F7}\u{1F1FA}', uk:'\u{1F1FA}\u{1F1E6}' };
const UI = {};        // textos de interfaz, uno por idioma (js/idiomas/xx.js)
const STEP_TEXT = {}; // textos del recorrido y normas, uno por idioma
