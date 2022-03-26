import React from "react"
import path from "path"
import Nextfile from "../src/frontend/Nextfile"
import readDirectory from "../src/backend/readDirectory"

export default function Path(props) {
  return <Nextfile {...props} />
}

export async function getServerSideProps({ locale, params }) {
  const { path: filePath } = params
  const files = await readDirectory(path.join(...filePath), true)

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
