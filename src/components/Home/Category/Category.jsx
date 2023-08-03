import "./Category.scss";

const Category = ({ categories }) => {
    return (
        <div className="shop-by-catecategory">
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category"
                    >
                        <img
                            src={
                                process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data.attributes.url
                            } alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;