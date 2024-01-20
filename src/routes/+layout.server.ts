//@ts-expect-error getSession has any type since its inferred, not going to bother type hinting it lmfao
export const load = async ({locals: {getSession}}) => {
	return {
		session: await getSession(),
	}
}
