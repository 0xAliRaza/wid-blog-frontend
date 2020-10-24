import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavItemComponent } from './top-nav-item.component';

describe('TopNavItemComponent', () => {
  let component: TopNavItemComponent;
  let fixture: ComponentFixture<TopNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
