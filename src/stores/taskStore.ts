
import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'
import { localStorageStore } from '@skeletonlabs/skeleton'
import { get } from 'svelte/store'
export const curr_user_id = writable('')
export const convo_id = writable('')
export const first_time = writable(true);
export type Task = {
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
			task_name: 'Water Intake',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Health"
		} as Task,
		{
			task_name: 'Food Intake',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Health"
		} as Task,
		{
			task_name: 'Exersize',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Health"
		} as Task,
		{
			task_name: 'Meditation',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Mindfulness"
		} as Task,
		{
			task_name: 'Reflection',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Mindfulness"

		} as Task,
		{
			task_name: 'Socailizing',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Mindfulness"
		} as Task,
		{
			task_name: 'Letures',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Academics"
		} as Task,
		{
			task_name: 'Study/Homework',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Academics"
		} as Task,

		{
			task_name: 'Leetcode',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Academics"
		} as Task,


		{
			task_name: 'Laundry',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Chores"
		} as Task,

		{
			task_name: 'Cleaning',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Chores"
		} as Task,

		{
			task_name: 'Trash Disposal',
			enabled: false,
			last_updated: '',
			success: 0,
			occurences: 0,
			completedToday:false,
			group:"Chores"
		} as Task



	]
)

export const add_task = (newTask: Task) => {
	let old_tasks = [...get(tasks)]
	old_tasks.unshift(newTask);
	tasks.set(old_tasks);
}

export const edit_task = (idx: number, editedTask: Task) => {
	let old_tasks = [...get(tasks)]

	old_tasks.splice(idx, 1)

	let new_arr = [
		...old_tasks.slice(0, idx),
		editedTask,
		...old_tasks.slice(idx)
	]



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

