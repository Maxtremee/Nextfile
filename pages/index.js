import React from "react"
import FileGrid from "../src/components/FileGrid"
import readDir from "../src/utils/readDir"

export default function Index({ files, host }) {
  return <FileGrid files={files} host={host} />
}

export async function getServerSideProps(context) {
  const { locales, req } = context
  const { path } = req.url
  const { host } = req.headers
  const files = await readDir(path, locales)

  return {
    props: {
      files,
      host,
    },
  }
}
