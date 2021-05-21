import {DefaultLanding} from "../components/defaultLanding";

export default function Home() {
  const main_page = process.env.MAINPAGE_ID
  if (main_page) {
    return (
        <></>
    )
  }
  return (
      <DefaultLanding/>
  )
}
