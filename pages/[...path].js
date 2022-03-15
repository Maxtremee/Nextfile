import React from "react"
import path from "path"
import Main from "../src/components/layout/Main"
import readDirectory from "../src/utils/readDirectory"

export default function Path(props) {
  return <Main {...props} />
}

export async function getServerSideProps(context) {
  const { locales } = context
  const { path: filePath } = context.params
  const files = await readDirectory(path.join(...filePath), true, locales)

  return {
    props: {
      files
    },
  }
}
