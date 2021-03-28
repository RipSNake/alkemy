/**
*	Lo vamos a utilizar para declarar una interfaz de typescript que es basicamente una descripción
*	de todos los datos que contiene un objeto
*/

export interface Operation {
	id?: number,
	user_id?: number,
	concept: string,
	amount: number,
	type: string,
	modified?: string,
	created_at?: string
}