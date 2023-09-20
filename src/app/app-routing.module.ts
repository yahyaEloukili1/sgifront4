import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistritsComponent } from './components/distrits/distrits.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AddDistrictComponent } from './components/add-district/add-district.component';
import { EditDistrictComponent } from './components/edit-district/edit-district.component';
import { AnnexesComponent } from './components/annexes/annexes.component';
import { AddAnnexeComponent } from './components/add-annexe/add-annexe.component';
import { EditAnnexeComponent } from './components/edit-annexe/edit-annexe.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BenificiaresComponent } from './components/benificiares/benificiares.component';
import { DoublonsComponent } from './components/doublons/doublons.component';
import { Doublons2Component } from './components/doublons2/doublons2.component';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';
import { AddBenificiareComponent } from './components/add-benificiare/add-benificiare.component';
import { EditCategorieComponent } from './components/edit-categorie/edit-categorie.component';
import { EditBenificiareComponent } from './components/edit-benificiare/edit-benificiare.component';
import { Benificiares2Component } from './components/benificiares2/benificiares2.component';
import { FichesComponent } from './components/fiches/fiches.component';
import { AddFicheComponent } from './components/add-fiche/add-fiche.component';
import { EditFicheComponent } from './components/edit-fiche/edit-fiche.component';
const routes: Routes = [
  {path: "iftar/login",component: LoginComponent},
  {path: "iftar/districts",component: DistritsComponent,canActivate: [AuthGuard]},
  {path: "iftar/categories",component: CategoriesComponent,canActivate: [AuthGuard]},
  {path: "iftar/fiches",component: FichesComponent,canActivate: [AuthGuard]},
  {path: "iftar/benificiaires",component: BenificiaresComponent,canActivate: [AuthGuard]},
  {path: "iftar/benificiaires2",component: Benificiares2Component,canActivate: [AuthGuard]},
  {path: "iftar/doublons",component: DoublonsComponent,canActivate: [AuthGuard]},
  {path: "iftar/doublons2",component: Doublons2Component,canActivate: [AuthGuard]},
  {path: "iftar/annexes",component: AnnexesComponent,canActivate: [AuthGuard]},
  {path: "iftar/addDistict",component: AddDistrictComponent,canActivate: [AuthGuard]},
  {path: "iftar/addCategorie",component: AddCategorieComponent,canActivate: [AuthGuard]},
  {path: "iftar/addFiche",component: AddFicheComponent,canActivate: [AuthGuard]},
  {path: "iftar/addBenificiare",component: AddBenificiareComponent,canActivate: [AuthGuard]},
  {path: "iftar/addAnnexe",component: AddAnnexeComponent,canActivate: [AuthGuard]},
  {path: "iftar/editAnnexe/:id",component: EditAnnexeComponent,canActivate: [AuthGuard]},
  {path: "iftar/editCategorie/:id",component: EditCategorieComponent,canActivate: [AuthGuard]},
  {path: "iftar/editBenificiaire/:id",component: EditBenificiareComponent,canActivate: [AuthGuard]},
  {path: "iftar/editDistrict/:id",component: EditDistrictComponent,canActivate: [AuthGuard]},
  {path: "iftar/editFiche/:id",component: EditFicheComponent,canActivate: [AuthGuard]},
 
{path: "iftar", redirectTo : "iftar/districts", pathMatch: 'full'},
{path: "", redirectTo : "iftar/districts", pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
