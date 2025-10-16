export function CardDashboard({props}) {
    return (
        <div className="w-3xs p-6 rounded-2xl bg-white">
            <div className="flex justify-between items-center">
                <p>{props.title}</p>
                {props.icon}
            </div>
            <p className="font-bold text-2xl">{props.count}</p>
            <p className="pt-4 text-sm text-gray-700">{props.descrition}</p>
        </div>
    )
}