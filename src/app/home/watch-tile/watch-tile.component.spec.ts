import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchTileComponent } from './watch-tile.component';

describe('WatchTileComponent', () => {
  let component: WatchTileComponent;
  let fixture: ComponentFixture<WatchTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
