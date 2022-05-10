import { useSelector } from "react-redux";
import styled from "styled-components";
import Item from "../Item/Item";

const StyledArticles = styled.ul`
  position: relative;
  padding-bottom: 20px;

  &:after {
    content: "";
    border-bottom: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    left: 15px;
    right: 15px;
  }
`;

const StyledTotal = styled.span`
  font-size: 20px;
`;

const List = () => {
  const shoppingList = useSelector((state) => state.shoppingList);

  return (
    <>
      <StyledArticles className="list-unstyled col-12"></StyledArticles>
      {shoppingList.map((item) => {
        return <Item key={item.id} price={item.price} name={item.name} />;
      })}
      <Item />
      <StyledTotal className="col-12 text-end">1.95€</StyledTotal>
    </>
  );
};

export default List;
