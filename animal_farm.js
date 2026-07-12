// kubejs/server_scripts/animal_farm/animal_farm_place.js

const ANIMAL_FARM_SIZE = 19

BlockEvents.rightClicked(event => {

    const player = event.player
    const item = player.mainHandItem

    // 지식의 책만 사용
    if (item.id != "minecraft:knowledge_book") return

    // 생성권 이름
    const name = item.getHoverName().string

    switch (name) {

        case "빨간 목장 생성권":
            player.runCommandSilent("//schem load red_animal_farm")
            break

        case "노란 목장 생성권":
            player.runCommandSilent("//schem load yellow_animal_farm")
            break

        case "연두 목장 생성권":
            player.runCommandSilent("//schem load lime_animal_farm")
            break

        case "하늘 목장 생성권":
            player.runCommandSilent("//schem load light_blue_animal_farm")
            break

        case "보라 목장 생성권":
            player.runCommandSilent("//schem load purple_animal_farm")
            break

        case "핑크 목장 생성권":
            player.runCommandSilent("//schem load pink_animal_farm")
            break

        case "흰색 목장 생성권":
            player.runCommandSilent("//schem load white_animal_farm")
            break

        case "검은 목장 생성권":
            player.runCommandSilent("//schem load black_animal_farm")
            break

        default:
            return
    }

    // 이미 목장이 있는지 검사
    if (hasFarmBorder(player, ANIMAL_FARM_SIZE)) {
        player.tell("§c이미 다른 목장이 있는 위치입니다.")
        return
    }

    player.tell("§a목장을 설치합니다.")

    player.runCommandSilent("//paste -a")

    item.count--
})

function hasFarmBorder(player, size) {

    const center = player.block
    const half = Math.floor(size / 2)

    // 위 / 아래
    for (let x = -half; x <= half; x++) {

        let top = center.offset(x, 0, -half)
        let bottom = center.offset(x, 0, half)

        if (
            top.id == "minecraft:red_concrete" ||
            top.id == "minecraft:yellow_concrete" ||
            top.id == "minecraft:lime_concrete" ||
            top.id == "minecraft:light_blue_concrete" ||
            top.id == "minecraft:purple_concrete" ||
            top.id == "minecraft:pink_concrete" ||
            top.id == "minecraft:white_concrete" ||
            top.id == "minecraft:black_concrete"
        ) return true

        if (
            bottom.id == "minecraft:red_concrete" ||
            bottom.id == "minecraft:yellow_concrete" ||
            bottom.id == "minecraft:lime_concrete" ||
            bottom.id == "minecraft:light_blue_concrete" ||
            bottom.id == "minecraft:purple_concrete" ||
            bottom.id == "minecraft:pink_concrete" ||
            bottom.id == "minecraft:white_concrete" ||
            bottom.id == "minecraft:black_concrete"
        ) return true
    }

    // 좌 / 우
    for (let z = -half + 1; z <= half - 1; z++) {

        let left = center.offset(-half, 0, z)
        let right = center.offset(half, 0, z)

        if (
            left.id == "minecraft:red_concrete" ||
            left.id == "minecraft:yellow_concrete" ||
            left.id == "minecraft:lime_concrete" ||
            left.id == "minecraft:light_blue_concrete" ||
            left.id == "minecraft:purple_concrete" ||
            left.id == "minecraft:pink_concrete" ||
            left.id == "minecraft:white_concrete" ||
            left.id == "minecraft:black_concrete"
        ) return true

        if (
            right.id == "minecraft:red_concrete" ||
            right.id == "minecraft:yellow_concrete" ||
            right.id == "minecraft:lime_concrete" ||
            right.id == "minecraft:light_blue_concrete" ||
            right.id == "minecraft:purple_concrete" ||
            right.id == "minecraft:pink_concrete" ||
            right.id == "minecraft:white_concrete" ||
            right.id == "minecraft:black_concrete"
        ) return true
    }

    return false
}