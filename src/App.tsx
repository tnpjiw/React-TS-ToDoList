import Header from "./components/Header";
import FormTodo from "./components/FormTodo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen dark:bg-black/80 dark:text-white transition-all duration-300 ease-in-out dark:transition-all dark:duration-300 dark:ease-in-out flex flex-col items-center">
      <Header />
      <FormTodo />
      <Footer />
    </div>
  );
}

export default App;
