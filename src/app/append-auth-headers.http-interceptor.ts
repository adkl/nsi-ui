import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { repeat } from "rxjs/operators";

@Injectable()
export class AppendAuthHeadersHttpInterceptor implements HttpInterceptor {

	constructor() { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		let token = sessionStorage.getItem('id_token');
		if (token) {
			req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
		}

		return next.handle(req);
	}
}
