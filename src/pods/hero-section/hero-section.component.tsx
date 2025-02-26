import { css } from "@emotion/react";
import { appWidth } from "@/common/css";
import heroImage from "@/common/assets/hero-test6.png";

const heroContainer = css`
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 280px;
  width: 100vw;
  border-bottom: 1px solid #e6e8eb;
  margin-bottom: 2em;
  background: url(${heroImage});
  background-color: #f8f4eb;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: right;
`;

const heroContent = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  max-width: ${appWidth};
`;

const heroTitleSection = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  padding: 20px;
`;

export const HeroSection: React.FC = () => {
  return (
    <section css={heroContainer}>
      <div css={heroContent}>
        <div css={heroTitleSection}>
          <small>Asistente de lectura</small>
          <h2>
            Transforma tu lectura en <br></br>una experiencia interactiva
          </h2>
        </div>
      </div>
    </section>
  );
};
