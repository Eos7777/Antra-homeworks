export interface CardRoot {
  page: string;
  per_page: string;
  total: string;
  total_pages: string;
  data: Card[];
  support: Support[];
}

export interface Card {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}
