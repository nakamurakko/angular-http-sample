import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpHeaderService {

  /**
   * HttpHeaders のインスタンスを返す。
   * @returns HttpHeaders
   */
  public getHttpHeaders(): HttpHeaders {
    return new HttpHeaders();
  }

}
