import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateComponent } from "./create.component";
import { AuthGuard } from "@app/admin/_helpers";
import { RouterModule, Routes } from "@angular/router";
import CreatePostService from "@admin/posts/create-post/create-post.service";
import { EditorComponent } from "./editor/editor.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { EditorModule } from "@tinymce/tinymce-angular";
import { SharedModule } from "@app/shared-module";
import { PostsService } from "@app/admin/_services";

const routes: Routes = [
  {
    path: "admin/editor/post",
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/editor/post/:id",
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [EditorComponent, CreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    SharedModule,
  ],
  providers: [CreatePostService],
})
export class CreatePostModule {}
