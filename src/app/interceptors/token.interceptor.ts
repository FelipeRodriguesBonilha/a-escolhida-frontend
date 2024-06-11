import { HttpHandlerFn, HttpRequest } from '@angular/common/http';

export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
    const authToken = localStorage.getItem('accessToken');

    if (!authToken) {
        return next(req);
    }

    const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)
    });

    return next(authReq);
}
