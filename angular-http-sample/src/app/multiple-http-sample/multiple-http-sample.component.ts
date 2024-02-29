import { forkJoin } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { DataPoolService } from '../services/data-pool.service';

@Component({
  selector: 'app-multiple-http-sample',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule
  ],
  templateUrl: './multiple-http-sample.component.html',
  styleUrl: './multiple-http-sample.component.css'
})
export class MultipleHttpSampleComponent {

  public responseData: string = '';
  public isProcessing: boolean = false;

  public constructor(
    private http: HttpClient,
    private dataPoolService: DataPoolService
  ) {
  }

  /**
   * onHttpClick
   */
  public onHttpClick(): void {
    this.responseData = '';

    this.isProcessing = true;
    this.dataPoolService.getNumbers()
      .subscribe(response => {
        this.responseData = JSON.stringify(response);
        this.isProcessing = false;
      });
  }

  /**
   * onMultipleHttpClick
   */
  public onMultipleHttpClick(): void {
    this.responseData = '';

    this.isProcessing = true;
    forkJoin([
      this.dataPoolService.getNumbers(),
      this.dataPoolService.getStrings(),
    ])
      .subscribe(response => {
        this.responseData = JSON.stringify(response);
        this.isProcessing = false;
      });
  }

}
