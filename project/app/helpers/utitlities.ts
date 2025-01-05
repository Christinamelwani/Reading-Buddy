import { SearchParams } from "./types";

export function parseBookSearchParams(
  params: URLSearchParams
):  SearchParams| null {

  const author = params.get("author");
  const title = params.get("title");
  
  return author && title ? { author, title } : null;
}
