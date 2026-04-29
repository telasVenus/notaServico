// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '$env/static/private' {
	export const GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
	export const GOOGLE_PRIVATE_KEY: string;
	export const GOOGLE_SHEETS_ID: string;
}

export {};
