import { useDispatch, useSelector } from "react-redux";
import { buy, sell } from "./components/19-09-24tasks/toycomponents/toyslice";
import { Fragment, useEffect } from "react";
import { fetchPromises } from "./components/19-09-24tasks/productscomponts/productSlice";
import { addToCard, removeAllCard, removeFromCard } from "./components/19-09-24tasks/cardscomponents/cardSlice";

const App = () => {
  const toyData = useSelector((state) => state.toyData);
  const { card } = useSelector((state) => state.cardData);
  const { product } = useSelector((state) => state.productsData);

  console.log(card);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPromises());
  }, [dispatch]);

  const addHandler = (targetEach) => {
    dispatch(addToCard(targetEach));
  };

  const removeHandler =(targetEach)=>{
      dispatch(removeFromCard(targetEach))
  }

  const allRemoveHandler=()=>{
    dispatch(removeAllCard())
  }
  const style={border:"1px solid", display:"inline-block",margin:"3px", verticalAlign: "top",width:"240px",height:"250px"}
  const childStyle={height:"190px"}
  return (
   
    <>
    <h1>toy Counting....</h1>
      <h2>{toyData.toys ? toyData.toys : "No toys available"}</h2>
      <button onClick={() => dispatch(buy())}>buy</button>
      <button onClick={()=>dispatch(sell())}>sell</button>
      <br />
    
      {card.map((each, index) => (
        <div style={style} key={index}>
          <h2>{each.title}</h2>
          <button onClick={()=>removeHandler(each)}>remove card</button>
        </div>
      ))}
      <hr />
      <button onClick={allRemoveHandler}>Remove All</button>
      <hr />
      {product.map((each) => (
        <div style={style} key={each.id}>
          <div style={childStyle}>
          <h2>{each.title}</h2>
          </div>
          <div>
          <button onClick={() => addHandler(each)}>add to cart</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default App;
