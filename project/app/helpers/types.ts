import { NextApiRequest } from "next";

export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_BOOKS_API_KEY: string,
      DATABASE_URL: string,
    }
  }
}

export interface BookSearchRequest extends NextApiRequest {
  nextUrl: {
    searchParams: URLSearchParams;
  };
}

export interface SearchParams {
  author: string;
  title: string;
}
