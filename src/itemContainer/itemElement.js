import { toggleIsDone } from "../redux/reducers/lists/listsReducer"
import { useDispatch } from 'react-redux';


const ItemElement = ({ item, list }) => {
  const dispatch = useDispatch();

  const changeIsDone = () => {
    const target = {
      list: list,
      item: item,
    }
    dispatch(toggleIsDone(target))
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



