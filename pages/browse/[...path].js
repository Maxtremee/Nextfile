import React from "react"
import path from "path"
import Nextfile from "../../src/frontend/Nextfile"
import readDirectory from "../../src/backend/readDirectory"

export default function Path(props) {
  return <Nextfile {...props} />
}

export async function getServerSideProps(context) {
  const { locales } = context
  const { path: filePath } = context.params
  const files = await readDirectory(path.join(...filePath), true, locales)

  return {
    props: {
      files,
    },
  }
}
