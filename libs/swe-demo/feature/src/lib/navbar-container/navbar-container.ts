//navbar-container.ts
import { Component} from "@angular/core";
import { RouterModule } from "@angular/router";
import { Navbar } from "@swe-demo/swe-demo-ui";
import { NavItem } from "@swe-demo/shared-domain";

@Component({
  selector: "lib-swe-demo-feature-navbar-container",
  imports: [Navbar, RouterModule],
  templateUrl: "./navbar-container.html",
  styleUrl: "./navbar-container.css",
})
export class NavbarContainer {

  readonly items: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Account", path: "/account" },
  ];

  onLogout() {
    console.log("TODO: logging out logic");
  }

  onNavigate(path: string) {
    console.log("navigating to", path);
  }

}
