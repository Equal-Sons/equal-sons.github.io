import CounterItem from '../counter/counter-item';

const counter_data = [
    {
        id: 1,
        number: 28,
        title: "Years of Experience",
        text: "+",
    },
    {
        id: 2,
        number: 160,
        title: "Total Completed Projects",
        text: "+",
    },
    {
        id: 3,
        number: 80,
        title: "Average Revenue Growth",
        text: "%",
    },
    {
        id: 4,
        number: 70,
        title: "Total Revenue Generated",
        text: "M",
    },
]

const FactTwo = () => {
    return (
        <div className="counter-area-2 space-bottom overflow-hidden bg-smoke">
            <div className="container">
                <div className="row gy-4 align-items-center justify-content-lg-between justify-content-center">
                    {counter_data.map((item) => (
                        <div key={item.id} className="col-xl-3 col-sm-6">
                            <div className="counter-card style2">
                                <h3 className="counter-card_number">
                                    <span className="counter-number"> <CounterItem min={0} max={item.number} /></span>{item.text}
                                </h3>
                                <h4 className="counter-card_title">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FactTwo
