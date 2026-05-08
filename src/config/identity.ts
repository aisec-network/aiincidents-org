export interface IdentityFont {
  id: string;
  display: string;
  body: string;
  mono: string;
  google_fonts_url: string;
  stack_display: string;
  stack_body: string;
  stack_mono: string;
}

export interface IdentityPalette {
  id: string;
  hue: number;
  neutral_family: string;
  accent: string;
  accent_dark: string;
  surface: string;
  surface_alt: string;
  fg: string;
  fg_muted: string;
  border: string;
  surface_dark: string;
  surface_alt_dark: string;
  fg_dark: string;
  fg_muted_dark: string;
  border_dark: string;
}

export interface IdentityLayout {
  id: "magazine" | "dashboard" | "feed" | "directory" | "longform" | "kiosk";
  component: string;
  component_path: string;
  density: "loose" | "normal" | "dense";
  brief: string;
}

export interface IdentityVoice {
  id: string;
  label_latest: string;
  label_recent: string;
  label_featured: string;
  label_more: string;
  nav_posts: string;
  nav_about: string;
  cta_subscribe: string;
  cta_subscribe_desc: string;
  cta_button: string;
  site_motto: string;
}

export interface Identity {
  font: IdentityFont;
  palette: IdentityPalette;
  layout: IdentityLayout;
  voice: IdentityVoice;
}

export const identity: Identity = {
  "font": {
    "id": "f03_serif_garamond_publicsans",
    "display": "EB Garamond",
    "body": "Public Sans",
    "mono": "IBM Plex Mono",
    "google_fonts_url": "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700;800&family=Public+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
    "stack_display": "\"EB Garamond\", \"Iowan Old Style\", Georgia, serif",
    "stack_body": "\"Public Sans\", \"Helvetica Neue\", system-ui, sans-serif",
    "stack_mono": "\"IBM Plex Mono\", ui-monospace, monospace"
  },
  "palette": {
    "id": "p18_h101_warm",
    "hue": 101,
    "neutral_family": "warm",
    "accent": "94 219 36",
    "accent_dark": "129 238 79",
    "surface": "255 253 250",
    "surface_alt": "253 250 242",
    "fg": "38 30 18",
    "fg_muted": "120 100 72",
    "border": "232 222 200",
    "surface_dark": "22 18 12",
    "surface_alt_dark": "34 28 20",
    "fg_dark": "248 242 228",
    "fg_muted_dark": "180 168 140",
    "border_dark": "60 50 36"
  },
  "layout": {
    "id": "magazine",
    "component": "HomeEditorial",
    "component_path": "@components/clusters/HomeEditorial.astro",
    "density": "normal",
    "brief": "Wide hero + 3-col grid below, editorial-leaning."
  },
  "voice": {
    "id": "v05_reviews",
    "label_latest": "New reviews",
    "label_recent": "Recently updated",
    "label_featured": "Editor's pick",
    "label_more": "Read the breakdown",
    "nav_posts": "Reviews",
    "nav_about": "How we test",
    "cta_subscribe": "Buyer's brief",
    "cta_subscribe_desc": "New reviews, ranked picks, and price drops.",
    "cta_button": "Get the brief",
    "site_motto": "Honest reviews, with numbers."
  }
} as const;
