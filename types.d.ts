export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Pexels = {
  page: number;
  per_page: number;
  photos: [
    {
      id: number;
      width: number;
      height: number;
      url: string;
      photographer: string;
      photographer_url: string;
      photographer_id: number;
      avg_color: string;
      src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
        portrait: string;
        landscape: string;
        tiny: string;
      };
      liked: boolean;
      alt: string;
    }
  ];
  total_results: number;
  next_page: string;
};

type BlogPost = {
  id: string;
  title: string;
  date: string;
};
