// "use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
} from "../../components/ui/text-reveal-card";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function TextRevealCardPreview() {
    const user = await currentUser();
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Welcome you to our site"
        revealText="We hope you enjoy here"
      >
        <TextRevealCardTitle className="text text-2xl">
          Hi {user?.firstName}
        </TextRevealCardTitle>
      </TextRevealCard>
    </div>
  );
}
