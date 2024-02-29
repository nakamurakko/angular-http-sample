import { map, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { NumberValue } from '../data-types/number-value';
import { HttpHeaderService } from './http-header.service';

@Injectable({
  providedIn: 'root'
})
export class DataPoolService {

  public constructor(
    private http: HttpClient,
    private httpHeaderService: HttpHeaderService
  ) {
  }

  /**
   * NumberValueクラスを介して数値の配列を返す。
   *
   * @returns NumberValueの配列
   */
  public getNumbers(): Observable<Array<NumberValue>> {
    return this.http.get('http://localhost:3000/GetNumbers', { headers: this.httpHeaderService.getHttpHeaders() })
      .pipe(
        map(value => value as Array<NumberValue>)
      );
  }

  /**
   * 文字列の配列を返す。
   *
   * @returns 文字列の配列
   */
  public getStrings(): Observable<Array<string>> {
    return this.http.get('http://localhost:3000/GetStrings', { headers: this.httpHeaderService.getHttpHeaders() })
      .pipe(
        map(value => value as Array<string>)
      );
  }

}
