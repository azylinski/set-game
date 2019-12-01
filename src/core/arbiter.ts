import Combinatorics, { IGenerator } from "js-combinatorics";
import { FEATURES, Card, Deck } from './models';


export const isSet = (picked: Card[]): boolean => {
    if (picked.length != 3) return false;

    for (let feature of FEATURES) {
        const s = new Set();
        for (let card of picked) {
            s.add(card.get(feature));
        }
        if (s.size === 2) return false;
    }

    return true;
}

type Triple = [Card, Card, Card];

export const findSets = (cards: Card[]): Triple[] => {
    let results: Triple[] = [];
    const cmb: IGenerator<Card[]> = Combinatorics.combination(cards, 3);

    let picked = cmb.next();
    while (picked) {
        if (isSet(picked)) console.log(picked);
        picked = cmb.next();
    }
    
    return results;
}