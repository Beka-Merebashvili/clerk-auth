import { TextRevealCardPreview } from "../snippet/TextRevealCardSnippet";
import {  currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div className="mt-10 text-start  mx-auto">
  
      <TextRevealCardPreview></TextRevealCardPreview>
    </div>
  );
}