
/**
 * fluid Registry (startup script)
 * adding only the "Compound Mixture" fluid. (molten andesite alloy)
 */
StartupEvents.registry('fluid', event => {
  event
    .create('compound_mixture')
    .thickTexture(0x66786f)
    .bucketColor(0x66786f)
    .stillTexture('tconstruct:block/fluid/molten/still')
    .flowingTexture('tconstruct:block/fluid/molten/flowing')
    .tag('tconstruct:tooltips/metal')
    .displayName('Compound Mixture');
});
