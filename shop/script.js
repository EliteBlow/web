// Variables globales para almacenar los objetos
let minecraftObjects = [];
let slimefunObjects = [];

// Lista de imágenes de Minecraft conocidas (para verificación)
const KNOWN_MINECRAFT_IMAGES = [
'oak_log.png', 'spruce_log.png', 'birch_log.png', 'jungle_log.png', 'acacia_log.png', 'dark_oak_log.png', 'mangrove_log.png', 'cherry_log.png', 'stripped_oak_log.png', 'stripped_spruce_log.png', 'stripped_birch_log.png', 'stripped_jungle_log.png', 'stripped_acacia_log.png', 'stripped_dark_oak_log.png', 'stripped_mangrove_log.png', 'stripped_cherry_log.png', 'oak_planks.png', 'spruce_planks.png', 'birch_planks.png', 'jungle_planks.png', 'acacia_planks.png', 'dark_oak_planks.png', 'mangrove_planks.png', 'cherry_planks.png', 'stone.png', 'granite.png', 'polished_granite.png', 'diorite.png', 'polished_diorite.png', 'andesite.png', 'polished_andesite.png', 'tuff.png', 'dripstone_block.png', 'calcite.png', 'deepslate.png', 'cobbled_deepslate.png', 'polished_deepslate.png', 'cobblestone.png', 'mossy_cobblestone.png', 'sand.png', 'red_sand.png', 'gravel.png', 'sandstone.png', 'chiseled_sandstone.png', 'cut_sandstone.png', 'red_sandstone.png', 'chiseled_red_sandstone.png', 'cut_red_sandstone.png', 'terracotta.png', 'white_terracotta.png', 'orange_terracotta.png', 'magenta_terracotta.png', 'light_blue_terracotta.png', 'yellow_terracotta.png', 'lime_terracotta.png', 'pink_terracotta.png', 'gray_terracotta.png', 'light_gray_terracotta.png', 'cyan_terracotta.png', 'purple_terracotta.png', 'blue_terracotta.png', 'brown_terracotta.png', 'green_terracotta.png', 'red_terracotta.png', 'black_terracotta.png', 'clay_ball.png', 'brick.png', 'mossy_stone_bricks.png', 'stone_bricks.png', 'cracked_stone_bricks.png', 'chiseled_stone_bricks.png', 'nether_bricks.png', 'red_nether_bricks.png', 'end_stone_bricks.png', 'purpur_block.png', 'obsidian.png', 'crying_obsidian.png', 'glowstone.png', 'sea_lantern.png', 'shroomlight.png', 'soul_sand.png', 'soul_soil.png', 'mycelium.png', 'grass_block.png', 'dirt.png', 'coarse_dirt.png', 'rooted_dirt.png', 'podzol.png', 'farmland.png', 'compost.png', 'hay_block.png', 'scaffolding.png', 'ladder.png', 'door.png', 'oak_door.png', 'spruce_door.png', 'birch_door.png', 'jungle_door.png', 'acacia_door.png', 'dark_oak_door.png', 'mangrove_door.png', 'cherry_door.png', 'trapdoor.png', 'oak_trapdoor.png', 'iron_trapdoor.png', 'fence.png', 'oak_fence.png', 'spruce_fence.png', 'birch_fence.png', 'jungle_fence.png', 'acacia_fence.png', 'dark_oak_fence.png', 'mangrove_fence.png', 'fence_gate.png', 'oak_fence_gate.png', 'spruce_fence_gate.png', 'ladder.png', 'sign.png', 'oak_sign.png', 'shield.png', 'anvil.png', 'chest.png', 'ender_chest.png', 'barrel.png', 'hopper.png', 'dispenser.png', 'dropper.png', 'furnace.png', 'blast_furnace.png', 'smoker.png', 'campfire.png', 'soul_campfire.png', 'jukebox.png', 'note_block.png', 'bell.png', 'beacon.png', 'bed.png', 'white_bed.png', 'orange_bed.png', 'magenta_bed.png', 'light_blue_bed.png', 'yellow_bed.png', 'lime_bed.png', 'pink_bed.png', 'gray_bed.png', 'light_gray_bed.png', 'cyan_bed.png', 'purple_bed.png', 'blue_bed.png', 'brown_bed.png', 'green_bed.png', 'red_bed.png', 'black_bed.png', 'bookshelf.png', 'cartography_table.png', 'smithing_table.png', 'anvil.png', 'grindstone.png', 'stonecutter.png', 'lectern.png', 'brewing_stand.png', 'cauldron.png', 'lantern.png', 'soul_lantern.png', 'torch.png', 'soul_torch.png', 'glow_lichens.png', 'chain.png', 'conduit.png', 'compass.png', 'clock.png', 'map.png', 'empty_map.png', 'filled_map.png', 'paper.png', 'book.png', 'writable_book.png', 'written_book.png', 'feather.png', 'quill.png', 'arrow.png', 'spectral_arrow.png', 'tipped_arrow.png', 'bow.png', 'crossbow.png', 'trident.png', 'fishing_rod.png', 'lead.png', 'shears.png', 'flint_and_steel.png', 'fire_charge.png', 'bucket.png', 'water_bucket.png', 'lava_bucket.png', 'milk_bucket.png', 'powder_snow_bucket.png', 'axolotl_bucket.png', 'salmon_bucket.png', 'cod_bucket.png', 'tropical_fish_bucket.png', 'pufferfish_bucket.png', 'tadpole_bucket.png', 'saddle.png', 'name_tag.png', 'horse_armor.png', 'iron_horse_armor.png', 'golden_horse_armor.png', 'diamond_horse_armor.png', 'leather.png', 'leather_boots.png', 'leather_leggings.png', 'leather_chestplate.png', 'leather_helmet.png', 'chainmail_boots.png', 'chainmail_leggings.png', 'chainmail_chestplate.png', 'chainmail_helmet.png', 'iron_boots.png', 'iron_leggings.png', 'iron_chestplate.png', 'iron_helmet.png', 'golden_boots.png', 'golden_leggings.png', 'golden_chestplate.png', 'golden_helmet.png', 'diamond_boots.png', 'diamond_leggings.png', 'diamond_chestplate.png', 'diamond_helmet.png', 'netherite_boots.png', 'netherite_leggings.png', 'netherite_chestplate.png', 'netherite_helmet.png', 'elytra.png', 'shield.png', 'carrot.png', 'potato.png', 'baked_potato.png', 'beetroot.png', 'beetroot_soup.png', 'bread.png', 'apple.png', 'golden_apple.png', 'enchanted_golden_apple.png', 'cookie.png', 'melon_slice.png', 'glistering_melon_slice.png', 'pumpkin_pie.png', 'suspicious_stew.png', 'honey_bottle.png', 'milk_bucket.png', 'potion.png', 'splash_potion.png', 'lingering_potion.png', 'tipped_arrow.png', 'bottle_o_enchanting.png', 'rotten_flesh.png', 'spider_eye.png', 'fermented_spider_eye.png', 'bone.png', 'string.png', 'wool.png', 'white_wool.png', 'orange_wool.png', 'magenta_wool.png', 'light_blue_wool.png', 'yellow_wool.png', 'lime_wool.png', 'pink_wool.png', 'gray_wool.png', 'light_gray_wool.png', 'cyan_wool.png', 'purple_wool.png', 'blue_wool.png', 'brown_wool.png', 'green_wool.png', 'red_wool.png', 'black_wool.png', 'coal.png', 'charcoal.png', 'iron_ingot.png', 'gold_ingot.png', 'copper_ingot.png', 'netherite_ingot.png', 'diamond.png', 'emerald.png', 'lapis_lazuli.png', 'redstone.png', 'quartz.png', 'amethyst_shard.png', 'raw_iron.png', 'raw_copper.png', 'raw_gold.png', 'raw_iron_block.png', 'raw_copper_block.png', 'raw_gold_block.png', 'iron_nugget.png', 'gold_nugget.png', 'nether_brick.png', 'prismarine_shard.png', 'prismarine_crystals.png', 'slime_ball.png', 'magma_cream.png', 'blaze_rod.png', 'ghast_tear.png', 'ender_pearl.png', 'ender_eye.png', 'shulker_shell.png', 'chorus_fruit.png', 'chorus_fruit_popped.png', 'rabbit.png', 'rabbit_stew.png', 'rabbit_foot.png', 'rabbit_hide.png', 'cooked_rabbit.png', 'mutton.png', 'cooked_mutton.png', 'porkchop.png', 'cooked_porkchop.png', 'beef.png', 'cooked_beef.png', 'chicken.png', 'cooked_chicken.png', 'cod.png', 'cooked_cod.png', 'salmon.png', 'cooked_salmon.png', 'tropical_fish.png', 'pufferfish.png', 'bone_meal.png', 'dye.png', 'white_dye.png', 'orange_dye.png', 'magenta_dye.png', 'light_blue_dye.png', 'yellow_dye.png', 'lime_dye.png', 'pink_dye.png', 'gray_dye.png', 'light_gray_dye.png', 'cyan_dye.png', 'purple_dye.png', 'blue_dye.png', 'brown_dye.png', 'green_dye.png', 'red_dye.png', 'black_dye.png', 'banner.png', 'white_banner.png', 'black_banner.png', 'red_banner.png', 'blue_banner.png', 'shield.png', 'cape.png', 'flower_pot.png', 'potted_oak_sapling.png', 'potted_spruce_sapling.png', 'potted_birch_sapling.png', 'potted_jungle_sapling.png', 'potted_acacia_sapling.png', 'potted_dark_oak_sapling.png', 'potted_mangrove_propagule.png', 'potted_cherry_sapling.png', 'flower.png', 'poppy.png', 'blue_orchid.png', 'allium.png', 'azure_bluet.png', 'red_tulip.png', 'orange_tulip.png', 'white_tulip.png', 'pink_tulip.png', 'oxeye_daisy.png', 'cornflower.png', 'lily_of_the_valley.png', 'wither_rose.png', 'lilac.png', 'rose_bush.png', 'peony.png', 'sunflower.png', 'tall_grass.png', 'fern.png', 'large_fern.png', 'sea_pickle.png', 'kelp.png', 'seagrass.png', 'sugar_cane.png', 'cactus.png', 'bamboo.png', 'cocoa_beans.png', 'glow_berries.png', 'sweet_berries.png', 'hanging_roots.png', 'pitcher_pod.png', 'torchflower_seeds.png', 'pitcher_plant.png', 'mangrove_propagule.png', 'sapling.png', 'oak_sapling.png', 'spruce_sapling.png', 'birch_sapling.png', 'jungle_sapling.png', 'acacia_sapling.png', 'dark_oak_sapling.png', 'cherry_sapling.png', 'bamboo_sapling.png', 'mushroom_stew.png', 'brown_mushroom.png', 'red_mushroom.png', 'mushroom.png', 'mushroom_block.png', 'red_mushroom_block.png', 'brown_mushroom_block.png', 'cake.png', 'cookie.png', 'sweet_berries.png', 'honeycomb.png', 'beeswax.png', 'honey_block.png', 'beehive.png', 'bee_nest.png', 'waxed_copper.png', 'waxed_weathered_copper.png', 'chain_command_block.png', 'command_block.png', 'repeating_command_block.png', 'structure_block.png', 'structure_void.png', 'jigsaw.png', 'barrier.png', 'debug_stick.png', 'knowledge_book.png', 'totem_of_undying.png', 'experience_bottle.png', 'xp_orb.png', 'trader_llama_spawn_egg.png', 'llama_spawn_egg.png', 'cow_spawn_egg.png', 'pig_spawn_egg.png', 'sheep_spawn_egg.png', 'chicken_spawn_egg.png', 'wolf_spawn_egg.png', 'cat_spawn_egg.png', 'horse_spawn_egg.png', 'donkey_spawn_egg.png', 'mule_spawn_egg.png', 'fox_spawn_egg.png', 'bee_spawn_egg.png', 'axolotl_spawn_egg.png', 'frog_spawn_egg.png', 'tadpole_spawn_egg.png', 'pufferfish_spawn_egg.png', 'salmon_spawn_egg.png', 'cod_spawn_egg.png', 'tropical_fish_spawn_egg.png', 'squid_spawn_egg.png', 'glow_squid_spawn_egg.png', 'dolphin_spawn_egg.png', 'turtle_spawn_egg.png', 'sniffer_spawn_egg.png', 'allay_spawn_egg.png', 'warden_spawn_egg.png', 'warden_egg.png', 'snowball.png', 'egg.png', 'ender_pearl.png', 'ender_eye.png', 'compass.png', 'lodestone_compass.png', 'recovery_compass.png', 'bundle.png', 'trader_chest.png', 'golden_apple.png', 'enchanted_golden_apple.png', 'nether_star.png', 'heart_of_the_sea.png', 'nautilus_shell.png', 'conduit.png', 'saddle.png', 'warped_fungus_on_a_stick.png', 'carrot_on_a_stick.png', 'chest_minecart.png', 'furnace_minecart.png', 'tnt_minecart.png', 'hopper_minecart.png', 'chest_minecart.png', 'minecart.png', 'boat.png', 'oak_boat.png', 'spruce_boat.png', 'birch_boat.png', 'jungle_boat.png', 'acacia_boat.png', 'dark_oak_boat.png', 'cherry_boat.png', 'mangrove_boat.png', 'boat_with_chest.png', 'oak_boat_with_chest.png', 'spruce_boat_with_chest.png', 'birch_boat_with_chest.png', 'jungle_boat_with_chest.png', 'acacia_boat_with_chest.png', 'dark_oak_boat_with_chest.png', 'cherry_boat_with_chest.png', 'mangrove_boat_with_chest.png', 'chainmail.png', 'elytra.png', 'sugar.png', 'sugar_cane.png', 'cookie.png', 'bamboo.png', 'scute.png', 'phantom_membrane.png', 'rabbit_hide.png', 'phantom_membrane.png', 'ink_sac.png', 'lapis_lazuli.png', 'glow_ink_sac.png', 'compass.png', 'clock.png', 'lead.png', 'string.png', 'honey_bottle.png', 'glass_bottle.png', 'bottle_of_enchanting.png', 'bee_spawn_egg.png', 'guide_book.png', 'campfire_cooking.png', 'suspicious_stew.png', 'tropical_fish_bucket.png', 'pufferfish_bucket.png', 'cod_bucket.png', 'salmon_bucket.png', 'axolotl_bucket.png', 'tadpole_bucket.png', 'bamboo_raft.png', 'bamboo_raft_with_chest.png', 'bundle.png', 'sculk_shrieker.png', 'sculk_sensor.png', 'soul_campfire.png', 'lightning_rod.png', 'amethyst_shard.png', 'spyglass.png', 'amethyst_cluster.png', 'smooth_basalt.png', 'dripstone_block.png', 'pointed_dripstone.png', 'stained_glass.png', 'white_stained_glass.png', 'orange_stained_glass.png', 'magenta_stained_glass.png', 'light_blue_stained_glass.png', 'yellow_stained_glass.png', 'lime_stained_glass.png', 'pink_stained_glass.png', 'gray_stained_glass.png', 'light_gray_stained_glass.png', 'cyan_stained_glass.png', 'purple_stained_glass.png', 'blue_stained_glass.png', 'brown_stained_glass.png', 'green_stained_glass.png', 'red_stained_glass.png', 'black_stained_glass.png', 'stained_glass_pane.png', 'white_stained_glass_pane.png', 'orange_stained_glass_pane.png', 'magenta_stained_glass_pane.png', 'light_blue_stained_glass_pane.png', 'yellow_stained_glass_pane.png', 'lime_stained_glass_pane.png', 'pink_stained_glass_pane.png', 'gray_stained_glass_pane.png', 'light_gray_stained_glass_pane.png', 'cyan_stained_glass_pane.png', 'purple_stained_glass_pane.png', 'blue_stained_glass_pane.png', 'brown_stained_glass_pane.png', 'green_stained_glass_pane.png', 'red_stained_glass_pane.png', 'black_stained_glass_pane.png', 'copper_block.png', 'exposed_copper.png', 'weathered_copper.png', 'oxidized_copper.png', 'cut_copper.png', 'cut_copper_slab.png', 'cut_copper_stairs.png', 'waxed_copper.png', 'waxed_exposed_copper.png', 'waxed_weathered_copper.png', 'waxed_oxidized_copper.png', 'tintable_glazed_terracotta.png', 'glazed_terracotta_white.png', 'glazed_terracotta_orange.png', 'glazed_terracotta_magenta.png', 'glazed_terracotta_light_blue.png', 'glazed_terracotta_yellow.png', 'glazed_terracotta_lime.png', 'glazed_terracotta_pink.png', 'glazed_terracotta_gray.png', 'glazed_terracotta_light_gray.png', 'glazed_terracotta_cyan.png', 'glazed_terracotta_purple.png', 'glazed_terracotta_blue.png', 'glazed_terracotta_brown.png', 'glazed_terracotta_green.png', 'glazed_terracotta_red.png', 'glazed_terracotta_black.png', 'smithing_template.png', 'smithing_template_armorer.png', 'smithing_template_blaster.png', 'smithing_template_swordsmith.png', 'smithing_template_toolsmith.png', 'smithing_template_weaponmith.png', 'smithing_template_armorer_upgrade.png', 'stonecutter.png', 'stonecutter_block.png', 'barrel.png', 'loom.png', 'cartography_table.png', 'grindstone.png', 'lectern.png', 'campfire.png', 'soul_campfire.png', 'suspicious_gravel.png', 'moss_block.png', 'moss_carpet.png', 'azalea.png', 'flowering_azalea.png', 'rooted_azalea.png', 'azalea_leaves.png', 'hanging_roots.png', 'big_dripleaf.png', 'small_dripleaf.png', 'azalea_leaves_flowers.png', 'mossy_cobblestone.png', 'deepslate_tiles.png', 'deepslate_bricks.png', 'cracked_deepslate_tiles.png', 'cracked_deepslate_bricks.png', 'raw_iron_block.png', 'raw_copper_block.png', 'raw_gold_block.png', 'suspicious_sand.png', 'suspicious_gravel.png', 'suspicious_stew.png', 'ink_sac.png', 'glow_ink_sac.png', 'charcoal.png', 'coal_powder.png', 'soul_torch.png', 'soul_lantern.png', 'soul_campfire.png', 'chain.png', 'netherite_scrap.png', 'netherite_ingot.png', 'lodestone.png', 'lodestone_compass.png', 'crying_obsidian.png', 'respawn_anchor.png', 'respawn_anchor_charge.png', 'respawn_anchor_empty.png', 'twisting_vines.png', 'weeping_vines.png', 'warped_fungus.png', 'crimson_fungus.png', 'warped_nylium.png', 'crimson_nylium.png', 'warped_wart_block.png', 'crimson_stem.png', 'warped_stem.png', 'weeping_vines_plant.png', 'twisting_vines_plant.png', 'nether_sprouts.png', 'basalt.png', 'polished_basalt.png', 'blackstone.png', 'polished_blackstone.png', 'polished_blackstone_bricks.png', 'cracked_polished_blackstone_bricks.png', 'gilded_blackstone.png', 'chain_command_block.png', 'command_block.png', 'repeating_command_block.png', 'beacon.png', 'compat_book.png', 'knowledge_book.png', 'saddle.png', 'lead.png', 'bundle.png', 'sculk_sensor.png', 'sculk_shrieker.png', 'sculk_vein.png', 'sculk_catalyst.png', 'sculk_scrape.png', 'spyglass.png', 'suspicious_gravel.png', 'suspicious_sand.png', 'stone_axe.png', 'stone_pickaxe.png', 'stone_shovel.png', 'stone_hoe.png', 'iron_axe.png', 'iron_pickaxe.png', 'iron_shovel.png', 'iron_hoe.png', 'diamond_axe.png', 'diamond_pickaxe.png', 'diamond_shovel.png', 'diamond_hoe.png', 'golden_axe.png', 'golden_pickaxe.png', 'golden_shovel.png', 'golden_hoe.png', 'netherite_axe.png', 'netherite_pickaxe.png', 'netherite_shovel.png', 'netherite_hoe.png', 'wooden_sword.png', 'stone_sword.png', 'iron_sword.png', 'diamond_sword.png', 'netherite_sword.png', 'golden_sword.png', 'bow.png', 'crossbow.png', 'trident.png', 'shield.png', 'flint_and_steel.png', 'shears.png', 'shears_silk_touch.png', 'hoe.png', 'fishing_rod.png', 'carrot_on_a_stick.png', 'warped_fungus_on_a_stick.png', 'spyglass.png', 'compass.png', 'clock.png', 'lead.png', 'bucket.png', 'water_bucket.png', 'lava_bucket.png', 'milk_bucket.png', 'tropical_fish_bucket.png', 'pufferfish_bucket.png', 'cod_bucket.png', 'salmon_bucket.png', 'axolotl_bucket.png', 'tadpole_bucket.png', 'bundle.png', 'ender_chest.png', 'shulker_box.png', 'white_shulker_box.png', 'orange_shulker_box.png', 'magenta_shulker_box.png', 'light_blue_shulker_box.png', 'yellow_shulker_box.png', 'lime_shulker_box.png', 'pink_shulker_box.png', 'gray_shulker_box.png', 'light_gray_shulker_box.png', 'cyan_shulker_box.png', 'purple_shulker_box.png', 'blue_shulker_box.png', 'brown_shulker_box.png', 'green_shulker_box.png', 'red_shulker_box.png', 'black_shulker_box.png', 'elytra.png', 'firework_rocket.png', 'firework_star.png', 'firework_charge.png', 'name_tag.png', 'dragon_breath.png', 'splash_potion.png', 'lingering_potion.png', 'tipped_arrow.png', 'bottle_o_enchanting.png', 'experience_bottle.png', 'heart_of_the_sea.png', 'nautilus_shell.png', 'trident.png', 'conduit.png', 'music_disc_13.png', 'music_disc_cat.png', 'music_disc_blocks.png', 'music_disc_chirp.png', 'music_disc_far.png', 'music_disc_mall.png', 'music_disc_mellohi.png', 'music_disc_stal.png', 'music_disc_strad.png', 'music_disc_ward.png', 'music_disc_11.png', 'music_disc_wait.png', 'music_disc_otherside.png', 'music_disc_relic.png', 'music_disc_5.png', 'music_disc_pigstep.png', 'netherite_scrap.png', 'netherite_ingot.png', 'smithing_template.png', 'smithing_template_armorer.png'
];

