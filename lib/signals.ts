// lib/signals.ts

/**
 * Analyzes trading signals based on provided parameters.
 * @param volumeChange24h - The change in volume over the last 24 hours.
 * @param priceChange1h - The change in price over the last hour.
 * @param liquidity - The current liquidity of the asset.
 * @returns A trading signal indicating whether to buy, sell, or hold.
 */
function getTradingSignal(volumeChange24h: number, priceChange1h: number, liquidity: number): string {
    if (liquidity < 1000) {
        return 'Hold'; // Not enough liquidity
    }
    if (volumeChange24h > 10 && priceChange1h > 5) {
        return 'Buy'; // Strong volume and price increase
    }
    if (volumeChange24h < -10 || priceChange1h < -5) {
        return 'Sell'; // Strong decrease in volume or price
    }
    return 'Hold'; // Default action
}

export { getTradingSignal };