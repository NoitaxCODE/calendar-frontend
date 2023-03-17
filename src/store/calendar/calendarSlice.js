import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';

// const tempEvent = {
//   id: new Date().getTime(),
//   title: 'Cumpleaños del jefe',
//   notes: 'Hay que comprar el pastel',
//   start: new Date(),
//   end: addHours( new Date(), 2),
//   bgColor: '#fafafa',
//   user: {
//     id: '123',
//     name: 'Fernando'
//   }
// };

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        events: [
          // tempEvent
        ],
        activeEvents: null,
        eventSelected: false,
    },
    reducers: {
        onSetActiveEvent: (state, { payload })=> {
          state.activeEvents = payload;
          state.eventSelected = true;
        },
        onCloseEventSelected: (state)=>{
          state.eventSelected = false;
        },
        onAddNewEvent: (state, { payload} )=> {
          state.events.push( payload );
          state.activeEvents = null;
          state.eventSelected = false;
        },
        onUpdateEvent: (state, { payload })=> {
          state.events = state.events.map( event => {
            if(event.id === payload.id){
              return payload;
            }
            return event;
          })
          state.eventSelected = false;
        },
        onDeleteEvent: (state) => {
          if ( state.activeEvents ){
            state.events = state.events.filter( event => event.id !== state.activeEvents.id );
            state.activeEvents = null;
            state.eventSelected = false;
          }
        },
        onLoadEvents: (state, { payload = [] }) => {
          state.isLoadingEvents = false;
          payload.forEach( event => {
            const exist = state.events.some( dbEvent => dbEvent.id === event.id )
            if ( !exist ) state.events.push( event)
          })
        },
        onLogoutCalendar: ( state ) => {
          state.isLoadingEvents = true,
          state.events = [],
          state.activeEvents = null
        }
    }
});


// Action creators are generated for each case reducer function
export const {  onSetActiveEvent, 
                onAddNewEvent, 
                onUpdateEvent, 
                onDeleteEvent, 
                onCloseEventSelected, 
                onLoadEvents,
                onLogoutCalendar
  } = calendarSlice.actions;