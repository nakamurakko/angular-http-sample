import { defer, Observable, of } from 'rxjs';

import { Injectable } from '@nestjs/common';

import { NumberValue } from './data-types/number-value';

@Injectable()
export class AppService {

  public getHello(): Observable<string> {
    return of('Hello World!');
  }

  public getNumbers(): Observable<Array<NumberValue>> {
    return defer(() => {
      const result: Array<NumberValue> = new Array<NumberValue>();

      for (let i: number = 0; i < 10; i++) {
        const numberValue: NumberValue = new NumberValue();
        numberValue.value = i;

        result.push(numberValue);
      }


      return of(result);
    });
  }

  public getStrings(): Observable<Array<string>> {
    return defer(() => {
      return of(['a', 'bb', 'ccc']);
    });
  }

}
