import React from "react";

const Card = ({ header, children = "", footer = "" }) => {
	return (
		<div className="relative min-w-[350px] max-w-sm rounded-lg border shadow">
			<div className="p-4">
				<h1 className="text-left font-medium tracking-wide text-slate-700">
					{header}
				</h1>
			</div>
			<div className="font h-[350px] overflow-y-scroll border-y bg-slate-50 px-4 font-light text-slate-700">
				{children}
			</div>
			<div className="px-4 py-2 ">
				<p className="text-center text-xs font-medium tracking-wide text-slate-700">
					{footer}
				</p>
			</div>
		</div>
	);
};

export default Card;
