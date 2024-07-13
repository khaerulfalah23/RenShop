/// <reference types="vite/client" />

interface ProductItem {
  id: number;
  image: string;
  price: number;
  category: string;
  description: string;
  title: string;
  rating: { rate: number; count: number };
  amount: number;
}

interface HeroItem {
  pretitle: string;
  title: string;
  link: string;
  linkText: string;
  imageSrc: string;
  imageAlt: string;
}
