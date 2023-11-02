import * as React from "react";
import HeroAnalysedCard from "pages/LandingPages/DreamAnalyser/components/HeroAnalysedCard";
import team1 from "assets/images/team-5.jpg";
import MKBox from "components/MKBox";
import PropTypes from "prop-types";

function AnalyserResponse({ analysedDream, disabled = false, loading = false }) {
  const { query, response } = analysedDream;
  return (
    <MKBox>
      <HeroAnalysedCard
        disabled={disabled}
        loading={loading}
        analyserObj={{ query: query, response: response }}
        image={team1}
        badge={{ content: "new", color: "info" }}
        position={{ color: "info", label: "UI Designer" }}
      />
    </MKBox>
  );
}

AnalyserResponse.propTypes = {
  analysedDream: PropTypes.object,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default AnalyserResponse;
