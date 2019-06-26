import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentsGridListComponent } from './pages/documents-grid/documents-grid-list/documents-grid-list.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Documents'
        },
        children: [
            {
                path: 'preview-documents',
                component: DocumentsGridListComponent,
                data: {
                    title: 'Preview documents'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentRepositoryRoutingModule { }
