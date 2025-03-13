import { FireServerAction, PopulateContextButton } from "./buttons";

export default function Home() {
  return (
    <>
      <div>
        <PopulateContextButton />
      </div>

      <div>
        <FireServerAction />
      </div>
    </>
  )
}
