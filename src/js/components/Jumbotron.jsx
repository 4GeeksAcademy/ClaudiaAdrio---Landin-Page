
const Jumbotron = () => {
    return (
        <div className="d-flex justify-content-center text-center mt-4">
            <div className="bg-danger-subtle ballet-background text-white rounded-5" style={{ height: "25rem" }}>
                <h1 className="display-1 mb-5 mt-5">Las zapatillas rojas</h1>
                <p className="d-flex justify-content-center texto-jumbotron"> En nuestra escuela cultivamos la pasión por el movimiento y el arte a través de clases de ballet, jazz, tap y flamenco. Formamos bailarines con técnica, expresión y amor por la danza, en un ambiente creativo, disciplinado y lleno de energía.</p>
                <button className="btn btn-outline-danger mt-5 d-flex flex-start ms-4">Click para más información</button>
            </div>
        </div>

    )
}

export default Jumbotron;