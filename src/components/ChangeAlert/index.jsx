import { useStorageListener } from '../../hooks/useStorageListener';
import './ChangeAlert.css';

export function ChangeAlert({ synchronize }) {

  const [ show, toggleShow] = useStorageListener(synchronize)

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

// const ChangeAlertStorageListener = useStorageListener(ChangeAlert);

// export { ChangeAlertStorageListener }
