import Card from './models/Card';
import { FEATURES } from './models/commons';


export const isSet = (picked: Array<Card>): boolean => {
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
