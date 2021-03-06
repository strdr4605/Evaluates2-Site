import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import mediaQuery from '../../utils/mediaQuery';
// import WhyPairProgrammingVideo from '../img-components/why-pair-programming.vid';
// import Video from '../generic-reusable-components/video'

const VideosBlock = styled.div`
  flex-direction: column;
  background-color: #000032;
  padding-right: 2vw;
  padding-left: 2vw;
  padding-top: 4vw;
  display: flex;
  position: relative;
  h1 {
    color: white !important;
    font-size: 6vw;
    line-height: 11vw;
    padding-left: 2.5vw;
    letter-spacing: 0.5px;
    font-family: 'e2-Raleway-Extra-Bold';
    margin-bottom: 30px;
  }
  .wrap-videos {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    ${mediaQuery.maxTablet} {
      flex-direction: column;
    }
  }
  .video-wrapper {
    display: block;
    margin: 5px 10px;
    min-height: 18vw;
    min-width: 30vw;
    transition: transform 0.2s ease, box-shadow 0.2s ease,
      -webkit-transform 0.2s ease;
    ${mediaQuery.maxTablet} {
      min-width: 90vw;
    }
  }
`;

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <VideosBlock>
        <div>
          <h1>Videos</h1>
        </div>
        <div className="wrap-videos">
          <div className="video-wrapper">
           
            <iframe
              width="100%"
              height="270px"
              src="https://www.youtube.com/embed/GN_SI5wehAw"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

            <div className="video-wrapper">
            <iframe
              width="100%"
              height="270px"
              src="https://www.youtube.com/embed/Y1_DCigouRo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="video-wrapper">
            <iframe
              width="100%"
              height="270px"
              src="https://www.youtube.com/embed/xYq3LMDq8G8"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </VideosBlock>
    );
  }
}

export default Videos;
