// kubejs/server_scripts/manage_place.js

const PROTECTED_AREAS = [

    {
        name: "던전1",
        minX: -2999,
        maxX: -2745,
        minY: 69,
        maxY: 201,
        minZ: 1,
        maxZ: -256
    },

    {
        name: "던전2",
        minX: 500,
        maxX: 520,
        minY: 20,
        maxY: 50,
        minZ: 300,
        maxZ: 420
    }

]

BlockEvents.broken(event => {

    const x = event.block.x
    const y = event.block.y
    const z = event.block.z

    for (const area of PROTECTED_AREAS) {

        if (
            x >= area.minX && x <= area.maxX &&
            y >= area.minY && y <= area.maxY &&
            z >= area.minZ && z <= area.maxZ
        ) {

            event.cancel()
            event.player.tell("§c이 지역에서는 블록을 파괴할 수 없습니다.")
            return
        }
    }

})

BlockEvents.placed(event => {

    const x = event.block.x
    const y = event.block.y
    const z = event.block.z

    for (const area of PROTECTED_AREAS) {

        if (
            x >= area.minX && x <= area.maxX &&
            y >= area.minY && y <= area.maxY &&
            z >= area.minZ && z <= area.maxZ
        ) {

            event.cancel()
            event.player.tell("§c이 지역에서는 블록을 설치할 수 없습니다.")
            return
        }
    }

})