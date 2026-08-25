interface TitleType {
    title: string;
};

const BreadcrumbThree = ({ title }: TitleType) => {
    return (
        <div className="breadcumb-wrapper background-image" style={{ backgroundImage: `url(/assets/img/bg/breadcumb-bg1-9.jpg)` }}>
            <div className="container">
                <div className="breadcumb-content">
                    <h1 className="breadcumb-title">{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default BreadcrumbThree
