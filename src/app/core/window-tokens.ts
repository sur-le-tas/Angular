import { InjectionToken, inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser } from '@angular/common'

// https://angular.io/api/core/InjectionToken

export const WINDOW = new InjectionToken<Window | null>('WindowToken', {
	providedIn: 'root',
	factory: () => createWindow(inject(PLATFORM_ID)),
})

export function createWindow(platformId: object) {
	if (isPlatformBrowser(platformId)) return window
	return null
}

export const LOCALSTORAGE = new InjectionToken<Storage | null>('LocalstorageToken', {
	providedIn: 'root',
	factory: () => createLocalstorage(inject(PLATFORM_ID)),
})

export function createLocalstorage(platformId: object) {
	if (isPlatformBrowser(platformId)) return window.localStorage
	return null
}
