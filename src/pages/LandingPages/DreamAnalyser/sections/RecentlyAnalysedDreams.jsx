import * as React from "react";
import { memo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "src/components/MKBox";
import MKTypography from "src/components/MKTypography";

// Material Kit 2 React examples
import RecentlyAnalysedDreamCard from "src/components/Cards/RecentlyAnalysedDreamCard";
import PropTypes from "prop-types";

// Helpers
import { formatDate } from "/@//helpers";
import RecentlyAnalysedDreamCardSkeletonLoader from "components/SkeletonLoader/RecentlyAnalysedDreamCardSkeletonLoader";

const RecentlyAnalysedDreams = memo(function RecentlyAnalysedDreams({
  dreams,
  title,
  subtitle,
  handleDeleteDream,
}) {
  dreams.sort((a, b) => new Date(b.date) - new Date(a.date));

  const [loadedDreams, setLoadedDreams] = React.useState(8);
  const [hasMore, setHasMore] = React.useState(true);

  const fetchMoreData = () => {
    if (loadedDreams >= dreams.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setLoadedDreams(loadedDreams + 4);
    }, 200);
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
          dataLength={loadedDreams}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<RecentlyAnalysedDreamCardSkeletonLoader />}
          endMessage={
            <MKTypography color="white" sx={{ textAlign: "center" }}>
              All your saved dreams have been loaded ☁️
            </MKTypography>
          }
        >
          <Grid container spacing={3}>
            {dreams.slice(0, loadedDreams).map((dream, i) => (
              <Grid key={i} item xs={12} lg={6}>
                <MKBox mb={1}>
                  <RecentlyAnalysedDreamCard
                    query={dream.query}
                    date={{ color: "secondary", label: formatDate(dream.date) }}
                    response={dream.response}
                    context={dream.context}
                    handleDeleteDream={() => {
                      if (confirm("Are you sure you want to delete this dream record forever?")) {
                        handleDeleteDream(dream.id);
                      }
                    }}
                  />
                </MKBox>
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
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
  handleDeleteDream: PropTypes.func.isRequired,
};

export default RecentlyAnalysedDreams;