// Lista de imágenes de Slimefun conocidas (para verificación)
const KNOWN_SLIMEFUN_IMAGES = [
    
'advanced_circuit_board.png', 'air.png', 'aluminum_brass_ingot.png', 'aluminum_dust.png', 'aluminum_ingot.png', 'android_memory_core.png', 'angel_talisman.png', 'anvil_talisman.png', 'armor_forge.png', 'automated_panning_machine.png', 'basic_circuit_board.png',
'battery.png', 'duralumin_ingot.png', 'earth.png', 'electro_magnet.png', 'elytra_scale.png', 'emerald_ring.png', 'enchantment.png', 'ender.png', 'ender_angel_talisman.png', 'ender_anvil_talisman.png', 'lead_dust.png', 'lead ingot.png', 'lightning.png', 'magic_sugar.png',
'magic_workbench.png', 'magical_book_cover.png', 'magical_glass.png', 'magical_lump1.png', 'magical_lump2.png', 'magical_lump3.png', 'magician_talisman.png', 'magnesium_dust.png', 'silver_ingot.png', 'slimefun_guide.png', 'small_backpack.png', 'small_uranium.png', 'smelters_pickaxe.png',
'smeltery.png', 'solar_array.png', 'solar_helmet.png', 'solar_panel.png', 'soulbound.png', 'soulbound_backpack.png', 'ender_backpack.png', 'ender_caveman_talisman.png', 'ender_fire_talisman.png', 'soulbound_elytra.png', 'beef_jerky.png', 'ender_hunter_talisman.png', 'magnesium_ingot.png',
'soulbound_sword.png', 'billon_ingot.png', 'ender_knight_talisman.png', 'magnet.png', 'steel_ingot.png', 'blade_of_vampires.png', 'ender_lava_talisman.png', 'makeshift_smeltery.png', 'steel_plate.png', 'blank.png', 'ender_lump1.png', 'medium_backpack.png', 'steel_thruster.png',
'boosted_uranium.png', 'ender_lump2.png', 'miner_talisman.png', 'stone_chunk.png', 'brass_ingot.png', 'ender_lump3.png', 'monster_jerky.png', 'strange_nether_goo.png', 'bronze_ingot.png', 'ender_magician_talisman.png', 'multimeter.png', 'sulfate.png', 'bucket_of_fuel.png', 'ender_miner_talisman.png',
'mutton_jerky.png', 'bucket_of_oil.png', 'ender_talisman.png', 'necrotic_skull.png', 'can.png', 'ender_traveller_talisman.png', 'neptunium.png', 'can_apple.png', 'can_beetroot.png', 'can_berries.png', 'can_carrots.png', 'can_cocoa.png', 'ender_warrior_talisman.png', 'ender_water_talisman.png',
'ender_whirlwind_talisman.png', 'nether_gold_pan.png', 'nether_ice_coolant_cell.png', 'nickel_ingot.png', 'night_vision_goggles.png', 'sword_of_beheading.png', 'synthetic_emerald.png synthetic_sapphire.png', 'tape_measure.png tin_dust.png', 'tin_ingot.png', 'tiny_uranium.png', 'traveller_talisman.png',
'ender_wizard_talisman.png', 'enhanced_crafting_table.png', 'ore_crusher.png', 'can_kelp.png', 'essence_of_afterlife.png', 'ore_washer.png', 'uranium.png', 'can_melon.png', 'ferrosilicon.png', 'pickaxe_of_containment.png', 'villagers.png', 'can_potatoes.png', 'fire.png', 'plastic_sheet.png', 'warrior_talisman.png',
'can_seeds.png', 'fire_talisman.png', 'plutonium.png', 'can_wheat.png', 'fish_jerky.png', 'pork_jerky.png', 'carbon.png', 'fortune_cookie.png', 'carbon_chunk.png', 'carbonado.png', 'caveman_talisman.png', 'chain.png', 'gilded_backpack.png', 'gilded_iron_ingot.png', 'power_crystal.png', 'gold_dust.png', 'gold_pan.png',
'pulverized_ore.png', 'pure_ore_cluster.png', 'chicken_jerky.png', 'climbing_pick.png', 'cloth.png', 'cobalt_ingot.png', 'common_talisman.png', 'grandmas_walking_stick.png', 'grandpas_walking_stick.png', 'grappling_hook.png', 'grind_stone.png', 'hardened_metal_ingot.png', 'rabbit_jerky.png',
'radiant_backpack.png', 'rainbow.png', 'raw_carbonado.png', 'water.png', 'water_talisman.png', 'whirlwind_talisman.png', 'wizard_talisman.png', 'woven_backpack.png', 'zinc_dust.png', 'zinc_ingot.png', 'portable_crafter.png', 'portable_geo_scanner.png', 'compressed_carbon.png', 'compressor.png', 'copper_dust.png',
'copper_ingot.png', 'reactor_collant_cell.png', 'hercules_pickaxe.png', 'redstone_alloy_ingot.png', 'hook.png', 'reinforced_alloy_boots.png', 'hunter_talisman.png', 'reinforced_alloy_chestplate.png', 'infernal_bonemeal.png', 'reinforced_alloy_helmet.png', 'copper_wire.png', 'crushed_ore.png',
'damascus_steel_boots.png', 'damascus_steel_chestplate.png', 'damascus steel_helmet.png', 'damascus_steel_ingot.png', 'damascus_steel_leggings.png', 'diamond_ring.png', 'diet_cookie.png', 'infused_elytra.png', 'infused_magnet.png', 'iron_dust.png', 'juicer.png', 'kelp_cookie.png', 'knight_talisman.png',
'large_backpack.png', 'lava_crystal.png', 'lava_talisman.png', 'reinforced_alloy_ingot.png', 'reinforced_alloy_leggings.png', 'reinforced_cloth.png', 'reinforced_plate.png', 'restored_backpack.png', 'salt.png', 'sifted_ore.png', 'silicon.png', 'silver_dust.png'
];

// Mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Función para formatear nombres de archivo a nombres legibles
function formatObjectName(filename) {
    // Remover extensión .png
    const nameWithoutExtension = filename.replace('.png', '');
    
    // Reemplazar _ por espacios
    const nameWithSpaces = nameWithoutExtension.replace(/_/g, ' ');
    
    // Capitalizar primera letra de cada palabra
    const formattedName = nameWithSpaces.replace(/\b\w/g, l => l.toUpperCase());
    
    return formattedName;
}

// Función para determinar la categoría basada en el nombre del objeto
function determineCategory(objectName, source) {
    if (source === 'minecraft') {
        if (objectName.includes('Pickaxe') || objectName.includes('Axe') || objectName.includes('Shovel') || objectName.includes('Hoe')) {
            return 'Herramientas';
        } else if (objectName.includes('Sword') || objectName.includes('Bow') || objectName.includes('Arrow') || objectName.includes('Trident')) {
            return 'Armas';
        } else if (objectName.includes('Helmet') || objectName.includes('Chestplate') || objectName.includes('Leggings') || objectName.includes('Boots')) {
            return 'Armaduras';
        } else if (objectName.includes('Apple') || objectName.includes('Bread') || objectName.includes('Beef') || objectName.includes('Cake')) {
            return 'Comida';
        } else if (objectName.includes('Ingot') || objectName.includes('Ore') || objectName.includes('Coal') || objectName.includes('Diamond')) {
            return 'Recursos';
        } else if (objectName.includes('Log') || objectName.includes('Stone') || objectName.includes('Dirt') || objectName.includes('Sand')) {
            return 'Bloques naturales';
        } else if (objectName.includes('Compass') || objectName.includes('Clock') || objectName.includes('Bucket') || objectName.includes('Fishing Rod')) {
            return 'Utilidad';
        } else {
            return 'Varios';
        }
    } else if (source === 'slimefun') {
        if (objectName.includes('Backpack') || objectName.includes('Chest')) {
            return 'Almacenamiento';
        } else if (objectName.includes('Pickaxe') || objectName.includes('Axe') || objectName.includes('Shovel') || objectName.includes('Pan')) {
            return 'Herramientas';
        } else if (objectName.includes('Sword') || objectName.includes('Bow') || objectName.includes('Blade')) {
            return 'Armas';
        } else if (objectName.includes('Armor') || objectName.includes('Helmet') || objectName.includes('Chestplate')) {
            return 'Armaduras';
        } else if (objectName.includes('Generator') || objectName.includes('Reactor')) {
            return 'Generadores';
        } else if (objectName.includes('Table') || objectName.includes('Forge') || objectName.includes('Crusher')) {
            return 'Máquinas';
        } else if (objectName.includes('Ingot') || objectName.includes('Silicon') || objectName.includes('Steel')) {
            return 'Materiales';
        } else if (objectName.includes('Magical') || objectName.includes('Soulbound')) {
            return 'Magia';
        } else {
            return 'Utilidad';
        }
    }
    return 'General';
}

