type RouteHandler = (cat?: string) => HTMLElement;

type Property = {
  status: 'FOR SALE' | 'FOR RENT';
  cat: 'Apartments' | 'Offices' | 'Houses',
  type: 'Residential' | 'Commercial';
  title: string;
  price: string;
  location: string;
  details: string;
  image: string;
  slug: string;
}