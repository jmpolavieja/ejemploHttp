import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPostComponent } from './item-post.component';

describe('ItemPostComponent', () => {
  let component: ItemPostComponent;
  let fixture: ComponentFixture<ItemPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
