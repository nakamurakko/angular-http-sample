import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderService {

  public constructor() { }

  /**
   * HttpHeaders のインスタンスを返す。
   *
   * @returns HttpHeaders
   */
  public getHttpHeaders(): HttpHeaders {
    const headers: HttpHeaders = new HttpHeaders();
    return headers;
  }

}
