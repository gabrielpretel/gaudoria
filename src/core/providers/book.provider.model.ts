export interface Chapter {
  title: string;
  content: string;
  href?: string;
}

export interface BookContextModel {
  fileCharged: File | undefined;
  setFileCharged: React.Dispatch<React.SetStateAction<File | undefined>>;
  chapters: Chapter[];
  setChapters: React.Dispatch<React.SetStateAction<Chapter[]>>;
  currentChapter: number;
  setCurrentChapter: React.Dispatch<React.SetStateAction<number>>;
  opfDocument?: Document | null;
  setOpfDocument: React.Dispatch<React.SetStateAction<Document | undefined>>;
  handleFileChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  coverImage: string | undefined;
  setCoverImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const initialBookContext: BookContextModel = {
  fileCharged: undefined,
  setFileCharged: () => {},
  chapters: [],
  setChapters: () => {},
  currentChapter: 0,
  setCurrentChapter: () => {},
  opfDocument: null,
  setOpfDocument: () => {},
  handleFileChange: async (
    event: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {},
  coverImage: "",
  setCoverImage: () => {},
};
