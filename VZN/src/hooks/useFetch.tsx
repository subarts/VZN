import { useState, useEffect} from 'react'

type UseFetchProps<T> = {
	requestDeps: any[]
	requestFn: () => Promise<{ data: T }>
}

type UseFetchState<T> = {
	data: T | null
	isLoading: boolean
	isError: boolean
}

export const useFetch = <T,>({ requestDeps, requestFn }: UseFetchProps<T>): UseFetchState<T> => {
	const [request, setRequest] = useState<UseFetchState<T>>({
		data: null,
		isLoading: false,
		isError: false,
	})

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				setRequest(prev => ({ ...prev, isLoading: true }))
				const response = await requestFn()
				setRequest(prev => ({
					...prev,
					data: response.data,
					isLoading: false,
				}))
			} catch (error) {
				console.log(error)
				setRequest(prev => ({
					...prev,
					isLoading: false,
					isError: true,
				}))
			}
		}

		fetchPosts()
	}, [...requestDeps])

	return {
		data: request.data,
		isLoading: request.isLoading,
		isError: request.isError,
	}
}
