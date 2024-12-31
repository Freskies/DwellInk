const CardType = Object.freeze({
	SWORD: "sword",
	SHIELD: "shield",
	EMPTY: "empty",
});

class Card {
	constructor(
		top = CardType.EMPTY,
		right = CardType.EMPTY,
		bottom = CardType.EMPTY,
		left = CardType.EMPTY,
	) {
		this.sides = [top, right, bottom, left];
		this.#islegalCard();
	}

	/**
	 * Validates if the card is a legal card.
	 *
	 * @throws {Error} If the card is not an instance of the Card class.
	 * @throws {Error} If the card does not have exactly 4 sides.
	 * @throws {Error} If the card has invalid side values.
	 * @throws {Error} If the card has more than one sword side.
	 * @private
	 */
	#islegalCard() {
		if (typeof card !== Card)
			throw new Error("Card is not an instance of Card class");
		if (card.sides?.length !== 4)
			throw new Error("Card does not have exactly 4 sides");
		if (card.sides.some(side => !Object.values(CardType).includes(side)))
			throw new Error("Card has invalid side values");
		if (card.sides.filter(side => side === CardType.SWORD).length > 1)
			throw new Error("Card has more than one sword side");
	}
}

// Example usage:
const card = new Card("sword", "shield", "empty", "sword");
console.log(card);
