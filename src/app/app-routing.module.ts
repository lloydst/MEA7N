import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { ActiveComponent } from './active/active.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'lazy',
        loadChildren: './lazy/lazy.module#LazyModule',
    },
    {
        path: 'active',
        children: [
            { path: '', component:ActiveComponent}]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
