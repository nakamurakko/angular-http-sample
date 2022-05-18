import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { DataPoolService } from '../services/data-pool.service';
import { HttpHeaderService } from '../services/http-header.service';

@Component({
  selector: 'app-multiple-http-sample',
  templateUrl: './multiple-http-sample.component.html',
  styleUrls: ['./multiple-http-sample.component.css']
})
export class MultipleHttpSampleComponent implements OnInit {

  public responseData: string = '';
  public isProcessing: boolean = false;

  public constructor(private http: HttpClient, private httpHeaderService: HttpHeaderService, private dataPoolService: DataPoolService) { }

  public ngOnInit(): void {
  }

  /**
   * onHttpClick
   */
  public onHttpClick(): void {
    this.responseData = '';

    this.isProcessing = true;
    this.dataPoolService.getNumbers()
      .subscribe(
        response => {
          this.responseData = JSON.stringify(response);
        },
        error => { },
        () => {
          this.isProcessing = false;
        }
      );
  }

  /**
   * onMultipleHttpClick
   */
  public onMultipleHttpClick(): void {
    this.responseData = '';

    this.isProcessing = true;
    forkJoin(
      [
        this.dataPoolService.getNumbers(),
        this.dataPoolService.getStrings(),
      ]
    )
      .subscribe(
        response => {
          this.responseData = JSON.stringify(response);
        },
        error => { },
        () => {
          this.isProcessing = false;
        }
      );
  }

}
