import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = () => {
    const categories = [
        {
          "id": 1,
          "title": "Hats",
          "imageUrl": "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": 2,
          "title": "Jackets",
          "imageUrl": "https://images.pexels.com/photos/7679798/pexels-photo-7679798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": 3,
          "title": "Sneakers",
          "imageUrl": "https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": 4,
          "title": "Womens",
          "imageUrl": "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          "id": 5,
          "title": "Mens",
          "imageUrl": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ]
    


    return (

        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>


    )
}

export default Directory;