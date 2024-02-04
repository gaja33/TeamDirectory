import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeamDirectoryComponent } from "./team-directory.component";
import { DirectoriesComponent } from "./components/directories/directories.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: DirectoriesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamDirectoryRoutingModule {}
