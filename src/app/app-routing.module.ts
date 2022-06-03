import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AnimeComponent } from './anime/anime.component';
import { AnimesListComponent } from './user/animes-list/animes-list.component';
import { StatisticsComponent } from './user/statistics/statistics.component';
import { BannedComponent } from './user/banned/banned.component';
import { RpgdComponent } from './RGPD/rgpd.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Subarashii - Bienvenue !',
        },
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Subarashii - Login',
            keywords: 'Subarashii, anime, connecter, login',
        },
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Subarashii - Register',
            keywords: 'Subarashii, anime, inscrire, register',
        },
    },
    { path: 'anime/:id', component: AnimeComponent, canActivate: [AuthGuard] },
    {
        path: 'animes-list',
        component: AnimesListComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Animes',
            description: "Mes listes d'animés",
            keywords: 'anime,list,liste',
        },
    },
    {
        path: 'rgpd',
        component: RpgdComponent,
        data: {
            title: 'RGPD',
            description: 'RGPD',
            keywords: 'RGPD',
        },
    },
    {
        path: 'statistics',
        component: StatisticsComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Subarashii - Statistiques',
        },
    },
    {
        path: 'banned',
        component: BannedComponent,
        data: {
            title: 'Subarashii - Ban',
        },
    },
    {
        path: 'users/callback',
        component: ResetPasswordComponent,
    },
    {
        path: 'administration',
        component: AdministrationComponent,
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
