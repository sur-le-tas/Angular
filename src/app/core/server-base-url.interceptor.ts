import { Injectable, Provider } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment as env } from 'env'

@Injectable()
export class ServerBaseUrlInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const apiReq = req.clone({ url: `${env.serverURL}/${req.url}` })

		return next.handle(apiReq)
	}
}

export const ServerBaseUrlProvider: Provider = {
	provide: HTTP_INTERCEPTORS,
	useClass: ServerBaseUrlInterceptor,
	multi: true,
	// 'multi:true' signale qu'il s'agit d'un multiprovider, et ajoute le service à un tableau de providers existants.
}
