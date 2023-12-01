import * as React from "react";
import HeroAnalysedCard from "pages/LandingPages/DreamAnalyser/components/HeroAnalysedCard";
import MKBox from "components/MKBox";
import PropTypes from "prop-types";

const analyserResponseImg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa";

function AnalyserResponse({ analysedDream, disabled = false, loading = false }) {
  const { query, response, context } = analysedDream;
  return (
    <MKBox>
      <HeroAnalysedCard
        disabled={disabled}
        loading={loading}
        analyserObj={{ query: query, response: response, context: context }}
        image={analyserResponseImg}
        badge={{ content: "new analysis", color: "info" }}
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
