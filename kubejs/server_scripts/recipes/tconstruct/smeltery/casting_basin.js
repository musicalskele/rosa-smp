(function castingBasinRecipes() {
  const { BUCKET, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;
  onEvent("recipes", (event) => {
    /**
     * @typedef CastingBasinRecipe
     * @property {{fluid: Special.Fluid; amount: number;}} fluidInput
     * @property {Special.Item} result
     * @property {number} coolingTime
     * @property {{ item: Special.Item; consumed?: boolean } | { tag: Special.ItemTag; consumed?: boolean }} [cast]
     */

    /** @type {CastingBasinRecipe[]} */
    const castingBasinRecipes = [
      {
        fluidInput: { fluid: "tconstruct:molten_quartz", amount: GEM * 3 },
        result: "minecraft:granite",
        coolingTime: 140,
        cast: { item: "minecraft:diorite", consumed: true },
      },
      {
        fluidInput: { fluid: "minecraft:lava", amount: INGOT },
        result: "minecraft:deepslate",
        coolingTime: 140,
        cast: { item: "minecraft:cobblestone", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:liquid_soul", amount: BUCKET },
        result: "minecraft:diorite",
        coolingTime: 80,
        cast: { item: "minecraft:basalt", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:ender_slime", amount: BUCKET },
        result: "tconstruct:ender_slime_vine",
        coolingTime: 80,
        cast: { item: "minecraft:vine", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:sky_slime", amount: BUCKET },
        result: "tconstruct:sky_slime_vine",
        coolingTime: 80,
        cast: { item: "minecraft:vine", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:mushroom_stew", amount: (BUCKET * 2) / 3 },
        result: "minecraft:mushroom_stem",
        coolingTime: 25,
      },
      {
        fluidInput: { fluid: "tconstruct:mushroom_stew", amount: INGOT * 1.5 },
        result: "minecraft:shroomlight",
        coolingTime: 100,
        cast: { item: "minecraft:glowstone", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_clay", amount: BUCKET },
        result: "minecraft:clay",
        coolingTime: 144,
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 2 },
        result: "minecraft:magma_block",
        coolingTime: 90,
        cast: { item: "minecraft:polished_basalt", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 2 },
        result: "minecraft:stone",
        coolingTime: 90,
        cast: { item: "minecraft:basalt", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 2 },
        result: "minecraft:stone",
        coolingTime: 90,
        cast: { item: "minecraft:gravel", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 2 },
        result: "tconstruct:seared_cobble_wall",
        coolingTime: 102,
        cast: { item: "minecraft:cobblestone_wall", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 4 },
        result: "tconstruct:seared_stone_slab",
        coolingTime: 72,
        cast: { item: "minecraft:stone_slab", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 4 },
        result: "tconstruct:seared_stone_stairs",
        coolingTime: 102,
        cast: { item: "minecraft:stone_stairs", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: INGOT * 8 },
        result: "tconstruct:seared_fancy_bricks",
        coolingTime: 102,
        cast: { item: "minecraft:chiseled_stone_bricks", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: INGOT * 8 },
        result: "tconstruct:seared_cracked_bricks",
        coolingTime: 102,
        cast: { item: "minecraft:cracked_stone_bricks", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: INGOT * 8 },
        result: "tconstruct:seared_paver",
        coolingTime: 102,
        cast: { item: "minecraft:smooth_stone", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:ichor", amount: SLIMEBALL * 5 },
        result: "tconstruct:ichor_slime",
        coolingTime: 103,
        cast: { item: "tconstruct:ichor_congealed_slime", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:ichor", amount: BUCKET },
        result: "tconstruct:ichor_congealed_slime",
        coolingTime: 92,
      },
    ];
    castingBasinRecipes.forEach((recipe) => {
      /** @type {{ type: Special.RecipeType_; [key: string]: unknown }} */
      let basinRecipe = {
        type: "tconstruct:casting_basin",
        fluid: {
          name: recipe.fluidInput.fluid,
          amount: recipe.fluidInput.amount,
        },
        result: recipe.result,
        cooling_time: recipe.coolingTime,
      };
      if (recipe.cast) {
        if ("item" in recipe.cast) basinRecipe.cast = { item: recipe.cast.item };
        else if ("tag" in recipe.cast) basinRecipe.cast = { tag: recipe.cast.tag };
        if (recipe.cast.consumed) basinRecipe.cast_consumed = recipe.cast.consumed;
      }
      event.custom(basinRecipe);
    });
  });
})();