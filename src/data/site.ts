export const site = {
  name: "Dr. E Cosmetic & Family Dentistry",
  dentist: "Janet Euzarraga, DDS",
  dentistShort: "Dr. E",
  tagline: "Ahwatukee's Voted Best Dentist",
  url: "https://www.drefamilydental.com",
  phone: "480-494-2435",
  phoneHref: "tel:+14804942435",
  smsHref: "sms:+14804942435",
  email: "info@drEfamilydental.com",
  address: {
    line1: "4206 E. Chandler Blvd. Suite #20",
    city: "Phoenix",
    state: "AZ",
    zip: "85048",
    full: "4206 E. Chandler Blvd. Suite #20, Phoenix, AZ 85048",
  },
  geo: {
    lat: 33.3242,
    lng: -111.9773,
  },
  hours: [
    { days: "Monday - Thursday", time: "8:00 AM - 5:00 PM" },
    { days: "Friday", time: "Closed" },
    { days: "Saturday - Sunday", time: "Closed" },
  ],
  hoursShort: "Mon-Thurs 8am-5pm · Fridays Closed",
  memberships: [
    { name: "American Dental Association", abbr: "ADA" },
    { name: "American Academy of Cosmetic Dentistry", abbr: "AACD" },
    { name: "Arizona State Dental Association", abbr: "AzDA" },
  ],
  award: {
    title: "#1 Best Dentist Winner",
    years: "2017-2025",
    source: "Ahwatukee Foothills News",
    community: "Ahwatukee",
  },
  socials: {
    facebook: "https://facebook.com/DrJanetEuzarraga",
    twitter: "https://twitter.com/DrEDentistry",
    yelp: "https://www.yelp.com/biz/dr-e-cosmetic-and-family-dentistry-phoenix",
  },
  mapEmbedSrc:
    "https://www.google.com/maps?q=4206+E+Chandler+Blvd+Suite+20+Phoenix+AZ+85048&output=embed",
} as const;
