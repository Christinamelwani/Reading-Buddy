export default function BookCard() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src="https://picsum.photos/id/227/300"
        alt="Sample Image"
      />
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Permission To Feel</h1>
        <p className="text-gray-600 mt-2">
        Permission to Feel is half memoir and half scientific argument on how we can all benefit from learning to be emotionally attuned.
        </p>
      </div>
    </div>
  );
}
