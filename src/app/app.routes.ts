import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { MeteoComponent } from './meteo/meteo.component';

export const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent,
  },
  {
    path: ':location',
    component: MeteoComponent,
  },
];
