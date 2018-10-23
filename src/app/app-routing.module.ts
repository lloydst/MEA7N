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
        //component: AppComponent,
        loadChildren: './lazy/lazy.module#LazyModule',
    },
    {
        path: 'active',
        //component: AppComponent,
        children: [
            { path: '', component:ActiveComponent}]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
