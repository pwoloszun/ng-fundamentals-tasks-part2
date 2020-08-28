import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { PageNotFoundComponent } from './layout/components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },

  {
    path: 'forms-tasks',
    loadChildren: () => import('./features/11-forms-tasks/forms-tasks.module').then((m) => m.FormsTasksModule),
  },
  {
    path: 'di-providers-examples',
    loadChildren: () =>
      import('./features/14-di-providers-examples/di-providers-examples.module').then(
        (m) => m.DiProvidersExamplesModule
      ),
  },
  {
    path: 'content-projection',
    loadChildren: () =>
      import('./features/21-content-projection/content-projection.module').then((m) => m.ContentProjectionModule),
  },
  {
    path: 'refs-to-template-elements',
    loadChildren: () =>
      import('./features/22-refs-to-template-elements/refs-to-template-elements.module').then((m) => m.RefsToTemplateElementsModule),
  },

  // TODO
  {
    path: 'rxjs-gui-tasks',
    loadChildren: () => import('./features/39-rxjs-gui-tasks/rxjs-gui-tasks.module').then((m) => m.RxjsGuiTasksModule),
  },
  {
    path: 'rxjs-github-repos',
    loadChildren: () =>
      import('./features/51-rxjs-github-repos/rxjs-github-repos.module').then((m) => m.RxjsGithubReposModule),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
