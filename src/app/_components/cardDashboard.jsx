export function CardDashboard({props}) {
    return (
        <div className="w-3xs p-6 rounded-2xl text-white dark bg-blue-950 shadow-2xl">
            <div className="flex justify-between items-center">
                <p>{props.title}</p>
                {props.icon}
            </div>
            <p className="font-bold text-2xl">{props.count}</p>
            <p className="pt-4 text-sm text-gray-400">{props.descrition}</p>
        </div>
    )
}