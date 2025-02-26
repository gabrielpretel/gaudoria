import { BookContext } from "@/core/providers";
import { useContext, useRef } from "react";
import { css } from "@emotion/react";
import { BookMetadata } from "../book-content/components";

const chargeBookSection = css`
  display: grid;
  grid-template-columns: 20% 20% 60%;
  gap: 10px;
`;

const chargeForm = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #1475cf;
  cursor: pointer;
  border-radius: 5px;
`;

const metadata = css`
  border-radius: 5px;
`;

export const ChargeBook: React.FC = () => {
  const { handleFileChange, coverImage, opfDocument } = useContext(BookContext);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  return (
    <section css={chargeBookSection}>
      <form onClick={onClick} css={chargeForm}>
        <input
          type="file"
          accept=".epub"
          onChange={handleFileChange}
          hidden
          ref={inputFileRef}
        />
      </form>
      <section className="uploaded-row">
        <img src={coverImage} />
      </section>
      <div css={metadata}>
        {opfDocument && <BookMetadata opfDoc={opfDocument} />}
      </div>
    </section>
  );
};
