import AddToLibraryButton from "@/components/AddToLibraryButton";
import BookCard from "@/components/BookCard";

export default function Home() {
  const bookCards = Array.from({ length: 4 }, (_, i) => <BookCard key={i} />);

  return (
    <div className="container mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-5xl font-extrabold text-center">Reading Buddy</h1>
      </header>

      <section className="space-y-8">
        <div>
          <h3 className="text-3xl font-semibold text-purple-300">Top Books</h3>
          <div className="grid grid-cols-4 mx-auto gap-5 px-2 mt-4">
            {bookCards}
          </div>
        </div>
      </section>

      <section className="mt-5 flex justify-center w-full">
        <div>
          <AddToLibraryButton />
        </div>
      </section>
    </div>
  );
}
