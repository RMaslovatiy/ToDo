const apiRoot = "https://todolist-ruslan.azurewebsites.net";

export function addListRequest(data) {
  if (!data) {
    throw Error("Data is missing");
  }

  //Send json request
  return fetch(`${apiRoot}/TodoList`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json()); // convert response to json
}

export function editListRequest(id, data) {
  return fetch(`${apiRoot}/TodoList/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export function deleteListRequest(id) {
  return fetch(`${apiRoot}/TodoList/${id}`, {
    method: "DELETE",
  });
}

export function changeIsDoneRequest(item, list) {

  let targetItem = {}
  targetItem.isDone = item.isDone ? false : true;

  return fetch(`${apiRoot}/TodoList/${list.id}/item/${item.id}/status`, {
    method: "PATCH",
    body: JSON.stringify(targetItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());;
}

export function deleteItemRequest(listId, itemId) {
  return fetch(`${apiRoot}/TodoList/${listId}/item/${itemId}`, {
    method: "DELETE",
  });
}

// Add item request
export function addItemRequest(data, id) {
  return fetch(`${apiRoot}/TodoList/${id}/item`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
}

export async function getLists() {
  const response = await fetch(`${apiRoot}/TodoList`);
  return response.json();
}
