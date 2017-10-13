import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyTileComponent } from './property-tile.component';

describe('PropertyTileComponent', () => {
  let component: PropertyTileComponent;
  let fixture: ComponentFixture<PropertyTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
