const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = (dragon) => {
  const minimo = 15;
  const dano = Math.floor((Math.random() * (dragon.strength - minimo + 1) + minimo));
  return dano;
}

const warriorDmg = (warrior) => {
  const minimo = warrior.strength;
  const maximo = minimo * warrior.warriorDmg;
  const dano = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
  return dano;
}

const mageDmg = (mage) => {
  const minimo = mage.intelligence;
  const maximo = minimo * 2;
  const mana = mage.mana;
  const turno = {
    danoCausado: 'Não possui mana suficiente',
    manaGasta: 0,
  }
  if (mana > 15) {
    const dano = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
    turno.manaGasta = 15;
    turno.danoCausado = dano;
    return turno;
  }
  return turno;
}