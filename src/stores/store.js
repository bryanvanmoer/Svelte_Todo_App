import { persistStore } from "./persistStore";

let uid = () => `_${Math.random().toString(35).substr(2, 9)}`;

const defaultProjects = [
  {
    id: uid(),
    title: "Todo",
    todos: [],
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uid(),
    title: "Todo",
    todos: [],
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: uid(),
    title: "Todo",
    todos: [
      {
        id: 1,
        title: "Faire ci",
        complete: false,
      },
      {
        id: 2,
        title: "Faire ca",
        complete: true,
      },
    ],
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

function getNewProject(param) {
  return {
    id: uid(),
    title: param,
    todos: [],
    description:"...",
  };
}

export const store = persistStore("store", defaultProjects);

export function addProject(param) {
  // If the text is empty
  if (param == "") {
    return;
  }
  store.update((prev) => [getNewProject(param), ...prev]);
}
export function deleteProject(id) {
  store.update((projects) => projects.filter((project) => project.id !== id));
}

export function update(id, newTitle) {
  store.update((prev) =>
    prev.map((project) =>
      project.id === id ? { ...project, title: newTitle } : { ...project }
    )
  );
}
