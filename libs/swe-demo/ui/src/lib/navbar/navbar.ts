//navbar.ts
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavItem } from "@swe-demo/shared-domain";


@Component({
  selector: "lib-navbar",
  imports: [RouterModule],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  @Input() items: NavItem[] = [];
  @Input() showUser = false;
  @Output() navigate = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();
}
