
import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'
import { localStorageStore } from '@skeletonlabs/skeleton'
import { get } from 'svelte/store'
export const curr_user_id = writable('')
export const convo_id = writable('')
export const first_time = writable(true);
export type Task = {
	id: number,
	task_name: string,
	enabled: boolean,
	last_updated: string,
	success: number,
	occurences: number
}

export const tasks: Writable<Array<Task>> = localStorageStore(
	'tasks',
	[
		{
		id: 12,
		task_name: 'Brush Teeth',
		enabled: true,
		last_updated: '2021-10-10',
		success: 3,
		occurences: 10,
		} as Task
	]
)

export const add_task = (newTask: Task) =>{
	tasks.update((tasks) => {
		const newTasks = [...tasks, newTask]
		localStorage.setItem('tasks', JSON.stringify(newTasks))
		return newTasks
	})
}

// export const edit_task = (id: number, editedTask: Task) =>{
// 	let old_tasks = [...get(tasks)]
// 	let first_half =  old_tasks.slice(id)
// 	let second_half =  old_tasks.slice(id+1, old_tasks.length)
// 	let new_arr = [...first_half, editedTask, ...second_half]
// 	localStorage.setItem('tasks', JSON.stringify(new_arr));
// 	tasks.set(new_arr);
// }

export const delete_task = (id: number) => {
	tasks.update((tasks) => {
		const newTasks = tasks.filter((task) => task.id !== id)
		localStorage.setItem('tasks', JSON.stringify(newTasks))
		return newTasks
	})
}

export const toggle_task = (id: number) => {
	tasks.update((tasks) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, enabled: !task.enabled}
			}
			return task
		})
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))
		return updatedTasks
	})
}