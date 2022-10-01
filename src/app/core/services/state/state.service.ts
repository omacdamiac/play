// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// // import { BehaviorSubject } from 'rxjs';

// export interface State {
//   fruta1: { item: number, value: string } | undefined;
//   fruta2: { item: number, value: string } | undefined;
//   fruta3: { item: number, value: string } | undefined;
//   fruta4: { item: number, value: string } | undefined;
//   fruta5: { item: number, value: string } | undefined;
//   animales1: { item: number, value: string } | undefined;
//   animales2: { item: number, value: string } | undefined;
//   animales3: { item: number, value: string } | undefined;
//   animales4: { item: number, value: string } | undefined;
//   animales5: { item: number, value: string } | undefined;
//   transporte1: { item: number, value: string } | undefined;
//   transporte2: { item: number, value: string } | undefined;
//   transporte3: { item: number, value: string } | undefined;
//   transporte4: { item: number, value: string } | undefined;
//   transporte5: { item: number, value: string } | undefined;
//   numero1: { item: number, value: string } | undefined;
//   numero2: { item: number, value: string } | undefined;
//   numero3: { item: number, value: string } | undefined;
//   numero4: { item: number, value: string } | undefined;
//   numero5: { item: number, value: string } | undefined;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class StateManagerService {
//   state: State = {
//     fruta1: undefined,
//     fruta2: undefined,
//     fruta3: undefined,
//     fruta4: undefined,
//     fruta5: undefined,
//     animales1: undefined,
//     animales2: undefined,
//     animales3: undefined,
//     animales4: undefined,
//     animales5: undefined,
//     transporte1: undefined,
//     transporte2: undefined,
//     transporte3: undefined,
//     transporte4: undefined,
//     transporte5: undefined,
//     numero1: undefined,
//     numero2: undefined,
//     numero3: undefined,
//     numero4: undefined,
//     numero5: undefined,
//   };

//   private stateDataSubject = new BehaviorSubject<State>(undefined);
//   stateData$ = this.stateDataSubject.asObservable();

//   setState(data: any) {
//     this.state = Object.assign({ ...this.state, ...data });
//     this.stateDataSubject.next(this.state);
//   }

//   getState() {
//     return this.stateDataSubject.getValue();
//   }

//   clearState() {
//     this.stateDataSubject.next(null);
//   }

//   // Tipo de plan de servicio (1(Hogar), 2(Duo), (3)Movil)
//   private typeServicePlan = new BehaviorSubject<number>(undefined);
//   stateServicePlan$ = this.typeServicePlan.asObservable();

//   setServicePlan(type: number) {
//     this.typeServicePlan.next(type);
//   }

//   getServicePlan() {
//     return this.typeServicePlan.getValue();
//   }

//   // Tipo movile (postpago - prepago)
//   private typeMovil = new BehaviorSubject<string>(undefined);
//   stateTypeMovil$ = this.typeMovil.asObservable();

//   setStateTypeMovil(type: any) {
//     this.typeMovil.next(type);
//   }
// }
