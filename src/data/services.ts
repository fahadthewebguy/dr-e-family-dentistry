export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  heroImage: string;
  heroImageAlt: string;
  featured?: boolean;
  content: {
    heading: string;
    body: string[];
  }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    shortDescription:
      "Your oral health affects more than just the appearance of your smile – it directly affects your overall health and well-being.",
    heroImage: "/images/services/general-dentistry.jpg",
    heroImageAlt: "Dentist examining a patient's teeth during a general checkup",
    featured: true,
    content: [
      {
        heading: "Comprehensive Care for the Whole Family",
        body: [
          "Your oral health affects more than just the appearance of your smile – it directly affects your overall health and well-being. Dr. E's office provides examinations and x-rays, periodontal therapy, general dental hygiene care, bridges, occlusal guards, snoreguards, sealants, crowns, tooth-colored fillings, implant restorations, dentures, smile makeovers, bleaching, and Invisalign.",
          "Oral hygiene is the fundamental component to a beautiful smile, and maintaining it can reduce your risk of complications like heart disease, diabetes, and certain cancers.",
        ],
      },
      {
        heading: "Comfortable, Personalized Care",
        body: [
          "For patients who feel anxious about dental visits, Dr. E offers nitrous oxide sedation — a painless and simple way to reduce anxiety that is quickly reversed with minimal aftereffects.",
          "Every visit is tailored to your specific needs, with thorough oral health evaluations to help you maintain a healthy, confident smile for years to come.",
        ],
      },
    ],
    metaTitle: "General Dentistry in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "Comprehensive general dentistry in Ahwatukee, Phoenix — exams, hygiene, fillings, crowns, and more from Dr. Janet Euzarraga, DDS.",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    shortDescription:
      "Gaps, chips, discolored or misshaped teeth can now be treated with excellent results to enhance your smile.",
    heroImage: "/images/services/cosmetic-dentistry.jpg",
    heroImageAlt: "Woman smiling with a bright, healthy smile after cosmetic dentistry",
    featured: true,
    content: [
      {
        heading: "An Individual, Natural-Looking Smile",
        body: [
          "Gaps, chips, discolored or misshaped teeth can now be treated with excellent results to enhance your smile. Dr. E's approach preserves as much of your natural tooth structure as possible while creating an individual, natural-looking smile custom-made for you.",
          "Cosmetic dentistry can also play an important role in correcting TMJ (temporomandibular joint disorder), combining art and science to restore both form and function.",
        ],
      },
      {
        heading: "Designed Around Your Vision",
        body: [
          "Dr. E works with before-and-after models and photographs to communicate your cosmetic plan clearly. Patients are encouraged to bring in photos of smiles they love — her team will design a custom smile with your vision in mind.",
          "The goal is always a healthy, naturally bright smile that exudes confidence, well-being, and youthfulness.",
        ],
      },
    ],
    metaTitle: "Cosmetic Dentist in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "Transform your smile with cosmetic dentistry in Ahwatukee, Phoenix. Natural-looking results tailored to you by Dr. Janet Euzarraga, DDS.",
  },
  {
    slug: "examination-and-x-rays",
    name: "Examination and X-rays",
    shortDescription:
      "A comprehensive dental examination evaluating your teeth and supporting structures, with modern low-radiation digital imaging.",
    heroImage: "/images/services/examination-xrays.jpg",
    heroImageAlt: "Dental hygienist reviewing digital x-rays with a patient",
    content: [
      {
        heading: "A Thorough, Comfortable Evaluation",
        body: [
          "Dr. E will apply the same care and expertise to provide a comprehensive dental examination, evaluating your teeth and supporting structures, such as bone and soft tissue.",
          "The office uses digital radiography, which reduces radiation exposure compared to traditional x-rays and allows findings to be displayed right on a computer screen so you can see exactly what she sees.",
        ],
      },
      {
        heading: "Screening & Patient Education",
        body: [
          "Every visit includes an oral cancer screening and a thorough gum health assessment. Intra-oral photography and digital monitors help you visualize your dental condition and understand any recommended treatment.",
          "Dr. E's team takes time to explain procedures and demonstrate equipment so you feel comfortable and informed throughout your visit.",
        ],
      },
    ],
    metaTitle: "Dental Exams & Digital X-Rays in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "Comprehensive dental exams and low-radiation digital x-rays in Ahwatukee, Phoenix with Dr. Janet Euzarraga, DDS.",
  },
  {
    slug: "dental-hygiene",
    name: "Dental Hygiene",
    shortDescription:
      "Dental hygiene services can, in the long term, be the most valuable service we can offer our patients. Dr. E's office boasts top-notch hygienists.",
    heroImage: "/images/services/dental-hygiene.jpg",
    heroImageAlt: "Dental hygienist performing a professional teeth cleaning",
    featured: true,
    content: [
      {
        heading: "The Foundation of Your Care",
        body: [
          "Dental hygiene services can, in the long term, be the most valuable service we can offer our patients. Dr. E's office boasts top-notch hygienists who prioritize early problem detection — catching issues while they're easier and less costly to repair.",
          "Oral hygiene is the foundation for your care at the office of Janet Euzarraga, DDS.",
        ],
      },
      {
        heading: "Our Hygiene Services",
        body: [
          "Prophylaxis (regular cleanings) for patients without signs of gum disease.",
          "Scaling and root planing to remove hardened deposits above and below the gumline.",
          "Laser treatment to remove infected tissue inside the periodontal (gum) pocket.",
          "Arestin, an antibiotic placed in gum pockets after treatment to eliminate bacteria.",
          "Sealants — a protective resin coating for back teeth that prevents decay in pits and fissures.",
          "Fluoride varnish to reduce sensitivity and strengthen enamel.",
        ],
      },
    ],
    metaTitle: "Dental Hygiene & Cleanings in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "Top-notch dental hygiene care in Ahwatukee, Phoenix — cleanings, periodontal therapy, and preventive care from Dr. E's team.",
  },
  {
    slug: "tekscan",
    name: "Tekscan",
    shortDescription:
      "Dentistry's only clinically recognized and research validated digital occlusion analysis system — a differentiator in how Dr. E diagnoses bite issues.",
    heroImage: "/images/services/tekscan.jpg",
    heroImageAlt: "Digital dental technology used to analyze a patient's bite",
    content: [
      {
        heading: "Precision Bite Analysis",
        body: [
          "Dr. E's practice uses T-Scan® Novus™, dentistry's only clinically recognized and research validated digital occlusion analysis system. It reveals bite dynamics that traditional articulating paper simply cannot detect.",
          "The system captures multidimensional data showing the force, location, and timing of occlusal contacts — from the first point of contact through complete disclusion — allowing Dr. E to identify premature contacts and force imbalances with precision.",
        ],
      },
      {
        heading: "Why It Matters",
        body: [
          "Research shows that 94% of dentists struggle to pinpoint occlusion using articulating paper alone. T-Scan gives Dr. E's team a clear diagnostic advantage across restorations, veneers, implants, orthodontics, and TMD management.",
          "It also serves as a valuable educational tool, letting Dr. E visually demonstrate your bite mechanics and explain your treatment plan in a way that's easy to understand.",
        ],
      },
    ],
    metaTitle: "Tekscan Digital Bite Analysis in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "T-Scan digital occlusion analysis in Ahwatukee, Phoenix — precision bite diagnostics from Dr. Janet Euzarraga, DDS.",
  },
  {
    slug: "dental-sealants",
    name: "Dental Sealants",
    shortDescription:
      "Professionally applied sealants are intended to prevent cavities in the pits and fissures of teeth.",
    heroImage: "/images/services/dental-sealants.jpg",
    heroImageAlt: "Close-up of a child receiving a dental sealant treatment",
    content: [
      {
        heading: "A Simple, Effective Layer of Protection",
        body: [
          "Dental sealants, professionally applied by Dr. E, are intended to prevent cavities in the pits and fissures of teeth. Brushing and flossing alone can't always reach the tiny grooves where food and bacteria accumulate.",
          "By forming a thin covering over the pits and fissures, sealants keep out plaque and food, decreasing the risk of decay.",
        ],
      },
      {
        heading: "Who Benefits",
        body: [
          "Sealants are ideal for posterior teeth without signs of decay, particularly first and second molars. Children typically begin treatment around ages 5-7 when first molars emerge, with additional applications around ages 11-14 for second molars. Adults with decay-free molars and premolars can benefit too.",
          "Sealants are resilient during normal chewing and usually last several years before a reapplication is needed. Dr. E's team monitors existing sealants at routine visits to determine if replacement is necessary.",
        ],
      },
    ],
    metaTitle: "Dental Sealants in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "Protective dental sealants for kids and adults in Ahwatukee, Phoenix — cavity prevention from Dr. Janet Euzarraga, DDS.",
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription:
      "A long-term, stable solution to replace missing teeth or removable dentures — restored by Dr. E for a natural look and feel.",
    heroImage: "/images/services/dental-implants.jpg",
    heroImageAlt: "3D illustration style photo representing a dental implant restoration",
    content: [
      {
        heading: "A Long-Term Solution",
        body: [
          "Dental implants are a solution for individuals uncomfortable with missing teeth or removable dentures/appliances. They're long-term tooth replacements surgically placed in the bone by a surgeon and restored by Dr. E.",
          "Implants are made of titanium and biocompatible materials that fuse with your jawbone, so they're notably stable and cannot decay. Replacement teeth are crafted from porcelain or pressed-zirconium for a natural appearance.",
        ],
      },
      {
        heading: "The Process",
        body: [
          "1. Surgical placement of the implant into the jawbone.",
          "2. Osseointegration — the bone heals around the implant, which can take up to several months or as little as the same day.",
          "3. Placement of your custom artificial tooth, fabricated by Dr. E (a temporary crown may be provided while it's made).",
          "Dr. E's office collaborates closely with trusted oral surgeons and periodontists to ensure the best possible outcome, replacing missing teeth with results that look and feel natural — while removing dietary restrictions and improving your confidence when smiling and speaking.",
        ],
      },
    ],
    metaTitle: "Dental Implants in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "Natural-looking, long-lasting dental implants in Ahwatukee, Phoenix, restored by Dr. Janet Euzarraga, DDS.",
  },
  {
    slug: "dental-crowns",
    name: "Dental Crowns",
    shortDescription:
      "Dental crowns, usually porcelain, are oftentimes used in conjunction with other dental procedures to create a smile makeover that's just right for you.",
    heroImage: "/images/services/dental-crowns.jpg",
    heroImageAlt: "Dentist holding a porcelain dental crown model",
    content: [
      {
        heading: "Restoring Strength and Beauty",
        body: [
          "Dental crowns, usually porcelain, are oftentimes used in conjunction with other dental procedures to create a smile makeover that's just right for you. Crowns restore a tooth's shape and size while improving its appearance and strengthening it.",
          "Porcelain crowns address a wide range of dental issues, including root canal therapy aftermath, fractures, extensive decay, broken fillings, and wear-related damage. Dr. E's office prefers porcelain for its durability and its ability to match your natural tooth color.",
        ],
      },
      {
        heading: "What to Expect",
        body: [
          "Crown creation typically requires two appointments. During your first visit, Dr. Euzarraga examines the tooth, takes digital x-rays, removes any decay, and takes impressions while placing a temporary crown. Your second visit involves placing the permanent crown using advanced bonding technology.",
          "Dr. E's office partners with reputable dental laboratories, using superior materials and technology to deliver healthy, functional, long-lasting crowns that create the most natural smile possible.",
        ],
      },
    ],
    metaTitle: "Dental Crowns in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "Natural-looking porcelain dental crowns in Ahwatukee, Phoenix from Dr. Janet Euzarraga, DDS.",
  },
  {
    slug: "dental-veneers",
    name: "Dental Veneers",
    shortDescription:
      "Thin, custom-made shells that permanently cover the front of your teeth to quickly, comfortably, and beautifully transform your smile.",
    heroImage: "/images/services/dental-veneers.jpg",
    heroImageAlt: "Close-up of a woman's smile showing natural-looking dental veneers",
    content: [
      {
        heading: "A Beautiful, Custom Transformation",
        body: [
          "Dental veneers are thin, custom-made shells made to permanently cover the front of your teeth. They can address multiple cosmetic concerns at once, including discoloration, chips, gaps between teeth, and uneven tooth lengths.",
          "Veneers can quickly, comfortably, and beautifully transform your smile — especially for front teeth with permanent stains that don't respond to whitening, spaces between teeth, or teeth that are poorly formed or worn.",
        ],
      },
      {
        heading: "An Important Consideration",
        body: [
          "The placement of veneers is usually an irreversible process, since a small amount of enamel is removed from your natural teeth to apply the shell. Dr. E will walk you through the process in detail so you can decide, together, whether veneers are the right choice for your smile.",
        ],
      },
    ],
    metaTitle: "Dental Veneers in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "Custom porcelain veneers in Ahwatukee, Phoenix to transform your smile — from Dr. Janet Euzarraga, DDS.",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription:
      "Professional at-home and in-office whitening options — including Philips Zoom — for a brighter smile in as little as 45 minutes.",
    heroImage: "/images/services/teeth-whitening.jpg",
    heroImageAlt: "Woman with a bright white smile after a professional teeth whitening treatment",
    content: [
      {
        heading: "Two Ways to Brighten Your Smile",
        body: [
          "At-home whitening: custom-made bleaching trays and syringes containing a safe bleaching gel let you control your whitening timeline on your own schedule. The process involves two visits — one for impressions, and another to receive your custom trays and bleaching agent.",
          "In-office whitening: Dr. E's office uses Philips Zoom technology, where whitening gel is applied to your teeth and an LED light accelerates the results — giving you up to eight shades whiter teeth in about 45 minutes.",
        ],
      },
      {
        heading: "Safe, Effective Results",
        body: [
          "Professional whitening addresses discoloration caused by coffee, tea, wine, smoking, and other everyday habits. It does not harm your teeth or cause problems with gum tissue, and it doesn't affect enamel wear rates.",
          "Keep in mind that fillings and crowns don't bleach, so existing restorations won't lighten with treatment — Dr. E can help you plan around this for the most even, natural-looking results.",
        ],
      },
    ],
    metaTitle: "Teeth Whitening in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "Professional at-home and in-office (Philips Zoom) teeth whitening in Ahwatukee, Phoenix with Dr. Janet Euzarraga, DDS.",
  },
  {
    slug: "teeth-bonding",
    name: "Teeth Bonding",
    shortDescription:
      "Tooth-colored materials are bonded directly to your tooth to change its color and shape — a fast, conservative way to refine your smile.",
    heroImage: "/images/services/teeth-bonding.jpg",
    heroImageAlt: "Dentist applying cosmetic bonding material to a patient's tooth",
    content: [
      {
        heading: "A Fast, Conservative Fix",
        body: [
          "Cosmetic tooth bonding describes a process where Dr. E attaches, or \"bonds,\" tooth-colored materials directly to your tooth in order to change its color and shape. Your natural tooth enamel fuses with bonding materials like porcelain and resins to form a durable structure that matches the feel of your original tooth.",
        ],
      },
      {
        heading: "What Bonding Can Address",
        body: [
          "Closing gaps between teeth.",
          "Repairing chipped teeth.",
          "Protecting exposed roots.",
          "Restoring decayed teeth.",
          "Ask Dr. E whether your ideal smile can be achieved through bonding — it's often one of the quickest ways to see a noticeable improvement.",
        ],
      },
    ],
    metaTitle: "Teeth Bonding in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
    metaDescription:
      "Cosmetic tooth bonding in Ahwatukee, Phoenix — a fast, conservative way to refine your smile with Dr. Janet Euzarraga, DDS.",
  },
];

