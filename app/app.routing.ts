import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { JokesComponent } from './components/jokes.component'
import { AboutComponent } from './components/about.component'

const appRoutes : Routes = [
  {
    path: 'jokes',
    component : JokesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routingModule : ModuleWithProviders = RouterModule.forRoot(appRoutes);