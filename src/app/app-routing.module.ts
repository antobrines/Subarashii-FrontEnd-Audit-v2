import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './services/auth.guard';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {AnimeComponent} from './anime/anime.component';
import {AnimesListComponent} from './user/animes-list/animes-list.component';
import { RpgdComponent } from './RGPD/rgpd.component';

const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent , data: {
        title: 'Surubarashii - Login',
        keywords: 'Surubarashii, anime, connecter, login'
    }},
    {path: 'register', component: RegisterComponent , data: {
        title: 'Surubarashii - Register',
        keywords: 'Surubarashii, anime, inscrire, register'

    }},
    {path: 'anime/:id', component: AnimeComponent, canActivate: [AuthGuard]},
    {path: 'animes-list', component: AnimesListComponent, canActivate: [AuthGuard] , data: {
        title: 'Animes',
        description: 'Mes listes d\'animés',
        keywords: 'anime,list,liste'
    }},
    {path: 'rgpd', component: RpgdComponent, data: {
        title: 'RGPD',
        description: 'RGPD',
        keywords: 'RGPD'
    }},
    {path: '**', redirectTo: ''},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
