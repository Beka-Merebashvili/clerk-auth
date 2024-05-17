import { TextRevealCardPreview } from "../snippet/TextRevealCardSnippet";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  // const { userId } = auth();
  const user = await currentUser();

  return (
    <div className="mt-10 text-start  mx-auto">
      {/* <h1 className="text-4xl font-bold">Welcome </h1>
      <ul className="list-none mt-10">
        <li className="mb-2">
          <span className="font-semibold">First Name:</span> {user?.firstName}
        </li>
        <li className="mb-2">
          <span className="font-semibold">Last Name:</span> {user?.lastName}
        </li>
        <li className="mb-2">
          <span className="font-semibold">Email:</span>{" "}
          {user?.emailAddresses[0].emailAddress}
        </li>
      </ul> */}
      <TextRevealCardPreview></TextRevealCardPreview>
    </div>
  );
}