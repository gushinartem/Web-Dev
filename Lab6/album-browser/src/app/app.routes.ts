import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header-component/header-component';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about-component/about-component';
import { AlbumsComponent } from './components/albums-component/albums-component';
import { AlbumsDetailComponent } from './components/albums-detail-component/albums-detail-component';
import { AlbumsPhotosComponent } from './components/albums-photos-component/albums-photos-component';

export const routes: Routes = [
    {
        path:"home", component: HomeComponent
    },
    {
        path:"" , redirectTo:"home", pathMatch:'full'
    },
    {
        path:"about" , component: AboutComponent
    },
    {
        path:"albums" , component: AlbumsComponent
    },
    {
        path:"albums/:id" , component: AlbumsDetailComponent
    },
    {
        path:"albums/:id/photos" , component: AlbumsPhotosComponent
    }
];
