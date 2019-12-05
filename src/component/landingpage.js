import React from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends React.Component {
  render() {
    return (
      <div className="land-page">
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://lh3.googleusercontent.com/E2TP3-D75aIWEVErLzsJHjklI4m3eeTg1SBxA2x-BrXYIjWeb0RklyDQlhvKOpk2Phdq_PI0OKVTL39httak6u2Qbxargifjf9uoEwr-M_GF2yrc7N3KJ2ZBtagQSJRGRvNSNigx_4XuyLm05KKNiQkvODkPUaI2Ar97yAJEh2_IAcquPuWg3FjOjmpZA7UFujhzDi_NxSM3YMLKL_lMsZU1T4flAVvLr47U7aZOIfcrD3Xmf-eB2AYss5i9_faEICiBLjRTOtYj-a_66aD7YPN3bs9tyHKH2PfwRGVixh2Al2Hja_WnSq6CLcAwF1zmffegKOEDed0zyyZVG7UMKr39y114gMLtRhQZ3d6qURPkCOtFpzd0d2alQZ1vbP7R1zoxMAbcfKUI6cFGHFFCtVdRJhNEdaJilQEXYvlQ6rOKGW2GM4gd1T50xFyjMVGeE4gI-nnmNahBc2ueB3y8QCtGG7HtcISrnT-pMwzplkXEmpw7Rw_QJRNq9g8r-PyiuVRgwHSPnWSlW0kL6egNBesq6NQ4LO_R36nUXW2B2PHBYfFsICtvdhXNgsGRKA4xqnvNgBUcVDYtrC7XPTZNkYFuRD5GCFk6brJFL2Y67oOAvCpmGXKYFWuw_bw9owcpDtxnNw5wViWsIXx-uA-DMOZlrtOfBEk2yARsDGhfcGw-OR04muiF3Wc=s897-no"
              alt="my photo"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Yi-An Chang</h1>
              <hr />
              <p>html|css|JavaScript|React|Pyhon|C#|.NET</p>
              <div className="social-link">
                {/* linedin */}
                <a
                  href="https://www.linkedin.com/in/yi-an-andy-chang-53649bb3"
                  rel="noopener noreferrer "
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                {/* github */}
                <a
                  href="https://github.com/yianchang1993"
                  rel="noopener noreferrer "
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
