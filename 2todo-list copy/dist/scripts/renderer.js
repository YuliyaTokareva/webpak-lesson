import "core-js/modules/es.array.sort.js";
import "core-js/modules/web.dom-collections.iterator.js";
//import { createCheckboxElem } from './checkbox.js';
import { getItem } from './storage.js';
const listElem = document.querySelector('.list');
export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort((a, b) => a.done - b.done).map(_ref => {
    let {
      text,
      done,
      id
    } = _ref;
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    listItemElem.setAttribute('data-id', "".concat(id));
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = done;
    checkbox.classList.add('list__item-checkbox');

    if (done) {
      listItemElem.classList.add('list__item_done');
    }

    const textElem = document.createElement('span');
    textElem.classList.add('list__item-text');
    textElem.textContent = text;
    const deleteBtnElem = document.createElement('button');
    deleteBtnElem.classList.add('list__item-delete-btn');
    listItemElem.append(checkbox, textElem, deleteBtnElem);
    return listItemElem;
  });
  listElem.append(...tasksElems);
};