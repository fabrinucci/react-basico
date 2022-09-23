import { AiOutlineCloseCircle, AiOutlineCheckCircle } from 'react-icons/ai';
import './TodoIcon.css';

const iconTypes = {
  'check': color => (
    <AiOutlineCheckCircle className='Icon-svg Icon-svg--check'  fill={ color }/>
  ),
  'delete': color => (
    <AiOutlineCloseCircle className='Icon-svg Icon-svg--delete' fill={ color }/>
  ) 
}

export function TodoIcon({ type, color = '#afafaf', onClick }) {
  
  return (
    <span 
      className={`Icon-container Icon-container--${type}`}
      onClick={ onClick }
    >
      { iconTypes[type](color) }
    </span>
  )
}