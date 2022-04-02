import React from "react"
import FileView from "../src/frontend/files/FileView"
import readDirectory from "../src/backend/readDirectory"

export default function Index(props) {
  return <FileView {...props} />
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
