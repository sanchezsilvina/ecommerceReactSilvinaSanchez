import "./Item.css";

 const Item=({item})=>
{
    return (
    <div class="product-card mt-2 mb-2 ml-2 mr-2 d-inline-block">
		<div class="product-tumb">
			<img src={item.urlpicture} width='300px' height='300px' alt=""/>
		</div>
		<div class="product-details">
			<span class="product-catagory">{item.titulo}</span>
            <a href="">ver detalle</a>
			<div class="product-bottom-details">
				<div class="product-price" > $ {item.precio} </div>
			</div>
		</div>
	</div>
    )
}

export default Item