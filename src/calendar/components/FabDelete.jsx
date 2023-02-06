import { useCalendarStore, useUiStore } from "../../hooks"

export const FabDelete = () => {

  const { startDeletingEvent, eventSelected } = useCalendarStore();
  const { isDateModalOpen } = useUiStore();

  const handleDelete = ()=> {
    startDeletingEvent();
  }

  return (
    <button 
      className="btn btn-danger fab-danger"
      onClick={ handleDelete }
      style={{
        display: ( eventSelected && !isDateModalOpen ) ? '' : 'none'
      }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  )
}
