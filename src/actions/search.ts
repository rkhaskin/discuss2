import { redirect } from "next/navigation";

/*
  redirect user to a route with query param as entered on the form
*/
export async function search(formData: FormData) {
  const term = formData.get("term");

  if (!term || typeof term !== "string") {
    redirect("/");
  }

  redirect(`/search?term=${term}`);
}