// Función genérica para escanear y cargar imágenes automáticamente
async function loadImagesAutoScan(imageList, folderPath, sourceType) {
    try {
        showNotification(`Escaneando imágenes locales de ${sourceType === 'minecraft' ? 'Minecraft' : 'Slimefun'}...`, 'success');
        
        const objects = [];
        let loadedCount = 0;
        
        // Intentar cargar imágenes conocidas
        const imagePromises = imageList.map(filename => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    // La imagen existe y se cargó correctamente
                    const objectId = filename.replace('.png', '');
                    const objectName = formatObjectName(filename);
                    const category = determineCategory(objectName, sourceType);
                    
                    objects.push({
                        id: objectId,
                        name: objectName,
                        image: folderPath + filename,
                        category: category,
                        source: sourceType
                    });
                    loadedCount++;
                    resolve(true);
                };
                img.onerror = () => {
                    // La imagen no existe o no se pudo cargar
                    resolve(false);
                };
                img.src = folderPath + filename;
            });
        });
        
        // Esperar a que todas las comprobaciones terminen
        await Promise.all(imagePromises);
        
        if (objects.length > 0) {
            showNotification(`Encontradas ${objects.length} imágenes de ${sourceType === 'minecraft' ? 'Minecraft' : 'Slimefun'}`);
            
            // Ordenar alfabéticamente por nombre
            objects.sort((a, b) => a.name.localeCompare(b.name));
            
            return objects;
        } else {
            throw new Error(`No se encontraron imágenes para ${sourceType}`);
        }
        
    } catch (error) {
        console.error(`Error en escaneo automático de ${sourceType}:`, error);
        throw error;
    }
}

