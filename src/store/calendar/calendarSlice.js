import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Fernando'
  }
};

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [
          tempEvent
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
            if(event._id === payload._id){
              return payload;
            }
            return event;
          })
          state.eventSelected = false;
        },
        onDeleteEvent: (state) => {
          if ( state.activeEvents ){
            state.events = state.events.filter( event => event._id !== state.activeEvents._id );
            state.activeEvents = null;
            state.eventSelected = false;
          }
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onCloseEventSelected} = calendarSlice.actions;