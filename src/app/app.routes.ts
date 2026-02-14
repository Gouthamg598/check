import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Login } from './login/login';
import { About } from './About/About';
import { Home } from './home/home';
import { MailVerification } from './mail-verification/mail-verification';
import { Donation } from './donation/donation';
import { TreeStatus } from './tree-status/tree-status';
import { RegisterToCutTree } from './register-to-cut-tree/register-to-cut-tree';
import { RegisterToPlantation } from './register-to-plantation/register-to-plantation';

export const routes: Routes = [
    { path: '', component: About },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'Home', component: Home },
    { path: 'verification', component: MailVerification },
    { path: 'donation', component: Donation },
    { path: 'tree-status', component: TreeStatus },
    { path: 'register-to-cut-tree', component: RegisterToCutTree },
    { path: 'register-to-plantation', component: RegisterToPlantation }


];
