import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLineComponent } from './watch-line.component';

describe('WatchLineComponent', () => {
  let component: WatchLineComponent;
  let fixture: ComponentFixture<WatchLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
