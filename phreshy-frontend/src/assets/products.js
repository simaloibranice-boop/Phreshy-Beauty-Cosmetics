import lascorbic from "./products/lascorbic.jpg";
import niacinamide from "./products/niacinamide.jpg";
import hyaluronic from "./products/hyaluronic.jpg";

const products = [
  {
    id: 1,
    name: "L-Ascorbic Acid 15% Serum",
    brand: "SkinCeuticals",
    price: 8200,
    description:
      "15% pure L-Ascorbic Acid neutralizes free radicals, stimulates collagen production, and improves skin radiance.",
    image: lascorbic,
  },
  {
    id: 2,
    name: "Niacinamide 10% + Zinc Serum",
    brand: "The Ordinary",
    price: 1800,
    description:
      "Niacinamide reduces inflammation and regulates sebum while Zinc controls acne-causing bacteria.",
    image: niacinamide,
  },
  {
    id: 3,
    name: "Hyaluronic Acid Hydrating Serum",
    brand: "La Roche-Posay",
    price: 3500,
    description:
      "Hyaluronic Acid binds water to the skin, providing deep hydration and improving elasticity.",
    image: hyaluronic,
  },
];

export default products;
