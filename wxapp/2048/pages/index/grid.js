function Grid(size) {
    this.size = size;
    this.cells = this.empty();
}
// 二维数组 为数组填充值
Grid.prototype = {
    empty: function () {
        let cells = [];
        for (let i = 0; i < this.size; i++) {
            cells[i] = [];
            for (let j = 0; j < this.size; j++) {
                cells[i].push(null);
            }
        }
        return cells;
    }
}

module.exports = Grid;