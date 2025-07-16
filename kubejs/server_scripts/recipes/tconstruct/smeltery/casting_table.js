// priority: 101

ServerEvents.recipes(event => {
  
  const { INGOT } = global.fluids;

  // andesite alloy (multi-use cast)
  event.custom({
    type: "tconstruct:casting_table",
    fluid: {
      name: "kubejs:compound_mixture",
      amount: INGOT
    },
    result: "create:andesite_alloy",
    cooling_time: 54,
    cast: {
      item: "tconstruct:casts/multi_use/ingot"
    },
    cast_consumed: false
  });

  // andesite alloy (single-use cast)
  event.custom({
    type: "tconstruct:casting_table",
    fluid: {
      name: "kubejs:compound_mixture",
      amount: INGOT
    },
    result: "create:andesite_alloy",
    cooling_time: 54,
    cast: {
      item: "tconstruct:casts/single_use/ingot"
    },
    cast_consumed: true
  });
});
