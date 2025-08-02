function Pendinglist() {
    const pending = ["buying coins","levelup"];

    return (
        <div>
            <h2> Pending Tasks</h2>
            {pending.map((value, index) => (
                <h3
                    key={index}>
                    {index + 1}. {value}
                </h3>
            ))}
        </div>
    );
}

export { Pendinglist };




