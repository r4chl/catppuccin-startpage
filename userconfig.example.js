// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Mountain Ash",
    scale: "C",
  },
  clock: {
    format: "h:i",
    icon_color: palette.mauve,
  },
  additionalClocks: [
    {
      label: "LA",
      timezone: "America/Los Angeles",
      format: "h:i",
      icon_color: palette.lavender,
    },
    {
      label: "AN",
      timezone: "America/Houston",
      format: "h:i",
      icon_color: palette.lavender,
    },
  ],
  search: {
    engines: {
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://duckduckgo.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Favourites",
      background_url: "src/img/banners/banner_14.gif",
      categories: [
        {
          name: "Personal",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "mgc",
              url: "https://www.mgc.wales/",
              icon: "stethoscope",
              icon_color: palette.green,
            },
            {
              name: "open uni",
              url: "https://www.open.ac.uk/",
              icon: "school",
              icon_color: palette.sapphire,
            },
            {
              name: "rct council",
              url: "https://www.rctcbc.gov.uk/EN/Resident/Resident.aspx",
              icon: "building-bank",
              icon_color: palette.peach,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "settings-ai",
              icon_color: palette.teal,
            },
          ],
        },
        {
          name: "shopping",
          links: [
            {
              name: "amazon",
              url: "https://www.amazon.co.uk",
              icon: "brand-amazon",
              icon_color: palette.blue,
            },
            {
              name: "temu",
              url: "https://www.temu.com",
              icon: "shirt",
              icon_color: palette.peach,
            },
            {
              name: "aliexpress",
              url: "https://www.aliexpress.com",
              icon: "shopping-bag",
              icon_color: palette.red,
            },
            {
              name: "holy",
              url: "https://uk.holy.com/",
              icon: "cup",
              icon_color: palette.flamingo,
            },
            {
              name: "vinted",
              url: "https://www.vinted.co.uk",
              icon: "letter-v",
              icon_color: palette.sky,
            },
          ],
        },
        {
          name: "social",
          links: [
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.blue,
            },
            {
              name: "tumblr",
              url: "https://www.tumblr.com",
              icon: "brand-tumblr",
              icon_color: palette.green,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com",
              icon: "brand-pinterest",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "dev",
          links: [
            {
              name: "github",
              url: "https://www.github.com",
              icon: "brand-github",
              icon_color: palette.rosewater,
            },
            {
              name: "unicode",
              url: "https://www.vertex42.com/ExcelTips/unicode-symbols.html",
              icon: "math-symbols",
              icon_color: palette.yellow,
            },
            {
              name: "opendesktop",
              url: "https://opendesktop.org",
              icon: "palette",
              icon_color: palette.peach,
            },
            {
              name: "catppuccin",
              url: "https://catppuccin.com",
              icon: "cat",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);
