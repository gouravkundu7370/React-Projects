import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <h1 className="text-3xl font-bold bg-fuchsia-400 underline">
        A Blog With Appwrite
      </h1>
    </>
  );
}

export default App;
