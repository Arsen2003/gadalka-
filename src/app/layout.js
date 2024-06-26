import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Ясновидящая ЛОЛА ',

  description:
    'На сайте "Ясновидящая Лола" вы найдете услуги ясновидения и гадания от опытной экспертки. Лола поможет вам разгадать тайны прошлого, настоящего и будущего через таро, гадание на картах, астрологию и интуитивные знания. Также предлагаются услуги любовных приворотов, раскрытия тайн вашей судьбы, снятия порчи, предсказывания будущего и обеспечения финансового достатка. ',
  keywords:
    'ясновидение, гадание, таро, астрология, интуитивные знания, любовные привороты, раскрытие тайн вашей судьбы, снятие порчи, предсказывание будущего, финансовый достаток,Ясновидящая Лола ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
