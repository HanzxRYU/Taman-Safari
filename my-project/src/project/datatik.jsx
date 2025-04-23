// datatik.jsx

const destinations = [
  {
    name: "Curug Jaksa",
    category: "favorit",
  },
  {
    name: "Istana Panda",
    category: "favorit",
  },
  {
    name: "Tempat Makan Rainforest",
    category: "favorit",
  },
  {
    name: "Pertunjukan Lumba-Lumba",
    category: "biasa",
  },
  {
    name: "Kebun Binatang",
    category: "biasa",
  },
];

const basePricesWeekday = {
  anak: 20000,
  remaja: 30000,
  dewasa: 40000,
};

const weekendMultiplier = 1.12;
const favoritMultiplier = 1.1;

const getTicketPrice = (destinationName, usia, waktu) => {
  const dest = destinations.find((d) => d.name === destinationName);
  if (!dest || !basePricesWeekday[usia]) return null;

  let price = basePricesWeekday[usia];

  // Weekend kenaikan 12%
  if (waktu === "weekend") {
    price *= weekendMultiplier;
  }

  // Destinasi favorit kenaikan 10%
  if (dest.category === "favorit") {
    price *= favoritMultiplier;
  }

  return Math.round(price);
};

export { destinations, basePricesWeekday, getTicketPrice };
