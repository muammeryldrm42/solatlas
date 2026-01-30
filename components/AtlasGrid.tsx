import React from 'react';
import './AtlasGrid.css';

const AtlasGrid = ({ tokens, onTokenSelect }) => {
    return (
        <div className="atlas-grid">
            {tokens.map(token => (
                <div key={token.id} className="token-card" onClick={() => onTokenSelect(token)}>
                    <h3>{token.name}</h3>
                    <img src={token.image} alt={token.name} />
                    <p>{token.description}</p>
                </div>
            ))}
        </div>
    );
};

export default AtlasGrid;