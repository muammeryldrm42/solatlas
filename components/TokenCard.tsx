import React from 'react';
import PropTypes from 'prop-types';
import './TokenCard.css'; // Assuming you have a CSS file for styling

const TokenCard = ({ logo, symbol, price, change, signal }) => {
  const signalClass = signal === 'buy' ? 'signal-buy' : signal === 'sell' ? 'signal-sell' : 'signal-neutral';

  return (
    <div className="token-card">
      <img src={logo} alt={`${symbol} logo`} className="token-logo" />
      <div className="token-info">
        <h2 className="token-symbol">{symbol}</h2>
        <p className="token-price">${price.toFixed(2)}</p>
        <p className={`token-change ${signalClass}`}>{change > 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`}</p>
      </div>
    </div>
  );
};

TokenCard.propTypes = {
  logo: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  change: PropTypes.number.isRequired,
  signal: PropTypes.oneOf(['buy', 'sell', 'neutral']).isRequired,
};

export default TokenCard;