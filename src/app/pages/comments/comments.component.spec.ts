import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponents} from './comments.component';

describe('CommentsComponent', () => {
  let component: CommentsComponents;
  let fixture: ComponentFixture<CommentsComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
