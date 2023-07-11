import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log("search for", term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