export const smileMakeover = {
  slug: "smile-makeover",
  name: "Smile Makeover",
  shortDescription:
    "Transform your smile. Gain new confidence while also ensuring your dental health with Dr. E's personal approach to your Smile Makeover.",
  heroImage: "/images/services/smile-makeover.jpg",
  heroImageAlt: "Split before and after image of a patient's smile makeover",
  content: [
    {
      heading: "Health First, Then Beauty",
      body: [
        "Transform your smile. Gain new confidence while also ensuring your dental health with Dr. E's personal approach to your Smile Makeover. First, it's necessary to rule out dental decay and/or gum disease — a healthy foundation always comes before cosmetic work.",
        "Once your teeth and gums are healthy, Dr. E will help you choose from a range of improvement options, including teeth whitening, Invisalign clear aligners, veneers, crowns, and tooth-colored bonding.",
      ],
    },
    {
      heading: "Why a Smile Makeover Matters",
      body: [
        "Research shows that nearly a third of Americans notice teeth first when meeting someone, and people with straight, healthy-looking teeth are often perceived as more likely to succeed both professionally and personally.",
        "Dr. E takes a personal and custom approach to creating the best possible outcome for each individual patient. Call 480-494-2435 to schedule a complimentary smile evaluation.",
      ],
    },
  ],
  metaTitle: "Smile Makeover in Ahwatukee, Phoenix AZ | Dr. E Family Dentistry",
  metaDescription:
    "A personalized Smile Makeover in Ahwatukee, Phoenix — whitening, veneers, crowns, Invisalign, and bonding from Dr. Janet Euzarraga, DDS.",
};

export function getServiceBySlug(slug: string) {
  if (slug === smileMakeover.slug) return smileMakeover;
  return services.find((s) => s.slug === slug);
}

export const featuredServices = services.filter((s) => s.featured);