// Función para cargar objetos de Minecraft
async function loadMinecraftObjects() {
    try {
        minecraftObjects = await loadImagesAutoScan(KNOWN_MINECRAFT_IMAGES, 'images/minecraft/', 'minecraft');
        loadObjectsIntoUI(minecraftObjects, 'minecraft-objects');
    } catch (error) {
        console.error('Error cargando Minecraft:', error);
        // Fallback: crear objetos básicos si no se encuentran imágenes
        createFallbackObjects('minecraft');
        showNotification('Usando objetos predefinidos de Minecraft', 'warning');
    }
}

// Función para cargar objetos de Slimefun
async function loadSlimefunObjects() {
    try {
        slimefunObjects = await loadImagesAutoScan(KNOWN_SLIMEFUN_IMAGES, 'images/slimefun/', 'slimefun');
        loadObjectsIntoUI(slimefunObjects, 'slimefun-objects');
    } catch (error) {
        console.error('Error cargando Slimefun:', error);
        // Fallback: crear objetos básicos si no se encuentran imágenes
        createFallbackObjects('slimefun');
        showNotification('Usando objetos predefinidos de Slimefun', 'warning');
    }
}

// Función de fallback para crear objetos básicos
function createFallbackObjects(sourceType) {
    const imageList = sourceType === 'minecraft' ? KNOWN_MINECRAFT_IMAGES : KNOWN_SLIMEFUN_IMAGES;
    const folderPath = sourceType === 'minecraft' ? 'images/minecraft/' : 'images/slimefun/';
    
    const objects = imageList.map(filename => {
        const objectId = filename.replace('.png', '');
        const objectName = formatObjectName(filename);
        const category = determineCategory(objectName, sourceType);
        
        return {
            id: objectId,
            name: objectName,
            image: folderPath + filename,
            category: category,
            source: sourceType
        };
    });
    
    if (sourceType === 'minecraft') {
        minecraftObjects = objects;
        loadObjectsIntoUI(minecraftObjects, 'minecraft-objects');
    } else {
        slimefunObjects = objects;
        loadObjectsIntoUI(slimefunObjects, 'slimefun-objects');
    }
}

