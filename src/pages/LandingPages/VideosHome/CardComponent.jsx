// React packages
import * as React from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";
import PropTypes from "prop-types";

function CardComponent({ cardData }) {
  const [data, setData] = useState(cardData);

  // Items to be displayed
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    // ...
  ];

  // Function for loading additional content
  const loadFunc = async () => {
    // Load additional content here...
    const newCardData = ["item 4", "item 5", "item 6"];
    if (data.length <= 20) {
      await setData((data) => [...data, ...newCardData]);
    }
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadFunc}
      hasMore={true || false}
      loader={
        <MKTypography variant="h2" color="red" className="loader" key={0}>
          Loading ...
        </MKTypography>
      }
    >
      {items.map((item, index) => (
        <MKTypography variant="h2" color="red" key={index}>
          {item}
        </MKTypography>
      ))}
    </InfiniteScroll>
  );
}

CardComponent.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.string),
};

export default CardComponent;
