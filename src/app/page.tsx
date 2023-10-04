import { redirect } from "next/navigation"

export default function Home() {
	redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ')

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			{/* <iframe src="http://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1" allow="autoplay"></iframe> */}
		</main>
	)
}
