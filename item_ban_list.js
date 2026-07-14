// kubejs/server_scripts/item_ban_list.js

const BANNED_RECIPES = [

"minecraft:diamond_sword",
"minecraft:anvil",
"minecraft:diamond_helmet",
"minecraft:diamond_chestplate",
"minecraft:diamond_leggings",
"minecraft:diamond_boots",
"minecraft:diamond_axe",
"minecraft:wooden_axe",
"minecraft:iron_helmet",
"minecraft:iron_chestplate",
"minecraft:iron_leggings",
"minecraft:iron_boots",
"minecraft:gold_helmet",
"minecraft:gold_chestplate",
"minecraft:gold_leggings",
"minecraft:gold_boots",
"minecraft:sheld",
"farmersdelight:stove",
"farmersdelight:cooking_pot",


]

ServerEvents.recipes(event => {

    BANNED_RECIPES.forEach(id => {

        event.remove({ output: id })

    })

})