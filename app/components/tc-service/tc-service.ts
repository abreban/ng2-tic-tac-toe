import { Injectable } from '@angular/core';

@Injectable()
export class tcService {
    constructor() { }

    checkGame(hash:Array<any>):any{
        const factor = hash.length;
        const checkForColMatch = (hash:any, x:number) => (hash[x][0] === hash[x][1]) && (hash[x][1] === hash[x][2]) && hash[x][2];
        const checkForRowMatch = (hash:any, x:number) => (hash[0][x] === hash[1][x]) && (hash[1][x] === hash[2][x]) && hash[2][x];
    
    const checkForXMatch = (hash:any) => {
      const center = hash[1][1];

      if (!center)
        return false;

      return hash[0][0] === hash[2][2] && hash[2][2] === center || hash[0][2] === hash[2][0] && hash[2][0] === center;
    };

    for (let i = 0; i < factor; i += 1) {
      if (checkForColMatch(hash, i) || checkForRowMatch(hash, i)){
        return {endGame: true};        
      }
    }

    if (checkForXMatch(hash))
      return {endGame: true};

    if(hash.every(elm => elm.reduce((a:any, b:any) => !a ? a : b) !== null))
      return {draw: true};
  }

}