import { Component, OnInit } from '@angular/core';
import { exportedRoutes } from '../app-routing.module';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    routes = exportedRoutes.slice(0, exportedRoutes.length - 1);

    constructor() { }

    ngOnInit() {
    }

}
