import { ChannelData } from '@/types/youtube'

export const channels: ChannelData[] = [
  {
    id: "UCExYsiiDrrCoE1LmFmKFj-A",
    title: "English Learners",
    description: "Master English grammar, vocabulary, and writing skills through our detailed video lessons.",
    featuredVideo: {
      videoId: "L7Ni1FTQ_OM",
      title: "Haunted Houses | Henry Wadsworth Longfellow | English Learners",
      views: "5.1K",
      duration: "17:25"
    },
    url: "https://www.youtube.com/@englishlearnersyt",
    theme: {
      primary: "#ae8fc6",
      background: "transparent"
    }
  },
  {
    id: "UCjsgJeVw8QEWbtT_kDqsJFg",
    title: "Literaree",
    description: "Your comprehensive guide for Literature studies. We cover all Indian educational boards (CISCE, CBSE, NIOS) and competitive exams, ensuring you excel in your literature journey.",
    featuredVideo: {
      videoId: "n5dSwmdPAMU",
      title: "Miracle Plays, Morality Plays and Interludes | Explained | Literaree",
      views: "6K",
      duration: "3:51"
    },
    url: "https://www.youtube.com/@literaree",
    theme: {
      primary: "var(--literaree-primary)", 
      background: "#ffffff10"
    }
  }
]
