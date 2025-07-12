// priority: 101

global.fluids = Object.freeze({
  BUCKET: 81000,
  GEM_BLOCK: 72900,
  SLIMEBALL: 20250,
  INGOT: 9000,
  GEM: 8100,
  NUGGET: 1000,
  mB: 81,
});

ServerEvents.recipes(event => {
  // andesite alloy (multi-use cast)
  event.custom({
    type: "tconstruct:casting_table",
    fluid: { tag: "kubejs:compound_mixture", amount: INGOT },
    result: "create:andesite_alloy",
    cooling_time: 54,
    cast: { tag: "tconstruct:casts/multi_use/ingot" },
    cast_consumed: false
  });

  // andesite alloy (single-use cast)
  event.custom({
    type: "tconstruct:casting_table",
    fluid: { tag: "kubejs:compound_mixture", amount: INGOT },
    result: "create:andesite_alloy",
    cooling_time: 54,
    cast: { tag: "tconstruct:casts/single_use/ingot" },
    cast_consumed: true
  });
});
