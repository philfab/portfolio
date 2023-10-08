
import { useDispatch, useSelector } from 'react-redux';
import { setActiveButton } from '../../features/contentSlice';
import styles from './TextEffect.module.css';

const TextEffect = ({ label , id}) => {
  const dispatch = useDispatch();
  const activeButton = useSelector(state => state.content.activeButton);

  const isActive = activeButton === id;

  const handleClick = () => {
    dispatch(setActiveButton(id));
  };

  return (
    <button 
      className={`${isActive ? styles.active : styles.notActive} ${styles.button}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default TextEffect;

