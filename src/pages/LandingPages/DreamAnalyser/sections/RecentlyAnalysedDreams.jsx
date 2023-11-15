import * as React from "react";
import { memo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "src/components/MKBox";
import MKTypography from "src/components/MKTypography";

// Material Kit 2 React examples
import RecentlyAnalysedDreamCard from "src/components/Cards/RecentlyAnalysedDreamCard";
import PropTypes from "prop-types";

// Helpers
import { formatDate } from "/@//helpers";
import Skeleton from "../components/RecentlyAnalysedDreams";

const RecentlyAnalysedDreams = memo(function RecentlyAnalysedDreams({
  dreams,
  title,
  subtitle,
  setData,
}) {
  dreams.sort((a, b) => new Date(b.date) - new Date(a.date));

  const [hasMore, setHasMore] = React.useState(true);

  const fetchMoreData = () => {
    if (dreams.length >= 50) {
      setHasMore(false);

      return;
    }

    setTimeout(() => {
      setData(dreams.concat(dreams));
    }, 500);
  };

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 4 }}>
            <MKTypography variant="h3" color="white">
              {title}
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              {subtitle}
            </MKTypography>
          </Grid>
        </Grid>

        <InfiniteScroll
          dataLength={dreams.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Skeleton />}
          endMessage={
            <MKTypography color="white" sx={{ textAlign: "center" }}>
              Yay! You have seen it all
            </MKTypography>
          }
        >
          <Grid container spacing={3}>
            {dreams.map((dream, i) => (
              <Grid key={i} item xs={12} lg={6}>
                <MKBox mb={1}>
                  <RecentlyAnalysedDreamCard
                    query={dream.query}
                    date={{ color: "secondary", label: formatDate(dream.date) }}
                    response={dream.response}
                    context={dream.context}
                  />
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>

        <MKBox mt={2}>
          <MKTypography
            component="a"
            href="/pages/landing-pages/dream-analyser"
            variant="button"
            color="white"
            fontWeight="regular"
            sx={{
              width: "max-content",
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.5rem",
                transform: "translateX(3px)",
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: "translateX(6px)",
              },
            }}
          >
            View all your saved analysed dreams here
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </MKBox>
      </Container>
    </MKBox>
  );
});

RecentlyAnalysedDreams.propTypes = {
  dreams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      userId: PropTypes.string,
      date: PropTypes.string.isRequired,
      query: PropTypes.string.isRequired,
      response: PropTypes.string.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
};

export default RecentlyAnalysedDreams;
