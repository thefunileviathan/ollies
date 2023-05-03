// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000020101010303030303010101060000000109070707070707070707090100000001090a0a0a0a0a0a0a0a0a090100000003090a0a0a0a0a0a0a0a0a090300000003090a0a0a0a0a0a0a0a0a090300000003090a0a0a0a0a0a0a0a0a090300000003090a0a0a0a0a0a0a0a0a090300000003090a0a0a0a0a0a0a0a0a090300000001090a0a0a0a0a0a0a0a0a090100000001090a0a0a0a0a0a0a0a0a0901000000010908080808080808080809010000000401010103030303030101010500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.swamp.swampTile9,sprites.swamp.swampTile6,sprites.swamp.swampTile13,sprites.swamp.swampTile12,sprites.swamp.swampTile14,sprites.swamp.swampTile8,sprites.builtin.crowd2,sprites.builtin.crowd8,sprites.castle.saplingOak,sprites.builtin.field1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
