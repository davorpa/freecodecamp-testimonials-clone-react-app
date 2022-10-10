import "./App.css";
import Testimonial from "./components/Testimonial";

function App() {
    return (
        <div className="App">
            <div className="testimonials">
                <h1>
                    Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
                </h1>
                <Testimonial
                    name="Shawn Wang"
                    image=""
                    country="Singapur"
                    position="Ingeniero de Software"
                    company="Amazon"
                >
                    Da miedo cambiar de carrera. Solo gané la confianza de que
                    podía programar trabajando a través de los cientos de horas
                    de lecciones gratuitas en freeCodeCamp. Tras pasar un año
                    tuve un trabajo de seis cifras como ingeniero de software.{" "}
                    <strong>freeCodeCamp cambió mi vida</strong>.
                </Testimonial>
                <Testimonial
                    name="Sarah Chima"
                    image=""
                    country="Nigeria"
                    position="Ingeniera de Software"
                    company="ChatDesk"
                >
                    <strong>
                        freeCodeCamp fue la puerta de entrada a mi carrera
                    </strong>{" "}
                    como desarrollador de software. El plan de estudios bien
                    estructurado llevó mis conocimientos de programación de un
                    nivel de principiante total a un nivel muy seguro. Era todo
                    lo que necesitaba para conseguir mi primer trabajo de
                    desarrollador en una empresa increíble.
                </Testimonial>
                <Testimonial
                    name="Emma Bostian"
                    image=""
                    country="Suecia"
                    position="Ingeniera de Software"
                    company="Spotify"
                >
                    Siempre he tenido problemas para aprender JavaScript. He
                    tomado muchos cursos, pero el curso de freeCodeCamp fue el
                    que hizo clic. Estudiar JavaScript, así como estructuras de
                    datos y algoritmos en{" "}
                    <strong>freeCodeCamp me dió las habilidades</strong> y la
                    confianza que necesitaba para conseguir el trabajo de mis
                    sueños como ingeniera de software en Spotify.
                </Testimonial>
            </div>
        </div>
    );
}

export default App;
