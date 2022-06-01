import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'hero', pathMatch: 'full' },
  {
    path: '',
    // component: AppComponent,
    children: [
        {
            path: 'hero',
            loadChildren: () => import('./component/test1/test1.module').then(m => m.Test1Module)
        },
        {
            path: "test2",
            loadChildren: () => import('./component/test2/test2.module').then(m => m.Test2Module)
        },
        {
            path: "test3",
            loadChildren: () => import('./component/test3/test3.module').then(m => m.Test3Module)
        },
        {
            path: "test4",
            loadChildren: () => import('./component/test4/test4.module').then(m => m.Test4Module)
        },
        {
            path: "test5",
            loadChildren: () => import('./component/test5/test5.module').then(m => m.Test5Module)
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
