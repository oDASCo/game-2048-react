import {create} from "../cellManager";
import {moveCells, directions} from "../moveCells"


describe('moving up', () => {
    it('move on 3 steps', () => {
        const initCells = [create(1, 3, 2, 'test')];
        expect(moveCells(initCells, directions.UP)).toEqual([
            {x: 1, y: 0, value: 2, id: 'test'},

        ])
    });


    it('move 2 cells', () => {
        const initCells = [create(1, 3, 2, 'test1'), create(0, 3, 2, 'test2')];


        expect(moveCells(initCells, directions.UP)).toEqual([
            {x: 1, y: 0, value: 2, id: 'test1'},
            {x: 0, y: 0, value: 2, id: 'test2'}
        ])


    })


});



