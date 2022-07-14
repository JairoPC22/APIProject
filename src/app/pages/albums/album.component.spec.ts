import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumComponents} from './album.component';

describe('CommentsComponent', () => {
  let component: AlbumComponents;
  let fixture: ComponentFixture<AlbumComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
