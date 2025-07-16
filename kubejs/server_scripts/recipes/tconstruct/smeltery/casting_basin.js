// priority: 101

ServerEvents.recipes(event => {
  
  const { BUCKET, INGOT } = global.fluids;

  event.custom({
    type: "tconstruct:casting_basin",
    fluid: { name: "kubejs:compound_mixture", amount: BUCKET },
    result: "create:andesite_alloy_block",
    cooling_time: 180
  });

  event.custom({
    type: "tconstruct:casting_basin",
    fluid: { name: "minecraft:lava", amount: INGOT },
    result: "minecraft:deepslate",
    cooling_time: 140,
    cast: { item: "minecraft:cobblestone" },
    cast_consumed: true
  });

  event.custom({
    type: "tconstruct:casting_basin",
    fluid: { name: "tconstruct:molten_clay", amount: BUCKET },
    result: "minecraft:clay",
    cooling_time: 144
  });

  event.custom({
    type: "tconstruct:casting_basin",
    fluid: { name: "tconstruct:magma", amount: BUCKET / 2 },
    result: "minecraft:magma_block",
    cooling_time: 90,
    cast: { item: "minecraft:polished_basalt" },
    cast_consumed: true
  });
});
