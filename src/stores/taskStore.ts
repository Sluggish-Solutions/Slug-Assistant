import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'
// import { localStorageStore } from '@skeletonlabs/skeleton'
export const curr_user_id = writable('')
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
		task_name: 'Meditation',
		enabled: true,
		completed_today: false,
		group: 'Health',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 2,
		task_name: 'Exercise',
		enabled: true,
		completed_today: false,
		group: 'Health',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 3,
		task_name: 'Food Intake',
		enabled: true,
		completed_today: false,
		group: 'Health',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 4,
		task_name: 'Water Intake',
		enabled: true,
		completed_today: false,
		group: 'Mindfulness',
		last_updated: `${Date.now()}`,
		success: 0,
		occurrences: 0,
	} as Task,
	{
		id: 5,
		task_name: 'Reflection',
		enabled: true,
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
				return {
					...task,
					enabled: !task.enabled,
				}
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
				return {
					...task,
					completed_today: !task.completed_today,
					success: task.completed_today ? task.success - 1 : task.success + 1,
					last_updated: `${Date.now()}`,
				}
			}
			return task
		})
		localStorage.setItem('tasks', JSON.stringify(updatedTasks))
		return updatedTasks
	})
}

export const get_details = (id: number) => {
	// get associated categories
	// basically a big detailed summary of users progress
}
