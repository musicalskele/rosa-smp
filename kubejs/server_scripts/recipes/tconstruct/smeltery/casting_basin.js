
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

  event.custom({
    type: "tconstruct:casting_basin",
    fluid: { tag: "kubejs:compound_mixture", amount: INGOT * 9 },
    result: "create:andesite_alloy_block",
    cooling_time: 180
  });

  event.custom({
    type: "tconstruct:casting_basin",
    fluid: {
      tag: "minecraft:lava",
      amount: INGOT
    },
    result: "minecraft:deepslate",
    cooling_time: 140,
    cast: { item: "minecraft:cobblestone" },
    cast_consumed: true
  });

  event.custom({
    type: "tconstruct:casting_basin",
    fluid: {
      tag: "tconstruct:molten_clay",
      amount: BUCKET
    },
    result: "minecraft:clay",
    cooling_time: 144
  });

  event.custom({
    type: "tconstruct:casting_basin",
    fluid: {
      tag: "tconstruct:magma",
      amount: BUCKET / 2
    },
    result: "minecraft:magma_block",
    cooling_time: 90,
    cast: { item: "minecraft:polished_basalt" },
    cast_consumed: true
  });

});