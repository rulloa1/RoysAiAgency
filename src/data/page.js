// Mock data to replace Sanity client calls
const mockPages = [
  {
    _id: "home-page",
    slug: { current: "/" },
    title: "Welcome to Astro Sanity Starter",
    metaTitle: "Astro Sanity Starter - Modern Web Development",
    metaDescription: "A modern web application built with Astro and designed for speed and performance.",
    socialImage: {
      src: "https://via.placeholder.com/1200x630/ffae9c/171227?text=Astro+Sanity+Starter"
    },
    sections: [
      {
        _type: "heroSection",
        _key: "hero1",
        title: "Build Amazing Websites",
        subtitle: "Fast, Modern, and Beautiful",
        text: "Create stunning websites with Astro, Sanity, and modern web technologies. This starter template gives you everything you need to get started quickly.",
        actions: [
          {
            _type: "actionButton",
            label: "Get Started",
            url: "#features",
            style: "primary"
          },
          {
            _type: "actionLink", 
            label: "Learn More",
            url: "#about",
            style: "secondary"
          }
        ],
        backgroundImage: {
          src: "https://via.placeholder.com/1920x1080/e3f1ff/171227?text=Hero+Background",
          alt: "Hero background"
        }
      },
      {
        _type: "cardsSection",
        _key: "features1",
        title: "Why Choose Our Starter?",
        subtitle: "Features",
        text: "Built with the latest technologies and best practices for modern web development.",
        cards: [
          {
            _key: "card1",
            title: "Lightning Fast",
            text: "Built with Astro for optimal performance and loading speeds.",
            badge: {
              label: "Performance",
              style: "primary"
            }
          },
          {
            _key: "card2", 
            title: "Modern Stack",
            text: "Uses cutting-edge technologies like Astro, Sanity, and Tailwind CSS.",
            badge: {
              label: "Technology",
              style: "secondary"
            }
          },
          {
            _key: "card3",
            title: "Easy to Use",
            text: "Simple setup and intuitive content management with Sanity CMS.",
            badge: {
              label: "Developer Experience",
              style: "accent"
            }
          }
        ]
      },
      {
        _type: "logosSection",
        _key: "logos1",
        title: "Trusted by developers worldwide",
        subtitle: "Technologies",
        companies: [
          {
            _key: "astro",
            name: "Astro",
            logo: {
              src: "https://via.placeholder.com/120x60/171227/ffffff?text=Astro",
              alt: "Astro logo"
            }
          },
          {
            _key: "sanity",
            name: "Sanity",
            logo: {
              src: "https://via.placeholder.com/120x60/171227/ffffff?text=Sanity", 
              alt: "Sanity logo"
            }
          },
          {
            _key: "tailwind",
            name: "Tailwind CSS",
            logo: {
              src: "https://via.placeholder.com/120x60/171227/ffffff?text=Tailwind",
              alt: "Tailwind CSS logo"
            }
          }
        ]
      },
      {
        _type: "testimonialsSection",
        _key: "testimonials1",
        title: "What developers are saying",
        subtitle: "Testimonials",
        testimonials: [
          {
            _key: "testimonial1",
            quote: "This starter template saved me weeks of development time. The setup is clean and the code is well-structured.",
            person: {
              name: "Sarah Johnson",
              title: "Frontend Developer",
              image: {
                src: "https://via.placeholder.com/80x80/ffae9c/171227?text=SJ",
                alt: "Sarah Johnson"
              }
            }
          },
          {
            _key: "testimonial2",
            quote: "Perfect combination of modern technologies. The performance is incredible and the developer experience is smooth.",
            person: {
              name: "Mike Chen",
              title: "Full Stack Developer", 
              image: {
                src: "https://via.placeholder.com/80x80/fff2d7/171227?text=MC",
                alt: "Mike Chen"
              }
            }
          }
        ]
      },
      {
        _type: "ctaSection",
        _key: "cta1",
        title: "Ready to get started?",
        text: "Join thousands of developers building amazing websites with our starter template.",
        actions: [
          {
            _type: "actionButton",
            label: "Download Now",
            url: "#download",
            style: "primary"
          },
          {
            _type: "actionLink",
            label: "View on GitHub", 
            url: "https://github.com",
            style: "secondary"
          }
        ]
      }
    ]
  }
];

export async function fetchData() {
    return mockPages;
}

export async function getPageById(id) {
    return mockPages.filter(page => page._id === id);
}
