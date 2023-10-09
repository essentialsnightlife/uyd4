import * as React from "react";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";

function BackgroundDivider() {
  const bgImage =
    "https://images.unsplash.com/photo-1585975438803-350463f9c9b6?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1867&amp;q=80";

  return (
    <MKBox component="section">
      <MKBox
        mx={-2}
        minHeight="18.75rem"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
        }}
      />
    </MKBox>
  );
}

export default BackgroundDivider;
