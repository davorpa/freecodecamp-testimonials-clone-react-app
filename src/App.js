import "./App.css";
import Testimonial from "./components/Testimonial";

function App() {
    return (
        <div className="App">
            <div className="testimonials">
                <h1>
                    Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
                </h1>
                <Testimonial />
            </div>
        </div>
    );
}

export default App;