// Función principal para cargar todas las librerías
async function loadCompleteObjectsLibrary() {
    try {
        // Cargar ambos simultáneamente
        await Promise.all([
            loadMinecraftObjects(),
            loadSlimefunObjects()
        ]);
        
        showNotification('Librerías cargadas correctamente');
        
    } catch (error) {
        console.error('Error cargando librerías:', error);
        showNotification('Error cargando algunas librerías', 'error');
    }
}

// Cargar objetos en la UI
function loadObjectsIntoUI(objects, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Limpiar contenedor
    container.innerHTML = '';
    
    // Añadir título de sección
    const sectionTitle = document.createElement('div');
    sectionTitle.className = `section-title ${containerId.includes('minecraft') ? 'minecraft-section' : 'slimefun-section'}`;
    sectionTitle.textContent = containerId.includes('minecraft') ? 'Objetos de Minecraft 1.21.5' : 'Objetos de Slimefun 4';
    container.appendChild(sectionTitle);
    
    // Agrupar objetos por categoría
    const groupedObjects = {};
    objects.forEach(obj => {
        if (!groupedObjects[obj.category]) {
            groupedObjects[obj.category] = [];
        }
        groupedObjects[obj.category].push(obj);
    });
    
    // Mostrar por categorías
    Object.keys(groupedObjects).sort().forEach(category => {
        // Añadir subtítulo de categoría
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'section-title subcategory';
        categoryTitle.textContent = category;
        categoryTitle.style.fontSize = '0.9em';
        categoryTitle.style.margin = '10px 0 5px 0';
        categoryTitle.style.padding = '8px 12px';
        container.appendChild(categoryTitle);
        
        // Añadir objetos de esta categoría
        groupedObjects[category].forEach(obj => {
            const item = document.createElement('div');
            item.className = 'object-item';
            item.setAttribute('data-id', obj.id);
            item.setAttribute('data-source', containerId.includes('minecraft') ? 'minecraft' : 'slimefun');
            item.innerHTML = `
                <img src="${obj.image}" alt="${obj.name}" class="object-image" 
                     onerror="this.src='https://via.placeholder.com/48x48/cccccc/666666?text=?'">
                <span class="object-name">${obj.name}</span>
            `;
            
            item.addEventListener('click', function() {
                // Deseleccionar todos los objetos
                document.querySelectorAll('.object-item').forEach(el => {
                    el.classList.remove('selected');
                });
                // Seleccionar este objeto
                this.classList.add('selected');
            });
            
            container.appendChild(item);
        });
    });
}

