import React from 'react';

// STYLES
import './styles.css';

const Home = () => {
    return(
        <div className="home">
            <ProductInfo />
        </div>
    );
}

const ProductInfo = () => {
    return(
        <div className="product-info-container">
            <h3 className="producto-info-title">Para que sirve esta pagina?</h3>

            <p className="producto-info-body">
                El visualizador de algoritmos sirve para poder ver el desarrollo
                de los algoritmos más conocidos de ordenamiento y algoritmos de busqueda en grafos.

                Ademas de su demostración cada algoritmo viene acompañad con una breve descripción
                y un pseudocodigo con su implementación.
            </p>

            <div className="producto-info-buttons">
                <button className="producto-info-button">
                    <a href="/sort-list">Algoritmos De Ordenamiento</a>
                </button>
                
                <button className="producto-info-button">
                    <a href="/path-finder">Algoritmos De Busqueda</a>
                </button>
            </div>
        </div>
    );
}

export default Home;