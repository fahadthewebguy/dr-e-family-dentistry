export type TeamMember = {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  bio: string[];
  isPlaceholderPhoto?: boolean;
};

export const drE: TeamMember = {
  name: "Janet Euzarraga, DDS",
  role: '"Dr. E" — Lead Dentist',
  image: "/images/team/dr-e.jpg",
  imageAlt: "Portrait of Dr. Janet Euzarraga, DDS",
  bio: [
    "Dr. Euzarraga has practiced dentistry for over 30 years, a passion first sparked at age 10 after a softball injury led to dental work. She grew up near Chicago, and it was that early experience that set her on the path to dentistry.",
    "She earned her undergraduate degree in Biology from Loyola University of Chicago and her dental degree from Loyola University School of Dentistry in 1987. She went on to complete advanced training in Fixed Prosthodontics at the Las Vegas Institute for Advanced Dental Studies, along with a residency at the Esthetic Professionals/Dental Education Center in California (2006-2007).",
    "After 14 years practicing in northern Illinois, Dr. Euzarraga established her practice in Arizona's Ahwatukee community in 2001, where she's been proud to call this community home ever since.",
    "Dr. E is a member of the American Dental Association, the Arizona State Dental Association, and the American Academy of Cosmetic Dentistry.",
    "Outside the office, she has two grown sons, Christopher and Jonathan, and enjoys baking, biking, scrapbooking, and walking her dogs.",
  ],
};

export const hygienists: TeamMember[] = [
  {
    name: "Dina Capriato-Poston",
    role: "Dental Hygienist",
    image: "/images/team/hygienist-1.jpg",
    imageAlt: "Portrait of a dental hygienist smiling",
    isPlaceholderPhoto: true,
    bio: [
      "A valued member of Dr. E's hygiene team, dedicated to helping patients maintain healthy, beautiful smiles through thorough, gentle care.",
    ],
  },
  {
    name: "Rosio Avina",
    role: "Dental Hygienist",
    image: "/images/team/hygienist-2.jpg",
    imageAlt: "Portrait of a dental hygienist smiling",
    isPlaceholderPhoto: true,
    bio: [
      "Brings warmth and attention to detail to every cleaning and hygiene visit, helping patients feel comfortable from the moment they sit down.",
    ],
  },
  {
    name: "Carmen Salaiz",
    role: "Dental Hygienist",
    image: "/images/team/hygienist-3.jpg",
    imageAlt: "Portrait of a dental hygienist smiling",
    isPlaceholderPhoto: true,
    bio: [
      "Focused on preventive care and patient education, helping families build healthy habits that last well beyond the appointment.",
    ],
  },
  {
    name: "Sharon Brockman",
    role: "Dental Hygienist",
    image: "/images/team/hygienist-4.jpg",
    imageAlt: "Portrait of a dental hygienist smiling",
    isPlaceholderPhoto: true,
    bio: [
      "A longtime part of the Dr. E team, known by patients for a gentle touch and genuine care for their long-term oral health.",
    ],
  },
  {
    name: "Lisa Stringer-Garcia",
    role: "Dental Hygienist",
    image: "/images/team/hygienist-5.jpg",
    imageAlt: "Portrait of a dental hygienist smiling",
    isPlaceholderPhoto: true,
    bio: [
      "Combines clinical expertise with a friendly chairside manner, helping every patient leave with a healthier, brighter smile.",
    ],
  },
];
