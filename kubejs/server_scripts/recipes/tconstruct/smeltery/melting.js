// priority: 101

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
