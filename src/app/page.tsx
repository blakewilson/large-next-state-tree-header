import { FireServerAction, PopulateContextButton, RedirectToOtherPage } from "./buttons";

export default function Home() {
  return (
    <>
      <div>
        <PopulateContextButton />
      </div>

      <div>
        <RedirectToOtherPage />
      </div>
    </>
  )
}
