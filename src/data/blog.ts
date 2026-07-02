export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  image: string;
  imageAlt: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "summer-sports-mouthguards-protecting-your-familys-smiles",
    title: "Summer Sports, Mouthguards, and Protecting Your Family's Smiles",
    date: "2026-05-18",
    excerpt:
      "With summer sports season in full swing, a properly fitted mouthguard is one of the simplest ways to protect your family's smiles from a sideline trip to the dentist.",
    image: "/images/blog/mouthguards.jpg",
    imageAlt: "Youth athlete holding a sports mouthguard on a sunny field",
    content: [
      "{/* PLACEHOLDER — replace with real blog copy from drefamilydental.com */}",
      "Summer means baseball, soccer, and plenty of time outdoors for active families in Ahwatukee — and it also means a higher risk of dental injuries. A custom-fitted mouthguard from Dr. E's office offers far better protection and comfort than an over-the-counter option, cushioning impacts that could otherwise chip a tooth or injure the jaw.",
      "If your family plays contact sports this summer, ask Dr. E's team about custom mouthguards at your next visit.",
    ],
  },
  {
    slug: "the-oral-microbiome-why-not-all-mouth-bacteria-are-bad",
    title: "The Oral Microbiome: Why Not All Mouth Bacteria Are Bad",
    date: "2026-04-02",
    excerpt:
      "Your mouth is home to hundreds of species of bacteria — and most of them are actually working in your favor. Here's what a healthy oral microbiome looks like.",
    image: "/images/blog/oral-microbiome.jpg",
    imageAlt: "Illustration-style close up of a healthy smile",
    content: [
      "{/* PLACEHOLDER — replace with real blog copy from drefamilydental.com */}",
      "It's easy to think of mouth bacteria as the enemy, but a balanced oral microbiome actually helps protect your teeth and gums. Problems arise when that balance is disrupted by poor hygiene, sugar-heavy diets, or skipped hygiene visits.",
      "Regular cleanings with Dr. E's hygiene team help keep your oral microbiome in a healthy balance, supporting both your smile and your overall health.",
    ],
  },
  {
    slug: "why-end-of-school-dental-visits-matter",
    title: "Why End-of-School Dental Visits Matter",
    date: "2026-05-01",
    excerpt:
      "Before the school year wraps up, it's the perfect time to schedule a checkup — especially with fall sports physicals and paperwork right around the corner.",
    image: "/images/blog/end-of-school-visits.jpg",
    imageAlt: "Parent and child at a dental checkup",
    content: [
      "{/* PLACEHOLDER — replace with real blog copy from drefamilydental.com */}",
      "As the school year winds down, it's a great time to schedule your kids' dental checkups before summer schedules get busy. Staying ahead of cleanings and exams now means fewer surprises when fall physical forms are due.",
      "Dr. E's office makes it easy to get the whole family seen before summer break begins.",
    ],
  },
  {
    slug: "overcoming-dental-anxiety-youre-not-alone-and-you-have-options",
    title: "Overcoming Dental Anxiety: You're Not Alone—and You Have Options",
    date: "2026-03-10",
    excerpt:
      "Dental anxiety is more common than you might think. Here's how Dr. E's office helps nervous patients feel calm, comfortable, and in control.",
    image: "/images/blog/dental-anxiety.jpg",
    imageAlt: "Relaxed patient in a comfortable dental chair",
    content: [
      "{/* PLACEHOLDER — replace with real blog copy from drefamilydental.com */}",
      "If the thought of a dental visit makes you anxious, you're far from alone — and there are real options to help. Dr. E offers nitrous oxide sedation, a gentle, quickly reversible way to ease anxiety during treatment.",
      "Her team also takes time to walk through every step of a procedure beforehand, so nothing feels unfamiliar or unexpected once you're in the chair.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
