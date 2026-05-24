import { product } from "./product";

export const heroData = {
  badge: "100% Best Healthy Product",
  productName: product.name,
  title: "Always be yourself",
  subtitle: product.description,
  cta: "Shop Now",
  bottles: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=280&h=500&fit=crop",
      alt: "Green organic juice bottle",
      size: "large",
      position: "center",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1563917614275-1462d77d8bfb?w=220&h=420&fit=crop",
      alt: "Aloe vera drink bottle",
      size: "medium",
      position: "left",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=220&h=420&fit=crop",
      alt: "Tropical smoothie bottle",
      size: "medium",
      position: "right",
    },
  ],
};
