type RouteHandler = () => HTMLElement;

type Property = {
  status: 'FOR SALE' | 'FOR RENT';
  cat: 'Apartment' | 'Office' | 'House',
  type: 'Residential' | 'Commercial';
  title: string;
  price: string;
  location: string;
  details: string;
  image: string;
  slug: string;
}