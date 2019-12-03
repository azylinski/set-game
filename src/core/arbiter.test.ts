import { isSet } from './arbiter';
import { Card, Nmbr, Smbl, Shading, Color } from './models';

it('is valid set', () => {
  let picked = [
    new Card(Nmbr.One, Smbl.Diamond, Shading.Open, Color.Green),
    new Card(Nmbr.Two, Smbl.Diamond, Shading.Solid, Color.Green),
    new Card(Nmbr.Three, Smbl.Diamond, Shading.Striped, Color.Green),
  ];

  expect(isSet(picked)).toEqual(true);
});

it('is invalid set', () => {
  let picked = [
    new Card(Nmbr.One, Smbl.Diamond, Shading.Open, Color.Green),
    new Card(Nmbr.Two, Smbl.Diamond, Shading.Solid, Color.Green),
    new Card(Nmbr.Two, Smbl.Diamond, Shading.Striped, Color.Green),
  ];

  expect(isSet(picked)).toEqual(false);
});
