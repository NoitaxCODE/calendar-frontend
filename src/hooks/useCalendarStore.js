import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onCloseEventSelected } from "../store";

export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvents, eventSelected } = useSelector( state=> state.calendar );

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  const startSavingEvent = async ( calendarEvent )=>{
    // TODO: Ir al backend

    // Si sale bien
    if(calendarEvent._id){
      // Actualizando
      dispatch( onUpdateEvent({ ...calendarEvent }))
    }else{
      // Creando
      dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
    }
  }

  const startDeletingEvent = ()=> {
    //TODO: Llegar al backend
    dispatch(  onDeleteEvent() )
  }

  const closeEventSelected = ()=>{
    dispatch( onCloseEventSelected() )
  }

  return {
    //Propiedades
    events, 
    activeEvents,
    eventSelected,

    //Metodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    closeEventSelected
  }
}
