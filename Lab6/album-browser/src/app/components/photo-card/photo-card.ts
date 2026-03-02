import { Component } from '@angular/core';
import { input} from '@angular/core';
import { Photo } from '../../models/photo.model';
@Component({
  selector: 'app-photo-card',
  imports: [],
  templateUrl: './photo-card.html',
  styleUrl: './photo-card.css',
})
export class PhotoCard {
  photo = input<Photo>();
}
