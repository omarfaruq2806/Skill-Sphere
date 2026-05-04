import Hero from "@/components/homepage/Hero";
import Instructor from "@/components/homepage/Instructor";
import LearningTips from "@/components/homepage/LearningTips";
import NewCourse from "@/components/homepage/NewCourse";
import PopularCourse from "@/components/homepage/PopularCourse";
import Image from "next/image";
import { DiVim } from "react-icons/di";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <PopularCourse></PopularCourse>
      <LearningTips></LearningTips>
      <Instructor></Instructor>
      <NewCourse></NewCourse>
    </div>
  );
}
