import React from "react"
import Nextfile from "../src/frontend/Nextfile"
import readDirectory from "../src/backend/readDirectory"

export default function Index(props) {
  return <Nextfile {...props} />
}

export async function getServerSideProps({ locale }) {
  const files = await readDirectory("", true)

  return {
    props: {
      files,
      messages: {
        ...require(`../src/messages/shared/${locale}.json`),
        ...require(`../src/messages/layout/${locale}.json`),
        ...require(`../src/messages/files/${locale}.json`),
      },
    },
  }
}
