{
  num: 2500,
  accuracy: 100,
  basePower: 65,
  category: "Physical",
  name: "Careless Reap",
  pp: 15,
  priority: 0,
  flags: {
    contact: 1,
    protect: 1,
    mirror: 1,
    metronome: 1,
    slicing: 1
  },
  onAfterHit(target, source, move) {
    if (!move.hasSheerForce && source.hp) {
      for (const side of source.side.foeSidesWithConditions()) {
        side.addSideCondition('toxicspikes');
      }
    }
  },
  onAfterSubDamage(damage, target, source, move) {
    if (!move.hasSheerForce && source.hp) {
      for (const side of source.side.foeSidesWithConditions()) {
        side.addSideCondition('toxicspikes');
      }
    }
  },
  secondary: {},
  target: "normal",
  type: "Poison"
}