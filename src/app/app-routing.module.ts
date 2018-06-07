import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
	{
		path : '',
		component: IndexComponent 
	},
	{ 
	    path: 'profile',
	    component: ProfileComponent,
	    canActivate: [AuthGuard] 
  	},
  	{
  		path : '*',
  		redirectTo: ''
  	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
