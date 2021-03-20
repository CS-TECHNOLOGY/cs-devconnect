import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import React from "react";

const CoreBox = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = () => {
    setExpanded(!expanded);
  };
  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      className="cs-core-box"
    >
      <AccordionSummary expandIcon={<i class="fi-rr-angle-down cs-s-1"></i>}>
        <div className="cs-core-header">
          <div>
            <h4>POST</h4>
            <div>www.url/endpoint</div>
          </div>

          <div className="cs-core-right">
            <dir className="cs-core-member">
              <a className="cs-core-avt" href>
                <img alt="" src="https://source.unsplash.com/random" />
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                >
                  <path d="m5 1a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2h-1v5h-10v-5h-1a1 1 0 0 1 -1-1zm2 8v10a5 5 0 0 0 10 0v-10z" />
                </svg>
              </a>
              <a className="cs-core-avt" href>
                <img alt="" src="https://source.unsplash.com/random" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z" />
                  <path d="M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z" />
                </svg>
              </a>
              <a className="cs-core-avt" href>
                <img alt="" src="https://source.unsplash.com/random" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M1.327,12.4,4.887,15,3.535,19.187A3.178,3.178,0,0,0,4.719,22.8a3.177,3.177,0,0,0,3.8-.019L12,20.219l3.482,2.559a3.227,3.227,0,0,0,4.983-3.591L19.113,15l3.56-2.6a3.227,3.227,0,0,0-1.9-5.832H16.4L15.073,2.432a3.227,3.227,0,0,0-6.146,0L7.6,6.568H3.231a3.227,3.227,0,0,0-1.9,5.832Z" />
                </svg>
              </a>
              <a className="cs-core-plus" href>
                <span>+10</span>
              </a>
            </dir>
            <i class="fi-rr-pencil cs-icon"></i>
            <div className="cs-core-comment">
              <i class="fi-rr-comment-alt cs-icon"></i>
              <span>10</span>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <p>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </p>
      </AccordionDetails>
    </Accordion>
  );
};

export default CoreBox;
