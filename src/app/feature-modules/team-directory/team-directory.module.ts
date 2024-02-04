import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TeamDirectoryComponent } from "./team-directory.component";
import { TeamDirectoryRoutingModule } from "./team-directory-routing.module";
import { DirectoriesComponent } from "./components/directories/directories.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { RippleOnHoverDirective } from "src/app/directives/ripple-on-hover.directive";
import { FilterPipe } from "src/app/pipes/filter.pipe";

@NgModule({
  declarations: [
    TeamDirectoryComponent,
    DirectoriesComponent,
    RippleOnHoverDirective,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    TeamDirectoryRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
  ],
})
export class TeamDirectoryModule {}
