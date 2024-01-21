import { Pi } from 'lucide-svelte'
import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'
// import { localStorageStore } from '@skeletonlabs/skeleton'
export const curr_user_id = writable('')
import { get } from 'svelte/store'
export const convo_id = writable('')
export const first_time = writable(true)

export type Task = {
	id: number
	task_name: string
	enabled: boolean
	completed_today: boolean
	group: string
	last_updated: string
	success: number
	occurrences: number
}

export const tasks: Writable<Task[]> = writable([
	{
		id: 1,
		task_name: 'Water Intake',
		enabled: false,
		completed_today: false,
		group: 'Health',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 2,
		task_name: 'Food Intake',
		enabled: false,
		completed_today: false,
		group: 'Health',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 3,
		task_name: 'Exercise',
		enabled: false,
		completed_today: false,
		group: 'Health',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 4,
		task_name: 'Meditation',
		enabled: false,
		completed_today: false,
		group: 'Mindfulness',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 5,
		task_name: 'Reflection',
		enabled: false,
		completed_today: false,
		group: 'Mindfulness',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 6,
		task_name: 'Socializing',
		enabled: false,
		completed_today: false,
		group: 'Mindfulness',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 7,
		task_name: 'Lectures',
		enabled: false,
		completed_today: false,
		group: 'Academics',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 8,
		task_name: 'Study/Homework',
		enabled: false,
		completed_today: false,
		group: 'Academics',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 9,
		task_name: 'Leetcode',
		enabled: false,
		completed_today: false,
		group: 'Academics',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 10,
		task_name: 'Laundry',
		enabled: false,
		completed_today: false,
		group: 'Chores',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 11,
		task_name: 'Cleaning',
		enabled: false,
		completed_today: false,
		group: 'Chores',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 12,
		task_name: 'Trash Disposal',
		enabled: false,
		completed_today: false,
		group: 'Chores',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
])

// updated to user's version on load if there exists
export const toggle_task = (id: number) => {
	tasks.update((tasks) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, enabled: !task.enabled }
			}
			return task
		})
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))
		return updatedTasks
	})
}

export const toggle_completed_today = (id: number) => {
	tasks.update((tasks) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, completed_today: !task.completed_today }
			}
			return task
		})
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))
		return updatedTasks
	})
}

export const get_details = () => {
	// get associated categories
	// basically a big detailed summary of users progress
	// get dictionary of the values from the groups
	let all_tasks = get(tasks);

	let health_total: number = 0.00001;
	let mind_total: number = 0.00000001;
	let academ_total: number = 0.000000001;
	let chores_total: number = 0.00000001;
	let health_comp: number = 0;
	let mind_comp: number = 0;
	let academ_comp: number = 0;
	let chores_comp: number = 0;
	// tasks in each category / tasks completed 
	all_tasks.forEach(element => {
		console.log(element)
		if (element.enabled) {
			if (element.group === "Chores") {
				chores_total += 1;
				if (element.completed_today) {
					chores_comp += 1
				}
			}
			if (element.group === "Mindfulness") {
				mind_total += 1;
				if (element.completed_today) {
					mind_comp += 1
				}
			}
			if (element.group === "Academics") {
				academ_total += 1;
				if (element.completed_today) {
					academ_comp += 1
				}
			}
			if (element.group === "Health") {
				health_total += 1;
				if (element.completed_today) {
					health_comp += 1
				}
			}
		}

	});
	console.log('health', health_total)
	console.log( {
		health: health_comp / health_total,
		mind: mind_comp / mind_total,
		academic: academ_comp / academ_total,
		chores: chores_comp / chores_total
	})
	let health_avg =(health_comp / health_total) || 0
	let mind_avg = mind_comp / mind_total || 0
	let academic_avg = academ_comp / academ_total || 0
	let chore_avg =chores_comp / chores_total || 0
	return {
		health: health_avg || 0, 
		mind: mind_avg || 0,
		academic: academic_avg || 0,
		chores: chore_avg || 0
	}










}
