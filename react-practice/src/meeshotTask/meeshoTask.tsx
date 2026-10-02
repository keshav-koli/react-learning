import meeshoCss from './meeshoCss.module.css'
export const MeeshoProject = ({ heading, data }:{heading:string,data:[]}) => {
    console.log(data);

    return (
        <>
            <div className={meeshoCss.heading}>{heading}</div>
            <div className={meeshoCss.box}>
                {data.map((val: any, idx: any) => {
                    return <div key={idx} className={meeshoCss.container}>
                        <img src={val.image} className={meeshoCss.item_image} />
                        <div className={meeshoCss.title_div}>
                            <span className={meeshoCss.title}>{val.title}</span>
                        </div>
                        <div className={meeshoCss.Price}>₹{val.price} <span className={meeshoCss.Price}>Onwards</span></div>
                        <div>Free Delivery</div>
                        <div className={meeshoCss.rate}>
                            <div className={val.ratings > 3.5 ? meeshoCss.greenRating : meeshoCss.yellowRating}>{val.ratings}</div>
                            <div className={meeshoCss.review}>{val.reviews}</div>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}