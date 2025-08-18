// Mock site configuration data
const mockSiteConfig = {
  _id: "site-config",
  favicon: {
    src: "https://via.placeholder.com/32x32/ffae9c/171227?text=🚀"
  },
  header: {
    title: "Astro Starter",
    logo: {
      _id: "logo-image",
      src: "https://via.placeholder.com/180x40/171227/ffffff?text=Astro+Starter",
      alt: "Astro Sanity Starter",
      dimensions: {
        width: 180,
        height: 40
      }
    },
    links: [
      {
        _key: "home",
        label: "Home",
        url: "/"
      },
      {
        _key: "about", 
        label: "About",
        url: "#about"
      },
      {
        _key: "features",
        label: "Features", 
        url: "#features"
      },
      {
        _key: "contact",
        label: "Contact",
        url: "#contact"
      }
    ]
  },
  footer: {
    text: "© 2024 Astro Sanity Starter. Built with ❤️ using modern web technologies.",
    links: [
      {
        _key: "privacy",
        label: "Privacy Policy",
        url: "/privacy"
      },
      {
        _key: "terms",
        label: "Terms of Service", 
        url: "/terms"
      }
    ]
  },
  titleSuffix: " | Astro Sanity Starter"
};

export async function fetchData() {
    return mockSiteConfig;
}
