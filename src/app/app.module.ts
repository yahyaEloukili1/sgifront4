import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DistritsComponent } from './components/distrits/distrits.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AddDistrictComponent } from './components/add-district/add-district.component';
import { EditDistrictComponent } from './components/edit-district/edit-district.component';
import { AnnexesComponent } from './components/annexes/annexes.component';
import { EditAnnexeComponent } from './components/edit-annexe/edit-annexe.component';
import { AddAnnexeComponent } from './components/add-annexe/add-annexe.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategorieComponent } from './components/add-categorie/add-categorie.component';
import { EditCategorieComponent } from './components/edit-categorie/edit-categorie.component';
import { BenificiaresComponent } from './components/benificiares/benificiares.component';
import { AddBenificiareComponent } from './components/add-benificiare/add-benificiare.component';
import { EditBenificiareComponent } from './components/edit-benificiare/edit-benificiare.component';
import { DoublonsComponent } from './components/doublons/doublons.component';
import { Benificiares2Component } from './components/benificiares2/benificiares2.component';
import { Doublons2Component } from './components/doublons2/doublons2.component';
import { FichesComponent } from './components/fiches/fiches.component';
import { AddFicheComponent } from './components/add-fiche/add-fiche.component';
import { EditFicheComponent } from './components/edit-fiche/edit-fiche.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DistritsComponent,
    AddDistrictComponent,
    EditDistrictComponent,
    AnnexesComponent,
    EditAnnexeComponent,
    AddAnnexeComponent,
    CategoriesComponent,
    AddCategorieComponent,
    EditCategorieComponent,
    BenificiaresComponent,
    AddBenificiareComponent,
    EditBenificiareComponent,
    DoublonsComponent,
    Benificiares2Component,
    Doublons2Component,
    FichesComponent,
    AddFicheComponent,
    EditFicheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard,{
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
