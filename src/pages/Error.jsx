import { useRouteError } from "react-router-dom";

export default function Error() {
	const error = useRouteError();
	console.error(error);

	return (
		<div
			id="error-page"
			className="flex h-full flex-col items-center justify-center "
		>
			<div className="rounded-lg border p-4 shadow">
				<h1 className=" text-m font-medium tracking-wide text-slate-700">
					Oops!
				</h1>
				<p className="font-light text-slate-700">
					Sorry, an unexpected error has occurred.
				</p>
				<p className="text-red-700">
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</div>
	);
}
