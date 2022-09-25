import { withStorageListener } from './WithStorageListener';
import './ChangeAlert.css'


function ChangeAlert({ show, toggleShow}) {
  if( show ) {
    return (
      <div className='Change-bg'>
        <div className='Change-container'>
          <p>Ups! Parece que hubo cambios en otra ventana</p>
          <p>Desea recargar la pagina?</p>
          <button
            className='Change-btn'
            onClick={() => toggleShow(false)}
          >
            Recargar
          </button>
        </div>
      </div>  
    )
  } else {
    return null
  }
}

const ChangeAlertStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertStorageListener }
