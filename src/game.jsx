import React, { useState, useEffect } from "react";
import './App.css';

function Game() {
    const [cards, setCards] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedCards, setClickedCards] = useState(new Set());

    useEffect(() => {
        fetchPokemonData();
    }, []);

    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const fetchPokemonData = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
            const data = await response.json();
            const pokemonData = data.results.map((pokemon, index) => ({
                id: index + 1,
                name: pokemon.name
            }));
            setCards(shuffleArray(pokemonData));
        } catch (error) {
            console.error('There was a problem fetching the data!', error);
        }
    }

    const handleClick = (id) => {
        setClickedCards(prevClickedCards => {
            if (prevClickedCards.has(id)) {
                // Reset score if card was clicked before
                setScore(0);
                return new Set();
            } else {
                // Update score and add card to clicked set
                const newClickedCards = new Set(prevClickedCards);
                newClickedCards.add(id);
                setScore(prevScore => {
                    const newScore = prevScore + 1;
                    if (newScore > bestScore) {
                        setBestScore(newScore);
                    }
                    return newScore;
                });
                // Shuffle cards
                setCards(prevCards => shuffleArray([...prevCards]));
                return newClickedCards;
            }
        });
    }

    return (
        <div className="container">
            <div>
                <h2>Score: {score}</h2>
                <h2>Best Score: {bestScore}</h2>
            </div>
            <br />
            <div className="cards">
                {cards.map(card => (
                    <div key={card.id} className="card" onClick={() => handleClick(card.id)}>
                        <div>
                            {card.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Game;
