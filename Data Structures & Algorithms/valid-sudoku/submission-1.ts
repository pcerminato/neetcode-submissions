class Solution {
    constructor(){
        this.map = new Map();
    }
    map: Map<string, string[]>;
    isValidSudoku(board: string[][]): boolean {
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[r].length; c++) {
                const value = board[r][c];

                if (value === ".") {
                    continue;
                }
                if (!this.isValidPartition(`row_${r}`, value)) {
                    return false;
                }
                if (!this.isValidPartition(`col_${c}`, value)) {
                    return false;
                }
                if (!this.isValidPartition(this.makeSqrKey(r,c), value)) {
                    return false;
                }
            }
        }
        return true;
    }
    makeSqrKey(row: number, col: number){
        const r = Math.floor(row / 3);
        const c = Math.floor(col / 3);
        return `sqr_${r}-${c}`;
    }
    isValidPartition(key:string, value){
        if (this.map.get(key)) {
            if (this.map.get(key).includes(value)) {
                return false;
            }
            this.map.set(key, [...this.map.get(key), value]);
        } else {
            this.map.set(key, [value]);
        }
        return true;
    }
}
