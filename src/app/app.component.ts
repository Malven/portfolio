import { Component } from '@angular/core';
import { exportedRoutes } from './app-routing.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    routes = exportedRoutes.slice(0, exportedRoutes.length - 1);
}
