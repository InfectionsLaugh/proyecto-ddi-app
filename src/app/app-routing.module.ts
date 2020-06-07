import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'topic',
    loadChildren: () => import('./topic/topic.module').then( m => m.TopicPageModule)
  },
  {
    path: 'topic/:id',
    loadChildren: () => import('./topic/topic.module').then( m => m.TopicPageModule)
  },
  {
    path: 'alarm/:id',
    loadChildren: () => import('./alarm/alarm.module').then( m => m.AlarmPageModule)
  },
  {
    path: 'tv/:id',
    loadChildren: () => import('./tv/tv.module').then( m => m.TvPageModule)
  },
  {
    path: 'doors/:id',
    loadChildren: () => import('./doors/doors.module').then( m => m.DoorsPageModule)
  },
  {
    path: 'lights/:id',
    loadChildren: () => import('./lights/lights.module').then( m => m.LightsPageModule)
  },
  {
    path: 'outside/:id',
    loadChildren: () => import('./outside/outside.module').then( m => m.OutsidePageModule)
  },
  {
    path: 'sensors/:id',
    loadChildren: () => import('./sensors/sensors.module').then( m => m.SensorsPageModule)
  },
  {
    path: 'tvs/:id',
    loadChildren: () => import('./tvs/tvs.module').then( m => m.TvsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
