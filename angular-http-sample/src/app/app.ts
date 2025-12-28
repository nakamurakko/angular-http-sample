import { forkJoin } from 'rxjs';

import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { DataPoolService } from './services/data-pool.service';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInput,
    MatProgressBarModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private dataPoolService = inject(DataPoolService);

  protected readonly title = signal<string>('angular-http-sample');


  public responseData = signal<string>('');
  public isProcessing = signal<boolean>(false);

  /**
   * onHttpClick
   */
  public onHttpClick(): void {
    this.responseData.set('');

    this.isProcessing.set(true);
    this.dataPoolService.getNumbers()
      .subscribe(response => {
        this.responseData.set(JSON.stringify(response));
        this.isProcessing.set(false);
      });
  }

  /**
   * onMultipleHttpClick
   */
  public onMultipleHttpClick(): void {
    this.responseData.set('');

    this.isProcessing.set(true);
    forkJoin([
      this.dataPoolService.getNumbers(),
      this.dataPoolService.getStrings(),
    ])
      .subscribe(response => {
        this.responseData.set(JSON.stringify(response));
        this.isProcessing.set(false);
      });
  }

}
