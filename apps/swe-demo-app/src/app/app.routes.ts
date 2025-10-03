import { Route } from '@angular/router';
import { Home } from '@swe-demo/swe-demo-feature';

export const appRoutes: Route[] = [
    { path: "home", component: Home },
    { path: "products", component: Home },
    { path: "account", component: Home },
];
