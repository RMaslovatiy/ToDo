

import { changeIsDoneRequest } from "../requests"



const ItemElement = ({ item, list }) => {
  return (
    <div
      className={item.isDone ? 'itemDone' : 'item'}
      onClick={(el) => changeIsDone(item, list, el)}
      key={item.id}
    >
      {item.name}
    </div>
  )
}

function changeIsDone(item, list, el) {
  el.target.className = el.target.className === 'item' ? 'itemDone' : 'item'
  changeIsDoneRequest(item, list);
}

export default ItemElement



