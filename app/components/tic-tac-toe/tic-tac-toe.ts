import { Component, OnInit } from '@angular/core';

import { TcBattlefield } from '../tc-battlefield/tc-battlefield';
import { TcAbout } from '../tc-about/tc-about';

@Component({
    selector: 'tic-tac-toe',
    template: `<tc-battlefield></tc-battlefield><tc-about><tc-about>`,
    directives: [TcAbout, TcBattlefield]
})
export class TicTacToe implements OnInit {
    constructor() { }

    ngOnInit() { }

}