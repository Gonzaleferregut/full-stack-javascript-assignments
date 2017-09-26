export const FACTIONS = {
  Autobots: 'autobots',
  Decepticons: 'decepticons'
};

export class Robot {
  constructor (name, faction) {
    this._name = name;
    this._faction = faction;
    this._power = 1000;
  }

  greet() {
    return `Hi, I'm ${this._name}`;
  }
}

export class OptimusPrime extends Robot {
  constructor() {
    super('Optimus Prime', FACTIONS.Autobots)
  }
}

export class Megatron extends Robot {
  constructor() {
    super('Megatron', FACTIONS.Decepticons)
  }
}
