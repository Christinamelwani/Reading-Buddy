import { SEARCH_FOR_BOOKS } from "@/app/helpers/routes";
import { BookSearchRequest } from "@/app/helpers/types";
import { parseBookSearchParams } from "@/app/helpers/utitlities";
import { NextResponse } from "next/server";

export async function GET(req: BookSearchRequest) {
  const searchParams = parseBookSearchParams(req.nextUrl.searchParams);

  if (searchParams === null) {
    return NextResponse.json(
      { error: "Invalid search parameters" },
      { status: 400 }
    );
  }

  const { title, author } = searchParams;

  const googleBooksResponse = await fetch(SEARCH_FOR_BOOKS(title, author));

  const data = await googleBooksResponse.json();
  return NextResponse.json(data, { status: 200 });
}
