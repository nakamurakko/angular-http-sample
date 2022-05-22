import { Observable } from 'rxjs';

import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { NumberValue } from './data-types/number-value';

@Controller()
export class AppController {

  public constructor(private readonly appService: AppService) { }

  @Get()
  public getHello(): Observable<string> {
    return this.appService.getHello();
  }

  @Get('GetNumbers')
  public getNumbers(): Observable<Array<NumberValue>> {
    return this.appService.getNumbers();
  }

  @Get('GetStrings')
  public getStrings(): Observable<Array<string>> {
    return this.appService.getStrings();
  }

}
