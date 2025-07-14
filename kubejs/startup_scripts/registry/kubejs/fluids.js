/**
 * fluid Registry (startup script)
 * adding the "Compound Mixture" fluid plus Citrine and Topaz.
 */
StartupEvents.registry('fluid', event => {
  // Compound Mixture (molten andesite alloy)
  event
    .create('compound_mixture')
    .thickTexture(0x66786f)
    .bucketColor(0x66786f)
    .stillTexture('tconstruct:block/fluid/molten/still')
    .flowingTexture('tconstruct:block/fluid/molten/flowing')
    .tag('tconstruct:tooltips/metal')
    .displayName('Compound Mixture');

  event
    .create('citrine')
    .thickTexture(0xffe342)
    .bucketColor(0xffe342)
    .stillTexture('tconstruct:block/fluid/molten_shiny/still')
    .flowingTexture('tconstruct:block/fluid/molten_shiny/flowing')
    .displayName('Citrine');

  event
    .create('topaz')
    .thickTexture(0x45a6ff)
    .bucketColor(0x45a6ff)
    .stillTexture('tconstruct:block/fluid/molten_shiny/still')
    .flowingTexture('tconstruct:block/fluid/molten_shiny/flowing')
    .displayName('Topaz');
});
