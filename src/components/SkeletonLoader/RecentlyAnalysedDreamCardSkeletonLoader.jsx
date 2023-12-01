import * as React from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import { Card, Grid, Skeleton } from "@mui/material";

function RecentlyAnalysedDreamCardSkeletonLoader({ context }) {
  return (
    <Grid container spacing={3}>
      {Array.from({ length: 4 }, (_, index) => index + 1).map((n) => (
        <Grid key={n} item xs={12} lg={6}>
          <MKBox mb={1}>
            <Card sx={{ mt: 3 }}>
              <Grid container>
                <Grid item xs={12} md={12} lg={12} xl={12} sx={{ my: "auto" }}>
                  <MKBox
                    pt={{ xs: 1, lg: 2.5 }}
                    pb={1.5}
                    pr={4}
                    pl={{ xs: 4, lg: 1 }}
                    lineHeight={1}
                  >
                    <Skeleton
                      height={30}
                      sx={{ marginBottom: 1, width: { xs: "70%", sm: "40%", md: "30%" } }}
                    />

                    <Skeleton height={30} width="80%" />

                    {context && <Skeleton height={25} width="30%" />}

                    <Skeleton height={30} width="40%" sx={{ marginTop: 2, marginBottom: 1 }} />

                    <Skeleton variant="circular" width={30} height={30} />
                  </MKBox>
                </Grid>
              </Grid>
            </Card>
          </MKBox>
        </Grid>
      ))}
    </Grid>
  );
}

RecentlyAnalysedDreamCardSkeletonLoader.propTypes = {
  context: PropTypes.string,
};

export default RecentlyAnalysedDreamCardSkeletonLoader;
