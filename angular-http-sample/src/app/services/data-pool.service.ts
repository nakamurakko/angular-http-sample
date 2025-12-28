import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { NumberValue } from '../data-types/number-value';
import { HttpHeaderService } from './http-header.service';

@Injectable({
  providedIn: 'root',
})
export class DataPoolService {

  private http = inject(HttpClient);

  private httpHeaderService = inject(HttpHeaderService);

  /**
   * NumberValueクラスを介して数値の配列を返す。
   * @returns NumberValue の配列
   */
  public getNumbers(): Observable<NumberValue[]> {
    return this.http.get<NumberValue[]>('http://localhost:3000/GetNumbers', { headers: this.httpHeaderService.getHttpHeaders() });
  }

  /**
   * 文字列の配列を返す。
   * @returns 文字列の配列
   */
  public getStrings(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/GetStrings', { headers: this.httpHeaderService.getHttpHeaders() });
  }

}
