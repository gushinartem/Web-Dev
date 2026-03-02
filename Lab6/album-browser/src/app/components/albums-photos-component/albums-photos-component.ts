import { Component,inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album-service';
import { Photo } from '../../models/photo.model';
import { CommonModule } from '@angular/common';
import { PhotoCard } from '../photo-card/photo-card';
@Component({
  selector: 'app-albums-photos-compoenent',
  imports: [RouterLink, CommonModule, PhotoCard],
  templateUrl: './albums-photos-component.html',
  styleUrl: './albums-photos-component.css',
})
export class AlbumsPhotosComponent {
  hovered: number | null = null;
  albServe = inject(AlbumService);
  route = inject(ActivatedRoute);
  albumId= Number(this.route.snapshot.paramMap.get('id'));
  photos = this.albServe.getAlbumPhoto(this.albumId);
  trackById(index: number, photo: Photo): number {
      return photo.id;
    }
}
