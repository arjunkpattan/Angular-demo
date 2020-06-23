
import { Pipe, PipeTransform } from '@angular/core';
import { SortPipe } from './app.sort';

@Pipe ({
    name: 'sort'
})


export class SortPipe implements PipeTransform{

    transform(value: any[], args: string): any{
        if(args === 'ascending'){
            return value.sort();
        }
        else if(args === 'descending'){
            return value.sort().reverse();

        }
    }
}