import type { ContentSlug } from './config';

export type EnglishCard = { title: string; text: string; href?: ContentSlug; image?: string };
export type EnglishSection = { eyebrow: string; title: string; intro?: string; cards?: EnglishCard[]; points?: string[]; image?: string };
export type EnglishFaq = { question: string; answer: string };
export type EnglishPage = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  sections: EnglishSection[];
  faqs?: EnglishFaq[];
  message: string;
};

const quote = 'Share your city, site dimensions, product types and any photos or plans you have. We can then discuss suitable shelving and confirm product details and the scope of a quotation.';
const install = 'If you need installation, mention it in your inquiry. We will confirm whether it is available and what the work covers before preparing a quote.';

export const englishPages: Record<Exclude<ContentSlug, '' | 'contact' | 'privacy' | 'terms'>, EnglishPage> = {
  solutions: {
    title: 'Shelving and storage solutions | Al Shamikh',
    description: 'Explore warehouse racks, supermarket, grocery and pharmacy shelving, plus other storage and display options for projects in Jeddah and Riyadh.',
    eyebrow: 'Our solutions', h1: 'Shelving for storage and display',
    lead: 'Explore shelving categories for warehouses, stores, pharmacies and homes. The right option depends on your site, products and daily use.',
    heroImage: '/photos/hero-solutions.webp', heroAlt: 'Illustrative warehouse shelving and organized storage',
    sections: [
      { eyebrow: 'Warehouse storage', title: 'Racks matched to what you store', intro: 'Heavy, medium and light storage needs call for different layouts. We discuss item dimensions, handling and available space before identifying options.', image: '/photos/warehouse-2.jpeg', cards: [
        { title: 'Heavy storage', text: 'For larger or heavier goods; the actual load, dimensions and handling method must be checked.', href: 'warehouse-racking' },
        { title: 'Medium storage', text: 'For cartons and varied stock that need accessible, organized storage.', href: 'warehouse-racking' },
        { title: 'Light storage', text: 'For smaller, lighter items where clear organization and easy access matter.', href: 'warehouse-racking' },
      ] },
      { eyebrow: 'Retail display', title: 'Shelving for the way your store works', intro: 'Browse display options for supermarkets, grocery stores, pharmacies and other retail spaces.', image: '/photos/market.webp', cards: [
        { title: 'Supermarkets', text: 'Organize product sections while considering customer movement and access.', href: 'retail-shelving' },
        { title: 'Grocery stores', text: 'Use the available footprint to present products clearly.', href: 'retail-shelving' },
        { title: 'Pharmacies', text: 'Discuss product categories and the display or storage units your space needs.', href: 'retail-shelving' },
        { title: 'Commercial stores', text: 'Select display units around the products and layout of your business.', href: 'retail-shelving' },
      ] },
      { eyebrow: 'Beyond business premises', title: 'Storage for other spaces', intro: 'Home and small-space storage options can also be discussed according to dimensions and intended use.', image: '/photos/home.webp' },
      { eyebrow: 'Your inquiry', title: 'Start with the details that matter', intro: quote, points: ['Type of business or storage use', 'City and site dimensions', 'Product types and approximate sizes', 'Photos or a floor plan, if available'] },
      { eyebrow: 'How we work', title: 'From your need to a defined quotation', intro: 'We start by understanding the site and how it is used, discuss a suitable shelving category, confirm available supply and any requested installation scope, then review the project quotation.', points: ['Understand your project and space', 'Discuss the shelving system', 'Clarify available services and scope', 'Review the options and quotation'] },
    ],
    message: 'Hello, I would like to ask about a shelving solution for my project.',
  },
  sectors: {
    title: 'Shelving by business sector | Al Shamikh',
    description: 'Find shelving options for warehouses, supermarkets, grocery stores, pharmacies and commercial spaces in Jeddah and Riyadh.',
    eyebrow: 'Business sectors', h1: 'Shelving shaped by how you use your space',
    lead: 'A warehouse, supermarket and pharmacy have different storage and display needs. Start with your business type, then review the relevant shelving options.',
    heroImage: '/photos/hero-sectors.webp', heroAlt: 'Illustrative organized shelving for a commercial space',
    sections: [
      { eyebrow: 'Where shelving is used', title: 'Find your business type', cards: [
        { title: 'Warehouses and stockrooms', text: 'Plan stock organization and access around your goods, aisles and handling method.', href: 'warehouse-racking', image: '/photos/hero.webp' },
        { title: 'Supermarkets', text: 'Consider product groups, shopper movement and display access.', href: 'retail-shelving', image: '/photos/market.webp' },
        { title: 'Grocery stores', text: 'Make practical use of the store footprint with clearly organized displays.', href: 'retail-shelving', image: '/photos/store.webp' },
        { title: 'Pharmacies', text: 'Organize display and storage by product category and daily workflow.', href: 'retail-shelving', image: '/photos/pharmacy.jpeg' },
        { title: 'Commercial stores and showrooms', text: 'Choose display shelving around the products and customer experience.', href: 'retail-shelving', image: '/photos/black.webp' },
        { title: 'Homes and storage rooms', text: 'Discuss practical storage for smaller spaces and everyday items.', href: 'solutions', image: '/photos/home.webp' },
      ] },
      { eyebrow: 'How to choose', title: 'The site and products guide the choice', intro: 'Tell us what you need to store or display, the dimensions of the space and how people or stock move through it. Product availability and specifications are confirmed for your project.', points: ['Business activity and product categories', 'Floor area, height and aisle requirements', 'Daily access and movement', 'Desired display or storage arrangement'] },
      { eyebrow: 'Service coverage', title: 'Serving projects in Jeddah and Riyadh', intro: 'Al Shamikh supplies warehouse and retail shelving for projects in both cities. Confirm the project location when you contact us.', cards: [
        { title: 'Jeddah', text: 'Shelving options for projects in Jeddah.', href: 'jeddah' },
        { title: 'Riyadh', text: 'Shelving options for projects in Riyadh.', href: 'riyadh' },
      ] },
    ],
    message: 'Hello, I would like to discuss shelving for my business.',
  },
  'warehouse-racking': {
    title: 'Warehouse shelving and storage racks | Al Shamikh',
    description: 'Explore heavy, medium and light warehouse storage needs. Discuss warehouse shelving and racks for projects in Jeddah and Riyadh with Al Shamikh.',
    eyebrow: 'Warehouse shelving', h1: 'Warehouse racks and storage shelving',
    lead: 'Explore shelving for heavy, medium and light storage needs. Choosing a system starts with the goods, their dimensions, the site height and the handling method.',
    heroImage: '/photos/hero.webp', heroAlt: 'Illustrative aisle with warehouse storage racks',
    sections: [
      { eyebrow: 'Storage requirements', title: 'Heavy, medium and light storage', intro: 'These categories describe use cases, not a promised load capacity. Final suitability depends on verified product specifications and the project.', cards: [
        { title: 'Heavy storage needs', text: 'For larger or heavier goods. Share each unit’s weight and dimensions, site height and handling method.', image: '/photos/warehouse-2.jpeg' },
        { title: 'Medium storage needs', text: 'For cartons and medium-sized stock. Review item arrangement, access and aisle space.', image: '/photos/warehouse-3.webp' },
        { title: 'Light storage needs', text: 'For smaller, lighter items that benefit from clear organization and ready access.', image: '/photos/white.webp' },
      ] },
      { eyebrow: 'Choosing a layout', title: 'What to review before selecting racks', intro: 'The available floor and vertical space matter alongside the way stock enters and leaves the warehouse.', points: ['Warehouse dimensions, height and aisle width', 'Type, size and weight of goods', 'Manual or equipment-based handling', 'Stock movement and access frequency', 'Possible future changes to the space'] },
      { eyebrow: 'Request a quote', title: 'Tell us about your warehouse', intro: quote + ' ' + install, points: ['State the project city and storage use', 'Send available dimensions and aisle details', 'Describe the goods and handling method', 'Attach site photos or a plan if useful'] },
      { eyebrow: 'Illustrative images', title: 'See warehouse shelving options', intro: 'The photos show shelving categories and are illustrative; they are not a record of completed Al Shamikh projects.', cards: [
        { title: 'Warehouse aisle', text: 'Illustrative warehouse shelving.', image: '/photos/hero.webp' },
        { title: 'Industrial storage', text: 'Illustrative racking arrangement.', image: '/photos/warehouse-2.jpeg' },
        { title: 'Vertical storage', text: 'Illustrative use of site height.', image: '/photos/warehouse-5.webp' },
      ] },
      { eyebrow: 'Service areas', title: 'Warehouse shelving in Jeddah and Riyadh', intro: 'Al Shamikh serves warehouse projects in both cities. Share your project location and storage requirements to discuss available options.', cards: [
        { title: 'Jeddah projects', text: 'Discuss shelving for a warehouse or stockroom in Jeddah.', href: 'jeddah' },
        { title: 'Riyadh projects', text: 'Discuss storage racks for a project in Riyadh.', href: 'riyadh' },
      ] },
    ],
    faqs: [
      { question: 'What information helps you suggest warehouse shelving?', answer: 'The site dimensions, height and aisles, the size and weight of goods, and how stock is handled are useful starting points.' },
      { question: 'How do I choose between heavy, medium and light storage?', answer: 'Start with the weight and dimensions of each unit, handling method, site height and aisle space. Suitability and capacity cannot be determined without those details and confirmed product specifications.' },
      { question: 'Can the rack layout be adapted to my warehouse?', answer: 'The dimensions, height, aisles and movement of goods are reviewed when discussing a layout. A plan or measurements helps start that discussion.' },
      { question: 'Is installation included in a warehouse shelving quote?', answer: install },
      { question: 'Can I ask about a project in Jeddah or Riyadh?', answer: 'Yes. Al Shamikh serves projects in both Jeddah and Riyadh. Include the city when you contact us.' },
    ],
    message: 'Hello, I would like to ask about warehouse shelving for my project.',
  },
  'retail-shelving': {
    title: 'Supermarket, grocery and pharmacy shelving | Al Shamikh',
    description: 'Explore retail shelving for supermarkets, grocery stores, pharmacies and commercial displays in Jeddah and Riyadh.',
    eyebrow: 'Retail shelving', h1: 'Shelving for stores, supermarkets and pharmacies',
    lead: 'Organize your retail space around the products you sell, the available area and how customers move through the store.',
    heroImage: '/photos/market.webp', heroAlt: 'Illustrative shelving and product display in a retail store',
    sections: [
      { eyebrow: 'Store types', title: 'Display solutions by business', intro: 'The most useful shelving choice starts with the nature of your products and store layout.', cards: [
        { title: 'Supermarket shelving', text: 'Discuss shelving for product sections, visibility and shopper access.', image: '/photos/market.webp' },
        { title: 'Grocery store shelving', text: 'Arrange food and daily-use products within the available footprint.', image: '/photos/store.webp' },
        { title: 'Pharmacy shelving', text: 'Discuss display and storage units around product categories and the way staff use the space.', image: '/photos/pharmacy.jpeg' },
        { title: 'Commercial display shelving', text: 'Consider wall and floor displays appropriate to the goods and store flow.', image: '/photos/black.webp' },
      ] },
      { eyebrow: 'Planning the store', title: 'How to choose suitable units', intro: 'Share the floor dimensions, product categories, available wall space and any preferred arrangement. We can discuss options before product details and availability are confirmed.', points: ['Business and product categories', 'Floor plan and wall dimensions', 'Customer movement and access', 'Desired wall or central display units', 'Storage needs behind the display'] },
      { eyebrow: 'Request a quote', title: 'Describe your retail project', intro: quote + ' ' + install },
      { eyebrow: 'Service areas', title: 'Retail shelving in Jeddah and Riyadh', intro: 'Al Shamikh supplies shelving for retail projects in both cities. There is no branch or showroom address implied by this service coverage.', cards: [
        { title: 'Jeddah', text: 'Explore retail shelving for a project in Jeddah.', href: 'jeddah' },
        { title: 'Riyadh', text: 'Explore retail shelving for a project in Riyadh.', href: 'riyadh' },
      ] },
    ],
    faqs: [
      { question: 'What shelving categories do you supply for stores?', answer: 'Al Shamikh supplies shelving for supermarkets, grocery stores, pharmacies and other commercial display spaces.' },
      { question: 'How do I choose shelving for my shop?', answer: 'Start with your product categories, store dimensions and how customers and staff use the space. Share photos or a plan if available.' },
      { question: 'Can wall and central displays be arranged for my store?', answer: 'The dimensions, aisles, products and customer flow should be reviewed before discussing a layout. There is no one size that fits every store.' },
      { question: 'Are prices and unit sizes listed online?', answer: 'Product availability, sizes, specifications and pricing are confirmed directly after discussing your project.' },
      { question: 'Do you serve stores in both Jeddah and Riyadh?', answer: 'Yes. Both cities are confirmed service areas for Al Shamikh.' },
      { question: 'Can you also install the shelving?', answer: install },
    ],
    message: 'Hello, I would like to ask about shelving for my store.',
  },
  projects: {
    title: 'Shelving solution images | Al Shamikh',
    description: 'Browse illustrative images of warehouse, supermarket, grocery and pharmacy shelving. Completed-project photos will be published only with verified details.',
    eyebrow: 'Solution images', h1: 'See shelving ideas for different spaces',
    lead: 'Browse illustrative images of storage and display shelving. These are examples of product categories, not a portfolio of completed Al Shamikh projects.',
    heroImage: '/photos/hero-projects.webp', heroAlt: 'Illustrative shelving in an organized warehouse',
    sections: [
      { eyebrow: 'Choose a category', title: 'Storage and display examples', intro: 'Use the images to identify the kind of shelving your project may need, then discuss the actual site and product specifications.', cards: [
        { title: 'Warehouse shelving', text: 'Illustrative storage racks.', href: 'warehouse-racking', image: '/photos/hero.webp' },
        { title: 'Supermarket shelving', text: 'Illustrative supermarket display.', href: 'retail-shelving', image: '/photos/market.webp' },
        { title: 'Grocery shelving', text: 'Illustrative grocery display.', href: 'retail-shelving', image: '/photos/store.webp' },
        { title: 'Pharmacy shelving', text: 'Illustrative pharmacy display.', href: 'retail-shelving', image: '/photos/pharmacy.jpeg' },
        { title: 'Commercial shelving', text: 'Illustrative store display.', href: 'retail-shelving', image: '/photos/black.webp' },
        { title: 'Storage options', text: 'Illustrative shelving and storage.', href: 'solutions', image: '/photos/warehouse-2.jpeg' },
      ] },
      { eyebrow: 'Project planning', title: 'From an image to a workable choice', intro: 'A reference image helps explain your preference. The final selection depends on site dimensions, the goods and the way the space is used.', points: ['Share the type of business or storage', 'Provide site dimensions and images if available', 'Describe products, access and movement', 'Confirm available products and the scope of work before a quote'] },
      { eyebrow: 'Real project photos', title: 'Completed-project evidence is being prepared', intro: 'Al Shamikh has confirmed that genuine completed-project photos are available for publication. They have not yet been identified and approved in this repository. Images currently shown on this page remain clearly illustrative.' },
    ],
    message: 'Hello, I would like to discuss shelving for a project similar to the examples on your website.',
  },
  about: {
    title: 'About Al Shamikh shelving and décor',
    description: 'Learn how Al Shamikh discusses shelving and storage needs for warehouses, stores, supermarkets, grocery businesses and pharmacies in Jeddah and Riyadh.',
    eyebrow: 'About Al Shamikh', h1: 'Storage and display start with understanding the space',
    lead: 'Al Shamikh supplies shelving for warehouses, stores, supermarkets, grocery businesses and pharmacies. We discuss the site, products and intended use before recommending options.',
    heroImage: '/photos/hero-about.webp', heroAlt: 'Illustrative organized storage and display environment',
    sections: [
      { eyebrow: 'Our approach', title: 'A solution shaped around your project', intro: 'Useful shelving depends on the activity, available dimensions, products and the movement of people or stock.', points: ['Understand the type of business', 'Review the available floor area and height', 'Discuss the goods and how they are accessed', 'Confirm product details and available services before quoting'] },
      { eyebrow: 'Product choice', title: 'Compare the options that fit', intro: 'Available systems and product specifications vary. Ask for the origin, dimensions and other confirmed product details when discussing an option; do not assume an image is a final specification.', cards: [
        { title: 'Warehouse storage', text: 'Racks for different storage requirements.', href: 'warehouse-racking', image: '/photos/warehouse-2.jpeg' },
        { title: 'Retail display', text: 'Shelving for supermarkets, groceries, pharmacies and stores.', href: 'retail-shelving', image: '/photos/market.webp' },
      ] },
      { eyebrow: 'Working together', title: 'From your inquiry to a defined scope', intro: 'Describe your project and share available site details. We can discuss suitable shelving and clarify product availability, supply and any requested installation scope before a quotation.', points: ['Tell us what the space is used for', 'Share dimensions, products and reference images', 'Discuss suitable options', 'Confirm the available services and scope', 'Review the quotation for your project'] },
      { eyebrow: 'Service areas', title: 'Projects in Jeddah and Riyadh', intro: 'Al Shamikh serves projects in both cities. City coverage does not imply a physical branch or walk-in address.', cards: [
        { title: 'Jeddah', text: 'Explore shelving for Jeddah projects.', href: 'jeddah' },
        { title: 'Riyadh', text: 'Explore shelving for Riyadh projects.', href: 'riyadh' },
      ] },
    ],
    message: 'Hello, I would like to discuss shelving for my project.',
  },
  jeddah: {
    title: 'Warehouse and store shelving in Jeddah | Al Shamikh',
    description: 'Al Shamikh serves shelving projects in Jeddah. Discuss warehouse racks, supermarket, grocery and pharmacy shelving for your site.',
    eyebrow: 'Serving Jeddah', h1: 'Warehouse and retail shelving in Jeddah',
    lead: 'Al Shamikh serves shelving projects in Jeddah. Tell us whether you need warehouse storage or retail display, and share your site details to discuss suitable options.',
    heroImage: '/photos/hero-jeddah.webp', heroAlt: 'Illustrative warehouse shelving for a Jeddah project inquiry',
    sections: [
      { eyebrow: 'For your business', title: 'Shelving categories available to discuss', cards: [
        { title: 'Warehouse racks', text: 'Heavy, medium and light storage needs assessed against the goods and site.', href: 'warehouse-racking', image: '/photos/warehouse-2.jpeg' },
        { title: 'Supermarket and grocery shelving', text: 'Display layouts based on product categories and customer access.', href: 'retail-shelving', image: '/photos/market.webp' },
        { title: 'Pharmacy and commercial display', text: 'Shelving for retail products and the workflow of the space.', href: 'retail-shelving', image: '/photos/pharmacy.jpeg' },
      ] },
      { eyebrow: 'Selecting a solution', title: 'What to share about a Jeddah project', intro: 'Tell us the activity, products, site dimensions and preferred arrangement. Photos or plans are helpful when available.', points: ['Jeddah project location', 'Warehouse or retail use', 'Floor area and available height', 'Products, sizes and access needs', 'Reference photos or a floor plan'] },
      { eyebrow: 'Request a quote', title: 'Discuss your project directly', intro: quote + ' ' + install },
      { eyebrow: 'Explore further', title: 'Relevant shelving pages', cards: [
        { title: 'Warehouse shelving', text: 'Storage racks and planning factors.', href: 'warehouse-racking' },
        { title: 'Retail shelving', text: 'Store, supermarket and pharmacy display.', href: 'retail-shelving' },
        { title: 'Riyadh coverage', text: 'The same service categories are also available to discuss for Riyadh projects.', href: 'riyadh' },
      ] },
    ],
    faqs: [
      { question: 'Does Al Shamikh serve projects in Jeddah?', answer: 'Yes. Jeddah is a confirmed service area for Al Shamikh.' },
      { question: 'Is there a Jeddah showroom or branch?', answer: 'This site does not list a confirmed walk-in branch or address. Please contact Al Shamikh to discuss your project.' },
      { question: 'What helps you prepare a Jeddah shelving quote?', answer: 'The business type, site dimensions, product categories and any available photos or plans are useful.' },
      { question: 'How do I choose warehouse racks for a Jeddah site?', answer: 'Start with the goods’ weight and dimensions, site height, aisles and handling method. Capacity must be checked against confirmed product specifications.' },
      { question: 'What store shelving can I discuss for Jeddah?', answer: 'Options include supermarket, grocery and commercial display shelving, including wall and central units. The layout depends on your products and site.' },
      { question: 'Is installation available?', answer: install },
    ],
    message: 'Hello, I would like a quote for shelving for a project in Jeddah.',
  },
  riyadh: {
    title: 'Warehouse and store shelving in Riyadh | Al Shamikh',
    description: 'Al Shamikh serves shelving projects in Riyadh. Discuss warehouse racks, supermarket, grocery and pharmacy shelving for your site.',
    eyebrow: 'Serving Riyadh', h1: 'Warehouse and retail shelving in Riyadh',
    lead: 'Al Shamikh serves shelving projects in Riyadh. Tell us about your warehouse or retail space and the products you need to store or display.',
    heroImage: '/photos/hero-riyadh.webp', heroAlt: 'Illustrative retail and warehouse shelving for a Riyadh project inquiry',
    sections: [
      { eyebrow: 'For your business', title: 'Shelving options for Riyadh projects', cards: [
        { title: 'Warehouse shelving', text: 'Discuss storage needs, goods, aisles and handling.', href: 'warehouse-racking', image: '/photos/warehouse-2.jpeg' },
        { title: 'Supermarket and grocery shelving', text: 'Arrange product sections and customer access.', href: 'retail-shelving', image: '/photos/market.webp' },
        { title: 'Pharmacy and store displays', text: 'Plan around products and daily use of the space.', href: 'retail-shelving', image: '/photos/pharmacy.jpeg' },
      ] },
      { eyebrow: 'Choosing a system', title: 'Start with the way your site works', intro: 'The appropriate shelving depends on site dimensions, item size and weight, access and any future changes to the space.', points: ['Riyadh project location and business type', 'Area, height and available aisles', 'Products and how they are handled', 'Photos or a site plan if available'] },
      { eyebrow: 'Request a quote', title: 'Share your project requirements', intro: quote + ' ' + install },
      { eyebrow: 'Explore further', title: 'Relevant shelving pages', cards: [
        { title: 'Warehouse racks', text: 'Storage requirements and quotation details.', href: 'warehouse-racking' },
        { title: 'Retail shelving', text: 'Display options for stores and pharmacies.', href: 'retail-shelving' },
        { title: 'Jeddah coverage', text: 'The same service categories are also available to discuss for Jeddah projects.', href: 'jeddah' },
      ] },
    ],
    faqs: [
      { question: 'Does Al Shamikh serve projects in Riyadh?', answer: 'Yes. Riyadh is a confirmed service area for Al Shamikh.' },
      { question: 'Is there a Riyadh branch or showroom?', answer: 'No physical branch or walk-in address is confirmed on this site. Contact Al Shamikh about your project.' },
      { question: 'Can I request warehouse or retail shelving?', answer: 'Yes. Share the site and product details so the appropriate options can be discussed.' },
      { question: 'What information helps with a Riyadh quotation?', answer: 'Share the business type, dimensions, products, storage or display method and any useful site photos or plan.' },
      { question: 'How do I choose warehouse racks?', answer: 'Review the goods’ weight and dimensions, site height, aisles and handling method. Capacity requires confirmed product specifications.' },
      { question: 'Which retail shelving categories are available?', answer: 'Discuss supermarket, grocery, pharmacy and other store shelving. Wall and central display units depend on the site and products.' },
      { question: 'Is installation included?', answer: install },
    ],
    message: 'Hello, I would like a quote for shelving for a project in Riyadh.',
  },
};

export const englishSpecialMeta = {
  '': {
    title: 'Warehouse and retail shelving in Jeddah and Riyadh | Al Shamikh',
    description: 'Al Shamikh supplies warehouse racks and shelving for stores, supermarkets, grocery businesses and pharmacies in Jeddah and Riyadh.',
  },
  contact: {
    title: 'Contact Al Shamikh about shelving | Jeddah and Riyadh',
    description: 'Share your shelving project details with Al Shamikh. Prepare a WhatsApp inquiry for warehouse, supermarket, grocery or pharmacy shelving.',
  },
  privacy: {
    title: 'Privacy policy | Al Shamikh',
    description: 'Learn how the Al Shamikh website prepares WhatsApp inquiries, uses Cloudflare hosting and analytics, and handles information you choose to share.',
  },
  terms: {
    title: 'Terms of use | Al Shamikh',
    description: 'Understand how Al Shamikh describes shelving, illustrative images, quotations, service areas and external WhatsApp links.',
  },
} as const;
