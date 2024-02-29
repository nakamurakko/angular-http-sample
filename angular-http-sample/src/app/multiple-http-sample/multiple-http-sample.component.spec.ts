import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleHttpSampleComponent } from './multiple-http-sample.component';

describe('MultipleHttpSampleComponent', () => {
  let component: MultipleHttpSampleComponent;
  let fixture: ComponentFixture<MultipleHttpSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleHttpSampleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MultipleHttpSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
