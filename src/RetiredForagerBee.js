class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.color = 'grey';
    this.job = 'gamble';
    this.canFly = false;
    this.treasureChest = [];
    this.forage('I am getting to old, let me play cards instead');
  }
  gamble(treasure) {
    return super.forage(treasure);
  }
}