
import { NewsItem } from '@/components/NewsCard';

// Replace with your actual Strapi URL
const STRAPI_API_URL = import.meta.env.VITE_STRAPI_API_URL || 'http://localhost:1337';

interface StrapiResponse<T> {
  data: Array<{
    id: number;
    attributes: T;
  }>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta: any;
}

interface StrapiNewsAttributes {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime?: string;
  authorName?: string;
  authorAvatar?: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export const fetchAllNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch(`${STRAPI_API_URL}/api/articles?populate=*`);
    
    if (!response.ok) {
      throw new Error(`Error fetching news: ${response.status}`);
    }
    
    const data: StrapiResponse<StrapiNewsAttributes> = await response.json();
    
    return data.data.map(item => ({
      id: item.id,
      title: item.attributes.title,
      excerpt: item.attributes.excerpt,
      content: item.attributes.content,
      category: item.attributes.category,
      imageUrl: item.attributes.imageUrl,
      date: new Date(item.attributes.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      readTime: item.attributes.readTime,
      authorName: item.attributes.authorName,
      authorAvatar: item.attributes.authorAvatar
    }));
  } catch (error) {
    console.error("Failed to fetch news from Strapi:", error);
    return []; // Return empty array as fallback
  }
};

export const fetchNewsByCategory = async (category: string): Promise<NewsItem[]> => {
  try {
    const response = await fetch(
      `${STRAPI_API_URL}/api/articles?filters[category][$eq]=${category}&populate=*`
    );
    
    if (!response.ok) {
      throw new Error(`Error fetching ${category} news: ${response.status}`);
    }
    
    const data: StrapiResponse<StrapiNewsAttributes> = await response.json();
    
    return data.data.map(item => ({
      id: item.id,
      title: item.attributes.title,
      excerpt: item.attributes.excerpt,
      content: item.attributes.content,
      category: item.attributes.category,
      imageUrl: item.attributes.imageUrl,
      date: new Date(item.attributes.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      readTime: item.attributes.readTime,
      authorName: item.attributes.authorName,
      authorAvatar: item.attributes.authorAvatar
    }));
  } catch (error) {
    console.error(`Failed to fetch ${category} news from Strapi:`, error);
    return []; // Return empty array as fallback
  }
};

export const fetchNewsById = async (id: string): Promise<NewsItem | null> => {
  try {
    const response = await fetch(
      `${STRAPI_API_URL}/api/articles/${id}?populate=*`
    );
    
    if (!response.ok) {
      throw new Error(`Error fetching news with ID ${id}: ${response.status}`);
    }
    
    const data: StrapiSingleResponse<StrapiNewsAttributes> = await response.json();
    
    return {
      id: parseInt(id),
      title: data.data.attributes.title,
      excerpt: data.data.attributes.excerpt,
      content: data.data.attributes.content,
      category: data.data.attributes.category,
      imageUrl: data.data.attributes.imageUrl,
      date: new Date(data.data.attributes.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      readTime: data.data.attributes.readTime,
      authorName: data.data.attributes.authorName,
      authorAvatar: data.data.attributes.authorAvatar
    };
  } catch (error) {
    console.error(`Failed to fetch news with ID ${id} from Strapi:`, error);
    return null; // Return null as fallback
  }
};

export const fetchFeaturedNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch(
      `${STRAPI_API_URL}/api/articles?filters[featured][$eq]=true&populate=*`
    );
    
    if (!response.ok) {
      throw new Error(`Error fetching featured news: ${response.status}`);
    }
    
    const data: StrapiResponse<StrapiNewsAttributes> = await response.json();
    
    return data.data.map(item => ({
      id: item.id,
      title: item.attributes.title,
      excerpt: item.attributes.excerpt,
      content: item.attributes.content,
      category: item.attributes.category,
      imageUrl: item.attributes.imageUrl,
      date: new Date(item.attributes.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      readTime: item.attributes.readTime,
      authorName: item.attributes.authorName,
      authorAvatar: item.attributes.authorAvatar
    }));
  } catch (error) {
    console.error("Failed to fetch featured news from Strapi:", error);
    return []; // Return empty array as fallback
  }
};
