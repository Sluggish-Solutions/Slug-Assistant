
import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'
import { localStorageStore } from '@skeletonlabs/skeleton'
import { get } from 'svelte/store'
export const curr_user_id = writable('')
export const convo_id = writable('')
export const first_time = writable(true);
export type Task = {
	task_name: String,
	enabled: boolean,
	last_updated: string,
	success: number,
	occurences: number
}
export const tasks: Writable<Array<Task>> = localStorageStore(
	'tasks',
	[
		{
		task_name: 'Brush Teeth',
		enabled: true,
		last_updated: '2021-10-10',
		success: 3,
		occurences: 10,
		} as Task


	]
)

export const add_task = (newTask: Task) =>{
let old_tasks = [...get(tasks)]
	old_tasks.unshift(newTask);
	tasks.set(old_tasks);
}

export const edit_task = (idx: number, editedTask: Task) =>{
	let old_tasks = [...get(tasks)]
	let first_half =  old_tasks.slice(idx)
	let second_half =  old_tasks.slice(idx+1, old_tasks.length)
	let new_arr = [...first_half, editedTask, ...second_half]

	tasks.set(new_arr);

}

export const delete_task = (idx: number) => {

	let old_tasks = [...get(tasks)]
if (idx > -1) { // only splice array when item is found
  old_tasks.splice(idx, 1); // 2nd parameter means remove one item only
}
	tasks.set(old_tasks);
}

export const getTasks = () => {
	return get(tasks)
}

