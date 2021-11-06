import "./ItemDetail.css";

 const ItemDetail=({item})=>
{

    console.log (item)
    return (
    <div class="product-card mt-2 mb-2 ml-2 mr-2 d-inline-block">
		<div class="product-tumb">
			<img src={item.urlpicture} width='500px' height='700px' alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">{item.titulo}</span>
			{/* <h4><a href="">Women leather bag</a></h4> */}
			<p>{item.descripcion}</p>
			<div class="product-bottom-details">
				<div class="product-price" > $ {item.precio} </div>
			</div>
            <div class="product-bottom-details">
				<div class="product-price" > Stock {item.stock} </div>
			</div>
		</div>
	</div>
    )
}

export default ItemDetail