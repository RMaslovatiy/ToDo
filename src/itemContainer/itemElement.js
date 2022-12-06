import { toggleIsDone } from '../redux/reducers/lists/asyncThunks';
import { useDispatch } from 'react-redux';


const ItemElement = ({ item, list }) => {
  const dispatch = useDispatch();

  const changeIsDone = () => {
    const data = {
      list,
      item
    }
    dispatch(toggleIsDone(data))
  }
  return (
    <div
      className={item.isDone ? 'itemDone' : 'item'}
      onClick={() => changeIsDone()}
      key={item.id}
    >
      {item.name}
    </div>
  )
}
export default ItemElement



