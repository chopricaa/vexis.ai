function SearchBar() {
  return (
    <div className="mt-10 w-full max-w-5xl">
      <input
        type="text"
        placeholder="Ask anything..."
        className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white outline-none backdrop-blur-xl placeholder:text-gray-500"
      />
    </div>
  );
}

export default SearchBar;