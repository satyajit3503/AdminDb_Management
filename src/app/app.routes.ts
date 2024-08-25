import { Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginComponent } from './login/login.component';
import { BranchPageComponent } from './branch-page/branch-page.component';

export const routes: Routes = [

    { path: 'admin', component:AdminHomeComponent  },
    { path: '', component:LoginComponent  },
    { path: 'branch', component:BranchPageComponent  },
];

