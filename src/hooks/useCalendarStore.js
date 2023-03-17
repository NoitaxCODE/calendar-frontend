import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import calendarApi from "../api/calendarApi";
import { convertEventsToDateEvents } from "../helpers";
import { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent, onCloseEventSelected, onLoadEvents } from "../store";

export const useCalendarStore = () => {

  const dispatch = useDispatch();
  const { events, activeEvents, eventSelected } = useSelector( state=> state.calendar );
  const { user } = useSelector( state => state.auth );

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  const startSavingEvent = async ( calendarEvent )=>{
    try {

      if(calendarEvent.id){
        // Actualizando
        await calendarApi.put(`/events/${ calendarEvent.id }`, calendarEvent);
        dispatch( onUpdateEvent({ ...calendarEvent, user }));
        return;
      }
      // Creando
      const { data } = await calendarApi.post('/events', calendarEvent );
      dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id, user }) );
      
    } catch (error) {
      console.log(error)
      Swal.fire('Error al guardar', error.response.data.msg, 'error');
    }
    
  }

  const startDeletingEvent = ()=> {
    //TODO: Llegar al backend
    dispatch(  onDeleteEvent() )
  }

  const closeEventSelected = ()=>{
    dispatch( onCloseEventSelected() )
  }

  const startLoadingEvents = async ()=> {
    try {

      const { data } = await calendarApi.get('/events')
      const events = convertEventsToDateEvents( data.eventos );
      dispatch( onLoadEvents( events ) );

    } catch ( error ) {
      console.log('Error al cargar los eventos')
      console.log( error )
    }
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
    closeEventSelected,
    startLoadingEvents
  }
}
