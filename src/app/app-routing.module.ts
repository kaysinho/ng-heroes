import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
