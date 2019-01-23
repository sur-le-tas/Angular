import { Injectable } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment as env } from 'env'

@Injectable()
export class ServerBaseUrlInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const apiReq = req.clone({ url: `${env.serverURL}/${req.url}` })

		return next.handle(apiReq)
	}
}
