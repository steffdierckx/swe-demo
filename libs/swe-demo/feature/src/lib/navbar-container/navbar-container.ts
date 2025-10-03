//navbar-container.ts
import { Component, computed, inject } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { Navbar } from "@swe-demo/swe-demo-ui";

@Component({
  selector: "lib-swe-demo-feature-navbar-container",
  imports: [Navbar, RouterModule],
  templateUrl: "./navbar-container.html",
  styleUrl: "./navbar-container.css",
})
export class NavbarContainer {

  readonly items =[
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