// Mostrar/ocultar selección de objetos según la fuente seleccionada
function toggleObjectSelection() {
    const source = document.getElementById('object-source').value;
    const minecraftSection = document.getElementById('minecraft-objects');
    const slimefunSection = document.getElementById('slimefun-objects');
    
    minecraftSection.style.display = source === 'minecraft' ? 'grid' : 'none';
    slimefunSection.style.display = source === 'slimefun' ? 'grid' : 'none';
    
    // Deseleccionar cualquier objeto previamente seleccionado
    document.querySelectorAll('.object-item').forEach(el => {
        el.classList.remove('selected');
    });
}

// Guardar objeto en Firebase
function saveObject(object) {
    const id = Date.now().toString();
    return database.ref('objects/' + id).set(object)
        .then(() => id)
        .catch(error => {
            console.error('Error guardando objeto:', error);
            throw error;
        });
}

// Obtener todos los objetos de Firebase
function getAllObjects() {
    return database.ref('objects').once('value')
        .then(snapshot => {
            const objects = [];
            snapshot.forEach(childSnapshot => {
                const obj = childSnapshot.val();
                obj.id = childSnapshot.key;
                objects.push(obj);
            });
            return objects;
        })
        .catch(error => {
            console.error('Error obteniendo objetos:', error);
            throw error;
        });
}

// Actualizar objeto en Firebase
function updateObject(id, updatedObject) {
    return database.ref('objects/' + id).update(updatedObject)
        .then(() => true)
        .catch(error => {
            console.error('Error actualizando objeto:', error);
            throw error;
        });
}

// Eliminar objeto de Firebase
function deleteObject(id) {
    return database.ref('objects/' + id).remove()
        .then(() => true)
        .catch(error => {
            console.error('Error eliminando objeto:', error);
            throw error;
        });
}

