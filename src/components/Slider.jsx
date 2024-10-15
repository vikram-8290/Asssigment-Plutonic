import { Button } from "antd"
;
const Slider = () => {
    return (
        <div className="slider">
            <div className="content">
                <h1>Buy Best Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="btn">
                    <Button  type="primary" size={"large"} >Shop Now</Button>
                    <Button size="large">Learn More</Button>
                </div>
            </div>
            <div className="img-slider">
                <img src = 'https://media.istockphoto.com/id/1309392405/vector/fashion-models-in-design-clothes-vector-hand-drawn-illustration-woman-in-stylish-dress-set.jpg?s=612x612&w=0&k=20&c=rfz5yumfjRXGsj3OWvQo14uZ3FvEm_PNA5S5Y4cBUAs=' alt="img" />
            </div>
        </div>
    );
};

export default Slider;