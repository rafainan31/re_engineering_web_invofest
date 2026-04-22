import LoginFrom from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";

function App() {
  return (
    <div className="grid grid-cols-2 w-full container mx-auto gap-4 mt-2">
    <LoginFrom/>

    <RegisterForm/>
    </div>
  );
};

export default App;
