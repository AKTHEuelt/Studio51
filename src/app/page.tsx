"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useState, useEffect } from "react"; // Import React hooks
import Toolbar from "../components/Toolbar";
import Waveform from "../components/WaveForm";

// --- PAGE STYLES AND COMPONENTS ---

const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("/Image/Studio51.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #121212;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(18, 18, 18, 0.7);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 3;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const HeroSection = styled.section`
  min-height: 60vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const HeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  gap: 2rem;
`;

const Section = styled.section`
  min-height: 60vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

// NEW: Animation for the blinking cursor
const blink = keyframes`
  50% { opacity: 0; }
`;

// NEW: Styled component for the cursor
const Cursor = styled.span`
  animation: ${blink} 1s step-end infinite;
  color: #ff9800; /* Orange cursor */
`;

const Title = styled.h1`
  color: #ffffff;
  background-color: #000000;
  padding: 0.5rem 1rem;
  font-size: 6rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  /* Add a min-height to prevent layout shifts when text is empty */
  min-height: 100px; 
  display: inline-flex;
  align-items: center;

  @media (max-width: 768px) { 
    font-size: 4rem; 
    min-height: 70px;
  }
  @media (max-width: 480px) { 
    font-size: 2.5rem; 
    min-height: 50px;
  }
`;

const SubTitle = styled.h2`
  color: #ffffff;
  background-color: #000000;
  padding: 0.5rem 1rem;
  font-size: 4.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) { font-size: 3rem; }
  @media (max-width: 480px) { font-size: 2rem; }
`;

const ContentContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #333;
  padding: 1rem;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: 0.5rem;
`;

const ContentWord = styled.span`
  color: #ffffff;
  line-height: 1.4;
  display: inline-block;
  transition: color 0.3s ease;
  font-size: 2.5rem;
  padding: 0 0.25rem;

  &:hover {
    color: #ff9800;
  }

  @media (max-width: 768px) { font-size: 2rem; }
  @media (max-width: 480px) { font-size: 1.5rem; }
`;

const ImageGalleryContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const GalleryImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(255, 152, 0, 0.3);
  }

  img {
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const galleryImages = [
  { src: '/Grupper/1.jpg', alt: 'A wide view of the music studio' },
  { src: '/Grupper/2.jpeg', alt: 'Close-up of a mixing desk' },
  { src: '/Grupper/3.jpeg', alt: 'Artist performing live at Studio 51' },
  { src: '/Grupper/4.jpg', alt: 'Musicians collaborating on a song' },
  { src: '/Grupper/5.jpeg', alt: 'Inside the vocal recording booth' },
  { src: '/Grupper/6.jpeg', alt: 'Music production equipment' },
  { src: '/Grupper/7.jpg', alt: 'Music production equipment' },
  { src: '/Grupper/8.png', alt: 'Music production equipment' },
];

const KeywordsContainer = styled(ContentContainer)``;

interface KeywordProps {
  style: {
    fontSize: string;
  };
}

const Keyword = styled.span<KeywordProps>`
  color: #ffffff;
  line-height: 1.4;
  display: inline-block;
  transition: color 0.3s ease;
  padding: 0 0.25rem;

  &:hover {
    color: #ff9800;
  }

  @media (max-width: 768px) {
    font-size: ${({ style }) => `calc(${style.fontSize} * 0.8)`};
  }
  @media (max-width: 480px) {
    font-size: ${({ style }) => `calc(${style.fontSize} * 0.6)`};
  }
`;

const Footer = styled.footer`
  background-color: #ff9800;
  padding: 1rem;
  color: #000000;
  font-size: 2rem;
  text-align: center;

  @media (max-width: 768px) { font-size: 1.5rem; }
  @media (max-width: 480px) { font-size: 1.2rem; }
`;

// --- DATA FOR STUDIO 51 ---

interface WordItem {
  word: string;
  size: string;
}

const homeWords: WordItem[] = [
  { word: "studio 51", size: "2.5rem" }, { word: "musikk", size: "2.0rem" }, { word: "kreativitet", size: "1.8rem" }, { word: "fellesskap", size: "2.2rem" }, { word: "mestring", size: "1.7rem" }, { word: "bærum kommune", size: "2.3rem" },
];
const aboutWords: WordItem[] = [
  { word: "rap clinic", size: "2.5rem" }, { word: "innspilling", size: "2.0rem" }, { word: "tekstskriving", size: "1.9rem" }, { word: "musikkproduksjon", size: "2.3rem" }, { word: "mental helse", size: "1.8rem" }, { word: "rusmestring", size: "1.7rem" }, { word: "kreativt uttrykk", size: "2.2rem" }, { word: "inkludering", size: "2.0rem" }, { word: "ungdom", size: "1.9rem" }, { word: "veiledning", size: "2.1rem" }, { word: "recovery", size: "1.8rem" }, { word: "sandvika", size: "2.0rem" }, { word: "kultur", size: "1.9rem" }, { word: "nettverksbygging", size: "2.2rem" }, { word: "lydteknikk", size: "1.7rem" }, { word: "samarbeid", size: "1.8rem" },
];
const eventsWords: WordItem[] = [
  { word: "musikkstudio", size: "2.5rem" }, { word: "konserter", size: "2.4rem" }, { word: "podkaster", size: "2.3rem" }, { word: "gaming", size: "2.2rem" }, { word: "gitarkurs", size: "2.1rem" }, { word: "filming og redigering", size: "2.5rem" }, { word: "grafisk design", size: "2.2rem" }, { word: "fotball", size: "2.0rem" }, { word: "sjakk", size: "1.9rem" }, { word: "IT-støtte", size: "1.8rem" }, { word: "golf", size: "1.7rem" },
];
const contactWords: WordItem[] = [
  { word: "kontakt oss", size: "2.5rem" }, { word: "91773008", size: "2.0rem" }, { word: "studio 51", size: "2.2rem" }, { word: "sandvika", size: "2.3rem" }, { word: "bærum kommune", size: "1.9rem" }, { word: "bli med", size: "1.8rem" },
];
const coreValues: WordItem[] = [
  { word: "mestring", size: "2.5rem" }, { word: "kreativitet", size: "2.3rem" }, { word: "samhold", size: "2.4rem" }, { word: "uttrykk", size: "2.2rem" }, { word: "respekt", size: "1.9rem" }, { word: "inkludering", size: "2.5rem" }, { word: "musikk", size: "2.0rem" }, { word: "recovery", size: "2.4rem" }, { word: "fellesskap", size: "2.1rem" }, { word: "håp", size: "1.8rem" }, { word: "stemme", size: "2.3rem" }, { word: "lidenskap", size: "1.9rem" }, { word: "talent", size: "2.2rem" }, { word: "vennskap", size: "2.1rem" }, { word: "trygghet", size: "2.4rem" }, { word: "inspirasjon", size: "2.0rem" }, { word: "utvikling", size: "2.3rem" }, { word: "selvtillit", size: "2.5rem" }, { word: "rytme", size: "1.9rem" }, { word: "tekst", size: "2.2rem" }, { word: "flow", size: "2.0rem" }, { word: "produksjon", size: "2.4rem" }, { word: "fremtid", size: "1.8rem" }, { word: "mot", size: "2.1rem" }, { word: "glede", size: "2.3rem" }, { word: "støtte", size: "2.5rem" }, { word: "lyd", size: "1.9rem" }, { word: "identitet", size: "2.2rem" },
].sort((a, b) => a.word.localeCompare(b.word, "no"));


export default function Home() {
  // NEW: State and logic for the typewriter effect
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const wordsToType = ["Studio 51", "Rap Clinic"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delay = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = wordsToType[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % wordsToType.length);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);


  return (
    <>
      <Toolbar />
      <PageContainer>
        <MainContent>
          <SectionContainer>
            <HeroSection id="home">
              <HeroContentWrapper>
                <Title>{text}<Cursor>|</Cursor></Title>
                <ContentContainer>
                  {homeWords.map((word, index) => (
                    <ContentWord key={index}>{word.word}</ContentWord>
                  ))}
                </ContentContainer>
                <Waveform />
              </HeroContentWrapper>
            </HeroSection>

            <Section id="about">
              <SubTitle>Om Oss</SubTitle>
              <ContentContainer>
                {aboutWords.map((word, index) => (
                  <ContentWord key={index}>{word.word}</ContentWord>
                ))}
              </ContentContainer>
            </Section>

            <Section id="events">
              <SubTitle>Arrangementer</SubTitle>
              <ContentContainer>
                {eventsWords.map((word, index) => (
                  <ContentWord key={index}>{word.word}</ContentWord>
                ))}
              </ContentContainer>
              
              <ImageGalleryContainer>
                {galleryImages.map((image, index) => (
                  <GalleryImageWrapper key={index}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </GalleryImageWrapper>
                ))}
              </ImageGalleryContainer>
            </Section>

            <Section id="contact">
              <SubTitle>Kontakt</SubTitle>
              <ContentContainer>
                {contactWords.map((word, index) => (
                  <ContentWord key={index}>{word.word}</ContentWord>
                ))}
              </ContentContainer>
            </Section>

            <Section id="values">
              <SubTitle>Våre Verdier</SubTitle>
              <KeywordsContainer>
                {coreValues.map((item, index) => (
                  <Keyword key={index} style={{ fontSize: item.size }}>
                    {item.word}
                  </Keyword>
                ))}
              </KeywordsContainer>
            </Section>
          </SectionContainer>
        </MainContent>
        <Footer>Kontakt oss: 91773008 | Studio 51 - Musikk, Fellesskap og Mestring</Footer>
      </PageContainer>
    </>
  );
}