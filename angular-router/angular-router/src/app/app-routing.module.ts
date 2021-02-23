import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CourseCardsComponent } from './courses/course-cards.component';
import { CoursesCategoryComponent } from './courses/courses-category.component';
import { CoursesComponent } from './courses/courses.component';
import { SideMenuComponent } from './courses/side-menu.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'courses',
      component: CoursesComponent,
      children: [
          {
            path: '',
            component: CourseCardsComponent
          },
          {
            path: ':id',
            component: CoursesCategoryComponent
            },
          {
            path: '',
            outlet: 'sidemenu',
            component: SideMenuComponent
            }
        ]
    },
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
