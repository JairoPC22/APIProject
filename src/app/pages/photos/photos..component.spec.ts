import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponents} from './photos..component';

describe('CommentsComponent', () => {
  let component: PhotosComponents;
  let fixture: ComponentFixture<PhotosComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
