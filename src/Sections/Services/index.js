import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import TextBlock from "../../components/TextBlock";


// SECTION AREA STYLE 
const ServiceSection = styled.section`
  width: 100vw;
  background-color: #0a0b10; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  justify-content: center;
  position: relative;
  // padding-top: 10rem;
`;

const Content = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  margin: 5rem 5rem;
  /* margin-bottom: 10rem; */
  position: relative;
  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }
  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }
  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;


const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];


  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  
  return (                                                                  
    <ServiceSection id="services">

      <Content ref={addToRefs}>
        <TextBlock
          topic="Vision"
          title={<h5>promoting impactful leadership through service and enhancing leadership capital for wealth creation and management. Empowering the youth with soft skills to keep track with the evolving technology and breaking all barriers and enhancing economic growth and development in Africa and globally.</h5>}
        />
      </Content>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Mission"
          title={<h5>To be the leading Pan African Organization/Movement for mentorship, raising standards of leadership globally and fighting political apathy among youths, marginalization and raising awareness for African youths involvement in politics, encouraging them to register and vote during elections, run for office, support youth friendly policies and encourage youth participation in governance. And to breach the gap of impactful leadership and leadership deficit globally. Youth empowerment through leadership skills and mentorship required for effective leadership, economic growth and development.</h5>}
        />
      </Content>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Call for action"
          title={<h5>As a true leader is crucial to note that you’re elected or appointed to serve and not to be served. Only when that is achieved we can now task the followers to be law abiding citizens and to respect constituted Authority.</h5>}
        />
      </Content>



    </ServiceSection>
  );
};

export default Services;