// Cargar objetos en la tabla
function loadObjectsTable() {
    getAllObjects().then(objects => {
        const tbody = document.getElementById('objects-table-body');
        const emptyMessage = document.getElementById('empty-message');
        
        tbody.innerHTML = '';
        
        if (objects.length === 0) {
            emptyMessage.style.display = 'block';
            return;
        }
        
        emptyMessage.style.display = 'none';
        
        objects.forEach(obj => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${obj.image}" alt="${obj.name}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.src='https://via.placeholder.com/32x32/cccccc/666666?text=?'"></td>
                <td>${obj.name}</td>
                <td>${obj.source === 'minecraft' ? 'Minecraft 1.21.5' : 'Slimefun 4'}</td>
                <td>${obj.price} €</td>
                <td>${obj.description || '-'}</td>
                <td>${obj.unique ? 'Sí' : 'No'}</td>
                <td class="actions">
                    <button class="action-btn edit-btn" data-id="${obj.id}">Editar</button>
                    <button class="action-btn delete-btn" data-id="${obj.id}">Eliminar</button>
                </td>
            `;
            tbody.appendChild(row);
        });
        
        // Agregar event listeners a los botones de editar y eliminar
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                editObject(id);
            });
        });
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                deleteObjectFromTable(id);
            });
        });
    }).catch(error => {
        console.error('Error cargando tabla:', error);
        showNotification('Error cargando los objetos guardados', 'error');
    });
}

// Editar objeto
function editObject(id) {
    getAllObjects().then(objects => {
        const obj = objects.find(o => o.id === id);
        
        if (!obj) {
            showNotification('Objeto no encontrado', 'error');
            return;
        }
        
        // Llenar el formulario con los datos del objeto
        document.getElementById('object-source').value = obj.source;
        toggleObjectSelection();
        
        // Esperar a que se cargue la selección de objetos
        setTimeout(() => {
            const objectItem = document.querySelector(`.object-item[data-id="${obj.objectId}"][data-source="${obj.source}"]`);
            if (objectItem) {
                objectItem.classList.add('selected');
            }
            
            document.getElementById('object-price').value = obj.price;
            document.getElementById('object-description').value = obj.description || '';
            document.getElementById('object-unique').value = obj.unique.toString();
            
            // Cambiar a la sección de añadir
            switchSection('add-section');
            
            // Cambiar el texto del botón a "Actualizar"
            const submitBtn = document.querySelector('#object-form button');
            submitBtn.textContent = 'Actualizar Objeto';
            submitBtn.setAttribute('data-editing-id', id);
            
            showNotification('Puedes editar el objeto seleccionado');
        }, 100);
    });
}

// Eliminar objeto de la tabla
function deleteObjectFromTable(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este objeto?')) {
        deleteObject(id).then(() => {
            showNotification('Objeto eliminado correctamente');
            loadObjectsTable();
        }).catch(error => {
            showNotification('Error al eliminar el objeto', 'error');
        });
    }
}

// Cambiar entre secciones
function switchSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
    
    // Actualizar botones del menú
    document.querySelectorAll('.menu button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === sectionId) {
            btn.classList.add('active');
        }
    });
    
    // Si es la sección de ver objetos, cargar la tabla
    if (sectionId === 'view-section') {
        loadObjectsTable();
    }
    
    // Si es la sección de búsqueda, cargar todos los objetos
    if (sectionId === 'search-section') {
        loadSearchResults();
    }
}

// Cargar resultados de búsqueda
function loadSearchResults(query = '') {
    getAllObjects().then(objects => {
        const tbody = document.getElementById('search-results-body');
        const noResultsMessage = document.getElementById('no-results-message');
        
        tbody.innerHTML = '';
        
        const filteredObjects = objects.filter(obj => 
            obj.name.toLowerCase().includes(query.toLowerCase()) ||
            obj.source.toLowerCase().includes(query.toLowerCase()) ||
            (obj.description && obj.description.toLowerCase().includes(query.toLowerCase()))
        );
        
        if (filteredObjects.length === 0) {
            noResultsMessage.style.display = 'block';
            return;
        }
        
        noResultsMessage.style.display = 'none';
        
        filteredObjects.forEach(obj => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${obj.image}" alt="${obj.name}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.src='https://via.placeholder.com/32x32/cccccc/666666?text=?'"></td>
                <td>${obj.name}</td>
                <td>${obj.source === 'minecraft' ? 'Minecraft 1.21.5' : 'Slimefun 4'}</td>
                <td>${obj.price} €</td>
                <td>${obj.description || '-'}</td>
                <td>${obj.unique ? 'Sí' : 'No'}</td>
            `;
            tbody.appendChild(row);
        });
    }).catch(error => {
        console.error('Error en búsqueda:', error);
    });
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Cargar objetos en la selección
    loadCompleteObjectsLibrary();
    
    // Configurar cambio de fuente de objetos
    document.getElementById('object-source').addEventListener('change', toggleObjectSelection);
    
    // Configurar navegación del menú
    document.querySelectorAll('.menu button').forEach(btn => {
        btn.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            switchSection(sectionId);
        });
    });
    
    // Configurar el formulario
    document.getElementById('object-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const source = document.getElementById('object-source').value;
        const selectedObject = document.querySelector('.object-item.selected');
        
        if (!selectedObject) {
            showNotification('Debes seleccionar un objeto', 'error');
            return;
        }
        
        const objectId = selectedObject.getAttribute('data-id');
        const objectSource = selectedObject.getAttribute('data-source');
        const objectName = selectedObject.querySelector('.object-name').textContent;
        const objectImage = selectedObject.querySelector('.object-image').src;
        const price = parseFloat(document.getElementById('object-price').value);
        const description = document.getElementById('object-description').value;
        const unique = document.getElementById('object-unique').value === 'true';
        
        // Buscar el objeto completo en la lista correspondiente
        const objectList = objectSource === 'minecraft' ? minecraftObjects : slimefunObjects;
        const fullObject = objectList.find(obj => obj.id === objectId);
        
        const object = {
            objectId,
            name: objectName,
            image: objectImage,
            source: objectSource,
            price,
            description,
            unique,
            category: fullObject ? fullObject.category : 'General'
        };
        
        const submitBtn = this.querySelector('button');
        const editingId = submitBtn.getAttribute('data-editing-id');
        
        if (editingId) {
            // Actualizar objeto existente
            updateObject(editingId, object).then(() => {
                showNotification('Objeto actualizado correctamente');
                submitBtn.textContent = 'Guardar Objeto';
                submitBtn.removeAttribute('data-editing-id');
                this.reset();
                toggleObjectSelection();
            }).catch(error => {
                showNotification('Error al actualizar el objeto', 'error');
            });
        } else {
            // Guardar nuevo objeto
            if (unique) {
                getAllObjects().then(existingObjects => {
                    const exists = existingObjects.some(obj => 
                        obj.name === objectName && obj.unique && obj.source === objectSource
                    );
                    
                    if (exists) {
                        showNotification('Ya existe un objeto único con este nombre', 'error');
                        return;
                    }
                    
                    saveObject(object).then(() => {
                        showNotification('Objeto guardado correctamente');
                        this.reset();
                        toggleObjectSelection();
                    }).catch(error => {
                        showNotification('Error al guardar el objeto', 'error');
                    });
                });
            } else {
                saveObject(object).then(() => {
                    showNotification('Objeto guardado correctamente');
                    this.reset();
                    toggleObjectSelection();
                }).catch(error => {
                    showNotification('Error al guardar el objeto', 'error');
                });
            }
        }
    });
    
    // Configurar búsqueda en tiempo real
    document.getElementById('search-input').addEventListener('input', function() {
        loadSearchResults(this.value);
    });
    
    // Manejar errores de imágenes globalmente
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG' && (e.target.classList.contains('object-image') || e.target.parentElement.tagName === 'TD')) {
            e.target.src = 'https://via.placeholder.com/48x48/cccccc/666666?text=?';
        }
    }, true);
});