"use strict";
const COLOR_MAP = {
    C0: ["W", "B", "O"],
    C1: ["W", "R", "B"],
    C2: ["W", "O", "G"],
    C3: ["W", "G", "R"],
    C4: ["Y", "O", "B"],
    C5: ["Y", "B", "R"],
    C6: ["Y", "G", "O"],
    C7: ["Y", "R", "G"],
    E0: ["W", "B"],
    E1: ["O", "W"],
    E2: ["R", "W"],
    E3: ["W", "G"],
    E4: ["B", "O"],
    E5: ["B", "R"],
    E6: ["G", "O"],
    E7: ["G", "R"],
    E8: ["Y", "B"],
    E9: ["O", "Y"],
    E10: ["R", "Y"],
    E11: ["Y", "G"],
};
const POS_TABLE = [
    ["", "", "", "C0U", "E0U", "C1U", "", "", "", "", "", ""],
    ["", "", "", "E1D", "", "E2D", "", "", "", "", "", ""],
    ["", "", "", "C2U", "E3U", "C3U", "", "", "", "", "", ""],
    ["C0R", "E1U", "C2L", "C2R", "E3D", "C3L", "C3R", "E2U", "C1L", "C1R", "E0D", "C0L"],
    ["E4D", "", "E6D", "E6U", "", "E7U", "E7D", "", "E5D", "E5U", "", "E4U"],
    ["C4L", "E9U", "C6R", "C6L", "E11D", "C7R", "C7L", "E10U", "C5R", "C5L", "E8D", "C4R"],
    ["", "", "", "C6U", "E11U", "C7U", "", "", "", "", "", ""],
    ["", "", "", "E9D", "", "E10D", "", "", "", "", "", ""],
    ["", "", "", "C4U", "E8U", "C5U", "", "", "", "", "", ""],
];
const FACE_PRIORITY = {
    C: ["U", "L", "R"],
    E: ["U", "D"],
};
const ID_POS_MAP = {};
for (let y = 0; y < POS_TABLE.length; y++) {
    for (let x = 0; x < POS_TABLE[y].length; x++) {
        const cell = POS_TABLE[y][x];
        if (!cell)
            continue;
        const id = cell.slice(0, -1);
        const face = cell.slice(-1);
        const prefix = id[0];
        if (!ID_POS_MAP[id]) {
            ID_POS_MAP[id] = new Array(FACE_PRIORITY[prefix].length);
        }
        const index = FACE_PRIORITY[prefix].indexOf(face);
        if (index !== -1) {
            ID_POS_MAP[id][index] = [x, y];
        }
    }
}
