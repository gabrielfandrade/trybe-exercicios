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
  };
  if (mana > 15) {
    const dano = Math.floor((Math.random() * (maximo - minimo + 1)) + minimo);
    turno.manaGasta = 15;
    turno.danoCausado = dano;
    return turno;
  }
  return turno;
}

const gameActions = {
  warriorTurn: (warriorATK) => {
    const dano = warriorATK(warrior);
    warrior.damage = dano;
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageATK) => {
    const mageStats = mageATK(mage);
    const dano = mageStats.danoCausado;
    mage.damage = dano;
    mage.mana -= mageStats.manaGasta;
    dragon.healthPoints -= dano;
  },
  dragonTurn: (dragonATK) => {
    const dano = dragonATK(dragon);
    dragon.damage = dano;
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  turno: () => battleMembers,
};

gameActions.warriorTurn(warriorDmg);
gameActions.mageTurn(mageDmg);
gameActions.dragonTurn(dragonDmg);
console.log(gameActions.turno());