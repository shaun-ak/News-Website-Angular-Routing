import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { ElementsComponent } from './elements/elements.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
},
{
    path: 'category',
    component: CategoryComponent
},
{
    path: 'about',
    component: AboutComponent
},
{
    path: 'latestNews',
    component: LatestNewsComponent
},
{
    path: 'contact',
    component: ContactComponent
},
{
    path: 'elements',
    component: ElementsComponent
},  
{
    path: 'blog',
    component: BlogComponent
},
{
    path: 'blogDetails',
    component: BlogDetailsComponent
},
{
    path: 'details',
    component: DetailsComponent
},
{
    path: '**', 
    pathMatch: 'full', 
    component: PageNotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
