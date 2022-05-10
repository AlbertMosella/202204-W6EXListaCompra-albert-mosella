import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const StyledArticleName = styled.span`
  flex: 100;
`;

const StyledCheckboxContainer = styled.div`
  flex: 0 20px;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
  }
`;

const StyledPrice = styled.span`
  flex: 0 105px;
`;

const StyledArticle = styled.li`
  font-size: 20px;

  a,
  a:hover {
    color: inherit;
  }

  .icon {
    flex: 0 60px;
    font-size: 24px;
  }
`;

const Item = ({ price, name }) => {
  return (
    <StyledArticle className="row">
      <StyledCheckboxContainer className="col">
        <input type="checkbox" />
      </StyledCheckboxContainer>
      <StyledArticleName className="px-0 col">{name}</StyledArticleName>
      <StyledPrice className="col">{price}€</StyledPrice>
      <a href="delete-article" className="col">
        <FaTimes className="icon" />
      </a>
    </StyledArticle>
  );
};

export default Item;
