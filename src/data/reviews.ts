export type Review = {
  name: string;
  rating: number;
  quote: string;
  source: string;
};

// PLACEHOLDER — replace with real patient reviews (Google/Yelp/Facebook) before launch.
export const reviews: Review[] = [
  {
    name: "Amanda R.",
    rating: 5,
    quote:
      "Dr. E and her team are incredible. I've never felt more comfortable at a dental office — everyone is warm, patient, and genuinely cares about you.",
    source: "Google",
  },
  {
    name: "Mike T.",
    rating: 5,
    quote:
      "Best dentist in Ahwatukee, hands down. The whole team explains everything clearly and the office feels more like a spa than a dental clinic.",
    source: "Yelp",
  },
  {
    name: "Priya S.",
    rating: 5,
    quote:
      "I was nervous about getting veneers but Dr. E walked me through every step. The results look completely natural — I get compliments constantly.",
    source: "Google",
  },
  {
    name: "Carlos D.",
    rating: 5,
    quote:
      "We've been bringing our whole family here for years. The hygienists are gentle with our kids and Dr. E always takes the time to answer questions.",
    source: "Facebook",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    quote:
      "The Tekscan bite analysis made a huge difference for my TMJ pain. So glad I found a practice that invests in this kind of technology.",
    source: "Google",
  },
];
