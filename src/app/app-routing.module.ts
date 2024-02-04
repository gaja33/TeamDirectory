import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "team-directory", pathMatch: "full" },
  {
    path: "team-directory",
    loadChildren: () =>
      import(
        "../app/feature-modules/team-directory/team-directory.module"
      ).then((m) => m.TeamDirectoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
