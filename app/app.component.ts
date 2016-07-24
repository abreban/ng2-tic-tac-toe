import { Component } from '@angular/core';
import { TicTacToe } from './components/tic-tac-toe/tic-tac-toe';

@Component({
    selector: 'my-app',
    template: `<tic-tac-toe></tic-tac-toe>`,
    directives: [TicTacToe]
})
export class AppComponent { }