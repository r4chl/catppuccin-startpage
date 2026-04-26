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
      label: "la",
      timezone: "America/Los_Angeles",
      format: "h:i",
      icon_color: palette.lavender,
    },
    {
      label: "an",
      timezone: "America/Chicago",
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
      name: "one",
      background_url: "src/img/banners/banner_14.gif",
      categories: [
        {
          name: "❤️",
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
              name: "journalit",
              url: "https://journalit.app/",
              icon: "book-2",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "📺",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.yellow,
            },
            {
              name: "twitch",
              url: "https://twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.mauve,
            },
            {
              name: "kick",
              url: "https://www.kick.com",
              icon: "brand-kick",
              icon_color: palette.green,
            },
            {
              name: "southhemitv",
              url: "https://southhemitv.com/",
              icon: "device-remote",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "💻",
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
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "ai",
              icon_color: palette.sky,
            },
          ],
        },
      ],
    },
    {
      name: "two",
      background_url: "src/img/banners/banner_19.gif",
      categories: [
        {
          name: "🛍️",
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
          name: "🛍️",
          links: [
            {
              name: "etsy",
              url: "https://etsy.com",
              icon: "brand-etsy",
              icon_color: palette.peach,
            },
            {
              name: "ebay",
              url: "https://ebay.com",
              icon: "gavel",
              icon_color: palette.yellow,
            },
            {
              name: "vapestreams",
              url: "https://vapestreams.co.uk/",
              icon: "smoking-no",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "🫆",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com",
              icon: "brand-google-drive",
              icon_color: palette.peach,
            },
            {
              name: "calender",
              url: "https://calender.google.com",
              icon: "calendar-week",
              icon_color: palette.red,
            },
            {
              name: "docs",
              url: "https://docs.google.com",
              icon: "file-description",
              icon_color: palette.sapphire,
            },
            {
              name: "sheets",
              url: "https://sheets.google.com",
              icon: "table",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
    {
      name: "three",
      background_url: "src/img/banners/banner_20.gif",
      categories: [
        {
          name: "💙",
          links: [
            {
              name: "niivu",
              url: "https://www.deviantart.com/niivu",
              icon: "brand-windows",
              icon_color: palette.green,
            },
            {
              name: "creativefabrica",
              url: "https://www.creativefabrica.com/",
              icon: "brush",
              icon_color: palette.yellow,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "🎮",
          links: [
            {
              name: "raenonx",
              url: "https://pks.raenonx.cc/en",
              icon: "pokeball",
              icon_color: palette.mauve,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.blue,
            },
            {
              name: "nonogram",
              url: "https://nonograms-katana.fandom.com/wiki/Nonograms_Katana_Wiki",
              icon: "torii",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "💬",
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
            {
              name: "ao3",
              url: "https://archiveofourown.org",
              icon: "book",
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
