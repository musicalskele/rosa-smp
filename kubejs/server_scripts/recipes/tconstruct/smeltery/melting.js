// priority: 101

global.fluids = Object.freeze({
  BUCKET:    81000,
  GEM_BLOCK: 72900,
  SLIMEBALL: 20250,
  INGOT:     9000,
  GEM:       8100,
  NUGGET:    1000,
  mB:        81,
});

ServerEvents.recipes(event => {

  const { INGOT, BUCKET } = global.fluids;

  event.custom({
    type: "tconstruct:melting",
    ingredient: { item: "create:andesite_alloy" },
    result: {
      fluid: "kubejs:compound_mixture",
      amount: INGOT
    },
    temperature: 450,
    time: 57
  });

  event.custom({
    type: "tconstruct:melting",
    ingredient: { item: "create:andesite_alloy_block" },
    result: {
      fluid: "kubejs:compound_mixture",
      amount: BUCKET
    },
    temperature: 450,
    time: 180
  });
});
