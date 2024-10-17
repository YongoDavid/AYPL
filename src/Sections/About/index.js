import styled, { keyframes } from "styled-components";


const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Main = styled.div`
  margin: 0 15rem;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  align-items: center;
  font-size: 2rem;
  display: inline-block;
`;


const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;


const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 2;
  color: var(--nav2);
`;

const AboutText = styled.div`
  width: 100%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 50%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Main>
        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* Listen to the cries of the common man */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
                {/* To renew or rekindle Hope to the masses leaders needs to lead by example. */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* Make positive policies targeted at addressing the ills in the society. */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* Make positive policies targeted at addressing the ills in the society. */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* Alleviate poverty in other to reduce crime. */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* Our leaders has to see themselves as humanitarian not as a VIP. */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* Our leaders have to be accountable to the masses. */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* Our leaders have to be responsible and selfless. */}
              </Text>
            </AboutText>
          </Content>
        </div>
        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* Our leaders must be diplomatic in there approach. */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* As a leader your confidence comes from impact made while in position. */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* As a good leader you put the people first. */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* As a leader you must be a wise and a good team player. */}
              </Text>
            </AboutText>
          </Content>
        </div>

        <div className="Section">
          <Content>
            <AboutText>
              <Text>
              {/* As a leader you must be Articulate and proactive. */}
              </Text>
            </AboutText>
          </Content>
        </div>


      </Main>
    </AboutSection>
  );
};

export default About;